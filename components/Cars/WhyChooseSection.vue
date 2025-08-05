<template>
  <div class="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50">
    <div class="max-w-screen-xl mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold text-gray-900 mb-6">
          {{ title }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {{ description }}
        </p>
        <div class="w-32 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mt-8"></div>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
        >
          <!-- Icon Background -->
          <div class="absolute -top-6 left-8">
            <div class="w-12 h-12 bg-gradient-to-br from-gold to-yellow-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <i :class="feature.icon" class="text-white text-xl"></i>
            </div>
          </div>

          <!-- Content -->
          <div class="pt-8">
            <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-gold transition-colors duration-300">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>

          <!-- Hover Accent -->
          <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full transform translate-x-48 -translate-y-48"></div>
          <div class="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full transform -translate-x-32 translate-y-32"></div>
        </div>

        <div class="relative">
          <div class="text-center mb-12">
            <h3 class="text-3xl font-bold mb-4">{{ $t('whyChoose.statsTitle', { carModel }) }}</h3>
            <p class="text-gray-300 text-lg">{{ $t('whyChoose.statsDescription') }}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div class="group">
              <i class="bx bxs-star text-4xl text-gold mb-3 group-hover:scale-110 transition-transform duration-300"></i>
              <div class="text-3xl font-bold text-white mb-2">5★</div>
              <div class="text-gray-300">{{ $t('whyChoose.stats.safety') }}</div>
            </div>
            <div class="group">
              <i class="bx bxs-medal text-4xl text-gold mb-3 group-hover:scale-110 transition-transform duration-300"></i>
              <div class="text-3xl font-bold text-white mb-2">10+</div>
              <div class="text-gray-300">{{ $t('whyChoose.stats.experience') }}</div>
            </div>
            <div class="group">
              <i class="bx bxs-user-check text-4xl text-gold mb-3 group-hover:scale-110 transition-transform duration-300"></i>
              <div class="text-3xl font-bold text-white mb-2">10k+</div>
              <div class="text-gray-300">{{ $t('whyChoose.stats.clients') }}</div>
            </div>
            <div class="group">
              <i class="bx bx-time text-4xl text-gold mb-3 group-hover:scale-110 transition-transform duration-300"></i>
              <div class="text-3xl font-bold text-white mb-2">24/7</div>
              <div class="text-gray-300">{{ $t('whyChoose.stats.availability') }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ $t('whyChoose.cta.title') }}</h3>
          <p class="text-gray-600 mb-6">{{ $t('whyChoose.cta.description', { carModel }) }}</p>
          <NuxtLink
            to="/booking"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold to-yellow-400 text-black text-lg font-semibold rounded-xl hover:from-yellow-400 hover:to-gold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <i class="bx bx-calendar-check mr-2 text-xl"></i>
            {{ $t('whyChoose.cta.button', { carModel }) }}
          </NuxtLink>
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
  features: {
    type: Array,
    required: true
  }
})
</script>