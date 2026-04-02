<template>
  <div>
    <Navbar />

    <!-- Hero Section -->
    <section class="relative min-h-screen lg:min-h-[90vh] flex items-center py-20">
      <div class="absolute inset-0 overflow-hidden">
        <img
          src="~/assets/images/airports/5247.webp"
          alt="Farnborough Airport Private Jet Chauffeur Service"
          class="w-full h-full object-cover"
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      <div class="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div class="max-w-4xl">
          <div class="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-2 mb-6">
            <i class="bx bxs-plane text-gold"></i>
            <span class="text-gold text-sm font-semibold uppercase tracking-wider">Private Aviation</span>
          </div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-[1.1] mb-4 sm:mb-6">
            Farnborough Airport <span class="text-gold block sm:inline">Private Jet Chauffeur</span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-8 opacity-90 leading-relaxed">
            Premium executive chauffeur service for TAG Farnborough Airport — Europe's leading business aviation airport
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <NuxtLink
              to="/booking"
              class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <i class="bx bx-calendar mr-2"></i>
              Book Farnborough Transfer
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
                <i class="bx bx-award text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">Europe's No.1</h3>
                <p class="text-xs sm:text-sm opacity-75">Business aviation hub</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-car text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">45 Min to London</h3>
                <p class="text-xs sm:text-sm opacity-75">Via M3 motorway</p>
              </div>
            </div>
            <div class="flex items-center space-x-3 sm:col-span-2 lg:col-span-1">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-user-check text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">Planeside Service</h3>
                <p class="text-xs sm:text-sm opacity-75">Direct aircraft access</p>
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
              The Gold Standard in Private Jet Transfers
            </h2>
            <div class="w-16 h-1 bg-gold mb-6"></div>
            <div class="prose prose-lg">
              <p class="text-gray-700 leading-relaxed mb-4">
                TAG Farnborough Airport is Europe's premier dedicated business aviation airport, handling over 30,000 private jet movements annually. Located in Hampshire, just 35 miles southwest of London, it serves the world's most discerning travellers.
              </p>
              <p class="text-gray-700 leading-relaxed mb-4">
                Silk Ride provides bespoke executive chauffeur service tailored to the Farnborough experience. From the moment your aircraft touches down, our chauffeur is positioned at the TAG terminal — ready to assist with luggage, escort you to your Mercedes, and deliver you to your London destination in complete comfort.
              </p>
              <p class="text-gray-700 leading-relaxed">
                The M3 corridor provides a direct 45-minute route to Central London. For clients heading to Hampshire, Surrey, or Berkshire, journey times are even shorter — making Farnborough the ideal gateway for both London-bound and countryside-bound travellers.
              </p>
            </div>
          </div>
          <div class="lg:text-right">
            <div class="inline-block bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold text-black mb-6">Farnborough Service Highlights</h3>
              <ul class="space-y-4 text-left">
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">TAG terminal meet & greet service</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Real-time private aircraft tracking</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Direct M3 motorway access to London</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Coordination with Farnborough ATC for timing</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Confidentiality and discretion guaranteed</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Mercedes S-Class, E-Class & V-Class fleet</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Farnborough -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          Why Business Leaders Choose Farnborough
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-building-house text-black text-lg"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">World-Class TAG Terminal</h3>
            <p class="text-gray-600 text-sm">The award-winning TAG terminal features private VIP suites, business meeting rooms, customs and immigration on-site, and luxury vehicle access directly from the terminal doors.</p>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-briefcase text-black text-lg"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Pure Business Focus</h3>
            <p class="text-gray-600 text-sm">No commercial flights. Farnborough is 100% dedicated to business and private aviation, ensuring fast turnarounds, minimal wait times, and a seamless executive experience.</p>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-map-pin text-black text-lg"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Strategic Location</h3>
            <p class="text-gray-600 text-sm">Positioned on the M3 corridor with direct access to the A331 and M25. Ideal for clients heading to London, the Home Counties, or connecting to Ascot, Wentworth, and the Surrey Hills.</p>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-calendar-event text-black text-lg"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Major Events Hub</h3>
            <p class="text-gray-600 text-sm">Host of the Farnborough International Airshow and a gateway for Ascot, Henley Royal Regatta, Wimbledon, and other prestigious events. We provide event-specific chauffeur packages.</p>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-radar text-black text-lg"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">30,000+ Annual Movements</h3>
            <p class="text-gray-600 text-sm">Farnborough handles more business aviation flights than any other UK airport. Our chauffeurs have extensive experience with the airport's operations and protocols.</p>
          </div>

          <div class="bg-gradient-to-br from-gold to-yellow-400 rounded-xl shadow-lg p-6 text-black">
            <div class="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-crown text-gold text-lg"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Preferred by Charter Operators</h3>
            <p class="text-sm">Silk Ride works directly with leading charter companies including NetJets, VistaJet, and Flexjet to provide seamless ground transport coordination.</p>
          </div>
        </div>
      </section>

      <!-- Popular Routes -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          Popular Routes from Farnborough
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Central London</h3>
            <p class="text-gold font-bold text-xl mb-2">45-60 mins</p>
            <p class="text-sm text-gray-600">Mayfair, Westminster, Knightsbridge</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Wentworth & Ascot</h3>
            <p class="text-gold font-bold text-xl mb-2">20-30 mins</p>
            <p class="text-sm text-gray-600">Golf clubs, racecourse, estates</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Canary Wharf</h3>
            <p class="text-gold font-bold text-xl mb-2">60-75 mins</p>
            <p class="text-sm text-gray-600">Financial district, Docklands</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Hampshire & Surrey</h3>
            <p class="text-gold font-bold text-xl mb-2">15-30 mins</p>
            <p class="text-sm text-gray-600">Country estates, Guildford, Winchester</p>
          </div>
        </div>
      </section>

      <!-- Fleet Options -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          Choose Your Luxury Vehicle
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
              <img src="~/assets/images/transparentcars/eclass.webp" alt="Mercedes E-Class" class="h-full w-full object-contain" loading="lazy" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-black mb-3">Mercedes E-Class</h3>
              <p class="text-gray-600 mb-4">Executive saloon for efficient business transfers from Farnborough to London.</p>
              <ul class="text-sm text-gray-700 space-y-2 mb-4">
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Up to 3 passengers</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Leather interior, climate control</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Wi-Fi & USB charging</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Ample luggage space</li>
              </ul>
              <div class="flex items-baseline gap-1">
                <span class="text-sm text-gray-500">From</span>
                <span class="text-gold font-bold text-2xl">£240</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
              <img src="~/assets/images/transparentcars/sclass.webp" alt="Mercedes S-Class" class="h-full w-full object-contain" loading="lazy" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-black mb-3">Mercedes S-Class</h3>
              <p class="text-gray-600 mb-4">The ultimate choice for VIP clients and heads of state arriving at Farnborough.</p>
              <ul class="text-sm text-gray-700 space-y-2 mb-4">
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Up to 3 passengers</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Premium massage seats</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Complimentary refreshments</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Rear entertainment screens</li>
              </ul>
              <div class="flex items-baseline gap-1">
                <span class="text-sm text-gray-500">From</span>
                <span class="text-gold font-bold text-2xl">£270</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
              <img src="~/assets/images/transparentcars/vclass.jpg" alt="Mercedes V-Class" class="h-full w-full object-contain" loading="lazy" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-black mb-3">Mercedes V-Class</h3>
              <p class="text-gray-600 mb-4">Perfect for executive groups and families with golf bags or extra luggage.</p>
              <ul class="text-sm text-gray-700 space-y-2 mb-4">
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Up to 7 passengers</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Oversized luggage capacity</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Conference-style seating</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>Premium group travel</li>
              </ul>
              <div class="flex items-baseline gap-1">
                <span class="text-sm text-gray-500">From</span>
                <span class="text-gold font-bold text-2xl">£270</span>
              </div>
            </div>
          </div>
        </div>
        <p class="text-center text-gray-500 text-sm mt-6">All prices include TAG terminal meet & greet, aircraft tracking, and luggage assistance.</p>
      </section>

      <!-- Other Airport Transfers -->
      <section class="mb-16">
        <h2 class="text-2xl font-heading font-bold text-center mb-8">Other London Airport Transfers</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <NuxtLink to="/airport-transfers/biggin-hill" class="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center group">
            <i class="bx bxs-plane-take-off text-3xl text-gold mb-3 block"></i>
            <h3 class="font-bold text-lg mb-2 group-hover:text-gold transition-colors">Biggin Hill Airport</h3>
            <p class="text-gray-600 text-sm">Private Jet | From £170</p>
          </NuxtLink>
          <NuxtLink to="/airport-transfers/heathrow" class="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center group">
            <i class="bx bxs-plane-take-off text-3xl text-gold mb-3 block"></i>
            <h3 class="font-bold text-lg mb-2 group-hover:text-gold transition-colors">Heathrow Airport</h3>
            <p class="text-gray-600 text-sm">From £120</p>
          </NuxtLink>
          <NuxtLink to="/airport-transfers/gatwick" class="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center group">
            <i class="bx bxs-plane-take-off text-3xl text-gold mb-3 block"></i>
            <h3 class="font-bold text-lg mb-2 group-hover:text-gold transition-colors">Gatwick Airport</h3>
            <p class="text-gray-600 text-sm">From £180</p>
          </NuxtLink>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl p-12 text-center">
        <h2 class="text-3xl font-heading font-bold mb-4">
          Book Your Farnborough Private Jet Transfer
        </h2>
        <p class="text-xl mb-8 opacity-90">
          Executive ground transport for Europe's leading business aviation airport
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
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Airport Transfers', path: '/services/airport-transfers' },
  { name: 'Farnborough', path: '/airport-transfers/farnborough' },
]

useSeo('farnboroughChauffeur')

useSchemaOrg([
  defineLocalBusiness({
    name: 'Silk Ride Farnborough Private Jet Chauffeur Service',
    description: 'Premium executive chauffeur service for TAG Farnborough Airport. Luxury Mercedes transfers for private jet and business aviation clients.',
    image: [
      'https://silkride.co.uk/logo.svg',
      'https://silkride.co.uk/vclassSide.webp',
      'https://silkride.co.uk/sclassSide.webp',
      'https://silkride.co.uk/eclassSide.webp'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Farnborough',
      addressRegion: 'Hampshire',
      addressCountry: 'GB'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.2757,
      longitude: -0.7764
    },
    telephone: '+44 203 488 2324',
    url: 'https://silkride.co.uk/airport-transfers/farnborough',
    areaServed: [
      { '@type': 'Place', name: 'TAG Farnborough Airport' },
      { '@type': 'City', name: 'London' },
      { '@type': 'Place', name: 'Hampshire' },
      { '@type': 'Place', name: 'Surrey' }
    ],
    serviceType: 'Private Jet Airport Transfer Service',
    priceRange: '££££'
  })
])
</script>
