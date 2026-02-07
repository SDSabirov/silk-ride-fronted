// Traffic Attribution Plugin
// Initializes traffic source tracking on every page load

import { defineNuxtPlugin } from '#imports'
import { useTrafficSource } from '~/composables/useTrafficSource'

export default defineNuxtPlugin((nuxtApp) => {
  if (!process.client) return

  const {
    initAttribution,
    isOrganicSearch,
    isPaidTraffic,
    getSearchEngine,
    getAttributionForEvent
  } = useTrafficSource()

  // Initialize attribution on first load
  const source = initAttribution()

  // Fire landing event based on traffic source
  const fireLandingEvent = () => {
    // Wait for gtag to be available
    const waitForGtag = (callback: () => void, attempts = 0) => {
      if (typeof window.gtag === 'function') {
        callback()
      } else if (attempts < 20) {
        setTimeout(() => waitForGtag(callback, attempts + 1), 250)
      }
    }

    waitForGtag(() => {
      const attributionData = getAttributionForEvent()

      if (isOrganicSearch()) {
        // Fire organic landing event
        window.gtag('event', 'organic_landing', {
          search_engine: getSearchEngine(),
          landing_page: source.landingPage,
          ...attributionData
        })
      } else if (isPaidTraffic()) {
        // Fire ad click landing event
        window.gtag('event', 'ad_click_landing', {
          source: source.source,
          medium: source.medium,
          campaign: source.campaign,
          landing_page: source.landingPage,
          ...attributionData
        })
      }

      // Always fire a page view with attribution data
      window.gtag('event', 'page_view_attributed', {
        page_path: source.landingPage,
        ...attributionData
      })
    })
  }

  // Fire landing event after a short delay to ensure analytics scripts are loaded
  setTimeout(fireLandingEvent, 2000)

  // Listen for route changes to track SPA navigation
  nuxtApp.hook('page:finish', () => {
    // Re-initialize last touch for SPA navigation (keeping same session)
    const newSource = initAttribution()

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'spa_page_view', {
        page_path: window.location.pathname,
        page_title: document.title,
        ...getAttributionForEvent()
      })
    }
  })
})

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    fbq: (...args: any[]) => void
  }
}
