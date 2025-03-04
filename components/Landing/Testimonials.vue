<template>
  <div class="w-full max-w-screen-lg mx-auto p-6 text-center mb-6 py-12">
    <!-- Testimonial Text -->
    <div class="relative">
        <h4 class="text-4xl text-black mb-10"> What Our Clients Say</h4>
      <p class="text-xl italic text-gray-700 transition-opacity duration-300">
        "{{ testimonials[currentIndex].text }}"
      </p>
      <h3 class="mt-4 text-md font-semibold text-black">
        - {{ testimonials[currentIndex].author }}, {{ testimonials[currentIndex].location }}
      </h3>
       <div class="mt-4 text-md font-semibold text-black">
        <i class='bx bxs-star' v-for="star in testimonials[currentIndex].rating"></i>
      </div>
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
    location:"New York",
    rating: 5,
  },
  {
    text: "I had an excellent experience. The staff were professional and courteous.",
    author: "Jane Smith",
    location:"London",
    rating: 4,
  },
  {
    text: "Top-notch service and a great attention to detail. Will use again.",
    author: "Michael Brown",
    location:"Dubai",
    rating: 5,
  },
]);


const currentIndex = ref(0);

const navigateTo = (index) => {
  currentIndex.value = index;
};
</script>

<style></style>
