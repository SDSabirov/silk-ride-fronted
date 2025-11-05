<template>
  <div>
    <Navbar />

    <CommonHero :image="heroImage" :page="$t('pages.services.cards.wedding.title')" />

    <CommonPageIntro
      :title="$t('pages.services.cards.wedding.title')"
      :paragraph="$t('pages.services.cards.wedding.description')"
    />

    <!-- Service Details Section -->
    <section class="max-w-screen-xl mx-auto py-16 px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-6">Luxury Wedding Chauffeur Service London</h2>
          <p class="text-lg text-gray-600 mb-6">
            Make your special day absolutely perfect with Silk Ride's luxury wedding chauffeur service throughout London and surrounding areas. 
            From elegant bridal car arrivals to seamless guest transportation, we ensure every moment 
            of your wedding day is stress-free, memorable, and arrives in stunning style.
          </p>
          
          <div class="space-y-4">
            <div v-for="(bullet, index) in serviceBullets" :key="index" class="flex items-start space-x-3">
              <div class="h-3 w-3 bg-gold rotate-45 mt-2 flex-shrink-0"></div>
              <span class="text-gray-700">{{ bullet }}</span>
            </div>
          </div>

          <!-- Enhanced SEO content -->
          <div class="mt-8 space-y-6">
            <div>
              <h3 class="text-xl font-semibold mb-3">Premium Wedding Car Hire London</h3>
              <p class="text-gray-600 leading-relaxed">
                Our luxury wedding car hire service features immaculately maintained Mercedes-Benz vehicles, perfect for 
                London weddings. Whether you're planning a ceremony at iconic venues like The Shard, Grosvenor House, 
                or intimate settings in Richmond, Kensington, or Greenwich, our professional wedding chauffeurs ensure 
                timely, elegant arrivals for the bride, groom, bridal party, and wedding guests.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-3">Bridal Car Service & Wedding Transportation</h3>
              <p class="text-gray-600 leading-relaxed">
                Choose from our premium fleet including S-Class luxury sedans for the bride and groom's grand entrance, 
                E-Class vehicles for bridal party transportation, and V-Class Mercedes for larger wedding groups. 
                All wedding cars can be decorated with ribbons, flowers, and personalized touches to match your 
                wedding theme and color scheme, creating perfect photo opportunities.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-3">Wedding Day Coordination & Guest Transfers</h3>
              <p class="text-gray-600 leading-relaxed">
                Our dedicated wedding coordinators manage every detail of your transportation schedule, from venue-to-venue 
                transfers to reception logistics. We provide guest shuttle services between hotels, ceremony locations, 
                and reception venues across London, ensuring your wedding party arrives together and on time throughout 
                your celebration.
              </p>
            </div>
          </div>

          <div class="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">Wedding Package Options</h3>
            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span><strong>Bridal Car:</strong> Elegant arrival and departure for bride & groom</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span><strong>Bridal Party:</strong> Transportation for bridesmaids and groomsmen</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span><strong>Family Transport:</strong> Comfortable vehicles for parents and relatives</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span><strong>Guest Transfers:</strong> Group transportation for wedding guests</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span><strong>Full Day Service:</strong> Complete wedding day transportation</span>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:order-first">
          <NuxtImg
            :src="serviceImage"
            alt="Luxury wedding chauffeur service with Mercedes vehicles"
            class="w-full h-96 object-cover rounded-lg shadow-lg"
            loading="lazy"
            width="800"
            height="600"
          />
        </div>
      </div>
    </section>

    <!-- Vehicle Options Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Perfect Vehicles for Your Wedding</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <NuxtImg src="/images/sclass.webp" alt="Mercedes S-Class wedding car" class="w-full h-48 object-cover rounded-lg mb-4" loading="lazy" width="600" height="300" />
            <h3 class="text-xl font-semibold mb-3">Mercedes S-Class</h3>
            <p class="text-gray-600 mb-4">Ultimate luxury for the bride and groom. Elegant, sophisticated, and perfect for grand entrances.</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Up to 3 passengers</li>
              <li>• Premium interior</li>
              <li>• Climate control</li>
              <li>• Tinted windows</li>
            </ul>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <NuxtImg src="/images/eclass.webp" alt="Mercedes E-Class bridal car" class="w-full h-48 object-cover rounded-lg mb-4" loading="lazy" width="600" height="300" />
            <h3 class="text-xl font-semibold mb-3">Mercedes E-Class</h3>
            <p class="text-gray-600 mb-4">Stylish elegance for bridal party and family members. Perfect balance of luxury and comfort.</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Up to 4 passengers</li>
              <li>• Luxury seating</li>
              <li>• Advanced safety</li>
              <li>• Smooth ride</li>
            </ul>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <NuxtImg src="/images/transparentcars/vclass.jpg" alt="Mercedes V-Class wedding party transport" class="w-full h-48 object-cover rounded-lg mb-4" loading="lazy" width="600" height="300" />
            <h3 class="text-xl font-semibold mb-3">Mercedes V-Class</h3>
            <p class="text-gray-600 mb-4">Spacious luxury for larger bridal parties and family groups. Comfort for everyone.</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Up to 7 passengers</li>
              <li>• Extra luggage space</li>
              <li>• Group seating</li>
              <li>• Premium comfort</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Special Services Section -->
    <section class="py-16">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Special Wedding Services</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-gift text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Car Decoration</h3>
                <p class="text-gray-600">Beautiful ribbons, flowers, and decorations to match your wedding theme and colors.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-camera text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Photo Opportunities</h3>
                <p class="text-gray-600">Chauffeurs coordinate with photographers for perfect timing and stunning photos with the vehicle.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-heart text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Red Carpet Service</h3>
                <p class="text-gray-600">Special red carpet roll-out for the bride's arrival at the ceremony venue.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-time text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Flexible Timing</h3>
                <p class="text-gray-600">Accommodating any schedule changes or delays on your special day without extra charges.</p>
              </div>
            </div>
          </div>
          
          <div>
            <NuxtImg
              src="/images/covers/wedding.webp"
              alt="Luxury wedding chauffeur car decoration"
              class="w-full h-80 object-cover rounded-lg shadow-lg"
              loading="lazy"
              width="800"
              height="500"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">What Our Couples Say</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <blockquote class="text-lg font-light italic text-gray-700 mb-4">
              "Silk Ride made our wedding day absolutely perfect. The S-Class was beautifully decorated and our chauffeur was so professional. Highly recommend!"
            </blockquote>
            <cite class="text-gold font-semibold">- Emma & James, London</cite>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <blockquote class="text-lg font-light italic text-gray-700 mb-4">
              "From the bridal party to guest transfers, everything was seamless. The V-Class was perfect for our large family. Thank you for making our day special!"
            </blockquote>
            <cite class="text-gold font-semibold">- Priya & Michael, Surrey</cite>
          </div>
        </div>
      </div>
    </section>

    <!-- Planning Timeline Section -->
    <section class="py-16">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Wedding Planning Timeline</h2>
        
        <div class="max-w-3xl mx-auto">
          <div class="space-y-8">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold">
                6M
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">6 Months Before</h3>
                <p class="text-gray-600">Book your wedding transportation early to secure your preferred vehicles and dates.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold">
                3M
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">3 Months Before</h3>
                <p class="text-gray-600">Finalize vehicle decorations, confirm guest numbers, and plan pickup/drop-off locations.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold">
                1W
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">1 Week Before</h3>
                <p class="text-gray-600">Final confirmation of all details, timing, and special requests with our wedding coordinator.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Wedding Pricing Section -->
    <section class="py-16 bg-white">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Wedding Car Hire Pricing & Packages</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold mb-3">Bridal Car Package</h3>
            <div class="space-y-2 text-gray-600">
              <p><strong>Mercedes S-Class:</strong> £450</p>
              <p><strong>Mercedes E-Class:</strong> £350</p>
              <p><strong>Duration:</strong> 4 hours</p>
              <p><strong>Includes:</strong> Decoration, ribbons, red carpet</p>
            </div>
            <p class="mt-4 text-sm text-gray-500">Perfect for bride and groom ceremony arrival and photos</p>
          </div>

          <div class="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold mb-3">Wedding Party Package</h3>
            <div class="space-y-2 text-gray-600">
              <p><strong>Mercedes V-Class:</strong> £380</p>
              <p><strong>Mercedes E-Class x2:</strong> £600</p>
              <p><strong>Duration:</strong> 6 hours</p>
              <p><strong>Capacity:</strong> Up to 15 guests</p>
            </div>
            <p class="mt-4 text-sm text-gray-500">Ideal for bridal party and family transportation</p>
          </div>

          <div class="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold mb-3">Full Day Wedding</h3>
            <div class="space-y-2 text-gray-600">
              <p><strong>Complete fleet:</strong> From £1,200</p>
              <p><strong>Duration:</strong> 8+ hours</p>
              <p><strong>Services:</strong> All venues & transfers</p>
              <p><strong>Coordinator:</strong> Dedicated wedding manager</p>
            </div>
            <p class="mt-4 text-sm text-gray-500">Comprehensive transportation for entire wedding celebration</p>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-lg text-gray-600 mb-6">
            All wedding packages include professional chauffeurs, vehicle decoration, complimentary waiting time, 
            and wedding day coordination. Custom packages available for unique requirements.
          </p>
        </div>
      </div>
    </section>

    <!-- Popular Wedding Venues Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Popular London Wedding Venues We Serve</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center p-4">
            <h3 class="font-semibold mb-2">Central London</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>The Shard</li>
              <li>Grosvenor House</li>
              <li>Claridge's</li>
              <li>The Savoy</li>
              <li>One Great George Street</li>
            </ul>
          </div>

          <div class="text-center p-4">
            <h3 class="font-semibold mb-2">West London</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>Kensington Palace</li>
              <li>Chelsea Old Town Hall</li>
              <li>Fulham Palace</li>
              <li>Hammersmith Town Hall</li>
              <li>Royal Hospital Chelsea</li>
            </ul>
          </div>

          <div class="text-center p-4">
            <h3 class="font-semibold mb-2">South London</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>Hampton Court Palace</li>
              <li>Richmond Park</li>
              <li>Syon Park</li>
              <li>Old Royal Naval College</li>
              <li>Pembroke Lodge</li>
            </ul>
          </div>

          <div class="text-center p-4">
            <h3 class="font-semibold mb-2">North London</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>Alexandra Palace</li>
              <li>Kenwood House</li>
              <li>Horniman Museum</li>
              <li>Islington Town Hall</li>
              <li>The Grove Hotel</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Wedding FAQ Section -->
    <section class="py-16 bg-white">
      <div class="max-w-screen-xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Wedding Chauffeur Service FAQ</h2>
        
        <div class="max-w-4xl mx-auto space-y-6">
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">How much does wedding car hire cost in London?</h3>
            <p class="text-gray-600">
              Our wedding car hire starts from £350 for a Mercedes E-Class bridal car package (4 hours) and £450 for 
              a luxury S-Class. Complete wedding day packages start from £1,200 including multiple vehicles, decoration, 
              professional chauffeurs, and wedding coordination. All packages include complimentary decoration and 
              waiting time with no hidden charges.
            </p>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">How far in advance should I book wedding transportation?</h3>
            <p class="text-gray-600">
              We recommend booking your wedding cars 6-12 months in advance, especially for popular wedding months 
              (May-September) and weekend dates. This ensures availability of your preferred vehicles and allows time 
              for decoration planning. However, we can accommodate shorter notice bookings subject to fleet availability.
            </p>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">Do you provide wedding car decoration services?</h3>
            <p class="text-gray-600">
              Yes, all our wedding packages include professional car decoration with ribbons, bows, and flowers to match 
              your wedding colors and theme. We coordinate with your florist or wedding planner to ensure perfect 
              coordination. Additional decoration options include red carpet service, personalized number plates, 
              and special interior touches.
            </p>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">Can you handle transportation for the entire wedding party?</h3>
            <p class="text-gray-600">
              Absolutely! We provide comprehensive wedding transportation including bridal car, groom's transport, 
              bridal party vehicles, family cars, and guest shuttle services. Our V-Class vehicles accommodate up to 
              7 passengers each, perfect for larger groups. We coordinate all timing and logistics to ensure everyone 
              arrives at the right place at the right time.
            </p>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">What happens if there are delays on the wedding day?</h3>
            <p class="text-gray-600">
              Wedding day flexibility is included in all our packages. Our chauffeurs monitor the schedule and 
              accommodate reasonable delays without additional charges. We maintain communication with your wedding 
              coordinator and are prepared to adjust timing as needed. For significant schedule changes, we work 
              with you to find the best solution.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">Create Your Perfect Wedding Day Transportation</h2>
        <p class="text-lg text-gray-600 mb-8">
          Let our experienced wedding specialists handle every detail of your transportation, so you can focus on 
          celebrating the most important day of your life in luxury and style.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            :to="localePath('/booking')"
            class="px-8 py-3 bg-gold text-black font-semibold rounded hover:bg-yellow-500 transition"
          >
            Book Wedding Cars
          </NuxtLink>
          <NuxtLink
            :to="localePath('/contact-us')"
            class="px-8 py-3 border border-gold text-gold font-semibold rounded hover:bg-gold hover:text-black transition"
          >
            Get Wedding Package Quote
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
import heroImage from '@/assets/images/covers/wedding.webp'
import serviceImage from '@/assets/images/covers/wedding.webp'

const { t } = useI18n()
const localePath = useLocalePath()

useSeo('weddingChauffeur')

const serviceBullets = computed(() => {
  const bullets = []
  for (let i = 0; i < 10; i++) {
    const key = `pages.services.cards.wedding.bullets[${i}]`
    const value = t(key)
    if (value === key) break
    bullets.push(value)
  }
  return bullets
})

const weddingChauffeurSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Wedding Chauffeur Service",
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
  "serviceType": "Wedding Transportation",
  "areaServed": ["London", "United Kingdom"],
  "description": "Luxury wedding chauffeur service with decorated Mercedes vehicles, professional drivers, bridal car service, and guest transportation for your special day."
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(weddingChauffeurSchema)
    }
  ]
})
</script>