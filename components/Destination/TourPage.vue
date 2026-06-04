<template>
  <div class="dt-root">
    <Navbar />

    <!-- ============================ HERO ============================ -->
    <!--
      Mobile: image is a standalone block at the top, text sits in a solid
      dark panel below it (image stays fully visible, text stays readable).
      Desktop (lg+): image becomes a full-bleed background and the text
      overlays it cinematically.
    -->
    <section class="relative flex flex-col overflow-hidden bg-gray-950 lg:min-h-[90vh] lg:justify-center">
      <img
        :src="heroSrc"
        :alt="d.hero.alt"
        class="h-60 w-full object-cover sm:h-80 lg:absolute lg:inset-0 lg:h-full"
        width="1920"
        height="1080"
        loading="eager"
        fetchpriority="high"
        decoding="async"
        @error="onHeroError"
      />
      <!-- legibility overlays (desktop only) -->
      <div class="hero-overlay-premium hidden lg:block"></div>
      <div class="absolute inset-0 hidden bg-gradient-to-r from-black/85 via-black/45 to-transparent lg:block"></div>

      <!-- content: solid dark panel on mobile, transparent overlay on desktop -->
      <div class="relative z-10 w-full bg-gray-950 lg:bg-transparent">
        <div class="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-24">
          <div class="max-w-3xl text-white">
          <p class="dt-reveal mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold sm:text-sm">
            <span class="h-px w-8 bg-gold"></span>
            {{ d.kicker }}
          </p>
          <h1 class="dt-reveal dt-reveal-1 font-heading text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl xl:text-6xl">
            {{ d.hero.title }}
            <span class="block text-gold sm:inline">{{ d.hero.titleAccent }}</span>
          </h1>
          <p class="dt-reveal dt-reveal-2 mt-5 max-w-2xl text-base font-light leading-relaxed text-white/90 sm:text-lg md:text-xl">
            {{ d.hero.subtitle }}
          </p>

          <div class="dt-reveal dt-reveal-3 mt-8 flex flex-col gap-4 sm:flex-row">
            <NuxtLink :to="bookingPath" class="dt-btn-primary">
              <i class="bx bx-calendar text-xl" aria-hidden="true"></i>
              {{ $t('tours.bookTour', { name: d.name }) }}
            </NuxtLink>
            <a :href="PHONE_HREF" class="dt-btn-glass">
              <i class="bx bx-phone text-xl" aria-hidden="true"></i>
              {{ $t('tours.callPhone', { phone: PHONE_DISPLAY }) }}
            </a>
          </div>

          <!-- stat strip -->
          <div class="dt-reveal dt-reveal-3 mt-10 grid max-w-4xl gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md sm:mt-12 sm:grid-cols-3">
            <div
              v-for="stat in d.stats"
              :key="stat.label"
              class="flex items-center gap-4 bg-white/[0.03] p-5 sm:p-6"
            >
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

      <span class="dt-scroll-cue absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-white/60 lg:block" aria-hidden="true">
        <i class="bx bx-chevron-down text-3xl"></i>
      </span>
    </section>

    <!-- breadcrumbs -->
    <div class="border-b border-gray-100 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CommonBreadcrumbs :items="breadcrumbs" />
      </div>
    </div>

    <!-- ========================== OVERVIEW ========================== -->
    <section class="bg-white py-16 sm:py-20 lg:py-24">
      <div class="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p class="dt-kicker">{{ $t('tours.kicker.destination') }}</p>
          <h2 class="mt-4 font-heading text-3xl font-bold text-black md:text-4xl">{{ d.overview.heading }}</h2>
          <div class="mt-5 h-1 w-16 bg-gold"></div>
          <div class="mt-6 space-y-4">
            <p
              v-for="(para, i) in d.overview.paragraphs"
              :key="i"
              class="leading-relaxed text-gray-700"
            >
              {{ para }}
            </p>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-100 lg:mt-2">
          <div class="absolute inset-x-0 top-0 h-1.5 bg-gold"></div>
          <h3 class="font-heading text-2xl font-bold text-black">{{ d.overview.includesTitle }}</h3>
          <ul class="mt-6 space-y-4">
            <li
              v-for="(inc, i) in d.overview.includes"
              :key="i"
              class="flex items-start gap-3"
            >
              <i class="bx bx-check-circle mt-0.5 shrink-0 text-xl text-gold" aria-hidden="true"></i>
              <span class="text-gray-700">{{ inc }}</span>
            </li>
          </ul>
          <NuxtLink :to="bookingPath" class="mt-8 inline-flex items-center gap-2 font-semibold text-black transition-colors hover:text-gold">
            {{ $t('tours.getQuote') }}
            <i class="bx bx-right-arrow-alt text-lg" aria-hidden="true"></i>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ========================= ATTRACTIONS ======================= -->
    <section class="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="dt-kicker justify-center">{{ $t('tours.kicker.whatToSee') }}</p>
          <h2 class="mt-4 font-heading text-3xl font-bold text-black md:text-4xl">{{ d.attractions.title }}</h2>
          <p v-if="d.attractions.intro" class="mt-4 leading-relaxed text-gray-600">{{ d.attractions.intro }}</p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <article
            v-for="item in d.attractions.items"
            :key="item.title"
            class="dt-card group flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
          >
            <span class="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold/15 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-black">
              <i :class="['bx', item.icon]" class="text-2xl" aria-hidden="true"></i>
            </span>
            <h3 class="font-heading text-xl font-bold text-black">{{ item.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-gray-600">{{ item.description }}</p>
            <ul class="mt-4 space-y-2 border-t border-gray-100 pt-4 text-sm text-gray-700">
              <li v-for="(pt, i) in item.points" :key="i" class="flex items-start gap-2">
                <i class="bx bx-check mt-0.5 shrink-0 text-gold" aria-hidden="true"></i>
                <span>{{ pt }}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- ======================= JOURNEY TIMES ======================= -->
    <section class="bg-white py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="dt-kicker justify-center">{{ $t('tours.kicker.gettingThere') }}</p>
          <h2 class="mt-4 font-heading text-3xl font-bold text-black md:text-4xl">{{ d.journeys.title }}</h2>
          <p class="mt-4 leading-relaxed text-gray-600">
            {{ d.journeys.intro || $t('tours.journeysDefaultIntro') }}
          </p>
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="j in d.journeys.items"
            :key="j.place"
            class="rounded-2xl border border-gray-100 bg-gray-50/70 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-md"
          >
            <span class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
              <i class="bx bx-navigation text-2xl" aria-hidden="true"></i>
            </span>
            <h3 class="text-base font-semibold text-black">{{ j.place }}</h3>
            <p class="my-2 font-heading text-2xl font-bold text-gold">{{ j.time }}</p>
            <p class="text-sm text-gray-600">{{ j.note }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================== PRICING ========================== -->
    <section class="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="dt-kicker justify-center">{{ $t('tours.pricing.kicker') }}</p>
          <h2 class="mt-4 font-heading text-3xl font-bold text-black md:text-4xl">{{ $t('tours.pricing.title') }}</h2>
          <p class="mt-4 leading-relaxed text-gray-600">{{ $t('tours.pricing.intro') }}</p>
        </div>

        <div class="mx-auto mt-12 grid max-w-4xl items-start gap-6 md:grid-cols-2">
          <!-- Chauffeur only -->
          <div class="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 class="font-heading text-xl font-bold text-black">{{ $t('tours.pricing.chauffeurTitle') }}</h3>
            <div class="mt-4 flex items-baseline gap-2">
              <span class="text-sm text-gray-500">{{ $t('tours.pricing.from') }}</span>
              <span class="font-heading text-4xl font-bold text-black">£{{ d.pricing.withoutGuide }}</span>
            </div>
            <p class="mt-1 text-sm text-gray-500">{{ $t('tours.pricing.perVehicle') }}</p>
            <ul class="mt-6 space-y-3 border-t border-gray-100 pt-6 text-sm text-gray-700">
              <li v-for="key in chauffeurFeatures" :key="key" class="flex items-start gap-2">
                <i class="bx bx-check mt-0.5 shrink-0 text-gold" aria-hidden="true"></i>
                <span>{{ $t(key) }}</span>
              </li>
            </ul>
            <NuxtLink
              :to="bookingPath"
              class="mt-8 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-black px-6 py-3 font-semibold text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              {{ $t('tours.bookTour', { name: d.name }) }}
            </NuxtLink>
          </div>

          <!-- Chauffeur + private guide (featured) -->
          <div class="relative flex flex-col rounded-2xl border-2 border-gold bg-gray-950 p-8 text-white shadow-xl">
            <span class="absolute -top-3 left-8 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">{{ $t('tours.pricing.popular') }}</span>
            <h3 class="font-heading text-xl font-bold">{{ $t('tours.pricing.guideTitle') }}</h3>
            <div class="mt-4 flex items-baseline gap-2">
              <span class="text-sm text-white/60">{{ $t('tours.pricing.from') }}</span>
              <span class="font-heading text-4xl font-bold text-gold">£{{ d.pricing.withGuide }}</span>
            </div>
            <p class="mt-1 text-sm text-white/60">{{ $t('tours.pricing.perVehicle') }}</p>
            <ul class="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm text-white/85">
              <li v-for="key in guideFeatures" :key="key" class="flex items-start gap-2">
                <i class="bx bx-check mt-0.5 shrink-0 text-gold" aria-hidden="true"></i>
                <span>{{ $t(key) }}</span>
              </li>
            </ul>
            <NuxtLink :to="bookingPath" class="dt-btn-primary mt-8">
              {{ $t('tours.bookTour', { name: d.name }) }}
            </NuxtLink>
          </div>
        </div>
        <p class="mx-auto mt-6 max-w-2xl text-center text-sm text-gray-500">{{ $t('tours.pricing.note') }}</p>
      </div>
    </section>

    <!-- ============================ FAQ ============================ -->
    <section class="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="dt-kicker justify-center">{{ $t('tours.kicker.goodToKnow') }}</p>
          <h2 class="mt-4 font-heading text-3xl font-bold text-black md:text-4xl">{{ d.faqTitle }}</h2>
          <p v-if="d.faqIntro" class="mt-4 leading-relaxed text-gray-600">{{ d.faqIntro }}</p>
        </div>

        <div class="mx-auto mt-12 max-w-3xl space-y-4">
          <details
            v-for="(faq, idx) in d.faqs"
            :key="idx"
            class="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow open:shadow-md"
          >
            <summary class="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-black sm:p-6">
              <span class="text-base sm:text-lg">{{ faq.question }}</span>
              <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold transition-transform duration-300 group-open:rotate-180">
                <i class="bx bx-chevron-down text-xl" aria-hidden="true"></i>
              </span>
            </summary>
            <div class="-mt-1 px-5 pb-6 leading-relaxed text-gray-700 sm:px-6" v-html="faq.answer" />
          </details>
        </div>
      </div>
    </section>

    <!-- ======================== WHY SILK RIDE ====================== -->
    <section class="relative overflow-hidden bg-gray-950 py-16 text-white sm:py-20 lg:py-24">
      <div class="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"></div>
      <div class="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"></div>
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="dt-kicker justify-center">{{ $t('tours.kicker.difference') }}</p>
          <h2 class="mt-4 font-heading text-3xl font-bold md:text-4xl">{{ d.whyTitle }}</h2>
        </div>
        <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="pillar in pillars" :key="pillar.title" class="text-center">
            <span class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold text-black">
              <i :class="['bx', pillar.icon]" class="text-3xl" aria-hidden="true"></i>
            </span>
            <h3 class="font-heading text-lg font-bold">{{ $t(pillar.titleKey) }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-white/70">{{ $t(pillar.textKey) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================= RELATED TOURS ======================= -->
    <section class="bg-white py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="dt-kicker justify-center">{{ $t('tours.kicker.moreDayTrips') }}</p>
          <h2 class="mt-4 font-heading text-3xl font-bold text-black md:text-4xl">{{ d.relatedTitle }}</h2>
          <p v-if="d.relatedIntro" class="mt-4 leading-relaxed text-gray-600">{{ d.relatedIntro }}</p>
        </div>

        <div class="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="dest in related"
            :key="dest.slug"
            :to="localePath(`/destination-tours/${dest.slug}`)"
            class="group flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
          >
            <div class="mb-3 flex items-center gap-3">
              <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-black">
                <i :class="['bx', dest.card.icon]" class="text-2xl" aria-hidden="true"></i>
              </span>
              <h3 class="font-heading text-lg font-bold text-black transition-colors group-hover:text-gold">{{ dest.name }}</h3>
            </div>
            <p class="flex-1 text-sm leading-relaxed text-gray-600">{{ dest.card.tagline }}</p>
            <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold">
              {{ $t('tours.exploreTour') }}
              <i class="bx bx-right-arrow-alt text-lg transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"></i>
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ============================ CTA ============================ -->
    <section class="bg-white pb-16 sm:pb-20 lg:pb-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-black via-gray-900 to-black px-6 py-14 text-center text-white shadow-2xl sm:px-12 sm:py-16">
          <div class="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl"></div>
          <div class="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl"></div>
          <div class="relative">
            <h2 class="font-heading text-3xl font-bold md:text-4xl">{{ d.cta.title }}</h2>
            <p class="mx-auto mt-4 max-w-2xl text-lg text-white/85">{{ d.cta.subtitle }}</p>
            <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <NuxtLink :to="bookingPath" class="dt-btn-primary">
                <i class="bx bx-calendar text-xl" aria-hidden="true"></i>
                {{ $t('tours.bookTour', { name: d.name }) }}
              </NuxtLink>
              <a :href="PHONE_HREF" class="dt-btn-outline-gold">
                <i class="bx bx-phone text-xl" aria-hidden="true"></i>
                {{ $t('tours.callCustomQuote') }}
              </a>
            </div>
            <p class="mt-8 text-sm text-white/55">{{ $t('tours.trustLine') }}</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLocalePath, useI18n } from '#imports'
import { PHONE_DISPLAY, PHONE_HREF, HERO_FALLBACK_IMAGE, getRelatedDestinations } from '~/utils/destinations'
import { useSeo } from '~/utils/useSeo'

const props = defineProps({
  destination: { type: Object, required: true },
})

const d = props.destination
const localePath = useLocalePath()
const { t, locale } = useI18n()

const SITE_URL = 'https://silkride.co.uk'
const bookingPath = localePath('/booking')
const pageUrl = `${SITE_URL}/destination-tours/${d.slug}`
const absImage = (path) => (path.startsWith('http') ? path : `${SITE_URL}${path}`)

// Hero image: fall back to a known-good asset if the per-destination photo
// has not been added to /public/images/covers yet.
const heroSrc = ref(d.hero.image)
function onHeroError() {
  if (heroSrc.value !== HERO_FALLBACK_IMAGE) heroSrc.value = HERO_FALLBACK_IMAGE
}

const related = getRelatedDestinations(d.slug, locale.value)

// Brand-level "why us" pillars — identical across destinations (labels via i18n).
const pillars = [
  { icon: 'bxs-car', titleKey: 'tours.pillars.fleetTitle', textKey: 'tours.pillars.fleetText' },
  { icon: 'bx-shield-quarter', titleKey: 'tours.pillars.licensedTitle', textKey: 'tours.pillars.licensedText' },
  { icon: 'bx-time', titleKey: 'tours.pillars.flexibleTitle', textKey: 'tours.pillars.flexibleText' },
  { icon: 'bx-star', titleKey: 'tours.pillars.serviceTitle', textKey: 'tours.pillars.serviceText' },
]

// Pricing tier feature lists (labels via i18n).
const chauffeurFeatures = ['tours.pricing.cf1', 'tours.pricing.cf2', 'tours.pricing.cf3', 'tours.pricing.cf4']
const guideFeatures = ['tours.pricing.gf1', 'tours.pricing.gf2', 'tours.pricing.gf3', 'tours.pricing.gf4']

const breadcrumbs = [
  { name: t('tours.home'), path: '/' },
  { name: t('tours.tours'), path: '/destination-tours' },
  { name: d.name, path: `/destination-tours/${d.slug}` },
]

// --- SEO ---------------------------------------------------------------
useSeo(d.seoKey, { image: d.hero.ogImage })

// --- Structured data ---------------------------------------------------
const schemaBlocks = [
  defineLocalBusiness({
    name: `Silk Ride ${d.name} Chauffeur Service`,
    description: d.schema.description,
    image: [
      `${SITE_URL}/logo.svg`,
      `${SITE_URL}/vclassSide.webp`,
      `${SITE_URL}/sclassSide.webp`,
      `${SITE_URL}/eclassSide.webp`,
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: d.schema.geo.lat,
      longitude: d.schema.geo.lng,
    },
    telephone: PHONE_DISPLAY,
    url: pageUrl,
    areaServed: d.schema.areaServed.map((a) => ({ '@type': a.type, name: a.name })),
    serviceType: 'Chauffeur Service and Private Tours',
    priceRange: '£££',
  }),
]

if (d.schema.attraction) {
  const a = d.schema.attraction
  schemaBlocks.push({
    '@type': 'TouristAttraction',
    name: a.name,
    description: a.description,
    image: absImage(d.hero.ogImage),
    url: pageUrl,
    address: {
      '@type': 'PostalAddress',
      ...(a.street ? { streetAddress: a.street } : {}),
      addressLocality: a.locality,
      ...(a.region ? { addressRegion: a.region } : {}),
      ...(a.postalCode ? { postalCode: a.postalCode } : {}),
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: a.geo.lat,
      longitude: a.geo.lng,
    },
    isAccessibleForFree: !!a.free,
    publicAccess: true,
  })
}

schemaBlocks.push({
  '@type': 'Product',
  name: `${d.name} Private Chauffeur Tour from London`,
  description: d.schema.description,
  image: absImage(d.hero.ogImage),
  brand: { '@type': 'Brand', name: 'Silk Ride' },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'GBP',
    lowPrice: d.pricing.withoutGuide,
    highPrice: d.pricing.withGuide,
    offerCount: 2,
    availability: 'https://schema.org/InStock',
    url: pageUrl,
  },
})

schemaBlocks.push({
  '@type': 'FAQPage',
  mainEntity: d.faqs.map((q) => ({
    '@type': 'Question',
    name: q.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: q.answer.replace(/<[^>]+>/g, ''),
    },
  })),
})

useSchemaOrg(schemaBlocks)
</script>

<style scoped>
/* Hero entrance reveals (CSS-only, run on load — no JS, no layout shift) */
.dt-reveal {
  opacity: 0;
  animation: dt-reveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.dt-reveal-1 { animation-delay: 0.1s; }
.dt-reveal-2 { animation-delay: 0.25s; }
.dt-reveal-3 { animation-delay: 0.4s; }

@keyframes dt-reveal {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

.dt-scroll-cue { animation: dt-bounce 1.8s ease-in-out infinite; }
@keyframes dt-bounce {
  0%, 100% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, 8px); }
}

/* Shared buttons */
.dt-btn-primary,
.dt-btn-glass,
.dt-btn-outline-gold {
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
.dt-btn-primary {
  background-color: #FFCB6C;
  color: #000;
  box-shadow: 0 10px 25px -8px rgba(0, 0, 0, 0.5);
}
.dt-btn-primary:hover {
  transform: translateY(-2px);
  filter: brightness(0.96);
}
.dt-btn-glass {
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  font-weight: 600;
}
.dt-btn-glass:hover {
  background: #fff;
  color: #000;
  transform: translateY(-2px);
}
.dt-btn-outline-gold {
  color: #FFCB6C;
  border: 2px solid #FFCB6C;
  font-weight: 600;
}
.dt-btn-outline-gold:hover {
  background: #FFCB6C;
  color: #000;
  transform: translateY(-2px);
}
.dt-btn-primary:focus-visible,
.dt-btn-glass:focus-visible,
.dt-btn-outline-gold:focus-visible {
  outline: 2px solid #FFCB6C;
  outline-offset: 3px;
}

/* Section kicker label */
.dt-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #B8941F;
}
.dt-kicker::before {
  content: '';
  width: 1.75rem;
  height: 1px;
  background-color: #FFCB6C;
}

/* Respect reduced-motion: kill entrance + looping + lift animations */
@media (prefers-reduced-motion: reduce) {
  .dt-reveal { opacity: 1; animation: none; transform: none; }
  .dt-scroll-cue { display: none; }
  .dt-root :deep(*) { transition: none !important; }
  .dt-card:hover,
  .dt-btn-primary:hover,
  .dt-btn-glass:hover,
  .dt-btn-outline-gold:hover { transform: none; }
}
</style>
