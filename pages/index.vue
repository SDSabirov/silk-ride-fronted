<template>
  <div>
    <Navbar />
    <LandingMainHero />
    <LandingFleet />
    <LandingKeyFeatures />

    <LandingAbout />

    <Footer />
  </div>
</template>
<script setup>
import { useSeo } from '~/utils/useSeo'
useSeo('home')
const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Silk Ride Chauffeur Services",
  "url": "https://silkride.co.uk",
  "logo": "https://silkride.co.uk/logo.svg",
  "image": "https://silkride.co.uk/vclassSide.webp",
  "description": "Silk Ride offers luxury chauffeur services across London and the UK, specializing in airport transfers, corporate travel, weddings, and bespoke guided tours.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "London",
    "addressCountry": "GB"
  },
  "areaServed": [
    "London",
    "United Kingdom",
    "London Heathrow Airport T2 & T3",
    "London Heathrow Airport T4",
    "London Heathrow Airport T5",
    "London Gatwick Airport",
    "London Stansted Airport",
    "London Luton Airport",
    "London Biggin Hill Airport",
    "Farnborough Airport"
  ],
  "telephone": "+44 7512 905514",
  "priceRange": "£££",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Silk Ride Chauffeur Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Airport Transfers",
          "serviceType": "Luxury airport chauffeur service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hourly Chauffeur Hire",
          "serviceType": "Executive chauffeur by the hour"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "City-to-City Transfers",
          "serviceType": "Private long-distance travel across the UK"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wedding Chauffeur",
          "serviceType": "Luxury chauffeur for weddings and events"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Guided Tours",
          "serviceType": "Private sightseeing tours with chauffeur"
        }
      }
    ]
  }
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(schema)
    }
  ]
})
</script>
