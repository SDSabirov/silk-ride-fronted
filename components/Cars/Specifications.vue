<template>
  <div class="max-w-screen-2xl mx-auto px-4 py-16 bg-gradient-to-br from-gray-50 to-white">
    <div class="text-center mb-12">
      <h2 class="text-black text-4xl font-bold mb-4">
        {{ $t('specifications.title') }}
      </h2>
      <p class="text-gray-600 text-lg max-w-2xl mx-auto">
        {{ $t('specifications.description') }}
      </p>
      <div class="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mt-6"></div>
    </div>
    
    <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <!-- Tab Navigation -->
      <div class="flex flex-wrap bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = index"
          :class="[
            'flex-1 min-w-0 px-6 py-5 text-center font-semibold transition-all duration-300 relative',
            activeTab === index 
              ? 'bg-white text-gold shadow-lg transform -translate-y-1 border-t-4 border-gold' 
              : 'text-gray-600 hover:text-gold hover:bg-white/50'
          ]"
        >
          <i :class="tab.icon" class="text-xl mb-1 mr-2"></i>
          <span class="block text-sm">{{ tab.title }}</span>
        </button>
      </div>

      <!-- Tab Content -->
      <div class="p-8">
        <div v-if="activeTab === 0" class="space-y-8">
          <!-- Capacity & Comfort -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <div class="flex items-center mb-4">
                <i class="bx bxs-group text-2xl text-blue-600 mr-3"></i>
                <h3 class="text-xl font-bold text-gray-800">{{ $t('specifications.capacity.title') }}</h3>
              </div>
              <div class="space-y-4">
                <div class="flex justify-between items-center py-3 border-b border-blue-200/50">
                  <span class="text-gray-700 font-medium flex items-center">
                    <i class="bx bxs-user mr-2 text-blue-600"></i>{{ $t('specifications.capacity.passengers') }}
                  </span>
                  <span class="font-bold text-lg text-blue-700">{{ car.passengers }}</span>
                </div>
                <div class="flex justify-between items-center py-3 border-b border-blue-200/50">
                  <span class="text-gray-700 font-medium flex items-center">
                    <i class="bx bxs-briefcase mr-2 text-blue-600"></i>{{ $t('specifications.capacity.cabinLuggage') }}
                  </span>
                  <span class="font-bold text-lg text-blue-700">{{ car.cabinLuggage }}</span>
                </div>
                <div class="flex justify-between items-center py-3">
                  <span class="text-gray-700 font-medium flex items-center">
                    <i class="bx bxs-backpack mr-2 text-blue-600"></i>{{ $t('specifications.capacity.largeLuggage') }}
                  </span>
                  <span class="font-bold text-lg text-blue-700">{{ car.mediumLuggage }}</span>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
              <div class="flex items-center mb-4">
                <i class="bx bxs-wallet text-2xl text-green-600 mr-3"></i>
                <h3 class="text-xl font-bold text-gray-800">{{ $t('specifications.pricing.title') }}</h3>
              </div>
              <div class="space-y-4">
                <div class="flex justify-between items-center py-3 border-b border-green-200/50">
                  <span class="text-gray-700 font-medium">{{ $t('specifications.pricing.hourlyRate') }}</span>
                  <span class="font-bold text-2xl text-gold">£{{ car.hourlyRate }}</span>
                </div>
                <div class="flex justify-between items-center py-3">
                  <span class="text-gray-700 font-medium">{{ $t('specifications.pricing.minimumBooking') }}</span>
                  <span class="font-bold text-lg text-green-700">{{ car.minHours }} hours</span>
                </div>
                <div class="bg-green-100 rounded-lg p-3 mt-4">
                  <p class="text-sm text-green-800 font-medium">
                    <i class="bx bx-info-circle mr-1"></i>
                    {{ $t('specifications.pricing.includesService') }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Vehicle Dimensions -->
          <div v-if="car.dimensions" class="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100">
            <div class="flex items-center mb-6">
              <i class="bx bx-ruler text-2xl text-purple-600 mr-3"></i>
              <h3 class="text-xl font-bold text-gray-800">{{ $t('specifications.dimensions.title') }}</h3>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div v-for="(value, key) in car.dimensions" :key="key" class="text-center bg-white rounded-lg p-4 border border-purple-200">
                <div class="text-2xl font-bold text-purple-700 mb-1">{{ value }}</div>
                <div class="text-sm text-gray-600 capitalize font-medium">{{ key }}</div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="activeTab === 1" class="space-y-8">
          <!-- Luxury Features -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(feature, index) in car.features" :key="index" 
                 class="group bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 hover:border-gold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold to-yellow-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i :class="feature.icon" class="text-white text-xl"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800 group-hover:text-gold transition-colors duration-300">{{ feature.name }}</h4>
                  <p v-if="feature.description" class="text-sm text-gray-600 mt-1">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Feature Categories -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div class="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
              <h4 class="font-bold text-indigo-800 mb-4 flex items-center">
                <i class="bx bxs-car text-xl mr-2"></i>
                {{ $t('specifications.categories.comfort') }}
              </h4>
              <ul class="space-y-2 text-sm text-indigo-700">
                <li class="flex items-center"><i class="bx bx-check mr-2"></i>{{ $t('specifications.features.leather') }}</li>
                <li class="flex items-center"><i class="bx bx-check mr-2"></i>{{ $t('specifications.features.climate') }}</li>
                <li class="flex items-center"><i class="bx bx-check mr-2"></i>{{ $t('specifications.features.lighting') }}</li>
                <li class="flex items-center"><i class="bx bx-check mr-2"></i>{{ $t('specifications.features.privacy') }}</li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
              <h4 class="font-bold text-green-800 mb-4 flex items-center">
                <i class="bx bxs-devices text-xl mr-2"></i>
                {{ $t('specifications.categories.technology') }}
              </h4>
              <ul class="space-y-2 text-sm text-green-700">
                <li class="flex items-center"><i class="bx bx-check mr-2"></i>{{ $t('specifications.features.entertainment') }}</li>
                <li class="flex items-center"><i class="bx bx-check mr-2"></i>{{ $t('specifications.features.charging') }}</li>
                <li class="flex items-center"><i class="bx bx-check mr-2"></i>{{ $t('specifications.features.wifi') }}</li>
                <li class="flex items-center"><i class="bx bx-check mr-2"></i>{{ $t('specifications.features.navigation') }}</li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100">
              <h4 class="font-bold text-purple-800 mb-4 flex items-center">
                <i class="bx bxs-user-check text-xl mr-2"></i>
                {{ $t('specifications.categories.service') }}
              </h4>
              <ul class="space-y-2 text-sm text-purple-700">
                <li class="flex items-center"><i class="bx bx-check mr-2"></i>{{ $t('specifications.features.chauffeur') }}</li>
                <li class="flex items-center"><i class="bx bx-check mr-2"></i>{{ $t('specifications.features.doorToDoor') }}</li>
                <li class="flex items-center"><i class="bx bx-check mr-2"></i>{{ $t('specifications.features.refreshments') }}</li>
                <li class="flex items-center"><i class="bx bx-check mr-2"></i>{{ $t('specifications.features.flightMonitoring') }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div v-if="activeTab === 2" class="space-y-8">
          <!-- Performance & Safety -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Engine & Performance -->
            <div v-if="car.performance" class="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
              <div class="flex items-center mb-6">
                <i class="bx bx-tachometer text-2xl text-red-600 mr-3"></i>
                <h3 class="text-xl font-bold text-gray-800">{{ $t('specifications.performance.title') }}</h3>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div v-for="(value, key) in car.performance" :key="key" class="bg-white rounded-lg p-4 border border-red-200">
                  <div class="text-center">
                    <div class="text-2xl font-bold text-red-700 mb-1">{{ value }}</div>
                    <div class="text-sm text-gray-600 capitalize font-medium">{{ key.replace(/([A-Z])/g, ' $1').trim() }}</div>
                  </div>
                </div>
              </div>
              <div class="mt-6 bg-red-100 rounded-lg p-4">
                <p class="text-sm text-red-800 font-medium">
                  <i class="bx bx-info-circle mr-2"></i>
                  {{ $t('specifications.performance.description') }}
                </p>
              </div>
            </div>
            
            <!-- Safety Systems -->
            <div v-if="car.safety" class="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
              <div class="flex items-center mb-6">
                <i class="bx bxs-shield-check text-2xl text-green-600 mr-3"></i>
                <h3 class="text-xl font-bold text-gray-800">{{ $t('specifications.safety.title') }}</h3>
              </div>
              <div class="space-y-3">
                <div v-for="(feature, index) in car.safety" :key="index" 
                     class="flex items-center space-x-3 p-3 bg-white rounded-lg border border-green-200 hover:bg-green-50 transition-colors duration-200">
                  <div class="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <i class="bx bx-check text-green-600 font-bold"></i>
                  </div>
                  <span class="text-gray-700 font-medium">{{ feature }}</span>
                </div>
              </div>
              <div class="mt-6 bg-green-100 rounded-lg p-4">
                <p class="text-sm text-green-800 font-medium">
                  <i class="bx bx-award mr-2"></i>
                  {{ $t('specifications.safety.description') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Additional Technical Information -->
          <div class="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200">
            <div class="flex items-center mb-6">
              <i class="bx bx-cog text-2xl text-gray-600 mr-3"></i>
              <h3 class="text-xl font-bold text-gray-800">{{ $t('specifications.technical.title') }}</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i class="bx bx-wrench text-2xl text-blue-600"></i>
                </div>
                <h4 class="font-semibold text-gray-800 mb-2">{{ $t('specifications.technical.maintenance.title') }}</h4>
                <p class="text-sm text-gray-600">{{ $t('specifications.technical.maintenance.description') }}</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i class="bx bx-leaf text-2xl text-green-600"></i>
                </div>
                <h4 class="font-semibold text-gray-800 mb-2">{{ $t('specifications.technical.eco.title') }}</h4>
                <p class="text-sm text-gray-600">{{ $t('specifications.technical.eco.description') }}</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i class="bx bx-certificate text-2xl text-purple-600"></i>
                </div>
                <h4 class="font-semibold text-gray-800 mb-2">{{ $t('specifications.technical.certified.title') }}</h4>
                <p class="text-sm text-gray-600">{{ $t('specifications.technical.certified.description') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from '#imports'

const props = defineProps({
  car: {
    type: Object,
    required: true
  }
})

const activeTab = ref(0)

const { t } = useI18n()

const tabs = [
  {
    title: t('specifications.tabs.overview'),
    icon: 'bx bx-info-circle'
  },
  {
    title: t('specifications.tabs.features'),
    icon: 'bx bx-star'
  },
  {
    title: t('specifications.tabs.performance'),
    icon: 'bx bx-shield-check'
  }
]
</script>