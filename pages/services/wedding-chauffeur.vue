<template>
  <div>
    <Navbar />

    <CommonHero :image="heroImage" :page="$t('pages.services.cards.wedding.title')" />

    <!-- Breadcrumbs -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <CommonBreadcrumbs :items="breadcrumbs" />
    </div>

    <CommonPageIntro
      :title="$t('seo.weddingPage.introTitle')"
      :paragraph="$t('seo.weddingPage.introDesc')"
    />

    <!-- Wedding Pricing Section -->
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-screen-xl mx-auto px-6">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div class="w-16 h-1 bg-gold mx-auto mb-6"></div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
            {{ $t('seo.weddingPackages.sectionTitle') }}
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            {{ $t('seo.weddingPackages.sectionSubtitle') }}
          </p>
        </div>

        <!-- Package Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 items-end">

          <!-- Package 1: Standard -->
          <div class="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <div class="absolute -top-3 left-6">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                {{ $t('seo.weddingPackages.save', { amount: $t('seo.weddingPackages.package1.savings') }) }}
              </span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mt-2 mb-2">{{ $t('seo.weddingPackages.package1.name') }}</h3>
            <p class="text-sm text-gray-500 mb-6">{{ $t('seo.weddingPackages.package1.desc') }}</p>
            <div class="mb-6">
              <span class="text-sm text-gray-400 line-through mr-2">{{ $t('seo.weddingPackages.package1.originalPrice') }}</span>
              <span class="text-4xl font-bold text-gray-900">{{ $t('seo.weddingPackages.package1.price') }}</span>
            </div>
            <div class="mb-6">
              <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{{ $t('seo.weddingPackages.vehiclesIncluded') }}</p>
              <div class="space-y-2">
                <div class="flex items-center justify-between text-sm">
                  <span class="flex items-center gap-2 text-gray-700"><i class="bx bx-check text-gold text-lg"></i>{{ $t('seo.weddingPackages.package1.sClass') }}</span>
                  <span class="font-semibold text-gray-900">{{ $t('seo.weddingPackages.package1.sClassPrice') }}</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="flex items-center gap-2 text-gray-700"><i class="bx bx-check text-gold text-lg"></i>{{ $t('seo.weddingPackages.package1.vClass') }}</span>
                  <span class="font-semibold text-gray-900">{{ $t('seo.weddingPackages.package1.vClassPrice') }}</span>
                </div>
              </div>
            </div>
            <div class="border-t border-gray-100 pt-4 mb-6 space-y-2">
              <div class="flex items-center gap-2 text-sm text-gray-600"><i class="bx bx-time-five text-gold"></i><span>{{ $t('seo.weddingPackages.duration') }}: {{ $t('seo.weddingPackages.hours', { count: $t('seo.weddingPackages.package1.duration') }) }}</span></div>
              <div class="flex items-center gap-2 text-sm text-gray-600"><i class="bx bx-group text-gold"></i><span>{{ $t('seo.weddingPackages.capacity') }}: {{ $t('seo.weddingPackages.upToGuests', { count: $t('seo.weddingPackages.package1.capacity') }) }}</span></div>
            </div>
            <NuxtLink :to="localePath('/booking')" class="block w-full text-center py-3 px-6 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-200 cursor-pointer">
              {{ $t('seo.weddingPackages.bookPackage') }}
            </NuxtLink>
          </div>

          <!-- Package 2: Most Popular (Elevated) -->
          <div class="relative bg-gray-900 rounded-2xl p-8 shadow-2xl lg:scale-105 lg:-my-4 z-10 cursor-pointer group ring-2 ring-gold">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2">
              <span class="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-gold text-black shadow-lg"><i class="bx bxs-star mr-1"></i>{{ $t('seo.weddingPackages.mostPopular') }}</span>
            </div>
            <div class="absolute -top-3 right-6">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white">{{ $t('seo.weddingPackages.save', { amount: $t('seo.weddingPackages.package2.savings') }) }}</span>
            </div>
            <h3 class="text-xl font-bold text-white mt-4 mb-2">{{ $t('seo.weddingPackages.package2.name') }}</h3>
            <p class="text-sm text-gray-400 mb-6">{{ $t('seo.weddingPackages.package2.desc') }}</p>
            <div class="mb-6">
              <span class="text-sm text-gray-500 line-through mr-2">{{ $t('seo.weddingPackages.package2.originalPrice') }}</span>
              <span class="text-4xl font-bold text-gold">{{ $t('seo.weddingPackages.package2.price') }}</span>
            </div>
            <div class="mb-6">
              <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{{ $t('seo.weddingPackages.vehiclesIncluded') }}</p>
              <div class="space-y-2">
                <div class="flex items-center justify-between text-sm">
                  <span class="flex items-center gap-2 text-gray-300"><i class="bx bx-check text-gold text-lg"></i>{{ $t('seo.weddingPackages.package2.sClass') }}</span>
                  <span class="font-semibold text-white">{{ $t('seo.weddingPackages.package2.sClassPrice') }}</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="flex items-center gap-2 text-gray-300"><i class="bx bx-check text-gold text-lg"></i>{{ $t('seo.weddingPackages.package2.vClass') }}</span>
                  <span class="font-semibold text-white">{{ $t('seo.weddingPackages.package2.vClassPrice') }}</span>
                </div>
              </div>
            </div>
            <div class="border-t border-white/10 pt-4 mb-6 space-y-2">
              <div class="flex items-center gap-2 text-sm text-gray-400"><i class="bx bx-time-five text-gold"></i><span>{{ $t('seo.weddingPackages.duration') }}: {{ $t('seo.weddingPackages.hours', { count: $t('seo.weddingPackages.package2.duration') }) }}</span></div>
              <div class="flex items-center gap-2 text-sm text-gray-400"><i class="bx bx-group text-gold"></i><span>{{ $t('seo.weddingPackages.capacity') }}: {{ $t('seo.weddingPackages.upToGuests', { count: $t('seo.weddingPackages.package2.capacity') }) }}</span></div>
            </div>
            <NuxtLink :to="localePath('/booking')" class="block w-full text-center py-3 px-6 bg-gold text-black font-bold rounded-lg hover:bg-gold/90 transition-colors duration-200 cursor-pointer shadow-lg">
              {{ $t('seo.weddingPackages.bookPackage') }}
            </NuxtLink>
          </div>

          <!-- Package 3: Premium -->
          <div class="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <div class="absolute -top-3 left-6">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gray-900 text-gold">{{ $t('seo.weddingPackages.bestValue') }}</span>
            </div>
            <div class="absolute -top-3 right-6">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">{{ $t('seo.weddingPackages.save', { amount: $t('seo.weddingPackages.package3.savings') }) }}</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mt-2 mb-2">{{ $t('seo.weddingPackages.package3.name') }}</h3>
            <p class="text-sm text-gray-500 mb-6">{{ $t('seo.weddingPackages.package3.desc') }}</p>
            <div class="mb-6">
              <span class="text-sm text-gray-400 line-through mr-2">{{ $t('seo.weddingPackages.package3.originalPrice') }}</span>
              <span class="text-4xl font-bold text-gray-900">{{ $t('seo.weddingPackages.package3.price') }}</span>
            </div>
            <div class="mb-6">
              <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{{ $t('seo.weddingPackages.vehiclesIncluded') }}</p>
              <div class="space-y-2">
                <div class="flex items-center justify-between text-sm">
                  <span class="flex items-center gap-2 text-gray-700"><i class="bx bx-check text-gold text-lg"></i>{{ $t('seo.weddingPackages.package3.sClass') }}</span>
                  <span class="font-semibold text-gray-900">{{ $t('seo.weddingPackages.package3.sClassPrice') }}</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="flex items-center gap-2 text-gray-700"><i class="bx bx-check text-gold text-lg"></i>{{ $t('seo.weddingPackages.package3.vClass') }}</span>
                  <span class="font-semibold text-gray-900">{{ $t('seo.weddingPackages.package3.vClassPrice') }}</span>
                </div>
              </div>
            </div>
            <div class="border-t border-gray-100 pt-4 mb-6 space-y-2">
              <div class="flex items-center gap-2 text-sm text-gray-600"><i class="bx bx-time-five text-gold"></i><span>{{ $t('seo.weddingPackages.duration') }}: {{ $t('seo.weddingPackages.upToHours', { count: $t('seo.weddingPackages.package3.duration') }) }}</span></div>
              <div class="flex items-center gap-2 text-sm text-gray-600"><i class="bx bx-group text-gold"></i><span>{{ $t('seo.weddingPackages.capacity') }}: {{ $t('seo.weddingPackages.upToGuests', { count: $t('seo.weddingPackages.package3.capacity') }) }}</span></div>
            </div>
            <NuxtLink :to="localePath('/booking')" class="block w-full text-center py-3 px-6 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-200 cursor-pointer">
              {{ $t('seo.weddingPackages.bookPackage') }}
            </NuxtLink>
          </div>
        </div>

        <!-- Bottom Note -->
        <div class="mt-12 text-center">
          <p class="text-gray-500 text-sm max-w-2xl mx-auto">
            {{ $t('seo.weddingPackages.note') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Service Details Section -->
    <section class="max-w-screen-2xl mx-auto py-16 px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-6">{{ $t('seo.weddingPage.detailsTitle') }}</h2>
          <p class="text-lg text-gray-600 mb-6">
            {{ $t('seo.weddingPage.detailsDesc') }}
          </p>
          
          <div class="space-y-4">
            <div v-for="(bullet, index) in serviceBullets" :key="index" class="flex items-start space-x-3">
              <div class="h-3 w-3 bg-gold rotate-45 mt-2 flex-shrink-0"></div>
              <span class="text-gray-700">{{ bullet }}</span>
            </div>
          </div>

          <!-- Enhanced SEO content -->
          <div class="mt-8 space-y-6">
            <div>
              <h3 class="text-xl font-semibold mb-3">{{ $t('seo.weddingPage.seoTitle1') }}</h3>
              <p class="text-gray-600 leading-relaxed">
                {{ $t('seo.weddingPage.seoP1') }}
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-3">{{ $t('seo.weddingPage.seoTitle2') }}</h3>
              <p class="text-gray-600 leading-relaxed">
                {{ $t('seo.weddingPage.seoP2') }}
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-3">{{ $t('seo.weddingPage.seoTitle3') }}</h3>
              <p class="text-gray-600 leading-relaxed">
                {{ $t('seo.weddingPage.seoP3') }}
              </p>
            </div>
          </div>

          <div class="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">{{ $t('seo.weddingPage.packageOptionsTitle') }}</h3>
            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span><strong>{{ $t('seo.weddingPage.packageOption1') }}</strong> {{ $t('seo.weddingPage.packageOption1Desc') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span><strong>{{ $t('seo.weddingPage.packageOption2') }}</strong> {{ $t('seo.weddingPage.packageOption2Desc') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span><strong>{{ $t('seo.weddingPage.packageOption3') }}</strong> {{ $t('seo.weddingPage.packageOption3Desc') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span><strong>{{ $t('seo.weddingPage.packageOption4') }}</strong> {{ $t('seo.weddingPage.packageOption4Desc') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-2 w-2 bg-gold rounded-full"></div>
                <span><strong>{{ $t('seo.weddingPage.packageOption5') }}</strong> {{ $t('seo.weddingPage.packageOption5Desc') }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:order-first">
          <NuxtImg
            :src="serviceImage"
            alt="Luxury wedding chauffeur service with Mercedes vehicles"
            class="w-full h-96 object-cover rounded-lg shadow-lg"
            loading="lazy"
            width="800"
            height="600"
          />
        </div>
      </div>
    </section>

    <!-- Vehicle Options Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('seo.weddingPage.vehiclesTitle') }}</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <NuxtImg src="/images/sclass.webp" alt="Mercedes S-Class wedding car" class="w-full h-48 object-cover rounded-lg mb-4" loading="lazy" width="600" height="300" />
            <h3 class="text-xl font-semibold mb-3">Mercedes S-Class</h3>
            <p class="text-gray-600 mb-4">{{ $t('seo.weddingPage.sclassDesc') }}</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• {{ $t('seo.weddingPage.sclassP1') }}</li>
              <li>• {{ $t('seo.weddingPage.sclassP2') }}</li>
              <li>• {{ $t('seo.weddingPage.sclassP3') }}</li>
              <li>• {{ $t('seo.weddingPage.sclassP4') }}</li>
            </ul>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <NuxtImg src="/images/eclass.webp" alt="Mercedes E-Class bridal car" class="w-full h-48 object-cover rounded-lg mb-4" loading="lazy" width="600" height="300" />
            <h3 class="text-xl font-semibold mb-3">Mercedes E-Class</h3>
            <p class="text-gray-600 mb-4">{{ $t('seo.weddingPage.eclassDesc') }}</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• {{ $t('seo.weddingPage.eclassP1') }}</li>
              <li>• {{ $t('seo.weddingPage.eclassP2') }}</li>
              <li>• {{ $t('seo.weddingPage.eclassP3') }}</li>
              <li>• {{ $t('seo.weddingPage.eclassP4') }}</li>
            </ul>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <NuxtImg src="/images/transparentcars/vclass.jpg" alt="Mercedes V-Class wedding party transport" class="w-full h-48 object-cover rounded-lg mb-4" loading="lazy" width="600" height="300" />
            <h3 class="text-xl font-semibold mb-3">Mercedes V-Class</h3>
            <p class="text-gray-600 mb-4">{{ $t('seo.weddingPage.vclassDesc') }}</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• {{ $t('seo.weddingPage.vclassP1') }}</li>
              <li>• {{ $t('seo.weddingPage.vclassP2') }}</li>
              <li>• {{ $t('seo.weddingPage.vclassP3') }}</li>
              <li>• {{ $t('seo.weddingPage.vclassP4') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Special Services Section -->
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('seo.weddingPage.specialTitle') }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-gift text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ $t('seo.weddingPage.special1Title') }}</h3>
                <p class="text-gray-600">{{ $t('seo.weddingPage.special1Desc') }}</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-camera text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ $t('seo.weddingPage.special2Title') }}</h3>
                <p class="text-gray-600">{{ $t('seo.weddingPage.special2Desc') }}</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-heart text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ $t('seo.weddingPage.special3Title') }}</h3>
                <p class="text-gray-600">{{ $t('seo.weddingPage.special3Desc') }}</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-time text-white text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ $t('seo.weddingPage.special4Title') }}</h3>
                <p class="text-gray-600">{{ $t('seo.weddingPage.special4Desc') }}</p>
              </div>
            </div>
          </div>
          
          <div>
            <NuxtImg
              src="/images/covers/wedding.webp"
              alt="Luxury wedding chauffeur car decoration"
              class="w-full h-80 object-cover rounded-lg shadow-lg"
              loading="lazy"
              width="800"
              height="500"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('seo.weddingPage.couplesTitle') }}</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <blockquote class="text-lg font-light italic text-gray-700 mb-4">
              "Silk Ride made our wedding day absolutely perfect. The S-Class was beautifully decorated and our chauffeur was so professional. Highly recommend!"
            </blockquote>
            <cite class="text-gold font-semibold">- Emma & James, London</cite>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <blockquote class="text-lg font-light italic text-gray-700 mb-4">
              "From the bridal party to guest transfers, everything was seamless. The V-Class was perfect for our large family. Thank you for making our day special!"
            </blockquote>
            <cite class="text-gold font-semibold">- Priya & Michael, Surrey</cite>
          </div>
        </div>
      </div>
    </section>

    <!-- Planning Timeline Section -->
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('seo.weddingPage.timelineTitle') }}</h2>
        
        <div class="max-w-3xl mx-auto">
          <div class="space-y-8">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold">
                6M
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ $t('seo.weddingPage.timeline6m') }}</h3>
                <p class="text-gray-600">{{ $t('seo.weddingPage.timeline6mDesc') }}</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold">
                3M
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ $t('seo.weddingPage.timeline3m') }}</h3>
                <p class="text-gray-600">{{ $t('seo.weddingPage.timeline3mDesc') }}</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold">
                1W
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ $t('seo.weddingPage.timeline1w') }}</h3>
                <p class="text-gray-600">{{ $t('seo.weddingPage.timeline1wDesc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Wedding Venues Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('seo.weddingPage.venuesTitle') }}</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center p-4">
            <h3 class="font-semibold mb-2">Central London</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>The Shard</li>
              <li>Grosvenor House</li>
              <li>Claridge's</li>
              <li>The Savoy</li>
              <li>One Great George Street</li>
            </ul>
          </div>

          <div class="text-center p-4">
            <h3 class="font-semibold mb-2">West London</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>Kensington Palace</li>
              <li>Chelsea Old Town Hall</li>
              <li>Fulham Palace</li>
              <li>Hammersmith Town Hall</li>
              <li>Royal Hospital Chelsea</li>
            </ul>
          </div>

          <div class="text-center p-4">
            <h3 class="font-semibold mb-2">South London</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>Hampton Court Palace</li>
              <li>Richmond Park</li>
              <li>Syon Park</li>
              <li>Old Royal Naval College</li>
              <li>Pembroke Lodge</li>
            </ul>
          </div>

          <div class="text-center p-4">
            <h3 class="font-semibold mb-2">North London</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>Alexandra Palace</li>
              <li>Kenwood House</li>
              <li>Horniman Museum</li>
              <li>Islington Town Hall</li>
              <li>The Grove Hotel</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Wedding FAQ Section -->
    <section class="py-16 bg-white">
      <div class="max-w-screen-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">{{ $t('seo.weddingPage.faqTitle') }}</h2>

        <div class="max-w-4xl mx-auto space-y-6">
          <div v-for="(faq, index) in faqItems" :key="index" class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">{{ faq.q }}</h3>
            <p class="text-gray-600">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-screen-2xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">{{ $t('seo.weddingPage.ctaTitle') }}</h2>
        <p class="text-lg text-gray-600 mb-8">
          {{ $t('seo.weddingPage.ctaDesc') }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            :to="localePath('/booking')"
            class="px-8 py-3 bg-gold text-black font-semibold rounded hover:bg-yellow-500 transition"
          >
            {{ $t('seo.weddingPage.ctaBook') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/contact-us')"
            class="px-8 py-3 border border-gold text-gold font-semibold rounded hover:bg-gold hover:text-black transition"
          >
            {{ $t('seo.weddingPage.ctaQuote') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { useSeo } from '~/utils/useSeo'
import { useLocalePath, useI18n } from '#imports'
import { computed } from 'vue'
const heroImage = '/images/covers/wedding.webp'
const serviceImage = '/images/covers/wedding.webp'

const { t } = useI18n()
const localePath = useLocalePath()

useSeo('weddingChauffeur')

const breadcrumbs = computed(() => [
  { name: t('seo.weddingPage.breadcrumbHome'), path: '/' },
  { name: t('seo.weddingPage.breadcrumbServices'), path: '/services' },
  { name: t('seo.weddingPage.breadcrumbWedding'), path: '/services/wedding-chauffeur' },
])

const serviceBullets = computed(() => {
  const bullets = []
  for (let i = 0; i < 10; i++) {
    const key = `pages.services.cards.wedding.bullets[${i}]`
    const value = t(key)
    if (value === key) break
    bullets.push(value)
  }
  return bullets
})

const faqItems = computed(() => {
  const items = []
  for (let i = 0; i < 5; i++) {
    const q = t(`seo.weddingPage.faq[${i}].q`)
    const a = t(`seo.weddingPage.faq[${i}].a`)
    if (q === `seo.weddingPage.faq[${i}].q`) break
    items.push({ q, a })
  }
  return items
})

const weddingChauffeurSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Wedding Chauffeur Service",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Silk Ride Chauffeur Services",
    "url": "https://silkride.co.uk",
    "telephone": "+44 203 488 2324",
    "image": [
      "https://silkride.co.uk/logo.svg",
      "https://silkride.co.uk/vclassSide.webp",
      "https://silkride.co.uk/sclassSide.webp",
      "https://silkride.co.uk/eclassSide.webp"
    ]
  },
  "serviceType": "Wedding Transportation",
  "areaServed": ["London", "United Kingdom"],
  "description": "Luxury wedding chauffeur service with decorated Mercedes vehicles, professional drivers, bridal car service, and guest transportation for your special day."
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(weddingChauffeurSchema)
    }
  ]
})
</script>