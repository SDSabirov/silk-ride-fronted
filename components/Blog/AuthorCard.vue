<template>
  <div class="flex items-center gap-5 p-6 bg-gray-50 rounded-2xl">
    <div class="shrink-0">
      <img
        v-if="author.image"
        :src="urlFor(author.image).width(80).height(80).format('webp').url()"
        :alt="author.name"
        class="w-16 h-16 rounded-full object-cover"
      />
      <div
        v-else
        class="w-16 h-16 bg-gold rounded-full flex items-center justify-center"
      >
        <span class="text-black text-xl font-bold">{{ author.name?.charAt(0) }}</span>
      </div>
    </div>
    <div>
      <p class="text-sm text-gray-500 mb-1">{{ $t('blog.writtenBy') }}</p>
      <h4 class="font-serif text-lg font-bold text-gray-900">{{ author.name }}</h4>
      <p v-if="author.bio" class="text-sm text-gray-600 mt-1 line-clamp-2">{{ author.bio }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { urlFor } from '~/utils/sanityImage'

defineProps<{
  author: {
    name: string
    image?: any
    bio?: string
  }
}>()
</script>
