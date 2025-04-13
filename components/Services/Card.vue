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
  
        <NuxtLink
          :to="localePath('/booking')"
          class="py-2 px-4 text-black text-md border border-gold hover:bg-gold mt-auto flex justify-center"
        >
          {{ t('pages.common.bookNow') }}
        </NuxtLink>
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
  </script>
  