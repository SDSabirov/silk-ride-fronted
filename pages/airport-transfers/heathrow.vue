<template>
  <div>
    <Navbar />
    
    <!-- Hero Section -->
    <section class="relative min-h-screen lg:min-h-[90vh] flex items-center py-20">
      <div class="absolute inset-0 overflow-hidden">
        <img
          src="~/assets/images/vclassjett.webp"
          alt="Heathrow Airport Chauffeur Service London"
          class="w-full h-full object-cover"
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      <div class="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div class="max-w-4xl">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-[1.1] mb-4 sm:mb-6">
            Heathrow Airport <span class="text-gold block sm:inline">Chauffeur Service</span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-8 opacity-90 leading-relaxed">
            Premium luxury transfers to and from London Heathrow Airport with professional chauffeurs and meet & greet service
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <NuxtLink
              to="/booking"
              class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <i class="bx bx-calendar mr-2"></i>
              Book Heathrow Transfer
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
                <i class="bx bx-map text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">Meet & Greet</h3>
                <p class="text-xs sm:text-sm opacity-75">All terminals covered</p>
              </div>
            </div>
            <div class="flex items-center space-x-3 sm:col-span-2 lg:col-span-1">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-radar text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">Flight Tracking</h3>
                <p class="text-xs sm:text-sm opacity-75">Real-time monitoring</p>
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
              Premium Heathrow Airport Transfers
            </h2>
            <div class="w-16 h-1 bg-gold mb-6"></div>
            <div class="prose prose-lg">
              <p class="text-gray-700 leading-relaxed mb-4">
                Experience the ultimate in luxury airport transfers with our professional Heathrow chauffeur service. As London's busiest airport, Heathrow requires expert local knowledge and timing - something our experienced drivers excel at.
              </p>
              <p class="text-gray-700 leading-relaxed mb-4">
                Whether you're arriving on an international flight or departing for business, our premium Mercedes fleet and professionally trained chauffeurs ensure your journey is comfortable, punctual, and stress-free.
              </p>
              <p class="text-gray-700 leading-relaxed">
                We provide comprehensive coverage for all Heathrow terminals (T1, T2, T3, T4, and T5) with complimentary meet and greet service, flight monitoring, and generous waiting times.
              </p>
            </div>
          </div>
          <div class="lg:text-right">
            <div class="inline-block bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold text-black mb-6">Service Highlights</h3>
              <ul class="space-y-4 text-left">
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">All Heathrow terminals covered (T1-T5)</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">60 minutes free waiting for international arrivals</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">45 minutes free waiting for domestic arrivals</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Real-time flight tracking and monitoring</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Professional meet and greet service</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Luxury Mercedes S-Class, E-Class & V-Class fleet</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Terminal Information -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          Heathrow Terminal Coverage
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Terminal 2 -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <span class="text-black font-bold text-lg">T2</span>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Terminal 2 (Queen's Terminal)</h3>
            <p class="text-gray-600 mb-4 text-sm">The newest terminal serving Star Alliance airlines including United Airlines, Lufthansa, Swiss, and Austrian Airlines.</p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Meet & Greet at Arrivals</li>
              <li>• Short Stay Car Park nearby</li>
              <li>• Direct access to departure areas</li>
            </ul>
          </div>

          <!-- Terminal 3 -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <span class="text-black font-bold text-lg">T3</span>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Terminal 3</h3>
            <p class="text-gray-600 mb-4 text-sm">Serving long-haul destinations with airlines like Virgin Atlantic, Delta, American Airlines, and Emirates.</p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Spacious arrivals hall</li>
              <li>• Easy vehicle access</li>
              <li>• Multiple pickup points</li>
            </ul>
          </div>

          <!-- Terminal 4 -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <span class="text-black font-bold text-lg">T4</span>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Terminal 4</h3>
            <p class="text-gray-600 mb-4 text-sm">Primarily serving SkyTeam alliance airlines including KLM, Air France, and Malaysia Airlines.</p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Dedicated pickup area</li>
              <li>• Clear signage and directions</li>
              <li>• Efficient passenger flow</li>
            </ul>
          </div>

          <!-- Terminal 5 -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <span class="text-black font-bold text-lg">T5</span>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Terminal 5 (British Airways Hub)</h3>
            <p class="text-gray-600 mb-4 text-sm">British Airways' main hub with modern facilities and efficient passenger processing.</p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Modern terminal design</li>
              <li>• Fast passenger processing</li>
              <li>• Premium pickup locations</li>
            </ul>
          </div>

          <!-- All Terminals -->
          <div class="bg-gradient-to-br from-gold to-yellow-400 rounded-xl shadow-lg p-6 text-black md:col-span-2 lg:col-span-1">
            <div class="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-plane-takeoff text-gold text-lg"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Complete Coverage</h3>
            <p class="mb-4 text-sm">Our experienced chauffeurs know every terminal, every route, and every pickup point at Heathrow Airport.</p>
            <p class="text-sm font-semibold">Available 24/7 • All terminals • Professional service</p>
          </div>
        </div>
      </section>

      <!-- Popular Routes -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          Popular Heathrow Routes
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Central London</h3>
            <p class="text-gold font-bold text-xl mb-2">45-60 mins</p>
            <p class="text-sm text-gray-600">Mayfair, Westminster, City of London</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Canary Wharf</h3>
            <p class="text-gold font-bold text-xl mb-2">45-75 mins</p>
            <p class="text-sm text-gray-600">Financial district, Docklands</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">West London</h3>
            <p class="text-gold font-bold text-xl mb-2">20-35 mins</p>
            <p class="text-sm text-gray-600">Hammersmith, Kensington, Chelsea</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Oxford</h3>
            <p class="text-gold font-bold text-xl mb-2">60-90 mins</p>
            <p class="text-sm text-gray-600">University city, historic attractions</p>
          </div>
        </div>
      </section>

      <!-- Fleet Options -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          Choose Your Luxury Vehicle
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Mercedes S-Class -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <i class="bx bx-car text-6xl text-gray-400"></i>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-black mb-3">Mercedes S-Class</h3>
              <p class="text-gray-600 mb-4">The pinnacle of luxury with executive comfort, perfect for business travelers and VIP clients.</p>
              <ul class="text-sm text-gray-700 space-y-2 mb-4">
                <li>• Up to 3 passengers</li>
                <li>• Premium leather interior</li>
                <li>• Advanced climate control</li>
                <li>• Complimentary Wi-Fi & refreshments</li>
              </ul>
              <div class="text-gold font-bold text-lg">£160</div>
            </div>
          </div>

          <!-- Mercedes E-Class -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <i class="bx bx-car text-6xl text-gray-400"></i>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-black mb-3">Mercedes E-Class</h3>
              <p class="text-gray-600 mb-4">Perfect balance of luxury and efficiency, ideal for business and leisure travel.</p>
              <ul class="text-sm text-gray-700 space-y-2 mb-4">
                <li>• Up to 3 passengers</li>
                <li>• Comfortable leather seats</li>
                <li>• Professional service</li>
                <li>• Ample luggage space</li>
              </ul>
              <div class="text-gold font-bold text-lg">£120</div>
            </div>
          </div>

          <!-- Mercedes V-Class -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <i class="bx bx-car text-6xl text-gray-400"></i>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-black mb-3">Mercedes V-Class</h3>
              <p class="text-gray-600 mb-4">Spacious luxury MPV perfect for groups, families, or clients with extra luggage.</p>
              <ul class="text-sm text-gray-700 space-y-2 mb-4">
                <li>• Up to 7 passengers</li>
                <li>• Extra luggage capacity</li>
                <li>• Group travel comfort</li>
                <li>• Premium amenities</li>
              </ul>
              <div class="text-gold font-bold text-lg">£160</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl p-12 text-center">
        <h2 class="text-3xl font-heading font-bold mb-4">
          Ready to Book Your Heathrow Transfer?
        </h2>
        <p class="text-xl mb-8 opacity-90">
          Experience luxury airport transfers with professional chauffeurs
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/booking"
            class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300"
          >
            <i class="bx bx-calendar mr-2"></i>
            Book Now
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
useSeo('heathrowChauffeur')

// Structured Data for Local Business
useSchemaOrg([
  defineLocalBusiness({
    name: 'Silk Ride Heathrow Chauffeur Service',
    description: 'Premium luxury chauffeur service for Heathrow Airport transfers with professional drivers and luxury Mercedes vehicles.',
    image: [
      'https://silkride.co.uk/logo.svg',
      'https://silkride.co.uk/vclassSide.webp',
      'https://silkride.co.uk/sclassSide.webp',
      'https://silkride.co.uk/eclassSide.webp'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.4700,
      longitude: -0.4543
    },
    telephone: '+44 7512 905514',
    url: 'https://silkride.co.uk/airport-transfers/heathrow',
    areaServed: [
      {
        '@type': 'Place',
        name: 'Heathrow Airport'
      },
      {
        '@type': 'City',
        name: 'London'
      }
    ],
    serviceType: 'Airport Transfer Service',
    priceRange: '£££'
  })
])
</script>