<template>
  <div class="w-full max-w-xl mx-auto p-6 text-center mb-6">
    <!-- Testimonial Text -->
    <div class="relative">
        <h4 class="text-2xl text-black mb-6"> What Our Clients Say</h4>
      <p class="text-lg italic text-gray-700 transition-opacity duration-300">
        "{{ testimonials[currentIndex].text }}"
      </p>
      <h3 class="mt-4 text-md font-semibold text-black">
        - {{ testimonials[currentIndex].author }}
      </h3>
    </div>

    <!-- Navigation Lines -->
    <div class="flex justify-center mt-6 space-x-2">
      <span
        v-for="(testimonial, index) in testimonials"
        :key="index"
        @click="navigateTo(index)"
        :class="[
          'h-1 w-8 rounded cursor-pointer transition-colors duration-300',
          currentIndex === index ? 'bg-black' : 'bg-gray-300',
        ]"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Testimonials data
const testimonials = ref([
  {
    text: "This service was absolutely amazing! Highly recommended.",
    author: "John Doe",
  },
  {
    text: "I had an excellent experience. The staff were professional and courteous.",
    author: "Jane Smith",
  },
  {
    text: "Top-notch service and a great attention to detail. Will use again.",
    author: "Michael Brown",
  },
]);


const currentIndex = ref(0);

const navigateTo = (index) => {
  currentIndex.value = index;
};
</script>

<style></style>
