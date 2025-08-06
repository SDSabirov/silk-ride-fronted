<template>
  <div>
    <Navbar />
    
    <!-- Hero Section -->
    <section class="relative min-h-screen lg:min-h-[90vh] flex items-center py-20">
      <div class="absolute inset-0 overflow-hidden">
        <img
          src="~/assets/images/covers/business-trip.webp"
          alt="Bath Chauffeur Service and Historic City Tours from London"
          class="w-full h-full object-cover"
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      <div class="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div class="max-w-4xl">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-[1.1] mb-4 sm:mb-6">
            Bath <span class="text-gold block sm:inline">Chauffeur Service</span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-8 opacity-90 leading-relaxed">
            Luxury chauffeur service and private tours to the UNESCO World Heritage city of Bath with professional drivers and premium vehicles
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <NuxtLink
              to="/booking"
              class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <i class="bx bx-calendar mr-2"></i>
              Book Bath Transfer
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
                <i class="bx bx-buildings text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">Roman Baths</h3>
                <p class="text-xs sm:text-sm opacity-75">Ancient thermal springs</p>
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
              Explore Historic Bath in Style
            </h2>
            <div class="w-16 h-1 bg-gold mb-6"></div>
            <div class="prose prose-lg">
              <p class="text-gray-700 leading-relaxed mb-4">
                Discover the elegance of Bath, England's only UNESCO World Heritage city, with our premium chauffeur service. This Georgian masterpiece combines 2,000 years of history with stunning architecture, world-famous Roman Baths, and the literary heritage of Jane Austen.
              </p>
              <p class="text-gray-700 leading-relaxed mb-4">
                Our professional chauffeurs provide comfortable transfers from London to Bath, or comprehensive tours of this historic city. Whether you're visiting the Roman Baths, Bath Abbey, the Jane Austen Centre, or simply enjoying the Georgian architecture, we ensure your journey is both comfortable and informative.
              </p>
              <p class="text-gray-700 leading-relaxed">
                Located in Somerset, approximately 115 miles west of London, Bath is easily accessible via the M4 and A4. Our experienced drivers know the optimal routes and can share fascinating insights about the city's Roman origins and Georgian revival.
              </p>
            </div>
          </div>
          <div class="lg:text-right">
            <div class="inline-block bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold text-black mb-6">Bath Service Options</h3>
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
                  <span class="text-gray-700">Roman Baths and Bath Abbey visits</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Georgian architecture walking tours</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Thermae Bath Spa experiences</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Combined Stonehenge and Bath tours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Attractions -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          Bath's Historic Attractions
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Roman Baths -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-buildings text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Roman Baths</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Explore the magnificently preserved Roman Baths, built around natural hot springs, featuring the Sacred Spring, Roman Temple, and Great Bath.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Sacred Spring & Roman Temple</li>
              <li>• The Great Bath & thermal pools</li>
              <li>• Museum & Roman artifacts</li>
              <li>• Audio guides & interactive displays</li>
            </ul>
          </div>

          <!-- Georgian Architecture -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-home text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Georgian Architecture</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Admire Bath's stunning Georgian architecture including the famous Royal Crescent and Circus, showcasing 18th-century urban planning.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Royal Crescent (30 Georgian houses)</li>
              <li>• The Circus (circular Georgian square)</li>
              <li>• Pulteney Bridge (bridge with shops)</li>
              <li>• Assembly Rooms</li>
            </ul>
          </div>

          <!-- Bath Abbey -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-church text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Bath Abbey</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Visit the magnificent Bath Abbey, known as the "Lantern of the West" for its large windows and stunning fan vaulting.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Fan vaulted ceiling</li>
              <li>• Tower tours with city views</li>
              <li>• Historic memorials & tombs</li>
              <li>• Regular concerts & events</li>
            </ul>
          </div>

          <!-- Jane Austen -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-book text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Jane Austen Centre</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Discover Jane Austen's connection to Bath, where she lived and set two of her novels, Persuasion and Northanger Abbey.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Jane Austen exhibitions</li>
              <li>• Period costume experiences</li>
              <li>• Georgian house recreations</li>
              <li>• Literary walking tours</li>
            </ul>
          </div>

          <!-- Thermae Bath Spa -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-water text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Thermae Bath Spa</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Experience Britain's only natural thermal spa, where you can bathe in the naturally warm, mineral-rich waters.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Rooftop pool with city views</li>
              <li>• Natural thermal waters</li>
              <li>• Wellness treatments & spa packages</li>
              <li>• Steam rooms & relaxation areas</li>
            </ul>
          </div>

          <!-- Museums & Culture -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-palette text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Museums & Galleries</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Explore Bath's rich cultural scene with world-class museums, art galleries, and cultural institutions.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Fashion Museum & Assembly Rooms</li>
              <li>• Victoria Art Gallery</li>
              <li>• Mr B's Emporium (famous bookshop)</li>
              <li>• Bath Christmas Market (seasonal)</li>
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
            <p class="text-sm text-gray-600">Via M4 motorway</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Heathrow Airport</h3>
            <p class="text-gold font-bold text-xl mb-2">90-120 mins</p>
            <p class="text-sm text-gray-600">Direct via M4</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Stonehenge</h3>
            <p class="text-gold font-bold text-xl mb-2">45-60 mins</p>
            <p class="text-sm text-gray-600">Perfect combination tour</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Cotswolds</h3>
            <p class="text-gold font-bold text-xl mb-2">60-90 mins</p>
            <p class="text-sm text-gray-600">Countryside extension</p>
          </div>
        </div>
      </section>

      <!-- Tour Options -->
      <section class="mb-16">
        <div class="bg-gradient-to-r from-gold to-yellow-400 rounded-2xl p-12 text-black">
          <h2 class="text-3xl font-heading font-bold text-center mb-8">
            Bath Tour Packages
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-black/10 rounded-xl p-6 text-center">
              <h3 class="text-xl font-bold mb-4">Half-Day Bath</h3>
              <div class="text-3xl font-bold mb-2">5 Hours</div>
              <p class="text-sm mb-4">Roman Baths, Bath Abbey, Georgian architecture tour</p>
              <div class="font-semibold">From £320</div>
            </div>
            <div class="bg-black/10 rounded-xl p-6 text-center">
              <h3 class="text-xl font-bold mb-4">Bath & Stonehenge</h3>
              <div class="text-3xl font-bold mb-2">8 Hours</div>
              <p class="text-sm mb-4">Complete Bath tour plus Stonehenge prehistoric monument</p>
              <div class="font-semibold">From £520</div>
            </div>
            <div class="bg-black/10 rounded-xl p-6 text-center">
              <h3 class="text-xl font-bold mb-4">Transfer Only</h3>
              <div class="text-3xl font-bold mb-2">Point-to-Point</div>
              <p class="text-sm mb-4">Direct luxury transfer from London to Bath with optional waiting time</p>
              <div class="font-semibold">From £240</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl p-12 text-center">
        <h2 class="text-3xl font-heading font-bold mb-4">
          Discover Bath's Timeless Beauty
        </h2>
        <p class="text-xl mb-8 opacity-90">
          Experience the UNESCO World Heritage city of Bath with our luxury chauffeur service and expert historical knowledge
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/booking"
            class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300"
          >
            <i class="bx bx-calendar mr-2"></i>
            Book Bath Tour
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
useSeo('bathChauffeur')

// Structured Data for Local Business
useSchemaOrg([
  defineLocalBusiness({
    name: 'Silk Ride Bath Chauffeur Service',
    description: 'Luxury chauffeur service and private tours to Bath from London, featuring Roman Baths, Georgian architecture, and UNESCO World Heritage attractions.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.3811,
      longitude: -2.3590
    },
    telephone: '+44 7512 905514',
    url: 'https://silkride.co.uk/destination-tours/bath',
    areaServed: [
      {
        '@type': 'City',
        name: 'Bath'
      },
      {
        '@type': 'City',
        name: 'London'
      },
      {
        '@type': 'Place',
        name: 'Roman Baths'
      },
      {
        '@type': 'Place',
        name: 'Stonehenge'
      }
    ],
    serviceType: 'Chauffeur Service and Private Tours',
    priceRange: '£££'
  })
])
</script>