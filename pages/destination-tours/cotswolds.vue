<template>
  <div>
    <Navbar />
    
    <!-- Hero Section -->
    <section class="relative min-h-screen lg:min-h-[90vh] flex items-center py-20">
      <div class="absolute inset-0 overflow-hidden">
        <img
          src="~/assets/images/covers/business-trip.webp"
          alt="Cotswolds Chauffeur Service and Village Tours from London"
          class="w-full h-full object-cover"
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      <div class="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div class="max-w-4xl">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-[1.1] mb-4 sm:mb-6">
            Cotswolds <span class="text-gold block sm:inline">Chauffeur Service</span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-8 opacity-90 leading-relaxed">
            Luxury chauffeur service and private countryside tours to the picturesque Cotswolds villages with professional drivers and premium vehicles
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <NuxtLink
              to="/booking"
              class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <i class="bx bx-calendar mr-2"></i>
              Book Cotswolds Tour
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
                <i class="bx bx-map text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">90 Minutes</h3>
                <p class="text-xs sm:text-sm opacity-75">From Central London</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-home text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">Honey Stone</h3>
                <p class="text-xs sm:text-sm opacity-75">Historic villages</p>
              </div>
            </div>
            <div class="flex items-center space-x-3 sm:col-span-2 lg:col-span-1">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-leaf text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">AONB</h3>
                <p class="text-xs sm:text-sm opacity-75">Outstanding Natural Beauty</p>
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
              Discover England's Most Beautiful Countryside
            </h2>
            <div class="w-16 h-1 bg-gold mb-6"></div>
            <div class="prose prose-lg">
              <p class="text-gray-700 leading-relaxed mb-4">
                Experience the quintessential English countryside with our premium Cotswolds chauffeur service. This Area of Outstanding Natural Beauty spans nearly 800 square miles of rolling hills, honey-colored stone villages, and peaceful pastoral landscapes that have remained unchanged for centuries.
              </p>
              <p class="text-gray-700 leading-relaxed mb-4">
                Our professional chauffeurs provide comfortable transfers from London to the Cotswolds, or comprehensive tours of the region's most picturesque villages. Whether you're visiting Chipping Campden, Bourton-on-the-Water, Stow-on-the-Wold, or the hidden gems known only to locals, we ensure your countryside escape is truly memorable.
              </p>
              <p class="text-gray-700 leading-relaxed">
                Located across Gloucestershire, Oxfordshire, Warwickshire, and Worcestershire, the Cotswolds are easily accessible from London via the M40 and A40. Our experienced drivers know the scenic country lanes and can take you off the beaten path to discover authentic English village life.
              </p>
            </div>
          </div>
          <div class="lg:text-right">
            <div class="inline-block bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold text-black mb-6">Cotswolds Service Options</h3>
              <ul class="space-y-4 text-left">
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Scenic village tours and photography stops</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Historic market towns and antique shopping</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Traditional pub lunches and local dining</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Gardens and historic houses visits</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Walking trail access and countryside walks</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Flexible itineraries and local recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Villages & Attractions -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          Must-Visit Cotswolds Villages
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Chipping Campden -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-crown text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Chipping Campden</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Known as the "Jewel of the Cotswolds," this historic market town features a magnificent High Street lined with honey-colored limestone buildings.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Historic High Street & Market Hall</li>
              <li>• St James' Church (perpendicular Gothic)</li>
              <li>• Cotswold Way walking trail start</li>
              <li>• Arts & crafts heritage</li>
            </ul>
          </div>

          <!-- Bourton-on-the-Water -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-water text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Bourton-on-the-Water</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Called the "Venice of the Cotswolds," this charming village features low bridges crossing the River Windrush that runs through the center.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Picturesque river bridges</li>
              <li>• Model Village (one-ninth scale replica)</li>
              <li>• Cotswold Motoring Museum</li>
              <li>• Traditional tea rooms & shops</li>
            </ul>
          </div>

          <!-- Stow-on-the-Wold -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-store text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Stow-on-the-Wold</h3>
            <p class="text-gray-600 mb-4 text-sm">
              A historic market town perched on a hilltop, famous for its large market square surrounded by antique shops, galleries, and pubs.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Historic market square</li>
              <li>• Antique shops & art galleries</li>
              <li>• St Edward's Church (Norman origins)</li>
              <li>• Traditional Cotswold pubs</li>
            </ul>
          </div>

          <!-- Chipping Norton -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-buildings text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Chipping Norton</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Known as the "Gateway to the Cotswolds," this market town features the famous Bliss Mill and serves many celebrity residents.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Bliss Mill (Victorian architecture)</li>
              <li>• Historic market square</li>
              <li>• St Mary's Church (medieval)</li>
              <li>• Theatre & cultural events</li>
            </ul>
          </div>

          <!-- Winchcombe -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-church text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Winchcombe</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Once the capital of the Anglo-Saxon kingdom of Mercia, this historic town is gateway to Sudeley Castle and beautiful walking trails.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Sudeley Castle & gardens</li>
              <li>• St Peter's Church (medieval)</li>
              <li>• Cotswold Way walking access</li>
              <li>• Local museums & heritage sites</li>
            </ul>
          </div>

          <!-- Broadway -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-landscape text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Broadway</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Called the "Jewel of the Cotswolds," Broadway features a perfect High Street and the iconic Broadway Tower with panoramic views.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Broadway Tower (panoramic views)</li>
              <li>• Picture-perfect High Street</li>
              <li>• Fine dining restaurants</li>
              <li>• Arts & crafts shops</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Journey Information -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          Journey Times & Routes
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Central London</h3>
            <p class="text-gold font-bold text-xl mb-2">90-120 mins</p>
            <p class="text-sm text-gray-600">Via M40 & A40</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Heathrow Airport</h3>
            <p class="text-gold font-bold text-xl mb-2">60-90 mins</p>
            <p class="text-sm text-gray-600">Direct via M40</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Oxford</h3>
            <p class="text-gold font-bold text-xl mb-2">45-60 mins</p>
            <p class="text-sm text-gray-600">Perfect combination tour</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Bath</h3>
            <p class="text-gold font-bold text-xl mb-2">60-90 mins</p>
            <p class="text-sm text-gray-600">Historic cities combination</p>
          </div>
        </div>
      </section>

      <!-- Tour Options -->
      <section class="mb-16">
        <div class="bg-gradient-to-r from-gold to-yellow-400 rounded-2xl p-12 text-black">
          <h2 class="text-3xl font-heading font-bold text-center mb-8">
            Cotswolds Tour Packages
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-black/10 rounded-xl p-6 text-center">
              <h3 class="text-xl font-bold mb-4">Half-Day Villages</h3>
              <div class="text-3xl font-bold mb-2">5 Hours</div>
              <p class="text-sm mb-4">Bourton-on-the-Water, Stow-on-the-Wold, traditional pub lunch</p>
              <div class="font-semibold">From £350</div>
            </div>
            <div class="bg-black/10 rounded-xl p-6 text-center">
              <h3 class="text-xl font-bold mb-4">Full Cotswolds Experience</h3>
              <div class="text-3xl font-bold mb-2">8 Hours</div>
              <p class="text-sm mb-4">5+ villages, Chipping Campden, Broadway Tower, local dining</p>
              <div class="font-semibold">From £550</div>
            </div>
            <div class="bg-black/10 rounded-xl p-6 text-center">
              <h3 class="text-xl font-bold mb-4">Oxford & Cotswolds</h3>
              <div class="text-3xl font-bold mb-2">10 Hours</div>
              <p class="text-sm mb-4">Oxford University tour plus scenic Cotswolds villages</p>
              <div class="font-semibold">From £650</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl p-12 text-center">
        <h2 class="text-3xl font-heading font-bold mb-4">
          Experience England's Most Beautiful Countryside
        </h2>
        <p class="text-xl mb-8 opacity-90">
          Discover the timeless charm of the Cotswolds with our luxury chauffeur service and expert local knowledge
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/booking"
            class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300"
          >
            <i class="bx bx-calendar mr-2"></i>
            Book Cotswolds Tour
          </NuxtLink>
          <a
            href="tel:+447512905514"
            class="inline-flex items-center justify-center px-8 py-4 border-2 border-gold text-gold font-semibold text-lg rounded-lg hover:bg-gold hover:text-black transition-all duration-300"
          >
            <i class="bx bx-phone mr-2"></i>
            Call for Custom Tour
          </a>
        </div>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script setup>
// SEO Meta Tags
useSeo('cotswoldsChauffeur')

// Structured Data for Local Business
useSchemaOrg([
  defineLocalBusiness({
    name: 'Silk Ride Cotswolds Chauffeur Service',
    description: 'Luxury chauffeur service and private countryside tours to the Cotswolds from London, featuring historic villages and scenic landscapes.',
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
      latitude: 51.8330,
      longitude: -1.8433
    },
    telephone: '+44 7512 905514',
    url: 'https://silkride.co.uk/destination-tours/cotswolds',
    areaServed: [
      {
        '@type': 'Place',
        name: 'Cotswolds'
      },
      {
        '@type': 'City',
        name: 'London'
      },
      {
        '@type': 'Place',
        name: 'Chipping Campden'
      },
      {
        '@type': 'Place',
        name: 'Bourton-on-the-Water'
      },
      {
        '@type': 'Place',
        name: 'Stow-on-the-Wold'
      }
    ],
    serviceType: 'Chauffeur Service and Private Tours',
    priceRange: '£££'
  })
])
</script>