<template>
  <section class="dark-luxe relative overflow-hidden pt-44 md:pt-48 pb-24 md:pb-28" data-section="fleet">
    <div class="grain" aria-hidden="true"></div>

    <!-- Destinations marquee (decorative breather strip) -->
    <div class="marquee mb-16 md:mb-20" aria-hidden="true">
      <div class="marquee-track">
        <div class="flex items-center whitespace-nowrap">
          <template v-for="(place, i) in places" :key="`a-${i}`">
            <span class="font-serif italic text-2xl md:text-4xl text-white/25 whitespace-nowrap">{{ place }}</span>
            <i class="bx bxs-circle text-gold/50 text-[0.4rem] mx-6 self-center"></i>
          </template>
        </div>
        <div class="flex items-center whitespace-nowrap" aria-hidden="true">
          <template v-for="(place, i) in places" :key="`b-${i}`">
            <span class="font-serif italic text-2xl md:text-4xl text-white/25 whitespace-nowrap">{{ place }}</span>
            <i class="bx bxs-circle text-gold/50 text-[0.4rem] mx-6 self-center"></i>
          </template>
        </div>
      </div>
    </div>

    <!-- Editorial header -->
    <div v-reveal class="max-w-screen-2xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div class="lg:col-span-7">
          <p class="text-xs font-semibold tracking-[0.25em] uppercase text-gold">
            {{ $t('landing.fleet.fleetTagline') }}
          </p>
          <h2 class="mt-4 font-serif font-medium tracking-tight text-4xl md:text-5xl text-white [text-wrap:balance]">
            {{ $t('landing.fleet.fleetTitle') }}
          </h2>
          <p class="text-gray-400 mt-4 max-w-xl">
            {{ $t('landing.fleet.fleetSubtitle') }}
          </p>
        </div>
        <div class="hidden lg:block lg:col-span-3 lg:col-start-10 self-end text-right">
          <span class="font-serif text-gold/60 text-lg tracking-[0.3em]">
            {{ $t('landing.fleet.fleetCount') }}
          </span>
        </div>
      </div>
    </div>

    <!-- Horizontal snap rail -->
    <div class="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pl-6 pr-6 xl:pl-[max(1.5rem,calc((100vw-1536px)/2+1.5rem))]">
      <NuxtLink
        v-for="(car, i) in cars"
        :key="car.key"
        v-reveal="i"
        :to="localePath(car.route)"
        class="snap-start shrink-0 w-[min(85vw,580px)] group relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 lift-card cursor-pointer focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
      >
        <NuxtImg
          :src="car.img"
          :alt="$t(`${car.prefix}.title`)"
          class="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
          :style="`view-transition-name: ${car.viewTransitionName}`"
          loading="lazy"
          width="580"
          height="363"
          sizes="(max-width: 768px) 85vw, 580px"
        />

        <!-- Overlays -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" aria-hidden="true"></div>
        <div class="absolute bottom-0 inset-x-0 h-24 bg-[radial-gradient(60%_100%_at_50%_100%,rgba(212,175,55,0.16),transparent_70%)]" aria-hidden="true"></div>

        <!-- Index -->
        <span class="absolute top-5 right-6 font-serif text-gold/50 text-lg tracking-[0.2em]" aria-hidden="true">
          {{ car.index }}
        </span>

        <!-- Content -->
        <div class="absolute bottom-0 inset-x-0 p-7">
          <div class="flex items-end justify-between gap-4">
            <div>
              <h3 class="font-serif font-medium text-2xl md:text-3xl text-white">
                {{ $t(`${car.prefix}.title`) }}
              </h3>
              <p class="text-white/60 text-sm mt-1">
                {{ $t(`${car.prefix}.description`) }}
              </p>
              <div class="flex flex-wrap gap-2 mt-4">
                <span class="border border-white/15 text-white/70 text-xs rounded-full px-3 py-1.5">
                  {{ $t(`${car.prefix}.capacity`) }}
                </span>
                <span class="border border-white/15 text-white/70 text-xs rounded-full px-3 py-1.5">
                  {{ $t(`${car.prefix}.${car.tagKey}`) }}
                </span>
              </div>
            </div>
            <i
              class="bx bx-right-arrow-alt text-2xl text-gold shrink-0 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLocalePath, useI18n } from '#imports'

const localePath = useLocalePath()
const { tm, rt } = useI18n()

const places = computed(() => {
  const raw = tm('landing.marquee')
  return Array.isArray(raw) ? raw.map((i) => rt(i)) : []
})

const cars = [
  {
    key: 'eclass',
    route: '/fleet/mercedes-e-class',
    img: '/images/eclass.webp',
    prefix: 'landing.fleet.eclass',
    viewTransitionName: 'fleet-eclass',
    index: '01',
    tagKey: 'comfort'
  },
  {
    key: 'sclass',
    route: '/fleet/mercedes-s-class',
    img: '/images/sclassBackground.webp',
    prefix: 'landing.fleet.sclass',
    viewTransitionName: 'fleet-sclass',
    index: '02',
    tagKey: 'luxury'
  },
  {
    key: 'vclass',
    route: '/fleet/mercedes-v-class',
    img: '/images/vclassjett.webp',
    prefix: 'landing.fleet.vclass',
    viewTransitionName: 'fleet-vclass',
    index: '03',
    tagKey: 'luggage'
  }
]
</script>
