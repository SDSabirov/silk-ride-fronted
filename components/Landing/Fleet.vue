<template>
  <section class="dark-luxe relative overflow-hidden py-24 md:py-32" data-section="fleet">
    <div class="max-w-screen-2xl mx-auto px-6">
      <!-- Editorial header -->
      <div v-reveal class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        <div class="lg:col-span-7">
          <p class="text-xs font-semibold tracking-[0.25em] uppercase text-gold">
            {{ $t('landing.fleet.fleetTagline') }}
          </p>
          <h2 class="mt-5 font-serif font-medium tracking-tight text-4xl md:text-5xl text-white [text-wrap:balance]">
            {{ $t('landing.fleet.fleetTitle') }}
          </h2>
        </div>
        <div class="lg:col-span-4 lg:col-start-9 self-end">
          <p class="text-gray-400 text-base leading-relaxed">
            {{ $t('landing.fleet.fleetSubtitle') }}
          </p>
        </div>
      </div>

      <!-- Fleet grid — all three cars visible at once -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mt-14">
        <NuxtLink
          v-for="(car, i) in cars"
          :key="car.key"
          v-reveal="i"
          :to="localePath(car.route)"
          class="group relative aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 lift-card cursor-pointer focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
        >
          <NuxtImg
            :src="car.img"
            :alt="$t(`${car.prefix}.title`)"
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
            :style="`view-transition-name: ${car.viewTransitionName}`"
            loading="lazy"
            width="640"
            height="800"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" aria-hidden="true"></div>

          <!-- Index -->
          <span class="absolute top-5 right-6 font-serif text-gold/50 text-lg tracking-[0.2em]" aria-hidden="true">
            {{ car.index }}
          </span>

          <!-- Content -->
          <div class="absolute bottom-0 inset-x-0 p-6 lg:p-7">
            <div class="flex items-end justify-between gap-4">
              <div>
                <h3 class="font-serif font-medium text-2xl text-white">
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
    </div>
  </section>
</template>

<script setup>
import { useLocalePath } from '#imports'

const localePath = useLocalePath()

const cars = [
  {
    key: 'eclass',
    route: '/fleet/mercedes-e-class',
    img: '/images/eclass1.webp',
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
    img: '/images/v-classshero.webp',
    prefix: 'landing.fleet.vclass',
    viewTransitionName: 'fleet-vclass',
    index: '03',
    tagKey: 'luggage'
  }
]
</script>
