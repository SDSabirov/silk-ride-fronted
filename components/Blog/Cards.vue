<template>
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="post in posts"
        :key="post.id"
        class="bg-white rounded-md shadow hover:shadow-lg transition overflow-hidden flex flex-col"
      >
        <NuxtLink :to="`/`">
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full h-48 object-cover"
          />
        </NuxtLink>
  
        <div class="p-6 flex-1 flex flex-col">
          <p class="text-sm text-gray-500 mb-1">{{ post.date }}</p>
          <h3 class="text-lg font-semibold mb-2">
            <NuxtLink :to="`/`" class="hover:underline">
              {{ post.title }}
            </NuxtLink>
          </h3>
          <p class="text-gray-600 text-sm mb-4 flex-1">
            {{ post.description }}
          </p>
          <NuxtLink
            :to="`/`"
            class="text-black hover:bg-gold hover:border-gold font-medium text-lg mt-auto border border-black text-center py-2"
          >
            Read more →
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    posts: {
      type: Array,
      required: true
    }
  })
  </script>