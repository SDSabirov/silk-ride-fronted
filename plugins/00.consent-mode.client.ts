// Google Consent Mode v2 - Advanced Mode
// This plugin MUST run BEFORE nuxt-gtag to set consent defaults
// With Advanced Mode, gtag.js loads immediately and sends cookieless pings when consent is denied

import { defineNuxtPlugin } from '#imports'

interface ConsentPreferences {
  essential: boolean
  analytics: boolean
  advertising: boolean
  functional: boolean
}

export default defineNuxtPlugin({
  name: 'consent-mode',
  enforce: 'pre', // Critical: Run BEFORE other plugins including nuxt-gtag
  setup() {
    if (!process.client) return

    // Create dataLayer and gtag function FIRST, before nuxt-gtag
    window.dataLayer = window.dataLayer || []

    // Define gtag function for pushing to dataLayer
    window.gtag = function gtag(..._args: any[]) {
      window.dataLayer.push(arguments)
    }

    // Set consent defaults IMMEDIATELY - this enables Advanced Mode
    // gtag.js will see these defaults when it loads and send cookieless pings
    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied',
      security_storage: 'granted',
      wait_for_update: 500
    })

    // Enable URL passthrough for conversion modeling when cookies denied
    window.gtag('set', 'url_passthrough', true)

    // Redact ad click identifiers when ad_storage is denied
    window.gtag('set', 'ads_data_redaction', true)

    // Check if user previously consented and update immediately
    restorePreviousConsent()

    // Listen for consent updates from the banner
    window.addEventListener('consent-updated', ((event: CustomEvent) => {
      const { preferences } = event.detail
      if (preferences) {
        updateGtagConsent(preferences)
      }
    }) as EventListener)
  }
})

/**
 * Restore consent for returning visitors
 */
function restorePreviousConsent(): void {
  try {
    const storedPreferences = localStorage.getItem('cookie_preferences')
    const consentType = localStorage.getItem('cookie_consent')
    const consentDate = localStorage.getItem('cookie_consent_date')

    // Check if consent expired (12 months)
    if (consentDate) {
      const consentTime = new Date(consentDate).getTime()
      const oneYear = 365 * 24 * 60 * 60 * 1000
      if (Date.now() - consentTime > oneYear) {
        return // Expired, don't restore
      }
    }

    if (storedPreferences) {
      const preferences: ConsentPreferences = JSON.parse(storedPreferences)
      updateGtagConsent(preferences)
      return
    }

    if (consentType === 'all') {
      updateGtagConsent({
        essential: true,
        analytics: true,
        advertising: true,
        functional: true
      })
    }
  } catch (error) {
    console.warn('[Consent Mode] Error restoring consent:', error)
  }
}

/**
 * Update gtag consent state
 */
function updateGtagConsent(preferences: ConsentPreferences): void {
  if (typeof window.gtag !== 'function') return

  window.gtag('consent', 'update', {
    ad_storage: preferences.advertising ? 'granted' : 'denied',
    ad_user_data: preferences.advertising ? 'granted' : 'denied',
    ad_personalization: preferences.advertising ? 'granted' : 'denied',
    analytics_storage: preferences.analytics ? 'granted' : 'denied',
    functionality_storage: preferences.functional ? 'granted' : 'denied',
    personalization_storage: preferences.functional ? 'granted' : 'denied'
  })
}

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}
