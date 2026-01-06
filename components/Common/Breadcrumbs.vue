<template>
  <nav v-if="items.length > 1" aria-label="Breadcrumb" class="py-4">
    <ol class="flex flex-wrap items-center gap-2 text-sm text-gray-600">
      <li v-for="(item, index) in items" :key="index" class="flex items-center">
        <template v-if="index < items.length - 1">
          <NuxtLink
            :to="localePath(item.path)"
            class="hover:text-gold transition-colors"
          >
            {{ item.name }}
          </NuxtLink>
          <i class="bx bx-chevron-right text-gray-400 mx-2"></i>
        </template>
        <template v-else>
          <span class="text-gray-900 font-medium">{{ item.name }}</span>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { useHead, useLocalePath } from '#imports'

interface BreadcrumbItem {
  name: string
  path: string
}

const props = defineProps<{
  items: BreadcrumbItem[]
}>()

const localePath = useLocalePath()

// Generate JSON-LD structured data for breadcrumbs
const breadcrumbSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: props.items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://silkride.co.uk${item.path}`
  }))
}))

// Inject JSON-LD into head
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(breadcrumbSchema.value)
    }
  ]
})
</script>
