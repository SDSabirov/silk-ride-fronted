<template>
  <section class="relative min-h-screen flex items-center">
    <!-- Background with improved gradient overlay -->
    <div class="absolute inset-0 overflow-hidden">
      <img
        src="~/assets/images/vclassjett.webp"
        alt="Luxury Mercedes Chauffeur Service in London"
        class="w-full h-full object-cover"
        loading="eager"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45"></div>
    </div>

    <!-- Content with better typography and layout -->
    <div class="relative z-10 max-w-screen-xl mx-auto px-6 text-white">
      <div class="max-w-4xl">
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          {{ $t("landing.mainHero.title") }}
        </h1>
        <p class="text-xl md:text-2xl font-light mb-8 opacity-90 leading-relaxed">
          {{ $t("hero.subtitle") }}
        </p>

        <!-- Key benefits -->
        <div class="flex flex-wrap gap-4 mb-8 text-sm md:text-base">
          <div class="flex items-center space-x-2 bg-black/30 px-3 py-2 rounded-full backdrop-blur">
            <i class="bx bx-check-circle text-gold"></i>
            <span>{{ $t("landing.mainHero.badges.available") }}</span>
          </div>
          <div class="flex items-center space-x-2 bg-black/30 px-3 py-2 rounded-full backdrop-blur">
            <i class="bx bx-check-circle text-gold"></i>
            <span>{{ $t("landing.mainHero.badges.licensed") }}</span>
          </div>
          <div class="flex items-center space-x-2 bg-black/30 px-3 py-2 rounded-full backdrop-blur">
            <i class="bx bx-check-circle text-gold"></i>
            <span>{{ $t("landing.mainHero.badges.professional") }}</span>
          </div>
        </div>
        
        <!-- Improved CTA buttons -->
        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink
            :to="localePath('/booking')"
            class="inline-flex items-center justify-center bg-gold text-black hover:bg-gold/90 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black"
          >
            <i class="bx bx-calendar mr-2"></i>
            {{ $t("hero.bookNow") }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/services')"
            class="inline-flex items-center justify-center border-2 border-gold text-gold hover:bg-gold hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black"
          >
            <i class="bx bx-info-circle mr-2"></i>
            {{ $t("hero.exploreServices") }}
          </NuxtLink>
        </div>
        
        <!-- Quick contact option -->
        <div class="mt-8 flex items-center space-x-4 text-sm opacity-80">
          <span>{{ $t("landing.mainHero.quickContact") }}</span>
          <a href="tel:+447512905514" class="text-gold hover:text-gold/80 transition-colors font-semibold">
            {{ $t("landing.mainHero.phoneNumber") }}
          </a>
        </div>
      </div>
    </div>
    
    <!-- Enhanced scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer group"
         @click="scrollToServices">
      <div class="flex flex-col items-center">
        <span class="text-xs opacity-60 mb-2 group-hover:opacity-80 transition-opacity">{{ $t("landing.mainHero.scrollCta") }}</span>
        <div class="relative">
          <i class="bx bx-chevron-down text-3xl opacity-60 group-hover:opacity-80 transition-opacity"></i>
          <div class="absolute inset-0 rounded-full border border-white/20 animate-ping"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocalePath } from "#imports";

const localePath = useLocalePath();

const scrollToServices = () => {
  const servicesSection = document.querySelector('[data-section="services"]');
  if (servicesSection) {
    servicesSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};
</script>

<style>
/* Additional styling for responsiveness or animations, if needed */
</style>
