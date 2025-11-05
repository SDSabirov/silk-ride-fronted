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
      <ConsentBanner />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useRuntimeConfig, useHead } from '#imports'

// Add loading state for better UX
const { pending } = await useLazyAsyncData('app-init', () => Promise.resolve(true))

// Performance optimizations - hreflang is automatically handled by @nuxtjs/i18n
useHead({
  link: [
    // Preload critical images for better performance
    { rel: 'preload', href: '/images/vclassjett.webp', as: 'image', type: 'image/webp' },
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
