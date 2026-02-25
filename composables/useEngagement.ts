// Engagement Metrics Tracking Composable
// Tracks scroll depth and time on page

import { ref, onMounted, onUnmounted } from 'vue'
import { useAnalytics } from './useAnalytics'

interface EngagementOptions {
  scrollThresholds?: number[]
  timeThresholds?: number[]
  trackOnMount?: boolean
}

const DEFAULT_SCROLL_THRESHOLDS = [25, 50, 75, 100]
const DEFAULT_TIME_THRESHOLDS = [15, 30, 60, 120]

export function useEngagement(options: EngagementOptions = {}) {
  const {
    scrollThresholds = DEFAULT_SCROLL_THRESHOLDS,
    timeThresholds = DEFAULT_TIME_THRESHOLDS,
    trackOnMount = true
  } = options

  const { trackScrollDepth, trackTimeOnPage } = useAnalytics()

  // State
  const scrollDepthTracked = ref<Set<number>>(new Set())
  const timeTracked = ref<Set<number>>(new Set())
  const startTime = ref<number>(0)
  const isTracking = ref(false)

  // Timers
  let timeIntervalId: ReturnType<typeof setInterval> | null = null
  let scrollHandler: (() => void) | null = null

  /**
   * Calculate current scroll depth percentage
   */
  function getScrollDepth(): number {
    if (!process.client) return 0

    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY || document.documentElement.scrollTop

    // Handle edge case where document is shorter than viewport
    if (documentHeight <= windowHeight) return 100

    const scrollableHeight = documentHeight - windowHeight
    const scrollPercentage = (scrollTop / scrollableHeight) * 100

    return Math.min(Math.round(scrollPercentage), 100)
  }

  /**
   * Handle scroll event
   * NOTE: No consent check here - Consent Mode v2 handles consent at the gtag level.
   * trackScrollDepth() → fireGA4Event() → window.gtag() which sends cookieless pings when denied.
   */
  function handleScroll(): void {
    const currentDepth = getScrollDepth()

    for (const threshold of scrollThresholds) {
      if (currentDepth >= threshold && !scrollDepthTracked.value.has(threshold)) {
        scrollDepthTracked.value.add(threshold)
        trackScrollDepth(threshold)
      }
    }
  }

  /**
   * Check and track time on page
   * NOTE: No consent check here - Consent Mode v2 handles consent at the gtag level.
   * trackTimeOnPage() → fireGA4Event() → window.gtag() which sends cookieless pings when denied.
   */
  function checkTimeOnPage(): void {
    if (!startTime.value) return

    const elapsedSeconds = Math.floor((Date.now() - startTime.value) / 1000)

    for (const threshold of timeThresholds) {
      if (elapsedSeconds >= threshold && !timeTracked.value.has(threshold)) {
        timeTracked.value.add(threshold)
        trackTimeOnPage(threshold)
      }
    }
  }

  /**
   * Start engagement tracking
   */
  function startTracking(): void {
    if (!process.client) return
    if (isTracking.value) return

    isTracking.value = true
    startTime.value = Date.now()

    // Set up scroll tracking
    scrollHandler = handleScroll
    window.addEventListener('scroll', scrollHandler, { passive: true })

    // Initial scroll check (in case user landed in the middle of the page)
    handleScroll()

    // Set up time tracking
    timeIntervalId = setInterval(checkTimeOnPage, 1000)
  }

  /**
   * Stop engagement tracking
   */
  function stopTracking(): void {
    if (!process.client) return

    isTracking.value = false

    // Remove scroll listener
    if (scrollHandler) {
      window.removeEventListener('scroll', scrollHandler)
      scrollHandler = null
    }

    // Clear time interval
    if (timeIntervalId) {
      clearInterval(timeIntervalId)
      timeIntervalId = null
    }
  }

  /**
   * Reset tracking state (useful for SPA navigation)
   */
  function resetTracking(): void {
    scrollDepthTracked.value.clear()
    timeTracked.value.clear()
    startTime.value = Date.now()
  }

  /**
   * Get current engagement stats
   */
  function getEngagementStats() {
    return {
      scrollDepthsTracked: Array.from(scrollDepthTracked.value),
      timeThresholdsTracked: Array.from(timeTracked.value),
      currentScrollDepth: getScrollDepth(),
      timeOnPage: startTime.value ? Math.floor((Date.now() - startTime.value) / 1000) : 0
    }
  }

  // Auto-start tracking on mount if enabled
  if (trackOnMount) {
    onMounted(() => {
      // Delay start to ensure analytics are loaded
      setTimeout(startTracking, 1000)
    })

    onUnmounted(() => {
      stopTracking()
    })
  }

  return {
    startTracking,
    stopTracking,
    resetTracking,
    getEngagementStats,
    getScrollDepth,
    isTracking,
    scrollDepthTracked,
    timeTracked
  }
}

/**
 * Plugin-style engagement tracking for global use
 * Can be used in plugins or layouts
 */
export function createEngagementTracker(options: EngagementOptions = {}) {
  const {
    scrollThresholds = DEFAULT_SCROLL_THRESHOLDS,
    timeThresholds = DEFAULT_TIME_THRESHOLDS
  } = options

  const scrollDepthTracked = new Set<number>()
  const timeTracked = new Set<number>()
  let startTime = 0
  let timeIntervalId: ReturnType<typeof setInterval> | null = null

  function getScrollDepth(): number {
    if (typeof window === 'undefined') return 0

    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY || document.documentElement.scrollTop

    if (documentHeight <= windowHeight) return 100

    const scrollableHeight = documentHeight - windowHeight
    const scrollPercentage = (scrollTop / scrollableHeight) * 100

    return Math.min(Math.round(scrollPercentage), 100)
  }

  function handleScroll(): void {
    const currentDepth = getScrollDepth()

    for (const threshold of scrollThresholds) {
      if (currentDepth >= threshold && !scrollDepthTracked.has(threshold)) {
        scrollDepthTracked.add(threshold)

        if (typeof window.gtag === 'function') {
          window.gtag('event', 'scroll_depth', {
            depth_percentage: threshold,
            page_path: window.location.pathname
          })
        }
      }
    }
  }

  function checkTimeOnPage(): void {
    if (!startTime) return

    const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000)

    for (const threshold of timeThresholds) {
      if (elapsedSeconds >= threshold && !timeTracked.has(threshold)) {
        timeTracked.add(threshold)

        if (typeof window.gtag === 'function') {
          window.gtag('event', 'engaged_time', {
            time_seconds: threshold,
            page_path: window.location.pathname
          })
        }
      }
    }
  }

  function start(): void {
    if (typeof window === 'undefined') return

    startTime = Date.now()
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
    timeIntervalId = setInterval(checkTimeOnPage, 1000)
  }

  function stop(): void {
    if (typeof window === 'undefined') return

    window.removeEventListener('scroll', handleScroll)
    if (timeIntervalId) {
      clearInterval(timeIntervalId)
      timeIntervalId = null
    }
  }

  function reset(): void {
    scrollDepthTracked.clear()
    timeTracked.clear()
    startTime = Date.now()
  }

  return { start, stop, reset }
}
