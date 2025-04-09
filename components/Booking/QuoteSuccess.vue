<template>
    <div v-if="message" class="flex items-center p-4 mb-4 text-green-700 bg-green-100 border border-green-300 rounded" role="alert">
      <i class="bx bx-check-circle text-2xl mr-2"></i>
      <span class="font-medium">{{ message }}</span>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    message: {
      type: String,
      default: 'Your request has been submitted successfully!',
    },
  });
  </script>