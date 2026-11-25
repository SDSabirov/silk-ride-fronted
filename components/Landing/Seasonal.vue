<template>
  <!-- Seasonal promotion band. Controlled by config/seasonal.ts. -->
  <section v-if="SEASONAL.christmas" class="bg-[#121110] border-y border-gold/25" aria-labelledby="seasonal-heading">
    <NuxtLink
      :to="localePath('/christmas')"
      class="group mx-auto flex max-w-screen-2xl flex-col items-start gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8 md:py-10"
    >
      <div class="flex items-start gap-4">
        <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-black">
          <i class="bx bx-gift text-2xl" aria-hidden="true"></i>
        </span>
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{{ $t('christmasPage.banner.kicker') }}</p>
          <h2 id="seasonal-heading" class="mt-1 font-heading text-xl font-medium text-white sm:text-2xl">
            {{ $t('christmasPage.banner.title') }}
          </h2>
          <p class="mt-1 max-w-2xl text-sm leading-relaxed text-white/70">{{ $t('christmasPage.banner.text') }}</p>
        </div>
      </div>
      <span class="inline-flex shrink-0 items-center gap-2 rounded-lg border border-gold px-5 py-3 text-sm font-semibold text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-black">
        {{ $t('christmasPage.banner.cta') }}
        <i class="bx bx-right-arrow-alt text-lg" aria-hidden="true"></i>
      </span>
    </NuxtLink>
  </section>
</template>

<script setup>
import { useLocalePath } from '#imports'
import { SEASONAL } from '~/config/seasonal'

const localePath = useLocalePath()
</script>
