<template>
    <div class="w-full  text-white mt-6">
      <h2 class="text-sm text-gray-100">Price Guide</h2>
      <!-- Hourly Rate -->
      <div class=" border-b border-t border-gray-300 p-4 rounded flex items-center justify-between">
        <div class="text-left">
          <h3 class="text-md font-semibold">Hourly Rate</h3>
          <p class="text-sm text-gray-300">(minimum 4 hours)</p>
        </div>
        <span class="text-md font-bold text-white">{{ hourlyRate }} £</span>
      </div>
  
      <!-- Day Rate -->
      <div class=" border-b border-gray-300 p-4 rounded flex items-center justify-between">
        <div class="text-left">
          <h3 class="text-md font-semibold">Day Rate</h3>
          <p class="text-sm text-gray-300">(8 hours)</p>
        </div>
        <span class="text-md font-bold text-white">{{ dayRate }} £</span>
      </div>
  
      <!-- Heathrow to Central London -->
      <div class="p-4 rounded flex items-center justify-between">
        <div class="text-left">
          <h3 class="text-md font-semibold">Heathrow to Central London</h3>
        </div>
        <span class="text-md font-bold text-white">{{ heathrowToCenteral }} £</span>
      </div>
    </div>
  </template>

<script>
export default {
  props: {
    
    hourlyRate: {
      type: String,
      required: true,
    },
    dayRate: {
      type: String,
      required: true,
    },
    heathrowToCenteral: {
      type: String,
      required: true,
    },
  },
};
</script>
