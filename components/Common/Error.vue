<template>
    <div v-if="message" class="flex items-center p-4 mb-4 text-red-700 bg-red-100 border border-red-300 rounded" role="alert">
      <i class="bx bx-error text-2xl mr-2"></i>
      <span class="font-medium">{{ message }}</span>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    message: {
      type: String,
      default: '',
    },
  });
  </script>