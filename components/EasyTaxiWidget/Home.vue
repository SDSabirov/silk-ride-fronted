<template>
  <div class="booking-widget">
    <iframe
      ref="bookingIframe"
      id="eto-iframe-booking-widget"
      :src="iframeSrc"
      allow="geolocation"
      width="100%"
      height="250"
      scrolling="no"
      frameborder="0"
      style="width: 1px; min-width: 100%; border: 0"
    ></iframe>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// Your EasyTaxiOffice site key and vendor URL
const siteKey = '7e3f3d3085b900d598bc40543d611575'
const vendorUrl = `https://app.silkride.co.uk/booking/widget?site_key=${siteKey}`

// Reactive iframe source defaults to the vendor URL
const iframeSrc = ref(vendorUrl)

// Detect iOS Safari (excludes Chrome/Firefox on iOS)
function isIosSafari() {
  const ua = navigator.userAgent
  return /iP(hone|od|ad)/.test(ua) && /Safari/.test(ua) && !/CriOS|FxiOS/.test(ua)
}

onMounted(() => {
  if (isIosSafari()) {
    // Redirect iOS Safari users directly to the vendor URL
    window.location.replace(vendorUrl)
    return
  }

  // Load the iframe-resizer script for non-iOS Safari browsers
  const script = document.createElement('script')
  script.src = 'https://app.silkride.co.uk/assets/plugins/iframe-resizer/iframeResizer.min.js'
  script.onload = () => {
    if (window.iFrameResize) {
      window.iFrameResize(
        { log: false, targetOrigin: '*', checkOrigin: false },
        '#eto-iframe-booking-widget'
      )
    }
  }
  document.head.appendChild(script)
})
</script>

<style scoped>
.booking-widget {
  width: 100%;
}
</style>