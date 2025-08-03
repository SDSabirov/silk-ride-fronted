<template>
  <section class="section-padding bg-white relative">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <h2 class="heading-1 text-gray-900 text-left">
            {{ $t('about.title') }}
          </h2>

          <p class="body-large text-gray-600 text-left leading-relaxed">
            {{ $t('about.description') }}
          </p>

          <div class="flex justify-start pt-4">
            <NuxtLink :to="localePath('/about')">
              <button class="btn btn-primary group">
                <span>{{ $t('about.learnMore') }}</span>
                <span class="sr-only">{{ $t('srOnly.aboutSilkRide') }}</span>
                <i class="bx bx-chevrons-right ml-2 group-hover:translate-x-1 transition-transform duration-200"></i>
              </button>
            </NuxtLink>
          </div>
        </div>

        <div class="grid grid-cols-2 grid-rows-2 gap-4 h-96">
          <!-- Main large image -->
          <div class="row-span-2 rounded-xl overflow-hidden group relative">
            <img
              src="/assets/images/covers/business-trip.webp"
              alt="Professional business chauffeur service"
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
          
          <!-- Top right image -->
          <div class="rounded-xl overflow-hidden group relative">
            <img
              src="/assets/images/covers/assist.webp"
              alt="Luxury chauffeur luggage assistance"
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
          
          <!-- Bottom right image -->
          <div class="rounded-xl overflow-hidden group relative">
            <img
              src="/assets/images/covers/fleet.webp"
              alt="Premium Mercedes fleet vehicles"
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocalePath } from '#imports'

const localePath = useLocalePath()
</script>