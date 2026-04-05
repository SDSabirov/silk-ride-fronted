<template>
  <div>
    <Navbar />

    <CommonHero :image="heroImage" :page="$t('pages.services.cards.event.title')" />

    <!-- Breadcrumbs -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <CommonBreadcrumbs :items="breadcrumbs" />
    </div>

    <CommonPageIntro
      :title="$t('pages.services.cards.event.title')"
      :paragraph="$t('pages.services.cards.event.description')"
    />

    <!-- Service Details Section -->
    <section class="max-w-screen-2xl mx-auto py-16 px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-6">{{ $t('seo.eventPage.luxuryTitle') }}</h2>
          <p class="text-lg text-gray-600 mb-6">
            {{ $t('seo.eventPage.luxuryDesc') }}
          </p>

          <div class="space-y-4">
            <div v-for="(bullet, index) in serviceBullets" :key="index" class="flex items-start space-x-3">
              <div class="h-3 w-3 bg-gold rotate-45 mt-2 flex-shrink-0"></div>
              <span class="text-gray-700">{{ bullet }}</span>
            </div>
          </div>

          <div class="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">{{ $t('seo.eventPage.eventTypesTitle') }}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div v-for="i in 8" :key="i" class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>{{ $t(`seo.eventPage.eventType${i - 1}`) }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:order-first">
          <img
            :src="serviceImage"
            alt="Event Chauffeur Service"
            class="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

    <!-- Popular Events Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('seo.eventPage.popularTitle') }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(venue, index) in venues" :key="index" class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i :class="venue.icon" class="text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t(`seo.eventPage.venue${index}Title`) }}</h3>
            <p class="text-gray-600">{{ $t(`seo.eventPage.venue${index}Desc`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Features Section -->
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('seo.eventPage.whyTitle') }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(feature, index) in features" :key="index" class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i :class="feature.icon" class="text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t(`seo.eventPage.feature${index}Title`) }}</h3>
            <p class="text-gray-600">{{ $t(`seo.eventPage.feature${index}Desc`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Corporate Events Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-2xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">{{ $t('seo.eventPage.corporateTitle') }}</h2>
            <p class="text-lg text-gray-600 mb-6">
              {{ $t('seo.eventPage.corporateDesc') }}
            </p>

            <div class="space-y-4">
              <div v-for="i in 4" :key="i" class="flex items-start space-x-3">
                <div class="h-3 w-3 bg-gold rotate-45 mt-2 flex-shrink-0"></div>
                <span class="text-gray-700">{{ $t(`seo.eventPage.corpBullet${i - 1}`) }}</span>
              </div>
            </div>
          </div>

          <div>
            <NuxtImg
              src="/images/covers/business-trip.webp"
              alt="Corporate event luxury chauffeur transportation"
              class="w-full h-80 object-cover rounded-lg shadow-lg"
              loading="lazy"
              width="800"
              height="500"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Booking Process Section -->
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('seo.eventPage.bookingTitle') }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="i in 3" :key="i" class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
              {{ i }}
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t(`seo.eventPage.step${i - 1}Title`) }}</h3>
            <p class="text-gray-600">{{ $t(`seo.eventPage.step${i - 1}Desc`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-2xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">{{ $t('seo.eventPage.ctaTitle') }}</h2>
        <p class="text-lg text-gray-600 mb-8">{{ $t('seo.eventPage.ctaDesc') }}</p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            :to="localePath('/booking')"
            class="px-8 py-3 bg-gold text-black font-semibold rounded hover:bg-yellow-500 transition"
          >
            {{ $t('seo.eventPage.ctaBook') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/contact-us')"
            class="px-8 py-3 border border-gold text-gold font-semibold rounded hover:bg-gold hover:text-black transition"
          >
            {{ $t('seo.eventPage.ctaQuote') }}
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
const heroImage = '/images/womanpassenger.webp'
const serviceImage = '/images/womanpassenger.webp'

const { t } = useI18n()
const localePath = useLocalePath()

useSeo('eventChauffeur')

const breadcrumbs = computed(() => [
  { name: t('seo.eventPage.breadcrumbHome'), path: '/' },
  { name: t('seo.eventPage.breadcrumbServices'), path: '/services' },
  { name: t('seo.eventPage.breadcrumbEvent'), path: '/services/event-chauffeur' },
])

const serviceBullets = computed(() => {
  const bullets = []
  for (let i = 0; i < 10; i++) {
    const key = `pages.services.cards.event.bullets[${i}]`
    const value = t(key)
    if (value === key) break
    bullets.push(value)
  }
  return bullets
})

const venues = [
  { icon: 'bx bx-football' },
  { icon: 'bx bx-music' },
  { icon: 'bx bx-trophy' },
  { icon: 'bx bx-building' },
  { icon: 'bx bx-film' },
  { icon: 'bx bx-star' },
]

const features = [
  { icon: 'bx bx-time' },
  { icon: 'bx bx-map' },
  { icon: 'bx bx-group' },
  { icon: 'bx bx-shield' },
]

const eventChauffeurSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Event Chauffeur Service",
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
  "serviceType": "Event Transportation",
  "areaServed": ["London", "United Kingdom"],
  "description": "Luxury event chauffeur service for corporate events, concerts, sporting events, award ceremonies, and private parties. Professional drivers and premium Mercedes vehicles."
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(eventChauffeurSchema)
    }
  ]
})
</script>