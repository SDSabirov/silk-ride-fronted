<template>
  <div class="booking-iframe-wrapper">
    <!-- Iframe Container -->
    <div class="booking-iframe">
      <!-- Top accent bar -->
      <div class="accent-bar"></div>
      
      <iframe
        ref="bookingIframe"
        id="eto-iframe-booking"
        :src="iframeSrc"
        allow="geolocation"
        width="100%"
        height="250"
        scrolling="no"
        frameborder="0"
        style="width: 1px; min-width: 100%; border: 0; border-radius: 0 0 16px 16px;"
      ></iframe>
    </div>

    <!-- Help Text -->
    <div class="help-text mt-6 text-center">
      <p class="text-sm text-gray-500 mb-2">
        Need assistance? Our team is available 24/7
      </p>
      <div class="flex justify-center space-x-4 text-sm">
        <a href="tel:+447512905514" class="text-gold hover:text-gold/80 font-medium">
          📞 +44 7512 905514
        </a>
        <a href="mailto:info@silkride.co.uk" class="text-gold hover:text-gold/80 font-medium"> 
          ✉️ info@silkride.co.uk
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useFacebookPixel } from '~/composables/useFacebookPixel'
import { useAnalytics } from '~/composables/useAnalytics'
import { useTrafficSource } from '~/composables/useTrafficSource'

const { track } = useFacebookPixel()
const { trackLead, fireGA4Event } = useAnalytics()
const { getAttributionForEvent } = useTrafficSource()

// EasyTaxiOffice site key & base booking URL
const siteKey = '7e3f3d3085b900d598bc40543d611575'
const vendorBaseUrl = `https://app.silkride.co.uk//booking?site_key=${siteKey}`

// Reactive iframe source
const iframeSrc = ref('')

onMounted(() => {
  // 1) Track Lead when booking page is viewed
  track('Lead')

  // Track booking widget view with attribution
  trackLead({
    form_type: 'booking_widget_view',
    form_location: 'booking_page'
  })

  // Fire GA4 event for booking widget initiation
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
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}


.accent-bar {
  height: 4px;
  background: linear-gradient(90deg, #FFCB6C 0%, #F59E0B 50%, #FFCB6C 100%);
  border-radius: 16px 16px 0 0;
  position: relative;
  z-index: 2;
}

.booking-iframe iframe {
  display: block;
  width: 100% !important;
  min-width: 100% !important;
  border: none !important;
  background: white;
  transition: opacity 0.3s ease;
}


.help-text {
  padding: 16px;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border-radius: 12px;
  border: 1px solid #e5e7eb;
}

.help-text a {
  transition: all 0.2s ease;
  padding: 4px 8px;
  border-radius: 6px;
}

.help-text a:hover {
  background: rgba(255, 203, 108, 0.1);
  transform: translateY(-1px);
}

/* Responsive design */
@media (max-width: 768px) {
  .booking-iframe iframe {
    min-height: 600px !important;
  }
  
  .help-text {
    margin-top: 1rem;
    padding: 12px;
  }
  
  .help-text .flex {
    flex-direction: column;
    space-y: 2;
  }
  
  .help-text a {
    margin: 2px 0;
  }
}

@media (min-width: 769px) {
  .booking-iframe iframe {
    min-height: 500px !important;
  }
}

</style>