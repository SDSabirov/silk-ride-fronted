<template>
  <div class="py-20 bg-gradient-to-br from-gray-50 to-white">
    <div class="max-w-screen-xl mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          {{ title }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ description }}
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mt-6"></div>
      </div>

      <!-- Occasions Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div 
          v-for="(occasion, index) in occasions" 
          :key="index"
          class="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
        >
          <!-- Background Image -->
          <div class="aspect-[3/4] sm:aspect-[4/3] lg:aspect-[4/3] relative">
            <img 
              :src="occasion.image" 
              :alt="occasion.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <!-- Enhanced Overlay for better readability -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
          </div>

          <!-- Content -->
          <div class="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-8">
            <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div class="flex items-center mb-3 sm:mb-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold/90 rounded-full flex items-center justify-center mr-3 sm:mr-4 backdrop-blur-sm border border-gold/30">
                  <i :class="occasion.icon" class="text-white text-lg sm:text-xl"></i>
                </div>
                <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-white drop-shadow-lg">{{ occasion.title }}</h3>
              </div>
              
              <p class="text-gray-100 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base drop-shadow-md">
                {{ occasion.description }}
              </p>

              <!-- Key Points -->
              <div class="space-y-1 sm:space-y-2 mb-4 sm:mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                <div 
                  v-for="(point, pointIndex) in occasion.keyPoints" 
                  :key="pointIndex"
                  class="flex items-start text-white/95"
                >
                  <i class="bx bx-check-circle text-gold mr-2 mt-0.5 flex-shrink-0 drop-shadow-sm"></i>
                  <span class="text-xs sm:text-sm drop-shadow-sm">{{ point }}</span>
                </div>
              </div>

              <!-- Price Badge -->
              <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div class="bg-gold/30 backdrop-blur-md rounded-full px-3 sm:px-4 py-2 border border-gold/50 shadow-lg">
                  <span class="text-gold font-semibold text-sm sm:text-base drop-shadow-sm">{{ $t('common.fromPrice', { price: basePrice }) }}</span>
                </div>
                <NuxtLink 
                  to="/booking"
                  class="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-4 sm:px-6 py-2 rounded-full border border-white/40 hover:border-white/60 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base font-medium shadow-lg"
                >
                  {{ $t('pages.common.bookNow') }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA Section -->
      <div class="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full transform translate-x-48 -translate-y-48"></div>
          <div class="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full transform -translate-x-32 translate-y-32"></div>
        </div>

        <div class="relative">
          <h3 class="text-3xl font-bold mb-4">{{ $t('occasions.cta.title') }}</h3>
          <p class="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            {{ $t('occasions.cta.description', { carModel }) }}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/booking"
              class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold to-yellow-400 text-black text-lg font-semibold rounded-xl hover:from-yellow-400 hover:to-gold transition-all duration-300 transform hover:scale-105"
            >
              <i class="bx bx-calendar-check mr-2"></i>
              {{ $t('occasions.cta.bookStandard') }}
            </NuxtLink>
            <NuxtLink
              to="/contact-us"
              class="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              <i class="bx bx-phone mr-2"></i>
              {{ $t('occasions.cta.customRequest') }}
            </NuxtLink>
          </div>
        </div>
      </div>
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
  carModel: {
    type: String,
    required: true
  },
  basePrice: {
    type: Number,
    required: true
  },
  occasions: {
    type: Array,
    required: true
  }
})
</script>