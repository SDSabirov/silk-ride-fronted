<template>
  <div class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
    <button
      class="shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
      :class="!selected ? 'bg-gold text-black' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
      @click="$emit('select', null)"
    >
      {{ $t('blog.allCategories') }}
    </button>
    <button
      v-for="category in categories"
      :key="category._id"
      class="shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
      :class="selected === category.slug.current ? 'bg-gold text-black' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
      @click="$emit('select', category.slug.current)"
    >
      {{ category.title }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  categories: Array<{
    _id: string
    title: string
    slug: { current: string }
  }>
  selected: string | null
}>()

defineEmits<{
  select: [value: string | null]
}>()
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
