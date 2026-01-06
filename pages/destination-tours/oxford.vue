<template>
  <div>
    <Navbar />
    
    <!-- Hero Section -->
    <section class="relative min-h-screen lg:min-h-[90vh] flex items-center py-20">
      <div class="absolute inset-0 overflow-hidden">
        <img
          src="~/assets/images/covers/business-trip.webp"
          alt="Oxford Chauffeur Service and Tours from London"
          class="w-full h-full object-cover"
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      <div class="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div class="max-w-4xl">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-[1.1] mb-4 sm:mb-6">
            Oxford <span class="text-gold block sm:inline">Chauffeur Service</span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-8 opacity-90 leading-relaxed">
            Luxury chauffeur service and private tours to the historic city of Oxford with professional drivers and premium vehicles
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <NuxtLink
              to="/booking"
              class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <i class="bx bx-calendar mr-2"></i>
              Book Oxford Transfer
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
                <h3 class="font-semibold text-base sm:text-lg">60 Minutes</h3>
                <p class="text-xs sm:text-sm opacity-75">From Central London</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-book text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">University Tours</h3>
                <p class="text-xs sm:text-sm opacity-75">Historic colleges & libraries</p>
              </div>
            </div>
            <div class="flex items-center space-x-3 sm:col-span-2 lg:col-span-1">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-user-check text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg">Local Expertise</h3>
                <p class="text-xs sm:text-sm opacity-75">Knowledgeable chauffeurs</p>
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
              Discover Oxford in Luxury
            </h2>
            <div class="w-16 h-1 bg-gold mb-6"></div>
            <div class="prose prose-lg">
              <p class="text-gray-700 leading-relaxed mb-4">
                Experience the "City of Dreaming Spires" with our premium Oxford chauffeur service. Home to the world's oldest English-speaking university, Oxford combines nearly 900 years of academic heritage with stunning architecture, beautiful gardens, and vibrant cultural life.
              </p>
              <p class="text-gray-700 leading-relaxed mb-4">
                Our professional chauffeurs provide comfortable transfers from London to Oxford, or comprehensive tours of this historic city. Whether you're visiting for business meetings, university events, sightseeing, or shopping at Bicester Village, we ensure your journey is relaxing and memorable.
              </p>
              <p class="text-gray-700 leading-relaxed">
                Located just 60 miles northwest of London, Oxford is easily accessible via the M40 motorway. Our experienced drivers know the best routes and can provide insightful commentary about the city's rich history and attractions.
              </p>
            </div>
          </div>
          <div class="lg:text-right">
            <div class="inline-block bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold text-black mb-6">Oxford Service Options</h3>
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
                  <span class="text-gray-700">Bicester Village shopping trips</span>
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
          Oxford's Must-Visit Attractions
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Oxford University -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-building text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Oxford University Colleges</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Visit iconic colleges including Christ Church (Harry Potter filming location), Bodleian Library, and the historic Radcliffe Camera.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Christ Church College & Cathedral</li>
              <li>• Bodleian Library & Duke Humfrey's Library</li>
              <li>• Radcliffe Camera</li>
              <li>• Carfax Tower views</li>
            </ul>
          </div>

          <!-- Ashmolean Museum -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-palette text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Museums & Culture</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Explore world-class museums, art galleries, and cultural institutions showcasing centuries of human civilization and creativity.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Ashmolean Museum (Britain's first public museum)</li>
              <li>• Pitt Rivers Museum</li>
              <li>• Oxford Castle & Prison</li>
              <li>• Modern Art Oxford</li>
            </ul>
          </div>

          <!-- Oxford Botanic Garden -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-leaf text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Gardens & Nature</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Discover peaceful green spaces including Britain's oldest botanic garden and beautiful college gardens perfect for relaxation.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Oxford Botanic Garden (est. 1621)</li>
              <li>• University Parks</li>
              <li>• Christ Church Meadow</li>
              <li>• College gardens and quads</li>
            </ul>
          </div>

          <!-- Shopping -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-shopping-bag text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Shopping Destinations</h3>
            <p class="text-gray-600 mb-4 text-sm">
              From historic bookshops to luxury outlets, Oxford offers unique shopping experiences for every taste and budget.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Bicester Village Outlet (15 mins away)</li>
              <li>• Blackwell's Bookshop (famous worldwide)</li>
              <li>• Covered Market (historic market)</li>
              <li>• Cornmarket Street shopping</li>
            </ul>
          </div>

          <!-- Pubs & Dining -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-restaurant text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Historic Pubs & Dining</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Experience Oxford's famous pub culture and fine dining, including establishments frequented by literary legends like Tolkien and CS Lewis.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• The Eagle & Child (Tolkien's local)</li>
              <li>• The Turf Tavern (hidden gem)</li>
              <li>• Michelin-starred restaurants</li>
              <li>• Traditional college dining</li>
            </ul>
          </div>

          <!-- River Thames -->
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-water text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">River Activities</h3>
            <p class="text-gray-600 mb-4 text-sm">
              Enjoy peaceful river activities along the Thames, including punting, river walks, and scenic viewpoints perfect for photography.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Punting on the River Cherwell</li>
              <li>• Thames Path walking</li>
              <li>• Folly Bridge area</li>
              <li>• River cruise dining</li>
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
            <p class="text-gold font-bold text-xl mb-2">60-90 mins</p>
            <p class="text-sm text-gray-600">Via M40 motorway</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Heathrow Airport</h3>
            <p class="text-gold font-bold text-xl mb-2">45-60 mins</p>
            <p class="text-sm text-gray-600">Direct via M40</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Bicester Village</h3>
            <p class="text-gold font-bold text-xl mb-2">15-20 mins</p>
            <p class="text-sm text-gray-600">Perfect shopping combination</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Cotswolds</h3>
            <p class="text-gold font-bold text-xl mb-2">30-45 mins</p>
            <p class="text-sm text-gray-600">Extend your countryside tour</p>
          </div>
        </div>
      </section>

      <!-- Tour Options -->
      <section class="mb-16">
        <div class="bg-gradient-to-r from-gold to-yellow-400 rounded-2xl p-12 text-black">
          <h2 class="text-3xl font-heading font-bold text-center mb-8">
            Oxford Tour Packages
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-black/10 rounded-xl p-6 text-center">
              <h3 class="text-xl font-bold mb-4">Half-Day Tour</h3>
              <div class="text-3xl font-bold mb-2">4 Hours</div>
              <p class="text-sm mb-4">University highlights, Christ Church, Bodleian Library, city center</p>
              <div class="font-semibold">From £280</div>
            </div>
            <div class="bg-black/10 rounded-xl p-6 text-center">
              <h3 class="text-xl font-bold mb-4">Full-Day Experience</h3>
              <div class="text-3xl font-bold mb-2">8 Hours</div>
              <p class="text-sm mb-4">Complete Oxford tour plus Bicester Village shopping or Blenheim Palace</p>
              <div class="font-semibold">From £480</div>
            </div>
            <div class="bg-black/10 rounded-xl p-6 text-center">
              <h3 class="text-xl font-bold mb-4">Transfer Only</h3>
              <div class="text-3xl font-bold mb-2">Point-to-Point</div>
              <p class="text-sm mb-4">Direct luxury transfer from London to Oxford with optional waiting time</p>
              <div class="font-semibold">From £180</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl p-12 text-center">
        <h2 class="text-3xl font-heading font-bold mb-4">
          Plan Your Oxford Experience Today
        </h2>
        <p class="text-xl mb-8 opacity-90">
          Discover the historic city of Oxford with our luxury chauffeur service and expert local knowledge
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/booking"
            class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300"
          >
            <i class="bx bx-calendar mr-2"></i>
            Book Oxford Tour
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
useSeo('oxfordChauffeur')

// Structured Data for Local Business
useSchemaOrg([
  defineLocalBusiness({
    name: 'Silk Ride Oxford Chauffeur Service',
    description: 'Luxury chauffeur service and private tours to Oxford from London, featuring university visits and historic attractions.',
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
      latitude: 51.7520,
      longitude: -1.2577
    },
    telephone: '+44 7512 905514',
    url: 'https://silkride.co.uk/destination-tours/oxford',
    areaServed: [
      {
        '@type': 'City',
        name: 'Oxford'
      },
      {
        '@type': 'City',
        name: 'London'
      },
      {
        '@type': 'Place',
        name: 'Bicester Village'
      }
    ],
    serviceType: 'Chauffeur Service and Private Tours',
    priceRange: '£££'
  })
])
</script>