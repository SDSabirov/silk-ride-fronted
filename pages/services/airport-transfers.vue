<template>
  <div>
    <Navbar />

    <CommonHero :image="heroImage" :page="$t('pages.services.cards.airport.title')" />

    <!-- Breadcrumbs -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <CommonBreadcrumbs :items="breadcrumbs" />
    </div>

    <CommonPageIntro
      :title="$t('pages.services.cards.airport.title')"
      :paragraph="$t('pages.services.cards.airport.description')"
    />

    <!-- Service Details Section -->
    <section class="max-w-screen-2xl mx-auto py-16 px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-6">{{ $t('airportTransfersPage.detailsTitle') }}</h2>
          <p class="text-lg text-gray-600 mb-6">
            {{ $t('airportTransfersPage.detailsP1') }}
          </p>

          <div class="space-y-4">
            <div v-for="(bullet, index) in serviceBullets" :key="index" class="flex items-start space-x-3">
              <div class="h-3 w-3 bg-gold rotate-45 mt-2 flex-shrink-0"></div>
              <span class="text-gray-700">{{ bullet }}</span>
            </div>
          </div>

          <!-- New detailed content for SEO -->
          <div class="mt-8 space-y-6">
            <div>
              <h3 class="text-xl font-semibold mb-3">{{ $t('airportTransfersPage.seoTitle1') }}</h3>
              <p class="text-gray-600 leading-relaxed">
                {{ $t('airportTransfersPage.seoP1') }}
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-3">{{ $t('airportTransfersPage.seoTitle2') }}</h3>
              <p class="text-gray-600 leading-relaxed">
                {{ $t('airportTransfersPage.seoP2') }}
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-3">{{ $t('airportTransfersPage.seoTitle3') }}</h3>
              <p class="text-gray-600 leading-relaxed">
                {{ $t('airportTransfersPage.seoP3') }}
              </p>
            </div>
          </div>

          <div class="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">{{ $t('airportTransfersPage.airportsTitle') }}</h3>
            <div class="grid grid-cols-2 gap-3">
              <div v-for="airport in airportsList" :key="airport.key" class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>{{ $t(airport.titleKey) }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:order-first">
          <img
            :src="serviceImage"
            alt="Luxury Airport Transfer Service"
            class="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('airportTransfersPage.whyChooseTitle') }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-time text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t('airportTransfersPage.flightTracking') }}</h3>
            <p class="text-gray-600">{{ $t('airportTransfersPage.flightTrackingDesc') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-user text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t('airportTransfersPage.meetGreet') }}</h3>
            <p class="text-gray-600">{{ $t('airportTransfersPage.meetGreetDesc') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-money text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t('airportTransfersPage.noHiddenCharges') }}</h3>
            <p class="text-gray-600">{{ $t('airportTransfersPage.noHiddenChargesDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Airport Routes & Pricing Section -->
    <section class="py-16 bg-white">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('airportTransfersPage.pricingTitle') }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="airport in pricingAirports" :key="airport.key" class="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold mb-4 text-center">{{ $t(airport.titleKey) }}</h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="font-medium">Mercedes E-Class:</span>
                <span class="font-bold text-gold">{{ airport.eClass }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-medium">Mercedes S-Class:</span>
                <span class="font-bold text-gold">{{ airport.sClass }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-medium">Mercedes V-Class:</span>
                <span class="font-bold text-gold">{{ airport.vClass }}</span>
              </div>
            </div>
            <p class="mt-4 text-sm text-gray-500 text-center">{{ $t('airportTransfersPage.journeyTime', { time: airport.journeyTime }) }}</p>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-lg text-gray-600 mb-6">
            {{ $t('airportTransfersPage.pricesNote') }}
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('airportTransfersPage.faqTitle') }}</h2>

        <div class="max-w-4xl mx-auto space-y-6">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-3">{{ faq.q }}</h3>
            <p class="text-gray-600">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">{{ $t('airportTransfersPage.ctaTitle') }}</h2>
        <p class="text-lg text-gray-600 mb-8">
          {{ $t('airportTransfersPage.ctaDesc') }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            :to="localePath('/booking')"
            class="px-8 py-3 bg-gold text-black font-semibold rounded hover:bg-yellow-500 transition"
          >
            {{ $t('airportTransfersPage.ctaBook') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/contact-us')"
            class="px-8 py-3 border border-gold text-gold font-semibold rounded hover:bg-gold hover:text-black transition"
          >
            {{ $t('airportTransfersPage.ctaQuote') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { useSeo } from '~/utils/useSeo'
import { useLocalePath, useI18n } from '#imports'
import { computed } from 'vue'
const heroImage = '/images/vclassjett.webp'
const serviceImage = '/images/vclassjett.webp'
import { organizationSchema } from '~/utils/organizationSchema'

const { t } = useI18n()
const localePath = useLocalePath()

useSeo('airportTransfers')

const breadcrumbs = computed(() => [
  { name: t('airportTransfersPage.breadcrumbHome'), path: '/' },
  { name: t('airportTransfersPage.breadcrumbServices'), path: '/services' },
  { name: t('airportTransfersPage.breadcrumbAirportTransfers'), path: '/services/airport-transfers' },
])

const serviceBullets = computed(() => {
  const bullets = []
  for (let i = 0; i < 10; i++) {
    const key = `pages.services.cards.airport.bullets[${i}]`
    const value = t(key)
    if (value === key) break
    bullets.push(value)
  }
  return bullets
})

const airportsList = [
  { key: 'heathrow', titleKey: 'airportPages.heathrow.heroTitle' },
  { key: 'gatwick', titleKey: 'airportPages.gatwick.heroTitle' },
  { key: 'stansted', titleKey: 'airportPages.stansted.heroTitle' },
  { key: 'luton', titleKey: 'airportPages.luton.heroTitle' },
  { key: 'londonCity', titleKey: 'airportPages.londonCity.heroTitle' },
  { key: 'farnborough', titleKey: 'airportPages.farnborough.heroTitle' },
]

const pricingAirports = [
  { key: 'heathrow', titleKey: 'airportPages.heathrow.heroTitle', eClass: '£120', sClass: '£160', vClass: '£160', journeyTime: '45-90 minutes' },
  { key: 'gatwick', titleKey: 'airportPages.gatwick.heroTitle', eClass: '£180', sClass: '£230', vClass: '£230', journeyTime: '60-120 minutes' },
  { key: 'stansted', titleKey: 'airportPages.stansted.heroTitle', eClass: '£200', sClass: '£250', vClass: '£250', journeyTime: '60-90 minutes' },
  { key: 'luton', titleKey: 'airportPages.luton.heroTitle', eClass: '£200', sClass: '£240', vClass: '£240', journeyTime: '60-90 minutes' },
  { key: 'londonCity', titleKey: 'airportPages.londonCity.heroTitle', eClass: '£120', sClass: '£160', vClass: '£160', journeyTime: '20-40 minutes' },
  { key: 'bigginHill', titleKey: 'airportPages.bigginHill.heroTitle', eClass: '£170', sClass: '£210', vClass: '£210', journeyTime: '45-75 minutes' },
  { key: 'farnborough', titleKey: 'airportPages.farnborough.heroTitle', eClass: '£240', sClass: '£270', vClass: '£270', journeyTime: '60-90 minutes' },
]

const faqs = computed(() => {
  const items = []
  for (let i = 0; i < 20; i++) {
    const qKey = `airportTransfersPage.faq[${i}].q`
    const q = t(qKey)
    if (q === qKey) break
    items.push({ q, a: t(`airportTransfersPage.faq[${i}].a`) })
  }
  return items
})

const airportTransfersSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Airport Transfer Service",
  "provider": organizationSchema,
  "serviceType": "Airport Transfer",
  "areaServed": {
    "@type": "City",
    "name": "London"
  },
  "description": "Premium airport transfer service with luxury Mercedes vehicles and professional chauffeurs. Flight tracking, meet & greet service, and 60 minutes free waiting time included.",
  "offers": {
    "@type": "Offer",
    "priceRange": "£120-£270",
    "priceCurrency": "GBP"
  }
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(airportTransfersSchema)
    }
  ]
})
</script>
