<template>
  <section class="bg-ivory py-24 md:py-32 overflow-hidden">
    <div class="max-w-screen-2xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center pb-10">
        <!-- Left: editorial copy -->
        <div v-reveal>
          <p class="text-xs font-semibold tracking-[0.25em] uppercase text-gold">
            {{ $t('about.tagline') }}
          </p>

          <h2 class="mt-4 font-serif font-medium tracking-tight text-4xl md:text-5xl text-gray-900 [text-wrap:balance]">
            {{ $t('about.title') }}
          </h2>

          <p class="font-serif italic text-xl md:text-2xl text-gray-800 leading-relaxed mt-6">
            {{ $t('about.shortDescription') }}
          </p>

          <!-- Numbered points -->
          <ol class="mt-10 space-y-7">
            <li v-reveal="1" class="flex items-start">
              <span class="font-serif text-2xl text-gold-600 w-12 shrink-0" aria-hidden="true">01</span>
              <div>
                <h4 class="font-semibold text-gray-900">{{ $t('about.points.experience.title') }}</h4>
                <p class="mt-1 text-sm text-gray-600">{{ $t('about.points.experience.text') }}</p>
              </div>
            </li>
            <li v-reveal="2" class="flex items-start">
              <span class="font-serif text-2xl text-gold-600 w-12 shrink-0" aria-hidden="true">02</span>
              <div>
                <h4 class="font-semibold text-gray-900">{{ $t('about.points.service.title') }}</h4>
                <p class="mt-1 text-sm text-gray-600">{{ $t('about.points.service.text') }}</p>
              </div>
            </li>
            <li v-reveal="3" class="flex items-start">
              <span class="font-serif text-2xl text-gold-600 w-12 shrink-0" aria-hidden="true">03</span>
              <div>
                <h4 class="font-semibold text-gray-900">{{ $t('about.points.fleet.title') }}</h4>
                <p class="mt-1 text-sm text-gray-600">{{ $t('about.points.fleet.text') }}</p>
              </div>
            </li>
          </ol>

          <NuxtLink
            :to="localePath('/about')"
            class="mt-10 inline-flex items-center gap-2 bg-surface-950 text-white text-sm font-semibold tracking-[0.12em] uppercase px-8 py-4 rounded-lg hover:bg-surface-800 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          >
            {{ $t('about.learnMore') }}
            <i class="bx bx-right-arrow-alt text-xl" aria-hidden="true"></i>
          </NuxtLink>
        </div>

        <!-- Right: image cluster breaking the container -->
        <div v-reveal="2" class="relative lg:-mr-12">
          <!-- Offset gold frame device -->
          <div
            class="absolute -inset-2 translate-x-6 translate-y-6 border border-gold/40 rounded-2xl -z-10"
            aria-hidden="true"
          ></div>

          <div class="grid grid-cols-2 gap-4">
            <div class="row-span-2 rounded-2xl overflow-hidden">
              <NuxtImg
                src="/images/covers/about-us.webp"
                alt="Silk Ride chauffeur with a Mercedes-Benz in London"
                class="w-full h-full object-cover rounded-2xl"
                loading="lazy"
                width="640"
                height="800"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div class="rounded-2xl overflow-hidden">
              <NuxtImg
                src="/images/covers/wedding.webp"
                alt="Wedding chauffeur service"
                class="about-drift w-full h-full object-cover rounded-2xl"
                loading="lazy"
                width="600"
                height="380"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div class="rounded-2xl overflow-hidden">
              <NuxtImg
                src="/images/covers/business-trip.webp"
                alt="Business travel chauffeur service"
                class="about-drift w-full h-full object-cover rounded-2xl"
                loading="lazy"
                width="600"
                height="380"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>

          <!-- Floating stat card -->
          <div class="absolute -bottom-8 left-6 bg-surface-950 text-white rounded-xl px-7 py-5 shadow-2xl flex items-center gap-4">
            <span class="font-serif text-3xl text-gold">10+</span>
            <span class="text-xs uppercase tracking-[0.15em] text-white/70 max-w-[8rem]">
              {{ $t('about.points.experience.title') }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocalePath } from '#imports'

const localePath = useLocalePath()
</script>

<style scoped>
/* Micro-parallax drift on the two small images — no-op where unsupported */
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .about-drift {
      animation: about-drift linear both;
      animation-timeline: view();
    }

    @keyframes about-drift {
      from {
        transform: translateY(16px);
      }
      to {
        transform: translateY(-16px);
      }
    }
  }
}
</style>
