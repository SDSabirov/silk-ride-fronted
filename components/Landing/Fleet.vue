<template>
  <section class="py-20 bg-gray-50" data-section="services">
    <div class="max-w-screen-xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {{ $t('landing.fleet.title') }}
        </h2>
        <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          {{ $t('landing.fleet.subtitle') }}
        </p>
      </div>

      <!-- Service Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <!-- Airport Transfers -->
        <div class="bg-white rounded-lg overflow-hidden border border-gray-100">
          <div class="h-56 relative overflow-hidden">
            <img src="~/assets/images/vclassjett.webp" alt="Airport Transfer Service"
                 class="w-full h-full object-cover"
                 loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-6 left-6 text-white">
              <h3 class="text-2xl font-bold mb-1">{{ $t('landing.fleet.airport.title') }}</h3>
              <p class="text-sm">{{ $t('landing.fleet.airport.subtitle') }}</p>
            </div>
          </div>
          <div class="p-6">
            <p class="text-gray-600 mb-6 leading-relaxed">
              {{ $t('landing.fleet.airport.description') }}
            </p>
            <div class="flex justify-between items-baseline mb-6">
              <span class="text-3xl font-bold text-gray-900">{{ $t('landing.fleet.airport.price') }}</span>
              <span class="text-sm text-gray-500">{{ $t('landing.fleet.airport.route') }}</span>
            </div>
            <div class="flex gap-3">
              <NuxtLink :to="localePath('/services/airport-transfers')"
                        :aria-label="$t('landing.fleet.airport.learnMore')"
                        class="flex-1 text-center bg-gold text-black py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors">
                {{ $t('common.learnMore') }}
              </NuxtLink>
              <NuxtLink :to="localePath('/booking')"
                        class="flex-1 text-center border-2 border-gray-900 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors">
                {{ $t('common.bookNow') }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Corporate Travel -->
        <div class="bg-white rounded-lg overflow-hidden border border-gray-100">
          <div class="h-56 relative overflow-hidden">
            <img src="/assets/images/covers/business-trip.webp" alt="Corporate Travel Service"
                 class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-6 left-6 text-white">
              <h3 class="text-2xl font-bold mb-1">{{ $t('landing.fleet.corporate.title') }}</h3>
              <p class="text-sm">{{ $t('landing.fleet.corporate.subtitle') }}</p>
            </div>
          </div>
          <div class="p-6">
            <p class="text-gray-600 mb-6 leading-relaxed">
              {{ $t('landing.fleet.corporate.description') }}
            </p>
            <div class="flex justify-between items-baseline mb-6">
              <span class="text-3xl font-bold text-gray-900">{{ $t('landing.fleet.corporate.price') }}</span>
              <span class="text-sm text-gray-500">{{ $t('landing.fleet.corporate.minimum') }}</span>
            </div>
            <div class="flex gap-3">
              <NuxtLink :to="localePath('/services/corporate-travel')"
                        :aria-label="$t('landing.fleet.corporate.learnMore')"
                        class="flex-1 text-center bg-gold text-black py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors">
                {{ $t('common.learnMore') }}
              </NuxtLink>
              <NuxtLink :to="localePath('/booking')"
                        class="flex-1 text-center border-2 border-gray-900 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors">
                {{ $t('common.bookNow') }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Wedding & Events -->
        <div class="bg-white rounded-lg overflow-hidden border border-gray-100">
          <div class="h-56 relative overflow-hidden">
            <img src="/assets/images/covers/wedding.webp" alt="Wedding & Event Service"
                 class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-6 left-6 text-white">
              <h3 class="text-2xl font-bold mb-1">{{ $t('landing.fleet.wedding.title') }}</h3>
              <p class="text-sm">{{ $t('landing.fleet.wedding.subtitle') }}</p>
            </div>
          </div>
          <div class="p-6">
            <p class="text-gray-600 mb-6 leading-relaxed">
              {{ $t('landing.fleet.wedding.description') }}
            </p>
            <div class="flex justify-between items-baseline mb-6">
              <span class="text-3xl font-bold text-gray-900">{{ $t('landing.fleet.wedding.customQuote') }}</span>
              <span class="text-sm text-gray-500">{{ $t('landing.fleet.wedding.packages') }}</span>
            </div>
            <div class="flex gap-3">
              <NuxtLink :to="localePath('/services/wedding-chauffeur')"
                        :aria-label="$t('landing.fleet.wedding.learnMore')"
                        class="flex-1 text-center bg-gold text-black py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors">
                {{ $t('common.learnMore') }}
              </NuxtLink>
              <NuxtLink :to="localePath('/contact-us')"
                        class="flex-1 text-center border-2 border-gray-900 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors">
                {{ $t('commonHero.getQuote') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Fleet Overview -->
      <div class="bg-white rounded-lg border border-gray-100 p-10">
        <h3 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">{{ $t('landing.fleet.fleetTitle') }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <!-- E-Class -->
          <div class="text-center">
            <div class="relative overflow-hidden rounded-lg mb-4">
              <img src="/assets/images/eclass.webp" alt="Mercedes E-Class"
                   class="w-full h-48 object-cover">
            </div>
            <h4 class="text-2xl font-bold text-gray-900 mb-2">{{ $t('landing.fleet.eclass.title') }}</h4>
            <p class="text-gray-600 mb-4">{{ $t('landing.fleet.eclass.description') }}</p>
            <div class="flex justify-center gap-4 text-sm text-gray-500 mb-4">
              <span>{{ $t('landing.fleet.eclass.capacity') }}</span>
              <span>•</span>
              <span>{{ $t('landing.fleet.eclass.comfort') }}</span>
            </div>
            <NuxtLink :to="localePath('/fleet/mercedes-e-class')"
                      class="inline-block text-gray-900 hover:text-gray-600 font-semibold transition-colors">
              {{ $t('common.viewDetails') }}
            </NuxtLink>
          </div>

          <!-- S-Class -->
          <div class="text-center">
            <div class="relative overflow-hidden rounded-lg mb-4">
              <img src="/assets/images/sclassBackground.webp" alt="Mercedes S-Class"
                   class="w-full h-48 object-cover">
            </div>
            <h4 class="text-2xl font-bold text-gray-900 mb-2">{{ $t('landing.fleet.sclass.title') }}</h4>
            <p class="text-gray-600 mb-4">{{ $t('landing.fleet.sclass.description') }}</p>
            <div class="flex justify-center gap-4 text-sm text-gray-500 mb-4">
              <span>{{ $t('landing.fleet.sclass.capacity') }}</span>
              <span>•</span>
              <span>{{ $t('landing.fleet.sclass.luxury') }}</span>
            </div>
            <NuxtLink :to="localePath('/fleet/mercedes-s-class')"
                      class="inline-block text-gray-900 hover:text-gray-600 font-semibold transition-colors">
              {{ $t('common.viewDetails') }}
            </NuxtLink>
          </div>

          <!-- V-Class -->
          <div class="text-center">
            <div class="relative overflow-hidden rounded-lg mb-4">
              <img src="~/assets/images/vclassjett.webp" alt="Mercedes V-Class"
                   class="w-full h-48 object-cover">
            </div>
            <h4 class="text-2xl font-bold text-gray-900 mb-2">{{ $t('landing.fleet.vclass.title') }}</h4>
            <p class="text-gray-600 mb-4">{{ $t('landing.fleet.vclass.description') }}</p>
            <div class="flex justify-center gap-4 text-sm text-gray-500 mb-4">
              <span>{{ $t('landing.fleet.vclass.capacity') }}</span>
              <span>•</span>
              <span>{{ $t('landing.fleet.vclass.luggage') }}</span>
            </div>
            <NuxtLink :to="localePath('/fleet/mercedes-v-class')"
                      class="inline-block text-gray-900 hover:text-gray-600 font-semibold transition-colors">
              {{ $t('common.viewDetails') }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Custom Request CTA -->
      <div class="mt-16 bg-gray-900 rounded-lg p-12 text-center text-white">
        <h3 class="text-3xl md:text-4xl font-bold mb-4">
          {{ $t('servicesSection.customRequest.title') }}
        </h3>
        <p class="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          {{ $t('servicesSection.customRequest.description') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+447512905514"
             class="inline-block bg-gold text-black px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors">
            +44 7512 905514
          </a>
          <NuxtLink :to="localePath('/contact-us')"
                    class="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
            {{ $t('common.getCustomQuote') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocalePath } from '#imports'

const localePath = useLocalePath()
</script>