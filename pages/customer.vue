<template>
  <div>
    <Navbar />
    <BookingHero />
    <div class="flex items-center justify-center w-full relative h-full py-22">
      <div class="w-full max-w-screen-xl mx-auto">
        <iframe
          id="eto-iframe-booking-widget"
          :src="iframeSrc"
          allow="geolocation"
          width="100%"
          height="250"
          scrolling="no"
          frameborder="0"
          style="width:1px; min-width:100%; border:0;"
        ></iframe>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const siteKey = '7e3f3d3085b900d598bc40543d611575'
const iframeSrc = ref(`https://app.silkride.co.uk/widget?site_key=${siteKey}`)

const route = useRoute()

onMounted(() => {
  const utmSource = route.query.utm_source
  if (utmSource === 'qr' && typeof window.gtag === 'function') {
    window.gtag('event', 'qr_code_lead', {
      source: 'qr'
    })
  }

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