<template>
  <div>
    <Navbar />
    
    <!-- Hero Section -->
    <section class="relative min-h-screen lg:min-h-[90vh] flex items-center py-20">
      <div class="absolute inset-0 overflow-hidden">
        <img
          src="~/assets/images/airports/698.webp"
          alt="Stansted Airport Chauffeur Service London"
          class="w-full h-full object-cover"
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      <div class="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div class="max-w-4xl">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-[1.1] mb-4 sm:mb-6">
            Stansted Airport <span class="text-gold block sm:inline">Chauffeur Service</span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-8 opacity-90 leading-relaxed">
            Professional chauffeur transfers to and from London Stansted Airport with luxury vehicles and experienced drivers
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <NuxtLink
              to="/booking"
              class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <i class="bx bx-calendar mr-2"></i>
              Book Stansted Transfer
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
                <p class="text-xs sm:text-sm opacity-75">Arrivals hall service</p>
              </div>
            </div>
            <div class="flex items-center space-x-3 sm:col-span-2 lg:col-span-1">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-plane-takeoff text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">Low-Cost Hub</h3>
                <p class="text-xs sm:text-sm opacity-75">Ryanair & budget airlines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-screen-2xl mx-auto px-6 py-16">
      
      <!-- Service Overview -->
      <section class="mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-black mb-6">
              Reliable Stansted Airport Transfers
            </h2>
            <div class="w-16 h-1 bg-gold mb-6"></div>
            <div class="prose prose-lg">
              <p class="text-gray-700 leading-relaxed mb-4">
                London Stansted Airport serves as the UK's third-largest airport and the primary hub for many European low-cost carriers including Ryanair, easyJet, and Jet2. Our professional Stansted chauffeur service provides reliable, comfortable transfers regardless of your airline or destination.
              </p>
              <p class="text-gray-700 leading-relaxed mb-4">
                Located northeast of London in Essex, Stansted Airport requires experienced drivers familiar with the M11 corridor and various routes into Central London. Our chauffeurs possess extensive knowledge of optimal routes and real-time traffic management.
              </p>
              <p class="text-gray-700 leading-relaxed">
                Whether you're traveling for business or leisure, arriving early morning or late evening, our premium Mercedes fleet and professional service ensure your journey begins and ends in comfort and style.
              </p>
            </div>
          </div>
          <div class="lg:text-right">
            <div class="inline-block bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold text-black mb-6">Stansted Service Features</h3>
              <ul class="space-y-4 text-left">
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Single terminal - no confusion or transfers</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Efficient arrivals and departures process</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Professional meet and greet service</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Real-time flight monitoring and updates</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Premium Mercedes luxury vehicles</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Experienced drivers with local knowledge</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Airport Information -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          About Stansted Airport
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Terminal Info -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-buildings text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Single Terminal Design</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Stansted features a single, award-winning terminal designed by Norman Foster, making navigation simple and stress-free for passengers.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Clear signage and layout</li>
              <li>• Efficient passenger flow</li>
              <li>• Modern facilities and amenities</li>
              <li>• Easy vehicle pickup access</li>
            </ul>
          </div>

          <!-- Airlines -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-plane text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Major Airlines</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Stansted serves as a hub for major low-cost and charter airlines connecting the UK to Europe and beyond.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Ryanair (largest base)</li>
              <li>• easyJet European routes</li>
              <li>• Jet2 holiday destinations</li>
              <li>• TUI charter flights</li>
            </ul>
          </div>

          <!-- Location -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-current-location text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Strategic Location</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Located in Essex, 42 miles northeast of Central London, with excellent transport links via the M11 motorway.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Direct M11 access</li>
              <li>• Multiple route options to London</li>
              <li>• Easy access to Cambridge</li>
              <li>• Close to business parks</li>
            </ul>
          </div>
        </div>

        <!-- Service Guarantee -->
        <div class="mt-12 bg-gradient-to-r from-gold to-yellow-400 rounded-2xl p-8 text-black text-center">
          <h3 class="text-2xl font-bold mb-4">Our Stansted Promise</h3>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div class="text-3xl font-bold mb-2">1</div>
              <div class="text-sm">Terminal Coverage</div>
            </div>
            <div>
              <div class="text-3xl font-bold mb-2">60</div>
              <div class="text-sm">Minutes Free Wait</div>
            </div>
            <div>
              <div class="text-3xl font-bold mb-2">24/7</div>
              <div class="text-sm">Service Available</div>
            </div>
            <div>
              <div class="text-3xl font-bold mb-2">100%</div>
              <div class="text-sm">Professional Service</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Popular Routes -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          Popular Stansted Routes & Journey Times
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Central London</h3>
            <p class="text-gold font-bold text-xl mb-2">60-90 mins</p>
            <p class="text-sm text-gray-600">City, Westminster, Shoreditch</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">North London</h3>
            <p class="text-gold font-bold text-xl mb-2">45-75 mins</p>
            <p class="text-sm text-gray-600">Camden, Islington, Hampstead</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Cambridge</h3>
            <p class="text-gold font-bold text-xl mb-2">30-45 mins</p>
            <p class="text-sm text-gray-600">University city, business parks</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Essex Towns</h3>
            <p class="text-gold font-bold text-xl mb-2">15-45 mins</p>
            <p class="text-sm text-gray-600">Chelmsford, Harlow, Bishop's Stortford</p>
          </div>
        </div>
      </section>

      <!-- Why Choose Section -->
      <section class="mb-16">
        <div class="bg-gray-50 rounded-2xl p-12">
          <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
            Why Choose Our Stansted Chauffeur Service?
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="bx bx-shield-check text-black text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-black mb-3">Reliable Service</h3>
              <p class="text-gray-700">Professional, punctual service you can depend on for all your Stansted transfers.</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="bx bx-car text-black text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-black mb-3">Luxury Fleet</h3>
              <p class="text-gray-700">Premium Mercedes vehicles maintained to the highest standards for your comfort.</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="bx bx-user-check text-black text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-black mb-3">Expert Drivers</h3>
              <p class="text-gray-700">Experienced chauffeurs with extensive knowledge of London and surrounding areas.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Fleet Options -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          Stansted Transfer Pricing
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Mercedes E-Class -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
              <img src="~/assets/images/transparentcars/eclass.webp" alt="Mercedes E-Class" class="h-full w-full object-contain" loading="lazy" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-black mb-3">Mercedes E-Class</h3>
              <p class="text-gray-600 mb-4">Perfect balance of luxury and efficiency, ideal for business and leisure travel.</p>
              <ul class="text-sm text-gray-700 space-y-2 mb-4">
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Up to 3 passengers</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Comfortable leather seats</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Professional service</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Ample luggage space</li>
              </ul>
              <div class="flex items-baseline gap-1">
                <span class="text-sm text-gray-500">From</span>
                <span class="text-gold font-bold text-2xl">£200</span>
              </div>
            </div>
          </div>

          <!-- Mercedes S-Class -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
              <img src="~/assets/images/transparentcars/sclass.webp" alt="Mercedes S-Class" class="h-full w-full object-contain" loading="lazy" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-black mb-3">Mercedes S-Class</h3>
              <p class="text-gray-600 mb-4">The pinnacle of luxury with executive comfort, perfect for business travelers and VIP clients.</p>
              <ul class="text-sm text-gray-700 space-y-2 mb-4">
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Up to 3 passengers</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Premium leather interior</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Advanced climate control</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Complimentary Wi-Fi & refreshments</li>
              </ul>
              <div class="flex items-baseline gap-1">
                <span class="text-sm text-gray-500">From</span>
                <span class="text-gold font-bold text-2xl">£250</span>
              </div>
            </div>
          </div>

          <!-- Mercedes V-Class -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
              <img src="~/assets/images/transparentcars/vclass.jpg" alt="Mercedes V-Class" class="h-full w-full object-contain" loading="lazy" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-black mb-3">Mercedes V-Class</h3>
              <p class="text-gray-600 mb-4">Spacious luxury MPV perfect for groups, families, or clients with extra luggage.</p>
              <ul class="text-sm text-gray-700 space-y-2 mb-4">
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Up to 7 passengers</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Extra luggage capacity</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Group travel comfort</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Premium amenities</li>
              </ul>
              <div class="flex items-baseline gap-1">
                <span class="text-sm text-gray-500">From</span>
                <span class="text-gold font-bold text-2xl">£250</span>
              </div>
            </div>
          </div>
        </div>
        <p class="text-center text-gray-500 text-sm mt-6">All prices include meet & greet, flight monitoring, and 60 minutes free waiting time.</p>
      </section>

      <!-- Contact CTA -->
      <section class="bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl p-12 text-center">
        <h2 class="text-3xl font-heading font-bold mb-4">
          Book Your Stansted Airport Transfer
        </h2>
        <p class="text-xl mb-8 opacity-90">
          Experience reliable, professional chauffeur service to and from Stansted Airport
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/booking"
            class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300"
          >
            <i class="bx bx-calendar mr-2"></i>
            Book Stansted Transfer
          </NuxtLink>
          <a
            href="tel:+447512905514"
            class="inline-flex items-center justify-center px-8 py-4 border-2 border-gold text-gold font-semibold text-lg rounded-lg hover:bg-gold hover:text-black transition-all duration-300"
          >
            <i class="bx bx-phone mr-2"></i>
            Call for Quote
          </a>
        </div>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script setup>
// SEO Meta Tags
useSeo('stanstedChauffeur')

// Structured Data for Local Business
useSchemaOrg([
  defineLocalBusiness({
    name: 'Silk Ride Stansted Chauffeur Service',
    description: 'Professional luxury chauffeur service for Stansted Airport transfers with experienced drivers and premium Mercedes vehicles.',
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
      latitude: 51.8860,
      longitude: 0.2389
    },
    telephone: '+44 7512 905514',
    url: 'https://silkride.co.uk/airport-transfers/stansted',
    areaServed: [
      {
        '@type': 'Place',
        name: 'Stansted Airport'
      },
      {
        '@type': 'City',
        name: 'London'
      },
      {
        '@type': 'City',
        name: 'Cambridge'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Essex'
      }
    ],
    serviceType: 'Airport Transfer Service',
    priceRange: '£££'
  })
])
</script>