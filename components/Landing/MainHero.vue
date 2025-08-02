<template>
  <section class="relative h-screen">
    <div class="absolute inset-0 overflow-hidden">
      <img
        src="/assets/images/vclassjett.webp"
        alt="Luxury Chauffeur"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <header
      class="relative z-10 text-center space-y-8 text-white flex flex-col justify-center items-center h-full max-w-screen-xl mx-auto"
    >
      <h1 class="text-2xl md:text-6xl font-semibold tracking-wide capitalize">
        Premium <span class="text-gold">London Chauffeur</span> Service for Airport Transfers & Business Travel
      </h1>
      <p
        class="text-lg md:text-2xl font-light px-2 md:px-0 w-full whitespace-wrap capitalize"
      >
        {{ $t("hero.subtitle") }}
      </p>

      <div
        class="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-4 mt-4 justify-center items-center"
      >
        <NuxtLink
          :to="localePath('/booking')"
          class="flex justify-center py-3 text-lg w-[238px] shadow-lg text-black font-semibold capitalize"
          style="background: #ffcb6c"
        >
          {{ $t("hero.bookNow") }}
        </NuxtLink>
        <NuxtLink
          :to="localePath('/services')"
          class="flex justify-center py-3 shadow-lg border text-[#FFCB6C] w-[238px] text-lg md:text-xl font-semibold hover:bg-[#FFCB6C] hover:text-black transition bg-black/70 shadow-md backdrop-blur capitalize"
          style="border-color: #ffcb6c"
        >
          {{ $t("hero.exploreServices") }}
        </NuxtLink>
      </div>
    </header>
  </section>
</template>

<script setup>
import { useLocalePath } from "#imports";

const localePath = useLocalePath();
</script>

<style>
/* Additional styling for responsiveness or animations, if needed */
</style>
