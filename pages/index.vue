<template>
  <div>
    <Navbar />

    <LandingMainHero />
    <LandingTrustSignals />
    <LandingFleet />
    <LazyLandingKeyFeatures />
    <LazyLandingAbout />
    <LazyLandingTestimonials />

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
    "streetAddress": "42 Watling Street, Centre 42",
    "addressLocality": "Radlett",
    "addressRegion": "Hertfordshire",
    "postalCode": "WD7 7NN",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.6879",
    "longitude": "-0.3197"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "London"
    },
    {
      "@type": "Country",
      "name": "United Kingdom"
    }
  ],
  "telephone": "+44 7512 905514",
  "email": "info@silkride.co.uk",
  "priceRange": "£££",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.instagram.com/silkrideofficial",
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
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": { 
        "@type": "Person", 
        "name": "James Richardson" 
      },
      "reviewRating": { 
        "@type": "Rating", 
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": "Exceptional service from start to finish. The chauffeur was punctual, professional, and the Mercedes S-Class was immaculate. Made our airport transfer stress-free and luxurious.",
      "datePublished": "2024-01-15"
    },
    {
      "@type": "Review",
      "author": { 
        "@type": "Person", 
        "name": "Sarah Mitchell" 
      },
      "reviewRating": { 
        "@type": "Rating", 
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": "Used Silk Ride for our wedding day and they exceeded all expectations. The team went above and beyond to ensure everything was perfect. Highly recommend for special occasions.",
      "datePublished": "2024-01-20"
    },
    {
      "@type": "Review",
      "author": { 
        "@type": "Person", 
        "name": "Emma Thompson" 
      },
      "reviewRating": { 
        "@type": "Rating", 
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": "Reliable corporate transport solution. Our executives always arrive on time and in style. The booking system is seamless and the drivers are extremely professional.",
      "datePublished": "2024-01-25"
    }
  ]
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
