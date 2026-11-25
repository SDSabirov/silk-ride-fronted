<template>
  <div class="cg-root">
    <Navbar />

    <!-- ============================ HERO ============================ -->
    <!-- Mobile: image block on top, text in a dark panel below.
         Desktop: full-bleed image with the text overlaid. Mirrors the cruise
         and destination tour pages so the whole site reads as one system. -->
    <section class="relative flex flex-col overflow-hidden bg-[#0A0908] lg:min-h-[80vh] lg:justify-center">
      <img
        :src="g.hero.image"
        :alt="g.hero.alt"
        class="h-60 w-full object-cover sm:h-80 lg:absolute lg:inset-0 lg:h-full"
        width="1920"
        height="1080"
        loading="eager"
        fetchpriority="high"
        decoding="async"
      />
      <div class="absolute inset-0 hidden bg-gradient-to-r from-black/90 via-black/60 to-black/20 lg:block"></div>

      <div class="relative z-10 w-full bg-[#0A0908] lg:bg-transparent">
        <div class="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
          <div class="max-w-3xl text-white">
            <p class="cg-reveal mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold sm:text-sm">
              <span class="h-px w-8 bg-gold"></span>
              {{ g.kicker }}
            </p>
            <h1 class="cg-reveal cg-reveal-1 font-heading text-3xl font-medium leading-[1.1] sm:text-4xl md:text-5xl xl:text-6xl">
              {{ g.hero.title }}
              <span class="block text-gold">{{ g.hero.titleAccent }}</span>
            </h1>
            <p class="cg-reveal cg-reveal-2 mt-5 max-w-2xl text-base font-light leading-relaxed text-white/90 sm:text-lg md:text-xl">
              {{ g.hero.subtitle }}
            </p>

            <div class="cg-reveal cg-reveal-3 mt-8 flex flex-col gap-4 sm:flex-row">
              <NuxtLink :to="bookingPath" class="cg-btn-primary">
                <i class="bx bx-calendar text-xl" aria-hidden="true"></i>
                {{ $t('clusters.book') }}
              </NuxtLink>
              <a :href="PHONE_HREF" class="cg-btn-glass">
                <i class="bx bx-phone text-xl" aria-hidden="true"></i>
                {{ $t('tours.callPhone', { phone: PHONE_DISPLAY }) }}
              </a>
            </div>

            <div class="cg-reveal cg-reveal-3 mt-10 grid max-w-4xl gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md sm:mt-12 sm:grid-cols-3">
              <div v-for="stat in g.stats" :key="stat.label" class="flex items-center gap-4 bg-white/[0.03] p-5 sm:p-6">
                <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-black sm:h-12 sm:w-12">
                  <i :class="['bx', stat.icon]" class="text-xl sm:text-2xl" aria-hidden="true"></i>
                </span>
                <div>
                  <div class="font-heading text-sm font-bold leading-tight text-white sm:text-base">{{ stat.label }}</div>
                  <div class="mt-0.5 text-xs text-white/70 sm:text-sm">{{ stat.sub }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- breadcrumbs: Home › Services › Pillar › This page -->
    <div class="border-b border-gray-100 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CommonBreadcrumbs :items="breadcrumbs" />
      </div>
    </div>

    <!-- ========================== OVERVIEW ========================== -->
    <section class="bg-white py-16 sm:py-20 lg:py-24">
      <div class="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p class="cg-kicker">{{ g.overview.kicker }}</p>
          <h2 class="mt-4 font-heading text-3xl font-medium text-black md:text-4xl">{{ g.overview.heading }}</h2>
          <div class="mt-5 h-1 w-16 bg-gold"></div>
          <div class="mt-6 space-y-4">
            <p v-for="(para, i) in g.overview.paragraphs" :key="i" class="leading-relaxed text-gray-700">{{ para }}</p>
          </div>
          <!-- contextual link up to the pillar page -->
          <p class="mt-6 text-gray-700">
            {{ $t('clusters.partOf') }}
            <NuxtLink :to="localePath(pillar.path)" class="font-semibold text-black underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold">{{ pillar.title }}</NuxtLink>.
          </p>
        </div>

        <div class="relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-100 lg:mt-2">
          <div class="absolute inset-x-0 top-0 h-1.5 bg-gold"></div>
          <h3 class="font-heading text-2xl font-bold text-black">{{ g.overview.includesTitle }}</h3>
          <ul class="mt-6 space-y-4">
            <li v-for="(inc, i) in g.overview.includes" :key="i" class="flex items-start gap-3">
              <i class="bx bx-check-circle mt-0.5 shrink-0 text-xl text-gold" aria-hidden="true"></i>
              <span class="text-gray-700">{{ inc }}</span>
            </li>
          </ul>
          <NuxtLink :to="bookingPath" class="mt-8 inline-flex items-center gap-2 font-semibold text-black transition-colors hover:text-gold">
            {{ $t('clusters.getQuote') }}
            <i class="bx bx-right-arrow-alt text-lg" aria-hidden="true"></i>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ===================== PAGE-SPECIFIC GUIDANCE ================== -->
    <section
      v-for="(sec, idx) in g.sections"
      :key="sec.heading"
      :class="idx % 2 === 0 ? 'bg-gradient-to-b from-gray-50 to-white' : 'bg-white'"
      class="py-16 sm:py-20"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div class="lg:col-span-2">
            <p class="cg-kicker">{{ sec.kicker }}</p>
            <h2 class="mt-4 font-heading text-3xl font-medium text-black md:text-4xl">{{ sec.heading }}</h2>
            <div class="mt-5 h-1 w-16 bg-gold"></div>
          </div>
          <div class="lg:col-span-3">
            <div class="space-y-4">
              <p v-for="(para, i) in sec.paragraphs" :key="i" class="leading-relaxed text-gray-700">{{ para }}</p>
            </div>
            <ul v-if="sec.bullets?.length" class="mt-6 grid gap-3 sm:grid-cols-2">
              <li v-for="(b, i) in sec.bullets" :key="i" class="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                <i class="bx bx-check mt-0.5 shrink-0 text-xl text-gold" aria-hidden="true"></i>
                <span class="text-sm leading-relaxed text-gray-700">{{ b }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================= JOURNEY TIMES ====================== -->
    <section v-if="g.journeys" class="bg-[#0A0908] py-16 text-white sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="cg-kicker justify-center">{{ g.journeys.kicker }}</p>
          <h2 class="mt-4 font-heading text-3xl font-medium md:text-4xl">{{ g.journeys.title }}</h2>
          <p class="mt-4 leading-relaxed text-white/70">{{ g.journeys.intro }}</p>
        </div>
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="j in g.journeys.items" :key="j.from" class="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center">
            <h3 class="text-base font-semibold text-white">{{ j.from }}</h3>
            <p class="my-2 font-heading text-2xl font-bold text-gold">{{ j.time }}</p>
            <p class="text-sm text-white/65">{{ j.note }}</p>
          </div>
        </div>
        <p class="mx-auto mt-8 max-w-3xl text-center text-sm text-white/50">{{ $t('clusters.journeyDisclaimer') }}</p>
      </div>
    </section>

    <!-- =========================== VEHICLES ========================= -->
    <section class="bg-white py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="cg-kicker justify-center">{{ g.vehicles.kicker }}</p>
          <h2 class="mt-4 font-heading text-3xl font-medium text-black md:text-4xl">{{ g.vehicles.title }}</h2>
          <p class="mt-4 leading-relaxed text-gray-600">{{ g.vehicles.intro }}</p>
        </div>

        <div class="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          <NuxtLink
            v-for="v in fleet"
            :key="v.key"
            :to="localePath(v.path)"
            :class="[
              'group relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
              v.recommended ? 'border-gold ring-1 ring-gold/40' : 'border-gray-200 hover:border-gold/40',
            ]"
          >
            <span v-if="v.recommended" class="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-black">
              {{ $t('clusters.mostPopular') }}
            </span>
            <div class="flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-3">
              <img :src="v.image" :alt="$t('clusters.vehicleAlt', { name: v.name })" class="h-full w-full object-contain" loading="lazy" width="320" height="160" />
            </div>
            <h3 class="mt-5 font-heading text-xl font-bold text-black transition-colors group-hover:text-gold">{{ v.name }}</h3>
            <ul class="mt-3 space-y-2 text-sm text-gray-700">
              <li class="flex items-start gap-2">
                <i class="bx bx-user mt-0.5 shrink-0 text-gold" aria-hidden="true"></i>
                <span>{{ $t('clusters.passengers', { count: v.passengers }) }}</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="bx bx-time mt-0.5 shrink-0 text-gold" aria-hidden="true"></i>
                <span>{{ g.schema.hourlyPriced ? $t('clusters.hourlyFrom', { price: v.rate }) : $t('clusters.quotedInAdvance') }}</span>
              </li>
            </ul>
            <p class="mt-4 flex-1 text-sm leading-relaxed text-gray-600">{{ v.note }}</p>
            <span class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold">
              {{ $t('clusters.viewVehicle', { name: v.name }) }}
              <i class="bx bx-right-arrow-alt text-lg transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"></i>
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ===================== PRICING & BOOKING ====================== -->
    <section class="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24">
      <div class="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p class="cg-kicker">{{ g.pricing.kicker }}</p>
          <h2 class="mt-4 font-heading text-3xl font-medium text-black md:text-4xl">{{ g.pricing.title }}</h2>
          <div class="mt-5 h-1 w-16 bg-gold"></div>
          <div class="mt-6 space-y-4">
            <p v-for="(para, i) in g.pricing.paragraphs" :key="i" class="leading-relaxed text-gray-700">{{ para }}</p>
          </div>
        </div>
        <div class="relative overflow-hidden rounded-2xl bg-[#0A0908] p-8 text-white shadow-xl">
          <div class="absolute inset-x-0 top-0 h-1.5 bg-gold"></div>
          <ul class="space-y-4">
            <li v-for="(pt, i) in g.pricing.points" :key="i" class="flex items-start gap-3">
              <i class="bx bx-check mt-0.5 shrink-0 text-xl text-gold" aria-hidden="true"></i>
              <span class="text-white/85">{{ pt }}</span>
            </li>
          </ul>
          <div class="mt-8 flex flex-col gap-4 sm:flex-row">
            <NuxtLink :to="bookingPath" class="cg-btn-primary">
              <i class="bx bx-calendar text-xl" aria-hidden="true"></i>
              {{ $t('clusters.book') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/contact-us')" class="cg-btn-outline-gold">
              {{ $t('clusters.getQuote') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================ FAQ ============================ -->
    <section class="bg-white py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="cg-kicker justify-center">{{ g.faq.kicker }}</p>
          <h2 class="mt-4 font-heading text-3xl font-medium text-black md:text-4xl">{{ g.faq.title }}</h2>
          <p class="mt-4 leading-relaxed text-gray-600">{{ g.faq.intro }}</p>
        </div>
        <div class="mx-auto mt-12 max-w-3xl space-y-4">
          <details
            v-for="(faq, idx) in g.faq.items"
            :key="idx"
            class="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow open:shadow-md"
          >
            <summary class="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-black sm:p-6">
              <h3 class="text-base font-semibold sm:text-lg">{{ faq.question }}</h3>
              <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold transition-transform duration-300 group-open:rotate-180">
                <i class="bx bx-chevron-down text-xl" aria-hidden="true"></i>
              </span>
            </summary>
            <div class="-mt-1 px-5 pb-6 leading-relaxed text-gray-700 sm:px-6" v-html="faq.answer" />
          </details>
        </div>
      </div>
    </section>

    <!-- ========================== RELATED ========================== -->
    <section class="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="cg-kicker justify-center">{{ g.related.kicker }}</p>
          <h2 class="mt-4 font-heading text-3xl font-medium text-black md:text-4xl">{{ g.related.title }}</h2>
          <p class="mt-4 leading-relaxed text-gray-600">{{ g.related.intro }}</p>
        </div>

        <div class="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="item in relatedLinks"
            :key="item.path"
            :to="localePath(item.path)"
            class="group flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
          >
            <div class="mb-3 flex items-center gap-3">
              <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-black">
                <i :class="['bx', item.icon]" class="text-2xl" aria-hidden="true"></i>
              </span>
              <h3 class="font-heading text-lg font-bold text-black transition-colors group-hover:text-gold">{{ item.title }}</h3>
            </div>
            <p class="flex-1 text-sm leading-relaxed text-gray-600">{{ item.tagline }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ============================ CTA ============================ -->
    <section class="bg-gray-50 pb-16 sm:pb-20 lg:pb-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A0908] via-[#1A1816] to-[#0A0908] px-6 py-14 text-center text-white shadow-2xl sm:px-12 sm:py-16">
          <div class="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl"></div>
          <div class="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl"></div>
          <div class="relative">
            <h2 class="font-heading text-3xl font-medium md:text-4xl">{{ g.cta.title }}</h2>
            <p class="mx-auto mt-4 max-w-2xl text-lg text-white/85">{{ g.cta.subtitle }}</p>
            <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <NuxtLink :to="bookingPath" class="cg-btn-primary">
                <i class="bx bx-calendar text-xl" aria-hidden="true"></i>
                {{ $t('clusters.book') }}
              </NuxtLink>
              <a :href="PHONE_HREF" class="cg-btn-outline-gold">
                <i class="bx bx-phone text-xl" aria-hidden="true"></i>
                {{ $t('tours.callPhone', { phone: PHONE_DISPLAY }) }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { useLocalePath, useI18n } from '#imports'
import { PHONE_DISPLAY, PHONE_HREF } from '~/utils/destinations'
import { useSeo } from '~/utils/useSeo'
import { serviceSchema, faqSchema } from '~/utils/siteSchema'
import { PRICING } from '~/config/pricing'
import { CLUSTER_SECTIONS, getClusterLinks, getPillarLink } from '~/utils/clusters/registry'

const props = defineProps({
  /** A ClusterGuide object (utils/clusters/types.ts), already localised. */
  guide: { type: Object, required: true },
})

const g = props.guide
const localePath = useLocalePath()
const { t, locale } = useI18n()

const section = CLUSTER_SECTIONS[g.section]
const pagePath = `${section.base}/${g.slug}`
const bookingPath = localePath('/booking')

// --- Internal linking: up to the pillar, across to siblings ---------------
const pillar = getPillarLink(g.section, locale.value)
const relatedLinks = [
  pillar,
  ...getClusterLinks(g.section, locale.value, g.slug),
  ...(g.related.extra || []),
].slice(0, 9)

const breadcrumbs = [
  { name: t('clusters.breadcrumbHome'), path: '/' },
  { name: t('clusters.breadcrumbServices'), path: '/services' },
  { name: pillar.title, path: section.pillarPath },
  { name: g.name, path: pagePath },
]

// --- Fleet cards: shared facts live here, the per-page "why" in the data --
const FLEET = [
  { key: 'eClass', name: 'Mercedes E-Class', image: '/images/transparentcars/eclass.webp', path: '/fleet/mercedes-e-class', passengers: 3 },
  { key: 'sClass', name: 'Mercedes S-Class', image: '/images/transparentcars/sclass.webp', path: '/fleet/mercedes-s-class', passengers: 3 },
  { key: 'vClass', name: 'Mercedes V-Class', image: '/images/transparentcars/vclass.jpg', path: '/fleet/mercedes-v-class', passengers: 7 },
]
const fleet = FLEET.map((v) => ({
  ...v,
  rate: PRICING.hourly[v.key],
  note: g.vehicles.notes[v.key],
  recommended: g.vehicles.recommended === v.key,
}))

// --- SEO + structured data ------------------------------------------------
useSeo(g.slug, {
  title: g.seo.title,
  description: g.seo.description,
  image: g.hero.image,
})

useSchemaOrg([
  serviceSchema({
    path: pagePath,
    locale: locale.value,
    name: g.seo.title,
    description: g.seo.description,
    serviceType: g.schema.serviceType,
    areaServed: g.schema.areaServed,
    image: g.hero.image,
    ...(g.schema.hourlyPriced ? { priceFrom: PRICING.hourly.eClass, priceUnit: 'per hour' } : {}),
  }),
  faqSchema(g.faq.items, pagePath, locale.value),
])
</script>

<style scoped>
.cg-reveal {
  opacity: 0;
  animation: cg-reveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.cg-reveal-1 { animation-delay: 0.1s; }
.cg-reveal-2 { animation-delay: 0.25s; }
.cg-reveal-3 { animation-delay: 0.4s; }

@keyframes cg-reveal {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

.cg-btn-primary,
.cg-btn-glass,
.cg-btn-outline-gold {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 1rem 1.75rem;
  font-weight: 700;
  font-size: 1.0625rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.cg-btn-primary {
  background-color: #D4AF37;
  color: #000;
  box-shadow: 0 10px 25px -8px rgba(0, 0, 0, 0.5);
}
.cg-btn-primary:hover {
  transform: translateY(-2px);
  filter: brightness(0.96);
}
.cg-btn-glass {
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  font-weight: 600;
}
.cg-btn-glass:hover {
  background: #fff;
  color: #000;
  transform: translateY(-2px);
}
.cg-btn-outline-gold {
  color: #D4AF37;
  border: 2px solid #D4AF37;
  font-weight: 600;
}
.cg-btn-outline-gold:hover {
  background: #D4AF37;
  color: #000;
  transform: translateY(-2px);
}
.cg-btn-primary:focus-visible,
.cg-btn-glass:focus-visible,
.cg-btn-outline-gold:focus-visible {
  outline: 2px solid #D4AF37;
  outline-offset: 3px;
}

.cg-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #B8941F;
}
.cg-kicker::before {
  content: '';
  width: 1.75rem;
  height: 1px;
  background-color: #D4AF37;
}

/* FAQ answers are v-html: style links inside them */
.cg-root :deep(details a) {
  color: #8C6E14;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .cg-reveal { opacity: 1; animation: none; transform: none; }
  .cg-btn-primary:hover,
  .cg-btn-glass:hover,
  .cg-btn-outline-gold:hover { transform: none; }
}
</style>
