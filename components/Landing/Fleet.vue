<template>
  <section class="py-16 bg-gray-50" data-section="services">
    <div class="max-w-screen-xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Chauffeur Services
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          From airport transfers to special events, experience luxury transportation tailored to your needs
        </p>
        
        <!-- Decorative line -->
        <div class="flex items-center justify-center mt-6 mb-8">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <div class="h-1 bg-gold w-24"></div>
          <div class="h-3 w-3 bg-gold rotate-45"></div>
        </div>
      </div>

      <!-- Service Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" data-aos="fade-up" data-aos-stagger="100">
        <!-- Airport Transfers -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
          <div class="h-48 relative overflow-hidden">
            <img src="~/assets/images/vclassjett.webp" alt="Airport Transfer Service" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/80"></div>
            <div class="absolute bottom-4 left-4 text-white transform transition-transform duration-300 group-hover:translate-y-[-4px]">
              <h3 class="text-xl font-semibold">Airport Transfers</h3>
              <p class="text-sm opacity-90">All London Airports</p>
            </div>
            <div class="absolute top-4 right-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
              <i class="bx bx-plane-take-off text-gold text-2xl"></i>
            </div>
          </div>
          <div class="p-6">
            <p class="text-gray-600 mb-4 leading-relaxed">
              Professional transfers to/from all London airports with flight tracking, meet & greet service, and 60 minutes free waiting time.
            </p>
            <div class="flex justify-between items-center mb-4">
              <span class="text-2xl font-bold text-gold animate-pulse">From £120</span>
              <span class="text-sm text-gray-500">Heathrow to Central London</span>
            </div>
            <div class="flex space-x-3">
              <NuxtLink :to="localePath('/services/airport-transfers')" 
                        class="flex-1 text-center bg-gold text-black py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2">
                Learn More
              </NuxtLink>
              <NuxtLink :to="localePath('/booking')" 
                        class="flex-1 text-center border border-gold text-gold py-3 rounded-lg font-semibold hover:bg-gold hover:text-black transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2">
                Book Now
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Corporate Travel -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div class="h-48 relative overflow-hidden">
            <img src="/assets/images/covers/business-trip.webp" alt="Corporate Travel Service" 
                 class="w-full h-full object-cover transition-transform duration-300 hover:scale-105">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <h3 class="text-xl font-semibold">Corporate Travel</h3>
              <p class="text-sm opacity-90">Executive & Business</p>
            </div>
            <div class="absolute top-4 right-4">
              <i class="bx bx-briefcase text-gold text-2xl"></i>
            </div>
          </div>
          <div class="p-6">
            <p class="text-gray-600 mb-4 leading-relaxed">
              Executive chauffeur service for business meetings, conferences, and corporate events. Wi-Fi enabled vehicles and discrete professional service.
            </p>
            <div class="flex justify-between items-center mb-4">
              <span class="text-2xl font-bold text-gold">From £65/hr</span>
              <span class="text-sm text-gray-500">4 hour minimum</span>
            </div>
            <div class="flex space-x-3">
              <NuxtLink :to="localePath('/services/corporate-travel')" 
                        class="flex-1 text-center bg-gold text-black py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors">
                Learn More
              </NuxtLink>
              <NuxtLink :to="localePath('/booking')" 
                        class="flex-1 text-center border border-gold text-gold py-3 rounded-lg font-semibold hover:bg-gold hover:text-black transition-colors">
                Book Now
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Wedding & Events -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div class="h-48 relative overflow-hidden">
            <img src="/assets/images/covers/wedding.webp" alt="Wedding & Event Service" 
                 class="w-full h-full object-cover transition-transform duration-300 hover:scale-105">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <h3 class="text-xl font-semibold">Wedding & Events</h3>
              <p class="text-sm opacity-90">Special Occasions</p>
            </div>
            <div class="absolute top-4 right-4">
              <i class="bx bx-heart text-gold text-2xl"></i>
            </div>
          </div>
          <div class="p-6">
            <p class="text-gray-600 mb-4 leading-relaxed">
              Elegant wedding chauffeur service with decorated vehicles, bridal party transport, and guest transfers for your special day.
            </p>
            <div class="flex justify-between items-center mb-4">
              <span class="text-2xl font-bold text-gold">Custom Quote</span>
              <span class="text-sm text-gray-500">Package rates available</span>
            </div>
            <div class="flex space-x-3">
              <NuxtLink :to="localePath('/services/wedding-chauffeur')" 
                        class="flex-1 text-center bg-gold text-black py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors">
                Learn More
              </NuxtLink>
              <NuxtLink :to="localePath('/contact-us')" 
                        class="flex-1 text-center border border-gold text-gold py-3 rounded-lg font-semibold hover:bg-gold hover:text-black transition-colors">
                Get Quote
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Fleet Overview -->
      <div class="bg-white rounded-xl p-8 shadow-lg">
        <h3 class="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">Our Premium Mercedes Fleet</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- E-Class -->
          <div class="text-center group">
            <div class="relative overflow-hidden rounded-lg mb-4">
              <img src="/assets/images/eclass.webp" alt="Mercedes E-Class" 
                   class="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105">
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            <h4 class="text-xl font-semibold text-gray-900 mb-2">Mercedes E-Class</h4>
            <p class="text-gray-600 mb-3">Perfect for business & executive travel</p>
            <div class="flex justify-center space-x-4 text-sm text-gray-500">
              <span>Up to 4 passengers</span>
              <span>•</span>
              <span>Premium comfort</span>
            </div>
            <NuxtLink :to="localePath('/fleet/mercedes-e-class')" 
                      class="inline-block mt-3 text-gold hover:text-gold/80 font-semibold transition-colors">
              View Details →
            </NuxtLink>
          </div>

          <!-- S-Class -->
          <div class="text-center group">
            <div class="relative overflow-hidden rounded-lg mb-4">
              <img src="/assets/images/sclassBackground.webp" alt="Mercedes S-Class" 
                   class="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105">
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            <h4 class="text-xl font-semibold text-gray-900 mb-2">Mercedes S-Class</h4>
            <p class="text-gray-600 mb-3">Ultimate luxury for VIP clients</p>
            <div class="flex justify-center space-x-4 text-sm text-gray-500">
              <span>Up to 3 passengers</span>
              <span>•</span>
              <span>Luxury interior</span>
            </div>
            <NuxtLink :to="localePath('/fleet/mercedes-s-class')" 
                      class="inline-block mt-3 text-gold hover:text-gold/80 font-semibold transition-colors">
              View Details →
            </NuxtLink>
          </div>

          <!-- V-Class -->
          <div class="text-center group">
            <div class="relative overflow-hidden rounded-lg mb-4">
              <img src="~/assets/images/vclassjett.webp" alt="Mercedes V-Class" 
                   class="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105">
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            <h4 class="text-xl font-semibold text-gray-900 mb-2">Mercedes V-Class</h4>
            <p class="text-gray-600 mb-3">Spacious comfort for groups</p>
            <div class="flex justify-center space-x-4 text-sm text-gray-500">
              <span>Up to 7 passengers</span>
              <span>•</span>
              <span>Extra luggage space</span>
            </div>
            <NuxtLink :to="localePath('/fleet/mercedes-v-class')" 
                      class="inline-block mt-3 text-gold hover:text-gold/80 font-semibold transition-colors">
              View Details →
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Custom Request CTA -->
      <div class="mt-12 bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-xl p-8 text-center text-white">
        <h3 class="text-2xl md:text-3xl font-bold mb-4">
          {{ $t('servicesSection.customRequest.title') }}
        </h3>
        <p class="text-lg md:text-xl mb-6 opacity-90">
          {{ $t('servicesSection.customRequest.description') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:+447512905514" 
             class="inline-flex items-center bg-gold text-black px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black group">
            <i class="bx bx-phone mr-2 group-hover:animate-bounce"></i>
            <span class="relative">
              +44 7512 905514
              <span class="absolute -top-1 -right-1 h-2 w-2 bg-green-400 rounded-full animate-ping"></span>
            </span>
          </a>
          <NuxtLink :to="localePath('/contact-us')" 
                    class="inline-flex items-center border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-black transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black group">
            <i class="bx bx-message mr-2 group-hover:rotate-12 transition-transform duration-200"></i>
            Get Custom Quote
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocalePath } from '#imports'

const localePath = useLocalePath()
</script>