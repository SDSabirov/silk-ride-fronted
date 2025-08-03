<template>
  <section class="relative h-[60vh] lg:h-[70vh] overflow-hidden">
    <!-- Background image with parallax effect -->
    <div class="absolute inset-0 transform scale-105">
      <img 
        :src="image" 
        :alt="page || 'Silk Ride Hero'" 
        class="w-full h-full object-cover transition-transform duration-700 ease-out"
        loading="eager"
      />
    </div>
    
    <!-- Gradient overlay with improved opacity -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
    
    <!-- Animated content container -->
    <div class="relative h-full flex flex-col items-center justify-center px-6">
      <div class="text-center space-y-8 max-w-4xl mx-auto animate-fadeUp">
        <!-- Enhanced heading with better typography -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white font-heading leading-tight animate-fadeIn">
          {{ page ? page : $t('commonHero.defaultTitle') }}
        </h1>
        
        <!-- Subtitle if provided -->
        <p v-if="subtitle" class="text-lg md:text-xl lg:text-2xl text-white/90 font-light max-w-2xl mx-auto animate-fadeIn" style="animation-delay: 0.3s;">
          {{ subtitle }}
        </p>
        
        <!-- Enhanced CTA buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn" style="animation-delay: 0.6s;">
          <NuxtLink
            :to="localePath('/booking')"
            class="group inline-flex items-center justify-center px-8 py-4 bg-gold text-black text-lg font-semibold rounded-lg hover:bg-gold/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>{{ $t('commonHero.bookNow') }}</span>
            <i class="bx bx-arrow-back rotate-180 ml-2 text-xl group-hover:translate-x-1 transition-transform duration-300"></i>
          </NuxtLink>
          
          <NuxtLink
            v-if="showSecondaryButton"
            :to="localePath('/contact-us')"
            class="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/80 text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300"
          >
            <span>{{ $t('commonHero.getQuote') }}</span>
            <i class="bx bx-phone ml-2 text-xl group-hover:scale-110 transition-transform duration-300"></i>
          </NuxtLink>
        </div>
        
        <!-- Trust indicators -->
        <div v-if="showTrustBadges" class="flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-8 animate-fadeIn" style="animation-delay: 0.9s;">
          <div class="flex items-center space-x-2 text-white/80">
            <i class="bx bx-shield-check text-gold text-xl"></i>
            <span class="text-sm font-medium">Licensed & Insured</span>
          </div>
          <div class="flex items-center space-x-2 text-white/80">
            <i class="bx bx-time text-gold text-xl"></i>
            <span class="text-sm font-medium">24/7 Available</span>
          </div>
          <div class="flex items-center space-x-2 text-white/80">
            <i class="bx bx-star text-gold text-xl"></i>
            <span class="text-sm font-medium">Premium Service</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" style="animation-delay: 1.2s;">
      <div class="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
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