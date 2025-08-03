<template>
  <div>
    <Navbar />
    
    <CommonHero 
      :image="cover" 
      :page="$t('pages.about.partners.title')"
      :subtitle="$t('pages.about.partners.heroSubtitle')"
      :showTrustBadges="false"
    />

    <!-- Partners Introduction -->
    <section class="py-16">
      <div class="max-w-screen-xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ $t('pages.about.partners.intro.title') }}
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {{ $t('pages.about.partners.intro.description') }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-2xl font-semibold mb-6">{{ $t('pages.about.partners.intro.whyPartner.title') }}</h3>
            <div class="space-y-4">
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i class="bx bx-check text-white text-sm"></i>
                </div>
                <div>
                  <h4 class="font-semibold mb-2">{{ $t('pages.about.partners.intro.whyPartner.reliability.title') }}</h4>
                  <p class="text-gray-600">{{ $t('pages.about.partners.intro.whyPartner.reliability.description') }}</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i class="bx bx-check text-white text-sm"></i>
                </div>
                <div>
                  <h4 class="font-semibold mb-2">{{ $t('pages.about.partners.intro.whyPartner.quality.title') }}</h4>
                  <p class="text-gray-600">{{ $t('pages.about.partners.intro.whyPartner.quality.description') }}</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i class="bx bx-check text-white text-sm"></i>
                </div>
                <div>
                  <h4 class="font-semibold mb-2">{{ $t('pages.about.partners.intro.whyPartner.support.title') }}</h4>
                  <p class="text-gray-600">{{ $t('pages.about.partners.intro.whyPartner.support.description') }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <img 
              src="/assets/images/covers/business-trip.webp" 
              alt="Partnership Benefits" 
              class="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted Organizations -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-screen-xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ $t('pages.about.partners.trusted.title') }}
          </h2>
          <p class="text-lg text-gray-600">
            {{ $t('pages.about.partners.trusted.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Uzbek Culture Week -->
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="flex flex-col items-center text-center">
              <div class="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-6 p-4">
                <img 
                  src="/assets/images/partners/uzbek-culture.svg" 
                  alt="Uzbek Culture Week UK Logo" 
                  class="w-full h-full object-contain"
                />
              </div>
              <h3 class="text-xl font-semibold mb-4">
                <a 
                  href="https://www.uzbekculture.co.uk/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="hover:text-gold transition-colors"
                >
                  {{ $t('pages.about.partners.trusted.organizations.uzbekCulture.name') }}
                </a>
              </h3>
              <p class="text-gray-600 mb-4">{{ $t('pages.about.partners.trusted.organizations.uzbekCulture.description') }}</p>
              <p class="text-sm text-gold font-medium">{{ $t('pages.about.partners.trusted.organizations.uzbekCulture.service') }}</p>
            </div>
          </div>

          <!-- Tez Parcel -->
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="flex flex-col items-center text-center">
              <div class="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-6 p-4">
                <img 
                  src="/assets/images/partners/tezparcel.svg" 
                  alt="Tez Parcel Logo" 
                  class="w-full h-full object-contain"
                />
              </div>
              <h3 class="text-xl font-semibold mb-4">
                <a 
                  href="https://tezparcel.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="hover:text-gold transition-colors"
                >
                  {{ $t('pages.about.partners.trusted.organizations.tezParcel.name') }}
                </a>
              </h3>
              <p class="text-gray-600 mb-4">{{ $t('pages.about.partners.trusted.organizations.tezParcel.description') }}</p>
              <p class="text-sm text-gold font-medium">{{ $t('pages.about.partners.trusted.organizations.tezParcel.service') }}</p>
            </div>
          </div>

          <!-- Oshpaz -->
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="flex flex-col items-center text-center">
              <div class="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <!-- Logo placeholder - add oshpaz logo when available -->
                <i class="bx bx-restaurant text-4xl text-gray-400"></i>
              </div>
              <h3 class="text-xl font-semibold mb-4">
                <a 
                  href="https://oshpaz.co.uk/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="hover:text-gold transition-colors"
                >
                  {{ $t('pages.about.partners.trusted.organizations.oshpaz.name') }}
                </a>
              </h3>
              <p class="text-gray-600 mb-4">{{ $t('pages.about.partners.trusted.organizations.oshpaz.description') }}</p>
              <p class="text-sm text-gold font-medium">{{ $t('pages.about.partners.trusted.organizations.oshpaz.service') }}</p>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center mt-12">
          <p class="text-lg text-gray-600 mb-6">{{ $t('pages.about.partners.trusted.cta.text') }}</p>
          <NuxtLink
            :to="localePath('/contact-us')"
            class="inline-flex items-center px-8 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-colors"
          >
            {{ $t('pages.about.partners.trusted.cta.button') }}
            <i class="bx bx-right-arrow-alt ml-2"></i>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Partner Benefits -->
    <section class="py-16">
      <div class="max-w-screen-xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ $t('pages.about.partners.benefits.title') }}
          </h2>
          <p class="text-lg text-gray-600">
            {{ $t('pages.about.partners.benefits.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-money text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t('pages.about.partners.benefits.competitive.title') }}</h3>
            <p class="text-gray-600">{{ $t('pages.about.partners.benefits.competitive.description') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-support text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t('pages.about.partners.benefits.support.title') }}</h3>
            <p class="text-gray-600">{{ $t('pages.about.partners.benefits.support.description') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-trending-up text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t('pages.about.partners.benefits.growth.title') }}</h3>
            <p class="text-gray-600">{{ $t('pages.about.partners.benefits.growth.description') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-time text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t('pages.about.partners.benefits.availability.title') }}</h3>
            <p class="text-gray-600">{{ $t('pages.about.partners.benefits.availability.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Current Partners -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-screen-xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ $t('pages.about.partners.current.title') }}
          </h2>
          <p class="text-lg text-gray-600">
            {{ $t('pages.about.partners.current.subtitle') }}
          </p>
        </div>

        <!-- Partner Categories -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4 text-center">{{ $t('pages.about.partners.current.luxury.title') }}</h3>
            <div class="space-y-2 text-center">
              <p class="text-gray-600">{{ $t('pages.about.partners.current.luxury.hotels') }}</p>
              <p class="text-gray-600">{{ $t('pages.about.partners.current.luxury.restaurants') }}</p>
              <p class="text-gray-600">{{ $t('pages.about.partners.current.luxury.venues') }}</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4 text-center">{{ $t('pages.about.partners.current.corporate.title') }}</h3>
            <div class="space-y-2 text-center">
              <p class="text-gray-600">{{ $t('pages.about.partners.current.corporate.financial') }}</p>
              <p class="text-gray-600">{{ $t('pages.about.partners.current.corporate.consulting') }}</p>
              <p class="text-gray-600">{{ $t('pages.about.partners.current.corporate.technology') }}</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4 text-center">{{ $t('pages.about.partners.current.travel.title') }}</h3>
            <div class="space-y-2 text-center">
              <p class="text-gray-600">{{ $t('pages.about.partners.current.travel.agencies') }}</p>
              <p class="text-gray-600">{{ $t('pages.about.partners.current.travel.concierge') }}</p>
              <p class="text-gray-600">{{ $t('pages.about.partners.current.travel.airlines') }}</p>
            </div>
          </div>
        </div>

        <!-- Partnership Stats -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-4xl font-bold text-gold mb-2">150+</div>
            <p class="text-gray-600">{{ $t('pages.about.partners.current.stats.partners') }}</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-4xl font-bold text-gold mb-2">85%</div>
            <p class="text-gray-600">{{ $t('pages.about.partners.current.stats.retention') }}</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-4xl font-bold text-gold mb-2">24/7</div>
            <p class="text-gray-600">{{ $t('pages.about.partners.current.stats.support') }}</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-4xl font-bold text-gold mb-2">15+</div>
            <p class="text-gray-600">{{ $t('pages.about.partners.current.stats.years') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partnership Types -->
    <section class="py-16">
      <div class="max-w-screen-xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ $t('pages.about.partners.types.title') }}
          </h2>
          <p class="text-lg text-gray-600">
            {{ $t('pages.about.partners.types.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Corporate Partners -->
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="bx bx-buildings text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-center">{{ $t('pages.about.partners.types.corporate.title') }}</h3>
            <p class="text-gray-600 mb-6 text-center">{{ $t('pages.about.partners.types.corporate.description') }}</p>
            
            <div class="space-y-3">
              <div class="flex items-center text-sm text-gray-600">
                <i class="bx bx-check mr-2 text-gold"></i>
                <span>{{ $t('pages.about.partners.types.corporate.benefits.volumeDiscount') }}</span>
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <i class="bx bx-check mr-2 text-gold"></i>
                <span>{{ $t('pages.about.partners.types.corporate.benefits.priority') }}</span>
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <i class="bx bx-check mr-2 text-gold"></i>
                <span>{{ $t('pages.about.partners.types.corporate.benefits.account') }}</span>
              </div>
            </div>
          </div>

          <!-- Hotel Partners -->
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="bx bx-hotel text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-center">{{ $t('pages.about.partners.types.hotel.title') }}</h3>
            <p class="text-gray-600 mb-6 text-center">{{ $t('pages.about.partners.types.hotel.description') }}</p>
            
            <div class="space-y-3">
              <div class="flex items-center text-sm text-gray-600">
                <i class="bx bx-check mr-2 text-gold"></i>
                <span>{{ $t('pages.about.partners.types.hotel.benefits.concierge') }}</span>
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <i class="bx bx-check mr-2 text-gold"></i>
                <span>{{ $t('pages.about.partners.types.hotel.benefits.commission') }}</span>
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <i class="bx bx-check mr-2 text-gold"></i>
                <span>{{ $t('pages.about.partners.types.hotel.benefits.branding') }}</span>
              </div>
            </div>
          </div>

          <!-- Event Partners -->
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="bx bx-calendar-event text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-center">{{ $t('pages.about.partners.types.event.title') }}</h3>
            <p class="text-gray-600 mb-6 text-center">{{ $t('pages.about.partners.types.event.description') }}</p>
            
            <div class="space-y-3">
              <div class="flex items-center text-sm text-gray-600">
                <i class="bx bx-check mr-2 text-gold"></i>
                <span>{{ $t('pages.about.partners.types.event.benefits.coordination') }}</span>
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <i class="bx bx-check mr-2 text-gold"></i>
                <span>{{ $t('pages.about.partners.types.event.benefits.packages') }}</span>
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <i class="bx bx-check mr-2 text-gold"></i>
                <span>{{ $t('pages.about.partners.types.event.benefits.logistics') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partnership Process -->
    <section class="py-16">
      <div class="max-w-screen-xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ $t('pages.about.partners.process.title') }}
          </h2>
          <p class="text-lg text-gray-600">
            {{ $t('pages.about.partners.process.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
              1
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t('pages.about.partners.process.steps.contact.title') }}</h3>
            <p class="text-gray-600">{{ $t('pages.about.partners.process.steps.contact.description') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
              2
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t('pages.about.partners.process.steps.discuss.title') }}</h3>
            <p class="text-gray-600">{{ $t('pages.about.partners.process.steps.discuss.description') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
              3
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t('pages.about.partners.process.steps.agreement.title') }}</h3>
            <p class="text-gray-600">{{ $t('pages.about.partners.process.steps.agreement.description') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
              4
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t('pages.about.partners.process.steps.launch.title') }}</h3>
            <p class="text-gray-600">{{ $t('pages.about.partners.process.steps.launch.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gray-900 text-white">
      <div class="max-w-screen-xl mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ $t('pages.about.partners.cta.title') }}
        </h2>
        <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          {{ $t('pages.about.partners.cta.description') }}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            :to="localePath('/contact-us')"
            class="px-8 py-4 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-colors"
          >
            {{ $t('pages.about.partners.cta.becomePartner') }}
          </NuxtLink>
          <a
            href="mailto:partnerships@silkride.co.uk"
            class="px-8 py-4 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-black transition-colors"
          >
            {{ $t('pages.about.partners.cta.emailUs') }}
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import cover from "@/assets/images/covers/business-trip.webp";
import { useI18n, useLocalePath } from '#imports';
import { useSeo } from '~/utils/useSeo'

const { t } = useI18n();
const localePath = useLocalePath();

useSeo('partners')
</script>