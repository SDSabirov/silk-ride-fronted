<template>
  <section
    class="py-12 bg-white bg-[url(/assets/images/covers/bgpattern.png)] bg-contain bg-center bg-no-repeat"
    id="why-choose-us"
  >
    <div class="container mx-auto max-w-screen-xl px-4 text-center">
      <!-- Section Title -->
      <h2 class="text-2xl md:text-4xl font-semibold text-black mb-4 capitalize">
        {{ $t("why.title") }}
      </h2>

      <div class="flex items-center w-full mb-4 justify-center">
        <div class="h-3 w-3 bg-gold rotate-45"></div>
        <div class="h-1 bg-gold w-1/2"></div>
        <div class="h-3 w-3 bg-gold rotate-45"></div>
      </div>

      <p class="text-lg md:text-xl font-normal text-gray-700 mb-10">
        {{ $t("why.description") }}
      </p>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white p-6 shadow-lg transition max-w-[380px]">
          <div class="flex justify-center mb-4 text-gold">
            <i class="bx bxs-user-check bx-lg"></i>
          </div>
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">
            {{ $t("why.features.chauffeurs.title") }}
          </h3>
          <p class="text-gray-600">
            {{ $t("why.features.chauffeurs.text") }}
          </p>
        </div>

        <div class="bg-white p-6 shadow-lg transition max-w-[380px]">
          <div class="flex justify-center mb-4 text-gold">
            <i class="bx bxs-car bx-lg"></i>
          </div>
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">
            {{ $t("why.features.fleet.title") }}
          </h3>
          <p class="text-gray-600">
            {{ $t("why.features.fleet.text") }}
          </p>
        </div>

        <div class="bg-white p-6 shadow-lg transition max-w-[380px]">
          <div class="flex justify-center mb-4 text-gold">
            <i class="bx bxs-time-five bx-lg"></i>
          </div>
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">
            {{ $t("why.features.availability.title") }}
          </h3>
          <p class="text-gray-600">
            {{ $t("why.features.availability.text") }}
          </p>
        </div>

        <div
          class="lg:col-span-3 flex flex-col md:flex-row justify-center gap-8"
        >
          <div class="bg-white p-6 shadow-lg transition max-w-[380px]">
            <div class="flex justify-center mb-4 text-gold">
              <i class="bx bxs-map bx-lg"></i>
            </div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">
              {{ $t("why.features.coverage.title") }}
            </h3>
            <p class="text-gray-600">
              {{ $t("why.features.coverage.text") }}
            </p>
          </div>

          <div class="bg-white p-6 shadow-lg transition max-w-[380px]">
            <div class="flex justify-center mb-4 text-gold">
              <i class="bx bxs-badge-check bx-lg"></i>
            </div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">
              {{ $t("why.features.trusted.title") }}
            </h3>
            <p class="text-gray-600">
              {{ $t("why.features.trusted.text") }}
            </p>
          </div>
        </div>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-12 justify-center w-full max-w-lg mx-auto mt-10 mb-4 md:mb-10"
      >
        <!-- Badge 1 -->
        <div class="flex flex-col items-center text-center">
          <img
            src="/assets/icons/10yearsbadge.webp"
            class="w-[58px]"
            alt="10 years of experience"
          />
          <p class="text-sm text-gray-600 italic capitalize mt-2 min-h-[48px]">
            {{ $t("why.badges.experience") }}
          </p>
        </div>

        <!-- Badge 2 -->
        <div class="flex flex-col items-center text-center">
          <div class="flex items-center space-x-2 text-gray-900">
            <i class="bx bxs-like bx-lg"></i>
            <p class="text-[22px] font-bold">50K+</p>
          </div>
          <p class="text-sm text-gray-600 italic capitalize mt-2 min-h-[48px]">
            {{ $t("why.badges.clients") }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>
<script setup>
// No additional script is required for static content.
</script>

<style>
/* Optional additional styles */
</style>
