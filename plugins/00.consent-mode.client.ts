// Google Consent Mode v2 - Consent Restoration Plugin
// This plugin restores consent for returning visitors who previously accepted cookies
// Consent DEFAULTS are set in nuxt.config.ts via gtag.initCommands (runs before gtag('config'))

import { defineNuxtPlugin } from '#imports'

interface ConsentPreferences {
  essential: boolean
  analytics: boolean
  advertising: boolean
  functional: boolean
}

export default defineNuxtPlugin({
  name: 'consent-mode',
  enforce: 'pre', // Run early to restore consent quickly
  setup() {
    if (!process.client) return

    // Ensure dataLayer exists (nuxt-gtag creates it, but be safe)
    window.dataLayer = window.dataLayer || []

    // Restore consent for returning visitors ASAP
    // This runs after nuxt-gtag sets defaults but before page fully loads
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
    // If 'essentials' or no consent, leave defaults as denied (set by nuxt.config.ts)
  } catch (error) {
    console.warn('[Consent Mode] Error restoring previous consent:', error)
  }
}

/**
 * Update gtag consent state based on user preferences
 * Uses the gtag function wrapper to push to dataLayer in the correct format
 */
function updateGtagConsent(preferences: ConsentPreferences): void {
  // Ensure gtag function exists (creates wrapper if needed)
  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag(..._args: any[]) {
      window.dataLayer.push(arguments)
    }
  }

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
