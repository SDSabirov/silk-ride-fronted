<template>
  <div class="relative w-full max-w-screen-xl mx-auto overflow-hidden rounded-lg shadow-lg">
    
    <div
      class="flex transition-transform duration-500"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="w-full flex-shrink-0 flex items-center justify-center"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-3/4 h-auto object-cover transition-transform duration-300 transform"
          :class="{
            'scale-100': currentSlide === index,
            'scale-75 opacity-50': currentSlide !== index,
          }"
        />
      </div>
    </div>

  
    <button
      @click="prevSlide"
      class="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
    >
      &larr;
    </button>
    <button
      @click="nextSlide"
      class="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
    >
      &rarr;
    </button>

    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <span
        v-for="(image, index) in images"
        :key="index"
        @click="goToSlide(index)"
        :class="{
          'bg-white': currentSlide === index,
          'bg-gray-400': currentSlide !== index,
        }"
        class="w-3 h-3 rounded-full cursor-pointer hover:bg-gray-300 transition-colors"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import hero from "~/assets/images/v-classshero.webp";


const images = [
  { src: hero, alt: "Mercedes-Benz V-Class Front View" },
  { src: hero, alt: "Mercedes-Benz V-Class Interior" },
  { src: hero, alt: "Mercedes-Benz V-Class Rear View" },
];


const currentSlide = ref(0);
let autoplayInterval;


const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.length;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + images.length) % images.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};


onMounted(() => {
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, 3000); 
});

onUnmounted(() => {
  clearInterval(autoplayInterval);
});
</script>
