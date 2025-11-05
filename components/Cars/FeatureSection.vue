<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-8 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
    <div :class="{ 'md:order-2': reverseLayout }" class="flex flex-col space-y-4">
      <h3 class="text-black text-2xl font-semibold leading-loose">
        {{ title }}
      </h3>
      <p class="text-lg text-gray-700 leading-relaxed">
        {{ description }}
      </p>
      <div v-if="features && features.length > 0">
        <h4 class="text-gray-800 text-xl font-medium leading-loose mt-4 mb-3">
          {{ featuresTitle || 'Key Features' }}
        </h4>
        <ul class="text-lg leading-loose space-y-2">
          <li v-for="(feature, index) in features" :key="index" class="flex items-start space-x-3">
            <div class="h-3 w-3 bg-gold rotate-45 mt-2 flex-shrink-0"></div>
            <span class="text-gray-700">{{ feature }}</span>
          </li>
        </ul>
      </div>
      <p v-if="closingNote" class="text-lg italic text-gray-600 leading-relaxed mt-4">
        {{ closingNote }}
      </p>
    </div>
    <div :class="{ 'md:order-1': reverseLayout }" class="overflow-hidden rounded-lg">
      <NuxtImg
        :src="image"
        :alt="imageAlt"
        loading="lazy"
        width="800"
        height="600"
        class="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div v-if="showBookingButton" class="md:col-span-2 flex items-center justify-center mt-6">
      <NuxtLink
        to="/booking"
        class="flex px-8 py-4 items-center justify-center border-2 border-black text-black text-xl font-medium hover:bg-gold hover:border-gold hover:text-black transform hover:scale-105 transition-all duration-300 rounded-md shadow-sm"
      >
        {{ $t('pages.common.bookNow') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    default: () => []
  },
  featuresTitle: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  },
  reverseLayout: {
    type: Boolean,
    default: false
  },
  showBookingButton: {
    type: Boolean,
    default: true
  },
  closingNote: {
    type: String,
    default: ''
  }
})
</script>