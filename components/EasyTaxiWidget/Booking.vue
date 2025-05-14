<template>
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
      style="width: 1px; min-width: 100%; border: 0"
    ></iframe>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// Your EasyTaxiOffice site key and vendor URL
const siteKey = '7e3f3d3085b900d598bc40543d611575'
const vendorUrl = `https://u3396.eto2.taxi/booking?site_key=${siteKey}`

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

  // Load the iframe-resizer script for all other browsers
  const script = document.createElement('script')
  script.src = 'https://u3396.eto2.taxi/assets/plugins/iframe-resizer/iframeResizer.min.js'
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
.booking-iframe {
  width: 100%;
}
</style>