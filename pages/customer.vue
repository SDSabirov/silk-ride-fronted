<template>
  <div>
    <Navbar />
    <CommonHero :image="cover" :page="$t('pages.customer.heroTitle')" />

    <div class="flex items-center justify-center w-full relative h-full py-22">
      <div class="w-full max-w-screen-xl mx-auto">
        <iframe
          id="eto-iframe-booking-widget"
          :src="iframeSrc"
          allow="geolocation"
          width="100%"
          height="400"
          scrolling="no"
          frameborder="0"
          style="width: 1px; min-width: 100%; min-height: 400px; border: 0;"
        ></iframe>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const cover = "/images/covers/business-trip.webp"

const siteKey = '7e3f3d3085b900d598bc40543d611575'
const iframeSrc = ref(`https://app.silkride.co.uk/customer?site_key=${siteKey}`)

const route = useRoute()
useSeo('customer')
onMounted(() => {
  // Fire event for QR leads
  if (route.query.utm_source === 'qr' && typeof window.gtag === 'function') {
    window.gtag('event', 'qr_code_lead', {
      source: 'qr'
    })
  }

  // Load iframe resizer
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
        '#eto-iframe-booking-widget'
      )
    }
  }
  document.head.appendChild(script)
})
</script>