<template>
  <div>
    <Navbar />

    <CommonHero :image="heroImage" :page="$t('pages.services.cards.airport.title')" />

    <CommonPageIntro
      :title="$t('pages.services.cards.airport.title')"
      :paragraph="$t('pages.services.cards.airport.description')"
    />

    <!-- Service Details Section -->
    <section class="max-w-screen-xl mx-auto py-16 px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-6">Premium London Airport Transfer Service</h2>
          <p class="text-lg text-gray-600 mb-6">
            Experience seamless airport transfers with Silk Ride's luxury chauffeur service throughout London and surrounding areas. 
            From the moment you land to your final destination, we ensure a stress-free, 
            comfortable journey in our premium Mercedes fleet with professional chauffeurs.
          </p>
          
          <div class="space-y-4">
            <div v-for="(bullet, index) in serviceBullets" :key="index" class="flex items-start space-x-3">
              <div class="h-3 w-3 bg-gold rotate-45 mt-2 flex-shrink-0"></div>
              <span class="text-gray-700">{{ bullet }}</span>
            </div>
          </div>

          <!-- New detailed content for SEO -->
          <div class="mt-8 space-y-6">
            <div>
              <h3 class="text-xl font-semibold mb-3">Professional Chauffeur Airport Transfers</h3>
              <p class="text-gray-600 leading-relaxed">
                Our experienced chauffeurs provide reliable airport transfer services 24/7, specializing in luxury transportation 
                from all major London airports. With extensive knowledge of London traffic patterns and optimal routes, we ensure 
                punctual arrivals and departures for business travelers, tourists, and VIP clients.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-3">Mercedes Airport Transfer Fleet</h3>
              <p class="text-gray-600 leading-relaxed">
                Choose from our premium Mercedes-Benz fleet including E-Class sedans for executive travel, S-Class vehicles for 
                luxury VIP transfers, and V-Class MPVs for group airport transportation. All vehicles feature leather interiors, 
                climate control, Wi-Fi, and complimentary bottled water for your comfort.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-3">Fixed Price Airport Transfers</h3>
              <p class="text-gray-600 leading-relaxed">
                Enjoy transparent, fixed-price airport transfers with no surge pricing or hidden fees. Our competitive rates include 
                60 minutes of complimentary waiting time, flight monitoring, meet and greet service, and assistance with luggage. 
                Pre-book your transfer for guaranteed availability and preferred rates.
              </p>
            </div>
          </div>

          <div class="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">Airports We Serve</h3>
            <div class="grid grid-cols-2 gap-3">
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>London Heathrow (LHR)</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>London Gatwick (LGW)</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>London Stansted (STN)</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>London Luton (LTN)</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>London City Airport (LCY)</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>Farnborough Airport</span>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:order-first">
          <img
            :src="serviceImage"
            alt="Luxury Airport Transfer Service"
            class="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Why Choose Our Airport Transfer Service?</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-time text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Flight Tracking</h3>
            <p class="text-gray-600">We monitor your flight status in real-time to ensure punctual pickups, even if your flight is delayed.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-user text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Meet & Greet</h3>
            <p class="text-gray-600">Personal welcome at arrivals with name board and assistance with luggage.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-money text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">No Hidden Charges</h3>
            <p class="text-gray-600">60 minutes of free waiting time included with transparent, upfront pricing.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Airport Routes & Pricing Section -->
    <section class="py-16 bg-white">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Airport Transfer Pricing to Central London</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Heathrow Airport -->
          <div class="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold mb-4 text-center">Heathrow Airport</h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="font-medium">Mercedes E-Class:</span>
                <span class="font-bold text-gold">£120</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-medium">Mercedes S-Class:</span>
                <span class="font-bold text-gold">£160</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-medium">Mercedes V-Class:</span>
                <span class="font-bold text-gold">£160</span>
              </div>
            </div>
            <p class="mt-4 text-sm text-gray-500 text-center">Journey Time: 45-90 minutes</p>
          </div>

          <!-- Gatwick Airport -->
          <div class="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold mb-4 text-center">Gatwick Airport</h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="font-medium">Mercedes E-Class:</span>
                <span class="font-bold text-gold">£180</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-medium">Mercedes S-Class:</span>
                <span class="font-bold text-gold">£230</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-medium">Mercedes V-Class:</span>
                <span class="font-bold text-gold">£230</span>
              </div>
            </div>
            <p class="mt-4 text-sm text-gray-500 text-center">Journey Time: 60-120 minutes</p>
          </div>

          <!-- Stansted Airport -->
          <div class="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold mb-4 text-center">Stansted Airport</h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="font-medium">Mercedes E-Class:</span>
                <span class="font-bold text-gold">£200</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-medium">Mercedes S-Class:</span>
                <span class="font-bold text-gold">£250</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-medium">Mercedes V-Class:</span>
                <span class="font-bold text-gold">£250</span>
              </div>
            </div>
            <p class="mt-4 text-sm text-gray-500 text-center">Journey Time: 60-90 minutes</p>
          </div>

          <!-- Luton Airport -->
          <div class="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold mb-4 text-center">Luton Airport</h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="font-medium">Mercedes E-Class:</span>
                <span class="font-bold text-gold">£200</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-medium">Mercedes S-Class:</span>
                <span class="font-bold text-gold">£240</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-medium">Mercedes V-Class:</span>
                <span class="font-bold text-gold">£240</span>
              </div>
            </div>
            <p class="mt-4 text-sm text-gray-500 text-center">Journey Time: 60-90 minutes</p>
          </div>

          <!-- Biggin Hill Airport -->
          <div class="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold mb-4 text-center">Biggin Hill Airport</h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="font-medium">Mercedes E-Class:</span>
                <span class="font-bold text-gold">£170</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-medium">Mercedes S-Class:</span>
                <span class="font-bold text-gold">£210</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-medium">Mercedes V-Class:</span>
                <span class="font-bold text-gold">£210</span>
              </div>
            </div>
            <p class="mt-4 text-sm text-gray-500 text-center">Journey Time: 45-75 minutes</p>
          </div>

          <!-- Farnborough Airport -->
          <div class="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold mb-4 text-center">Farnborough Airport</h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="font-medium">Mercedes E-Class:</span>
                <span class="font-bold text-gold">£240</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-medium">Mercedes S-Class:</span>
                <span class="font-bold text-gold">£270</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-medium">Mercedes V-Class:</span>
                <span class="font-bold text-gold">£270</span>
              </div>
            </div>
            <p class="mt-4 text-sm text-gray-500 text-center">Journey Time: 60-90 minutes</p>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-lg text-gray-600 mb-6">
            All prices include 60 minutes of complimentary waiting time, flight monitoring, meet & greet service, 
            and professional chauffeur. Group discounts available for multiple passengers.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Frequently Asked Questions - Airport Transfers</h2>
        
        <div class="max-w-4xl mx-auto space-y-6">
          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-3">How much does an airport transfer cost in London?</h3>
            <p class="text-gray-600">
              Our airport transfer prices start from £120 depending on the airport, vehicle, and destination. Heathrow transfers
              to Central London start from £120 (E-Class), Gatwick from £180, Stansted from £200, and Luton from £200. All prices are fixed and include
              waiting time, meet & greet, and professional chauffeur service with no hidden charges.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-3">Do you provide 24/7 airport transfer service?</h3>
            <p class="text-gray-600">
              Yes, Silk Ride operates 24 hours a day, 7 days a week for airport transfers. Whether you have an early morning 
              flight or late-night arrival, our professional chauffeurs are available to provide reliable transportation 
              to and from all London airports including Heathrow, Gatwick, Stansted, Luton, and London City Airport.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-3">What happens if my flight is delayed?</h3>
            <p class="text-gray-600">
              We monitor all flights in real-time and adjust pickup times automatically for delays. You receive 60 minutes 
              of complimentary waiting time from your actual arrival time. Our chauffeurs track your flight status and 
              will be waiting at the designated meeting point regardless of delays, ensuring a stress-free experience.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-3">Which vehicles do you use for airport transfers?</h3>
            <p class="text-gray-600">
              Our airport transfer fleet consists of premium Mercedes-Benz vehicles including E-Class sedans (up to 3 passengers), 
              S-Class luxury vehicles (up to 3 passengers), and V-Class MPVs (up to 7 passengers). All vehicles feature 
              leather interiors, climate control, Wi-Fi, phone chargers, and complimentary bottled water.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-3">How far in advance should I book an airport transfer?</h3>
            <p class="text-gray-600">
              We recommend booking airport transfers at least 24 hours in advance to guarantee availability and secure 
              preferred rates. However, we also accept last-minute bookings subject to availability. For peak travel 
              periods (holidays, events), booking 48-72 hours in advance is advisable.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16">
      <div class="max-w-screen-xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">Book Your Premium Airport Transfer Today</h2>
        <p class="text-lg text-gray-600 mb-8">
          Experience luxury, reliability, and professional service with Silk Ride's airport transfer service. 
          Available 24/7 from all London airports with fixed prices and no hidden charges.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            :to="localePath('/booking')"
            class="px-8 py-3 bg-gold text-black font-semibold rounded hover:bg-yellow-500 transition"
          >
            Book Airport Transfer
          </NuxtLink>
          <NuxtLink
            :to="localePath('/contact-us')"
            class="px-8 py-3 border border-gold text-gold font-semibold rounded hover:bg-gold hover:text-black transition"
          >
            Get Quote
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
import heroImage from '@/assets/images/vclassjett.webp'
import serviceImage from '@/assets/images/vclassjett.webp'
import { organizationSchema } from '~/utils/organizationSchema'

const { t } = useI18n()
const localePath = useLocalePath()

useSeo('airportTransfers')

const serviceBullets = computed(() => {
  const bullets = []
  for (let i = 0; i < 10; i++) {
    const key = `pages.services.cards.airport.bullets[${i}]`
    const value = t(key)
    if (value === key) break
    bullets.push(value)
  }
  return bullets
})

const airportTransfersSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Airport Transfer Service",
  "provider": organizationSchema,
  "serviceType": "Airport Transfer",
  "areaServed": {
    "@type": "City",
    "name": "London"
  },
  "description": "Premium airport transfer service with luxury Mercedes vehicles and professional chauffeurs. Flight tracking, meet & greet service, and 60 minutes free waiting time included.",
  "offers": {
    "@type": "Offer",
    "priceRange": "£120-£270",
    "priceCurrency": "GBP"
  }
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(airportTransfersSchema)
    }
  ]
})
</script>