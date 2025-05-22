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
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useFacebookPixel } from '~/composables/useFacebookPixel'

const { track } = useFacebookPixel()

// EasyTaxiOffice site key & base booking URL
const siteKey = '7e3f3d3085b900d598bc40543d611575'
const vendorBaseUrl = `https://u3396.eto2.taxi/booking?site_key=${siteKey}`

// Reactive iframe source
const iframeSrc = ref('')

// Handle postMessage from iframe
function handleMessage(event) {
  if (event.origin !== 'https://u3396.eto2.taxi') return;
  console.log('📣 Received message:', event.data);
  const { type, value, currency } = event.data;
  if (type === 'bookingCompleted' && typeof value === 'number') {
    console.log(`📦 Firing Purchase: value=${value}, currency=${currency}`);
    track('Purchase', { value, currency });
  }
}

onMounted(() => {
  // 1) Track Lead when booking page is viewed
  track('Lead')

  // 2) Listen for purchase-completion messages
  window.addEventListener('message', handleMessage)

  // 3) Build the final iframe URL (includes return_url for post-booking redirect)
  const returnUrl = `${window.location.origin}/booking-complete`
  const fullUrl = `${vendorBaseUrl}&return_url=${encodeURIComponent(returnUrl)}`
  iframeSrc.value = fullUrl

  // 4) Inject the iframe-resizer script
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

onBeforeUnmount(() => {
  window.removeEventListener('message', handleMessage)
})
</script>

<style scoped>
.booking-iframe {
  width: 100%;
}
</style>