// Unified Analytics Composable
// Fires events to GA4, Google Ads, Facebook Pixel, and Yandex Metrica with consent checking

import { useTrafficSource } from './useTrafficSource'

interface LeadEventParams {
  form_type: string
  form_location?: string
  [key: string]: any
}

interface PurchaseEventParams {
  transaction_id: string
  value: number
  currency: string
  [key: string]: any
}

interface EngagementEventParams {
  event_name: string
  [key: string]: any
}

interface ConsentPreferences {
  essential: boolean
  analytics: boolean
  advertising: boolean
  functional: boolean
}

// Google Ads conversion labels
const GOOGLE_ADS_CONVERSION_ID = 'AW-16982457254'
const GOOGLE_ADS_LEAD_LABEL = 'AW-16982457254/GijACI3t0PMbEKb37qE_'
const GOOGLE_ADS_PURCHASE_LABEL = '' // Add your Purchase conversion label here

export function useAnalytics() {
  const { getAttributionForEvent } = useTrafficSource()

  /**
   * Get current consent preferences from localStorage
   */
  function getConsentPreferences(): ConsentPreferences {
    if (!process.client) {
      return {
        essential: true,
        analytics: false,
        advertising: false,
        functional: false
      }
    }

    try {
      const stored = localStorage.getItem('cookie_preferences')
      if (stored) {
        return JSON.parse(stored) as ConsentPreferences
      }

      // Check consent type
      const consentType = localStorage.getItem('cookie_consent')
      if (consentType === 'all') {
        return {
          essential: true,
          analytics: true,
          advertising: true,
          functional: true
        }
      }
    } catch {
      // Ignore parse errors
    }

    return {
      essential: true,
      analytics: false,
      advertising: false,
      functional: false
    }
  }

  /**
   * Check if analytics consent is granted
   */
  function hasAnalyticsConsent(): boolean {
    return getConsentPreferences().analytics
  }

  /**
   * Check if advertising consent is granted
   */
  function hasAdvertisingConsent(): boolean {
    return getConsentPreferences().advertising
  }

  /**
   * Fire event to Google Analytics 4
   */
  function fireGA4Event(eventName: string, params: Record<string, any> = {}): void {
    if (!process.client) return
    if (!hasAnalyticsConsent()) return

    const attribution = getAttributionForEvent()

    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, {
        ...params,
        ...attribution
      })
    }
  }

  /**
   * Fire conversion to Google Ads
   */
  function fireGoogleAdsConversion(conversionLabel: string, value?: number, currency?: string): void {
    if (!process.client) return
    if (!hasAdvertisingConsent()) return
    if (!conversionLabel) return // Skip if no label configured

    if (typeof window.gtag === 'function') {
      const conversionParams: Record<string, any> = {
        send_to: conversionLabel
      }

      if (value !== undefined) {
        conversionParams.value = value
        conversionParams.currency = currency || 'GBP'
      }

      window.gtag('event', 'conversion', conversionParams)
    }
  }

  /**
   * Fire event to Facebook Pixel
   */
  function fireFacebookEvent(eventName: string, params: Record<string, any> = {}): void {
    if (!process.client) return
    if (!hasAdvertisingConsent()) return

    if (typeof window.fbq === 'function') {
      window.fbq('track', eventName, params)
    }
  }


  /**
   * Track a lead event (contact form submission)
   */
  function trackLead(params: LeadEventParams): void {
    const attribution = getAttributionForEvent()
    const enhancedParams = {
      ...params,
      ...attribution
    }

    // GA4
    fireGA4Event('generate_lead', enhancedParams)

    // Google Ads conversion
    if (GOOGLE_ADS_LEAD_LABEL) {
      fireGoogleAdsConversion(GOOGLE_ADS_LEAD_LABEL)
    }

    // Facebook Pixel
    fireFacebookEvent('Lead', {
      content_name: params.form_type,
      content_category: params.form_location || 'website'
    })
  }

  /**
   * Track a purchase event (booking completion)
   */
  function trackPurchase(params: PurchaseEventParams): void {
    const attribution = getAttributionForEvent()
    const enhancedParams = {
      ...params,
      ...attribution
    }

    // GA4
    fireGA4Event('purchase', enhancedParams)

    // Google Ads conversion with value
    if (GOOGLE_ADS_PURCHASE_LABEL) {
      fireGoogleAdsConversion(GOOGLE_ADS_PURCHASE_LABEL, params.value, params.currency)
    }

    // Facebook Pixel
    fireFacebookEvent('Purchase', {
      value: params.value,
      currency: params.currency,
      content_ids: [params.transaction_id],
      content_type: 'service'
    })
  }

  /**
   * Track page view (for SPA navigation)
   */
  function trackPageView(pagePath?: string, pageTitle?: string): void {
    const path = pagePath || (process.client ? window.location.pathname : '')
    const title = pageTitle || (process.client ? document.title : '')
    const attribution = getAttributionForEvent()

    // GA4
    fireGA4Event('page_view', {
      page_path: path,
      page_title: title,
      ...attribution
    })

    // Facebook Pixel
    fireFacebookEvent('PageView')

    // Yandex Metrica (auto-tracks page views)
  }

  /**
   * Track engagement events (scroll depth, time on page)
   */
  function trackEngagement(params: EngagementEventParams): void {
    const attribution = getAttributionForEvent()

    // GA4 only - these are internal metrics
    fireGA4Event(params.event_name, {
      ...params,
      ...attribution
    })
  }

  /**
   * Track scroll depth
   */
  function trackScrollDepth(percentage: number): void {
    trackEngagement({
      event_name: 'scroll_depth',
      depth_percentage: percentage,
      page_path: process.client ? window.location.pathname : ''
    })
  }

  /**
   * Track time on page
   */
  function trackTimeOnPage(seconds: number): void {
    trackEngagement({
      event_name: 'engaged_time',
      time_seconds: seconds,
      page_path: process.client ? window.location.pathname : ''
    })
  }

  /**
   * Track custom event
   */
  function trackCustomEvent(eventName: string, params: Record<string, any> = {}): void {
    fireGA4Event(eventName, params)
  }

  return {
    trackLead,
    trackPurchase,
    trackPageView,
    trackEngagement,
    trackScrollDepth,
    trackTimeOnPage,
    trackCustomEvent,
    hasAnalyticsConsent,
    hasAdvertisingConsent,
    getConsentPreferences,
    // Expose individual platform methods for advanced use
    fireGA4Event,
    fireGoogleAdsConversion,
    fireFacebookEvent
  }
}
