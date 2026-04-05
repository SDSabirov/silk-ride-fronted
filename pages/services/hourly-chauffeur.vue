<template>
  <div>
    <Navbar />

    <CommonHero :image="heroImage" :page="$t('pages.services.cards.hourly.title')" />

    <!-- Breadcrumbs -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <CommonBreadcrumbs :items="breadcrumbs" />
    </div>

    <CommonPageIntro
      :title="$t('pages.services.cards.hourly.title')"
      :paragraph="$t('pages.services.cards.hourly.description')"
    />

    <!-- Service Details Section -->
    <section class="max-w-screen-2xl mx-auto py-16 px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-6">{{ $t('seo.hourlyPage.detailsTitle') }}</h2>
          <p class="text-lg text-gray-600 mb-6">
            {{ $t('seo.hourlyPage.detailsDesc') }}
          </p>
          
          <div class="space-y-4">
            <div v-for="(bullet, index) in serviceBullets" :key="index" class="flex items-start space-x-3">
              <div class="h-3 w-3 bg-gold rotate-45 mt-2 flex-shrink-0"></div>
              <span class="text-gray-700">{{ bullet }}</span>
            </div>
          </div>

          <div class="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">{{ $t('seo.hourlyPage.bookingOptionsTitle') }}</h3>
            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span><strong>{{ $t('seo.hourlyPage.bookingOption1Label') }}</strong> {{ $t('seo.hourlyPage.bookingOption1Desc') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span><strong>{{ $t('seo.hourlyPage.bookingOption2Label') }}</strong> {{ $t('seo.hourlyPage.bookingOption2Desc') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span><strong>{{ $t('seo.hourlyPage.bookingOption3Label') }}</strong> {{ $t('seo.hourlyPage.bookingOption3Desc') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span><strong>{{ $t('seo.hourlyPage.bookingOption4Label') }}</strong> {{ $t('seo.hourlyPage.bookingOption4Desc') }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:order-first">
          <img
            :src="serviceImage"
            alt="Hourly Chauffeur Service"
            class="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

    <!-- Popular Uses Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('seo.hourlyPage.popularUsesTitle') }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-building text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-center">{{ $t('seo.hourlyPage.use1Title') }}</h3>
            <p class="text-gray-600 text-center">{{ $t('seo.hourlyPage.use1Desc') }}</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-camera text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-center">{{ $t('seo.hourlyPage.use2Title') }}</h3>
            <p class="text-gray-600 text-center">{{ $t('seo.hourlyPage.use2Desc') }}</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-shopping-bag text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-center">{{ $t('seo.hourlyPage.use3Title') }}</h3>
            <p class="text-gray-600 text-center">{{ $t('seo.hourlyPage.use3Desc') }}</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-calendar-event text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-center">{{ $t('seo.hourlyPage.use4Title') }}</h3>
            <p class="text-gray-600 text-center">{{ $t('seo.hourlyPage.use4Desc') }}</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-group text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-center">{{ $t('seo.hourlyPage.use5Title') }}</h3>
            <p class="text-gray-600 text-center">{{ $t('seo.hourlyPage.use5Desc') }}</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-plus-medical text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-center">{{ $t('seo.hourlyPage.use6Title') }}</h3>
            <p class="text-gray-600 text-center">{{ $t('seo.hourlyPage.use6Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('seo.hourlyPage.benefitsTitle') }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-time text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ $t('seo.hourlyPage.benefit1Title') }}</h3>
                <p class="text-gray-600">{{ $t('seo.hourlyPage.benefit1Desc') }}</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-map text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ $t('seo.hourlyPage.benefit2Title') }}</h3>
                <p class="text-gray-600">{{ $t('seo.hourlyPage.benefit2Desc') }}</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-shield text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ $t('seo.hourlyPage.benefit3Title') }}</h3>
                <p class="text-gray-600">{{ $t('seo.hourlyPage.benefit3Desc') }}</p>
              </div>
            </div>
          </div>
          
          <div>
            <NuxtImg
              src="/images/eclass.webp"
              alt="Mercedes E-Class luxury interior for hourly hire"
              class="w-full h-80 object-cover rounded-lg shadow-lg"
              loading="lazy"
              width="800"
              height="500"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-2xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">{{ $t('seo.hourlyPage.ctaTitle') }}</h2>
        <p class="text-lg text-gray-600 mb-8">{{ $t('seo.hourlyPage.ctaDesc') }}</p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            :to="localePath('/booking')"
            class="px-8 py-3 bg-gold text-black font-semibold rounded hover:bg-yellow-500 transition"
          >
            {{ $t('seo.hourlyPage.ctaBookButton') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/contact-us')"
            class="px-8 py-3 border border-gold text-gold font-semibold rounded hover:bg-gold hover:text-black transition"
          >
            {{ $t('seo.hourlyPage.ctaQuoteButton') }}
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
const heroImage = '/images/covers/about-us.webp'
const serviceImage = '/images/covers/about-us.webp'

const { t } = useI18n()
const localePath = useLocalePath()

useSeo('hourlyChauffeur')

const breadcrumbs = computed(() => [
  { name: t('seo.hourlyPage.breadcrumbHome'), path: '/' },
  { name: t('seo.hourlyPage.breadcrumbServices'), path: '/services' },
  { name: t('seo.hourlyPage.breadcrumbHourly'), path: '/services/hourly-chauffeur' },
])

const serviceBullets = computed(() => {
  const bullets = []
  for (let i = 0; i < 10; i++) {
    const key = `pages.services.cards.hourly.bullets[${i}]`
    const value = t(key)
    if (value === key) break
    bullets.push(value)
  }
  return bullets
})

const hourlyChauffeurSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hourly Chauffeur Service",
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
  "serviceType": "Hourly Chauffeur Hire",
  "areaServed": ["London", "United Kingdom"],
  "description": "Flexible hourly chauffeur service for business meetings, sightseeing, shopping, and special occasions. Minimum 4 hours booking with luxury Mercedes vehicles."
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(hourlyChauffeurSchema)
    }
  ]
})
</script>