<template>
  <section class="relative h-[50vh]">
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
    </header>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
