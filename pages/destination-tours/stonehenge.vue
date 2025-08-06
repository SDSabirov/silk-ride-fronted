<template>
  <div>
    <Navbar />
    
    <!-- Hero Section -->
    <section class="relative min-h-screen lg:min-h-[90vh] flex items-center py-20">
      <div class="absolute inset-0 overflow-hidden">
        <img
          src="~/assets/images/covers/business-trip.webp"
          alt="Stonehenge Chauffeur Service and Historic Tours from London"
          class="w-full h-full object-cover"
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      <div class="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div class="max-w-4xl">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-[1.1] mb-4 sm:mb-6">
            Stonehenge <span class="text-gold block sm:inline">Chauffeur Service</span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-8 opacity-90 leading-relaxed">
            Luxury chauffeur service and private tours to the prehistoric monument of Stonehenge with professional drivers and premium vehicles
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <NuxtLink
              to="/booking"
              class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <i class="bx bx-calendar mr-2"></i>
              Book Stonehenge Tour
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
                <h3 class="font-semibold text-base sm:text-lg">2 Hours</h3>
                <p class="text-xs sm:text-sm opacity-75">From Central London</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-time-five text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">5000 Years Old</h3>
                <p class="text-xs sm:text-sm opacity-75">Prehistoric monument</p>
              </div>
            </div>
            <div class="flex items-center space-x-3 sm:col-span-2 lg:col-span-1">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-medal text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">UNESCO Site</h3>
                <p class="text-xs sm:text-sm opacity-75">World Heritage status</p>
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
              Journey to Prehistoric Britain
            </h2>
            <div class="w-16 h-1 bg-gold mb-6"></div>
            <div class="prose prose-lg">
              <p class="text-gray-700 leading-relaxed mb-4">
                Experience one of the world's most famous prehistoric monuments with our premium Stonehenge chauffeur service. This UNESCO World Heritage Site, dating back over 5,000 years, continues to mystify visitors with its ancient stone circle and astronomical alignments.
              </p>
              <p class="text-gray-700 leading-relaxed mb-4">
                Our professional chauffeurs provide comfortable transfers from London to Stonehenge, or comprehensive tours combining the monument with nearby attractions. Whether you're fascinated by ancient history, archaeology, or simply the mystery of this iconic site, we ensure your visit is both educational and memorable.
              </p>
              <p class="text-gray-700 leading-relaxed">
                Located on Salisbury Plain in Wiltshire, Stonehenge is easily accessible from London via the A303. Our experienced drivers know the best routes and can provide fascinating insights about the monument's history, theories, and the surrounding ancient landscape.
              </p>
            </div>
          </div>
          <div class="lg:text-right">
            <div class="inline-block bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold text-black mb-6">Stonehenge Service Options</h3>
              <ul class="space-y-4 text-left">
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Skip-the-line entrance tickets included</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Audio guide tours in multiple languages</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Visitor Center and museum access</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Salisbury Cathedral combination tours</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Avebury Stone Circle extended tours</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Bath and Stonehenge full-day experiences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Attractions -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          Stonehenge & Surrounding Attractions
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Stonehenge Monument -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-circle text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Stonehenge Stone Circle</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Walk around the iconic stone circle and marvel at the massive trilithons and bluestones transported from Wales over 4,000 years ago.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• 5,000-year-old stone circle</li>
              <li>• Massive trilithons (doorway stones)</li>
              <li>• Welsh bluestones mystery</li>
              <li>• Astronomical alignments</li>
            </ul>
          </div>

          <!-- Visitor Center -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-museum text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Stonehenge Visitor Center</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Explore the award-winning visitor center featuring 360-degree virtual experiences, ancient artifacts, and reconstructed Neolithic houses.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• 360-degree virtual Stonehenge experience</li>
              <li>• Ancient artifacts & archaeological finds</li>
              <li>• Neolithic houses reconstruction</li>
              <li>• Interactive exhibitions</li>
            </ul>
          </div>

          <!-- Salisbury Cathedral -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-church text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Salisbury Cathedral</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Visit the magnificent 13th-century cathedral with Britain's tallest spire and see one of only four surviving original copies of Magna Carta.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Britain's tallest church spire (123m)</li>
              <li>• Original Magna Carta (1215)</li>
              <li>• Medieval architecture masterpiece</li>
              <li>• Beautiful cathedral close</li>
            </ul>
          </div>

          <!-- Avebury Stone Circle -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-target text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Avebury Stone Circle</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Explore the world's largest prehistoric stone circle, where you can walk among the stones and through the village built within the circle.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• World's largest stone circle</li>
              <li>• Walk among the stones</li>
              <li>• Village within the circle</li>
              <li>• Alexander Keiller Museum</li>
            </ul>
          </div>

          <!-- Old Sarum -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-castle text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Old Sarum</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Discover the ruins of the original Salisbury, an Iron Age hillfort later used by Romans, Saxons, and Normans as a castle and cathedral site.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Iron Age hillfort ruins</li>
              <li>• Norman castle remains</li>
              <li>• Original cathedral foundations</li>
              <li>• Panoramic countryside views</li>
            </ul>
          </div>

          <!-- Woodhenge -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-tree text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Woodhenge & Durrington Walls</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Visit Stonehenge's timber counterpart and explore the remains of what may have been the largest Neolithic settlement in northwest Europe.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Neolithic timber circle (concrete posts mark original positions)</li>
              <li>• Durrington Walls superhenge</li>
              <li>• Largest Neolithic settlement</li>
              <li>• Connection to Stonehenge builders</li>
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
            <p class="text-gold font-bold text-xl mb-2">2-2.5 hours</p>
            <p class="text-sm text-gray-600">Via M3 & A303</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Bath</h3>
            <p class="text-gold font-bold text-xl mb-2">45-60 mins</p>
            <p class="text-sm text-gray-600">Perfect combination tour</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Salisbury</h3>
            <p class="text-gold font-bold text-xl mb-2">15-20 mins</p>
            <p class="text-sm text-gray-600">Cathedral & city center</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Avebury</h3>
            <p class="text-gold font-bold text-xl mb-2">30-40 mins</p>
            <p class="text-sm text-gray-600">Stone circles combination</p>
          </div>
        </div>
      </section>

      <!-- Tour Options -->
      <section class="mb-16">
        <div class="bg-gradient-to-r from-gold to-yellow-400 rounded-2xl p-12 text-black">
          <h2 class="text-3xl font-heading font-bold text-center mb-8">
            Stonehenge Tour Packages
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-black/10 rounded-xl p-6 text-center">
              <h3 class="text-xl font-bold mb-4">Stonehenge Express</h3>
              <div class="text-3xl font-bold mb-2">5 Hours</div>
              <p class="text-sm mb-4">Stonehenge monument, visitor center, and Salisbury Cathedral</p>
              <div class="font-semibold">From £320</div>
            </div>
            <div class="bg-black/10 rounded-xl p-6 text-center">
              <h3 class="text-xl font-bold mb-4">Stonehenge & Bath</h3>
              <div class="text-3xl font-bold mb-2">8 Hours</div>
              <p class="text-sm mb-4">Complete Stonehenge tour plus Bath Roman Baths and city tour</p>
              <div class="font-semibold">From £520</div>
            </div>
            <div class="bg-black/10 rounded-xl p-6 text-center">
              <h3 class="text-xl font-bold mb-4">Ancient Mysteries</h3>
              <div class="text-3xl font-bold mb-2">9 Hours</div>
              <p class="text-sm mb-4">Stonehenge, Avebury Stone Circle, and ancient landscape exploration</p>
              <div class="font-semibold">From £580</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl p-12 text-center">
        <h2 class="text-3xl font-heading font-bold mb-4">
          Uncover Ancient Mysteries at Stonehenge
        </h2>
        <p class="text-xl mb-8 opacity-90">
          Experience one of the world's most famous prehistoric monuments with our luxury chauffeur service and expert historical insights
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/booking"
            class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300"
          >
            <i class="bx bx-calendar mr-2"></i>
            Book Stonehenge Tour
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
useSeo('stonehengeChauffeur')

// Structured Data for Local Business
useSchemaOrg([
  defineLocalBusiness({
    name: 'Silk Ride Stonehenge Chauffeur Service',
    description: 'Luxury chauffeur service and private tours to Stonehenge from London, featuring prehistoric monument visits and UNESCO World Heritage attractions.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.1789,
      longitude: -1.8262
    },
    telephone: '+44 7512 905514',
    url: 'https://silkride.co.uk/destination-tours/stonehenge',
    areaServed: [
      {
        '@type': 'Place',
        name: 'Stonehenge'
      },
      {
        '@type': 'City',
        name: 'London'
      },
      {
        '@type': 'City',
        name: 'Salisbury'
      },
      {
        '@type': 'Place',
        name: 'Avebury'
      },
      {
        '@type': 'City',
        name: 'Bath'
      }
    ],
    serviceType: 'Chauffeur Service and Private Tours',
    priceRange: '£££'
  })
])
</script>