<template>
  <div>
    <Navbar />

    <!-- Hero Section -->
    <section class="relative min-h-screen lg:min-h-[90vh] flex items-center py-20">
      <div class="absolute inset-0 overflow-hidden">
        <img
          src="~/assets/images/airports/5906.webp"
          alt="Heathrow Airport Chauffeur Service London"
          class="w-full h-full object-cover"
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      <div class="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div class="max-w-4xl">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-[1.1] mb-4 sm:mb-6">
            {{ $t('airportPages.heathrow.heroTitle') }} <span class="text-gold block sm:inline">{{ $t('airportPages.heathrow.heroHighlight') }}</span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-8 opacity-90 leading-relaxed">
            {{ $t('airportPages.heathrow.heroDesc') }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <NuxtLink
              :to="localePath('/booking')"
              class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <i class="bx bx-calendar mr-2"></i>
              {{ $t('airportPages.common.bookTransfer', { airport: 'Heathrow' }) }}
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
                <i class="bx bx-map text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">{{ $t('airportPages.common.meetGreet') }}</h3>
                <p class="text-xs sm:text-sm opacity-75">{{ $t('airportPages.common.meetGreetDesc') }}</p>
              </div>
            </div>
            <div class="flex items-center space-x-3 sm:col-span-2 lg:col-span-1">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-radar text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">{{ $t('airportPages.common.flightTracking') }}</h3>
                <p class="text-xs sm:text-sm opacity-75">{{ $t('airportPages.common.flightTrackingDesc') }}</p>
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
              {{ $t('airportPages.heathrow.overviewTitle') }}
            </h2>
            <div class="w-16 h-1 bg-gold mb-6"></div>
            <div class="prose prose-lg">
              <p class="text-gray-700 leading-relaxed mb-4">{{ $t('airportPages.heathrow.overviewP1') }}</p>
              <p class="text-gray-700 leading-relaxed mb-4">{{ $t('airportPages.heathrow.overviewP2') }}</p>
              <p class="text-gray-700 leading-relaxed">{{ $t('airportPages.heathrow.overviewP3') }}</p>
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
          {{ $t('airportPages.heathrow.terminalTitle') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Terminal 2 -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <span class="text-black font-bold text-lg">T2</span>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">{{ $t('airportPages.heathrow.t2Title') }}</h3>
            <p class="text-gray-600 mb-4 text-sm">{{ $t('airportPages.heathrow.t2Desc') }}</p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li v-for="(f, i) in t('airportPages.heathrow.t2Features')" :key="i">• {{ f }}</li>
            </ul>
          </div>

          <!-- Terminal 3 -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <span class="text-black font-bold text-lg">T3</span>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">{{ $t('airportPages.heathrow.t3Title') }}</h3>
            <p class="text-gray-600 mb-4 text-sm">{{ $t('airportPages.heathrow.t3Desc') }}</p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li v-for="(f, i) in t('airportPages.heathrow.t3Features')" :key="i">• {{ f }}</li>
            </ul>
          </div>

          <!-- Terminal 4 -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <span class="text-black font-bold text-lg">T4</span>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">{{ $t('airportPages.heathrow.t4Title') }}</h3>
            <p class="text-gray-600 mb-4 text-sm">{{ $t('airportPages.heathrow.t4Desc') }}</p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li v-for="(f, i) in t('airportPages.heathrow.t4Features')" :key="i">• {{ f }}</li>
            </ul>
          </div>

          <!-- Terminal 5 -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <span class="text-black font-bold text-lg">T5</span>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">{{ $t('airportPages.heathrow.t5Title') }}</h3>
            <p class="text-gray-600 mb-4 text-sm">{{ $t('airportPages.heathrow.t5Desc') }}</p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li v-for="(f, i) in t('airportPages.heathrow.t5Features')" :key="i">• {{ f }}</li>
            </ul>
          </div>

          <!-- All Terminals -->
          <div class="bg-gradient-to-br from-gold to-yellow-400 rounded-xl shadow-lg p-6 text-black md:col-span-2 lg:col-span-1">
            <div class="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <i class="bx bxs-plane-take-off text-gold text-lg"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ $t('airportPages.heathrow.completeTitle') }}</h3>
            <p class="mb-4 text-sm">{{ $t('airportPages.heathrow.completeDesc') }}</p>
            <p class="text-sm font-semibold">{{ $t('airportPages.heathrow.completeNote') }}</p>
          </div>
        </div>
      </section>

      <!-- Popular Routes -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          {{ $t('airportPages.heathrow.routesTitle') }}
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
                <span class="text-gold font-bold text-2xl">{{ $t('airportPages.heathrow.eClassPrice') }}</span>
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
                <span class="text-gold font-bold text-2xl">{{ $t('airportPages.heathrow.sClassPrice') }}</span>
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
                <span class="text-gold font-bold text-2xl">{{ $t('airportPages.heathrow.vClassPrice') }}</span>
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
          <NuxtLink :to="localePath('/airport-transfers/gatwick')" class="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center group">
            <i class="bx bxs-plane-take-off text-3xl text-gold mb-3 block"></i>
            <h3 class="font-bold text-lg mb-2 group-hover:text-gold transition-colors">{{ $t('airportPages.gatwick.heroTitle') }}</h3>
            <p class="text-gray-600 text-sm">{{ $t('airportPages.common.from') }} £180</p>
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
          {{ $t('airportPages.common.readyToBook', { airport: $t('airportPages.heathrow.heroTitle') }) }}
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
  { name: 'Heathrow', path: '/airport-transfers/heathrow' },
])

const highlights = computed(() => {
  const items = []
  for (let i = 0; i < 10; i++) {
    const key = `airportPages.heathrow.highlights[${i}]`
    const val = t(key)
    if (val === key) break
    items.push(val)
  }
  return items
})

const routes = computed(() => [
  { name: t('airportPages.heathrow.routes.centralLondon.name'), time: t('airportPages.heathrow.routes.centralLondon.time'), desc: t('airportPages.heathrow.routes.centralLondon.desc') },
  { name: t('airportPages.heathrow.routes.canaryWharf.name'), time: t('airportPages.heathrow.routes.canaryWharf.time'), desc: t('airportPages.heathrow.routes.canaryWharf.desc') },
  { name: t('airportPages.heathrow.routes.westLondon.name'), time: t('airportPages.heathrow.routes.westLondon.time'), desc: t('airportPages.heathrow.routes.westLondon.desc') },
  { name: t('airportPages.heathrow.routes.oxford.name'), time: t('airportPages.heathrow.routes.oxford.time'), desc: t('airportPages.heathrow.routes.oxford.desc') },
])

useSeo('heathrowChauffeur')

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
    telephone: '+44 203 488 2324',
    url: 'https://silkride.co.uk/airport-transfers/heathrow',
    areaServed: [
      { '@type': 'Place', name: 'Heathrow Airport' },
      { '@type': 'City', name: 'London' }
    ],
    serviceType: 'Airport Transfer Service',
    priceRange: '£££'
  })
])
</script>
