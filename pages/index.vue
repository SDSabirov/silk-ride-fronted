<template>
  <div>
    <Navbar />

    <LandingMainHero />
    <LandingServices />
    <LandingFleet />
    <LandingTestimonials />
    <LandingShowcase />

    <Footer />
  </div>
</template>
<script setup>
import { useI18n } from '#imports'
import { useSeo } from '~/utils/useSeo'
import { IDENTITY_ID, localizedUrl } from '~/utils/siteSchema'

const { t, locale } = useI18n()
useSeo('home')

// The business entity is declared site-wide (nuxt.config.ts → schemaOrg.identity).
// On the homepage we extend that same node with the catalogue of services so
// each one resolves to its own landing page.
//
// Deliberately NOT emitted: aggregateRating / review markup. Google treats
// ratings a business publishes about itself as "self-serving" (no star
// snippets), and marking up reviews collected on another platform — or
// placeholder reviews — is a structured-data guideline violation.
const serviceLinks = [
  { key: 'airport', path: '/services/airport-transfers' },
  { key: 'corporate', path: '/services/corporate-travel' },
  { key: 'hourly', path: '/services/hourly-chauffeur' },
  { key: 'wedding', path: '/services/wedding-chauffeur' },
  { key: 'event', path: '/services/event-chauffeur' },
  { key: 'ukEurope', path: '/services/uk-europe-travel' },
]

useSchemaOrg([
  {
    '@id': IDENTITY_ID,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t('pages.services.servicesRangeTitle'),
      itemListElement: serviceLinks.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: t(`pages.services.servicesList.${s.key}.title`),
          description: t(`pages.services.servicesList.${s.key}.description`),
          url: localizedUrl(s.path, locale.value),
        },
      })),
    },
  },
])
</script>
