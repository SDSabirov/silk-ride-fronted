<template>
  <section id="main-hero" class="relative min-h-screen flex items-center overflow-hidden">
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
        <div class="animate-reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button class="btn-hero-primary" @click="showBookingModal = true">
            Get Instant Quote
          </button>
          <NuxtLink :to="localePath('/booking')" class="btn-hero-secondary">
            Book Your Journey
          </NuxtLink>
        </div>

        <!-- Trust Indicators -->
        <div class="animate-reveal-delay-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <span v-for="badge in trustBadges" :key="badge" class="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
            <svg class="w-4 h-4 text-gold flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            {{ badge }}
          </span>
        </div>
      </div>
    </div>

    <!-- Booking Modal -->
    <BookingModal v-model="showBookingModal">
      <QuoteWidget phone-number="+44 203 488 2324" />
    </BookingModal>
  </section>
</template>

<script setup>
import { useLocalePath } from "#imports";

const localePath = useLocalePath();
const showBookingModal = ref(false);

const trustBadges = [
  '5-Star Rated',
  'Flight Tracking',
  '24/7 Service',
  'Fixed Pricing',
]
</script>
