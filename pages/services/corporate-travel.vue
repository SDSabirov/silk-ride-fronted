<template>
  <div>
    <Navbar />

    <CommonHero :image="heroImage" :page="$t('pages.services.cards.corporate.title')" />

    <!-- Breadcrumbs -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <CommonBreadcrumbs :items="breadcrumbs" />
    </div>

    <CommonPageIntro
      :title="$t('pages.services.cards.corporate.title')"
      :paragraph="$t('pages.services.cards.corporate.description')"
    />

    <!-- Service Details Section -->
    <section class="max-w-screen-2xl mx-auto py-16 px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-6">{{ $t('seo.corporateTravelPage.detailsTitle') }}</h2>
          <p class="text-lg text-gray-600 mb-6">
            {{ $t('seo.corporateTravelPage.detailsDesc') }}
          </p>

          <div class="space-y-4">
            <div v-for="(bullet, index) in serviceBullets" :key="index" class="flex items-start space-x-3">
              <div class="h-3 w-3 bg-gold rotate-45 mt-2 flex-shrink-0"></div>
              <span class="text-gray-700">{{ bullet }}</span>
            </div>
          </div>

          <!-- Enhanced content for SEO -->
          <div class="mt-8 space-y-6">
            <div>
              <h3 class="text-xl font-semibold mb-3">{{ $t('seo.corporateTravelPage.seoTitle1') }}</h3>
              <p class="text-gray-600 leading-relaxed">
                {{ $t('seo.corporateTravelPage.seoP1') }}
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-3">{{ $t('seo.corporateTravelPage.seoTitle2') }}</h3>
              <p class="text-gray-600 leading-relaxed">
                {{ $t('seo.corporateTravelPage.seoP2') }}
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-3">{{ $t('seo.corporateTravelPage.seoTitle3') }}</h3>
              <p class="text-gray-600 leading-relaxed">
                {{ $t('seo.corporateTravelPage.seoP3') }}
              </p>
            </div>
          </div>

          <div class="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">{{ $t('seo.corporateTravelPage.corporateServicesTitle') }}</h3>
            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>{{ $t('seo.corporateTravelPage.corpService1') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>{{ $t('seo.corporateTravelPage.corpService2') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>{{ $t('seo.corporateTravelPage.corpService3') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>{{ $t('seo.corporateTravelPage.corpService4') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>{{ $t('seo.corporateTravelPage.corpService5') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>{{ $t('seo.corporateTravelPage.corpService6') }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:order-first">
          <img
            :src="serviceImage"
            :alt="$t('seo.corporateTravelPage.imageAlt')"
            class="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('seo.corporateTravelPage.whyTitle') }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-wifi text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t('seo.corporateTravelPage.feature1Title') }}</h3>
            <p class="text-gray-600">{{ $t('seo.corporateTravelPage.feature1Desc') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-shield text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t('seo.corporateTravelPage.feature2Title') }}</h3>
            <p class="text-gray-600">{{ $t('seo.corporateTravelPage.feature2Desc') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-calendar text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t('seo.corporateTravelPage.feature3Title') }}</h3>
            <p class="text-gray-600">{{ $t('seo.corporateTravelPage.feature3Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('seo.corporateTravelPage.benefitsTitle') }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-time-five text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ $t('seo.corporateTravelPage.benefit1Title') }}</h3>
                <p class="text-gray-600">{{ $t('seo.corporateTravelPage.benefit1Desc') }}</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-star text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ $t('seo.corporateTravelPage.benefit2Title') }}</h3>
                <p class="text-gray-600">{{ $t('seo.corporateTravelPage.benefit2Desc') }}</p>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-dollar text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ $t('seo.corporateTravelPage.benefit3Title') }}</h3>
                <p class="text-gray-600">{{ $t('seo.corporateTravelPage.benefit3Desc') }}</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-support text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ $t('seo.corporateTravelPage.benefit4Title') }}</h3>
                <p class="text-gray-600">{{ $t('seo.corporateTravelPage.benefit4Desc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Corporate Pricing Section -->
    <section class="py-16 bg-white">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('seo.corporateTravelPage.pricingTitle') }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold mb-3">{{ $t('seo.corporateTravelPage.pricingHourlyTitle') }}</h3>
            <div class="space-y-2 text-gray-600">
              <p><strong>{{ $t('seo.corporateTravelPage.pricingHourlyEClass') }}</strong> {{ $t('seo.corporateTravelPage.pricingHourlyEClassPrice') }}</p>
              <p><strong>{{ $t('seo.corporateTravelPage.pricingHourlySClass') }}</strong> {{ $t('seo.corporateTravelPage.pricingHourlySClassPrice') }}</p>
              <p><strong>{{ $t('seo.corporateTravelPage.pricingHourlyVClass') }}</strong> {{ $t('seo.corporateTravelPage.pricingHourlyVClassPrice') }}</p>
              <p><strong>{{ $t('seo.corporateTravelPage.pricingHourlyMin') }}</strong> {{ $t('seo.corporateTravelPage.pricingHourlyMinVal') }}</p>
            </div>
            <p class="mt-4 text-sm text-gray-500">{{ $t('seo.corporateTravelPage.pricingHourlyNote') }}</p>
          </div>

          <div class="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold mb-3">{{ $t('seo.corporateTravelPage.pricingHalfTitle') }}</h3>
            <div class="space-y-2 text-gray-600">
              <p><strong>{{ $t('seo.corporateTravelPage.pricingHalfEClass') }}</strong> {{ $t('seo.corporateTravelPage.pricingHalfEClassPrice') }}</p>
              <p><strong>{{ $t('seo.corporateTravelPage.pricingHalfSClass') }}</strong> {{ $t('seo.corporateTravelPage.pricingHalfSClassPrice') }}</p>
              <p><strong>{{ $t('seo.corporateTravelPage.pricingHalfVClass') }}</strong> {{ $t('seo.corporateTravelPage.pricingHalfVClassPrice') }}</p>
              <p><strong>{{ $t('seo.corporateTravelPage.pricingHalfCoverage') }}</strong> {{ $t('seo.corporateTravelPage.pricingHalfCoverageVal') }}</p>
            </div>
            <p class="mt-4 text-sm text-gray-500">{{ $t('seo.corporateTravelPage.pricingHalfNote') }}</p>
          </div>

          <div class="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold mb-3">{{ $t('seo.corporateTravelPage.pricingFullTitle') }}</h3>
            <div class="space-y-2 text-gray-600">
              <p><strong>{{ $t('seo.corporateTravelPage.pricingFullEClass') }}</strong> {{ $t('seo.corporateTravelPage.pricingFullEClassPrice') }}</p>
              <p><strong>{{ $t('seo.corporateTravelPage.pricingFullSClass') }}</strong> {{ $t('seo.corporateTravelPage.pricingFullSClassPrice') }}</p>
              <p><strong>{{ $t('seo.corporateTravelPage.pricingFullVClass') }}</strong> {{ $t('seo.corporateTravelPage.pricingFullVClassPrice') }}</p>
              <p><strong>{{ $t('seo.corporateTravelPage.pricingFullCoverage') }}</strong> {{ $t('seo.corporateTravelPage.pricingFullCoverageVal') }}</p>
            </div>
            <p class="mt-4 text-sm text-gray-500">{{ $t('seo.corporateTravelPage.pricingFullNote') }}</p>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-lg text-gray-600 mb-6">
            {{ $t('seo.corporateTravelPage.pricingFooter') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Corporate FAQ Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('seo.corporateTravelPage.faqTitle') }}</h2>

        <div class="max-w-4xl mx-auto space-y-6">
          <div v-for="(item, index) in faqItems" :key="index" class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-3">{{ item.q }}</h3>
            <p class="text-gray-600">{{ item.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Industry Solutions Section -->
    <section class="py-16 bg-white">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('seo.corporateTravelPage.industryTitle') }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-building text-white text-2xl"></i>
            </div>
            <h3 class="text-lg font-semibold mb-3">{{ $t('seo.corporateTravelPage.industry1Title') }}</h3>
            <p class="text-gray-600 text-sm">{{ $t('seo.corporateTravelPage.industry1Desc') }}</p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-briefcase text-white text-2xl"></i>
            </div>
            <h3 class="text-lg font-semibold mb-3">{{ $t('seo.corporateTravelPage.industry2Title') }}</h3>
            <p class="text-gray-600 text-sm">{{ $t('seo.corporateTravelPage.industry2Desc') }}</p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-cog text-white text-2xl"></i>
            </div>
            <h3 class="text-lg font-semibold mb-3">{{ $t('seo.corporateTravelPage.industry3Title') }}</h3>
            <p class="text-gray-600 text-sm">{{ $t('seo.corporateTravelPage.industry3Desc') }}</p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-world text-white text-2xl"></i>
            </div>
            <h3 class="text-lg font-semibold mb-3">{{ $t('seo.corporateTravelPage.industry4Title') }}</h3>
            <p class="text-gray-600 text-sm">{{ $t('seo.corporateTravelPage.industry4Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-2xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">{{ $t('seo.corporateTravelPage.ctaTitle') }}</h2>
        <p class="text-lg text-gray-600 mb-8">
          {{ $t('seo.corporateTravelPage.ctaDesc') }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            :to="localePath('/booking')"
            class="px-8 py-3 bg-gold text-black font-semibold rounded hover:bg-yellow-500 transition"
          >
            {{ $t('seo.corporateTravelPage.ctaBook') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/contact-us')"
            class="px-8 py-3 border border-gold text-gold font-semibold rounded hover:bg-gold hover:text-black transition"
          >
            {{ $t('seo.corporateTravelPage.ctaAccount') }}
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
const heroImage = '/images/covers/business-trip.webp'
const serviceImage = '/images/covers/business-trip.webp'

const { t } = useI18n()
const localePath = useLocalePath()

useSeo('corporateTravel')

const breadcrumbs = computed(() => [
  { name: t('seo.corporateTravelPage.breadcrumbHome'), path: '/' },
  { name: t('seo.corporateTravelPage.breadcrumbServices'), path: '/services' },
  { name: t('seo.corporateTravelPage.breadcrumbCorporate'), path: '/services/corporate-travel' },
])

const serviceBullets = computed(() => {
  const bullets = []
  for (let i = 0; i < 10; i++) {
    const key = `pages.services.cards.corporate.bullets[${i}]`
    const value = t(key)
    if (value === key) break
    bullets.push(value)
  }
  return bullets
})

const faqItems = computed(() => {
  const items = []
  for (let i = 0; i < 5; i++) {
    items.push({
      q: t(`seo.corporateTravelPage.faq[${i}].q`),
      a: t(`seo.corporateTravelPage.faq[${i}].a`),
    })
  }
  return items
})

const corporateTravelSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Corporate Travel Service",
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
  "serviceType": "Corporate Chauffeur Service",
  "areaServed": ["London", "United Kingdom"],
  "description": "Executive corporate chauffeur service for business travel, meetings, and corporate events. Professional drivers, luxury Mercedes fleet, Wi-Fi and discretion guaranteed."
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(corporateTravelSchema)
    }
  ]
})
</script>
