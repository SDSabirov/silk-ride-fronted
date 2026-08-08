<template>
  <section id="services" class="bg-ivory border-y border-gold/15 py-24 md:py-32">
    <div class="max-w-screen-2xl mx-auto px-6">
      <!-- Editorial split header -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        <div v-reveal class="lg:col-span-7">
          <p class="text-xs font-semibold tracking-[0.25em] uppercase text-gold">
            {{ $t('landing.services.tagline') }}
          </p>
          <h2 class="mt-5 font-serif font-medium tracking-tight text-4xl md:text-5xl text-gray-900 [text-wrap:balance]">
            {{ $t('landing.services.title') }}
          </h2>
        </div>
        <div v-reveal="1" class="lg:col-span-4 lg:col-start-9 self-end">
          <p class="text-gray-600 text-base leading-relaxed">
            {{ $t('landing.services.subtitle') }}
          </p>
        </div>
      </div>

      <!-- One card anatomy, whole card is the link -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mt-14">
        <NuxtLink
          v-for="(service, i) in services"
          :key="service.key"
          v-reveal="i"
          :to="localePath(service.route)"
          :aria-label="$t(`landing.services.${service.key}.learnMore`)"
          class="group bg-white rounded-2xl border border-gray-900/5 overflow-hidden lift-card cursor-pointer flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
        >
          <div class="aspect-[16/10] overflow-hidden">
            <NuxtImg
              :src="service.img"
              :alt="$t(`landing.services.${service.key}.title`)"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              loading="lazy"
              width="800"
              height="500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 440px"
            />
          </div>
          <div class="flex-1 flex flex-col p-6 md:p-7">
            <span class="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-gold-700">
              {{ $t(`landing.services.${service.key}.badge`) }}
            </span>
            <h3 class="mt-3 font-serif font-medium text-2xl text-gray-900">
              {{ $t(`landing.services.${service.key}.title`) }}
            </h3>
            <p class="mt-2 text-sm text-gray-600 leading-relaxed">
              {{ $t(`landing.services.${service.key}.description`) }}
            </p>
            <div class="mt-auto pt-6 flex items-end justify-between gap-4">
              <p class="flex items-baseline gap-2">
                <span class="font-serif text-xl text-gray-900">
                  {{ $t(`landing.services.${service.key}.${service.priceKey}`) }}
                </span>
                <span v-if="service.noteKey" class="text-xs text-gray-500">
                  {{ $t(`landing.services.${service.key}.${service.noteKey}`) }}
                </span>
              </p>
              <span
                class="w-10 h-10 shrink-0 rounded-full border border-gold/30 text-gold-600 grid place-items-center transition-colors group-hover:bg-gold group-hover:border-gold group-hover:text-black"
                aria-hidden="true"
              >
                <i class="bx bx-right-arrow-alt text-xl"></i>
              </span>
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

const services = [
  {
    key: 'airport',
    route: '/services/airport-transfers',
    img: '/images/vclassjett.webp',
    priceKey: 'price',
    noteKey: 'route'
  },
  {
    key: 'corporate',
    route: '/services/corporate-travel',
    img: '/images/covers/business-trip.webp',
    priceKey: 'price',
    noteKey: 'minimum'
  },
  {
    key: 'wedding',
    route: '/services/wedding-chauffeur',
    img: '/images/covers/wedding.webp',
    priceKey: 'customQuote',
    noteKey: null
  }
]
</script>
