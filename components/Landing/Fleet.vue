<template>
  <section class="py-12 relative">
    <!--background-->
    <div class="w-full h-full absolute top-0 flex -z-10">
      <div class="w-1/2 h-full bg-gray-100"></div>
      <div class="w-1/2 h-full bg-gray-200"></div>
    </div>

    <div class="container mx-auto max-w-screen-xl px-4 text-center z-20 w-full">
      <div class="flex flex-col w-full items-center justify-center">
        <!-- Section Title -->
        <h2 class="text-2xl md:text-5xl font-semibold text-gray-900 mb-10 text-center w-full capitalize">
          {{ $t('servicesSection.title') }}
        </h2>

        <!-- Decorative line -->
        <div class="flex items-center w-full mb-2 justify-center mb-6">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <div class="h-1 bg-gold w-1/2"></div>
          <div class="h-3 w-3 bg-gold rotate-45"></div>
        </div>

        <!-- Cards Section -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- E-Class -->
          <div class="relative overflow-hidden shadow-lg bg-gradient-to-b from-green-200 group h-[700px]">
            <img src="/assets/images/eclass.webp" alt="Luxury Sedan" class="w-full h-full object-cover" />

            <div class="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xl font-semibold transition-opacity duration-300 group-hover:opacity-0">
              <h3 class="text-4xl">{{ $t('servicesSection.eClass.title') }}</h3>
            </div>

            <div class="absolute inset-0 flex items-center justify-center bg-black/75 text-white text-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col">
              <p class="text-md">
                {{ $t('servicesSection.eClass.description') }}
              </p>
              <CommonPriceGuide hourlyRate="50" dayRate="400" heathrowToCenteral="120" />
              <div class="w-full flex flex-col space-y-2 items-center justify-center absolute bottom-4">
                <NuxtLink :to="localePath('/booking')" class="flex w-[220px] items-center justify-center capitalize whitespace-nowrap border border-white text-white text-lg hover:bg-gold hover:text-black hover:border-gold p-2 transition-all duration-300 ease-in bg-delay-300">
                  {{ $t('servicesSection.bookNow') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/fleet/mercedes-e-class')" class="flex w-[220px] flex items-center space-x-2 justify-center text-white text-lg hover:text-gold hover:text-black p-2 capitalize whitespace-nowrap">
                  <span>{{ $t('servicesSection.learnMore') }}</span>
                  <span><i class="bx bx-right-arrow-alt"></i></span>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- V-Class -->
          <div class="relative overflow-hidden shadow-lg bg-gradient-to-b from-gold group h-[700px]">
            <img src="/assets/images/covers/business-trip.webp" alt="Luxury Sedan" class="w-full h-full object-cover" />

            <div class="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xl font-semibold transition-opacity duration-300 group-hover:opacity-0">
              <h3 class="text-4xl">{{ $t('servicesSection.vClass.title') }}</h3>
            </div>

            <div class="absolute inset-0 flex items-center justify-center bg-black/75 text-white text-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col">
              <p class="text-md">
                {{ $t('servicesSection.vClass.description') }}
              </p>
              <CommonPriceGuide hourlyRate="75" dayRate="600" heathrowToCenteral="160" />
              <div class="w-full flex flex-col space-y-2 items-center justify-center absolute bottom-4">
                <NuxtLink :to="localePath('/booking')" class="flex w-[220px] items-center justify-center capitalize whitespace-nowrap border border-white text-white text-lg hover:bg-gold hover:text-black hover:border-gold p-2 transition-all duration-300 ease-in bg-delay-300">
                  {{ $t('servicesSection.bookNow') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/fleet/mercedes-v-class')" class="flex w-[220px] flex items-center space-x-2 justify-center text-white text-lg hover:text-gold hover:text-black p-2 capitalize whitespace-nowrap">
                  <span>{{ $t('servicesSection.learnMore') }}</span>
                  <span><i class="bx bx-right-arrow-alt"></i></span>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- S-Class -->
          <div class="relative overflow-hidden shadow-lg bg-gradient-to-b from-green-200 group row-span-1 h-[700px]">
            <img src="/assets/images/sclassBackground.webp" alt="Luxury Sedan" class="w-full h-full object-cover" />

            <div class="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xl font-semibold transition-opacity duration-300 group-hover:opacity-0">
              <h3 class="text-4xl">{{ $t('servicesSection.sClass.title') }}</h3>
            </div>

            <div class="absolute inset-0 flex items-center justify-center bg-black/75 text-white text-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col">
              <p class="text-md">
                {{ $t('servicesSection.sClass.description') }}
              </p>
              <CommonPriceGuide hourlyRate="75" dayRate="600" heathrowToCenteral="160" />
              <div class="w-full flex flex-col space-y-2 items-center justify-center absolute bottom-4">
                <NuxtLink :to="localePath('/booking')" class="flex w-[220px] items-center justify-center capitalize whitespace-nowrap border border-white text-white text-lg hover:bg-gold hover:text-black hover:border-gold p-2 transition-all duration-300 ease-in bg-delay-300">
                  {{ $t('servicesSection.bookNow') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/fleet/mercedes-s-class')" class="flex w-[220px] flex items-center space-x-2 justify-center text-white text-lg hover:text-gold hover:text-black p-2 capitalize whitespace-nowrap">
                  <span>{{ $t('servicesSection.learnMore') }}</span>
                  <span><i class="bx bx-right-arrow-alt"></i></span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Block -->
        <div class="w-full flex flex-col items-center justify-center space-y-4 mt-6 bg-gradient-to-r from-black via-gray-900 via-10% to-90% to-black p-6 rounded-xl">
          <h3 class="text-xl md:text-3xl font-semibold text-white">
            {{ $t('servicesSection.customRequest.title') }}
          </h3>
          <p class="text-lg md:text-xl italic text-white">
            {{ $t('servicesSection.customRequest.description') }}
            <a href="tel:+447512905514" class="text-gold whitespace-nowrap">+44 7512 905514</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocalePath } from '#imports'

const localePath = useLocalePath()
</script>