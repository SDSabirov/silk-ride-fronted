<template>
  <section class="py-16 bg-white border-y border-gray-100">
    <div class="max-w-screen-xl mx-auto px-6">
      <!-- Stats Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-gray-900 mb-2">50K+</div>
          <div class="text-sm md:text-base text-gray-600">{{ $t('landing.trustSignals.customers') }}</div>
        </div>
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-gray-900 mb-2">10+</div>
          <div class="text-sm md:text-base text-gray-600">{{ $t('landing.trustSignals.experience') }}</div>
        </div>
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-gray-900 mb-2">20+</div>
          <div class="text-sm md:text-base text-gray-600">{{ $t('landing.trustSignals.vehicles') }}</div>
        </div>
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-gray-900 mb-2">5.0★</div>
          <div class="text-sm md:text-base text-gray-600">{{ $t('landing.trustSignals.rating') }}</div>
        </div>
      </div>

      <!-- Trust Badges -->
      <div class="mt-12 pt-12 border-t border-gray-100">
        <div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center">
          <span class="text-sm text-gray-600">{{ $t('landing.trustSignals.licensed') }}</span>
          <span class="hidden md:block text-gray-300">•</span>
          <span class="text-sm text-gray-600">{{ $t('landing.trustSignals.fiveStars') }}</span>
          <span class="hidden md:block text-gray-300">•</span>
          <span class="text-sm text-gray-600">{{ $t('landing.trustSignals.backgroundCheck') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional script required for static content
</script>