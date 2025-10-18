<template>
  <section class="py-20 bg-white" id="why-choose-us">
    <div class="max-w-screen-xl mx-auto px-6">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {{ $t("why.title") }}
        </h2>
        <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          {{ $t("why.description") }}
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Professional Chauffeurs -->
        <div class="border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            {{ $t("why.features.chauffeurs.title") }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ $t("why.features.chauffeurs.text") }}
          </p>
        </div>

        <!-- Premium Fleet -->
        <div class="border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            {{ $t("why.features.fleet.title") }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ $t("why.features.fleet.text") }}
          </p>
        </div>

        <!-- 24/7 Availability -->
        <div class="border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            {{ $t("why.features.availability.title") }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ $t("why.features.availability.text") }}
          </p>
        </div>

        <!-- Coverage Area -->
        <div class="border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            {{ $t("why.features.coverage.title") }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ $t("why.features.coverage.text") }}
          </p>
        </div>

        <!-- Trusted Service -->
        <div class="border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            {{ $t("why.features.trusted.title") }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
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
