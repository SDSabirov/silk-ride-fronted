<template>
  <section class="relative py-20 bg-white overflow-hidden">
    <div class="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl"></div>

    <div class="relative max-w-screen-2xl mx-auto px-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div class="text-center">
          <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold/10 mb-4">
            <i class="bx bxl-sketch text-gold text-xl"></i>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">{{ $t('pages.services.mainPoints.vehicles.title') }}</h3>
          <p class="text-sm text-gray-600">{{ $t('pages.services.mainPoints.vehicles.text') }}</p>
        </div>

        <div class="text-center">
          <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold/10 mb-4">
            <i class="bx bxs-trophy text-gold text-xl"></i>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">{{ $t('pages.services.mainPoints.chauffeurs.title') }}</h3>
          <p class="text-sm text-gray-600">{{ $t('pages.services.mainPoints.chauffeurs.text') }}</p>
        </div>

        <div class="text-center">
          <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold/10 mb-4">
            <i class="bx bxs-smile text-gold text-xl"></i>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">{{ $t('pages.services.mainPoints.experience.title') }}</h3>
          <p class="text-sm text-gray-600">{{ $t('pages.services.mainPoints.experience.text') }}</p>
        </div>

        <div class="text-center">
          <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold/10 mb-4">
            <i class="bx bxs-calendar-edit text-gold text-xl"></i>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">{{ $t('pages.services.mainPoints.availability.title') }}</h3>
          <p class="text-sm text-gray-600">{{ $t('pages.services.mainPoints.availability.text') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>