<template>
  <div>
    <Navbar />

    <CommonHero :image="heroImage" :page="$t('pages.services.cards.corporate.title')" />

    <CommonPageIntro
      :title="$t('pages.services.cards.corporate.title')"
      :paragraph="$t('pages.services.cards.corporate.description')"
    />

    <!-- Service Details Section -->
    <section class="max-w-screen-xl mx-auto py-16 px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-6">Premium Executive Corporate Chauffeur Service London</h2>
          <p class="text-lg text-gray-600 mb-6">
            Elevate your business travel with Silk Ride's professional corporate chauffeur service throughout London and the UK. 
            Designed for executives, VIPs, and corporate teams who demand punctuality, discretion, 
            and luxury transportation for business meetings, conferences, and corporate events.
          </p>
          
          <div class="space-y-4">
            <div v-for="(bullet, index) in serviceBullets" :key="index" class="flex items-start space-x-3">
              <div class="h-3 w-3 bg-gold rotate-45 mt-2 flex-shrink-0"></div>
              <span class="text-gray-700">{{ bullet }}</span>
            </div>
          </div>

          <!-- Enhanced content for SEO -->
          <div class="mt-8 space-y-6">
            <div>
              <h3 class="text-xl font-semibold mb-3">London Business Chauffeur Services</h3>
              <p class="text-gray-600 leading-relaxed">
                Our corporate chauffeur service covers all of London's business districts including Canary Wharf, 
                City of London, Westminster, and Mayfair. Perfect for C-suite executives, business delegations, 
                and corporate clients requiring reliable, professional transportation for board meetings, 
                business conferences, and client entertainment.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-3">Executive Vehicle Fleet</h3>
              <p class="text-gray-600 leading-relaxed">
                Choose from our premium Mercedes-Benz corporate fleet featuring Wi-Fi enabled E-Class and S-Class 
                sedans for executive travel, plus V-Class vehicles for team transportation. All corporate vehicles 
                include phone charging stations, complimentary newspapers, bottled water, and climate control for 
                optimal comfort during business journeys.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-3">Corporate Account Management</h3>
              <p class="text-gray-600 leading-relaxed">
                Streamline your company's transportation with dedicated corporate accounts featuring monthly invoicing, 
                multiple booking users, expense reporting, and preferred rates. Our corporate travel coordinators 
                manage your business transportation needs with detailed reporting and 24/7 support for urgent requirements.
              </p>
            </div>
          </div>

          <div class="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">Corporate Services</h3>
            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>Executive Airport Transfers</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>Meeting & Conference Transport</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>Client Transportation</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>Corporate Events</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>Daily Business Travel</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span>Multi-City Business Tours</span>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:order-first">
          <img
            :src="serviceImage"
            alt="Corporate Chauffeur Service"
            class="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Why Executives Choose Silk Ride</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-wifi text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Stay Connected</h3>
            <p class="text-gray-600">Complimentary Wi-Fi and phone chargers in all vehicles to keep you productive on the move.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-shield text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Discretion & Privacy</h3>
            <p class="text-gray-600">Professional chauffeurs trained in confidentiality and discretion for sensitive business matters.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-calendar text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Flexible Booking</h3>
            <p class="text-gray-600">Hourly, daily, or long-term contracts available to suit your business needs.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-16">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Corporate Travel Benefits</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-time-five text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Time Efficiency</h3>
                <p class="text-gray-600">Maximize productivity with reliable, punctual service that gets you to meetings on time.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-star text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Professional Image</h3>
                <p class="text-gray-600">Arrive in style with luxury Mercedes vehicles that enhance your professional reputation.</p>
              </div>
            </div>
          </div>
          
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-dollar text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Cost Effective</h3>
                <p class="text-gray-600">Transparent pricing with no hidden costs, making budget planning simple and predictable.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-support text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">24/7 Support</h3>
                <p class="text-gray-600">Round-the-clock customer support for urgent business travel requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Corporate Pricing Section -->
    <section class="py-16 bg-white">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Corporate Chauffeur Service Pricing</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold mb-3">Hourly Business Travel</h3>
            <div class="space-y-2 text-gray-600">
              <p><strong>Mercedes E-Class:</strong> £60/hour</p>
              <p><strong>Mercedes S-Class:</strong> £80/hour</p>
              <p><strong>Mercedes V-Class:</strong> £70/hour</p>
              <p><strong>Minimum booking:</strong> 4 hours</p>
            </div>
            <p class="mt-4 text-sm text-gray-500">Perfect for meetings, conferences, and daily business travel</p>
          </div>

          <div class="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold mb-3">Half Day Executive</h3>
            <div class="space-y-2 text-gray-600">
              <p><strong>4 Hours E-Class:</strong> £220</p>
              <p><strong>4 Hours S-Class:</strong> £300</p>
              <p><strong>4 Hours V-Class:</strong> £260</p>
              <p><strong>Coverage:</strong> London Zone 1-6</p>
            </div>
            <p class="mt-4 text-sm text-gray-500">Ideal for half-day business schedules and client meetings</p>
          </div>

          <div class="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold mb-3">Full Day Corporate</h3>
            <div class="space-y-2 text-gray-600">
              <p><strong>8 Hours E-Class:</strong> £420</p>
              <p><strong>8 Hours S-Class:</strong> £580</p>
              <p><strong>8 Hours V-Class:</strong> £500</p>
              <p><strong>Coverage:</strong> London & M25</p>
            </div>
            <p class="mt-4 text-sm text-gray-500">Complete day coverage for executive schedules and events</p>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-lg text-gray-600 mb-6">
            All corporate packages include Wi-Fi, phone charging, complimentary refreshments, 
            and professional chauffeur. Volume discounts available for regular bookings.
          </p>
        </div>
      </div>
    </section>

    <!-- Corporate FAQ Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Corporate Chauffeur Service FAQ</h2>
        
        <div class="max-w-4xl mx-auto space-y-6">
          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-3">How much does corporate chauffeur service cost in London?</h3>
            <p class="text-gray-600">
              Our corporate chauffeur rates start from £60 per hour for Mercedes E-Class vehicles with a 4-hour minimum. 
              Half-day packages from £220 and full-day executive travel from £420. We offer volume discounts for regular 
              corporate bookings and dedicated account management for businesses requiring frequent transportation.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-3">Do you offer corporate account services?</h3>
            <p class="text-gray-600">
              Yes, we provide comprehensive corporate account services including monthly invoicing, multiple booking users, 
              detailed expense reporting, and dedicated account managers. Corporate clients receive preferential rates, 
              priority booking, and 24/7 support for urgent business travel requirements.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-3">Are your chauffeurs suitable for executive clients?</h3>
            <p class="text-gray-600">
              All our chauffeurs are professionally trained, background checked, and experienced in serving C-suite executives 
              and VIP clients. They maintain strict confidentiality, dress professionally, and understand the importance of 
              discretion when handling sensitive business matters and high-profile passengers.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-3">What business districts do you cover in London?</h3>
            <p class="text-gray-600">
              We provide corporate chauffeur services throughout London including Canary Wharf, City of London, Westminster, 
              Mayfair, King's Cross, London Bridge, and all major business districts. Our service extends to Greater London, 
              M25 corridor, and we can arrange transportation for business travel throughout the UK.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-3">Can you handle last-minute business travel requests?</h3>
            <p class="text-gray-600">
              Our corporate clients have access to priority booking and emergency transportation services. We maintain a 
              dedicated fleet for urgent requests and can typically accommodate last-minute bookings within 2-4 hours, 
              subject to availability. Corporate account holders receive preferential treatment for urgent requirements.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Industry Solutions Section -->
    <section class="py-16 bg-white">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Industry-Specific Corporate Solutions</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-building text-white text-2xl"></i>
            </div>
            <h3 class="text-lg font-semibold mb-3">Financial Services</h3>
            <p class="text-gray-600 text-sm">Serving banks, investment firms, and financial institutions in Canary Wharf and City of London</p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-briefcase text-white text-2xl"></i>
            </div>
            <h3 class="text-lg font-semibold mb-3">Law Firms</h3>
            <p class="text-gray-600 text-sm">Confidential transportation for legal professionals, court appearances, and client meetings</p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-cog text-white text-2xl"></i>
            </div>
            <h3 class="text-lg font-semibold mb-3">Technology</h3>
            <p class="text-gray-600 text-sm">Executive transport for tech companies, startups, and IT consulting firms</p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-world text-white text-2xl"></i>
            </div>
            <h3 class="text-lg font-semibold mb-3">International Business</h3>
            <p class="text-gray-600 text-sm">Diplomatic missions, embassy transport, and international delegation services</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">Elevate Your Corporate Travel Experience</h2>
        <p class="text-lg text-gray-600 mb-8">
          Join hundreds of businesses and executives who trust Silk Ride for professional, reliable corporate transportation.
          Get started with your corporate account today.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            :to="localePath('/booking')"
            class="px-8 py-3 bg-gold text-black font-semibold rounded hover:bg-yellow-500 transition"
          >
            Book Corporate Travel
          </NuxtLink>
          <NuxtLink
            :to="localePath('/contact-us')"
            class="px-8 py-3 border border-gold text-gold font-semibold rounded hover:bg-gold hover:text-black transition"
          >
            Setup Corporate Account
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
import heroImage from '@/assets/images/covers/business-trip.webp'
import serviceImage from '@/assets/images/covers/business-trip.webp'

const { t } = useI18n()
const localePath = useLocalePath()

useSeo('corporateTravel')

const serviceBullets = computed(() => {
  const bullets = []
  for (let i = 0; i < 10; i++) {
    const key = `pages.services.cards.corporate.bullets[${i}]`
    const value = t(key)
    if (value === key) break
    bullets.push(value)
  }
  return bullets
})

const corporateTravelSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Corporate Travel Service",
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
  "serviceType": "Corporate Chauffeur Service",
  "areaServed": ["London", "United Kingdom"],
  "description": "Executive corporate chauffeur service for business travel, meetings, and corporate events. Professional drivers, luxury Mercedes fleet, Wi-Fi and discretion guaranteed."
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(corporateTravelSchema)
    }
  ]
})
</script>