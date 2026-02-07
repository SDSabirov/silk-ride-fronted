// Facebook Pixel Composable with Consent Checking

/**
 * Get advertising consent status from localStorage
 */
function hasAdvertisingConsent() {
  if (!process.client) return false

  try {
    const stored = localStorage.getItem('cookie_preferences')
    if (stored) {
      const preferences = JSON.parse(stored)
      return preferences.advertising === true
    }

    // Check consent type for fallback
    const consentType = localStorage.getItem('cookie_consent')
    return consentType === 'all'
  } catch {
    return false
  }
}

export function useFacebookPixel() {
  /**
   * Track a Facebook Pixel event with consent checking
   * @param {string} eventName - Standard or custom event name
   * @param {object} params - Event parameters
   */
  const track = (eventName, params = {}) => {
    if (!process.client) return

    // Check consent before firing event
    if (!hasAdvertisingConsent()) {
      console.debug('[FB Pixel] Event skipped - no advertising consent:', eventName)
      return
    }

    if (window.fbq) {
      window.fbq('track', eventName, params)
    }
  }

  /**
   * Track a custom event with consent checking
   * @param {string} eventName - Custom event name
   * @param {object} params - Event parameters
   */
  const trackCustom = (eventName, params = {}) => {
    if (!process.client) return

    // Check consent before firing event
    if (!hasAdvertisingConsent()) {
      console.debug('[FB Pixel] Custom event skipped - no advertising consent:', eventName)
      return
    }

    if (window.fbq) {
      window.fbq('trackCustom', eventName, params)
    }
  }

  /**
   * Check if Facebook Pixel is loaded
   */
  const isLoaded = () => {
    return process.client && typeof window.fbq === 'function'
  }

  /**
   * Check if user has given advertising consent
   */
  const hasConsent = () => {
    return hasAdvertisingConsent()
  }

  return {
    track,
    trackCustom,
    isLoaded,
    hasConsent
  }
}
