<template>
  <section class="relative overflow-hidden flex items-center min-h-[70svh] py-24 md:py-32">
    <NuxtImg
      src="/images/covers/about-us.webp"
      :alt="$t('landing.showcase.alt')"
      class="finale-img absolute inset-0 w-full h-full object-cover scale-110"
      loading="lazy"
      sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:1920px"
      densities="x1"
      width="1920"
      height="1440"
    />

    <!-- Scrims -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" aria-hidden="true"></div>
    <div class="grain" aria-hidden="true"></div>

    <!-- Closing statement + single CTA moment -->
    <div v-reveal class="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
      <span class="w-px h-12 bg-gradient-to-b from-transparent via-gold to-transparent" aria-hidden="true"></span>

      <blockquote class="mt-8 font-serif italic text-white text-[clamp(1.875rem,4vw,3.25rem)] leading-snug [text-wrap:balance]">
        {{ $t('landing.showcase.quote') }}
      </blockquote>

      <p class="mt-6 text-white/70 leading-relaxed max-w-2xl">
        {{ $t('landing.finale.support') }}
      </p>

      <div class="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
        <NuxtLink :to="localePath('/booking')" class="btn-hero-primary">
          {{ $t('landing.mainHero.getInstantQuote') }}
        </NuxtLink>
        <a href="tel:+442034882324" class="btn-hero-secondary">
          <i class="bx bx-phone text-gold text-base" aria-hidden="true"></i>
          +44 203 488 2324
        </a>
      </div>

      <NuxtLink
        :to="localePath('/about')"
        class="mt-10 inline-flex items-center gap-2 text-white/60 hover:text-gold text-xs font-semibold tracking-[0.2em] uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
      >
        {{ $t('landing.finale.ourStory') }}
        <i class="bx bx-right-arrow-alt text-base" aria-hidden="true"></i>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { useLocalePath } from '#imports'

const localePath = useLocalePath()
</script>

<style scoped>
/* Slow vertical parallax on the backdrop — no-op where unsupported */
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .finale-img {
      animation: finale-parallax linear both;
      animation-timeline: view();
      animation-range: cover;
    }

    @keyframes finale-parallax {
      from {
        transform: translateY(-6%) scale(1.1);
      }
      to {
        transform: translateY(6%) scale(1.1);
      }
    }
  }
}
</style>
