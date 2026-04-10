# Silk Ride — SEO, Performance & CDN Migration Plan

**Prepared:** 10 April 2026
**Scope:** `silk-ride-frontend` (Nuxt 4 + Sanity) — fix SEO regressions, raise mobile Lighthouse score, migrate off SSR-on-EC2 to a CDN-first architecture.

---

## 1. Executive summary

The site is a Nuxt 4 app running as a PM2 cluster on a single EC2 instance (`ecosystem.config.cjs` → `.output/server/index.mjs`, port 3012). PageSpeed Insights (mobile) returns **Performance 63, Accessibility 91, Best Practices 100, SEO 92**. The only SEO finding is three non-descriptive "Learn More" links on the services grid; performance is the real bottleneck and is dominated by TTFB from single-region SSR plus render-blocking third-party JS and fonts.

After auditing the codebase, **>95% of routes are fully static** — the only server-side data dependency is the blog (Sanity) and a single cached `/api/google-reviews` endpoint. This makes the site an excellent candidate for a static-first CDN migration. Two booking/customer flows use external iframes (EasyTaxi, chat4biz), so no Node runtime is needed for those on the origin.

**Recommendation:** migrate to **Cloudflare Pages** with Nuxt's Cloudflare preset (hybrid: prerendered static pages + edge-rendered blog + edge function for Google Reviews), or as an alternative, **`nuxt generate` → S3 + CloudFront** with a Sanity webhook triggering a rebuild. Both options kill the EC2 SSR bill, drop TTFB dramatically for global traffic, and preserve the current Nuxt + Sanity DX.

---

## 2. Current-state diagnosis

### 2.1 Stack observed

| Area | Finding |
|---|---|
| Framework | Nuxt 4.4.2, Vue 3.5, Tailwind 3.4, TypeScript |
| Modules | `@nuxtjs/seo`, `@nuxtjs/i18n` (en-GB / ru-RU), `@nuxt/image`, `@pinia/nuxt`, `nuxt-gtag`, `@nuxtjs/google-fonts` |
| CMS | Sanity (blog only) via `@sanity/client` + `useAsyncData` |
| Runtime | PM2 cluster, Node SSR (`.output/server/index.mjs`) on EC2:3012 |
| Prerendering | **Disabled** (`nitro.prerender.routes: []`) — every request hits SSR |
| 3rd-party JS | GA4 + Google Ads (nuxt-gtag), chat4biz widget, Facebook Pixel, Google Consent Mode v2, EasyTaxi booking iframe |
| Google Fonts | Playfair Display (400/500/700) + Open Sans (300/400/600) = 6 weights, `preload: true, inject: true` |
| i18n | Prefix strategy `prefix_except_default`, two locales |

### 2.2 SSR-dependency audit — can this site go static?

I searched the codebase for every server-side data hook (`useFetch`, `useAsyncData`, `$fetch`, `onServerPrefetch`, Sanity usage). Results:

| Route group | Data source | Can prerender? |
|---|---|---|
| `/`, `/about`, `/services/*` (6 pages), `/fleet`, `/airport-transfers/*`, `/destination-tours`, `/contact-us`, `/faq`, `/partners`, `/privacy-policy`, `/terms-of-service` | Pure i18n + static assets | **Yes — full SSG** |
| `/blog` and `/blog/[slug]` | Sanity via `useSanityQuery` (`pages/blog/index.vue`, `pages/blog/[slug].vue`) | **Yes — SSG with Sanity webhook** or ISR |
| `/booking`, `/customer` | External iframes (EasyTaxi, `eto-iframe-booking-widget`) — no Nuxt data fetching | **Yes — full SSG** |
| `/booking/cancel`, `/booking/success` | Excluded from sitemap; static shells | **Yes — full SSG** |
| `/api/google-reviews` | `server/api/google-reviews.get.ts` — Google Places API call with in-memory 6h cache | **Edge function** (or static JSON regenerated hourly) |
| `server/middleware/www-redirect.ts` | www → apex redirect | **CDN rule** |
| `middleware/redirect-en.global.ts` | Client redirect logic | Keep client-side |
| `nitro.routeRules` redirects | Already declarative (`/booking/customer` → `/customer`, `/our-partners` → `/partners`, etc.) | **CDN rule** |
| Sitemap `urls: async () => { ... fetch from Sanity ... }` | Runtime Sanity fetch | Move to build-time generation |

**Conclusion:** there is no per-request server logic that requires a persistent Node runtime. The site is a "mostly-static + Sanity CMS + one cacheable edge API" shape — the ideal CDN profile.

### 2.3 Why mobile perf is 63

Without running a synthetic trace I can identify the likely top contributors from the code:

1. **TTFB from single-region SSR** — EC2 Node is the origin for every request, no edge caching configured. Global users (and mobile networks) pay the full round-trip.
2. **Render-blocking font CSS** — 6 Google Font faces with `preload: true` and `inject: true` is heavy. Each weight is a separate file.
3. **Third-party JS on first load** — nuxt-gtag loads GA4 and Google Ads (`AW-16982457254`), plus Facebook Pixel (`facebook-pixel.client.js`), plus chat4biz widget, plus the EasyTaxi widget on `/booking`. All client-side, but parsed/executed on main thread and hurt TBT.
4. **Hero image** — `/images/vclassjett.webp` set to `loading="eager"` + `fetchpriority="high"` with `width="1920" height="1080"`. Good that it's prioritized, but dimensions should be audited against actual rendered size on mobile.
5. **CSS not code-split enough** — `vite.build.cssCodeSplit: true` is on, good. But Tailwind JIT purge needs to be verified for production build.
6. **`@nuxtjs/seo` and `nuxt-og-image`** — `ogImage: { enabled: false }` is set (good), but confirm the module isn't still shipping runtime weight.
7. **Payload extraction disabled** (`experimental.payloadExtraction: false`) — reasonable with SSR, but blocks one SSG optimization. Needs review during migration.

---

## 3. SEO fix — "Learn More" descriptive link text

### 3.1 Root cause

`components/Services/Card.vue` is the shared card used on the services grid. The link currently reads:

```vue
<NuxtLink :to="localePath(serviceDetailPath)" class="...">
  {{ t('pages.services.learnMore') }}
  <span class="sr-only"> - {{ t(`pages.services.cards.${card}.title`) }}</span>
</NuxtLink>
```

An `sr-only` span was added, and a `learnMoreLabel` computed already exists in the same file (lines 93–103) mapping each card to a descriptive label — **but it is defined and never used** (dead code). Lighthouse is still flagging the three links in English because the accessible-name concatenation is fragile across locales and some ATs, and the on-page visible text remains identical. The fix is to give every Learn More link an explicit, unique `aria-label`.

### 3.2 Fix

Wire the existing `learnMoreLabel` computed into the link and drive it from i18n so it works for both `en-GB` and `ru-RU`:

1. Add translation keys under `pages.services.cards.<card>.learnMoreLabel` in `i18n/locales/en.json` and `ru.json`, e.g.
   - `"learnMoreLabel": "Learn more about our airport transfer service"`
   - `"learnMoreLabel": "Узнать больше об услуге трансфера в аэропорт"`
2. Replace the `learnMoreLabel` computed to read from i18n:
   ```js
   const learnMoreLabel = computed(() =>
     t(`pages.services.cards.${props.card}.learnMoreLabel`)
   )
   ```
3. Apply as both `aria-label` on the link and remove the `sr-only` span:
   ```vue
   <NuxtLink
     :to="localePath(serviceDetailPath)"
     :aria-label="learnMoreLabel"
     class="..."
   >
     {{ t('pages.services.learnMore') }}
   </NuxtLink>
   ```

This gives each of the three flagged links a unique, localized accessible name without changing the visible design. Re-run PSI after deploy to confirm the audit passes and the SEO score moves from 92 → 100.

### 3.3 Sweep for similar issues while we're in there

- `grep -rn "Learn More\|Read More\|Click here"` across `components/` and `pages/` — catch any other generic CTAs.
- Audit NuxtLink usage for missing `aria-label` on icon-only links (nav, social footer).
- Verify `<img>` tags in `pages/about/index.vue` (line 49-53) and other non-`NuxtImg` raw `<img>` tags have descriptive `alt` text — one instance already uses a generic `"About Silk Ride"`.

---

## 4. Performance plan — mobile 63 → target ≥ 90

### 4.1 Instrument first, then cut

Before changing anything, capture a reproducible baseline:

1. Run PSI on `/`, `/services`, `/services/airport-transfers`, `/fleet`, `/blog`, `/booking` — mobile + desktop — and save the JSON reports.
2. Run `npm run build && npx nuxi analyze` to get the bundle analyzer output; save the treemap.
3. Run a local Lighthouse CI (`npx lhci autorun`) or WebPageTest run from a London 4G profile to compare against post-migration runs.
4. Check what the actual server TTFB looks like via `curl -w` against EC2 vs against `cloudfront.net` staging later.

### 4.2 Fixes that don't depend on the migration (ship these on EC2 first so SEO/perf lift is visible immediately)

1. **Prune Google Fonts weights** — drop to Playfair 400/700 and Open Sans 400/600 (4 faces, not 6). `display: swap` is already set — good. Consider self-hosting via `nuxt-google-fonts` `download: true` so fonts come from your own origin, avoiding a DNS lookup to `fonts.gstatic.com`.
2. **Defer non-critical 3rd-party JS.** Wrap `nuxt-gtag`, `facebook-pixel.client.js`, and `chat4biz.client.ts` in an idle-callback or interaction-triggered loader so they don't compete with LCP. Nuxt-gtag supports `loadingStrategy: 'async'` already; verify it's not initializing before first interaction.
3. **Consent Mode v2 audit.** `00.consent-mode.client.ts` runs before nuxt-gtag — confirm it is not a render blocker and that denied-consent users still get cookieless pings only, not the full GA bundle.
4. **Hero image dimensions.** Re-export `/images/vclassjett.webp` at the true rendered size for a 360-dp mobile viewport. Use `<NuxtPicture>` with explicit mobile `sizes="(max-width: 640px) 100vw, 1920px"` so Nuxt Image generates the right srcset.
5. **Remove dead code.** `learnMoreLabel` in `Services/Card.vue`, unused i18n keys, and any unused Pinia stores.
6. **Turn on `nitro.prerender` now for known-static routes** — this is the gateway to the migration. Add:
   ```ts
   nitro: {
     prerender: {
       crawlLinks: true,
       routes: ['/', '/sitemap.xml', '/robots.txt']
     }
   }
   ```
   Nuxt will crawl link graphs and pre-build HTML for every static route at `nuxt build` time. You can ship this on the current EC2 host first to prove it works.
7. **Tailwind production purge** — verify `tailwind.config.js` `content` globs cover `./components/**/*.{vue,js,ts}`, `./pages/**/*.vue`, `./app.vue` so the prod CSS is minimal.
8. **Swiper lazy import** — `components/Cars/GallerySlider.vue` is the only Swiper consumer. Confirm it's dynamically imported so Swiper's ~40 KB only loads on the Cars gallery route.

### 4.3 Post-migration perf gains (from CDN itself)

- TTFB drops from ~400–800 ms (London EC2) to ~30–80 ms (Cloudflare edge / CloudFront PoP).
- `Cache-Control: public, max-age=31536000, immutable` on all `/_nuxt/*` assets — automatic on Cloudflare Pages and easy on CloudFront.
- HTTP/3 + Brotli on by default at both Cloudflare and CloudFront.
- Image CDN: keep `@nuxt/image` with the `ipx` provider for build-time transforms, or switch to Cloudflare Images / CloudFront+Lambda@Edge for on-demand transforms.

### 4.4 Targets

| Metric | Current (mobile) | Target |
|---|---|---|
| Performance | 63 | ≥ 90 |
| LCP | (measure) | ≤ 2.5 s |
| TBT | (measure) | ≤ 200 ms |
| CLS | (measure) | ≤ 0.1 |
| TTFB | (measure) | ≤ 200 ms global p75 |
| SEO | 92 | 100 |
| Accessibility | 91 | ≥ 95 |

---

## 5. Migration — SSR-on-EC2 → CDN

### 5.1 Options evaluated

| Option | SSR model | Pros | Cons | Fit for Silk Ride |
|---|---|---|---|---|
| **A. Cloudflare Pages + Nuxt `cloudflare-pages` preset** | Hybrid: prerendered HTML + edge SSR for dynamic routes, Workers for the Google Reviews endpoint | Global edge, sub-50 ms TTFB worldwide, generous free tier, first-class Nuxt preset, Sanity CMS integrates cleanly via build hooks, automatic Brotli/HTTP3 | Workers has a 1 MB compressed bundle limit — Nuxt normally fits, but verify; image transforms require Cloudflare Images (paid) or keep `ipx` static | **Recommended** — best balance of perf, cost, and minimal codebase churn |
| **B. Static SSG (`nuxt generate`) + S3 + CloudFront** | Pure static, zero runtime. Blog rebuilds triggered by Sanity webhook → GitHub Actions → new deploy. Google Reviews becomes a Lambda@Edge or CloudFront Function | Cheapest, best raw perf, fewest moving parts at runtime, stays in AWS | Every blog post edit triggers a full rebuild (mitigated by incremental builds), need CI/CD pipeline, CloudFront Functions for redirects + Lambda@Edge for the Reviews API | **Strong alternative** if you want to stay in AWS and minimize runtime cost |
| **C. Vercel + Nuxt `vercel` preset** | Hybrid SSR/ISR on Vercel edge | Zero-config, ISR built in, image optimization included | More expensive at scale, Vercel's first-class framework is Next.js not Nuxt, vendor lock-in risk | Viable but not recommended given A and B are cheaper |
| **D. Keep EC2, add CloudFront in front** | SSR unchanged, CDN caches HTML with origin shield | Smallest change, fastest to ship | Still paying for EC2, TTFB on cache miss unchanged, cache invalidation on every deploy is messy | Use only as a **Phase 0 stop-gap** while preparing A or B |

### 5.2 Recommended path — Option A: Cloudflare Pages

Rationale: Nuxt has a mature Cloudflare preset, your Sanity CMS integrates with build hooks cleanly, the mix of static pages + one dynamic blog section + one cached API endpoint maps perfectly to Pages + Workers, and Cloudflare's free tier makes staging painless. You keep the existing codebase almost unchanged — it's a deploy-target swap.

Concrete changes required in the Nuxt codebase:

1. **Add the preset** — set `NITRO_PRESET=cloudflare-pages` in the build environment (or `nitro.preset = 'cloudflare-pages'` in `nuxt.config.ts`).
2. **Enable prerendering** — extend `nitro.prerender.routes` to include all static routes, or set `crawlLinks: true` and seed with `/` + `/ru`.
3. **Move `/api/google-reviews` to a Worker** — it's already written as a Nitro `defineEventHandler`, and Nitro's `cloudflare-pages` preset compiles Nitro server routes into Workers functions automatically. The 6h in-memory cache needs to become Cloudflare KV or Cache API (since Workers are stateless per invocation).
4. **Sitemap** — the current `sitemap.urls` function fetches from Sanity at runtime. For SSG, move this into a build-time step: either let `@nuxtjs/sitemap` evaluate it at prerender time (works fine with Cloudflare Pages — the build runs in CI with `SANITY_PROJECT_ID` in env), or generate a static `sitemap.xml` via a `scripts/gen-sitemap.ts` step.
5. **Redirects** — move `nitro.routeRules` redirects and `server/middleware/www-redirect.ts` into a `_redirects` file at the build output root. Cloudflare Pages honors this natively.
6. **Build pipeline** — GitHub Actions: on push to `main`, run `pnpm install && pnpm build` with `NITRO_PRESET=cloudflare-pages`, deploy via `wrangler pages deploy`. Sanity webhook → `repository_dispatch` → same workflow, so blog edits redeploy automatically.
7. **Environment variables** — move `SANITY_PROJECT_ID`, `SANITY_DATASET`, `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID`, `NUXT_PUBLIC_SITE_URL` into Cloudflare Pages project settings (Preview + Production scopes).

### 5.3 Fallback path — Option B: S3 + CloudFront

If there's a reason to stay in AWS (existing IAM, billing, compliance):

1. Switch to `nuxt generate` (uses the `static` Nitro preset).
2. Build output in `.output/public` gets synced to an S3 bucket (`silkride-co-uk-prod`).
3. CloudFront distribution with the bucket as origin; add:
   - CloudFront Function for trailing-slash normalization and www→apex (replacing `server/middleware/www-redirect.ts`).
   - Lambda@Edge or a small API Gateway + Lambda for `/api/google-reviews` with DynamoDB or ElastiCache for the 6h cache.
4. Route 53 ALIAS record to CloudFront distribution.
5. Sanity webhook → CodePipeline or GitHub Actions → `aws s3 sync` + `aws cloudfront create-invalidation "/*"`.
6. Keep the EC2 instance as a hot backup DNS target for 2 weeks post-cutover, then decommission.

---

## 6. Phased rollout

### Phase 0 — Quick wins on the current EC2 host (week 1)

Ship on the existing infra, no migration risk. Delivers the SEO fix immediately and claws back 10–15 perf points.

- Fix "Learn More" `aria-label` + i18n keys (SEO 92 → 100).
- Prune Google Font weights.
- Defer non-critical 3rd-party JS to first interaction.
- Turn on `nitro.prerender` for all static routes and deploy; SSR still runs for blog/api.
- Put CloudFront in front of EC2 with aggressive HTML caching for prerendered routes and pass-through for `/api/*` and `/blog/*`. This alone should get mobile into the 75–80 range.
- Re-run PSI and capture numbers for the migration business case.

### Phase 1 — Staging on Cloudflare Pages (week 2)

- Branch `migration/cloudflare-pages`. Add `NITRO_PRESET=cloudflare-pages`.
- Configure Cloudflare Pages project pointed at the branch; deploy to `silk-ride-staging.pages.dev`.
- Migrate Google Reviews cache to Workers KV.
- Convert `routeRules` redirects to `public/_redirects`.
- Verify every route renders: run Playwright smoke tests against staging URLs (i18n routes, blog detail, services, booking iframe, customer iframe).
- Run Lighthouse CI against staging; compare to Phase 0 numbers.

### Phase 2 — Sanity webhook + build pipeline (week 2)

- Set up GitHub Actions workflow (`deploy-cloudflare.yml`).
- Add Sanity webhook → GitHub `repository_dispatch` → rebuild.
- Time the end-to-end blog-edit → published latency. Target ≤ 3 minutes.

### Phase 3 — Cutover (week 3)

- DNS: lower TTL on `silkride.co.uk` A/CNAME record to 60 s a day before cutover.
- Point `silkride.co.uk` at Cloudflare Pages custom domain.
- Keep the EC2 origin running and monitored for 14 days as a rollback target.
- Monitor: PSI, Google Search Console coverage + Core Web Vitals report, Cloudflare Analytics (TTFB, cache hit ratio), Sentry/error rates, GA4 traffic continuity.

### Phase 4 — Decommission (week 5)

- Tear down PM2 / EC2 instance.
- Cancel the EC2 reservation.
- Archive `ecosystem.config.cjs`.
- Document the new deploy flow in `README.md`.

---

## 7. Risks & mitigations

| Risk | Likelihood | Mitigation |
|---|---|---|
| Worker bundle exceeds 1 MB limit | Low | Run `wrangler pages deploy --dry-run`; if over, split routes or drop heavy deps (mainly relevant for `@sanity/client` size — confirm tree-shake) |
| Sanity webhook fails to trigger rebuild, blog goes stale | Medium | Add a nightly scheduled GitHub Actions rebuild as a safety net |
| SEO regression during DNS cutover | Medium | Stage on `silk-ride-staging.pages.dev` behind `robots.txt` disallow first, verify all canonical URLs, keep redirects 1:1, submit new sitemap via Search Console post-cutover |
| i18n routes not prerendered correctly | Medium | Explicit routes list for both `en-GB` and `ru-RU` in `nitro.prerender.routes`; Playwright checks both locales in CI |
| `/api/google-reviews` rate-limited by Google Places | Low | Keep KV cache at 6h, add stale-while-revalidate fallback, alert on 429s |
| PM2 is decommissioned before CDN is proven | High impact if it happens | Hard rule: EC2 stays running and monitored for 14 days post-cutover, DNS failover documented |
| Consent Mode v2 breaks on edge runtime | Low | Plugin is already `.client.ts`, runs in browser — unaffected by origin change |

---

## 8. Success metrics (30 days post-cutover)

- Mobile Lighthouse Performance ≥ 90 on home, services, fleet, blog index.
- Mobile Lighthouse SEO = 100 site-wide.
- Core Web Vitals in Search Console: LCP "Good" ≥ 90% of URLs, CLS "Good" ≥ 95%, INP "Good" ≥ 90%.
- Global p75 TTFB ≤ 200 ms (Cloudflare Analytics).
- Monthly hosting cost reduced (EC2 + PM2 → Cloudflare Pages free tier or sub-$20 paid).
- No regression in organic traffic week-over-week in GSC (allow 2-week stabilization).
- Blog publish latency (Sanity edit → live) ≤ 3 minutes.

---

## 9. Open questions for Said

1. **Cloudflare vs. AWS preference?** Option A is recommended for pure perf + cost, Option B if AWS alignment matters.
2. **Sanity plan** — is the current Sanity project on a plan that supports webhooks? (Free tier does.)
3. **GitHub Actions minutes budget** — is there CI already set up, or is this net new?
4. **Email / DNS** — is `silkride.co.uk` DNS already on Cloudflare, or with another provider? That affects cutover steps.
5. **Staging domain** — is there an existing `staging.silkride.co.uk` we should reuse, or spin up fresh on `*.pages.dev`?
6. **Acceptable rebuild cadence for blog** — is ≤3 min acceptable, or do you need near-instant (which would push us toward ISR instead of pure SSG)?

---

## 10. Next action

Approve the plan (or flag changes on any of the open questions above), and I'll start with **Phase 0**: the "Learn More" `aria-label` fix + i18n keys, Google Fonts pruning, and `nitro.prerender` enablement on a feature branch.
