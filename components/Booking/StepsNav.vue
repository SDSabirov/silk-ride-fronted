<template>
  <div class="flex items-center w-full justify-center transition-all  duration-300 ease-in">
    <!-- Step 1 -->
    <div class="flex flex-col items-center">
      <div
        :class="[
          'h-8 w-8 flex items-center justify-center rotate-45 text-white',
          currentStep >= 1 ? 'bg-gold' : 'bg-gray-400',
        ]"
        aria-label="Step 1"
      >
        <span class="transform -rotate-45"></span>
      </div>
    </div>
    <!-- Line to Step 2 -->
    <div
      :class="[
        'h-1 flex-1',
        currentStep >= 2 ? 'bg-gold animate-fadeLeft' : 'bg-gray-400',
      ]"
    ></div>
    <!-- Step 2 -->
    <div class="flex flex-col items-center">
      <div
        :class="[
          'h-8 w-8 flex items-center justify-center rotate-45 text-white',
          currentStep >= 2 ? 'bg-gold' : 'bg-gray-400',
        ]"
        aria-label="Step 2"
      >
        <span class="transform -rotate-45"></span>
      </div>
    </div>
    <!-- Line to Step 3 -->
    <div
      :class="[
        'h-1 flex-1 ',
        currentStep >= 3 ? 'bg-gold animate-fadeLeft' : 'bg-gray-400',
      ]"
    ></div>
    <!-- Step 3 -->
    <div class="flex flex-col items-center">
      <div
        :class="[
          'h-8 w-8 flex items-center justify-center rotate-45 text-white',
          currentStep >= 3 ? 'bg-gold' : 'bg-gray-400',
        ]"
        aria-label="Step 3"
      >
        <span class="transform -rotate-45"></span>
      </div>
    </div>
    <!-- Line to Step 4 -->
    <div
      :class="[
        'h-1 flex-1 ',
        currentStep > 3 ? 'bg-gold animate-fadeLeft' : 'bg-gray-400',
      ]"
    ></div>
    <!-- Step 3 -->
    <div class="flex flex-col items-center">
      <div
        :class="[
          'h-8 w-8 flex items-center justify-center rotate-45 text-white',
          currentStep > 3 ? 'bg-gold' : 'bg-gray-400',
        ]"
        aria-label="Step 4"
      >
        <span class="transform -rotate-45"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      required: true,
      default: 1,
    },
  },
};
</script>
