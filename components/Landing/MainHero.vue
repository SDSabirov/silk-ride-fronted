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
            <img src="/images/google-logo.png" alt="" aria-hidden="true" class="h-4 w-4 object-contain" loading="eager" width="16" height="16" />
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
