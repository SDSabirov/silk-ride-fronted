<template>
  <section class="py-12 bg-white relative">
    <div class="container mx-auto max-w-screen-xl px-4 text-center">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex flex-col items-center justify-start space-y-4 relative">
          <h2 class="text-2xl md:text-5xl font-semibold text-gray-900 mb-10 text-left w-full">
            {{ $t('about.title') }}
          </h2>

          <p class="text-lg text-left text-gray-700 leading-loose">
            {{ $t('about.description') }}
          </p>

          <div class="w-full flex items-center justify-end text-xl text-white self-end">
            <NuxtLink :to="localePath('/about')">
              <button class="px-8 py-3 bg-black flex items-center space-x-2">
                <span>{{ $t('about.learnMore') }}</span><span class="sr-only">{{ $t('srOnly.aboutSilkRide') }}</span>
                <span><i class="bx bx-chevrons-right"></i></span>
              </button>
            </NuxtLink>
          </div>
        </div>

        <div class="grid grid-cols-2 grid-rows-2 gap-4">
          <div class="row-span-2 rounded-lg overflow-hidden">
            <img
              src="/assets/images/covers/business-trip.webp"
              alt="business trip"
              class="object-cover w-full h-full"
            />
          </div>
          <div class="rounded-lg overflow-hidden">
            <img
              src="/assets/images/covers/assist.webp"
              alt="luggage assist"
              class="object-cover w-full h-full"
            />
          </div>
          <div class="rounded-lg overflow-hidden">
            <img
              src="/assets/images/covers/fleet.webp"
              alt="fleet v-class"
              class="object-cover w-full h-full"
            />
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