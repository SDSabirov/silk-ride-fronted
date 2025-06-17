<template>
  <div
    v-if="showBanner"
    class="booking-hero relative bg-gradient-to-r from-gold to-white p-4 rounded-md mb-6 flex flex-col md:flex-row items-center justify-between shadow-md"
  >
    <!-- Close button -->
    <button
      @click="showBanner = false"
      class="close-btn absolute top-2 right-2 p-1 focus:outline-none"
      aria-label="Close banner"
    >
      &times;
    </button>

    <!-- Banner content -->
    <div class="max-w-screen-xl w-full mx-auto flex flex-col md:flex-row items-center justify-between">
      <div class="text-center md:text-left mb-4 md:mb-0">
        <h3 class="text-2xl font-bold text-gray-900">Sign Up & Save!</h3>
        <p class="mt-1 text-gray-800">
          Create an account today and unlock
          <span class="font-semibold">up to 20% off</span> your first ride.
        </p>
      </div>
      <a
        href="/signup"
        class="inline-block bg-black text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-900 transition"
      >
        Sign Up Now
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const showBanner = ref(true);
</script>

<style scoped>
.close-btn {
  font-size: 1.5rem;
  color: #374151; /* gray-700 */
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
