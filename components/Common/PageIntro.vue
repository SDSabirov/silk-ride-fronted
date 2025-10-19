<template>
  <section class="relative py-24 bg-gray-50 overflow-hidden">
    <!-- Subtle decorative element -->
    <div class="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

    <div class="relative max-w-4xl mx-auto px-6">
      <!-- Accent line -->
      <div class="w-16 h-1 bg-gold mb-8 mx-auto"></div>

      <div class="text-center space-y-6">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          {{ title }}
        </h2>
        <p class="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
  },
};
</script>
