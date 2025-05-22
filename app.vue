<template>
  <div>
    <NuxtLayout>
       <NuxtPage />
       <FormsContactDrawer/>
    </NuxtLayout>
  </div>
</template>
<script setup>

import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useRuntimeConfig } from '#imports'

const route = useRoute()
const { locale, availableLocales, defaultLocale } = useI18n()
const config = useRuntimeConfig()
const baseUrl = config.public.BASE_URL || 'https://silkride.co.uk'

// Remove any trailing slash from the path
const path = route.path.replace(/\/$/, '')
// Construct the canonical URL (with trailing slash)
const canonical = `${baseUrl.replace(/\/$/, '')}${path}/`

// Build hreflang alternate links for each locale
const alternates = availableLocales.map(loc => {
  // Strip the current locale prefix before rebuilding
  const pathWithoutLocale = path.replace(`/${locale}`, '')
  return {
    rel: 'alternate',
    hreflang: loc,
    href: `${baseUrl.replace(/\/$/, '')}/${loc}${pathWithoutLocale}/`
  }
})
// Add x-default fallback
alternates.push({
  rel: 'alternate',
  hreflang: 'x-default',
  href: `${baseUrl.replace(/\/$/, '')}/${defaultLocale}${path}/`
})

// Inject canonical and hreflang links into head
useHead({
  link: [
    { rel: 'canonical', href: canonical },
    ...alternates
  ]
})
</script>