<template>
  <div>
    <Navbar />

    <CommonHero 
      :image="cover" 
      :page="$t('pages.fleet.heroTitle')"
      :subtitle="$t('pages.fleet.heroSubtitle')"
      :showTrustBadges="false"
    />

    <CommonPageIntro
      :title="$t('pages.fleet.introTitle')"
      :paragraph="$t('pages.fleet.introText')"
    />

    <!-- Fleet Overview Stats -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-screen-xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-car text-white text-2xl"></i>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">15+</h3>
            <p class="text-gray-600">{{ $t('pages.fleet.stats.vehicles') }}</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-shield-check text-white text-2xl"></i>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">100%</h3>
            <p class="text-gray-600">{{ $t('pages.fleet.stats.maintained') }}</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-time text-white text-2xl"></i>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
            <p class="text-gray-600">{{ $t('pages.fleet.stats.availability') }}</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-star text-white text-2xl"></i>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">5★</h3>
            <p class="text-gray-600">{{ $t('pages.fleet.stats.rating') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Fleet Grid -->
    <section class="py-16">
      <div class="max-w-screen-xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ $t('pages.fleet.fleetTitle') }}
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ $t('pages.fleet.fleetDescription') }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Mercedes E-Class -->
          <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <div class="relative h-64 overflow-hidden">
              <img 
                src="/assets/images/eclass.webp" 
                alt="Mercedes E-Class" 
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute top-4 left-4">
                <span class="bg-gold text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {{ $t('pages.fleet.popular') }}
                </span>
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3">{{ $t('servicesSection.eClass.title') }}</h3>
              <p class="text-gray-600 mb-4">{{ $t('servicesSection.eClass.description') }}</p>
              
              <div class="space-y-2 mb-6">
                <div class="flex items-center text-sm text-gray-600">
                  <i class="bx bx-user mr-2 text-gold"></i>
                  <span>{{ $t('pages.fleet.capacity.eClass') }}</span>
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <i class="bx bx-briefcase mr-2 text-gold"></i>
                  <span>{{ $t('pages.fleet.luggage.large') }}</span>
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <i class="bx bx-wifi mr-2 text-gold"></i>
                  <span>{{ $t('pages.fleet.features.wifi') }}</span>
                </div>
              </div>
              
              <div class="border-t pt-4 mb-6">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm text-gray-600">{{ $t('priceGuide.hourly.title') }}</span>
                  <span class="font-bold text-gold">£60/hour</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600">{{ $t('priceGuide.heathrow') }}</span>
                  <span class="font-bold text-gold">£120</span>
                </div>
              </div>
              
              <div class="flex gap-3">
                <NuxtLink 
                  :to="localePath('/booking')"
                  class="flex-1 bg-gold text-black text-center py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
                >
                  {{ $t('servicesSection.bookNow') }}
                </NuxtLink>
                <NuxtLink 
                  :to="localePath('/fleet/mercedes-e-class')"
                  class="flex-1 border border-gray-300 text-gray-700 text-center py-3 rounded-lg font-semibold hover:border-gold hover:text-gold transition-colors"
                >
                  {{ $t('servicesSection.learnMore') }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Mercedes S-Class -->
          <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <div class="relative h-64 overflow-hidden">
              <img 
                src="/assets/images/sclassBackground.webp" 
                alt="Mercedes S-Class" 
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute top-4 left-4">
                <span class="bg-black text-gold px-3 py-1 rounded-full text-sm font-semibold">
                  {{ $t('pages.fleet.luxury') }}
                </span>
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3">{{ $t('servicesSection.sClass.title') }}</h3>
              <p class="text-gray-600 mb-4">{{ $t('servicesSection.sClass.description') }}</p>
              
              <div class="space-y-2 mb-6">
                <div class="flex items-center text-sm text-gray-600">
                  <i class="bx bx-user mr-2 text-gold"></i>
                  <span>{{ $t('pages.fleet.capacity.sClass') }}</span>
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <i class="bx bx-briefcase mr-2 text-gold"></i>
                  <span>{{ $t('pages.fleet.luggage.large') }}</span>
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <i class="bx bx-star mr-2 text-gold"></i>
                  <span>{{ $t('pages.fleet.features.premium') }}</span>
                </div>
              </div>
              
              <div class="border-t pt-4 mb-6">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm text-gray-600">{{ $t('priceGuide.hourly.title') }}</span>
                  <span class="font-bold text-gold">£80/hour</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600">{{ $t('priceGuide.heathrow') }}</span>
                  <span class="font-bold text-gold">£160</span>
                </div>
              </div>
              
              <div class="flex gap-3">
                <NuxtLink 
                  :to="localePath('/booking')"
                  class="flex-1 bg-gold text-black text-center py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
                >
                  {{ $t('servicesSection.bookNow') }}
                </NuxtLink>
                <NuxtLink 
                  :to="localePath('/fleet/mercedes-s-class')"
                  class="flex-1 border border-gray-300 text-gray-700 text-center py-3 rounded-lg font-semibold hover:border-gold hover:text-gold transition-colors"
                >
                  {{ $t('servicesSection.learnMore') }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Mercedes V-Class -->
          <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <div class="relative h-64 overflow-hidden">
              <img 
                src="/assets/images/covers/business-trip.webp" 
                alt="Mercedes V-Class" 
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute top-4 left-4">
                <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {{ $t('pages.fleet.spacious') }}
                </span>
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3">{{ $t('servicesSection.vClass.title') }}</h3>
              <p class="text-gray-600 mb-4">{{ $t('servicesSection.vClass.description') }}</p>
              
              <div class="space-y-2 mb-6">
                <div class="flex items-center text-sm text-gray-600">
                  <i class="bx bx-group mr-2 text-gold"></i>
                  <span>{{ $t('pages.fleet.capacity.vClass') }}</span>
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <i class="bx bx-briefcase mr-2 text-gold"></i>
                  <span>{{ $t('pages.fleet.luggage.extra') }}</span>
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <i class="bx bx-home mr-2 text-gold"></i>
                  <span>{{ $t('pages.fleet.features.spacious') }}</span>
                </div>
              </div>
              
              <div class="border-t pt-4 mb-6">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm text-gray-600">{{ $t('priceGuide.hourly.title') }}</span>
                  <span class="font-bold text-gold">£70/hour</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600">{{ $t('priceGuide.heathrow') }}</span>
                  <span class="font-bold text-gold">£160</span>
                </div>
              </div>
              
              <div class="flex gap-3">
                <NuxtLink 
                  :to="localePath('/booking')"
                  class="flex-1 bg-gold text-black text-center py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
                >
                  {{ $t('servicesSection.bookNow') }}
                </NuxtLink>
                <NuxtLink 
                  :to="localePath('/fleet/mercedes-v-class')"
                  class="flex-1 border border-gray-300 text-gray-700 text-center py-3 rounded-lg font-semibold hover:border-gold hover:text-gold transition-colors"
                >
                  {{ $t('servicesSection.learnMore') }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fleet Features Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-screen-xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ $t('pages.fleet.featuresTitle') }}
          </h2>
          <p class="text-lg text-gray-600">
            {{ $t('pages.fleet.featuresDescription') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-shield-check text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t('pages.fleet.features.safety') }}</h3>
            <p class="text-gray-600">{{ $t('pages.fleet.features.safetyDesc') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-leaf text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t('pages.fleet.features.eco') }}</h3>
            <p class="text-gray-600">{{ $t('pages.fleet.features.ecoDesc') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-wifi text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t('pages.fleet.features.connectivity') }}</h3>
            <p class="text-gray-600">{{ $t('pages.fleet.features.connectivityDesc') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-cog text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t('pages.fleet.features.maintenance') }}</h3>
            <p class="text-gray-600">{{ $t('pages.fleet.features.maintenanceDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Fleet Standards Section -->
    <section class="py-16">
      <div class="max-w-screen-xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {{ $t('pages.fleet.standardsTitle') }}
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              {{ $t('pages.fleet.standardsDescription') }}
            </p>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="bx bx-check text-white text-xl"></i>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">{{ $t('pages.fleet.standards.regular') }}</h3>
                  <p class="text-gray-600">{{ $t('pages.fleet.standards.regularDesc') }}</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="bx bx-check text-white text-xl"></i>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">{{ $t('pages.fleet.standards.cleaning') }}</h3>
                  <p class="text-gray-600">{{ $t('pages.fleet.standards.cleaningDesc') }}</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="bx bx-check text-white text-xl"></i>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">{{ $t('pages.fleet.standards.inspection') }}</h3>
                  <p class="text-gray-600">{{ $t('pages.fleet.standards.inspectionDesc') }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <img 
              src="/assets/images/covers/fleet.webp" 
              alt="Fleet Standards" 
              class="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gray-900 text-white">
      <div class="max-w-screen-xl mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ $t('pages.fleet.ctaTitle') }}
        </h2>
        <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          {{ $t('pages.fleet.ctaDescription') }}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            :to="localePath('/booking')"
            class="px-8 py-4 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-colors"
          >
            {{ $t('pages.fleet.bookNow') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/contact-us')"
            class="px-8 py-4 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-black transition-colors"
          >
            {{ $t('pages.fleet.getQuote') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import cover from "@/assets/images/covers/fleet.webp";
import { useI18n, useLocalePath } from "#imports";

const { t } = useI18n();
const localePath = useLocalePath();

import { useSeo } from '~/utils/useSeo'
useSeo('fleet')
</script>