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

// Define your site key and vendor URL\ n
const siteKey = '7e3f3d3085b900d598bc40543d611575'
const vendorUrl = `https://u3396.eto2.taxi/booking/widget?site_key=${siteKey}`

// Reactive iframe source defaults to vendor URL\ nconst iframeSrc = ref(vendorUrl)

// Detect iOS Safari
function isIosSafari() {
  const ua = navigator.userAgent
  return /iP(hone|od|ad)/.test(ua) && /Safari/.test(ua) && !/CriOS|FxiOS/.test(ua)
}

onMounted(() => {
  if (isIosSafari()) {
    // Redirect iOS Safari users to the vendor URL
    window.location.replace(vendorUrl)
    return
  }

  // Load iframe-resizer script for all non-iOS Safari users
  const script = document.createElement('script')
  script.src = 'https://u3396.eto2.taxi/assets/plugins/iframe-resizer/iframeResizer.min.js'
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
