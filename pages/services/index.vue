<template>
  <div>
    <Navbar />

    <CommonHero :image="cover" :page="$t('pages.services.heroTitle')" loading="lazy" />

    <!-- Breadcrumbs -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <CommonBreadcrumbs :items="breadcrumbs" />
    </div>

    <CommonPageIntro
      :title="$t('pages.services.introTitle')"
      :paragraph="$t('pages.services.introParagraph')"
    />

    <ServicesMainPoints />

    <!-- Services Overview Section -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-screen-2xl mx-auto px-6">
        <div class="text-center mb-16">
          <div class="w-16 h-1 bg-gold mb-6 mx-auto"></div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{{ $t('pages.services.servicesRangeTitle') }}</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in detailedServices" :key="service.slug" class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div class="p-8">
              <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold/10 mb-6">
                <i :class="service.icon" class="text-gold text-xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-3 text-gray-900">{{ service.title }}</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ service.description }}</p>
              <NuxtLink
                :to="localePath(service.path)"
                :aria-label="t(`pages.services.cards.${service.cardKey}.learnMoreLabel`)"
                class="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-gold transition-colors"
              >
                {{ $t('pages.services.learnMore') }}
                <span class="sr-only">{{ t(`pages.services.cards.${service.cardKey}.learnMoreLabel`) }}</span>
                <i class="bx bx-right-arrow-alt ml-1 text-lg"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Section -->
    <section class="relative py-24 bg-white overflow-hidden">
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl"></div>

      <div class="relative max-w-screen-2xl mx-auto px-6">
        <div class="text-center mb-16">
          <div class="w-16 h-1 bg-gold mb-6 mx-auto"></div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{{ $t('pages.services.whyChooseTitle') }}</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 mb-6">
              <i class="bx bx-shield text-gold text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">{{ $t('pages.services.whyChoose.licensed.title') }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ $t('pages.services.whyChoose.licensed.text') }}</p>
          </div>

          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 mb-6">
              <i class="bx bx-user-check text-gold text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">{{ $t('pages.services.whyChoose.chauffeurs.title') }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ $t('pages.services.whyChoose.chauffeurs.text') }}</p>
          </div>

          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 mb-6">
              <i class="bx bx-car text-gold text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">{{ $t('pages.services.whyChoose.fleet.title') }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ $t('pages.services.whyChoose.fleet.text') }}</p>
          </div>

          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 mb-6">
              <i class="bx bx-time-five text-gold text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">{{ $t('pages.services.whyChoose.availability.title') }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ $t('pages.services.whyChoose.availability.text') }}</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { useSeo } from '~/utils/useSeo'
import { useI18n, useLocalePath } from '#imports'

const cover = "/images/covers/services-cover.webp"

const { t } = useI18n()
const localePath = useLocalePath()
useSeo('services')

const breadcrumbs = computed(() => [
  { name: t('pages.services.breadcrumbHome'), path: '/' },
  { name: t('pages.services.breadcrumbServices'), path: '/services' },
])

// cardKey maps to pages.services.cards.<cardKey>.learnMoreLabel i18n keys
// shared with components/Services/Card.vue (same six services, different grid).
const detailedServices = computed(() => [
  {
    slug: 'airport-transfers',
    cardKey: 'airport',
    title: t('pages.services.servicesList.airport.title'),
    description: t('pages.services.servicesList.airport.description'),
    icon: 'bx bxs-plane-take-off',
    path: '/services/airport-transfers'
  },
  {
    slug: 'corporate-travel',
    cardKey: 'corporate',
    title: t('pages.services.servicesList.corporate.title'),
    description: t('pages.services.servicesList.corporate.description'),
    icon: 'bx bx-briefcase',
    path: '/services/corporate-travel'
  },
  {
    slug: 'hourly-chauffeur',
    cardKey: 'hourly',
    title: t('pages.services.servicesList.hourly.title'),
    description: t('pages.services.servicesList.hourly.description'),
    icon: 'bx bx-time',
    path: '/services/hourly-chauffeur'
  },
  {
    slug: 'uk-europe-travel',
    cardKey: 'longDistance',
    title: t('pages.services.servicesList.ukEurope.title'),
    description: t('pages.services.servicesList.ukEurope.description'),
    icon: 'bx bx-world',
    path: '/services/uk-europe-travel'
  },
  {
    slug: 'wedding-chauffeur',
    cardKey: 'wedding',
    title: t('pages.services.servicesList.wedding.title'),
    description: t('pages.services.servicesList.wedding.description'),
    icon: 'bx bx-heart',
    path: '/services/wedding-chauffeur'
  },
  {
    slug: 'event-chauffeur',
    cardKey: 'event',
    title: t('pages.services.servicesList.event.title'),
    description: t('pages.services.servicesList.event.description'),
    icon: 'bx bx-calendar-event',
    path: '/services/event-chauffeur'
  }
])

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
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
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "GB"
    }
  },
  "serviceType": [
    "Airport Transfers",
    "Hourly Chauffeur Hire",
    "City-to-City Transfers",
    "Wedding Chauffeur",
    "Guided Tours"
  ],
  "areaServed": ["London", "United Kingdom"]
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(servicesSchema)
    }
  ]
})
</script>
