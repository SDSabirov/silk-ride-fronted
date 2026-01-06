<template>
  <div>
    <Navbar />

    <CommonHero :image="heroImage" :page="$t('pages.services.cards.event.title')" />

    <CommonPageIntro
      :title="$t('pages.services.cards.event.title')"
      :paragraph="$t('pages.services.cards.event.description')"
    />

    <!-- Service Details Section -->
    <section class="max-w-screen-2xl mx-auto py-16 px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-6">Luxury Event Transportation</h2>
          <p class="text-lg text-gray-600 mb-6">
            Arrive in style at any occasion with Silk Ride's premium event chauffeur service. 
            Whether it's a corporate gala, sporting event, concert, or private party, we ensure 
            your transportation is as memorable as the event itself.
          </p>
          
          <div class="space-y-4">
            <div v-for="(bullet, index) in serviceBullets" :key="index" class="flex items-start space-x-3">
              <div class="h-3 w-3 bg-gold rotate-45 mt-2 flex-shrink-0"></div>
              <span class="text-gray-700">{{ bullet }}</span>
            </div>
          </div>

          <div class="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">Event Types We Serve</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>Corporate Events & Galas</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>Award Ceremonies</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>Concerts & Theatre</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>Sporting Events</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>Private Parties</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>Product Launches</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>Fashion Shows</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>Art Exhibitions</span>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:order-first">
          <img
            :src="serviceImage"
            alt="Event Chauffeur Service"
            class="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

    <!-- Popular Events Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Popular London Events We Serve</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-football text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Wembley Stadium</h3>
            <p class="text-gray-600">Football matches, concerts, and major sporting events. Skip the crowds with luxury transport.</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-music text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Royal Albert Hall</h3>
            <p class="text-gray-600">Classical concerts, award shows, and prestigious events in London's most iconic venue.</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-trophy text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Wimbledon</h3>
            <p class="text-gray-600">Tennis championships and summer events. Arrive refreshed and ready for the action.</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-building text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">ExCeL London</h3>
            <p class="text-gray-600">Trade shows, exhibitions, and corporate conferences with convenient transportation.</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-theater text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">West End Theatres</h3>
            <p class="text-gray-600">Musical shows, plays, and theatre premieres in London's entertainment district.</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-star text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Red Carpet Events</h3>
            <p class="text-gray-600">Film premieres, fashion weeks, and VIP parties requiring luxury transportation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Features Section -->
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Why Choose Our Event Service</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-time text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Punctual Arrival</h3>
            <p class="text-gray-600">Never miss the opening act or important moment with our reliable, on-time service.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-map text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Traffic Management</h3>
            <p class="text-gray-600">Expert knowledge of London traffic patterns and alternative routes to busy venues.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-group text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Group Options</h3>
            <p class="text-gray-600">Individual or group transportation with our range of luxury Mercedes vehicles.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-shield text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">VIP Treatment</h3>
            <p class="text-gray-600">Discreet, professional service that maintains your privacy and enhances your experience.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Corporate Events Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-2xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">Corporate Event Transportation</h2>
            <p class="text-lg text-gray-600 mb-6">
              Elevate your corporate events with professional transportation solutions. 
              From client entertainment to award ceremonies, ensure your guests arrive 
              in style and on time.
            </p>
            
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="h-3 w-3 bg-gold rotate-45 mt-2 flex-shrink-0"></div>
                <span class="text-gray-700">Executive transport for VIP guests and speakers</span>
              </div>
              <div class="flex items-start space-x-3">
                <div class="h-3 w-3 bg-gold rotate-45 mt-2 flex-shrink-0"></div>
                <span class="text-gray-700">Group transportation for teams and delegates</span>
              </div>
              <div class="flex items-start space-x-3">
                <div class="h-3 w-3 bg-gold rotate-45 mt-2 flex-shrink-0"></div>
                <span class="text-gray-700">Airport transfers for international attendees</span>
              </div>
              <div class="flex items-start space-x-3">
                <div class="h-3 w-3 bg-gold rotate-45 mt-2 flex-shrink-0"></div>
                <span class="text-gray-700">Multi-venue event coordination</span>
              </div>
            </div>
          </div>
          
          <div>
            <NuxtImg
              src="/images/covers/business-trip.webp"
              alt="Corporate event luxury chauffeur transportation"
              class="w-full h-80 object-cover rounded-lg shadow-lg"
              loading="lazy"
              width="800"
              height="500"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Booking Process Section -->
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Simple Event Booking Process</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
              1
            </div>
            <h3 class="text-xl font-semibold mb-3">Plan Ahead</h3>
            <p class="text-gray-600">Contact us with your event details, timing, and transportation requirements.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
              2
            </div>
            <h3 class="text-xl font-semibold mb-3">Customize Service</h3>
            <p class="text-gray-600">Choose your vehicle, pickup/drop-off points, and any special requirements.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
              3
            </div>
            <h3 class="text-xl font-semibold mb-3">Enjoy the Event</h3>
            <p class="text-gray-600">Relax and enjoy your event while we handle all transportation logistics.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-2xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">Make Your Event Unforgettable</h2>
        <p class="text-lg text-gray-600 mb-8">Professional event transportation that matches the importance of your occasion.</p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            :to="localePath('/booking')"
            class="px-8 py-3 bg-gold text-black font-semibold rounded hover:bg-yellow-500 transition"
          >
            Book Event Transport
          </NuxtLink>
          <NuxtLink
            :to="localePath('/contact-us')"
            class="px-8 py-3 border border-gold text-gold font-semibold rounded hover:bg-gold hover:text-black transition"
          >
            Event Quote
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
const heroImage = '/images/womanpassenger.webp'
const serviceImage = '/images/womanpassenger.webp'

const { t } = useI18n()
const localePath = useLocalePath()

useSeo('eventChauffeur')

const serviceBullets = computed(() => {
  const bullets = []
  for (let i = 0; i < 10; i++) {
    const key = `pages.services.cards.event.bullets[${i}]`
    const value = t(key)
    if (value === key) break
    bullets.push(value)
  }
  return bullets
})

const eventChauffeurSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Event Chauffeur Service",
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
  "serviceType": "Event Transportation",
  "areaServed": ["London", "United Kingdom"],
  "description": "Luxury event chauffeur service for corporate events, concerts, sporting events, award ceremonies, and private parties. Professional drivers and premium Mercedes vehicles."
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(eventChauffeurSchema)
    }
  ]
})
</script>