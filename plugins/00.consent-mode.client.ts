// Google Consent Mode v2 Plugin
// This plugin MUST run BEFORE gtag.js loads to properly initialize consent defaults
// File is prefixed with "00." to ensure it runs first among client plugins

import { defineNuxtPlugin } from '#imports'

interface ConsentPreferences {
  essential: boolean
  analytics: boolean
  advertising: boolean
  functional: boolean
}

export default defineNuxtPlugin({
  name: 'consent-mode',
  enforce: 'pre', // Run before other plugins
  setup() {
    if (!process.client) return

    // Initialize dataLayer and gtag function BEFORE gtag.js loads
    window.dataLayer = window.dataLayer || []

    // Define gtag function if not already defined
    if (typeof window.gtag !== 'function') {
      window.gtag = function gtag(...args: any[]) {
        window.dataLayer.push(args)
      }
    }

    // Set default consent to DENIED - this MUST happen before gtag.js loads
    // This enables Google's cookieless pings for users who haven't consented yet
    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied',
      security_storage: 'granted', // Always granted for security features
      wait_for_update: 500 // Wait 500ms for consent banner interaction
    })

    // Set region-specific defaults for EEA/UK (more restrictive by default)
    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      region: ['GB', 'EU'] // UK and EU regions
    })

    // Check if user has previously consented and restore their preferences
    restorePreviousConsent()

    // Listen for consent updates from the consent banner
    window.addEventListener('consent-updated', ((event: CustomEvent) => {
      const { preferences } = event.detail
      if (preferences) {
        updateGtagConsent(preferences)
      }
    }) as EventListener)
  }
})

/**
 * Restore consent preferences from localStorage for returning visitors
 * This ensures users who previously consented get full tracking immediately
 */
function restorePreviousConsent(): void {
  try {
    const storedPreferences = localStorage.getItem('cookie_preferences')
    const consentType = localStorage.getItem('cookie_consent')
    const consentDate = localStorage.getItem('cookie_consent_date')

    // Check if consent has expired (12 months)
    if (consentDate) {
      const consentTime = new Date(consentDate).getTime()
      const oneYear = 365 * 24 * 60 * 60 * 1000
      if (Date.now() - consentTime > oneYear) {
        // Consent expired, don't restore - let user re-consent
        return
      }
    }

    if (storedPreferences) {
      const preferences: ConsentPreferences = JSON.parse(storedPreferences)
      updateGtagConsent(preferences)
      return
    }

    // Fallback: check consent type if preferences not stored
    if (consentType === 'all') {
      updateGtagConsent({
        essential: true,
        analytics: true,
        advertising: true,
        functional: true
      })
    }
    // If 'essentials' or no consent, leave defaults as denied
  } catch (error) {
    console.warn('[Consent Mode] Error restoring previous consent:', error)
  }
}

/**
 * Update gtag consent state based on user preferences
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

// Extend Window interface for dataLayer
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}
