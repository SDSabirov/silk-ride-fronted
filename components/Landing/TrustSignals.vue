<template>
  <section class="py-24 bg-gray-900 text-white overflow-hidden" id="why-choose-us">
    <div class="max-w-screen-2xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <p class="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          {{ $t('why.tagline') }}
        </p>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {{ $t('why.title') }}
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          {{ $t('why.subtitle') }}
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <!-- Feature 1: Professional Chauffeurs -->
        <div class="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold/30 transition-all duration-300">
          <div class="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
            <i class="bx bx-user-check text-gold text-2xl"></i>
          </div>
          <h3 class="text-lg font-bold mb-3">{{ $t('why.features.chauffeurs.title') }}</h3>
          <p class="text-gray-400 text-sm leading-relaxed">{{ $t('why.features.chauffeurs.text') }}</p>
        </div>

        <!-- Feature 2: Premium Fleet -->
        <div class="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold/30 transition-all duration-300">
          <div class="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
            <i class="bx bx-car text-gold text-2xl"></i>
          </div>
          <h3 class="text-lg font-bold mb-3">{{ $t('why.features.fleet.title') }}</h3>
          <p class="text-gray-400 text-sm leading-relaxed">{{ $t('why.features.fleet.text') }}</p>
        </div>

        <!-- Feature 3: Flight Tracking -->
        <div class="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold/30 transition-all duration-300">
          <div class="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
            <i class="bx bx-radar text-gold text-2xl"></i>
          </div>
          <h3 class="text-lg font-bold mb-3">{{ $t('why.features.flightTracking.title') }}</h3>
          <p class="text-gray-400 text-sm leading-relaxed">{{ $t('why.features.flightTracking.text') }}</p>
        </div>

        <!-- Feature 4: Fixed Pricing -->
        <div class="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold/30 transition-all duration-300">
          <div class="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
            <i class="bx bx-pound text-gold text-2xl"></i>
          </div>
          <h3 class="text-lg font-bold mb-3">{{ $t('why.features.pricing.title') }}</h3>
          <p class="text-gray-400 text-sm leading-relaxed">{{ $t('why.features.pricing.text') }}</p>
        </div>

        <!-- Feature 5: 24/7 Availability -->
        <div class="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold/30 transition-all duration-300">
          <div class="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
            <i class="bx bx-time-five text-gold text-2xl"></i>
          </div>
          <h3 class="text-lg font-bold mb-3">{{ $t('why.features.availability.title') }}</h3>
          <p class="text-gray-400 text-sm leading-relaxed">{{ $t('why.features.availability.text') }}</p>
        </div>

        <!-- Feature 6: UK & Europe Coverage -->
        <div class="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold/30 transition-all duration-300">
          <div class="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
            <i class="bx bx-globe text-gold text-2xl"></i>
          </div>
          <h3 class="text-lg font-bold mb-3">{{ $t('why.features.coverage.title') }}</h3>
          <p class="text-gray-400 text-sm leading-relaxed">{{ $t('why.features.coverage.text') }}</p>
        </div>
      </div>

      <!-- Stats Bar -->
      <div class="relative mb-12">
        <div class="absolute inset-0 bg-gradient-to-r from-gold/20 via-gold/5 to-gold/20 rounded-2xl blur-xl"></div>
        <div class="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-gold mb-2">5,000+</div>
              <div class="text-sm text-gray-400">{{ $t('why.stats.journeys') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-gold mb-2">5.0<span class="text-xl">★</span></div>
              <div class="text-sm text-gray-400">{{ $t('why.stats.rating') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-gold mb-2">24/7</div>
              <div class="text-sm text-gray-400">{{ $t('why.stats.support') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-gold mb-2">60<span class="text-xl">min</span></div>
              <div class="text-sm text-gray-400">{{ $t('why.stats.freeWait') }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust Badges -->
      <div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-gray-500">
        <div class="flex items-center gap-2">
          <i class="bx bx-check-circle text-gold"></i>
          <span>{{ $t('why.badges.pco') }}</span>
        </div>
        <div class="flex items-center gap-2">
          <i class="bx bx-check-circle text-gold"></i>
          <span>{{ $t('why.badges.insured') }}</span>
        </div>
        <div class="flex items-center gap-2">
          <i class="bx bx-check-circle text-gold"></i>
          <span>{{ $t('why.badges.dbs') }}</span>
        </div>
        <div class="flex items-center gap-2">
          <i class="bx bx-check-circle text-gold"></i>
          <span>{{ $t('why.badges.vehicles') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Merged TrustSignals + KeyFeatures component
</script>
