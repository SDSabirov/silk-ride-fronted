<template>
  <div class="booking-iframe-wrapper">
    <!-- Iframe Container -->
    <div class="booking-iframe">
      <iframe
        ref="bookingIframe"
        id="eto-iframe-booking"
        :src="iframeSrc"
        allow="geolocation"
        width="100%"
        height="250"
        scrolling="no"
        frameborder="0"
        style="width: 1px; min-width: 100%; border: 0; background: transparent;"
      ></iframe>
    </div>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useAnalytics } from '~/composables/useAnalytics'
import { useTrafficSource } from '~/composables/useTrafficSource'

const { fireGA4Event } = useAnalytics()
const { getAttributionForEvent } = useTrafficSource()

// EasyTaxiOffice site key & base booking URL
const siteKey = '7e3f3d3085b900d598bc40543d611575'
const vendorBaseUrl = `https://app.silkride.co.uk//booking?site_key=${siteKey}`

// Reactive iframe source
const iframeSrc = ref('')

onMounted(() => {
  // Fire GA4 event for booking widget initiation (not a conversion)
  fireGA4Event('begin_checkout', {
    ...getAttributionForEvent()
  })

  // 2) Build the final iframe URL (includes return_url for post-booking redirect)
  const returnUrl = `${window.location.origin}/booking-complete`
  const fullUrl = `${vendorBaseUrl}&return_url=${encodeURIComponent(returnUrl)}`
  iframeSrc.value = fullUrl

  // 4) Inject the iframe-resizer script
  const script = document.createElement('script')
  script.src = 'https://app.silkride.co.uk//assets/plugins/iframe-resizer/iframeResizer.min.js'
  script.onload = () => {
    if (window.iFrameResize) {
      window.iFrameResize(
        { log: false, targetOrigin: '*', checkOrigin: false },
        '#eto-iframe-booking'
      )
    }
  }
  document.head.appendChild(script)
})
</script>

<style scoped>
.booking-iframe-wrapper {
  width: 100%;
  position: relative;
}

.booking-iframe {
  width: 100%;
  position: relative;
  overflow: hidden;
  background: transparent;
  box-shadow: none;
  border: none;
  border-radius: 0;
}

.booking-iframe iframe {
  display: block;
  width: 100% !important;
  min-width: 100% !important;
  border: none !important;
  background: transparent;
  transition: opacity 0.3s ease;
}

/* Responsive design */
@media (max-width: 768px) {
  .booking-iframe iframe {
    min-height: 600px !important;
  }
}

@media (min-width: 769px) {
  .booking-iframe iframe {
    min-height: 500px !important;
  }
}
</style>