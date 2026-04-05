<template>
  <div>
    <Navbar />

    <!-- Hero Section -->
    <section class="relative min-h-screen lg:min-h-[90vh] flex items-center py-20">
      <div class="absolute inset-0 overflow-hidden">
        <img
          src="~/assets/images/airports/5906.webp"
          alt="Biggin Hill Airport Private Jet Chauffeur Service"
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
            {{ $t('airportPages.bigginHill.heroTitle') }} <span class="text-gold block sm:inline">{{ $t('airportPages.bigginHill.heroHighlight') }}</span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-8 opacity-90 leading-relaxed">
            {{ $t('airportPages.bigginHill.heroDesc') }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <NuxtLink
              :to="localePath('/booking')"
              class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <i class="bx bx-calendar mr-2"></i>
              {{ $t('airportPages.common.bookTransfer', { airport: 'Biggin Hill' }) }}
            </NuxtLink>
            <a
              href="tel:+442034882324"
              class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              <i class="bx bx-phone mr-2"></i>
              {{ $t('airportPages.common.callUs') }}
            </a>
          </div>

          <!-- Key Features -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-shield text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">VIP Airside Access</h3>
                <p class="text-xs sm:text-sm opacity-75">Direct planeside pickup</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-time text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">30 Min to London</h3>
                <p class="text-xs sm:text-sm opacity-75">South East London access</p>
              </div>
            </div>
            <div class="flex items-center space-x-3 sm:col-span-2 lg:col-span-1">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-lock text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">Complete Discretion</h3>
                <p class="text-xs sm:text-sm opacity-75">NDA-trained chauffeurs</p>
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
              Executive Transfers for Private Aviation
            </h2>
            <div class="w-16 h-1 bg-gold mb-6"></div>
            <div class="prose prose-lg">
              <p class="text-gray-700 leading-relaxed mb-4">
                London Biggin Hill Airport is one of the UK's premier private jet airports, serving high-net-worth individuals, business leaders, and royalty. Located in the London Borough of Bromley, it offers a seamless, discreet alternative to commercial airports.
              </p>
              <p class="text-gray-700 leading-relaxed mb-4">
                Our executive chauffeur service is tailored specifically for private aviation clients. We understand the pace and privacy requirements of private jet travel — your chauffeur arrives before you land, monitors your aircraft in real time, and is ready planeside or at the FBO the moment you're ready.
              </p>
              <p class="text-gray-700 leading-relaxed">
                With just a 30-minute drive to Central London via the A21 and A232, Biggin Hill is the fastest route from sky to city. Our chauffeurs know every road, shortcut, and traffic pattern to get you there on time.
              </p>
            </div>
          </div>
          <div class="lg:text-right">
            <div class="inline-block bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold text-black mb-6">{{ $t('airportPages.common.serviceHighlights') }}</h3>
              <ul class="space-y-4 text-left">
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Airside and FBO terminal pickup available</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Real-time private aircraft tracking</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">NDA and confidentiality trained chauffeurs</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">30 minutes to Mayfair, Knightsbridge & the City</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Luggage assistance and meet & greet</span>
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

      <!-- Why Biggin Hill -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          Why Choose Biggin Hill for Private Aviation
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-building text-black text-lg"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Premium FBO Facilities</h3>
            <p class="text-gray-600 text-sm">Two world-class FBOs — Signature Flight Support and Biggin Hill Executive Handling — offering VIP lounges, customs clearance, and private security screening.</p>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-timer text-black text-lg"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Fastest Route to London</h3>
            <p class="text-gray-600 text-sm">Just 12 miles from Central London. Reach Canary Wharf in 25 minutes, the City in 30 minutes, and Mayfair in 35 minutes — faster than any commercial airport.</p>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-lock-alt text-black text-lg"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Total Privacy & Security</h3>
            <p class="text-gray-600 text-sm">No commercial passenger crowds. Private customs and immigration, direct aircraft-to-car transfers, and enhanced security protocols for high-profile clients.</p>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-time-five text-black text-lg"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">24/7 Operations</h3>
            <p class="text-gray-600 text-sm">Biggin Hill operates 06:30–23:00 daily with noise-preferential routing. Our chauffeur service is available 24/7, including pre-dawn and late-evening flights.</p>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-globe text-black text-lg"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">International Connections</h3>
            <p class="text-gray-600 text-sm">Direct access to European business capitals — Geneva, Paris, Nice, Zurich — and connections to transatlantic private jet routes via charter operators.</p>
          </div>

          <div class="bg-gradient-to-br from-gold to-yellow-400 rounded-xl shadow-lg p-6 text-black">
            <div class="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-crown text-gold text-lg"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Trusted by Private Clients</h3>
            <p class="text-sm">Silk Ride is the preferred chauffeur partner for private jet operators and FBOs at Biggin Hill. Discreet, punctual, and always impeccable.</p>
          </div>
        </div>
      </section>

      <!-- Popular Routes -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          Popular Routes from Biggin Hill
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Mayfair & Knightsbridge</h3>
            <p class="text-gold font-bold text-xl mb-2">30-40 mins</p>
            <p class="text-sm text-gray-600">West End hotels, private members' clubs</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Canary Wharf</h3>
            <p class="text-gold font-bold text-xl mb-2">25-35 mins</p>
            <p class="text-sm text-gray-600">Financial district, Docklands</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">City of London</h3>
            <p class="text-gold font-bold text-xl mb-2">30-45 mins</p>
            <p class="text-sm text-gray-600">Bank, Liverpool Street, Moorgate</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Surrey & Kent</h3>
            <p class="text-gold font-bold text-xl mb-2">20-40 mins</p>
            <p class="text-sm text-gray-600">Country estates, golf clubs</p>
          </div>
        </div>
      </section>

      <!-- Fleet Options -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          {{ $t('airportPages.common.chooseVehicle') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Mercedes E-Class -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
              <img src="~/assets/images/transparentcars/eclass.webp" alt="Mercedes E-Class" class="h-full w-full object-contain" loading="lazy" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-black mb-3">{{ $t('airportPages.common.eClass.title') }}</h3>
              <p class="text-gray-600 mb-4">{{ $t('airportPages.common.eClass.desc') }}</p>
              <ul class="text-sm text-gray-700 space-y-2 mb-4">
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>{{ $t('airportPages.common.eClass.passengers') }}</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>{{ $t('airportPages.common.eClass.seats') }}</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>{{ $t('airportPages.common.eClass.service') }}</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>{{ $t('airportPages.common.eClass.luggage') }}</li>
              </ul>
              <div class="flex items-baseline gap-1">
                <span class="text-sm text-gray-500">{{ $t('airportPages.common.from') }}</span>
                <span class="text-gold font-bold text-2xl">{{ $t('airportPages.bigginHill.eClassPrice') }}</span>
              </div>
            </div>
          </div>

          <!-- Mercedes S-Class -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
              <img src="~/assets/images/transparentcars/sclass.webp" alt="Mercedes S-Class" class="h-full w-full object-contain" loading="lazy" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-black mb-3">{{ $t('airportPages.common.sClass.title') }}</h3>
              <p class="text-gray-600 mb-4">{{ $t('airportPages.common.sClass.desc') }}</p>
              <ul class="text-sm text-gray-700 space-y-2 mb-4">
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>{{ $t('airportPages.common.sClass.passengers') }}</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>{{ $t('airportPages.common.sClass.interior') }}</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>{{ $t('airportPages.common.sClass.climate') }}</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>{{ $t('airportPages.common.sClass.wifi') }}</li>
              </ul>
              <div class="flex items-baseline gap-1">
                <span class="text-sm text-gray-500">{{ $t('airportPages.common.from') }}</span>
                <span class="text-gold font-bold text-2xl">{{ $t('airportPages.bigginHill.sClassPrice') }}</span>
              </div>
            </div>
          </div>

          <!-- Mercedes V-Class -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
              <img src="~/assets/images/transparentcars/vclass.jpg" alt="Mercedes V-Class" class="h-full w-full object-contain" loading="lazy" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-black mb-3">{{ $t('airportPages.common.vClass.title') }}</h3>
              <p class="text-gray-600 mb-4">{{ $t('airportPages.common.vClass.desc') }}</p>
              <ul class="text-sm text-gray-700 space-y-2 mb-4">
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>{{ $t('airportPages.common.vClass.passengers') }}</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>{{ $t('airportPages.common.vClass.luggage') }}</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>{{ $t('airportPages.common.vClass.group') }}</li>
                <li class="flex items-center"><i class="bx bx-check text-gold mr-2"></i>{{ $t('airportPages.common.vClass.amenities') }}</li>
              </ul>
              <div class="flex items-baseline gap-1">
                <span class="text-sm text-gray-500">{{ $t('airportPages.common.from') }}</span>
                <span class="text-gold font-bold text-2xl">{{ $t('airportPages.bigginHill.vClassPrice') }}</span>
              </div>
            </div>
          </div>
        </div>
        <p class="text-center text-gray-500 text-sm mt-6">{{ $t('airportPages.common.pricesInclude') }}</p>
      </section>

      <!-- Other Airport Transfers -->
      <section class="mb-16">
        <h2 class="text-2xl font-heading font-bold text-center mb-8">{{ $t('airportPages.common.otherAirports') }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <NuxtLink :to="localePath('/airport-transfers/farnborough')" class="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center group">
            <i class="bx bxs-plane-take-off text-3xl text-gold mb-3 block"></i>
            <h3 class="font-bold text-lg mb-2 group-hover:text-gold transition-colors">{{ $t('airportPages.farnborough.heroTitle') }}</h3>
            <p class="text-gray-600 text-sm">{{ $t('airportPages.common.from') }} £240</p>
          </NuxtLink>
          <NuxtLink :to="localePath('/airport-transfers/heathrow')" class="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center group">
            <i class="bx bxs-plane-take-off text-3xl text-gold mb-3 block"></i>
            <h3 class="font-bold text-lg mb-2 group-hover:text-gold transition-colors">{{ $t('airportPages.heathrow.heroTitle') }}</h3>
            <p class="text-gray-600 text-sm">{{ $t('airportPages.common.from') }} £120</p>
          </NuxtLink>
          <NuxtLink :to="localePath('/airport-transfers/gatwick')" class="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center group">
            <i class="bx bxs-plane-take-off text-3xl text-gold mb-3 block"></i>
            <h3 class="font-bold text-lg mb-2 group-hover:text-gold transition-colors">{{ $t('airportPages.gatwick.heroTitle') }}</h3>
            <p class="text-gray-600 text-sm">{{ $t('airportPages.common.from') }} £180</p>
          </NuxtLink>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl p-12 text-center">
        <h2 class="text-3xl font-heading font-bold mb-4">
          {{ $t('airportPages.common.readyToBook', { airport: $t('airportPages.bigginHill.heroTitle') }) }}
        </h2>
        <p class="text-xl mb-8 opacity-90">
          {{ $t('airportPages.common.experienceLuxury') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            :to="localePath('/booking')"
            class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300"
          >
            <i class="bx bx-calendar mr-2"></i>
            {{ $t('airportPages.common.bookNow') }}
          </NuxtLink>
          <a
            href="tel:+442034882324"
            class="inline-flex items-center justify-center px-8 py-4 border-2 border-gold text-gold font-semibold text-lg rounded-lg hover:bg-gold hover:text-black transition-all duration-300"
          >
            <i class="bx bx-phone mr-2"></i>
            {{ $t('airportPages.common.callUs') }}
          </a>
        </div>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { useI18n, useLocalePath } from '#imports'

const { t } = useI18n()
const localePath = useLocalePath()

const breadcrumbs = computed(() => [
  { name: t('airportPages.common.breadcrumbHome'), path: '/' },
  { name: t('airportPages.common.breadcrumbAirportTransfers'), path: '/airport-transfers' },
  { name: 'Biggin Hill', path: '/airport-transfers/biggin-hill' },
])

useSeo('bigginHillChauffeur')

useSchemaOrg([
  defineLocalBusiness({
    name: 'Silk Ride Biggin Hill Private Jet Chauffeur Service',
    description: 'Executive chauffeur service for private jet passengers at London Biggin Hill Airport. Discreet luxury transfers with Mercedes fleet.',
    image: [
      'https://silkride.co.uk/logo.svg',
      'https://silkride.co.uk/vclassSide.webp',
      'https://silkride.co.uk/sclassSide.webp',
      'https://silkride.co.uk/eclassSide.webp'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressRegion: 'Bromley',
      addressCountry: 'GB'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.3308,
      longitude: 0.0325
    },
    telephone: '+44 203 488 2324',
    url: 'https://silkride.co.uk/airport-transfers/biggin-hill',
    areaServed: [
      { '@type': 'Place', name: 'London Biggin Hill Airport' },
      { '@type': 'City', name: 'London' },
      { '@type': 'Place', name: 'Kent' },
      { '@type': 'Place', name: 'Surrey' }
    ],
    serviceType: 'Private Jet Airport Transfer Service',
    priceRange: '££££'
  })
])
</script>
