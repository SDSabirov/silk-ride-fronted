<template>
  <div>
    <Navbar />
    
    <!-- Hero Section -->
    <section class="relative min-h-screen lg:min-h-[90vh] flex items-center py-20">
      <div class="absolute inset-0 overflow-hidden">
        <img
          src="~/assets/images/sclass.webp"
          alt="Gatwick Airport Chauffeur Service London"
          class="w-full h-full object-cover"
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      <div class="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div class="max-w-4xl">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-[1.1] mb-4 sm:mb-6">
            Gatwick Airport <span class="text-gold block sm:inline">Chauffeur Service</span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-8 opacity-90 leading-relaxed">
            Luxury chauffeur service to and from London Gatwick Airport with professional drivers and premium Mercedes fleet
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <NuxtLink
              to="/booking"
              class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <i class="bx bx-calendar mr-2"></i>
              Book Gatwick Transfer
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
                <i class="bx bx-train text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">Both Terminals</h3>
                <p class="text-xs sm:text-sm opacity-75">North & South covered</p>
              </div>
            </div>
            <div class="flex items-center space-x-3 sm:col-span-2 lg:col-span-1">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-radar text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">Flight Monitoring</h3>
                <p class="text-xs sm:text-sm opacity-75">Real-time updates</p>
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
              Premium Gatwick Airport Transfers
            </h2>
            <div class="w-16 h-1 bg-gold mb-6"></div>
            <div class="prose prose-lg">
              <p class="text-gray-700 leading-relaxed mb-4">
                Our professional Gatwick chauffeur service provides luxury airport transfers with unmatched reliability and comfort. Located south of London, Gatwick Airport is the UK's second-busiest airport, serving millions of passengers annually.
              </p>
              <p class="text-gray-700 leading-relaxed mb-4">
                Whether you're flying with British Airways, easyJet, Virgin Atlantic, or any other carrier, our experienced chauffeurs provide seamless transfers between Gatwick Airport and your destination across London and the UK.
              </p>
              <p class="text-gray-700 leading-relaxed">
                We offer comprehensive service to both North and South terminals, with professional meet and greet service, flight monitoring, and luxury Mercedes vehicles for the ultimate travel experience.
              </p>
            </div>
          </div>
          <div class="lg:text-right">
            <div class="inline-block bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold text-black mb-6">Why Choose Silk Ride Gatwick?</h3>
              <ul class="space-y-4 text-left">
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Full coverage of North & South terminals</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Professional meet and greet service</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Real-time flight tracking and monitoring</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">60 minutes free waiting for international flights</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Premium Mercedes luxury vehicle fleet</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">24/7 availability and customer support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Terminal Information -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          Gatwick Terminal Services
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <!-- North Terminal -->
          <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mr-4">
                <span class="text-black font-bold text-xl">North</span>
              </div>
              <div>
                <h3 class="text-2xl font-semibold text-black">North Terminal</h3>
                <p class="text-gray-600">Main international gateway</p>
              </div>
            </div>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-lg text-black mb-2">Airlines Served:</h4>
                <p class="text-gray-700 text-sm mb-3">easyJet, Virgin Atlantic, Emirates, Delta, Norwegian, Turkish Airlines, and many more international carriers.</p>
              </div>
              <div>
                <h4 class="font-semibold text-lg text-black mb-2">Key Features:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Large arrivals hall with clear signage</li>
                  <li>• Multiple pickup points available</li>
                  <li>• Easy vehicle access and parking</li>
                  <li>• Shopping and dining facilities</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- South Terminal -->
          <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mr-4">
                <span class="text-black font-bold text-xl">South</span>
              </div>
              <div>
                <h3 class="text-2xl font-semibold text-black">South Terminal</h3>
                <p class="text-gray-600">British Airways hub</p>
              </div>
            </div>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-lg text-black mb-2">Airlines Served:</h4>
                <p class="text-gray-700 text-sm mb-3">British Airways, Vueling, Ryanair, Wizz Air, TAP Portugal, and various European and domestic carriers.</p>
              </div>
              <div>
                <h4 class="font-semibold text-lg text-black mb-2">Key Features:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Efficient passenger flow design</li>
                  <li>• Dedicated premium pickup areas</li>
                  <li>• Modern facilities and amenities</li>
                  <li>• Connected by shuttle service to North</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Service Guarantee -->
        <div class="bg-gradient-to-r from-gold to-yellow-400 rounded-2xl p-8 text-black text-center">
          <h3 class="text-2xl font-bold mb-4">Our Gatwick Service Guarantee</h3>
          <p class="text-lg mb-6">Whether you're arriving at North or South Terminal, our professional chauffeurs will be waiting for you with a personalized meet and greet service.</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div class="text-3xl font-bold mb-2">2</div>
              <div class="text-sm">Terminals Covered</div>
            </div>
            <div>
              <div class="text-3xl font-bold mb-2">60</div>
              <div class="text-sm">Minutes Free Waiting</div>
            </div>
            <div>
              <div class="text-3xl font-bold mb-2">24/7</div>
              <div class="text-sm">Service Available</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Popular Routes -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          Popular Gatwick Routes & Journey Times
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Central London</h3>
            <p class="text-gold font-bold text-xl mb-2">60-90 mins</p>
            <p class="text-sm text-gray-600">Westminster, Covent Garden, Piccadilly</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">South London</h3>
            <p class="text-gold font-bold text-xl mb-2">30-45 mins</p>
            <p class="text-sm text-gray-600">Croydon, Wimbledon, Richmond</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Brighton</h3>
            <p class="text-gold font-bold text-xl mb-2">45-60 mins</p>
            <p class="text-sm text-gray-600">Seaside resort, business district</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Surrey</h3>
            <p class="text-gold font-bold text-xl mb-2">30-50 mins</p>
            <p class="text-sm text-gray-600">Guildford, Woking, Epsom</p>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl p-12 text-center">
        <h2 class="text-3xl font-heading font-bold mb-4">
          Book Your Gatwick Airport Transfer Today
        </h2>
        <p class="text-xl mb-8 opacity-90">
          Experience premium chauffeur service with professional drivers and luxury vehicles
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/booking"
            class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300"
          >
            <i class="bx bx-calendar mr-2"></i>
            Book Gatwick Transfer
          </NuxtLink>
          <a
            href="tel:+447512905514"
            class="inline-flex items-center justify-center px-8 py-4 border-2 border-gold text-gold font-semibold text-lg rounded-lg hover:bg-gold hover:text-black transition-all duration-300"
          >
            <i class="bx bx-phone mr-2"></i>
            Get Instant Quote
          </a>
        </div>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script setup>
// SEO Meta Tags
useSeo('gatwickChauffeur')

// Structured Data for Local Business
useSchemaOrg([
  defineLocalBusiness({
    name: 'Silk Ride Gatwick Chauffeur Service',
    description: 'Premium luxury chauffeur service for Gatwick Airport transfers covering North & South terminals with professional drivers.',
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
      latitude: 51.1481,
      longitude: -0.1903
    },
    telephone: '+44 7512 905514',
    url: 'https://silkride.co.uk/airport-transfers/gatwick',
    areaServed: [
      {
        '@type': 'Place',
        name: 'Gatwick Airport'
      },
      {
        '@type': 'City',
        name: 'London'
      },
      {
        '@type': 'City',
        name: 'Brighton'
      }
    ],
    serviceType: 'Airport Transfer Service',
    priceRange: '£££'
  })
])
</script>