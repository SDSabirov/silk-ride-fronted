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
    <section class="py-16 bg-gray-50">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Our Complete Range of Chauffeur Services</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in detailedServices" :key="service.slug" class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i :class="service.icon" class="text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-center">{{ service.title }}</h3>
            <p class="text-gray-600 text-center mb-4">{{ service.description }}</p>
            <div class="text-center">
              <NuxtLink
                :to="localePath(service.path)"
                class="inline-block px-6 py-2 bg-gold text-black font-semibold rounded hover:bg-yellow-500 transition"
              >
                Learn More
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Section -->
    <section class="py-16">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Why Choose Silk Ride for Your Transportation Needs?</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-shield text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Licensed & Insured</h3>
            <p class="text-gray-600">Hertsmere Borough Council licensed operator with comprehensive insurance coverage.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-user-check text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Professional Chauffeurs</h3>
            <p class="text-gray-600">Background-checked, experienced drivers trained to the highest service standards.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-car text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Luxury Fleet</h3>
            <p class="text-gray-600">Premium Mercedes-Benz vehicles with Wi-Fi, climate control, and luxury amenities.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-time-five text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">24/7 Availability</h3>
            <p class="text-gray-600">Round-the-clock service for all your transportation needs, any day of the year.</p>
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
import cover from "@/assets/images/covers/services-cover.webp"

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