// Traffic Attribution Plugin
// Initializes traffic source tracking on every page load
// Works with Google Consent Mode v2 - events are fired regardless of consent state
// gtag will handle consent appropriately (cookieless pings when denied, full data when granted)

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
    // gtag is now initialized by 00.consent-mode.client.ts plugin which runs first
    // We still check for availability in case of edge cases
    const waitForGtag = (callback: () => void, attempts = 0) => {
      if (typeof window.gtag === 'function') {
        callback()
      } else if (attempts < 10) {
        // Reduced attempts since gtag should be available quickly now
        setTimeout(() => waitForGtag(callback, attempts + 1), 100)
      }
    }

    waitForGtag(() => {
      const attributionData = getAttributionForEvent()

      // NOTE: We fire these events regardless of consent state
      // Google Consent Mode v2 handles consent at the gtag level
      // When consent is denied, gtag sends cookieless pings
      // When consent is granted, gtag sends full data with cookies

      if (isOrganicSearch()) {
        // Fire organic landing event
        window.gtag('event', 'organic_landing', {
          search_engine: getSearchEngine(),
          landing_page: source.landingPage,
          ...attributionData
        })
      } else if (isPaidTraffic()) {
        // Fire ad click landing event - critical for Google Ads attribution
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

  // Fire landing event with minimal delay - gtag should be ready quickly now
  // thanks to 00.consent-mode.client.ts plugin which initializes it first
  setTimeout(fireLandingEvent, 500)

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
