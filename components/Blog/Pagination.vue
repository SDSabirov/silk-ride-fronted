<template>
  <nav v-if="totalPages > 1" class="flex items-center justify-center gap-2 mt-12" aria-label="Blog pagination">
    <!-- Previous -->
    <NuxtLink
      v-if="currentPage > 1"
      :to="pageLink(currentPage - 1)"
      class="px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors duration-200 flex items-center gap-1"
    >
      <i class="bx bx-chevron-left"></i>
      {{ $t('blog.previousPage') }}
    </NuxtLink>

    <!-- Page Numbers -->
    <template v-for="page in visiblePages" :key="page">
      <span v-if="page === '...'" class="px-2 text-gray-400">...</span>
      <NuxtLink
        v-else
        :to="pageLink(page as number)"
        class="w-10 h-10 rounded-lg text-sm font-semibold flex items-center justify-center transition-colors duration-200"
        :class="page === currentPage ? 'bg-gold text-black' : 'text-gray-600 hover:bg-gray-100'"
      >
        {{ page }}
      </NuxtLink>
    </template>

    <!-- Next -->
    <NuxtLink
      v-if="currentPage < totalPages"
      :to="pageLink(currentPage + 1)"
      class="px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors duration-200 flex items-center gap-1"
    >
      {{ $t('blog.nextPage') }}
      <i class="bx bx-chevron-right"></i>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from '#imports'

const props = defineProps<{
  currentPage: number
  totalPages: number
}>()

const route = useRoute()

function pageLink(page: number) {
  const query = { ...route.query }
  if (page <= 1) {
    delete query.page
  } else {
    query.page = String(page)
  }
  return { path: route.path, query }
}

const visiblePages = computed(() => {
  const pages: (number | string)[] = []
  const total = props.totalPages
  const current = props.currentPage

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i)
    return pages
  }

  pages.push(1)
  if (current > 3) pages.push('...')

  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)
  for (let i = start; i <= end; i++) pages.push(i)

  if (current < total - 2) pages.push('...')
  pages.push(total)

  return pages
})
</script>
