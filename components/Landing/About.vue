<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-screen-xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left Content -->
        <div class="space-y-6">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900">
            {{ $t('about.title') }}
          </h2>

          <p class="text-lg text-gray-600 leading-relaxed">
            {{ $t('about.description') }}
          </p>

          <div class="pt-4">
            <NuxtLink :to="localePath('/about')"
                      :aria-label="$t('about.learnMore')"
                      class="inline-block bg-gold text-black px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors">
              {{ $t('common.learnMore') }}
            </NuxtLink>
          </div>
        </div>

        <!-- Right Images Grid -->
        <div class="grid grid-cols-2 grid-rows-2 gap-4 h-[500px]">
          <!-- Main large image -->
          <div class="row-span-2 rounded-lg overflow-hidden">
            <img
              src="~/assets/images/covers/business-trip.webp"
              alt="Professional business chauffeur service"
              class="object-cover w-full h-full"
              loading="lazy"
              width="600"
              height="800"
            />
          </div>

          <!-- Top right image -->
          <div class="rounded-lg overflow-hidden">
            <img
              src="~/assets/images/covers/assist.webp"
              alt="Luxury chauffeur luggage assistance"
              class="object-cover w-full h-full"
              loading="lazy"
              width="400"
              height="300"
            />
          </div>

          <!-- Bottom right image -->
          <div class="rounded-lg overflow-hidden">
            <img
              src="~/assets/images/covers/fleet.webp"
              alt="Premium Mercedes fleet vehicles"
              class="object-cover w-full h-full"
              loading="lazy"
              width="400"
              height="300"
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