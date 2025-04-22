<template>
  <div class="booking-iframe ">
    <iframe
      ref="bookingIframe"
      src="https://silkride.trial.easytaxioffice.com/booking?site_key=7e3f3d3085b900d598bc40543d611575"
      id="eto-iframe-booking"
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
    "https://silkride.trial.easytaxioffice.com/assets/plugins/iframe-resizer/iframeResizer.min.js";
  script.onload = () => {
    if (window.iFrameResize) {
      window.iFrameResize(
        {
          log: false,
          targetOrigin: "*",
          checkOrigin: false,
        },
        "#eto-iframe-booking"
      );
    }
  };
  document.head.appendChild(script);
});
</script>

<style scoped>
.booking-iframe {
  width: 100%;
}
</style>
