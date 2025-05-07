<template>
  <div class="booking-widget">
    <iframe
      ref="bookingIframe"
      src="https://u3396.eto2.taxi/booking/widget?site_key=7e3f3d3085b900d598bc40543d611575"
      id="eto-iframe-booking-widget"
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
onMounted(() => {
  const script = document.createElement("script");
  script.src =
    "https://u3396.eto2.taxi/assets/plugins/iframe-resizer/iframeResizer.min.js";
  script.onload = () => {
    if (window.iFrameResize) {
      window.iFrameResize(
        {
          log: false,
          targetOrigin: "*",
          checkOrigin: false,
        },
        "#eto-iframe-booking-widget"
      );
    }
  };
  document.head.appendChild(script);
});
</script>

<style scoped>
.booking-widget {
  width: 100%;
}
</style>
