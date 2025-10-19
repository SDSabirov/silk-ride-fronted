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
    <section class="relative py-20 bg-white overflow-hidden">
      <div class="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl"></div>

      <div class="relative max-w-screen-xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold/10 mb-4">
              <i class="bx bx-car text-gold text-xl"></i>
            </div>
            <h3 class="text-4xl md:text-5xl font-bold text-gray-900 mb-2">20+</h3>
            <p class="text-sm text-gray-600">{{ $t('pages.fleet.stats.vehicles') }}</p>
          </div>

          <div class="text-center">
            <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold/10 mb-4">
              <i class="bx bx-shield-check text-gold text-xl"></i>
            </div>
            <h3 class="text-4xl md:text-5xl font-bold text-gray-900 mb-2">100%</h3>
            <p class="text-sm text-gray-600">{{ $t('pages.fleet.stats.maintained') }}</p>
          </div>

          <div class="text-center">
            <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold/10 mb-4">
              <i class="bx bx-time text-gold text-xl"></i>
            </div>
            <h3 class="text-4xl md:text-5xl font-bold text-gray-900 mb-2">24/7</h3>
            <p class="text-sm text-gray-600">{{ $t('pages.fleet.stats.availability') }}</p>
          </div>

          <div class="text-center">
            <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold/10 mb-4">
              <i class="bx bx-star text-gold text-xl"></i>
            </div>
            <h3 class="text-4xl md:text-5xl font-bold text-gray-900 mb-2">5★</h3>
            <p class="text-sm text-gray-600">{{ $t('pages.fleet.stats.rating') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Fleet Grid -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-screen-xl mx-auto px-6">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div class="w-16 h-1 bg-gold mb-6 mx-auto"></div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {{ $t('pages.fleet.fleetTitle') }}
          </h2>
          <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {{ $t('pages.fleet.fleetDescription') }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Mercedes E-Class -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div class="relative h-64 overflow-hidden">
              <img
                src="/assets/images/eclass.webp"
                alt="Mercedes E-Class"
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 left-4">
                <span class="bg-gold/90 backdrop-blur-sm text-black px-3 py-1.5 rounded-lg text-xs font-semibold">
                  {{ $t('pages.fleet.popular') }}
                </span>
              </div>
            </div>

            <div class="p-8">
              <h3 class="text-2xl font-bold mb-3 text-gray-900">{{ $t('servicesSection.eClass.title') }}</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ $t('servicesSection.eClass.description') }}</p>

              <div class="space-y-3 mb-6">
                <div class="flex items-center text-sm text-gray-600">
                  <div class="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center mr-3">
                    <i class="bx bx-user text-gold text-base"></i>
                  </div>
                  <span>{{ $t('pages.fleet.capacity.eClass') }}</span>
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <div class="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center mr-3">
                    <i class="bx bx-briefcase text-gold text-base"></i>
                  </div>
                  <span>{{ $t('pages.fleet.luggage.large') }}</span>
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <div class="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center mr-3">
                    <i class="bx bx-wifi text-gold text-base"></i>
                  </div>
                  <span>{{ $t('pages.fleet.features.wifi') }}</span>
                </div>
              </div>

              <div class="border-t border-gray-100 pt-5 mb-6">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm text-gray-500">{{ $t('priceGuide.hourly.title') }}</span>
                  <span class="font-bold text-gray-900">£50/hour</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-500">{{ $t('priceGuide.heathrow') }}</span>
                  <span class="font-bold text-gray-900">£120</span>
                </div>
              </div>

              <div class="flex gap-3">
                <NuxtLink
                  :to="localePath('/booking')"
                  class="flex-1 bg-gold text-black text-center py-3 rounded-lg text-sm font-semibold hover:bg-gold/90 transition-colors"
                >
                  {{ $t('servicesSection.bookNow') }}
                </NuxtLink>
                <NuxtLink
                  :to="localePath('/fleet/mercedes-e-class')"
                  class="flex-1 border-2 border-gray-200 text-gray-700 text-center py-3 rounded-lg text-sm font-semibold hover:border-gray-900 hover:text-gray-900 transition-colors"
                >
                  {{ $t('servicesSection.learnMore') }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Mercedes S-Class -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div class="relative h-64 overflow-hidden">
              <img
                src="/assets/images/sclassBackground.webp"
                alt="Mercedes S-Class"
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 left-4">
                <span class="bg-gray-900/90 backdrop-blur-sm text-gold px-3 py-1.5 rounded-lg text-xs font-semibold">
                  {{ $t('pages.fleet.luxury') }}
                </span>
              </div>
            </div>

            <div class="p-8">
              <h3 class="text-2xl font-bold mb-3 text-gray-900">{{ $t('servicesSection.sClass.title') }}</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ $t('servicesSection.sClass.description') }}</p>

              <div class="space-y-3 mb-6">
                <div class="flex items-center text-sm text-gray-600">
                  <div class="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center mr-3">
                    <i class="bx bx-user text-gold text-base"></i>
                  </div>
                  <span>{{ $t('pages.fleet.capacity.sClass') }}</span>
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <div class="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center mr-3">
                    <i class="bx bx-briefcase text-gold text-base"></i>
                  </div>
                  <span>{{ $t('pages.fleet.luggage.large') }}</span>
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <div class="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center mr-3">
                    <i class="bx bx-star text-gold text-base"></i>
                  </div>
                  <span>{{ $t('pages.fleet.features.premium') }}</span>
                </div>
              </div>

              <div class="border-t border-gray-100 pt-5 mb-6">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm text-gray-500">{{ $t('priceGuide.hourly.title') }}</span>
                  <span class="font-bold text-gray-900">£75/hour</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-500">{{ $t('priceGuide.heathrow') }}</span>
                  <span class="font-bold text-gray-900">£160</span>
                </div>
              </div>

              <div class="flex gap-3">
                <NuxtLink
                  :to="localePath('/booking')"
                  class="flex-1 bg-gold text-black text-center py-3 rounded-lg text-sm font-semibold hover:bg-gold/90 transition-colors"
                >
                  {{ $t('servicesSection.bookNow') }}
                </NuxtLink>
                <NuxtLink
                  :to="localePath('/fleet/mercedes-s-class')"
                  class="flex-1 border-2 border-gray-200 text-gray-700 text-center py-3 rounded-lg text-sm font-semibold hover:border-gray-900 hover:text-gray-900 transition-colors"
                >
                  {{ $t('servicesSection.learnMore') }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Mercedes V-Class -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div class="relative h-64 overflow-hidden">
              <img
                src="/assets/images/covers/business-trip.webp"
                alt="Mercedes V-Class"
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 left-4">
                <span class="bg-gray-700/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold">
                  {{ $t('pages.fleet.spacious') }}
                </span>
              </div>
            </div>

            <div class="p-8">
              <h3 class="text-2xl font-bold mb-3 text-gray-900">{{ $t('servicesSection.vClass.title') }}</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ $t('servicesSection.vClass.description') }}</p>

              <div class="space-y-3 mb-6">
                <div class="flex items-center text-sm text-gray-600">
                  <div class="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center mr-3">
                    <i class="bx bx-group text-gold text-base"></i>
                  </div>
                  <span>{{ $t('pages.fleet.capacity.vClass') }}</span>
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <div class="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center mr-3">
                    <i class="bx bx-briefcase text-gold text-base"></i>
                  </div>
                  <span>{{ $t('pages.fleet.luggage.extra') }}</span>
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <div class="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center mr-3">
                    <i class="bx bx-home text-gold text-base"></i>
                  </div>
                  <span>{{ $t('pages.fleet.features.spacious') }}</span>
                </div>
              </div>

              <div class="border-t border-gray-100 pt-5 mb-6">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm text-gray-500">{{ $t('priceGuide.hourly.title') }}</span>
                  <span class="font-bold text-gray-900">£75/hour</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-500">{{ $t('priceGuide.heathrow') }}</span>
                  <span class="font-bold text-gray-900">£160</span>
                </div>
              </div>

              <div class="flex gap-3">
                <NuxtLink
                  :to="localePath('/booking')"
                  class="flex-1 bg-gold text-black text-center py-3 rounded-lg text-sm font-semibold hover:bg-gold/90 transition-colors"
                >
                  {{ $t('servicesSection.bookNow') }}
                </NuxtLink>
                <NuxtLink
                  :to="localePath('/fleet/mercedes-v-class')"
                  class="flex-1 border-2 border-gray-200 text-gray-700 text-center py-3 rounded-lg text-sm font-semibold hover:border-gray-900 hover:text-gray-900 transition-colors"
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
    <section class="relative py-24 bg-white overflow-hidden">
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl"></div>

      <div class="relative max-w-screen-xl mx-auto px-6">
        <div class="text-center mb-16">
          <div class="w-16 h-1 bg-gold mb-6 mx-auto"></div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {{ $t('pages.fleet.featuresTitle') }}
          </h2>
          <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {{ $t('pages.fleet.featuresDescription') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 mb-6">
              <i class="bx bx-shield-check text-gold text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">{{ $t('pages.fleet.features.safety') }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ $t('pages.fleet.features.safetyDesc') }}</p>
          </div>

          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 mb-6">
              <i class="bx bx-leaf text-gold text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">{{ $t('pages.fleet.features.eco') }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ $t('pages.fleet.features.ecoDesc') }}</p>
          </div>

          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 mb-6">
              <i class="bx bx-wifi text-gold text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">{{ $t('pages.fleet.features.connectivity') }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ $t('pages.fleet.features.connectivityDesc') }}</p>
          </div>

          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 mb-6">
              <i class="bx bx-cog text-gold text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">{{ $t('pages.fleet.features.maintenance') }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ $t('pages.fleet.features.maintenanceDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Fleet Standards Section -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-screen-xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="w-16 h-1 bg-gold mb-6"></div>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {{ $t('pages.fleet.standardsTitle') }}
            </h2>
            <p class="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              {{ $t('pages.fleet.standardsDescription') }}
            </p>

            <div class="space-y-8">
              <div class="flex items-start gap-5">
                <div class="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <i class="bx bx-check text-gold text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2 text-gray-900">{{ $t('pages.fleet.standards.regular') }}</h3>
                  <p class="text-gray-600 leading-relaxed">{{ $t('pages.fleet.standards.regularDesc') }}</p>
                </div>
              </div>

              <div class="flex items-start gap-5">
                <div class="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <i class="bx bx-check text-gold text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2 text-gray-900">{{ $t('pages.fleet.standards.cleaning') }}</h3>
                  <p class="text-gray-600 leading-relaxed">{{ $t('pages.fleet.standards.cleaningDesc') }}</p>
                </div>
              </div>

              <div class="flex items-start gap-5">
                <div class="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <i class="bx bx-check text-gold text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2 text-gray-900">{{ $t('pages.fleet.standards.inspection') }}</h3>
                  <p class="text-gray-600 leading-relaxed">{{ $t('pages.fleet.standards.inspectionDesc') }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="absolute -bottom-6 -right-6 w-full h-full bg-gold/10 rounded-2xl -z-10"></div>
            <img
              src="/assets/images/covers/fleet.webp"
              alt="Fleet Standards"
              class="relative w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gray-900">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          {{ $t('pages.fleet.ctaTitle') }}
        </h2>
        <p class="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
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
            class="px-8 py-4 border-2 border-gray-700 text-white font-semibold rounded-lg hover:border-gray-500 transition-colors"
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