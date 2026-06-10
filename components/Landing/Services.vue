<template>
  <section id="services" class="bg-ivory border-y border-gold/15 pt-24 md:pt-32 relative">
    <div class="max-w-screen-2xl mx-auto px-6">
      <!-- Editorial split header -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        <div v-reveal class="lg:col-span-7">
          <p class="text-xs font-semibold tracking-[0.25em] uppercase text-gold">
            {{ $t('landing.fleet.tagline') }}
          </p>
          <h2 class="mt-5 font-serif font-medium tracking-tight text-4xl md:text-5xl text-gray-900 [text-wrap:balance]">
            {{ $t('landing.fleet.title') }}
          </h2>
        </div>
        <div v-reveal="1" class="lg:col-span-4 lg:col-start-9 self-end">
          <p class="text-gray-600 text-base leading-relaxed">
            {{ $t('landing.fleet.subtitle') }}
          </p>
        </div>
      </div>

      <!-- Bento grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:auto-rows-[150px] mt-14">
        <!-- Airport — flagship -->
        <article
          v-reveal="0"
          class="relative rounded-2xl overflow-hidden group lift-card aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto lg:col-span-7 lg:row-span-3"
        >
          <NuxtImg
            src="/images/covers/services-cover.webp"
            :alt="$t('landing.fleet.airport.title')"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            loading="lazy"
            width="1200"
            height="800"
            sizes="xs:100vw sm:100vw lg:780px"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5" aria-hidden="true"></div>

          <!-- Stretched link covers the card -->
          <NuxtLink
            :to="localePath('/services/airport-transfers')"
            :aria-label="$t('pages.services.cards.airport.learnMoreLabel')"
            class="absolute inset-0 z-[1] rounded-2xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          >
            <span class="sr-only">{{ $t('pages.services.cards.airport.learnMoreLabel') }}</span>
          </NuxtLink>

          <div class="absolute inset-x-0 bottom-0 p-7 md:p-9 pointer-events-none">
            <span class="inline-block bg-gold text-black text-xs font-semibold rounded-full px-3 py-1">
              {{ $t('landing.fleet.airport.badge') }}
            </span>
            <h3 class="mt-4 font-serif font-medium text-3xl text-white [text-wrap:balance]">
              {{ $t('landing.fleet.airport.title') }}
            </h3>
            <p class="mt-2 text-white/70 text-sm leading-relaxed max-w-md">
              {{ $t('landing.fleet.airport.description') }}
            </p>
            <div class="mt-6 flex flex-wrap items-end justify-between gap-4">
              <p class="flex items-baseline gap-2">
                <span class="font-serif text-2xl text-gold-400">{{ $t('landing.fleet.airport.price') }}</span>
                <span class="text-white/50 text-sm">{{ $t('landing.fleet.airport.route') }}</span>
              </p>
              <NuxtLink
                :to="localePath('/booking')"
                class="relative z-10 pointer-events-auto inline-flex items-center gap-2 bg-gold text-black rounded-lg px-6 py-3 text-sm font-semibold tracking-wide cursor-pointer hover:bg-gold-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
              >
                {{ $t('common.bookNow') }}
                <i class="bx bx-right-arrow-alt text-lg" aria-hidden="true"></i>
              </NuxtLink>
            </div>
          </div>
        </article>

        <!-- Corporate — horizontal split -->
        <article
          v-reveal="1"
          class="relative group bg-white rounded-2xl border border-gray-900/5 lift-card overflow-hidden flex flex-col sm:flex-row lg:col-span-5 lg:row-span-2"
        >
          <div class="sm:w-[42%] shrink-0 h-44 sm:h-auto overflow-hidden">
            <NuxtImg
              src="/images/covers/business-trip.webp"
              :alt="$t('landing.fleet.corporate.title')"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              loading="lazy"
              width="480"
              height="640"
              sizes="xs:100vw sm:280px"
            />
          </div>
          <div class="flex-1 flex flex-col p-6">
            <span class="self-start inline-block bg-surface-950 text-white text-xs font-semibold rounded-full px-3 py-1">
              {{ $t('landing.fleet.corporate.badge') }}
            </span>
            <h3 class="mt-3 font-serif font-medium text-xl text-gray-900">
              {{ $t('landing.fleet.corporate.title') }}
            </h3>
            <p class="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">
              {{ $t('landing.fleet.corporate.description') }}
            </p>
            <div class="mt-auto pt-5 flex items-end justify-between gap-4">
              <p class="flex items-baseline gap-2">
                <span class="font-serif text-lg text-gray-900">{{ $t('landing.fleet.corporate.price') }}</span>
                <span class="text-xs text-gray-500">{{ $t('landing.fleet.corporate.minimum') }}</span>
              </p>
              <NuxtLink
                :to="localePath('/services/corporate-travel')"
                :aria-label="$t('pages.services.cards.corporate.learnMoreLabel')"
                class="relative z-10 inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold/30 text-gold-600 cursor-pointer transition-colors hover:bg-gold hover:text-black hover:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              >
                <i class="bx bx-right-arrow-alt text-xl transition-transform group-hover:translate-x-0.5" aria-hidden="true"></i>
              </NuxtLink>
            </div>
          </div>
          <!-- Stretched click area for the whole card -->
          <NuxtLink
            :to="localePath('/services/corporate-travel')"
            class="absolute inset-0 rounded-2xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
            aria-hidden="true"
            tabindex="-1"
          />
        </article>

        <!-- Wedding — compact row -->
        <NuxtLink
          v-reveal="2"
          :to="localePath('/services/wedding-chauffeur')"
          :aria-label="$t('pages.services.cards.wedding.learnMoreLabel')"
          class="group bg-white rounded-2xl border border-gray-900/5 lift-card flex items-center gap-5 p-5 cursor-pointer lg:col-span-5 lg:row-span-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
        >
          <NuxtImg
            src="/images/covers/wedding.webp"
            :alt="$t('landing.fleet.wedding.title')"
            class="w-20 h-20 lg:w-24 lg:h-24 rounded-xl object-cover shrink-0"
            loading="lazy"
            width="96"
            height="96"
            sizes="96px"
          />
          <div class="min-w-0 flex-1">
            <h3 class="font-serif font-medium text-lg text-gray-900">
              {{ $t('landing.fleet.wedding.title') }}
            </h3>
            <p class="mt-1 text-sm text-gray-500 truncate">
              {{ $t('landing.fleet.wedding.customQuote') }}
            </p>
          </div>
          <i
            class="bx bx-right-arrow-alt text-2xl text-gold-600 shrink-0 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          ></i>
        </NuxtLink>
      </div>

      <!-- Straddle CTA — bridges into the dark fleet band below -->
      <div class="max-w-screen-xl mx-auto mt-20 relative z-10 -mb-24">
        <div v-reveal class="dark-luxe relative overflow-hidden rounded-2xl p-10 md:p-14">
          <div class="grain" aria-hidden="true"></div>
          <div class="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <h3 class="font-serif font-medium text-2xl md:text-3xl text-white [text-wrap:balance]">
                {{ $t('servicesSection.customRequest.title') }}
              </h3>
              <p class="mt-3 text-gray-400 leading-relaxed max-w-xl">
                {{ $t('servicesSection.customRequest.description') }}
              </p>
            </div>
            <div class="shrink-0 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+442034882324"
                class="inline-flex items-center justify-center gap-2 bg-gold text-black rounded-lg px-7 py-3.5 font-semibold text-sm tracking-wide cursor-pointer hover:bg-gold-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950"
              >
                <i class="bx bx-phone text-lg" aria-hidden="true"></i>
                +44 203 488 2324
              </a>
              <NuxtLink
                :to="localePath('/contact-us')"
                class="inline-flex items-center justify-center gap-2 border border-white/25 text-white rounded-lg px-7 py-3.5 font-semibold text-sm tracking-wide cursor-pointer hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950"
              >
                {{ $t('common.getCustomQuote') }}
              </NuxtLink>
            </div>
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
