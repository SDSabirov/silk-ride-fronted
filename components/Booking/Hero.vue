<template>
  <section class="relative h-[60vh]">
    <!-- Background -->
    <div class="absolute inset-0 overflow-hidden">
      <img
        src="/assets/images/womanpassenger.webp"
        :alt="t('bookingForm.hero.alt')"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black bg-opacity-30"></div>
    </div>

    <!-- Content -->
    <header
      class="relative z-10 text-center space-y-8 text-white flex flex-col justify-center items-center h-full px-4 md:px-0"
    >
      <h1 class="text-2xl md:text-4xl font-semibold tracking-wide">
        {{ t("bookingForm.hero.start") }}
        <span class="text-gold">{{ t("bookingForm.hero.highlight") }}</span>
      </h1>
      <p class="text-lg md:text-xl font-light px-2 md:px-0">
        {{ t("bookingForm.hero.subtitle") }}
      </p>
      <button
        @click="scrollToWidget"
        class="absolute bottom-0 flex flex-col items-center text-white animate-bounce space-y-1 focus:outline-none mt-12 bg-gradient-to-b from-black to-gold rounded-full p-6 md:hidden shadow-xl"
        aria-label="Start your journey"
      >
       
        <i class='bx  bx-chevrons-down text-2xl'  ></i> 
      </button>
    </header>
    <!-- Bouncing scroll-down button -->
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
function scrollToWidget() {
  const widget = document.getElementById("eto-iframe-booking");
  if (widget) widget.scrollIntoView({ behavior: "smooth" });
}
</script>
