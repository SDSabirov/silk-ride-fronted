<template>
  <div>
    <Navbar />

    <CommonHero :image="heroImage" :page="$t('pages.services.cards.hourly.title')" />

    <CommonPageIntro
      :title="$t('pages.services.cards.hourly.title')"
      :paragraph="$t('pages.services.cards.hourly.description')"
    />

    <!-- Service Details Section -->
    <section class="max-w-screen-xl mx-auto py-16 px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-6">Personal Chauffeur at Your Disposal</h2>
          <p class="text-lg text-gray-600 mb-6">
            Enjoy the ultimate freedom and flexibility with our hourly chauffeur service. 
            Whether you need transportation for business meetings, sightseeing, shopping, 
            or special occasions, your dedicated chauffeur will be at your complete disposal.
          </p>
          
          <div class="space-y-4">
            <div v-for="(bullet, index) in serviceBullets" :key="index" class="flex items-start space-x-3">
              <div class="h-3 w-3 bg-gold rotate-45 mt-2 flex-shrink-0"></div>
              <span class="text-gray-700">{{ bullet }}</span>
            </div>
          </div>

          <div class="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">Booking Options</h3>
            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span><strong>4 Hours Minimum:</strong> Perfect for city tours or shopping trips</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span><strong>Half Day (6 Hours):</strong> Ideal for business meetings or sightseeing</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span><strong>Full Day (8+ Hours):</strong> Complete day at your disposal</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span><strong>Extended Hire:</strong> Multi-day packages available</span>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:order-first">
          <img
            :src="serviceImage"
            alt="Hourly Chauffeur Service"
            class="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

    <!-- Popular Uses Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Popular Uses for Hourly Chauffeur Service</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-building text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-center">Business Meetings</h3>
            <p class="text-gray-600 text-center">Multiple appointments across London with reliable transportation between venues.</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-camera text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-center">Sightseeing Tours</h3>
            <p class="text-gray-600 text-center">Explore London's landmarks at your own pace with a knowledgeable local chauffeur.</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-shopping-bag text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-center">Shopping Trips</h3>
            <p class="text-gray-600 text-center">Luxury shopping in Oxford Street, Knightsbridge, or Bond Street with door-to-door service.</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-calendar-event text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-center">Special Occasions</h3>
            <p class="text-gray-600 text-center">Anniversaries, birthdays, or romantic evenings with luxury transportation.</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-group text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-center">Group Travel</h3>
            <p class="text-gray-600 text-center">Family outings or group events with spacious Mercedes V-Class vehicles.</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="bx bx-medical text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-center">Medical Appointments</h3>
            <p class="text-gray-600 text-center">Comfortable, reliable transport for medical appointments with waiting time included.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-16">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Why Choose Hourly Chauffeur Service?</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-time text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Complete Flexibility</h3>
                <p class="text-gray-600">Change your itinerary on the go. Your chauffeur adapts to your schedule, not the other way around.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-map text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Local Knowledge</h3>
                <p class="text-gray-600">Professional chauffeurs with extensive London knowledge to optimize routes and suggest destinations.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-shield text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Safety & Security</h3>
                <p class="text-gray-600">Licensed, insured, and background-checked chauffeurs ensuring your safety and peace of mind.</p>
              </div>
            </div>
          </div>
          
          <div>
            <NuxtImg
              src="/images/eclass.webp"
              alt="Mercedes E-Class luxury interior for hourly hire"
              class="w-full h-80 object-cover rounded-lg shadow-lg"
              loading="lazy"
              width="800"
              height="500"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">Book Your Personal Chauffeur</h2>
        <p class="text-lg text-gray-600 mb-8">Experience the ultimate in personalized transportation with our hourly chauffeur service.</p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            :to="localePath('/booking')"
            class="px-8 py-3 bg-gold text-black font-semibold rounded hover:bg-yellow-500 transition"
          >
            Book Hourly Service
          </NuxtLink>
          <NuxtLink
            :to="localePath('/contact-us')"
            class="px-8 py-3 border border-gold text-gold font-semibold rounded hover:bg-gold hover:text-black transition"
          >
            Custom Quote
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
const heroImage = '/images/covers/about-us.webp'
const serviceImage = '/images/covers/about-us.webp'

const { t } = useI18n()
const localePath = useLocalePath()

useSeo('hourlyChauffeur')

const serviceBullets = computed(() => {
  const bullets = []
  for (let i = 0; i < 10; i++) {
    const key = `pages.services.cards.hourly.bullets[${i}]`
    const value = t(key)
    if (value === key) break
    bullets.push(value)
  }
  return bullets
})

const hourlyChauffeurSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hourly Chauffeur Service",
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
  "serviceType": "Hourly Chauffeur Hire",
  "areaServed": ["London", "United Kingdom"],
  "description": "Flexible hourly chauffeur service for business meetings, sightseeing, shopping, and special occasions. Minimum 4 hours booking with luxury Mercedes vehicles."
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(hourlyChauffeurSchema)
    }
  ]
})
</script>