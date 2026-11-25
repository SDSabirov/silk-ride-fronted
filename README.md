# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


## SEO conventions (read before editing content)

- **Titles and descriptions** live in `i18n/locales/*.json` under `seo.<page>` and are
  applied by `utils/useSeo.ts`. Never use the pipe character `|` in any locale string:
  vue-i18n treats it as a plural separator and silently drops everything after it.
  Use an en dash (–). Write e-mail addresses as `info{'@'}silkride.co.uk`.
  Keep titles ≤ 50 characters (the ` | Silk Ride` suffix is added automatically) and
  descriptions ≤ 155.
- **Structured data**: the business is declared once in `nuxt.config.ts`
  (`schemaOrg.identity`). Pages add `Service` / `FAQPage` nodes with the helpers in
  `utils/siteSchema.ts`. Do not add another `LocalBusiness` on a page, and do not mark
  up reviews or ratings.
- **Internal links** must go through `localePath()` / `$localePath()` so Russian pages
  stay inside `/ru`.
- **Prices** quoted anywhere in copy must match `config/pricing.ts`.

### Topic clusters

Each service has a pillar page (`/services/<service>`) and cluster pages that go deep
on one occasion, venue or route (`/event-chauffeur/royal-ascot`, …).

To add a cluster page:

1. Write `utils/clusters/en/<slug>.ts` and `utils/clusters/ru/<slug>.ts`
   (type: `ClusterGuide` in `utils/clusters/types.ts`; copy an existing file).
2. Add one entry to `CLUSTER_PAGES` in `utils/clusters/registry.ts`.
3. Add `pages/<section>/<slug>.vue` (copy any existing wrapper and change the two imports).

The pillar page's guide grid, the sibling links on every cluster page, breadcrumbs,
structured data and the sitemap all update from those three steps.
