<template>
  <div>
    <Navbar />

    <CommonHero :image="heroImage" :page="$t('pages.services.cards.longDistance.title')" />

    <CommonPageIntro
      :title="$t('pages.services.cards.longDistance.title')"
      :paragraph="$t('pages.services.cards.longDistance.description')"
    />

    <!-- Service Details Section -->
    <section class="max-w-screen-xl mx-auto py-16 px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-6">Luxury Long-Distance Travel</h2>
          <p class="text-lg text-gray-600 mb-6">
            Discover the ultimate in luxury travel with our long-distance chauffeur service. 
            From historic English countryside to vibrant European capitals, travel in supreme 
            comfort with our professional chauffeurs and premium Mercedes fleet.
          </p>
          
          <div class="space-y-4">
            <div v-for="(bullet, index) in serviceBullets" :key="index" class="flex items-start space-x-3">
              <div class="h-3 w-3 bg-gold rotate-45 mt-2 flex-shrink-0"></div>
              <span class="text-gray-700">{{ bullet }}</span>
            </div>
          </div>

          <div class="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">Popular Destinations</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>The Cotswolds</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>Stonehenge</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>Bath & Bristol</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>Oxford & Cambridge</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>Edinburgh & Scotland</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>Amsterdam</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>Paris</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>Brussels</span>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:order-first">
          <img
            :src="serviceImage"
            alt="UK and Europe Travel Service"
            class="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

    <!-- Tour Types Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Tour & Travel Options</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-map text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-center">Bespoke Private Tours</h3>
            <p class="text-gray-600 text-center mb-4">Fully customized itineraries designed around your interests and preferences.</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Historic castles & stately homes</li>
              <li>• Cultural landmarks & museums</li>
              <li>• Scenic countryside routes</li>
              <li>• Whisky & wine tours</li>
            </ul>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-road text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-center">Luxury Road Trips</h3>
            <p class="text-gray-600 text-center mb-4">Multi-day journeys through the UK's most beautiful regions.</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Lake District & Yorkshire Dales</li>
              <li>• Scottish Highlands</li>
              <li>• Welsh valleys & coastline</li>
              <li>• Cornwall & Devon</li>
            </ul>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-world text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-center">European Adventures</h3>
            <p class="text-gray-600 text-center mb-4">Cross-border luxury travel to European destinations.</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Paris city breaks</li>
              <li>• Amsterdam canal tours</li>
              <li>• Belgian chocolate tours</li>
              <li>• German Christmas markets</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">What's Included in Your Journey</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-car text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Luxury Vehicle</h3>
            <p class="text-gray-600">Premium Mercedes S-Class or V-Class with climate control and premium comfort.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-user text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Expert Chauffeur</h3>
            <p class="text-gray-600">Knowledgeable local guides who know the best routes and hidden gems.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-wifi text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Premium Amenities</h3>
            <p class="text-gray-600">Wi-Fi, refreshments, phone chargers, and newspapers for your comfort.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-calendar text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Flexible Itinerary</h3>
            <p class="text-gray-600">Adapt your schedule on the go with spontaneous stops and detours.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-xl mx-auto px-6 text-center">
        <blockquote class="text-2xl font-light italic text-gray-700 mb-6">
          "An absolutely magical journey through the Cotswolds. Our chauffeur was incredibly knowledgeable and made the trip unforgettable. The Mercedes S-Class was pure luxury."
        </blockquote>
        <cite class="text-gold font-semibold">- Sarah M., Private Tour Client</cite>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16">
      <div class="max-w-screen-xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">Plan Your Luxury Adventure</h2>
        <p class="text-lg text-gray-600 mb-8">Create memories that last a lifetime with our bespoke travel experiences.</p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            :to="localePath('/booking')"
            class="px-8 py-3 bg-gold text-black font-semibold rounded hover:bg-yellow-500 transition"
          >
            Plan Your Journey
          </NuxtLink>
          <NuxtLink
            :to="localePath('/contact-us')"
            class="px-8 py-3 border border-gold text-gold font-semibold rounded hover:bg-gold hover:text-black transition"
          >
            Custom Itinerary
          </NuxtLink>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { useSeo } from '~/utils/useSeo'
import { useLocalePath, useI18n } from '#imports'
import { computed } from 'vue'
import heroImage from '@/assets/images/covers/assist.webp'
import serviceImage from '@/assets/images/covers/assist.webp'

const { t } = useI18n()
const localePath = useLocalePath()

useSeo('ukEuropeTravel')

const serviceBullets = computed(() => {
  const bullets = []
  for (let i = 0; i < 10; i++) {
    const key = `pages.services.cards.longDistance.bullets[${i}]`
    const value = t(key)
    if (value === key) break
    bullets.push(value)
  }
  return bullets
})

const ukEuropeTravelSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "UK & Europe Luxury Travel Service",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Silk Ride Chauffeur Services",
    "url": "https://silkride.co.uk",
    "telephone": "+44 7512 905514",
    "image": [
      "https://silkride.co.uk/logo.svg",
      "https://silkride.co.uk/vclassSide.webp",
      "https://silkride.co.uk/sclassSide.webp",
      "https://silkride.co.uk/eclassSide.webp"
    ]
  },
  "touristType": "Luxury Traveler",
  "itinerary": [
    {
      "@type": "Place",
      "name": "The Cotswolds"
    },
    {
      "@type": "Place", 
      "name": "Stonehenge"
    },
    {
      "@type": "Place",
      "name": "Paris"
    },
    {
      "@type": "Place",
      "name": "Amsterdam"
    }
  ],
  "description": "Luxury long-distance chauffeur service for UK and European travel. Bespoke private tours, luxury road trips, and cross-border travel with professional chauffeurs."
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(ukEuropeTravelSchema)
    }
  ]
})
</script>