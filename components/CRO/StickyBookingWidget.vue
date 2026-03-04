<template>
  <ClientOnly>
    <div
      class="sticky-booking-wrapper"
      :class="{ 'sticky-booking-visible': isVisible }"
      v-show="isVisible"
    >
      <!-- COLLAPSED STATE: clean dark teaser bar -->
      <button
        v-if="isCollapsed"
        @click="expand"
        class="teaser-bar"
        aria-label="Expand booking widget"
      >
        <span class="teaser-label">GET AN INSTANT QUOTE</span>
        <span class="teaser-cta">Book Now <i class="bx bx-chevron-up"></i></span>
      </button>

      <!-- EXPANDED STATE: header + content -->
      <div v-else class="widget-panel">
        <div class="widget-header">
          <span class="header-text">Get an Instant Quote</span>
          <button
            @click="collapse"
            class="collapse-btn"
            aria-label="Collapse booking widget"
          >
            <i class="bx bx-chevron-down"></i>
          </button>
        </div>

        <!-- DESKTOP: iframe -->
        <div v-if="!isMobile" class="iframe-container">
          <!-- iOS Safari fallback -->
          <a
            v-if="isIosSafariBrowser"
            :href="bookingPageUrl"
            class="ios-book-link"
          >
            <span>Book Now</span>
          </a>
          <iframe
            v-else
            id="eto-iframe-sticky-widget"
            :src="widgetUrl"
            allow="geolocation"
            width="100%"
            height="250"
            scrolling="no"
            frameborder="0"
            style="width: 1px; min-width: 100%; border: 0"
          ></iframe>
        </div>

        <!-- MOBILE: CTA bar linking to /booking -->
        <div v-else class="mobile-cta">
          <div class="mobile-cta-content">
            <div class="mobile-cta-left">
              <span class="mobile-cta-title">Get an Instant Quote</span>
              <span class="mobile-cta-subtitle">Airport transfers from £120</span>
            </div>
            <NuxtLink :to="bookingPageUrl" class="mobile-cta-btn">
              Book Now
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLocalePath } from '#imports'

const route = useRoute()
const localePath = useLocalePath()
const { trackCustomEvent } = useAnalytics()

// Config
const siteKey = '7e3f3d3085b900d598bc40543d611575'
const widgetUrl = `https://app.silkride.co.uk/booking/widget?site_key=${siteKey}`
const bookingPageUrl = localePath('/booking')

// State
const isVisible = ref(false)
const isCollapsed = ref(false)
const isIosSafariBrowser = ref(false)
const hasTrackedView = ref(false)
const isMobile = ref(false)

// Pages where the widget should be hidden
const hiddenPaths = ['/booking', '/booking/success', '/booking/cancel', '/customer']

const shouldHideOnRoute = computed(() => {
  const path = route.path
  return hiddenPaths.some(p => path === p || path === localePath(p) || path.startsWith(p + '/'))
})

// Mobile detection
function checkMobile() {
  isMobile.value = window.innerWidth < 768
}

// iOS Safari detection
function isIosSafari() {
  const ua = navigator.userAgent
  return /iP(hone|od|ad)/.test(ua) && /Safari/.test(ua) && !/CriOS|FxiOS/.test(ua)
}

// Session storage for collapse state
const STORAGE_KEY = 'sticky_widget_collapsed'
function loadCollapseState() {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (stored !== null) isCollapsed.value = stored === 'true'
  } catch {}
}
function saveCollapseState() {
  try {
    sessionStorage.setItem(STORAGE_KEY, String(isCollapsed.value))
  } catch {}
}

function expand() {
  isCollapsed.value = false
  saveCollapseState()
  trackCustomEvent('sticky_widget_expand', { page: route.path })
}

function collapse() {
  isCollapsed.value = true
  saveCollapseState()
  trackCustomEvent('sticky_widget_collapse', { page: route.path })
}

function trackView() {
  if (!hasTrackedView.value) {
    hasTrackedView.value = true
    trackCustomEvent('sticky_widget_view', { page: route.path })
  }
}

// Consent check
function hasConsent() {
  try {
    return localStorage.getItem('cookie_consent') !== null
  } catch {
    return false
  }
}

// Scroll / IntersectionObserver logic
let observer = null
let scrollHandler = null

function setupVisibilityTrigger() {
  // Don't show on hidden routes
  if (shouldHideOnRoute.value) {
    isVisible.value = false
    return
  }

  // Wait for consent
  if (!hasConsent()) return

  // Homepage: use IntersectionObserver on #main-hero
  const heroEl = document.getElementById('main-hero')
  if (heroEl) {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !shouldHideOnRoute.value) {
          isVisible.value = true
          trackView()
        }
      },
      { threshold: 0 }
    )
    observer.observe(heroEl)
  } else {
    // Other pages: show after 300px scroll
    scrollHandler = () => {
      if (window.scrollY > 300 && !shouldHideOnRoute.value) {
        isVisible.value = true
        trackView()
      }
    }
    window.addEventListener('scroll', scrollHandler, { passive: true })
    // Check immediately in case already scrolled
    scrollHandler()
  }
}

function cleanupTriggers() {
  if (observer) {
    observer.disconnect()
    observer = null
  }
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler)
    scrollHandler = null
  }
}

// Load iframe-resizer
function loadIframeResizer() {
  if (isIosSafariBrowser.value || isMobile.value) return

  const init = () => {
    if (window.iFrameResize) {
      window.iFrameResize(
        { log: false, targetOrigin: '*', checkOrigin: false },
        '#eto-iframe-sticky-widget'
      )
    }
  }

  if (window.iFrameResize) {
    // Already loaded (e.g., booking page loaded it)
    init()
    return
  }

  const script = document.createElement('script')
  script.src = 'https://app.silkride.co.uk/assets/plugins/iframe-resizer/iframeResizer.min.js'
  script.onload = init
  document.head.appendChild(script)
}

// Consent event listener
function onConsentUpdated() {
  if (hasConsent()) {
    setupVisibilityTrigger()
  }
}

// Watch route changes
watch(
  () => route.path,
  () => {
    hasTrackedView.value = false
    cleanupTriggers()
    if (shouldHideOnRoute.value) {
      isVisible.value = false
    } else {
      // Re-setup on next tick after DOM updates
      nextTick(() => setupVisibilityTrigger())
    }
  }
)

// Watch for expanded state to init iframe-resizer
watch(
  () => isCollapsed.value,
  (collapsed) => {
    if (!collapsed) {
      nextTick(() => loadIframeResizer())
    }
  }
)

onMounted(() => {
  isIosSafariBrowser.value = isIosSafari()
  checkMobile()
  window.addEventListener('resize', checkMobile)
  loadCollapseState()

  if (hasConsent()) {
    setupVisibilityTrigger()
  }

  window.addEventListener('consent-updated', onConsentUpdated)

  // Init iframe-resizer if starting expanded
  if (!isCollapsed.value) {
    nextTick(() => loadIframeResizer())
  }
})

onBeforeUnmount(() => {
  cleanupTriggers()
  window.removeEventListener('resize', checkMobile)
  window.removeEventListener('consent-updated', onConsentUpdated)
})
</script>

<style scoped>
/* ── Wrapper + slide-up animation ── */
.sticky-booking-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 998;
  transform: translateY(100%);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
  opacity: 0;
}

.sticky-booking-visible {
  transform: translateY(0);
  opacity: 1;
}

/* ── Collapsed teaser bar — NLux-inspired ── */
.teaser-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  padding: 0 1.5rem;
  background: #0E0E14;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  box-shadow: 0 -4px 30px rgba(184, 155, 94, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;
}

.teaser-bar:hover {
  background: #12121a;
}

.teaser-label {
  color: rgba(243, 244, 246, 0.7);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.teaser-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  color: #D4AF37;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.teaser-cta i {
  font-size: 1.125rem;
  transition: transform 0.3s ease;
}

.teaser-bar:hover .teaser-cta i {
  transform: translateY(-2px);
}

/* ── Expanded panel — NLux dark ── */
.widget-panel {
  background: #0E0E14;
  box-shadow: 0 -4px 30px rgba(184, 155, 94, 0.15);
  border-top: 1px solid rgba(255, 255, 255, 0.04);
}

.widget-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.header-text {
  color: #f3f4f6;
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.collapse-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  color: #9ca3af;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.collapse-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #f3f4f6;
}

/* ── iframe container (desktop) ── */
.iframe-container {
  background: transparent;
  padding: 8px 16px;
  max-height: none;
  overflow: visible;
}

/* iOS Safari fallback link */
.ios-book-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  background: #E8DCC8;
  color: #000;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.3s ease;
}

.ios-book-link:hover {
  background: #f3ead8;
}

/* ── Mobile CTA bar ── */
.mobile-cta {
  padding: 0.625rem 1rem;
}

.mobile-cta-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.mobile-cta-left {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.mobile-cta-title {
  color: #f3f4f6;
  font-weight: 600;
  font-size: 0.8125rem;
  letter-spacing: 0.5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mobile-cta-subtitle {
  color: #6b7280;
  font-size: 0.6875rem;
  letter-spacing: 0.01em;
  white-space: nowrap;
}

.mobile-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1.25rem;
  background: #D4AF37;
  color: #000;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.mobile-cta-btn:hover {
  background: #E6C54A;
}

/* ── Mobile responsive ── */
@media (max-width: 640px) {
  .teaser-label {
    font-size: 10px;
    letter-spacing: 1.5px;
  }

  .teaser-cta {
    font-size: 12px;
  }

  .teaser-bar {
    height: 52px;
    padding: 0 1rem;
  }
}
</style>
