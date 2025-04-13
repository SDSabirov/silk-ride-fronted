<template>
  <section class="services-grid w-full max-w-screen-xl mx-auto mb-16">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="flex flex-col justify-between space-y-2 items-center text-xl">
        <i class="bx bxl-sketch bx-md text-gold"></i>
        <h3 class="text-xl font-semibold">{{ $t('pages.services.mainPoints.vehicles.title') }}</h3>
        <p class="text-center italic">{{ $t('pages.services.mainPoints.vehicles.text') }}</p>
      </div>

      <div class="flex flex-col justify-between space-y-2 items-center text-xl">
        <i class="bx bxs-trophy bx-md text-gold"></i>
        <h3 class="text-xl font-semibold">{{ $t('pages.services.mainPoints.chauffeurs.title') }}</h3>
        <p class="text-center italic">{{ $t('pages.services.mainPoints.chauffeurs.text') }}</p>
      </div>

      <div class="flex flex-col justify-between space-y-2 items-center text-xl">
        <i class="bx bxs-smile bx-md text-gold"></i>
        <h3 class="text-xl font-semibold">{{ $t('pages.services.mainPoints.experience.title') }}</h3>
        <p class="text-center italic">{{ $t('pages.services.mainPoints.experience.text') }}</p>
      </div>

      <div class="flex flex-col justify-between space-y-2 items-center text-xl">
        <i class="bx bxs-calendar-edit bx-md text-gold"></i>
        <h3 class="text-xl font-semibold">{{ $t('pages.services.mainPoints.availability.title') }}</h3>
        <p class="text-center italic">{{ $t('pages.services.mainPoints.availability.text') }}</p>
      </div>
    </div>
  </section>
</template>