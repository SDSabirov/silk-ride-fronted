<template>
  <section class="py-24 bg-stone-100" data-section="services">
    <div class="max-w-screen-xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <p class="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          {{ $t('landing.fleet.tagline') }}
        </p>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          {{ $t('landing.fleet.title') }}
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {{ $t('landing.fleet.subtitle') }}
        </p>
      </div>

      <!-- Service Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <!-- Airport Transfers -->
        <article class="group h-full">
          <div class="service-card h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div class="h-52 relative overflow-hidden">
              <NuxtImg
                src="/images/vclassjett.webp"
                alt="Airport Transfer Service"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width="600"
                height="400"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1.5 bg-gold text-black text-xs font-semibold rounded-full">
                  {{ $t('landing.fleet.airport.badge') }}
                </span>
              </div>
            </div>
            <div class="flex-1 flex flex-col p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                {{ $t('landing.fleet.airport.title') }}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                {{ $t('landing.fleet.airport.description') }}
              </p>
              <div class="flex items-baseline gap-2 mb-6 pb-6 border-b border-gray-100">
                <span class="text-2xl font-bold text-gray-900">{{ $t('landing.fleet.airport.price') }}</span>
                <span class="text-sm text-gray-500">{{ $t('landing.fleet.airport.route') }}</span>
              </div>
              <div class="flex gap-3">
                <NuxtLink
                  :to="localePath('/services/airport-transfers')"
                  class="flex-1 text-center py-3 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  {{ $t('common.learnMore') }}
                </NuxtLink>
                <NuxtLink
                  :to="localePath('/booking')"
                  class="flex-1 text-center py-3 bg-gold text-black text-sm font-semibold rounded-lg hover:bg-gold/90 transition-colors"
                >
                  {{ $t('common.bookNow') }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </article>

        <!-- Corporate Travel -->
        <article class="group h-full">
          <div class="service-card h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div class="h-52 relative overflow-hidden">
              <NuxtImg
                src="/images/covers/business-trip.webp"
                alt="Corporate Travel Service"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width="600"
                height="400"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1.5 bg-white/90 text-gray-900 text-xs font-semibold rounded-full">
                  {{ $t('landing.fleet.corporate.badge') }}
                </span>
              </div>
            </div>
            <div class="flex-1 flex flex-col p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                {{ $t('landing.fleet.corporate.title') }}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                {{ $t('landing.fleet.corporate.description') }}
              </p>
              <div class="flex items-baseline gap-2 mb-6 pb-6 border-b border-gray-100">
                <span class="text-2xl font-bold text-gray-900">{{ $t('landing.fleet.corporate.price') }}</span>
                <span class="text-sm text-gray-500">{{ $t('landing.fleet.corporate.minimum') }}</span>
              </div>
              <div class="flex gap-3">
                <NuxtLink
                  :to="localePath('/services/corporate-travel')"
                  class="flex-1 text-center py-3 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  {{ $t('common.learnMore') }}
                </NuxtLink>
                <NuxtLink
                  :to="localePath('/booking')"
                  class="flex-1 text-center py-3 bg-gold text-black text-sm font-semibold rounded-lg hover:bg-gold/90 transition-colors"
                >
                  {{ $t('common.bookNow') }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </article>

        <!-- Wedding & Events -->
        <article class="group h-full">
          <div class="service-card h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div class="h-52 relative overflow-hidden">
              <NuxtImg
                src="/images/covers/wedding.webp"
                alt="Wedding & Event Service"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width="600"
                height="400"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1.5 bg-gold text-black text-xs font-semibold rounded-full">
                  {{ $t('landing.fleet.wedding.badge') }}
                </span>
              </div>
            </div>
            <div class="flex-1 flex flex-col p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                {{ $t('landing.fleet.wedding.title') }}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                {{ $t('landing.fleet.wedding.description') }}
              </p>
              <div class="flex items-baseline gap-2 mb-6 pb-6 border-b border-gray-100">
                <span class="text-2xl font-bold text-gray-900">{{ $t('landing.fleet.wedding.customQuote') }}</span>
                <span class="text-sm text-gray-500">{{ $t('landing.fleet.wedding.packages') }}</span>
              </div>
              <div class="flex gap-3">
                <NuxtLink
                  :to="localePath('/services/wedding-chauffeur')"
                  class="flex-1 text-center py-3 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  {{ $t('common.learnMore') }}
                </NuxtLink>
                <NuxtLink
                  :to="localePath('/contact-us')"
                  class="flex-1 text-center py-3 bg-gold text-black text-sm font-semibold rounded-lg hover:bg-gold/90 transition-colors"
                >
                  {{ $t('commonHero.getQuote') }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- Fleet Overview -->
      <div class="mb-24">
        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900">
            {{ $t('landing.fleet.fleetTitle') }}
          </h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- E-Class -->
          <NuxtLink
            :to="localePath('/fleet/mercedes-e-class')"
            class="group fleet-card"
          >
            <div class="relative h-48 overflow-hidden rounded-t-xl">
              <NuxtImg
                src="/images/eclass.webp"
                alt="Mercedes E-Class"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width="500"
                height="300"
              />
              <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
            </div>
            <div class="p-5 bg-white rounded-b-xl border border-t-0 border-gray-100">
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-lg font-bold text-gray-900">{{ $t('landing.fleet.eclass.title') }}</h4>
                <i class="bx bx-right-arrow-alt text-xl text-gray-400 group-hover:text-gold group-hover:translate-x-1 transition-all"></i>
              </div>
              <p class="text-gray-600 text-sm mb-4">{{ $t('landing.fleet.eclass.description') }}</p>
              <div class="flex gap-2">
                <span class="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">{{ $t('landing.fleet.eclass.capacity') }}</span>
                <span class="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">{{ $t('landing.fleet.eclass.comfort') }}</span>
              </div>
            </div>
          </NuxtLink>

          <!-- S-Class -->
          <NuxtLink
            :to="localePath('/fleet/mercedes-s-class')"
            class="group fleet-card"
          >
            <div class="relative h-48 overflow-hidden rounded-t-xl">
              <NuxtImg
                src="/images/sclassBackground.webp"
                alt="Mercedes S-Class"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width="500"
                height="300"
              />
              <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              <div class="absolute top-3 right-3">
                <span class="px-2 py-1 bg-gold text-black text-xs font-semibold rounded">Premium</span>
              </div>
            </div>
            <div class="p-5 bg-white rounded-b-xl border border-t-0 border-gray-100">
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-lg font-bold text-gray-900">{{ $t('landing.fleet.sclass.title') }}</h4>
                <i class="bx bx-right-arrow-alt text-xl text-gray-400 group-hover:text-gold group-hover:translate-x-1 transition-all"></i>
              </div>
              <p class="text-gray-600 text-sm mb-4">{{ $t('landing.fleet.sclass.description') }}</p>
              <div class="flex gap-2">
                <span class="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">{{ $t('landing.fleet.sclass.capacity') }}</span>
                <span class="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">{{ $t('landing.fleet.sclass.luxury') }}</span>
              </div>
            </div>
          </NuxtLink>

          <!-- V-Class -->
          <NuxtLink
            :to="localePath('/fleet/mercedes-v-class')"
            class="group fleet-card"
          >
            <div class="relative h-48 overflow-hidden rounded-t-xl">
              <NuxtImg
                src="/images/vclassjett.webp"
                alt="Mercedes V-Class"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width="500"
                height="300"
              />
              <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              <div class="absolute top-3 right-3">
                <span class="px-2 py-1 bg-gray-900 text-white text-xs font-semibold rounded">Groups</span>
              </div>
            </div>
            <div class="p-5 bg-white rounded-b-xl border border-t-0 border-gray-100">
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-lg font-bold text-gray-900">{{ $t('landing.fleet.vclass.title') }}</h4>
                <i class="bx bx-right-arrow-alt text-xl text-gray-400 group-hover:text-gold group-hover:translate-x-1 transition-all"></i>
              </div>
              <p class="text-gray-600 text-sm mb-4">{{ $t('landing.fleet.vclass.description') }}</p>
              <div class="flex gap-2">
                <span class="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">{{ $t('landing.fleet.vclass.capacity') }}</span>
                <span class="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">{{ $t('landing.fleet.vclass.luggage') }}</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Custom Request CTA -->
      <div class="relative overflow-hidden rounded-2xl bg-gray-900 p-10 md:p-14">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_50%)]"></div>
        <div class="relative z-10 text-center">
          <h3 class="text-2xl md:text-3xl font-bold mb-4 text-white">
            {{ $t('servicesSection.customRequest.title') }}
          </h3>
          <p class="text-gray-400 mb-8 max-w-xl mx-auto">
            {{ $t('servicesSection.customRequest.description') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+447512905514"
              class="inline-flex items-center justify-center gap-2 bg-gold text-black px-8 py-3.5 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
            >
              <i class="bx bx-phone text-lg"></i>
              +44 7512 905514
            </a>
            <NuxtLink
              :to="localePath('/contact-us')"
              class="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              {{ $t('common.getCustomQuote') }}
            </NuxtLink>
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

<style scoped>
.service-card {
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.fleet-card {
  display: block;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.fleet-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}
</style>
