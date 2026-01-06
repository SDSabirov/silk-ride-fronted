<template>
  <section class="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <NuxtImg
        :src="image"
        :alt="page || 'Silk Ride luxury chauffeur service'"
        class="w-full h-full object-cover"
        loading="eager"
        width="1920"
        height="1080"
      />
      <!-- Dark Gradient Overlay -->
      <div class="hero-overlay"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-screen-2xl mx-auto px-6 py-20 w-full">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Heading -->
        <h1 class="animate-reveal hero-title text-white mb-8">
          {{ page ? page : $t('commonHero.defaultTitle') }}
        </h1>

        <!-- Subtitle -->
        <p v-if="subtitle" class="animate-reveal-delay-1 hero-subtitle text-gray-300 mb-12 max-w-2xl mx-auto">
          {{ subtitle }}
        </p>

        <!-- CTA Buttons -->
        <div class="animate-reveal-delay-2 flex flex-col sm:flex-row gap-5 justify-center">
          <NuxtLink
            :to="localePath('/booking')"
            class="btn-hero-primary"
          >
            {{ $t('commonHero.bookNow') }}
            <i class="bx bx-right-arrow-alt text-xl"></i>
          </NuxtLink>
          <NuxtLink
            v-if="showSecondaryButton"
            :to="localePath('/contact-us')"
            class="btn-hero-secondary"
          >
            {{ $t('commonHero.getQuote') }}
          </NuxtLink>
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
  }
})
</script>
