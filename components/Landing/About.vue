<template>
  <section class="py-24 bg-gradient-to-br from-stone-50 to-amber-50/30">
    <div class="max-w-screen-xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left Content -->
        <div>
          <p class="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            {{ $t('about.tagline') }}
          </p>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {{ $t('about.title') }}
          </h2>
          <p class="text-gray-600 text-lg leading-relaxed mb-8">
            {{ $t('about.shortDescription') }}
          </p>

          <!-- Key Points -->
          <div class="space-y-4 mb-10">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <i class="bx bx-check text-gold text-xl"></i>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">{{ $t('about.points.experience.title') }}</h4>
                <p class="text-gray-600 text-sm">{{ $t('about.points.experience.text') }}</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <i class="bx bx-check text-gold text-xl"></i>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">{{ $t('about.points.service.title') }}</h4>
                <p class="text-gray-600 text-sm">{{ $t('about.points.service.text') }}</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <i class="bx bx-check text-gold text-xl"></i>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">{{ $t('about.points.fleet.title') }}</h4>
                <p class="text-gray-600 text-sm">{{ $t('about.points.fleet.text') }}</p>
              </div>
            </div>
          </div>

          <NuxtLink
            :to="localePath('/about')"
            class="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            {{ $t('about.learnMore') }}
            <i class="bx bx-right-arrow-alt text-xl"></i>
          </NuxtLink>
        </div>

        <!-- Right Images Grid -->
        <div class="relative">
          <!-- Decorative elements -->
          <div class="absolute -top-4 -left-4 w-24 h-24 bg-gold/20 rounded-2xl -z-10"></div>
          <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-100 rounded-2xl -z-10"></div>

          <!-- 3 Image Grid -->
          <div class="grid grid-cols-2 gap-4">
            <!-- Large image spanning 2 rows -->
            <div class="row-span-2 rounded-2xl overflow-hidden shadow-lg">
              <NuxtImg
                src="/images/covers/business-trip.webp"
                alt="Professional chauffeur service"
                class="w-full h-full object-cover"
                loading="lazy"
                width="400"
                height="500"
              />
            </div>
            <!-- Top right image -->
            <div class="rounded-2xl overflow-hidden shadow-lg">
              <NuxtImg
                src="/images/covers/wedding.webp"
                alt="Wedding chauffeur service"
                class="w-full h-full object-cover"
                loading="lazy"
                width="300"
                height="240"
              />
            </div>
            <!-- Bottom right image -->
            <div class="rounded-2xl overflow-hidden shadow-lg">
              <NuxtImg
                src="/images/covers/about-us.webp"
                alt="Luxury Mercedes fleet"
                class="w-full h-full object-cover"
                loading="lazy"
                width="300"
                height="240"
              />
            </div>
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
