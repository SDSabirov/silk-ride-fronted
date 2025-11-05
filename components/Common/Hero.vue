<template>
  <section class="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
    <!-- Subtle accent circle -->
    <div class="absolute top-20 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

    <div class="relative z-10 max-w-screen-xl mx-auto px-6 py-24 w-full">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Content -->
        <div class="space-y-10 lg:pr-8">
          <div class="space-y-6">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
              {{ page ? page : $t('commonHero.defaultTitle') }}
            </h1>
            <p v-if="subtitle" class="text-xl text-gray-600 leading-relaxed max-w-xl">
              {{ subtitle }}
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink
              :to="localePath('/booking')"
              class="inline-flex items-center justify-center bg-gold text-black hover:bg-gold/90 px-8 py-4 text-base font-semibold rounded-lg transition-colors"
            >
              {{ $t('commonHero.bookNow') }}
            </NuxtLink>
            <NuxtLink
              v-if="showSecondaryButton"
              :to="localePath('/contact-us')"
              class="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 px-8 py-4 text-base font-semibold rounded-lg transition-colors"
            >
              {{ $t('commonHero.getQuote') }}
            </NuxtLink>
          </div>

          <!-- Trust badges -->
          <div v-if="showTrustBadges" class="flex flex-wrap gap-8">
            <div class="flex items-center gap-2 text-gray-500">
              <div class="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                <i class="bx bx-shield-check text-gold text-sm"></i>
              </div>
              <span class="text-sm">Licensed & Insured</span>
            </div>
            <div class="flex items-center gap-2 text-gray-500">
              <div class="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                <i class="bx bx-time text-gold text-sm"></i>
              </div>
              <span class="text-sm">24/7 Available</span>
            </div>
            <div class="flex items-center gap-2 text-gray-500">
              <div class="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                <i class="bx bx-star text-gold text-sm"></i>
              </div>
              <span class="text-sm">Premium Service</span>
            </div>
          </div>
        </div>

        <!-- Right Image - Clean Elevated Card -->
        <div class="relative">
          <div class="relative group">
            <!-- Simple elevated card with subtle shadow -->
            <div class="relative overflow-hidden rounded-2xl shadow-xl">
              <div class="aspect-[3/4] relative">
                <NuxtImg
                  :src="image"
                  :alt="page || 'Silk Ride luxury chauffeur service'"
                  class="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                  width="800"
                  height="1000"
                />
                <!-- Minimal overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            <!-- Single accent element -->
            <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-gold/10 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocalePath, useI18n } from '#imports'

const localePath = useLocalePath()
const { t } = useI18n()

const props = defineProps({
  image: {
    type: String,
    required: true
  },
  page: {
    type: String,
    required: false
  },
  subtitle: {
    type: String,
    required: false
  },
  showSecondaryButton: {
    type: Boolean,
    default: true
  },
  showTrustBadges: {
    type: Boolean,
    default: true
  }
})
</script>