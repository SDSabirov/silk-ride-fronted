<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
    <!-- Decorative circles -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-40 -left-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-screen-xl mx-auto px-6 py-20 w-full">
      <div class="grid lg:grid-cols-[1.4fr,1fr] gap-12 items-center">
        <!-- Left Content - Wider -->
        <div class="space-y-8">
          <div class="space-y-6">
            <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
              {{ $t("landing.mainHero.title") }}
            </h1>
            <p class="text-lg md:text-xl text-gray-600 leading-relaxed">
              {{ $t("hero.subtitle") }}
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <NuxtLink
              :to="localePath('/booking')"
              class="inline-flex items-center justify-center bg-gold text-black hover:bg-gold/90 px-8 py-4 text-base font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-gold/20"
            >
              {{ $t("hero.bookNow") }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/services')"
              class="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-base font-semibold rounded-lg transition-all duration-300"
            >
              {{ $t("hero.exploreServices") }}
            </NuxtLink>
          </div>
        </div>

        <!-- Right Image - More Interesting Design -->
        <div class="relative hidden lg:block">
          <div class="relative group">
            <!-- Multiple layered images for depth -->
            <div class="relative">
              <!-- Back layer - offset -->
              <div class="absolute top-6 -right-6 w-full h-full">
                <div class="w-full h-full bg-gradient-to-br from-gold/20 to-gold/5 rounded-3xl"></div>
              </div>

              <!-- Main image -->
              <div class="relative overflow-hidden rounded-3xl shadow-2xl">
                <div class="aspect-[4/5] relative">
                  <img
                    src="~/assets/images/vclassjett.webp"
                    alt="Luxury Mercedes Chauffeur Service"
                    class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />

                  <!-- Dynamic gradient overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  <!-- Gold accent line -->
                  <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                </div>
              </div>

              <!-- Floating decorative element -->
              <div class="absolute -top-4 -left-4 w-20 h-20 bg-gold rounded-2xl transform rotate-12 opacity-20"></div>
              <div class="absolute -bottom-4 -right-4 w-16 h-16 bg-gold/30 rounded-xl transform -rotate-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { useLocalePath } from "#imports";

const localePath = useLocalePath();
</script>
