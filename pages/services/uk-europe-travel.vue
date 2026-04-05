<template>
  <div>
    <Navbar />

    <CommonHero :image="heroImage" :page="$t('pages.services.cards.longDistance.title')" />

    <!-- Breadcrumbs -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <CommonBreadcrumbs :items="breadcrumbs" />
    </div>

    <CommonPageIntro
      :title="$t('pages.services.cards.longDistance.title')"
      :paragraph="$t('pages.services.cards.longDistance.description')"
    />

    <!-- Service Details Section -->
    <section class="max-w-screen-2xl mx-auto py-16 px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-6">{{ $t('seo.ukEuropePage.luxuryTitle') }}</h2>
          <p class="text-lg text-gray-600 mb-6">
            {{ $t('seo.ukEuropePage.luxuryDesc') }}
          </p>

          <div class="space-y-4">
            <div v-for="(bullet, index) in serviceBullets" :key="index" class="flex items-start space-x-3">
              <div class="h-3 w-3 bg-gold rotate-45 mt-2 flex-shrink-0"></div>
              <span class="text-gray-700">{{ bullet }}</span>
            </div>
          </div>

          <div class="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">{{ $t('seo.ukEuropePage.destTitle') }}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div v-for="i in 8" :key="i" class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>{{ $t(`seo.ukEuropePage.dest${i - 1}`) }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:order-first">
          <img
            :src="serviceImage"
            alt="UK and Europe Travel Service"
            class="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

    <!-- Tour Types Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('seo.ukEuropePage.tourTitle') }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(tour, tIndex) in tours" :key="tIndex" class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i :class="tour.icon" class="text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-center">{{ $t(`seo.ukEuropePage.tour${tIndex}Title`) }}</h3>
            <p class="text-gray-600 text-center mb-4">{{ $t(`seo.ukEuropePage.tour${tIndex}Desc`) }}</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li v-for="i in 4" :key="i">{{ '\u2022' }} {{ $t(`seo.ukEuropePage.tour${tIndex}Item${i - 1}`) }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('seo.ukEuropePage.featuresTitle') }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(feature, index) in features" :key="index" class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i :class="feature.icon" class="text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t(`seo.ukEuropePage.feature${index}Title`) }}</h3>
            <p class="text-gray-600">{{ $t(`seo.ukEuropePage.feature${index}Desc`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-2xl mx-auto px-6 text-center">
        <blockquote class="text-2xl font-light italic text-gray-700 mb-6">
          "An absolutely magical journey through the Cotswolds. Our chauffeur was incredibly knowledgeable and made the trip unforgettable. The Mercedes S-Class was pure luxury."
        </blockquote>
        <cite class="text-gold font-semibold">- Sarah M., Private Tour Client</cite>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">{{ $t('seo.ukEuropePage.ctaTitle') }}</h2>
        <p class="text-lg text-gray-600 mb-8">{{ $t('seo.ukEuropePage.ctaDesc') }}</p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            :to="localePath('/booking')"
            class="px-8 py-3 bg-gold text-black font-semibold rounded hover:bg-yellow-500 transition"
          >
            {{ $t('seo.ukEuropePage.ctaBook') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/contact-us')"
            class="px-8 py-3 border border-gold text-gold font-semibold rounded hover:bg-gold hover:text-black transition"
          >
            {{ $t('seo.ukEuropePage.ctaQuote') }}
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
const heroImage = '/images/covers/assist.webp'
const serviceImage = '/images/covers/assist.webp'

const { t } = useI18n()
const localePath = useLocalePath()

useSeo('ukEuropeTravel')

const breadcrumbs = computed(() => [
  { name: t('seo.ukEuropePage.breadcrumbHome'), path: '/' },
  { name: t('seo.ukEuropePage.breadcrumbServices'), path: '/services' },
  { name: t('seo.ukEuropePage.breadcrumbUkEurope'), path: '/services/uk-europe-travel' },
])

const serviceBullets = computed(() => {
  const bullets = []
  for (let i = 0; i < 10; i++) {
    const key = `pages.services.cards.longDistance.bullets[${i}]`
    const value = t(key)
    if (value === key) break
    bullets.push(value)
  }
  return bullets
})

const tours = [
  { icon: 'bx bx-map' },
  { icon: 'bx bx-trip' },
  { icon: 'bx bx-world' },
]

const features = [
  { icon: 'bx bx-car' },
  { icon: 'bx bx-user' },
  { icon: 'bx bx-wifi' },
  { icon: 'bx bx-calendar' },
]

const ukEuropeTravelSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "UK & Europe Luxury Travel Service",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Silk Ride Chauffeur Services",
    "url": "https://silkride.co.uk",
    "telephone": "+44 203 488 2324",
    "image": [
      "https://silkride.co.uk/logo.svg",
      "https://silkride.co.uk/vclassSide.webp",
      "https://silkride.co.uk/sclassSide.webp",
      "https://silkride.co.uk/eclassSide.webp"
    ]
  },
  "touristType": "Luxury Traveler",
  "itinerary": [
    {
      "@type": "Place",
      "name": "The Cotswolds"
    },
    {
      "@type": "Place",
      "name": "Stonehenge"
    },
    {
      "@type": "Place",
      "name": "Paris"
    },
    {
      "@type": "Place",
      "name": "Amsterdam"
    }
  ],
  "description": "Luxury long-distance chauffeur service for UK and European travel. Bespoke private tours, luxury road trips, and cross-border travel with professional chauffeurs."
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(ukEuropeTravelSchema)
    }
  ]
})
</script>