<template>
  <section class="relative h-[55svh] min-h-[420px] overflow-hidden">
    <NuxtImg
      src="/images/sclassBackground.webp"
      :alt="$t('landing.showcase.alt')"
      class="showcase-img absolute inset-0 w-full h-full object-cover scale-110"
      loading="lazy"
      sizes="100vw"
      width="1920"
      height="1080"
    />

    <!-- Scrims -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/65"></div>
    <div class="grain" aria-hidden="true"></div>

    <!-- Pull-quote -->
    <div v-reveal class="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
      <span class="w-px h-12 bg-gradient-to-b from-transparent via-gold to-transparent" aria-hidden="true"></span>
      <blockquote class="my-8 font-serif italic text-white text-[clamp(1.75rem,3.5vw,3rem)] leading-snug max-w-3xl [text-wrap:balance]">
        {{ $t('landing.showcase.quote') }}
      </blockquote>
      <span class="w-px h-12 bg-gradient-to-b from-transparent via-gold to-transparent" aria-hidden="true"></span>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Slow vertical parallax on the backdrop — no-op where unsupported */
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .showcase-img {
      animation: showcase-parallax linear both;
      animation-timeline: view();
      animation-range: cover;
    }

    @keyframes showcase-parallax {
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
