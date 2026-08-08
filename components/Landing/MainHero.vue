<template>
  <section id="main-hero" class="relative min-h-[100svh] flex flex-col overflow-hidden bg-surface-950">
    <!-- Photo: full-bleed backdrop on mobile, right editorial panel on desktop -->
    <div class="absolute inset-0 lg:left-[44%]">
      <NuxtImg
        src="/images/hero-chauffeur.webp"
        alt="Silk Ride chauffeur opening the door of a Mercedes"
        class="hero-photo w-full h-full object-cover"
        loading="eager"
        fetchpriority="high"
        preload
        format="webp"
        quality="82"
        width="1344"
        height="768"
        sizes="xs:100vw sm:100vw md:100vw lg:56vw xl:1080px"
      />
      <!-- Mobile: vertical scrim so type sits on calm darkness -->
      <div class="absolute inset-0 lg:hidden bg-gradient-to-t from-surface-950 via-surface-950/70 to-surface-950/35" aria-hidden="true"></div>
      <!-- Desktop: blend the panel's left edge into the type field -->
      <div class="absolute inset-0 hidden lg:block bg-gradient-to-r from-surface-950 via-surface-950/30 to-transparent" aria-hidden="true"></div>
      <div class="absolute inset-x-0 bottom-0 h-40 hidden lg:block bg-gradient-to-t from-surface-950 to-transparent" aria-hidden="true"></div>
    </div>

    <!-- Film grain (hero + finale only) -->
    <div class="grain" aria-hidden="true"></div>

    <!-- Content -->
    <div class="hero-content relative z-10 flex-1 flex items-center w-full max-w-screen-2xl mx-auto px-6 pt-28 md:pt-32 pb-14 lg:pb-24">
      <div class="w-full max-w-3xl">
        <!-- Kicker -->
        <p class="animate-reveal flex items-center gap-4 text-gold text-[0.6875rem] md:text-xs font-semibold tracking-[0.25em] uppercase mb-7">
          <span class="hidden sm:inline-block h-px w-10 md:w-12 bg-gradient-to-r from-transparent to-gold/80" aria-hidden="true"></span>
          {{ $t("landing.mainHero.kicker") }}
        </p>

        <!-- Heading -->
        <h1 class="animate-reveal-delay-1 hero-title text-white mb-7">
          {{ $t("landing.mainHero.titlePre") }}
          <em class="text-gold-foil">{{ $t("landing.mainHero.titleAccent") }}</em>
          {{ $t("landing.mainHero.titlePost") }}
        </h1>

        <!-- Subtitle -->
        <p class="animate-reveal-delay-2 hero-subtitle text-white/75 mb-6 max-w-xl">
          {{ $t("landing.mainHero.subtitleShort") }}
        </p>

        <!-- Live Google proof -->
        <a
          href="#testimonials"
          class="animate-reveal-delay-2 group inline-flex items-center gap-2.5 mb-10"
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
          <span class="text-white font-semibold text-sm">{{ displayRating }}</span>
          <span class="text-white/50 text-sm group-hover:text-white/80 transition-colors">
            · {{ reviewCount }} {{ $t("landing.mainHero.reviewsLabel") }}
          </span>
        </a>

        <!-- CTA row: one loud button, one quiet phone line -->
        <div class="animate-reveal-delay-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-8 mb-6">
          <NuxtLink :to="localePath('/booking')" class="btn-hero-primary">
            {{ $t('landing.mainHero.getInstantQuote') }}
          </NuxtLink>
          <a
            href="tel:+442034882324"
            class="group inline-flex items-center justify-center sm:justify-start gap-3 text-white/85 hover:text-white font-semibold text-sm tracking-wide transition-colors"
          >
            <span class="w-10 h-10 rounded-full border border-white/20 grid place-items-center text-gold transition-colors group-hover:border-gold/60" aria-hidden="true">
              <i class="bx bx-phone text-lg"></i>
            </span>
            +44 203 488 2324
          </a>
        </div>

        <!-- Price anchor microcopy -->
        <p class="animate-reveal-delay-3 text-white/50 text-[0.8125rem] tracking-wide">
          {{ $t("landing.mainHero.proofLine") }}
        </p>
      </div>
    </div>

    <!-- Scroll cue -->
    <div class="relative z-10 hidden md:flex justify-center pb-6" aria-hidden="true">
      <div class="scroll-cue"></div>
    </div>
  </section>
</template>

<script setup>
import { useLocalePath } from "#imports";

const localePath = useLocalePath();

const { rating, reviewCount } = useGoogleReviews();
const displayRating = computed(() => Number(rating.value).toFixed(1));
</script>

<style scoped>
/* Quiet grade — the photo is already moody, no heavy cinematic filter needed.
   Mobile crop centres the gloved hand; desktop panel sits slightly right. */
.hero-photo {
  filter: brightness(0.92) contrast(1.04);
  object-position: 60% center;
}

@media (min-width: 1024px) {
  .hero-photo {
    object-position: 68% center;
  }
}

/* Homepage-only display scale — inner-page heroes keep the shared size */
.hero-title {
  font-size: clamp(2.5rem, 7vw, 6rem);
  line-height: 1.04;
}

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
