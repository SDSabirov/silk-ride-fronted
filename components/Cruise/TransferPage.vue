<template>
  <div class="ct-root">
    <Navbar />

    <!-- ============================ HERO ============================ -->
    <!--
      Mobile: image is a standalone block at the top, text sits in a solid
      dark panel below it. Desktop (lg+): image becomes a full-bleed
      background and the text overlays it. Mirrors DestinationTourPage.
    -->
    <section class="relative flex flex-col overflow-hidden bg-[#0A0908] lg:min-h-[90vh] lg:justify-center">
      <img
        :src="d.hero.image"
        :alt="d.hero.alt"
        class="h-60 w-full object-cover sm:h-80 lg:absolute lg:inset-0 lg:h-full"
        width="1920"
        height="1080"
        loading="eager"
        fetchpriority="high"
        decoding="async"
      />
      <div class="hero-overlay-premium hidden lg:block"></div>
      <div class="absolute inset-0 hidden bg-gradient-to-r from-black/85 via-black/45 to-transparent lg:block"></div>

      <div class="relative z-10 w-full bg-[#0A0908] lg:bg-transparent">
        <div class="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-24">
          <div class="max-w-3xl text-white">
            <p class="ct-reveal mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold sm:text-sm">
              <span class="h-px w-8 bg-gold"></span>
              {{ d.kicker }}
            </p>
            <h1 class="ct-reveal ct-reveal-1 font-heading text-3xl font-medium leading-[1.1] sm:text-4xl md:text-5xl xl:text-6xl">
              {{ d.hero.title }}
              <span class="block text-gold">{{ d.hero.titleAccent }}</span>
            </h1>
            <p class="ct-reveal ct-reveal-2 mt-5 max-w-2xl text-base font-light leading-relaxed text-white/90 sm:text-lg md:text-xl">
              {{ d.hero.subtitle }}
            </p>

            <div class="ct-reveal ct-reveal-3 mt-8 flex flex-col gap-4 sm:flex-row">
              <NuxtLink :to="bookingPath" class="ct-btn-primary">
                <i class="bx bx-calendar text-xl" aria-hidden="true"></i>
                {{ d.labels.book }}
              </NuxtLink>
              <a :href="PHONE_HREF" class="ct-btn-glass">
                <i class="bx bx-phone text-xl" aria-hidden="true"></i>
                {{ $t('tours.callPhone', { phone: PHONE_DISPLAY }) }}
              </a>
            </div>

            <!-- stat strip -->
            <div class="ct-reveal ct-reveal-3 mt-10 grid max-w-4xl gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md sm:mt-12 sm:grid-cols-3">
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

      <span class="ct-scroll-cue absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-white/60 lg:block" aria-hidden="true">
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
          <p class="ct-kicker">{{ d.overview.kicker }}</p>
          <h2 class="mt-4 font-heading text-3xl font-medium text-black md:text-4xl">{{ d.overview.heading }}</h2>
          <div class="mt-5 h-1 w-16 bg-gold"></div>
          <div class="mt-6 space-y-4">
            <p v-for="(para, i) in d.overview.paragraphs" :key="i" class="leading-relaxed text-gray-700">
              {{ para }}
            </p>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-100 lg:mt-2">
          <div class="absolute inset-x-0 top-0 h-1.5 bg-gold"></div>
          <h3 class="font-heading text-2xl font-bold text-black">{{ d.overview.includesTitle }}</h3>
          <ul class="mt-6 space-y-4">
            <li v-for="(inc, i) in d.overview.includes" :key="i" class="flex items-start gap-3">
              <i class="bx bx-check-circle mt-0.5 shrink-0 text-xl text-gold" aria-hidden="true"></i>
              <span class="text-gray-700">{{ inc }}</span>
            </li>
          </ul>
          <NuxtLink :to="bookingPath" class="mt-8 inline-flex items-center gap-2 font-semibold text-black transition-colors hover:text-gold">
            {{ d.labels.getQuote }}
            <i class="bx bx-right-arrow-alt text-lg" aria-hidden="true"></i>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ========================== PRICING ========================== -->
    <section class="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="ct-kicker justify-center">{{ d.pricing.kicker }}</p>
          <h2 class="mt-4 font-heading text-3xl font-medium text-black md:text-4xl">{{ d.pricing.title }}</h2>
          <p class="mt-4 leading-relaxed text-gray-600">{{ d.pricing.intro }}</p>
        </div>

        <div class="mt-12 grid items-start gap-8 lg:grid-cols-5">
          <!-- Featured fixed-fare card -->
          <div class="relative flex flex-col rounded-2xl border-2 border-gold bg-[#0A0908] p-8 text-white shadow-xl lg:col-span-2">
            <span class="absolute -top-3 left-8 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">{{ d.pricing.priceLabel }}</span>
            <p class="text-sm font-medium text-white/70">{{ d.pricing.direction }}</p>
            <div class="mt-4 flex items-baseline gap-2">
              <span class="font-heading text-6xl font-bold text-gold">£{{ d.pricing.price }}</span>
            </div>
            <p class="mt-2 text-sm text-white/60">{{ d.pricing.perVehicle }}</p>
            <ul class="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm text-white/85">
              <li v-for="(f, i) in d.pricing.features" :key="i" class="flex items-start gap-2">
                <i class="bx bx-check mt-0.5 shrink-0 text-gold" aria-hidden="true"></i>
                <span>{{ f }}</span>
              </li>
            </ul>
            <NuxtLink :to="bookingPath" class="ct-btn-primary mt-8">
              <i class="bx bx-calendar text-xl" aria-hidden="true"></i>
              {{ d.labels.book }}
            </NuxtLink>
          </div>

          <!-- Vehicle options -->
          <div class="lg:col-span-3">
            <h3 class="font-heading text-xl font-bold text-black">{{ d.pricing.vehiclesTitle }}</h3>
            <div class="mt-5 grid gap-5 sm:grid-cols-3">
              <article
                v-for="v in d.pricing.vehicles"
                :key="v.key"
                :class="[
                  'relative flex flex-col rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
                  v.recommended ? 'border-gold ring-1 ring-gold/40' : 'border-gray-200 hover:border-gold/40',
                ]"
              >
                <span
                  v-if="v.recommended"
                  class="absolute -top-3 left-5 rounded-full bg-gold px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-black"
                >
                  {{ d.pricing.recommendedBadge }}
                </span>
                <div class="flex h-28 items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-3">
                  <img :src="v.image" :alt="v.name" class="h-full w-full object-contain" loading="lazy" width="320" height="160" />
                </div>
                <h4 class="mt-4 font-heading text-lg font-bold text-black">{{ v.name }}</h4>
                <ul class="mt-3 space-y-2 text-sm text-gray-700">
                  <li class="flex items-start gap-2">
                    <i class="bx bx-user mt-0.5 shrink-0 text-gold" aria-hidden="true"></i>
                    <span>{{ v.passengers }}</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="bx bxs-briefcase mt-0.5 shrink-0 text-gold" aria-hidden="true"></i>
                    <span>{{ v.luggage }}</span>
                  </li>
                </ul>
                <p class="mt-3 text-xs leading-relaxed text-gray-500">{{ v.note }}</p>
              </article>
            </div>
          </div>
        </div>

        <p class="mx-auto mt-8 max-w-3xl text-center text-sm text-gray-500">{{ d.pricing.note }}</p>
      </div>
    </section>

    <!-- ========================== TERMINALS ========================= -->
    <section class="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="ct-kicker justify-center">{{ d.terminals.kicker }}</p>
          <h2 class="mt-4 font-heading text-3xl font-medium text-black md:text-4xl">{{ d.terminals.title }}</h2>
          <p class="mt-4 leading-relaxed text-gray-600">{{ d.terminals.intro }}</p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <article
            v-for="term in d.terminals.items"
            :key="term.name"
            class="ct-card group flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
          >
            <span class="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold/15 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-black">
              <i class="bx bxs-ship text-2xl" aria-hidden="true"></i>
            </span>
            <h3 class="font-heading text-xl font-bold text-black">{{ term.name }}</h3>
            <p class="mt-1 text-xs font-semibold uppercase tracking-wider text-gold-700">{{ term.location }}</p>
            <p class="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{{ term.description }}</p>
            <p class="mt-4 border-t border-gray-100 pt-4 text-sm text-gray-700">
              <i class="bx bx-anchor mr-1 text-gold" aria-hidden="true"></i>{{ term.lines }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- ========================= HOW IT WORKS ====================== -->
    <section class="bg-white py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="ct-kicker justify-center">{{ d.steps.kicker }}</p>
          <h2 class="mt-4 font-heading text-3xl font-medium text-black md:text-4xl">{{ d.steps.title }}</h2>
          <p class="mt-4 leading-relaxed text-gray-600">{{ d.steps.intro }}</p>
        </div>

        <ol class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <li
            v-for="(step, i) in d.steps.items"
            :key="step.title"
            class="relative rounded-2xl border border-gray-100 bg-gray-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-md"
          >
            <span class="flex h-12 w-12 items-center justify-center rounded-full bg-gold font-heading text-xl font-bold text-black">{{ i + 1 }}</span>
            <h3 class="mt-5 font-heading text-lg font-bold text-black">{{ step.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-600">{{ step.description }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- ======================= JOURNEY TIMES ======================= -->
    <section class="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="ct-kicker justify-center">{{ d.journeys.kicker }}</p>
          <h2 class="mt-4 font-heading text-3xl font-medium text-black md:text-4xl">{{ d.journeys.title }}</h2>
          <p class="mt-4 leading-relaxed text-gray-600">{{ d.journeys.intro }}</p>
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="j in d.journeys.items"
            :key="j.from"
            class="rounded-2xl border border-gray-100 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-md"
          >
            <span class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
              <i class="bx bx-navigation text-2xl" aria-hidden="true"></i>
            </span>
            <h3 class="text-base font-semibold text-black">{{ j.from }}</h3>
            <p class="my-2 font-heading text-2xl font-bold text-gold">{{ j.time }}</p>
            <p class="text-sm text-gray-600">{{ j.note }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================ FAQ ============================ -->
    <section class="bg-white py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="ct-kicker justify-center">{{ d.faq.kicker }}</p>
          <h2 class="mt-4 font-heading text-3xl font-medium text-black md:text-4xl">{{ d.faq.title }}</h2>
          <p class="mt-4 leading-relaxed text-gray-600">{{ d.faq.intro }}</p>
        </div>

        <div class="mx-auto mt-12 max-w-3xl space-y-4">
          <details
            v-for="(faq, idx) in d.faq.items"
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
    <section class="relative overflow-hidden bg-[#0A0908] py-16 text-white sm:py-20 lg:py-24">
      <div class="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"></div>
      <div class="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"></div>
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="ct-kicker justify-center">{{ d.why.kicker }}</p>
          <h2 class="mt-4 font-heading text-3xl font-medium md:text-4xl">{{ d.why.title }}</h2>
        </div>
        <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="pillar in d.why.pillars" :key="pillar.title" class="text-center">
            <span class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold text-black">
              <i :class="['bx', pillar.icon]" class="text-3xl" aria-hidden="true"></i>
            </span>
            <h3 class="font-heading text-lg font-bold">{{ pillar.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-white/70">{{ pillar.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================== RELATED ========================== -->
    <section class="bg-white py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="ct-kicker justify-center">{{ d.related.kicker }}</p>
          <h2 class="mt-4 font-heading text-3xl font-medium text-black md:text-4xl">{{ d.related.title }}</h2>
          <p class="mt-4 leading-relaxed text-gray-600">{{ d.related.intro }}</p>
        </div>

        <div class="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="item in d.related.items"
            :key="item.path"
            :to="localePath(item.path)"
            class="group flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
          >
            <div class="mb-3 flex items-center gap-3">
              <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-black">
                <i :class="['bx', item.icon]" class="text-2xl" aria-hidden="true"></i>
              </span>
              <h3 class="font-heading text-lg font-bold text-black transition-colors group-hover:text-gold">{{ item.title }}</h3>
            </div>
            <p class="flex-1 text-sm leading-relaxed text-gray-600">{{ item.tagline }}</p>
            <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold">
              {{ d.related.linkLabel }}
              <i class="bx bx-right-arrow-alt text-lg transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"></i>
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ============================ CTA ============================ -->
    <section class="bg-white pb-16 sm:pb-20 lg:pb-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A0908] via-[#1A1816] to-[#0A0908] px-6 py-14 text-center text-white shadow-2xl sm:px-12 sm:py-16">
          <div class="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl"></div>
          <div class="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl"></div>
          <div class="relative">
            <h2 class="font-heading text-3xl font-medium md:text-4xl">{{ d.cta.title }}</h2>
            <p class="mx-auto mt-4 max-w-2xl text-lg text-white/85">{{ d.cta.subtitle }}</p>
            <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <NuxtLink :to="bookingPath" class="ct-btn-primary">
                <i class="bx bx-calendar text-xl" aria-hidden="true"></i>
                {{ d.cta.primary }}
              </NuxtLink>
              <a :href="PHONE_HREF" class="ct-btn-outline-gold">
                <i class="bx bx-phone text-xl" aria-hidden="true"></i>
                {{ d.cta.secondary }}
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
import { useLocalePath } from '#imports'
import { PHONE_DISPLAY, PHONE_HREF } from '~/utils/destinations'
import { useSeo } from '~/utils/useSeo'

const props = defineProps({
  transfer: { type: Object, required: true },
})

const d = props.transfer
const localePath = useLocalePath()

const SITE_URL = 'https://silkride.co.uk'
const bookingPath = localePath('/booking')
const pageUrl = `${SITE_URL}/cruise-transfers/${d.slug}`
const absImage = (path) => (path.startsWith('http') ? path : `${SITE_URL}${path}`)

const breadcrumbs = [
  { name: d.labels.breadcrumbHome, path: '/' },
  { name: d.labels.breadcrumbSection, path: '/services/airport-transfers' },
  { name: d.labels.breadcrumbPage, path: `/cruise-transfers/${d.slug}` },
]

// --- SEO ---------------------------------------------------------------
useSeo(d.seoKey, { image: d.hero.ogImage })

// --- Structured data ---------------------------------------------------
useSchemaOrg([
  defineLocalBusiness({
    name: 'Silk Ride Cruise Port Transfers',
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
      latitude: 51.47,
      longitude: -0.4543,
    },
    telephone: PHONE_DISPLAY,
    url: pageUrl,
    areaServed: [
      { '@type': 'Place', name: 'Heathrow Airport' },
      { '@type': 'Place', name: 'Port of Southampton' },
      { '@type': 'City', name: 'Southampton' },
      { '@type': 'City', name: 'London' },
    ],
    serviceType: 'Cruise Port Transfer Service',
    priceRange: '£££',
  }),
  {
    '@type': 'Service',
    name: d.schema.serviceName,
    description: d.schema.description,
    serviceType: 'Cruise Port Transfer',
    image: absImage(d.hero.ogImage),
    url: pageUrl,
    provider: { '@type': 'Organization', name: 'Silk Ride', url: SITE_URL },
    areaServed: [
      { '@type': 'Place', name: 'Heathrow Airport' },
      { '@type': 'Place', name: 'Southampton Cruise Terminals' },
    ],
    offers: {
      '@type': 'Offer',
      price: d.pricing.price,
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
      url: pageUrl,
      description: d.pricing.direction,
    },
  },
  {
    '@type': 'FAQPage',
    mainEntity: d.faq.items.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer.replace(/<[^>]+>/g, ''),
      },
    })),
  },
])
</script>

<style scoped>
/* Hero entrance reveals (CSS-only, run on load) */
.ct-reveal {
  opacity: 0;
  animation: ct-reveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.ct-reveal-1 { animation-delay: 0.1s; }
.ct-reveal-2 { animation-delay: 0.25s; }
.ct-reveal-3 { animation-delay: 0.4s; }

@keyframes ct-reveal {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

.ct-scroll-cue { animation: ct-bounce 1.8s ease-in-out infinite; }
@keyframes ct-bounce {
  0%, 100% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, 8px); }
}

/* Shared buttons */
.ct-btn-primary,
.ct-btn-glass,
.ct-btn-outline-gold {
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
.ct-btn-primary {
  background-color: #D4AF37;
  color: #000;
  box-shadow: 0 10px 25px -8px rgba(0, 0, 0, 0.5);
}
.ct-btn-primary:hover {
  transform: translateY(-2px);
  filter: brightness(0.96);
}
.ct-btn-glass {
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  font-weight: 600;
}
.ct-btn-glass:hover {
  background: #fff;
  color: #000;
  transform: translateY(-2px);
}
.ct-btn-outline-gold {
  color: #D4AF37;
  border: 2px solid #D4AF37;
  font-weight: 600;
}
.ct-btn-outline-gold:hover {
  background: #D4AF37;
  color: #000;
  transform: translateY(-2px);
}
.ct-btn-primary:focus-visible,
.ct-btn-glass:focus-visible,
.ct-btn-outline-gold:focus-visible {
  outline: 2px solid #D4AF37;
  outline-offset: 3px;
}

/* Section kicker label */
.ct-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #B8941F;
}
.ct-kicker::before {
  content: '';
  width: 1.75rem;
  height: 1px;
  background-color: #D4AF37;
}

/* Respect reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .ct-reveal { opacity: 1; animation: none; transform: none; }
  .ct-scroll-cue { display: none; }
  .ct-root :deep(*) { transition: none !important; }
  .ct-card:hover,
  .ct-btn-primary:hover,
  .ct-btn-glass:hover,
  .ct-btn-outline-gold:hover { transform: none; }
}
</style>
