<template>
  <div
    class="sr-quote-card"
    :class="{ 'sr-visible': iframeLoaded }"
  >
    <!-- Corner ornaments -->
    <span class="corner corner-tl" aria-hidden="true"></span>
    <span class="corner corner-tr" aria-hidden="true"></span>
    <span class="corner corner-bl" aria-hidden="true"></span>
    <span class="corner corner-br" aria-hidden="true"></span>

    <!-- Gold top edge -->
    <div class="gold-edge" aria-hidden="true"></div>

    <!-- Header -->
    <div class="card-header">
      <div class="eyebrow">
        <span class="eyebrow-line" aria-hidden="true"></span>
        <span class="eyebrow-text">Silk Ride · London</span>
        <span class="eyebrow-line" aria-hidden="true"></span>
      </div>
      <h2 class="card-title">
        Quote <span class="title-accent">&amp; Book</span>
      </h2>
      <p class="card-subtitle">
        Door-to-door in a Mercedes-Benz — airports, events &amp; transfers
      </p>
    </div>

    <!-- Body -->
    <div class="card-body">
      <!-- iOS Safari fallback -->
      <template v-if="isIos">
        <div class="ios-fallback">
          <p class="ios-fallback-text">
            Instant quotes for airport transfers, events &amp; more
          </p>
          <NuxtLink to="/booking" class="ios-fallback-btn">
            Book Your Journey
          </NuxtLink>
        </div>
      </template>

      <template v-else>
        <!-- Skeleton -->
        <Transition name="skel-fade">
          <div v-if="!iframeLoaded" class="skeleton" aria-hidden="true">
            <div class="skel-row skel-tabs">
              <div class="skel-bar skel-bar--active"></div>
              <div class="skel-bar"></div>
              <div class="skel-bar"></div>
            </div>
            <div class="skel-row skel-fields">
              <div class="skel-bar skel-bar--field"></div>
              <div class="skel-bar skel-bar--field"></div>
              <div class="skel-bar skel-bar--field"></div>
            </div>
            <div class="skel-row skel-datetime">
              <div class="skel-bar skel-bar--date"></div>
              <div class="skel-bar skel-bar--time"></div>
            </div>
            <div class="skel-row">
              <div class="skel-bar skel-bar--btn"></div>
            </div>
          </div>
        </Transition>

        <!-- Iframe -->
        <iframe
          id="eto-iframe-booking-widget"
          class="widget-iframe"
          :class="{ 'iframe-visible': iframeLoaded }"
          :src="widgetUrl"
          allow="geolocation"
          width="100%"
          height="250"
          scrolling="no"
          frameborder="0"
          @load="onIframeLoad"
        ></iframe>
      </template>
    </div>

    <!-- Footer -->
    <div class="card-footer">
      <a
        :href="`tel:${phoneNumber.replace(/\s/g, '')}`"
        class="phone-btn"
      >
        <svg
          class="phone-svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span>Call to Book</span>
      </a>

      <div class="badges">
        <span class="badge">
          <svg class="badge-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          5-Star
        </span>
        <span class="badge">
          <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
          </svg>
          Flight Tracking
        </span>
        <span class="badge">
          <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          Insured
        </span>
        <span class="badge">
          <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          24/7
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  phoneNumber: {
    type: String,
    default: '+44XXXXXXXXXX',
  },
})

const siteKey = '7e3f3d3085b900d598bc40543d611575'
const widgetUrl = `https://app.silkride.co.uk/booking/widget?site_key=${siteKey}`

const iframeLoaded = ref(false)
const isIos = ref(false)
let fallbackTimer = null
let resizerLoaded = false

function isIosSafari() {
  const ua = navigator.userAgent
  return /iP(hone|od|ad)/.test(ua) && /Safari/.test(ua) && !/CriOS|FxiOS/.test(ua)
}

function loadIframeResizer() {
  const selector = 'iframe#eto-iframe-booking-widget'

  if (resizerLoaded) {
    if (window.iFrameResize) {
      window.iFrameResize(
        { log: false, targetOrigin: '*', checkOrigin: false },
        selector,
      )
    }
    return
  }

  if (window.iFrameResize) {
    resizerLoaded = true
    window.iFrameResize(
      { log: false, targetOrigin: '*', checkOrigin: false },
      selector,
    )
    return
  }

  const script = document.createElement('script')
  script.src =
    'https://app.silkride.co.uk/assets/plugins/iframe-resizer/iframeResizer.min.js'
  script.onload = () => {
    resizerLoaded = true
    if (window.iFrameResize) {
      window.iFrameResize(
        { log: false, targetOrigin: '*', checkOrigin: false },
        selector,
      )
    }
  }
  document.head.appendChild(script)
}

function onIframeLoad() {
  if (iframeLoaded.value) return
  iframeLoaded.value = true
  if (fallbackTimer) {
    clearTimeout(fallbackTimer)
    fallbackTimer = null
  }
  nextTick(() => loadIframeResizer())
}

onMounted(() => {
  isIos.value = isIosSafari()

  if (isIos.value) {
    iframeLoaded.value = true
    return
  }

  fallbackTimer = setTimeout(() => {
    if (!iframeLoaded.value) {
      iframeLoaded.value = true
      nextTick(() => loadIframeResizer())
    }
  }, 4000)
})

onBeforeUnmount(() => {
  if (fallbackTimer) {
    clearTimeout(fallbackTimer)
    fallbackTimer = null
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap');

/* ── Tokens ── */
.sr-quote-card {
  --bg: #0F0F0F;
  --surface-2: #141414;
  --gold: #C9A84C;
  --gold-light: #E8C97A;
  --gold-dim: rgba(201, 168, 76, 0.1);
  --gold-border: rgba(201, 168, 76, 0.2);
  --text: #F5F0E8;
  --text-muted: rgba(245, 240, 232, 0.4);
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Jost', 'Helvetica Neue', Arial, sans-serif;

  position: relative;
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  background: var(--bg);
  font-family: var(--font-body);
  color: var(--text);
  overflow: hidden;

  /* Entrance: hidden by default */
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.sr-quote-card.sr-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ── Corner ornaments ── */
.corner {
  position: absolute;
  width: 14px;
  height: 14px;
  z-index: 2;
  pointer-events: none;
}

.corner-tl {
  top: 0;
  left: 0;
  border-top: 1px solid var(--gold-border);
  border-left: 1px solid var(--gold-border);
}

.corner-tr {
  top: 0;
  right: 0;
  border-top: 1px solid var(--gold-border);
  border-right: 1px solid var(--gold-border);
}

.corner-bl {
  bottom: 0;
  left: 0;
  border-bottom: 1px solid var(--gold-border);
  border-left: 1px solid var(--gold-border);
}

.corner-br {
  bottom: 0;
  right: 0;
  border-bottom: 1px solid var(--gold-border);
  border-right: 1px solid var(--gold-border);
}

/* ── Gold top edge ── */
.gold-edge {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  z-index: 3;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--gold) 50%,
    transparent 100%
  );
}

/* ── Header ── */
.card-header {
  padding: 28px 24px 20px;
  text-align: center;
  border-bottom: 1px solid var(--gold-border);
}

.eyebrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 14px;
}

.eyebrow-line {
  width: 28px;
  height: 1px;
  background: var(--gold);
  flex-shrink: 0;
}

.eyebrow-text {
  font-family: var(--font-body);
  font-size: 9px;
  font-weight: 400;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--gold);
  white-space: nowrap;
}

.card-title {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 300;
  color: var(--text);
  margin: 0 0 8px;
  line-height: 1.2;
}

.title-accent {
  font-style: italic;
  color: var(--gold-light);
}

.card-subtitle {
  font-size: 12px;
  font-weight: 300;
  color: var(--text-muted);
  margin: 0;
  line-height: 1.5;
}

/* ── Body ── */
.card-body {
  position: relative;
  min-height: 220px;
  background: var(--surface-2);
}

/* ── Skeleton ── */
.skeleton {
  position: absolute;
  inset: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1;
}

.skel-row {
  display: flex;
  gap: 8px;
}

.skel-tabs {
  gap: 6px;
}

.skel-bar {
  height: 34px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.035);
  position: relative;
  overflow: hidden;
}

.skel-bar--active {
  width: 110px;
  background: var(--gold-dim);
}

.skel-tabs .skel-bar:not(.skel-bar--active) {
  width: 80px;
}

.skel-bar--field {
  flex: 1;
  height: 42px;
}

.skel-datetime {
  gap: 8px;
}

.skel-bar--date {
  flex: 2;
  height: 42px;
}

.skel-bar--time {
  flex: 1;
  height: 42px;
}

.skel-bar--btn {
  width: 44px;
  height: 42px;
  background: var(--gold-dim);
  margin-left: auto;
}

/* Shimmer */
.skel-bar::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.04) 40%,
    rgba(255, 255, 255, 0.06) 50%,
    rgba(255, 255, 255, 0.04) 60%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: sr-shimmer 2s ease-in-out infinite;
}

@keyframes sr-shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* Skeleton fade-out transition */
.skel-fade-leave-active {
  transition: opacity 0.3s ease;
}

.skel-fade-leave-to {
  opacity: 0;
}

/* ── iOS Safari fallback ── */
.ios-fallback {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  text-align: center;
  min-height: 220px;
}

.ios-fallback-text {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 300;
  color: var(--text-muted);
  margin: 0 0 24px;
  line-height: 1.6;
  max-width: 280px;
}

.ios-fallback-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 36px;
  background: var(--gold);
  color: var(--bg);
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  transition: background 0.2s ease;
}

.ios-fallback-btn:hover {
  background: var(--gold-light);
}

/* ── Iframe ── */
.widget-iframe {
  display: block;
  width: 1px;
  min-width: 100%;
  border: 0;
  background: transparent;
  opacity: 0;
  transition: opacity 0.5s ease 0.1s;
}

.widget-iframe.iframe-visible {
  opacity: 1;
}

/* ── Footer ── */
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 44px;
  border-top: 1px solid var(--gold-border);
}

.phone-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 14px;
  border: 1px solid var(--gold-border);
  border-radius: 3px;
  background: transparent;
  color: var(--text-muted);
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.phone-btn:hover {
  color: var(--bg);
  background: var(--gold);
  border-color: var(--gold);
}

.phone-svg {
  width: 13px;
  height: 13px;
  flex-shrink: 0;
}

.badges {
  display: flex;
  align-items: center;
  gap: 14px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: var(--text-muted);
  white-space: nowrap;
  letter-spacing: 0.01em;
}

.badge-icon {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  color: var(--gold);
}

/* ── Responsive: < 580px ── */
@media (max-width: 579px) {
  .sr-quote-card {
    max-width: 100%;
  }

  .card-header {
    padding: 22px 16px 16px;
  }

  .card-title {
    font-size: 26px;
  }

  .card-subtitle {
    font-size: 11px;
  }

  .eyebrow-text {
    font-size: 8px;
  }

  .badges {
    display: none;
  }

  .card-footer {
    justify-content: center;
    padding: 0 12px;
  }

  .skeleton {
    padding: 12px;
  }

  .skel-bar--field {
    height: 38px;
  }

  .skel-bar--date,
  .skel-bar--time {
    height: 38px;
  }
}
</style>
