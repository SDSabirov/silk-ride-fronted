<template>
  <div>
    <section class="relative min-h-screen w-full overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          :src="img" 
          :alt="altText" 
          class="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-700" 
        />
        <!-- Enhanced Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
      </div>

      <!-- Content Container -->
      <div class="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
        <div class="max-w-6xl w-full">
          <!-- Main Content Card -->
          <div class="bg-black/30 backdrop-blur-lg rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
            <!-- Title Section -->
            <div class="text-center mb-12">
              <h1 class="text-4xl md:text-7xl font-bold text-white mb-4 leading-tight">
                {{ title }}
                <span class="block text-gold mt-2">{{ subtitle }}</span>
              </h1>
              <p class="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
                {{ slogan }}
              </p>
            </div>

            <!-- Brand Values -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div class="text-center group">
                <div class="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-all duration-300 group-hover:scale-110">
                  <i class="bx bx-crown text-gold text-3xl"></i>
                </div>
                <h3 class="text-white font-bold text-lg mb-2">{{ $t('hero.brandValues.luxury.title') }}</h3>
                <p class="text-gray-300 text-sm">{{ $t('hero.brandValues.luxury.description') }}</p>
              </div>
              <div class="text-center group">
                <div class="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-all duration-300 group-hover:scale-110">
                  <i class="bx bx-user-check text-gold text-3xl"></i>
                </div>
                <h3 class="text-white font-bold text-lg mb-2">{{ $t('hero.brandValues.service.title') }}</h3>
                <p class="text-gray-300 text-sm">{{ $t('hero.brandValues.service.description') }}</p>
              </div>
              <div class="text-center group">
                <div class="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-all duration-300 group-hover:scale-110">
                  <i class="bx bx-time-five text-gold text-3xl"></i>
                </div>
                <h3 class="text-white font-bold text-lg mb-2">{{ $t('hero.brandValues.punctual.title') }}</h3>
                <p class="text-gray-300 text-sm">{{ $t('hero.brandValues.punctual.description') }}</p>
              </div>
            </div>

            <!-- Call to Action -->
            <div class="text-center">
              <NuxtLink
                to="/booking"
                class="inline-flex items-center px-10 py-5 bg-gradient-to-r from-gold to-yellow-400 text-black text-xl font-bold rounded-2xl hover:from-yellow-400 hover:to-gold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-gold/50"
              >
                <i class="bx bx-calendar-check mr-3 text-2xl"></i>
                {{ $t('pages.common.bookNow') }}
              </NuxtLink>
              <p class="text-gray-300 mt-4 text-sm">{{ $t('hero.cta.features') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    slogan: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      default: "Car image",
    },
    car:{
      type:Object,
      required:true,
    }
  },
};
</script>
