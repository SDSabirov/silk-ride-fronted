<template>
  <section id="main-hero" class="relative min-h-[100svh] flex flex-col overflow-hidden bg-[#0A0908]">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <NuxtImg
        src="/images/vclassjett.webp"
        alt="Luxury Mercedes Chauffeur Service"
        class="w-full h-full object-cover hero-image-cinematic"
        loading="eager"
        fetchpriority="high"
        format="webp"
        quality="80"
        width="1920"
        height="1080"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:1920px"
      />
      <!-- Directional scrim: dark zone left for type, car reads on the right -->
      <div class="hero-overlay-directional"></div>
      <!-- Gold Accent Gradient -->
      <div class="hero-accent"></div>
      <!-- Film grain -->
      <div class="grain"></div>
    </div>

    <!-- Content -->
    <div class="hero-content relative z-10 flex-1 flex items-center w-full max-w-screen-2xl mx-auto px-6 pt-32 pb-20 md:pb-32">
      <div class="grid w-full grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Left: editorial headline + proof + CTAs -->
        <div class="lg:col-span-7 text-left">
          <!-- Kicker -->
          <p class="animate-reveal flex items-center gap-4 text-gold text-[0.6875rem] md:text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            <span class="inline-block h-px w-10 md:w-12 bg-gradient-to-r from-transparent to-gold/80" aria-hidden="true"></span>
            {{ $t("landing.mainHero.kicker") }}
          </p>

          <!-- Heading -->
          <h1 class="animate-reveal-delay-1 hero-title text-white mb-6">
            {{ $t("landing.mainHero.titlePre") }}
            <em>{{ $t("landing.mainHero.titleAccent") }}</em>
            {{ $t("landing.mainHero.titlePost") }}
          </h1>

          <!-- Subtitle -->
          <p class="animate-reveal-delay-2 hero-subtitle text-white/75 mb-6 max-w-xl">
            {{ $t("landing.mainHero.subtitleShort") }}
          </p>

          <!-- Live Google proof -->
          <a
            href="#testimonials"
            class="animate-reveal-delay-2 group inline-flex items-center gap-2.5 mb-8"
          >
            <svg class="h-4 w-4 flex-shrink-0" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            <span class="flex text-gold text-sm" aria-hidden="true">
              <i class="bx bxs-star"></i><i class="bx bxs-star"></i><i class="bx bxs-star"></i><i class="bx bxs-star"></i><i class="bx bxs-star"></i>
            </span>
            <span class="text-white font-semibold text-sm">{{ rating }}</span>
            <span class="text-white/50 text-sm group-hover:text-white/80 transition-colors">
              · {{ reviewCount }} {{ $t("landing.mainHero.reviewsLabel") }}
            </span>
          </a>

          <!-- CTA Buttons -->
          <div class="animate-reveal-delay-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-5">
            <NuxtLink :to="localePath('/booking')" class="btn-hero-primary">
              {{ $t('landing.mainHero.getInstantQuote') }}
            </NuxtLink>
            <a href="tel:+442034882324" class="btn-hero-secondary">
              <i class="bx bx-phone text-gold text-base" aria-hidden="true"></i>
              +44 203 488 2324
            </a>
          </div>

          <!-- Price anchor microcopy -->
          <p class="animate-reveal-delay-3 text-white/50 text-[0.8125rem] tracking-wide">
            {{ $t("landing.mainHero.proofLine") }}
          </p>
        </div>
      </div>
    </div>

    <!-- Scroll cue -->
    <div class="relative z-10 hidden md:flex justify-center pb-5" aria-hidden="true">
      <div class="scroll-cue"></div>
    </div>

    <!-- Trust data strip pinned to the hero base -->
    <div class="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-[2px] hidden md:block">
      <div class="max-w-screen-2xl mx-auto grid grid-cols-4 divide-x divide-white/10">
        <div
          v-for="(badge, i) in trustBadges"
          :key="i"
          class="flex items-center justify-center gap-2.5 py-5 px-4 text-[0.8125rem] text-white/60"
        >
          <i :class="badge.icon" class="text-gold text-base flex-shrink-0" aria-hidden="true"></i>
          <span class="whitespace-nowrap">{{ badge.label }}</span>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { useI18n, useLocalePath } from "#imports";

const { t } = useI18n();
const localePath = useLocalePath();

const { rating, reviewCount } = useGoogleReviews();

const trustBadges = computed(() => [
  { icon: "bx bxs-star", label: t("landing.mainHero.trustBadges.rated") },
  { icon: "bx bx-radar", label: t("landing.mainHero.trustBadges.flightTracking") },
  { icon: "bx bx-time-five", label: t("landing.mainHero.trustBadges.service") },
  { icon: "bx bx-pound", label: t("landing.mainHero.trustBadges.pricing") },
]);
</script>

<style scoped>
/* Scroll-driven hero depth: content drifts up and fades as you scroll away.
   Pure CSS, zero JS; browsers without animation-timeline simply skip it. */
@supports (animation-timeline: scroll()) {
  @media (prefers-reduced-motion: no-preference) {
    .hero-content {
      animation: heroContentDrift linear both;
      animation-timeline: scroll();
      animation-range: 0 90vh;
    }
  }
}

@keyframes heroContentDrift {
  to {
    transform: translateY(-48px);
    opacity: 0.3;
  }
}
</style>
