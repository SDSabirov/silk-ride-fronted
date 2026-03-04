<template>
  <section class="relative h-[45vh] min-h-[320px] flex items-end overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <NuxtImg
        src="/images/womanpassenger.webp"
        :alt="$t('bookingForm.hero.alt')"
        class="w-full h-full object-cover hero-image"
        loading="eager"
        width="1920"
        height="1080"
      />
      <div class="hero-overlay-premium"></div>
      <div class="hero-accent"></div>
    </div>

    <!-- Content — pinned to bottom -->
    <div class="relative z-10 w-full max-w-screen-2xl mx-auto px-6 pb-12">
      <div class="max-w-3xl mx-auto text-center">
        <p class="text-gold text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          {{ $t('landing.mainHero.tagline') }}
        </p>
        <h1 class="hero-title text-white mb-4">
          {{ $t('bookingForm.heading') }}
        </h1>
        <p class="hero-subtitle text-gray-300 max-w-xl mx-auto">
          {{ $t('bookingForm.hero.subtitle') }}
        </p>
      </div>
    </div>
  </section>
</template>
