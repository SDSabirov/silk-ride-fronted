<template>
  <div>
    <Navbar />
    
    <CommonHero 
      :image="cover" 
      :page="t('pages.about.title')"
      :subtitle="t('pages.about.heroSubtitle')"
      :showTrustBadges="false"
    />

    <!-- Company Introduction -->
    <section class="py-16">
      <div class="max-w-screen-xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {{ t('pages.about.intro.title') }}
            </h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              {{ t('pages.about.intro.paragraph') }}
            </p>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              {{ t('pages.about.intro.extended') }}
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink
                :to="localePath('/booking')"
                class="px-8 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-colors"
              >
                {{ t('pages.about.bookNow') }}
              </NuxtLink>
              <NuxtLink
                :to="localePath('/contact-us')"
                class="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gold hover:text-gold transition-colors"
              >
                {{ t('pages.about.contactUs') }}
              </NuxtLink>
            </div>
          </div>
          
          <div class="relative">
            <img 
              :src="cover" 
              alt="About Silk Ride" 
              class="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div class="absolute -bottom-6 -right-6 bg-gold text-black p-6 rounded-lg shadow-lg">
              <div class="text-center">
                <div class="text-3xl font-bold">10+</div>
                <div class="text-sm font-medium">{{ t('pages.about.yearsExperience') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Stats -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-screen-xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-4xl font-bold text-gold mb-2">50,000+</div>
            <p class="text-gray-600">{{ t('pages.about.stats.customers') }}</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-4xl font-bold text-gold mb-2">10+</div>
            <p class="text-gray-600">{{ t('pages.about.stats.vehicles') }}</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-4xl font-bold text-gold mb-2">24/7</div>
            <p class="text-gray-600">{{ t('pages.about.stats.availability') }}</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-4xl font-bold text-gold mb-2">99%</div>
            <p class="text-gray-600">{{ t('pages.about.stats.satisfaction') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-16">
      <div class="max-w-screen-xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ t('pages.about.story.title') }}
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ t('pages.about.story.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div>
              <h3 class="text-2xl font-semibold mb-4">{{ t('pages.about.story.founding.title') }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ t('pages.about.story.founding.text') }}</p>
            </div>
            
            <div>
              <h3 class="text-2xl font-semibold mb-4">{{ t('pages.about.story.growth.title') }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ t('pages.about.story.growth.text') }}</p>
            </div>
            
            <div>
              <h3 class="text-2xl font-semibold mb-4">{{ t('pages.about.story.future.title') }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ t('pages.about.story.future.text') }}</p>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <img 
              src="/assets/images/eclass.webp" 
              alt="Mercedes Fleet" 
              class="w-full h-48 object-cover rounded-lg"
            />
            <img 
              src="/assets/images/sclass.webp" 
              alt="Luxury Service" 
              class="w-full h-48 object-cover rounded-lg mt-8"
            />
            <img 
              src="/assets/images/covers/business-trip.webp" 
              alt="Professional Chauffeurs" 
              class="w-full h-48 object-cover rounded-lg -mt-8"
            />
            <img 
              src="/assets/images/covers/fleet.webp" 
              alt="Premium Experience" 
              class="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-screen-xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ t('pages.about.values.title') }}
          </h2>
          <p class="text-lg text-gray-600">
            {{ t('pages.about.values.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="bx bx-diamond text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ t('pages.about.values.luxury.title') }}</h3>
            <p class="text-gray-600">{{ t('pages.about.values.luxury.description') }}</p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="bx bx-shield-check text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ t('pages.about.values.reliability.title') }}</h3>
            <p class="text-gray-600">{{ t('pages.about.values.reliability.description') }}</p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="bx bx-heart text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ t('pages.about.values.service.title') }}</h3>
            <p class="text-gray-600">{{ t('pages.about.values.service.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Standards & Certifications -->
    <section class="py-16">
      <div class="max-w-screen-xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ t('pages.about.standards.title') }}
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ t('pages.about.standards.description') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <!-- License Badge -->
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-certification text-white text-2xl"></i>
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ t('pages.about.standards.badges.licenceTitle') }}</h3>
            <p class="text-sm text-gray-600">{{ t('pages.about.standards.badges.licenceDesc') }}</p>
          </div>

          <!-- Chauffeur Badge -->
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-id-card text-white text-2xl"></i>
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ t('pages.about.standards.badges.chauffeurTitle') }}</h3>
            <p class="text-sm text-gray-600">{{ t('pages.about.standards.badges.chauffeurDesc') }}</p>
          </div>

          <!-- Background Check Badge -->
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-check-shield text-white text-2xl"></i>
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ t('pages.about.standards.badges.checkTitle') }}</h3>
            <p class="text-sm text-gray-600">{{ t('pages.about.standards.badges.checkDesc') }}</p>
          </div>

          <!-- Experience Badge -->
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-award text-white text-2xl"></i>
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ t('pages.about.standards.badges.experienceTitle') }}</h3>
            <p class="text-sm text-gray-600">{{ t('pages.about.standards.badges.experienceDesc') }}</p>
          </div>
        </div>

        <!-- Safety Statement -->
        <div class="bg-gray-900 text-white p-8 rounded-lg text-center">
          <h3 class="text-2xl font-bold mb-4">{{ t('pages.about.standards.safetyTitle') }}</h3>
          <p class="text-lg text-gray-300 max-w-4xl mx-auto">{{ t('pages.about.standards.safetyParagraph') }}</p>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-screen-xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ t('pages.about.team.title') }}
          </h2>
          <p class="text-lg text-gray-600">
            {{ t('pages.about.team.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-24 h-24 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-user text-white text-3xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ t('pages.about.team.chauffeurs.title') }}</h3>
            <p class="text-gray-600">{{ t('pages.about.team.chauffeurs.description') }}</p>
          </div>

          <div class="text-center">
            <div class="w-24 h-24 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-phone text-white text-3xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ t('pages.about.team.support.title') }}</h3>
            <p class="text-gray-600">{{ t('pages.about.team.support.description') }}</p>
          </div>

          <div class="text-center">
            <div class="w-24 h-24 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-cog text-white text-3xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ t('pages.about.team.maintenance.title') }}</h3>
            <p class="text-gray-600">{{ t('pages.about.team.maintenance.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gray-900 text-white">
      <div class="max-w-screen-xl mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ t('pages.about.cta.title') }}
        </h2>
        <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          {{ t('pages.about.cta.description') }}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            :to="localePath('/booking')"
            class="px-8 py-4 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-colors"
          >
            {{ t('pages.about.cta.bookNow') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/fleet')"
            class="px-8 py-4 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-black transition-colors"
          >
            {{ t('pages.about.cta.viewFleet') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
const cover = "/images/covers/about-us.webp"
import { useI18n, useLocalePath } from '#imports';
import { useSeo } from '~/utils/useSeo'

const { t } = useI18n();
const localePath = useLocalePath();

useSeo('about')
</script>
