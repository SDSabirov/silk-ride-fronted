<template>
  <div>
    <Navbar />
    
    <!-- Hero Section -->
    <section class="relative min-h-screen lg:min-h-[90vh] flex items-center py-20">
      <div class="absolute inset-0 overflow-hidden">
        <img
          src="~/assets/images/vclass2.webp"
          alt="Luton Airport Chauffeur Service London"
          class="w-full h-full object-cover"
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      <div class="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div class="max-w-4xl">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-[1.1] mb-4 sm:mb-6">
            Luton Airport <span class="text-gold block sm:inline">Chauffeur Service</span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-8 opacity-90 leading-relaxed">
            Premium chauffeur service to and from London Luton Airport with professional drivers and luxury Mercedes vehicles
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <NuxtLink
              to="/booking"
              class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <i class="bx bx-calendar mr-2"></i>
              Book Luton Transfer
            </NuxtLink>
            <a
              href="tel:+447512905514"
              class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              <i class="bx bx-phone mr-2"></i>
              Call +44 7512 905514
            </a>
          </div>

          <!-- Key Features -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-time text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">60 Min Free Wait</h3>
                <p class="text-xs sm:text-sm opacity-75">International arrivals</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-bus text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">Shuttle Service</h3>
                <p class="text-xs sm:text-sm opacity-75">Terminal to car park</p>
              </div>
            </div>
            <div class="flex items-center space-x-3 sm:col-span-2 lg:col-span-1">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-map-pin text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">North London</h3>
                <p class="text-xs sm:text-sm opacity-75">Closest to M25 North</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-screen-xl mx-auto px-6 py-16">
      
      <!-- Service Overview -->
      <section class="mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-black mb-6">
              Professional Luton Airport Transfers
            </h2>
            <div class="w-16 h-1 bg-gold mb-6"></div>
            <div class="prose prose-lg">
              <p class="text-gray-700 leading-relaxed mb-4">
                London Luton Airport, located in Bedfordshire just north of London, is a major hub for budget airlines and charter flights. Our professional Luton chauffeur service provides seamless transfers, navigating the unique shuttle system and ensuring your journey is comfortable from terminal to destination.
              </p>
              <p class="text-gray-700 leading-relaxed mb-4">
                As one of London's four major airports, Luton serves popular destinations across Europe and beyond with airlines like easyJet, Wizz Air, and TUI. Our experienced chauffeurs understand the airport's layout and optimal pickup procedures, including the shuttle service from terminal to car parks.
              </p>
              <p class="text-gray-700 leading-relaxed">
                Whether you're arriving for business in North London or departing for a European holiday, our premium Mercedes fleet and professional service guarantee a stress-free start or end to your journey.
              </p>
            </div>
          </div>
          <div class="lg:text-right">
            <div class="inline-block bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold text-black mb-6">Luton Service Excellence</h3>
              <ul class="space-y-4 text-left">
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Expert navigation of shuttle system</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Professional meet and greet coordination</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Real-time flight tracking and monitoring</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">60 minutes complimentary waiting time</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Premium Mercedes luxury vehicle fleet</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Experienced drivers with local expertise</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Airport Information -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          Understanding Luton Airport
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <!-- Terminal & Shuttle Info -->
          <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mr-4">
                <i class="bx bx-bus text-black text-2xl"></i>
              </div>
              <div>
                <h3 class="text-2xl font-semibold text-black">Terminal & Transport</h3>
                <p class="text-gray-600">Shuttle service coordination</p>
              </div>
            </div>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-lg text-black mb-2">Shuttle System:</h4>
                <p class="text-gray-700 text-sm mb-3">Luton operates a shuttle bus service between the terminal and car parks. Our drivers coordinate pickups to minimize waiting time.</p>
              </div>
              <div>
                <h4 class="font-semibold text-lg text-black mb-2">Pickup Process:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Meet and greet at arrivals hall</li>
                  <li>• Assistance with shuttle coordination</li>
                  <li>• Vehicle waiting at designated area</li>
                  <li>• Seamless transfer to your destination</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Airlines & Destinations -->
          <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mr-4">
                <i class="bx bx-plane text-black text-2xl"></i>
              </div>
              <div>
                <h3 class="text-2xl font-semibold text-black">Airlines & Routes</h3>
                <p class="text-gray-600">Major carriers and destinations</p>
              </div>
            </div>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-lg text-black mb-2">Primary Airlines:</h4>
                <p class="text-gray-700 text-sm mb-3">easyJet (largest presence), Wizz Air, TUI Airways, Ryanair, and various charter airlines serving European destinations.</p>
              </div>
              <div>
                <h4 class="font-semibold text-lg text-black mb-2">Popular Destinations:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Spain: Barcelona, Madrid, Palma</li>
                  <li>• Greece: Athens, Mykonos, Santorini</li>
                  <li>• Eastern Europe: Budapest, Prague, Krakow</li>
                  <li>• Package holiday destinations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Location Benefits -->
        <div class="bg-gradient-to-r from-gold to-yellow-400 rounded-2xl p-8 text-black">
          <h3 class="text-2xl font-bold text-center mb-6">Strategic Location Benefits</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div class="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="bx bx-map text-gold text-xl"></i>
              </div>
              <h4 class="font-semibold text-lg mb-2">North London Access</h4>
              <p class="text-sm">Closest airport to North London areas including Barnet, Enfield, and Hertfordshire.</p>
            </div>
            <div>
              <div class="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="bx bx-road text-gold text-xl"></i>
              </div>
              <h4 class="font-semibold text-lg mb-2">Excellent Connectivity</h4>
              <p class="text-sm">Direct access to M1 motorway and easy connections to M25 orbital motorway.</p>
            </div>
            <div>
              <div class="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="bx bx-building text-gold text-xl"></i>
              </div>
              <h4 class="font-semibold text-lg mb-2">Business Districts</h4>
              <p class="text-sm">Quick access to Luton, Stevenage, and other Bedfordshire/Hertfordshire business areas.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Popular Routes -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          Popular Luton Airport Routes
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Central London</h3>
            <p class="text-gold font-bold text-xl mb-2">60-90 mins</p>
            <p class="text-sm text-gray-600">West End, City, Westminster</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">North London</h3>
            <p class="text-gold font-bold text-xl mb-2">30-60 mins</p>
            <p class="text-sm text-gray-600">Barnet, Enfield, Finchley</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Hertfordshire</h3>
            <p class="text-gold font-bold text-xl mb-2">15-45 mins</p>
            <p class="text-sm text-gray-600">St Albans, Watford, Hemel Hempstead</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Bedfordshire</h3>
            <p class="text-gold font-bold text-xl mb-2">10-30 mins</p>
            <p class="text-sm text-gray-600">Luton, Dunstable, Bedford</p>
          </div>
        </div>
      </section>

      <!-- Service Process -->
      <section class="mb-16">
        <div class="bg-gray-50 rounded-2xl p-12">
          <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
            How Our Luton Service Works
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-black font-bold text-xl">1</span>
              </div>
              <h3 class="text-lg font-semibold text-black mb-3">Flight Tracking</h3>
              <p class="text-gray-700 text-sm">We monitor your flight in real-time to ensure perfect timing for your pickup.</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-black font-bold text-xl">2</span>
              </div>
              <h3 class="text-lg font-semibold text-black mb-3">Meet & Greet</h3>
              <p class="text-gray-700 text-sm">Professional chauffeur meets you in the arrivals hall with personalized signage.</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-black font-bold text-xl">3</span>
              </div>
              <h3 class="text-lg font-semibold text-black mb-3">Shuttle Coordination</h3>
              <p class="text-gray-700 text-sm">Assistance with shuttle service to car park where luxury vehicle awaits.</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-black font-bold text-xl">4</span>
              </div>
              <h3 class="text-lg font-semibold text-black mb-3">Luxury Transfer</h3>
              <p class="text-gray-700 text-sm">Comfortable journey to your destination in premium Mercedes vehicle.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl p-12 text-center">
        <h2 class="text-3xl font-heading font-bold mb-4">
          Book Your Luton Airport Transfer Today
        </h2>
        <p class="text-xl mb-8 opacity-90">
          Experience premium chauffeur service with expert coordination of Luton's unique airport system
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/booking"
            class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300"
          >
            <i class="bx bx-calendar mr-2"></i>
            Book Luton Transfer
          </NuxtLink>
          <a
            href="tel:+447512905514"
            class="inline-flex items-center justify-center px-8 py-4 border-2 border-gold text-gold font-semibold text-lg rounded-lg hover:bg-gold hover:text-black transition-all duration-300"
          >
            <i class="bx bx-phone mr-2"></i>
            Call +44 7512 905514
          </a>
        </div>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script setup>
// SEO Meta Tags
useSeo('lutonChauffeur')

// Structured Data for Local Business
useSchemaOrg([
  defineLocalBusiness({
    name: 'Silk Ride Luton Chauffeur Service',
    description: 'Premium luxury chauffeur service for Luton Airport transfers with professional shuttle coordination and luxury Mercedes vehicles.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.8763,
      longitude: -0.3717
    },
    telephone: '+44 7512 905514',
    url: 'https://silkride.co.uk/airport-transfers/luton',
    areaServed: [
      {
        '@type': 'Place',
        name: 'Luton Airport'
      },
      {
        '@type': 'City',
        name: 'London'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Bedfordshire'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Hertfordshire'
      }
    ],
    serviceType: 'Airport Transfer Service',
    priceRange: '£££'
  })
])
</script>