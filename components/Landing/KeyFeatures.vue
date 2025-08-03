<template>
  <section
    class="section-padding bg-gray-50"
    id="why-choose-us"
  >
    <div class="container-custom text-center">
      <!-- Section Title -->
      <div class="mb-12">
        <h2 class="heading-2 text-gray-900 mb-4">
          {{ $t("why.title") }}
        </h2>

        <!-- Decorative line -->
        <div class="flex items-center justify-center mb-6">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <div class="h-1 bg-gold w-24"></div>
          <div class="h-3 w-3 bg-gold rotate-45"></div>
        </div>

        <p class="body-large text-gray-600 max-w-3xl mx-auto">
          {{ $t("why.description") }}
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <!-- Professional Chauffeurs -->
        <div class="card card-body group hover:shadow-xl transition-all duration-300 w-full max-w-sm">
          <div class="flex justify-center mb-6">
            <div class="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
              <i class="bx bxs-user-check text-gold text-3xl group-hover:scale-110 transition-transform duration-300"></i>
            </div>
          </div>
          <h3 class="heading-4 text-gray-900 mb-4 group-hover:text-gold transition-colors duration-300">
            {{ $t("why.features.chauffeurs.title") }}
          </h3>
          <p class="body-normal text-gray-600 leading-relaxed">
            {{ $t("why.features.chauffeurs.text") }}
          </p>
        </div>

        <!-- Premium Fleet -->
        <div class="card card-body group hover:shadow-xl transition-all duration-300 w-full max-w-sm">
          <div class="flex justify-center mb-6">
            <div class="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
              <i class="bx bxs-car text-gold text-3xl group-hover:scale-110 transition-transform duration-300"></i>
            </div>
          </div>
          <h3 class="heading-4 text-gray-900 mb-4 group-hover:text-gold transition-colors duration-300">
            {{ $t("why.features.fleet.title") }}
          </h3>
          <p class="body-normal text-gray-600 leading-relaxed">
            {{ $t("why.features.fleet.text") }}
          </p>
        </div>

        <!-- 24/7 Availability -->
        <div class="card card-body group hover:shadow-xl transition-all duration-300 w-full max-w-sm">
          <div class="flex justify-center mb-6">
            <div class="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
              <i class="bx bxs-time-five text-gold text-3xl group-hover:scale-110 transition-transform duration-300"></i>
            </div>
          </div>
          <h3 class="heading-4 text-gray-900 mb-4 group-hover:text-gold transition-colors duration-300">
            {{ $t("why.features.availability.title") }}
          </h3>
          <p class="body-normal text-gray-600 leading-relaxed">
            {{ $t("why.features.availability.text") }}
          </p>
        </div>

        <!-- Coverage Area -->
        <div class="card card-body group hover:shadow-xl transition-all duration-300 w-full max-w-sm md:col-start-1 lg:col-start-auto">
          <div class="flex justify-center mb-6">
            <div class="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
              <i class="bx bxs-map text-gold text-3xl group-hover:scale-110 transition-transform duration-300"></i>
            </div>
          </div>
          <h3 class="heading-4 text-gray-900 mb-4 group-hover:text-gold transition-colors duration-300">
            {{ $t("why.features.coverage.title") }}
          </h3>
          <p class="body-normal text-gray-600 leading-relaxed">
            {{ $t("why.features.coverage.text") }}
          </p>
        </div>

        <!-- Trusted Service -->
        <div class="card card-body group hover:shadow-xl transition-all duration-300 w-full max-w-sm md:col-start-2 lg:col-start-auto">
          <div class="flex justify-center mb-6">
            <div class="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
              <i class="bx bxs-badge-check text-gold text-3xl group-hover:scale-110 transition-transform duration-300"></i>
            </div>
          </div>
          <h3 class="heading-4 text-gray-900 mb-4 group-hover:text-gold transition-colors duration-300">
            {{ $t("why.features.trusted.title") }}
          </h3>
          <p class="body-normal text-gray-600 leading-relaxed">
            {{ $t("why.features.trusted.text") }}
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
