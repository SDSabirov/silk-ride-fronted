// Traffic Source Attribution Composable
// Handles UTM parsing, organic/paid detection, and attribution storage

interface TrafficSource {
  source: string
  medium: string
  campaign: string
  content: string
  term: string
  landingPage: string
  referrer: string
  timestamp: number
  gclid?: string
  fbclid?: string
}

interface Attribution {
  firstTouch: TrafficSource | null
  lastTouch: TrafficSource | null
}

const FIRST_TOUCH_KEY = 'silk_first_touch_attribution'
const LAST_TOUCH_KEY = 'silk_last_touch_attribution'
const ATTRIBUTION_EXPIRY_DAYS = 30

// Search engine patterns for organic traffic detection
const SEARCH_ENGINES: Record<string, string> = {
  'google': 'google',
  'bing': 'bing',
  'yahoo': 'yahoo',
  'duckduckgo': 'duckduckgo',
  'yandex': 'yandex',
  'baidu': 'baidu',
  'ecosia': 'ecosia'
}

export function useTrafficSource() {
  /**
   * Parse UTM parameters from URL
   */
  function parseUTMParams(url?: string): Partial<TrafficSource> {
    if (!process.client) return {}

    const searchParams = new URLSearchParams(url || window.location.search)

    return {
      source: searchParams.get('utm_source') || '',
      medium: searchParams.get('utm_medium') || '',
      campaign: searchParams.get('utm_campaign') || '',
      content: searchParams.get('utm_content') || '',
      term: searchParams.get('utm_term') || '',
      gclid: searchParams.get('gclid') || undefined,
      fbclid: searchParams.get('fbclid') || undefined
    }
  }

  /**
   * Detect search engine from referrer URL
   */
  function detectSearchEngine(referrer: string): string | null {
    if (!referrer) return null

    const hostname = new URL(referrer).hostname.toLowerCase()

    for (const [engine, name] of Object.entries(SEARCH_ENGINES)) {
      if (hostname.includes(engine)) {
        return name
      }
    }

    return null
  }

  /**
   * Determine traffic source from current context
   */
  function determineTrafficSource(): TrafficSource {
    if (!process.client) {
      return createEmptySource()
    }

    const utmParams = parseUTMParams()
    const referrer = document.referrer || ''
    const landingPage = window.location.pathname + window.location.search

    let source = utmParams.source || ''
    let medium = utmParams.medium || ''

    // Check for Google Ads click ID
    if (utmParams.gclid) {
      source = source || 'google'
      medium = medium || 'cpc'
    }

    // Check for Facebook click ID
    if (utmParams.fbclid) {
      source = source || 'facebook'
      medium = medium || 'cpc'
    }

    // If no UTM params, check referrer for organic search
    if (!source && referrer) {
      const searchEngine = detectSearchEngine(referrer)
      if (searchEngine) {
        source = searchEngine
        medium = 'organic'
      } else if (referrer) {
        // Other referrer (e.g., social, link)
        try {
          const refUrl = new URL(referrer)
          source = refUrl.hostname.replace('www.', '')
          medium = 'referral'
        } catch {
          source = 'referral'
          medium = 'referral'
        }
      }
    }

    // Default to direct if nothing else detected
    if (!source) {
      source = 'direct'
      medium = 'none'
    }

    return {
      source,
      medium,
      campaign: utmParams.campaign || '',
      content: utmParams.content || '',
      term: utmParams.term || '',
      landingPage,
      referrer,
      timestamp: Date.now(),
      gclid: utmParams.gclid,
      fbclid: utmParams.fbclid
    }
  }

  /**
   * Create empty traffic source object
   */
  function createEmptySource(): TrafficSource {
    return {
      source: '',
      medium: '',
      campaign: '',
      content: '',
      term: '',
      landingPage: '',
      referrer: '',
      timestamp: 0
    }
  }

  /**
   * Check if attribution data has expired
   */
  function isExpired(timestamp: number): boolean {
    const expiryMs = ATTRIBUTION_EXPIRY_DAYS * 24 * 60 * 60 * 1000
    return Date.now() - timestamp > expiryMs
  }

  /**
   * Get first-touch attribution from localStorage
   */
  function getFirstTouchAttribution(): TrafficSource | null {
    if (!process.client) return null

    try {
      const stored = localStorage.getItem(FIRST_TOUCH_KEY)
      if (!stored) return null

      const data = JSON.parse(stored) as TrafficSource
      if (isExpired(data.timestamp)) {
        localStorage.removeItem(FIRST_TOUCH_KEY)
        return null
      }

      return data
    } catch {
      return null
    }
  }

  /**
   * Set first-touch attribution in localStorage
   */
  function setFirstTouchAttribution(source: TrafficSource): void {
    if (!process.client) return

    try {
      // Only set if not already exists (first touch = first visit only)
      if (!localStorage.getItem(FIRST_TOUCH_KEY)) {
        localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(source))
      }
    } catch (error) {
      console.warn('Failed to save first-touch attribution:', error)
    }
  }

  /**
   * Get last-touch attribution from sessionStorage
   */
  function getLastTouchAttribution(): TrafficSource | null {
    if (!process.client) return null

    try {
      const stored = sessionStorage.getItem(LAST_TOUCH_KEY)
      if (!stored) return null

      return JSON.parse(stored) as TrafficSource
    } catch {
      return null
    }
  }

  /**
   * Set last-touch attribution in sessionStorage
   */
  function setLastTouchAttribution(source: TrafficSource): void {
    if (!process.client) return

    try {
      sessionStorage.setItem(LAST_TOUCH_KEY, JSON.stringify(source))
    } catch (error) {
      console.warn('Failed to save last-touch attribution:', error)
    }
  }

  /**
   * Initialize attribution tracking
   * Should be called on initial page load
   */
  function initAttribution(): TrafficSource {
    const currentSource = determineTrafficSource()

    // Always update last-touch (session-based)
    setLastTouchAttribution(currentSource)

    // Only set first-touch if it doesn't exist or has expired
    setFirstTouchAttribution(currentSource)

    return currentSource
  }

  /**
   * Get all attribution data
   */
  function getAttribution(): Attribution {
    return {
      firstTouch: getFirstTouchAttribution(),
      lastTouch: getLastTouchAttribution()
    }
  }

  /**
   * Get attribution data formatted for analytics events
   */
  function getAttributionForEvent(): Record<string, string> {
    const { firstTouch, lastTouch } = getAttribution()
    const source = lastTouch || firstTouch

    if (!source) return {}

    return {
      traffic_source: source.source,
      traffic_medium: source.medium,
      traffic_campaign: source.campaign,
      landing_page: source.landingPage,
      ...(source.gclid && { gclid: source.gclid }),
      ...(source.fbclid && { fbclid: source.fbclid }),
      // Include first touch for comparison
      ...(firstTouch && {
        first_touch_source: firstTouch.source,
        first_touch_medium: firstTouch.medium
      })
    }
  }

  /**
   * Check if current visit is from organic search
   */
  function isOrganicSearch(): boolean {
    const { lastTouch } = getAttribution()
    return lastTouch?.medium === 'organic'
  }

  /**
   * Check if current visit is from paid ads
   */
  function isPaidTraffic(): boolean {
    const { lastTouch } = getAttribution()
    return lastTouch?.medium === 'cpc' ||
           lastTouch?.medium === 'ppc' ||
           !!lastTouch?.gclid ||
           !!lastTouch?.fbclid
  }

  /**
   * Get the search engine name if organic
   */
  function getSearchEngine(): string | null {
    const { lastTouch } = getAttribution()
    if (lastTouch?.medium === 'organic') {
      return lastTouch.source
    }
    return null
  }

  /**
   * Clear all attribution data (for testing/debugging)
   */
  function clearAttribution(): void {
    if (!process.client) return

    try {
      localStorage.removeItem(FIRST_TOUCH_KEY)
      sessionStorage.removeItem(LAST_TOUCH_KEY)
    } catch (error) {
      console.warn('Failed to clear attribution:', error)
    }
  }

  return {
    initAttribution,
    getAttribution,
    getAttributionForEvent,
    parseUTMParams,
    determineTrafficSource,
    isOrganicSearch,
    isPaidTraffic,
    getSearchEngine,
    clearAttribution,
    getFirstTouchAttribution,
    getLastTouchAttribution
  }
}
