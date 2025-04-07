<template>
  <div
    class="w-full flex flex-col max-w-screen-xl mx-auto items-center justify-center h-screen space-y-6"
  >
    <h1 class="text-2xl font-semibold text-center">Checkout Cancelled</h1>
    <p class="text-lg text-center">
      Your checkout session was cancelled. Please try again if you wish to
      complete your purchase.
    </p>
    <div class="w-full flex items-center justify-center">
      <NuxtLink
        class="py-3 px-10 bg-black text-white font-medium text-lg rounded-sm hover:bg-gold hover:text-black transition-color duration-500 whitespace-nowrap"
        to="/"
        >Return to Home Page</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
// No special script is needed unless you wish to add additional logic.
</script>
