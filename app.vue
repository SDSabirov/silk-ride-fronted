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
import { useRuntimeConfig, useHead } from '#imports'

const route = useRoute()
const { locale, availableLocales, defaultLocale } = useI18n()
const config = useRuntimeConfig()

const baseUrl = config.public.BASE_URL || 'https://silkride.co.uk'

// Clean trailing slashes and locale prefix
const cleanPath = route.path.replace(/\/$/, '')
const canonicalPath = locale.value === defaultLocale
  ? cleanPath
  : cleanPath.replace(`/${locale.value}`, '')

const canonical = `${baseUrl}${locale.value === defaultLocale ? canonicalPath : `/${locale.value}${canonicalPath}`}`

// Build hreflang alternates
const alternates = availableLocales.map(loc => {
  const altHref = loc === defaultLocale
    ? `${baseUrl}${canonicalPath}`
    : `${baseUrl}/${loc}${canonicalPath}`
  return {
    rel: 'alternate',
    hreflang: loc,
    href: altHref
  }
})

// Add x-default
alternates.push({
  rel: 'alternate',
  hreflang: 'x-default',
  href: `${baseUrl}${canonicalPath}`
})

// Inject canonical and alternates
useHead({
  link: [
    { rel: 'canonical', href: canonical },
    ...alternates
  ]
})
</script>
