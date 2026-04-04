<template>
  <div>
    <Navbar />

    <!-- Hero Section -->
    <section class="relative min-h-screen lg:min-h-[90vh] flex items-center py-20">
      <div class="absolute inset-0 overflow-hidden">
        <img
          src="~/assets/images/airports/city.webp"
          alt="London City Airport Chauffeur Service"
          class="w-full h-full object-cover"
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      <div class="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div class="max-w-4xl">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-[1.1] mb-4 sm:mb-6">
            London City Airport <span class="text-gold block sm:inline">Chauffeur Service</span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-8 opacity-90 leading-relaxed">
            Premium luxury transfers to and from London City Airport with professional chauffeurs and meet & greet service
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <NuxtLink
              to="/booking"
              class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <i class="bx bx-calendar mr-2"></i>
              Book London City Transfer
            </NuxtLink>
            <a
              href="tel:+442034882324"
              class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              <i class="bx bx-phone mr-2"></i>
              Call +44 203 488 2324
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
                <p class="text-xs sm:text-sm opacity-75">Terminal pickup</p>
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

    <!-- Breadcrumbs -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <CommonBreadcrumbs :items="breadcrumbs" />
    </div>

    <!-- Main Content -->
    <div class="max-w-screen-2xl mx-auto px-6 py-16">

      <!-- Service Overview -->
      <section class="mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-black mb-6">
              Premium London City Airport Transfers
            </h2>
            <div class="w-16 h-1 bg-gold mb-6"></div>
            <div class="prose prose-lg">
              <p class="text-gray-700 leading-relaxed mb-4">
                Experience the ultimate in luxury airport transfers with our professional London City Airport chauffeur service. Located in the heart of London's Docklands, London City Airport is the closest airport to Central London, making it the preferred choice for business travellers.
              </p>
              <p class="text-gray-700 leading-relaxed mb-4">
                Whether you're arriving on a short-haul European flight or departing for a business trip, our premium Mercedes fleet and professionally trained chauffeurs ensure your journey is comfortable, punctual, and stress-free.
              </p>
              <p class="text-gray-700 leading-relaxed">
                With its compact layout and fast check-in times, London City Airport pairs perfectly with our efficient meet and greet service. Your chauffeur will be waiting as you exit arrivals, ready to whisk you to your destination in luxury.
              </p>
            </div>
          </div>
          <div class="lg:text-right">
            <div class="inline-block bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold text-black mb-6">Service Highlights</h3>
              <ul class="space-y-4 text-left">
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Closest airport to Central London (6 miles)</span>
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

      <!-- Airport Information -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          About London City Airport
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-buildings text-black text-lg"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Docklands Location</h3>
            <p class="text-gray-600 mb-4 text-sm">Situated in London's Royal Docks, just 6 miles from the City of London and 9 miles from the West End. The most convenient airport for Canary Wharf and the financial district.</p>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-briefcase text-black text-lg"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Business Traveller Hub</h3>
            <p class="text-gray-600 mb-4 text-sm">Serving major European business destinations including Frankfurt, Zurich, Geneva, Amsterdam, and Dublin. Preferred by executives for its speed and efficiency.</p>
          </div>

          <div class="bg-gradient-to-br from-gold to-yellow-400 rounded-xl shadow-lg p-6 text-black">
            <div class="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <i class="bx bxs-plane-take-off text-gold text-lg"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Quick & Efficient</h3>
            <p class="mb-4 text-sm">With its single-terminal design, passengers can go from check-in to gate in as little as 20 minutes. Combined with our curbside pickup, it's the fastest airport experience in London.</p>
            <p class="text-sm font-semibold">Available 24/7 • Meet & Greet • Professional service</p>
          </div>
        </div>
      </section>

      <!-- Popular Routes -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          Popular London City Airport Routes
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">City of London</h3>
            <p class="text-gold font-bold text-xl mb-2">15-25 mins</p>
            <p class="text-sm text-gray-600">Bank, Liverpool Street, Moorgate</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Canary Wharf</h3>
            <p class="text-gold font-bold text-xl mb-2">10-15 mins</p>
            <p class="text-sm text-gray-600">Financial district, Docklands</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">West End</h3>
            <p class="text-gold font-bold text-xl mb-2">25-40 mins</p>
            <p class="text-sm text-gray-600">Mayfair, Westminster, Knightsbridge</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Central London</h3>
            <p class="text-gold font-bold text-xl mb-2">20-35 mins</p>
            <p class="text-sm text-gray-600">Hotels, conference venues</p>
          </div>
        </div>
      </section>

      <!-- Fleet Options -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          Choose Your Luxury Vehicle
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Mercedes E-Class -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
              <img src="~/assets/images/eclass.webp" alt="Mercedes E-Class" class="h-full w-full object-cover rounded-lg" loading="lazy" />
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
                <span class="text-gold font-bold text-2xl">£120</span>
              </div>
            </div>
          </div>

          <!-- Mercedes S-Class -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
              <img src="~/assets/images/sclassBackground.webp" alt="Mercedes S-Class" class="h-full w-full object-cover rounded-lg" loading="lazy" />
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
                <span class="text-gold font-bold text-2xl">£160</span>
              </div>
            </div>
          </div>

          <!-- Mercedes V-Class -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
              <img src="~/assets/images/covers/fleet.webp" alt="Mercedes V-Class" class="h-full w-full object-cover rounded-lg" loading="lazy" />
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
                <span class="text-gold font-bold text-2xl">£160</span>
              </div>
            </div>
          </div>
        </div>
        <p class="text-center text-gray-500 text-sm mt-6">All prices include meet & greet, flight monitoring, and 60 minutes free waiting time.</p>
      </section>

      <!-- Other Airport Transfers -->
      <section class="mb-16">
        <h2 class="text-2xl font-heading font-bold text-center mb-8">Other London Airport Transfers</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <NuxtLink to="/airport-transfers/heathrow" class="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center group">
            <i class="bx bxs-plane-take-off text-3xl text-gold mb-3 block"></i>
            <h3 class="font-bold text-lg mb-2 group-hover:text-gold transition-colors">Heathrow Airport Transfer</h3>
            <p class="text-gray-600 text-sm">From £120</p>
          </NuxtLink>
          <NuxtLink to="/airport-transfers/gatwick" class="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center group">
            <i class="bx bxs-plane-take-off text-3xl text-gold mb-3 block"></i>
            <h3 class="font-bold text-lg mb-2 group-hover:text-gold transition-colors">Gatwick Airport Transfer</h3>
            <p class="text-gray-600 text-sm">From £180</p>
          </NuxtLink>
          <NuxtLink to="/airport-transfers/stansted" class="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center group">
            <i class="bx bxs-plane-take-off text-3xl text-gold mb-3 block"></i>
            <h3 class="font-bold text-lg mb-2 group-hover:text-gold transition-colors">Stansted Airport Transfer</h3>
            <p class="text-gray-600 text-sm">From £200</p>
          </NuxtLink>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl p-12 text-center">
        <h2 class="text-3xl font-heading font-bold mb-4">
          Ready to Book Your London City Airport Transfer?
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
            href="tel:+442034882324"
            class="inline-flex items-center justify-center px-8 py-4 border-2 border-gold text-gold font-semibold text-lg rounded-lg hover:bg-gold hover:text-black transition-all duration-300"
          >
            <i class="bx bx-phone mr-2"></i>
            Call +44 203 488 2324
          </a>
        </div>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script setup>
// SEO Meta Tags
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Airport Transfers', path: '/airport-transfers' },
  { name: 'London City', path: '/airport-transfers/london-city' },
]

useSeo('londonCityChauffeur')

// Structured Data for Local Business
useSchemaOrg([
  defineLocalBusiness({
    name: 'Silk Ride London City Airport Chauffeur Service',
    description: 'Premium luxury chauffeur service for London City Airport transfers with professional drivers and luxury Mercedes vehicles.',
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
      latitude: 51.5048,
      longitude: 0.0495
    },
    telephone: '+44 203 488 2324',
    url: 'https://silkride.co.uk/airport-transfers/london-city',
    areaServed: [
      {
        '@type': 'Place',
        name: 'London City Airport'
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
