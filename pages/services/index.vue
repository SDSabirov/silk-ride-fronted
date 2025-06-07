<template>
  <div>
    <Navbar />

    <CommonHero :image="cover" :page="$t('pages.services.heroTitle')" loading="lazy" />

    <CommonPageIntro
      :title="$t('pages.services.introTitle')"
      :paragraph="$t('pages.services.introParagraph')"
    />

    <ServicesMainPoints />
    <ServicesListServices />

    <Footer />
  </div>
</template>

<script setup>
import { useSeo } from '~/utils/useSeo'
import { useI18n } from '#imports'
import cover from "@/assets/images/covers/services-cover.webp"

const { t } = useI18n()
useSeo('services')

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