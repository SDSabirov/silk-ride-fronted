<template>
  <div>
    <Navbar />
    <BookingHero />
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12">
      <div class="w-full max-w-6xl mx-auto px-4">
        <!-- Widget Container with Custom Styling -->
        <div class="bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-gray-100">
          <!-- Header -->
          <div class="text-center mb-8">
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-black mb-4">
              {{ $t("bookingForm.heading") }}
            </h2>
            <div class="w-24 h-1 bg-gold mx-auto mb-4"></div>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Complete the form below to get an instant quote for your luxury chauffeur service
            </p>
          </div>
          
          <!-- Enhanced Widget Container -->
          <div class="widget-container">
            <EasyTaxiWidgetBooking />
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { useSeo } from "~/utils/useSeo";

useSeo("booking");
</script>

<style>
/* Custom styling for the EasyTaxi widget */
.widget-container {
  /* Ensure the iframe takes full width and looks integrated */
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background: white;
  border: 1px solid #f3f4f6;
}

.widget-container iframe {
  border-radius: 16px !important;
  box-shadow: none !important;
  border: none !important;
}

/* Try to style iframe content (limited due to cross-origin restrictions) */
.booking-iframe {
  position: relative;
}

.booking-iframe::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #FFCB6C 0%, #F59E0B 100%);
  z-index: 10;
  border-radius: 16px 16px 0 0;
}


/* Responsive iframe height */
@media (max-width: 768px) {
  .widget-container iframe {
    min-height: 600px !important;
  }
}

@media (min-width: 769px) {
  .widget-container iframe {
    min-height: 500px !important;
  }
}

/* Additional styling to make the widget blend with the design */
.widget-container {
  background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
  position: relative;
}

/* Add a subtle border effect */
.widget-container::before {
  content: '';
  position: absolute;
  inset: -1px;
  padding: 1px;
  background: linear-gradient(135deg, #FFCB6C, #F59E0B, #FFCB6C);
  border-radius: 16px;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: subtract;
  z-index: -1;
}
</style>
