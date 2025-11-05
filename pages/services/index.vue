<template>
  <div>
    <Navbar />

    <CommonHero :image="cover" :page="$t('pages.services.heroTitle')" loading="lazy" />

    <CommonPageIntro
      :title="$t('pages.services.introTitle')"
      :paragraph="$t('pages.services.introParagraph')"
    />

    <ServicesMainPoints />

    <!-- Services Overview Section -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-screen-xl mx-auto px-6">
        <div class="text-center mb-16">
          <div class="w-16 h-1 bg-gold mb-6 mx-auto"></div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Complete Range of Chauffeur Services</h2>
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
                :aria-label="`Learn More About ${service.title}`"
                class="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-gold transition-colors"
              >
                Learn More
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

      <div class="relative max-w-screen-xl mx-auto px-6">
        <div class="text-center mb-16">
          <div class="w-16 h-1 bg-gold mb-6 mx-auto"></div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why Choose Silk Ride for Your Transportation Needs?</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 mb-6">
              <i class="bx bx-shield text-gold text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">Licensed & Insured</h3>
            <p class="text-gray-600 leading-relaxed">Hertsmere Borough Council licensed operator with comprehensive insurance coverage.</p>
          </div>

          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 mb-6">
              <i class="bx bx-user-check text-gold text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">Professional Chauffeurs</h3>
            <p class="text-gray-600 leading-relaxed">Background-checked, experienced drivers trained to the highest service standards.</p>
          </div>

          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 mb-6">
              <i class="bx bx-car text-gold text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">Luxury Fleet</h3>
            <p class="text-gray-600 leading-relaxed">Premium Mercedes-Benz vehicles with Wi-Fi, climate control, and luxury amenities.</p>
          </div>

          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 mb-6">
              <i class="bx bx-time-five text-gold text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">24/7 Availability</h3>
            <p class="text-gray-600 leading-relaxed">Round-the-clock service for all your transportation needs, any day of the year.</p>
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

const detailedServices = [
  {
    slug: 'airport-transfers',
    title: 'Airport Transfers',
    description: 'Premium transfers to/from all London airports with flight tracking and meet & greet service.',
    icon: 'bx bx-plane-take-off',
    path: '/services/airport-transfers'
  },
  {
    slug: 'corporate-travel',
    title: 'Corporate Travel',
    description: 'Executive chauffeur service for business meetings, conferences, and corporate events.',
    icon: 'bx bx-briefcase',
    path: '/services/corporate-travel'
  },
  {
    slug: 'hourly-chauffeur',
    title: 'Hourly Chauffeur',
    description: 'Flexible hourly hire for business meetings, sightseeing, and personal appointments.',
    icon: 'bx bx-time',
    path: '/services/hourly-chauffeur'
  },
  {
    slug: 'uk-europe-travel',
    title: 'UK & Europe Travel',
    description: 'Luxury long-distance travel and bespoke private tours across the UK and Europe.',
    icon: 'bx bx-world',
    path: '/services/uk-europe-travel'
  },
  {
    slug: 'wedding-chauffeur',
    title: 'Wedding Transport',
    description: 'Elegant wedding chauffeur service with decorated vehicles for your special day.',
    icon: 'bx bx-heart',
    path: '/services/wedding-chauffeur'
  },
  {
    slug: 'event-chauffeur',
    title: 'Event Transport',
    description: 'Professional transport to concerts, sporting events, corporate galas, and private parties.',
    icon: 'bx bx-calendar-event',
    path: '/services/event-chauffeur'
  }
]

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Silk Ride Chauffeur Services",
    "url": "https://silkride.co.uk",
    "telephone": "+44 7512 905514",
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