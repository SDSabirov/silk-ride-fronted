<template>
  <div>
    <Navbar />
    
    <!-- Hero Section -->
    <section class="relative min-h-screen lg:min-h-[90vh] flex items-center py-20">
      <div class="absolute inset-0 overflow-hidden">
        <img
          src="~/assets/images/covers/business-trip.webp"
          alt="Cambridge Chauffeur Service and University Tours from London"
          class="w-full h-full object-cover"
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      <div class="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div class="max-w-4xl">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-[1.1] mb-4 sm:mb-6">
            Cambridge <span class="text-gold block sm:inline">Chauffeur Service</span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-8 opacity-90 leading-relaxed">
            Luxury chauffeur service and private tours to the historic university city of Cambridge with professional drivers and premium vehicles
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <NuxtLink
              to="/booking"
              class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <i class="bx bx-calendar mr-2"></i>
              Book Cambridge Transfer
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
                <h3 class="font-semibold text-base sm:text-lg">55 Minutes</h3>
                <p class="text-xs sm:text-sm opacity-75">From Central London</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-building text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">University Tours</h3>
                <p class="text-xs sm:text-sm opacity-75">Historic colleges & chapels</p>
              </div>
            </div>
            <div class="flex items-center space-x-3 sm:col-span-2 lg:col-span-1">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-water text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">River Cam</h3>
                <p class="text-xs sm:text-sm opacity-75">Punting & riverside walks</p>
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
              Discover Cambridge in Luxury
            </h2>
            <div class="w-16 h-1 bg-gold mb-6"></div>
            <div class="prose prose-lg">
              <p class="text-gray-700 leading-relaxed mb-4">
                Experience the prestigious university city of Cambridge with our premium chauffeur service. Home to one of the world's oldest and most renowned universities, Cambridge combines 800 years of academic excellence with stunning architecture, beautiful river views, and vibrant cultural life.
              </p>
              <p class="text-gray-700 leading-relaxed mb-4">
                Our professional chauffeurs provide comfortable transfers from London to Cambridge, or comprehensive tours of this historic city. Whether you're visiting for university events, business meetings, sightseeing, or exploring the famous colleges, we ensure your journey is relaxing and memorable.
              </p>
              <p class="text-gray-700 leading-relaxed">
                Located just 55 miles north of London, Cambridge is easily accessible via the M11 and A14. Our experienced drivers know the best routes and can provide insightful commentary about the city's rich academic heritage and attractions.
              </p>
            </div>
          </div>
          <div class="lg:text-right">
            <div class="inline-block bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold text-black mb-6">Cambridge Service Options</h3>
              <ul class="space-y-4 text-left">
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Point-to-point transfers from London</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Half-day and full-day sightseeing tours</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">University college visits and events</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">River Cam punting experiences</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Business meetings and conference transport</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Flexible waiting times and itineraries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Attractions -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          Cambridge's Must-Visit Attractions
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Cambridge University -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-building text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Cambridge University Colleges</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Visit iconic colleges including King's College Chapel, Trinity College, and St John's College with the famous Bridge of Sighs.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• King's College Chapel & choir</li>
              <li>• Trinity College & Wren Library</li>
              <li>• St John's College & Bridge of Sighs</li>
              <li>• The Round Church (Holy Sepulchre)</li>
            </ul>
          </div>

          <!-- River Cam -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-water text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">River Cam Activities</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Experience the quintessential Cambridge activity of punting along the River Cam, or enjoy peaceful riverside walks through the city.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Punting tours & hire</li>
              <li>• The Backs (college gardens)</li>
              <li>• Mathematical Bridge</li>
              <li>• Riverside walks & cycling</li>
            </ul>
          </div>

          <!-- Museums & Culture -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-palette text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Museums & Heritage</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Explore world-class museums and cultural institutions showcasing everything from natural history to contemporary art.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Fitzwilliam Museum</li>
              <li>• Museum of Archaeology & Anthropology</li>
              <li>• Sedgwick Museum of Earth Sciences</li>
              <li>• Kettle's Yard gallery</li>
            </ul>
          </div>

          <!-- Shopping & Dining -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-shopping-bag text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Shopping & Markets</h3>
            <p class="text-gray-600 mb-4 text-sm">
              From historic markets to modern shopping centers, Cambridge offers unique shopping experiences in a beautiful setting.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Cambridge Market Square</li>
              <li>• Grand Arcade shopping center</li>
              <li>• Independent bookshops</li>
              <li>• Antique shops & galleries</li>
            </ul>
          </div>

          <!-- Science & Innovation -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-atom text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Science & Innovation</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Discover Cambridge's role as a global center for scientific research and innovation, from historic discoveries to modern tech.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Cavendish Laboratory heritage</li>
              <li>• Cambridge Science Park</li>
              <li>• Centre for Computing History</li>
              <li>• Innovation districts</li>
            </ul>
          </div>

          <!-- Parks & Gardens -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-leaf text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Parks & Gardens</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Enjoy beautiful green spaces and historic gardens perfect for relaxation between college visits and sightseeing.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Jesus Green & Midsummer Common</li>
              <li>• Parker's Piece (birthplace of football rules)</li>
              <li>• Cambridge University Botanic Garden</li>
              <li>• College gardens & courtyards</li>
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
            <p class="text-gold font-bold text-xl mb-2">55-75 mins</p>
            <p class="text-sm text-gray-600">Via M11 motorway</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Stansted Airport</h3>
            <p class="text-gold font-bold text-xl mb-2">30-45 mins</p>
            <p class="text-sm text-gray-600">Direct via M11</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Oxford</h3>
            <p class="text-gold font-bold text-xl mb-2">90-120 mins</p>
            <p class="text-sm text-gray-600">University cities tour</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Ely Cathedral</h3>
            <p class="text-gold font-bold text-xl mb-2">25-35 mins</p>
            <p class="text-sm text-gray-600">Extended countryside tour</p>
          </div>
        </div>
      </section>

      <!-- Tour Options -->
      <section class="mb-16">
        <div class="bg-gradient-to-r from-gold to-yellow-400 rounded-2xl p-12 text-black">
          <h2 class="text-3xl font-heading font-bold text-center mb-8">
            Cambridge Tour Packages
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-black/10 rounded-xl p-6 text-center">
              <h3 class="text-xl font-bold mb-4">Half-Day Tour</h3>
              <div class="text-3xl font-bold mb-2">4 Hours</div>
              <p class="text-sm mb-4">University highlights, King's College Chapel, River Cam punting</p>
              <div class="font-semibold">From £270</div>
            </div>
            <div class="bg-black/10 rounded-xl p-6 text-center">
              <h3 class="text-xl font-bold mb-4">Full-Day Experience</h3>
              <div class="text-3xl font-bold mb-2">8 Hours</div>
              <p class="text-sm mb-4">Complete Cambridge tour plus Ely Cathedral or countryside villages</p>
              <div class="font-semibold">From £450</div>
            </div>
            <div class="bg-black/10 rounded-xl p-6 text-center">
              <h3 class="text-xl font-bold mb-4">Transfer Only</h3>
              <div class="text-3xl font-bold mb-2">Point-to-Point</div>
              <p class="text-sm mb-4">Direct luxury transfer from London to Cambridge with optional waiting time</p>
              <div class="font-semibold">From £170</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl p-12 text-center">
        <h2 class="text-3xl font-heading font-bold mb-4">
          Plan Your Cambridge Experience Today
        </h2>
        <p class="text-xl mb-8 opacity-90">
          Discover the prestigious university city of Cambridge with our luxury chauffeur service and expert local knowledge
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/booking"
            class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300"
          >
            <i class="bx bx-calendar mr-2"></i>
            Book Cambridge Tour
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
useSeo('cambridgeChauffeur')

// Structured Data for Local Business
useSchemaOrg([
  defineLocalBusiness({
    name: 'Silk Ride Cambridge Chauffeur Service',
    description: 'Luxury chauffeur service and private tours to Cambridge from London, featuring university visits and historic attractions.',
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
      latitude: 52.2053,
      longitude: 0.1218
    },
    telephone: '+44 7512 905514',
    url: 'https://silkride.co.uk/destination-tours/cambridge',
    areaServed: [
      {
        '@type': 'City',
        name: 'Cambridge'
      },
      {
        '@type': 'City',
        name: 'London'
      },
      {
        '@type': 'Place',
        name: 'Cambridge University'
      }
    ],
    serviceType: 'Chauffeur Service and Private Tours',
    priceRange: '£££'
  })
])
</script>