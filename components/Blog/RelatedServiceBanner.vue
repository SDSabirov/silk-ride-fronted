<template>
  <div v-if="service" class="my-12 bg-gray-900 rounded-2xl overflow-hidden">
    <div class="p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
      <div class="shrink-0 w-16 h-16 bg-gold rounded-full flex items-center justify-center">
        <i :class="service.icon" class="text-black text-2xl"></i>
      </div>
      <div class="flex-1 text-center md:text-left">
        <p class="text-gold text-sm font-semibold uppercase tracking-wider mb-1">Related Service</p>
        <h3 class="font-serif text-2xl font-bold text-white mb-2">{{ service.title }}</h3>
        <p class="text-gray-400 text-sm">{{ service.description }}</p>
      </div>
      <NuxtLink
        :to="localePath(service.route)"
        class="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gold text-black rounded-full font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
      >
        {{ $t('common.learnMore') }}
        <i class="bx bx-right-arrow-alt"></i>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLocalePath } from '#imports'

const localePath = useLocalePath()

const props = defineProps<{
  serviceSlug: string
}>()

const serviceMap: Record<string, { title: string; description: string; icon: string; route: string }> = {
  'airport-transfers': {
    title: 'Airport Transfers',
    description: 'Premium meet & greet service at Heathrow, Gatwick, Stansted & Luton. Flight tracking included.',
    icon: 'bx bxs-plane-alt',
    route: '/services/airport-transfers',
  },
  'corporate-travel': {
    title: 'Corporate Travel',
    description: 'Executive chauffeur service for meetings, roadshows, and business events across London.',
    icon: 'bx bxs-briefcase',
    route: '/services/corporate-travel',
  },
  'wedding-chauffeur': {
    title: 'Wedding Chauffeur',
    description: 'Make your special day unforgettable with our luxury Mercedes wedding cars and ribbon service.',
    icon: 'bx bxs-heart',
    route: '/services/wedding-chauffeur',
  },
  'hourly-chauffeur': {
    title: 'Hourly Chauffeur',
    description: 'Flexible as-directed service for shopping, tours, and multiple stops across London.',
    icon: 'bx bxs-time',
    route: '/services/hourly-chauffeur',
  },
  'uk-europe-travel': {
    title: 'UK & Europe Travel',
    description: 'Long-distance luxury chauffeur service for comfortable journeys across the UK and Europe.',
    icon: 'bx bxs-map',
    route: '/services/uk-europe-travel',
  },
  'event-chauffeur': {
    title: 'Event Transport',
    description: 'VIP arrivals for concerts, galas, sporting events, and corporate functions in London.',
    icon: 'bx bxs-star',
    route: '/services/event-chauffeur',
  },
}

const service = computed(() => serviceMap[props.serviceSlug] || null)
</script>
