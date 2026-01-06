<template>
  <div class="max-w-screen-2xl mx-auto px-4 py-8">
    <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <!-- Quick Overview Header -->
      <div class="bg-gradient-to-r from-gold/10 to-yellow-50 px-8 py-6 border-b border-gray-200">
        <h3 class="text-2xl font-bold text-gray-800 text-center">{{ $t('overview.title') }}</h3>
        <p class="text-gray-600 text-center mt-2">{{ $t('overview.subtitle') }}</p>
      </div>

      <!-- Overview Content -->
      <div class="p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Capacity & Comfort -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <div class="flex items-center mb-4">
              <i class="bx bxs-group text-2xl text-blue-600 mr-3"></i>
              <h4 class="text-xl font-bold text-gray-800">{{ $t('overview.capacity.title') }}</h4>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between items-center py-3 border-b border-blue-200/50">
                <span class="text-gray-700 font-medium flex items-center">
                  <i class="bx bxs-user mr-2 text-blue-600"></i>{{ $t('overview.capacity.passengers') }}
                </span>
                <span class="font-bold text-lg text-blue-700">{{ car.passengers }}</span>
              </div>
              <div class="flex justify-between items-center py-3 border-b border-blue-200/50">
                <span class="text-gray-700 font-medium flex items-center">
                  <i class="bx bxs-briefcase mr-2 text-blue-600"></i>{{ $t('overview.capacity.cabinLuggage') }}
                </span>
                <span class="font-bold text-lg text-blue-700">{{ car.cabinLuggage }}</span>
              </div>
              <div class="flex justify-between items-center py-3">
                <span class="text-gray-700 font-medium flex items-center">
                  <i class="bx bxs-backpack mr-2 text-blue-600"></i>{{ $t('overview.capacity.largeLuggage') }}
                </span>
                <span class="font-bold text-lg text-blue-700">{{ car.mediumLuggage }}</span>
              </div>
            </div>
          </div>

          <!-- Pricing Information -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
            <div class="flex items-center mb-4">
              <i class="bx bxs-wallet text-2xl text-green-600 mr-3"></i>
              <h4 class="text-xl font-bold text-gray-800">{{ $t('overview.pricing.title') }}</h4>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between items-center py-3 border-b border-green-200/50">
                <span class="text-gray-700 font-medium">{{ $t('overview.pricing.hourlyRate') }}</span>
                <span class="font-bold text-2xl text-gold">£{{ car.hourlyRate }}</span>
              </div>
              <div class="flex justify-between items-center py-3">
                <span class="text-gray-700 font-medium">{{ $t('overview.pricing.minimumBooking') }}</span>
                <span class="font-bold text-lg text-green-700">{{ car.minHours }} hours</span>
              </div>
              <div class="bg-green-100 rounded-lg p-3 mt-4">
                <p class="text-sm text-green-800 font-medium">
                  <i class="bx bx-info-circle mr-1"></i>
                  {{ $t('overview.pricing.includesService') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Features -->
        <div class="mt-8 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200">
          <h4 class="text-lg font-bold text-gray-800 mb-4 text-center">{{ $t('overview.features.title') }}</h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="text-center">
              <i class="bx bx-wifi text-2xl text-gold mb-2"></i>
              <p class="text-sm text-gray-700 font-medium">{{ $t('overview.features.wifi') }}</p>
            </div>
            <div class="text-center">
              <i class="bx bx-wind text-2xl text-gold mb-2"></i>
              <p class="text-sm text-gray-700 font-medium">{{ $t('overview.features.climate') }}</p>
            </div>
            <div class="text-center">
              <i class="bx bx-volume-full text-2xl text-gold mb-2"></i>
              <p class="text-sm text-gray-700 font-medium">{{ $t('overview.features.audio') }}</p>
            </div>
            <div class="text-center">
              <i class="bx bx-user-check text-2xl text-gold mb-2"></i>
              <p class="text-sm text-gray-700 font-medium">{{ $t('overview.features.driver') }}</p>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="mt-8 text-center">
          <NuxtLink
            to="/booking"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold to-yellow-400 text-black text-lg font-semibold rounded-xl hover:from-yellow-400 hover:to-gold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <i class="bx bx-calendar-check mr-2 text-xl"></i>
            {{ $t('overview.cta.button') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  car: {
    type: Object,
    required: true
  }
})
</script>