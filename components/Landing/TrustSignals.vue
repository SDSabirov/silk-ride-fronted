<template>
  <section class="py-8 bg-gray-900 text-white">
    <div class="max-w-screen-xl mx-auto px-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div class="flex flex-col items-center">
          <div class="text-2xl md:text-3xl font-bold text-gold mb-1">50K+</div>
          <div class="text-sm md:text-base opacity-80">{{ $t('landing.trustSignals.customers') }}</div>
        </div>
        <div class="flex flex-col items-center">
          <div class="text-2xl md:text-3xl font-bold text-gold mb-1">10+</div>
          <div class="text-sm md:text-base opacity-80">{{ $t('landing.trustSignals.experience') }}</div>
        </div>
        <div class="flex flex-col items-center">
          <div class="text-2xl md:text-3xl font-bold text-gold mb-1">20+</div>
          <div class="text-sm md:text-base opacity-80">{{ $t('landing.trustSignals.vehicles') }}</div>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex items-center text-2xl md:text-3xl font-bold text-gold mb-1">
            <i class="bx bx-shield-check mr-1"></i>
            <span>5★</span>
          </div>
          <div class="text-sm md:text-base opacity-80">{{ $t('landing.trustSignals.rating') }}</div>
        </div>
      </div>
      
      <!-- Additional trust indicators -->
      <div class="mt-8 pt-8 border-t border-gray-700">
        <div class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-center">
          <div class="flex items-center space-x-2">
            <img src="/assets/icons/certificate.svg" alt="Licensed Operator" class="w-6 h-6">
            <span class="text-sm">{{ $t('landing.trustSignals.licensed') }}</span>
          </div>
          <div class="flex items-center space-x-2">
            <i class="bx bx-star text-gold"></i>
            <span class="text-sm">{{ $t('landing.trustSignals.fiveStars') }}</span>
          </div>
          <div class="flex items-center space-x-2">
            <i class="bx bx-check-shield text-gold"></i>
            <span class="text-sm">{{ $t('landing.trustSignals.backgroundCheck') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional script required for static content
</script>

<style scoped>
/* Additional animations for trust signals */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.trust-signal {
  animation: fadeInUp 0.6s ease-out forwards;
}
</style>