<template>
  <section class="py-12 relative">
    <!--background-->
    <div class="w-full h-full absolute top-0 flex -z-10">
      <div class="w-1/2 h-full bg-gray-100"></div>
      <div class="w-1/2 h-full bg-gray-200"></div>
    </div>
    <div class="container mx-auto max-w-screen-xl px-4 text-center z-20 w-full">
      <div class="flex flex-col w-full items-center justify-center">
        <h2
          class="text-2xl md:text-5xl font-semibold text-gray-900 mb-10 text-center w-full"
        >
          Popular Choices for Every Journey
        </h2>
        <div class="flex items-center w-full mb-2 justify-center mb-6">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <div class="h-1 bg-gold w-1/2"></div>
          <div class="h-3 w-3 bg-gold rotate-45"></div>
        </div>
        <!-- Cards Section -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div
            class="overflow-hidden rounded-lg shadow-lg bg-gradient-to-b from-green-200"
          >
            <img
              src="/assets/images/sclasstransparent.webp"
              alt="Luxury Sedan"
              class="w-full h-64 object-cover"
            />
            <div class="p-4">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                ElectraLux
              </h3>
              <p class="text-gray-600">
                Designed for eco-conscious travelers, this electric vehicle
                redefines sophistication and comfort for every journey.
              </p>
            </div>
          </div>
          <!-- Card 2 -->
          <div
            class="overflow-hidden rounded-lg shadow-lg bg-gradient-to-b from-gold/90"
          >
            <img
              src="/assets/images/vclasstransparent.jpg"
              alt="Premium SUV"
              class="w-full h-64 object-cover"
            />
            <div class="p-4">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                PrestigeVan
              </h3>
              <p class="text-gray-600">
                Spacious and stylish, ideal for families or group travel with
                added comfort.
              </p>
            </div>
          </div>
          <!-- Card 3 -->
          <div
            class="overflow-hidden rounded-lg shadow-lg bg-gradient-to-b from-gold"
          >
            <img
              src="/assets/images/sclasstransparent.webp"
              alt="Executive Limousine"
              class="w-full h-64 object-cover"
            />
            <div class="p-4">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Executive Limousine
              </h3>
              <p class="text-gray-600">
                The ultimate luxury for business executives and special events.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full flex items-center justify-center py-6">
            <button class="px-8 py-3 bg-black flex items-center space-x-2 text-white">
              <span> Learn More  </span>

              <span>
                <i class="bx bx-chevrons-right"></i>
              </span>
            </button>
        </div>
      </div>
    </div>
  </section>
</template>
