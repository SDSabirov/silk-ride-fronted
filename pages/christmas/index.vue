<template>
  <div class="xm-root">
    <Navbar />

    <!-- ============================ HERO ============================ -->
    <section class="relative flex flex-col overflow-hidden bg-[#0A0908] lg:min-h-[80vh] lg:justify-center">
      <img
        :src="heroImage"
        :alt="$t('christmasPage.hero.alt')"
        class="h-60 w-full object-cover sm:h-80 lg:absolute lg:inset-0 lg:h-full"
        width="1344"
        height="768"
        loading="eager"
        fetchpriority="high"
        decoding="async"
      />
      <div class="absolute inset-0 hidden bg-gradient-to-r from-black/90 via-black/65 to-black/25 lg:block"></div>

      <div class="relative z-10 w-full bg-[#0A0908] lg:bg-transparent">
        <div class="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
          <div class="max-w-3xl text-white">
            <p class="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold sm:text-sm">
              <span class="h-px w-8 bg-gold"></span>
              {{ $t('christmasPage.hero.kicker') }}
            </p>
            <h1 class="font-heading text-3xl font-medium leading-[1.1] sm:text-4xl md:text-5xl xl:text-6xl">
              {{ $t('christmasPage.hero.title') }}
              <span class="block text-gold">{{ $t('christmasPage.hero.titleAccent') }}</span>
            </h1>
            <p class="mt-5 max-w-2xl text-base font-light leading-relaxed text-white/90 sm:text-lg md:text-xl">
              {{ $t('christmasPage.hero.subtitle') }}
            </p>

            <div class="mt-8 flex flex-col gap-4 sm:flex-row">
              <NuxtLink :to="localePath('/booking')" class="xm-btn-primary">
                <i class="bx bx-calendar text-xl" aria-hidden="true"></i>
                {{ $t('clusters.book') }}
              </NuxtLink>
              <a :href="PHONE_HREF" class="xm-btn-glass">
                <i class="bx bx-phone text-xl" aria-hidden="true"></i>
                {{ $t('tours.callPhone', { phone: PHONE_DISPLAY }) }}
              </a>
            </div>

            <div class="mt-10 grid max-w-4xl gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md sm:mt-12 sm:grid-cols-3">
              <div v-for="stat in stats" :key="stat.label" class="flex items-center gap-4 bg-white/[0.03] p-5 sm:p-6">
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

    <div class="border-b border-gray-100 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CommonBreadcrumbs :items="breadcrumbs" />
      </div>
    </div>

    <!-- ========================== OVERVIEW ========================== -->
    <section class="bg-white py-16 sm:py-20 lg:py-24">
      <div class="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p class="xm-kicker">{{ $t('christmasPage.overview.kicker') }}</p>
          <h2 class="mt-4 font-heading text-3xl font-medium text-black md:text-4xl">{{ $t('christmasPage.overview.heading') }}</h2>
          <div class="mt-5 h-1 w-16 bg-gold"></div>
          <div class="mt-6 space-y-4">
            <p v-for="(para, i) in overviewParagraphs" :key="i" class="leading-relaxed text-gray-700">{{ para }}</p>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-100 lg:mt-2">
          <div class="absolute inset-x-0 top-0 h-1.5 bg-gold"></div>
          <h3 class="font-heading text-2xl font-bold text-black">{{ $t('christmasPage.overview.includesTitle') }}</h3>
          <ul class="mt-6 space-y-4">
            <li v-for="(inc, i) in overviewIncludes" :key="i" class="flex items-start gap-3">
              <i class="bx bx-check-circle mt-0.5 shrink-0 text-xl text-gold" aria-hidden="true"></i>
              <span class="text-gray-700">{{ inc }}</span>
            </li>
          </ul>
          <NuxtLink :to="localePath('/booking')" class="mt-8 inline-flex items-center gap-2 font-semibold text-black transition-colors hover:text-gold">
            {{ $t('clusters.getQuote') }}
            <i class="bx bx-right-arrow-alt text-lg" aria-hidden="true"></i>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ================== EACH SERVICE AT CHRISTMAS ================= -->
    <section class="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="xm-kicker justify-center">{{ $t('christmasPage.services.kicker') }}</p>
          <h2 class="mt-4 font-heading text-3xl font-medium text-black md:text-4xl">{{ $t('christmasPage.services.title') }}</h2>
          <p class="mt-4 leading-relaxed text-gray-600">{{ $t('christmasPage.services.intro') }}</p>
        </div>

        <div class="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="item in services"
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
            <p class="flex-1 text-sm leading-relaxed text-gray-600">{{ item.text }}</p>
            <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold">
              {{ item.link }}
              <i class="bx bx-right-arrow-alt text-lg transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"></i>
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ===================== CHRISTMAS GUIDE PAGES ================== -->
    <ClusterHub section="christmas" />

    <!-- ========================== KEY DATES ========================= -->
    <section class="bg-white py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div class="lg:col-span-2">
            <p class="xm-kicker">{{ $t('christmasPage.dates.kicker') }}</p>
            <h2 class="mt-4 font-heading text-3xl font-medium text-black md:text-4xl">{{ $t('christmasPage.dates.title') }}</h2>
            <div class="mt-5 h-1 w-16 bg-gold"></div>
            <p class="mt-6 leading-relaxed text-gray-700">{{ $t('christmasPage.dates.intro') }}</p>
          </div>
          <ul class="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            <li v-for="(d, i) in dates" :key="i" class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 class="font-heading text-lg font-bold text-black">{{ d.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-gray-600">{{ d.text }}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ============================ FAQ ============================ -->
    <section class="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="xm-kicker justify-center">{{ $t('christmasPage.faqKicker') }}</p>
          <h2 class="mt-4 font-heading text-3xl font-medium text-black md:text-4xl">{{ $t('christmasPage.faqTitle') }}</h2>
        </div>
        <div class="mx-auto mt-12 max-w-3xl space-y-4">
          <details
            v-for="(faq, idx) in faqItems"
            :key="idx"
            class="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow open:shadow-md"
          >
            <summary class="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-black sm:p-6">
              <h3 class="text-base font-semibold sm:text-lg">{{ faq.question }}</h3>
              <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold transition-transform duration-300 group-open:rotate-180">
                <i class="bx bx-chevron-down text-xl" aria-hidden="true"></i>
              </span>
            </summary>
            <p class="-mt-1 px-5 pb-6 leading-relaxed text-gray-700 sm:px-6">{{ faq.answer }}</p>
          </details>
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
            <h2 class="font-heading text-3xl font-medium md:text-4xl">{{ $t('christmasPage.cta.title') }}</h2>
            <p class="mx-auto mt-4 max-w-2xl text-lg text-white/85">{{ $t('christmasPage.cta.subtitle') }}</p>
            <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <NuxtLink :to="localePath('/booking')" class="xm-btn-primary">
                <i class="bx bx-calendar text-xl" aria-hidden="true"></i>
                {{ $t('clusters.book') }}
              </NuxtLink>
              <a :href="PHONE_HREF" class="xm-btn-outline-gold">
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
import { computed } from 'vue'
import { useLocalePath, useI18n } from '#imports'
import { PHONE_DISPLAY, PHONE_HREF } from '~/utils/destinations'
import { useSeo } from '~/utils/useSeo'
import { serviceSchema, faqSchema } from '~/utils/siteSchema'
import { PRICING } from '~/config/pricing'

const heroImage = '/images/hero-chauffeur.webp'

const localePath = useLocalePath()
const { t, te, locale } = useI18n()

const seo = useSeo('christmas', { image: heroImage })

const breadcrumbs = [
  { name: t('clusters.breadcrumbHome'), path: '/' },
  { name: t('clusters.breadcrumbServices'), path: '/services' },
  { name: t('christmasPage.breadcrumb'), path: '/christmas' },
]

// Reads an i18n array (`key[0]`, `key[1]`, …) until it runs out.
function list(key, map = (k) => t(k)) {
  const out = []
  for (let i = 0; i < 20; i++) {
    const k = `${key}[${i}]`
    if (!te(k) && !te(`${k}.title`) && !te(`${k}.q`)) break
    out.push(map(k))
  }
  return out
}

// Prices come from config/pricing.ts so they can never drift from the rest of the site.
const prices = {
  hourly: PRICING.hourly.eClass,
  hourlyPremium: PRICING.hourly.sClass,
  heathrow: PRICING.airportTransfers.heathrow.eClass,
  gatwick: PRICING.airportTransfers.gatwick.eClass,
}

const stats = [
  { icon: 'bx-calendar', label: t('christmasPage.stats.open'), sub: t('christmasPage.stats.openSub') },
  { icon: 'bx-time', label: t('christmasPage.stats.hourly', prices), sub: t('christmasPage.stats.hourlySub') },
  { icon: 'bxs-plane-alt', label: t('christmasPage.stats.airport', prices), sub: t('christmasPage.stats.airportSub') },
]

const overviewParagraphs = list('christmasPage.overview.paragraphs')
const overviewIncludes = list('christmasPage.overview.includes')

const SERVICE_LINKS = [
  { key: 'airport', icon: 'bxs-plane-alt', path: '/services/airport-transfers' },
  { key: 'hourly', icon: 'bx-time', path: '/services/hourly-chauffeur' },
  { key: 'corporate', icon: 'bx-briefcase', path: '/services/corporate-travel' },
  { key: 'event', icon: 'bx-calendar-star', path: '/services/event-chauffeur' },
  { key: 'longDistance', icon: 'bx-globe', path: '/services/uk-europe-travel' },
  { key: 'tours', icon: 'bx-map-alt', path: '/destination-tours' },
]
const services = SERVICE_LINKS.map((s) => ({
  ...s,
  title: t(`christmasPage.services.items.${s.key}.title`),
  text: t(`christmasPage.services.items.${s.key}.text`, prices),
  link: t(`christmasPage.services.items.${s.key}.link`),
}))

const dates = list('christmasPage.dates.items', (k) => ({ title: t(`${k}.title`), text: t(`${k}.text`) }))

const faqItems = computed(() =>
  list('christmasPage.faq', (k) => ({ question: t(`${k}.q`), answer: t(`${k}.a`, prices) }))
)

useSchemaOrg([
  serviceSchema({
    path: '/christmas',
    locale: locale.value,
    name: seo.title,
    description: seo.description,
    serviceType: 'Chauffeur service',
    areaServed: [{ type: 'City', name: 'London' }, { type: 'Country', name: 'United Kingdom' }],
    image: heroImage,
    priceFrom: PRICING.hourly.eClass,
    priceUnit: 'per hour',
  }),
  faqSchema(faqItems.value, '/christmas', locale.value),
])
</script>

<style scoped>
.xm-btn-primary,
.xm-btn-glass,
.xm-btn-outline-gold {
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
.xm-btn-primary {
  background-color: #D4AF37;
  color: #000;
  box-shadow: 0 10px 25px -8px rgba(0, 0, 0, 0.5);
}
.xm-btn-primary:hover { transform: translateY(-2px); filter: brightness(0.96); }
.xm-btn-glass {
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  font-weight: 600;
}
.xm-btn-glass:hover { background: #fff; color: #000; transform: translateY(-2px); }
.xm-btn-outline-gold { color: #D4AF37; border: 2px solid #D4AF37; font-weight: 600; }
.xm-btn-outline-gold:hover { background: #D4AF37; color: #000; transform: translateY(-2px); }
.xm-btn-primary:focus-visible,
.xm-btn-glass:focus-visible,
.xm-btn-outline-gold:focus-visible { outline: 2px solid #D4AF37; outline-offset: 3px; }

.xm-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #B8941F;
}
.xm-kicker::before { content: ''; width: 1.75rem; height: 1px; background-color: #D4AF37; }

@media (prefers-reduced-motion: reduce) {
  .xm-btn-primary:hover,
  .xm-btn-glass:hover,
  .xm-btn-outline-gold:hover { transform: none; }
}
</style>
