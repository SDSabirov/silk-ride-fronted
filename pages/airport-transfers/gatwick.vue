<template>
  <div>
    <Navbar />

    <!-- Hero Section -->
    <section class="relative min-h-screen lg:min-h-[90vh] flex items-center py-20">
      <div class="absolute inset-0 overflow-hidden">
        <img
          src="~/assets/images/airports/5247.webp"
          alt="Gatwick Airport Chauffeur Service London"
          class="w-full h-full object-cover"
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      <div class="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div class="max-w-4xl">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-[1.1] mb-4 sm:mb-6">
            {{ $t('airportPages.gatwick.heroTitle') }} <span class="text-gold block sm:inline">{{ $t('airportPages.gatwick.heroHighlight') }}</span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-8 opacity-90 leading-relaxed">
            {{ $t('airportPages.gatwick.heroDesc') }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <NuxtLink
              :to="localePath('/booking')"
              class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <i class="bx bx-calendar mr-2"></i>
              {{ $t('airportPages.common.bookTransfer', { airport: 'Gatwick' }) }}
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
                <i class="bx bx-time text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">{{ $t('airportPages.common.freeWait') }}</h3>
                <p class="text-xs sm:text-sm opacity-75">{{ $t('airportPages.common.freeWaitDesc') }}</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-train text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">{{ $t('airportPages.common.bothTerminals') }}</h3>
                <p class="text-xs sm:text-sm opacity-75">{{ $t('airportPages.common.bothTerminalsDesc') }}</p>
              </div>
            </div>
            <div class="flex items-center space-x-3 sm:col-span-2 lg:col-span-1">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-radar text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">{{ $t('airportPages.common.flightMonitoring') }}</h3>
                <p class="text-xs sm:text-sm opacity-75">{{ $t('airportPages.common.flightMonitoringDesc') }}</p>
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
              {{ $t('airportPages.gatwick.overviewTitle') }}
            </h2>
            <div class="w-16 h-1 bg-gold mb-6"></div>
            <div class="prose prose-lg">
              <p class="text-gray-700 leading-relaxed mb-4">{{ $t('airportPages.gatwick.overviewP1') }}</p>
              <p class="text-gray-700 leading-relaxed mb-4">{{ $t('airportPages.gatwick.overviewP2') }}</p>
              <p class="text-gray-700 leading-relaxed">{{ $t('airportPages.gatwick.overviewP3') }}</p>
            </div>
          </div>
          <div class="lg:text-right">
            <div class="inline-block bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold text-black mb-6">{{ $t('airportPages.common.serviceHighlights') }}</h3>
              <ul class="space-y-4 text-left">
                <li v-for="(item, i) in highlights" :key="i" class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Terminal Information -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          {{ $t('airportPages.gatwick.terminalTitle') }}
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <!-- North Terminal -->
          <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mr-4">
                <span class="text-black font-bold text-xl">North</span>
              </div>
              <div>
                <h3 class="text-2xl font-semibold text-black">{{ $t('airportPages.gatwick.northTitle') }}</h3>
                <p class="text-gray-600">{{ $t('airportPages.gatwick.northSubtitle') }}</p>
              </div>
            </div>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-lg text-black mb-2">{{ $t('airportPages.gatwick.northAirlines') }}</h4>
                <p class="text-gray-700 text-sm mb-3">{{ $t('airportPages.gatwick.northAirlinesDesc') }}</p>
              </div>
              <div>
                <h4 class="font-semibold text-lg text-black mb-2">{{ $t('airportPages.gatwick.northFeatures') }}</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li v-for="(f, i) in northFeatures" :key="i">• {{ f }}</li>
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
                <h3 class="text-2xl font-semibold text-black">{{ $t('airportPages.gatwick.southTitle') }}</h3>
                <p class="text-gray-600">{{ $t('airportPages.gatwick.southSubtitle') }}</p>
              </div>
            </div>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-lg text-black mb-2">{{ $t('airportPages.gatwick.southAirlines') }}</h4>
                <p class="text-gray-700 text-sm mb-3">{{ $t('airportPages.gatwick.southAirlinesDesc') }}</p>
              </div>
              <div>
                <h4 class="font-semibold text-lg text-black mb-2">{{ $t('airportPages.gatwick.southFeatures') }}</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li v-for="(f, i) in southFeatures" :key="i">• {{ f }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Service Guarantee -->
        <div class="bg-gradient-to-r from-gold to-yellow-400 rounded-2xl p-8 text-black text-center">
          <h3 class="text-2xl font-bold mb-4">{{ $t('airportPages.gatwick.guaranteeTitle') }}</h3>
          <p class="text-lg mb-6">{{ $t('airportPages.gatwick.guaranteeDesc') }}</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div class="text-3xl font-bold mb-2">2</div>
              <div class="text-sm">{{ $t('airportPages.gatwick.terminalsCovered') }}</div>
            </div>
            <div>
              <div class="text-3xl font-bold mb-2">60</div>
              <div class="text-sm">{{ $t('airportPages.gatwick.minutesFreeWaiting') }}</div>
            </div>
            <div>
              <div class="text-3xl font-bold mb-2">24/7</div>
              <div class="text-sm">{{ $t('airportPages.gatwick.serviceAvailable') }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Popular Routes -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          {{ $t('airportPages.gatwick.routesTitle') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="route in routes" :key="route.name" class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">{{ route.name }}</h3>
            <p class="text-gold font-bold text-xl mb-2">{{ route.time }}</p>
            <p class="text-sm text-gray-600">{{ route.desc }}</p>
          </div>
        </div>
      </section>

      <!-- Fleet Options -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          {{ $t('airportPages.gatwick.pricingTitle') }}
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
                <span class="text-gold font-bold text-2xl">{{ $t('airportPages.gatwick.eClassPrice') }}</span>
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
                <span class="text-gold font-bold text-2xl">{{ $t('airportPages.gatwick.sClassPrice') }}</span>
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
                <span class="text-gold font-bold text-2xl">{{ $t('airportPages.gatwick.vClassPrice') }}</span>
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
          <NuxtLink :to="localePath('/airport-transfers/heathrow')" class="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center group">
            <i class="bx bxs-plane-take-off text-3xl text-gold mb-3 block"></i>
            <h3 class="font-bold text-lg mb-2 group-hover:text-gold transition-colors">{{ $t('airportPages.heathrow.heroTitle') }}</h3>
            <p class="text-gray-600 text-sm">{{ $t('airportPages.common.from') }} £120</p>
          </NuxtLink>
          <NuxtLink :to="localePath('/airport-transfers/stansted')" class="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center group">
            <i class="bx bxs-plane-take-off text-3xl text-gold mb-3 block"></i>
            <h3 class="font-bold text-lg mb-2 group-hover:text-gold transition-colors">{{ $t('airportPages.stansted.heroTitle') }}</h3>
            <p class="text-gray-600 text-sm">{{ $t('airportPages.common.from') }} £200</p>
          </NuxtLink>
          <NuxtLink :to="localePath('/airport-transfers/luton')" class="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center group">
            <i class="bx bxs-plane-take-off text-3xl text-gold mb-3 block"></i>
            <h3 class="font-bold text-lg mb-2 group-hover:text-gold transition-colors">{{ $t('airportPages.luton.heroTitle') }}</h3>
            <p class="text-gray-600 text-sm">{{ $t('airportPages.common.from') }} £200</p>
          </NuxtLink>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl p-12 text-center">
        <h2 class="text-3xl font-heading font-bold mb-4">
          {{ $t('airportPages.common.readyToBook', { airport: $t('airportPages.gatwick.heroTitle') }) }}
        </h2>
        <p class="text-xl mb-8 opacity-90">
          {{ $t('airportPages.common.experiencePremium') }}
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
  { name: 'Gatwick', path: '/airport-transfers/gatwick' },
])

const highlights = computed(() => {
  const items = []
  for (let i = 0; i < 10; i++) {
    const key = `airportPages.gatwick.highlights[${i}]`
    const val = t(key)
    if (val === key) break
    items.push(val)
  }
  return items
})

const northFeatures = computed(() => {
  const items = []
  for (let i = 0; i < 10; i++) {
    const key = `airportPages.gatwick.northFeaturesList[${i}]`
    const val = t(key)
    if (val === key) break
    items.push(val)
  }
  return items
})

const southFeatures = computed(() => {
  const items = []
  for (let i = 0; i < 10; i++) {
    const key = `airportPages.gatwick.southFeaturesList[${i}]`
    const val = t(key)
    if (val === key) break
    items.push(val)
  }
  return items
})

const routes = computed(() => [
  { name: t('airportPages.gatwick.routes.centralLondon.name'), time: t('airportPages.gatwick.routes.centralLondon.time'), desc: t('airportPages.gatwick.routes.centralLondon.desc') },
  { name: t('airportPages.gatwick.routes.southLondon.name'), time: t('airportPages.gatwick.routes.southLondon.time'), desc: t('airportPages.gatwick.routes.southLondon.desc') },
  { name: t('airportPages.gatwick.routes.brighton.name'), time: t('airportPages.gatwick.routes.brighton.time'), desc: t('airportPages.gatwick.routes.brighton.desc') },
  { name: t('airportPages.gatwick.routes.surrey.name'), time: t('airportPages.gatwick.routes.surrey.time'), desc: t('airportPages.gatwick.routes.surrey.desc') },
])

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
    telephone: '+44 203 488 2324',
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
