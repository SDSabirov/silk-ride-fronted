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
  "image": [
    "https://silkride.co.uk/vclassSide.webp",
    "https://silkride.co.uk/sclassSide.webp",
    "https://silkride.co.uk/eclassSide.webp"
  ],
  "description": "Silk Ride offers luxury chauffeur services in London and across the UK, specializing in airport transfers, corporate travel, weddings, events, and bespoke guided tours with a premium fleet of Mercedes vehicles.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "London",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.5074",
    "longitude": "-0.1278"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "London"
    },
    {
      "@type": "Country",
      "name": "United Kingdom"
    },
    {
      "@type": "Airport",
      "name": "London Heathrow Airport T2 & T3"
    },
    {
      "@type": "Airport",
      "name": "London Heathrow Airport T4"
    },
    {
      "@type": "Airport",
      "name": "London Heathrow Airport T5"
    },
    {
      "@type": "Airport",
      "name": "London Gatwick Airport"
    },
    {
      "@type": "Airport",
      "name": "London Stansted Airport"
    },
    {
      "@type": "Airport",
      "name": "London Luton Airport"
    },
    {
      "@type": "Airport",
      "name": "London Biggin Hill Airport"
    },
    {
      "@type": "Airport",
      "name": "Farnborough Airport"
    }
  ],
  "telephone": "+44 7512 905514",
  "priceRange": "£££",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/silkrideofficial?igsh=MXAxbDAwbXBrbTc2NA%3D%3D",
    "https://www.linkedin.com/company/silk-ride"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Silk Ride Chauffeur Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Luxury Airport Transfers",
          "serviceType": "Airport chauffeur services from Heathrow, Gatwick, Stansted, Luton"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hourly Chauffeur Hire",
          "serviceType": "Executive chauffeur available by the hour"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "City-to-City Transfers",
          "serviceType": "Private long-distance chauffeur-driven travel across the UK"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wedding & Event Chauffeur",
          "serviceType": "Elegant chauffeured cars for weddings, events, and special occasions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Private Guided Tours",
          "serviceType": "Personalized sightseeing tours with private chauffeur in London"
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
