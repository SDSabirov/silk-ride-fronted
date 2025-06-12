<template>
  <div class="booking-widget">
    <iframe
      ref="bookingIframe"
      id="eto-iframe-customer"
      :src="iframeSrc"
      allow="geolocation"
      width="100%"
      height="400"
      scrolling="no"
      frameborder="0"
      style="width: 1px; min-width: 100%; min-height: 400px; border: 0"
    ></iframe>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// Replace with your actual site key
const siteKey = '7e3f3d3085b900d598bc40543d611575'

// Widget URL
const iframeSrc = ref(`https://app.silkride.co.uk/customer?site_key=${siteKey}`)

onMounted(() => {
  // Inject iframe resizer script
  const script = document.createElement('script')
  script.src = 'https://app.silkride.co.uk/assets/plugins/iframe-resizer/iframeResizer.min.js'
  script.onload = () => {
    if (window.iFrameResize) {
      window.iFrameResize(
        {
          log: false,
          checkOrigin: false,
          heightCalculationMethod: 'bodyScroll',
          resizedCallback(data) {
            console.log('Iframe resized to:', data.height + 'px')
          }
        },
        '#eto-iframe-customer'
      )
    }
  }
  document.head.appendChild(script)
})
</script>

<style scoped>
.booking-widget {
  width: 100%;
  min-height: 400px;
}
</style>