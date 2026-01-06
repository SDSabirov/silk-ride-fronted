<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <NuxtImg
        src="/images/vclassjett.webp"
        alt="Luxury Mercedes Chauffeur Service"
        class="w-full h-full object-cover hero-image"
        loading="eager"
        fetchpriority="high"
        width="1920"
        height="1080"
        preset="hero"
      />
      <!-- Premium Multi-layer Overlay -->
      <div class="hero-overlay-premium"></div>
      <!-- Gold Accent Gradient -->
      <div class="hero-accent"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-screen-2xl mx-auto px-6 py-20 w-full">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Tagline -->
        <p class="animate-reveal text-gold text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-6">
          {{ $t("landing.mainHero.tagline") }}
        </p>

        <!-- Heading -->
        <h1 class="animate-reveal-delay-1 hero-title text-white mb-8">
          {{ $t("landing.mainHero.title") }}
        </h1>

        <!-- Subtitle -->
        <p class="animate-reveal-delay-2 hero-subtitle text-gray-300 mb-12 max-w-2xl mx-auto">
          {{ $t("hero.subtitle") }}
        </p>

        <!-- CTA Buttons -->
        <div class="animate-reveal-delay-3 flex flex-col sm:flex-row gap-5 justify-center">
          <NuxtLink
            :to="localePath('/booking')"
            class="btn-hero-primary"
          >
            {{ $t("hero.bookNow") }}
            <i class="bx bx-right-arrow-alt text-xl transition-transform group-hover:translate-x-1"></i>
          </NuxtLink>
          <NuxtLink
            :to="localePath('/services')"
            class="btn-hero-secondary"
          >
            {{ $t("hero.exploreServices") }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocalePath } from "#imports";

const localePath = useLocalePath();
</script>
