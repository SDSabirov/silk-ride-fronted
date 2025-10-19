<template>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
      <img
        :src="image"
        :alt="t(`pages.services.cards.${card}.title`)"
        class="w-full h-48 object-cover"
      />
  
      <div class="p-6 flex flex-col flex-grow">
        <h2 class="text-xl font-semibold mb-4">
          {{ t(`pages.services.cards.${card}.title`) }}
        </h2>
  
        <p>
          {{ t(`pages.services.cards.${card}.description`) }}
        </p>
  
        <ul class="mt-4 space-y-4">
          <li
            v-for="(item, index) in bullets"
            :key="index"
            class="flex items-center space-x-2"
          >
            <div class="h-3 w-3 bg-gold rotate-45"></div>
            <span>{{ item }}</span>
          </li>
        </ul>
  
        <p v-if="note" class="mt-4 mb-4">{{ note }}</p>
  
        <div class="mt-auto space-y-3">
          <NuxtLink
            :to="localePath(serviceDetailPath)"
            class="py-2 px-4 text-gold text-md border border-gold hover:bg-gold hover:text-black transition flex justify-center"
          >
            Learn More<span class="sr-only"> about {{ t(`pages.services.cards.${card}.title`) }}</span>
          </NuxtLink>
          <NuxtLink
            :to="localePath('/booking')"
            class="py-2 px-4 bg-gold text-black text-md hover:bg-yellow-500 transition flex justify-center"
          >
            {{ t('pages.common.bookNow') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useI18n, useLocalePath } from '#imports'
  import { computed } from 'vue'
  
  const props = defineProps({
    card: String,
    image: String
  })
  
  const { t, te } = useI18n()
  const localePath = useLocalePath()
  
  // Fallback-safe way to loop i18n array bullets
  const bullets = computed(() => {
    const output = []
    for (let i = 0; i < 10; i++) {
      const key = `pages.services.cards.${props.card}.bullets[${i}]`
      const value = t(key)
      if (value === key) break
      output.push(value)
    }
    return output
  })
  
  const note = computed(() => {
    const key = `pages.services.cards.${props.card}.note`
    return te(key) ? t(key) : ''
  })

  const serviceDetailPath = computed(() => {
    const pathMap = {
      'airport': '/services/airport-transfers',
      'corporate': '/services/corporate-travel',
      'hourly': '/services/hourly-chauffeur',
      'longDistance': '/services/uk-europe-travel',
      'wedding': '/services/wedding-chauffeur',
      'event': '/services/event-chauffeur'
    }
    return pathMap[props.card] || '/services'
  })

  const learnMoreLabel = computed(() => {
    const labelMap = {
      'airport': 'Learn More About Airport Transfers',
      'corporate': 'Learn More About Corporate Travel',
      'hourly': 'Learn More About Hourly Chauffeur Service',
      'longDistance': 'Learn More About UK & Europe Travel',
      'wedding': 'Learn More About Wedding Chauffeur Service',
      'event': 'Learn More About Event Chauffeur Service'
    }
    return labelMap[props.card] || 'Learn More About Our Services'
  })
  </script>
  