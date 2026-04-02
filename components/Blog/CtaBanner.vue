<template>
  <div class="my-12 p-8 bg-gray-50 rounded-2xl text-center">
    <NuxtLink
      :to="isExternal ? undefined : localePath(cta.url)"
      :href="isExternal ? cta.url : undefined"
      :target="isExternal ? '_blank' : undefined"
      :rel="isExternal ? 'noopener noreferrer' : undefined"
      class="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
      :class="cta.style === 'secondary'
        ? 'border-2 border-gold text-gold hover:bg-gold hover:text-black'
        : 'bg-gold text-black hover:bg-yellow-500'"
    >
      {{ cta.label }}
      <i class="bx bx-right-arrow-alt text-xl"></i>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLocalePath } from '#imports'

const localePath = useLocalePath()

const props = defineProps<{
  cta: {
    label: string
    url: string
    style?: string
  }
}>()

const isExternal = computed(() => props.cta.url?.startsWith('http'))
</script>
