<template>
  <div>
    <!-- Loading Progress Bar -->
    <div 
      v-if="pending" 
      class="fixed top-0 left-0 w-full h-1 bg-gold z-[9999] animate-pulse"
      role="progressbar" 
      aria-label="Loading content"
    ></div>
    
    <NuxtLayout>
      <NuxtPage />
      <FormsContactDrawer/>
      <BackToTop />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useRuntimeConfig, useHead } from '#imports'

// Add loading state for better UX
const { pending } = await useLazyAsyncData('app-init', () => Promise.resolve(true))

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

// Inject canonical, alternates, and performance optimizations
useHead({
  link: [
    { rel: 'canonical', href: canonical },
    ...alternates,
    // Preload critical images for better performance
    { rel: 'preload', href: '/assets/images/vclassjett.webp', as: 'image', type: 'image/webp' },
    { rel: 'preload', href: '/logo.svg', as: 'image', type: 'image/svg+xml' },
    // DNS prefetch for external resources
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//www.google-analytics.com' }
  ],
  meta: [
    // Performance optimizations
    { name: 'theme-color', content: '#D4AF37' },
    { name: 'color-scheme', content: 'light' }
  ]
})
</script>
