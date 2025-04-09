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
          Our Most Requested Chauffeur Services
        </h2>
        <div class="flex items-center w-full mb-2 justify-center mb-6">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <div class="h-1 bg-gold w-1/2"></div>
          <div class="h-3 w-3 bg-gold rotate-45"></div>
        </div>
        <!-- Cards Section -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Card 1 -->
          <div
            class="relative overflow-hidden shadow-lg bg-gradient-to-b from-green-200 group h-[700px]"
          >
            <!-- Image -->
            <img
              src="/assets/images/eclass.webp"
              alt="Luxury Sedan"
              class="w-full h-full object-cover"
            />

            <!-- Header (Visible by default) -->
            <div
              class="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xl font-semibold transition-opacity duration-300 group-hover:opacity-0"
            >
              <h3 class="text-4xl">E-Class</h3>
            </div>

            <!-- Description (Visible on hover) -->
            <div
              class="absolute inset-0 flex items-center justify-center bg-black/75 text-white text-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col"
            >
              <p class="text-md">
                Enjoy a perfect balance of luxury and efficiency with the
                Mercedes-Benz E-Class, designed for business and leisure travel
                alike
              </p>
              <CommonPriceGuide
                hourlyRate="50"
                dayRate="400"
                heathrowToCenteral="120"
              />
              <div
                class="w-full flex flex-col space-y-2 items-center justify-center absolute bottom-4"
              >
                <NuxtLink
                  to="/booking"
                  class="flex w-[160px] items-center justify-center border border-white text-white text-lg hover:bg-gold hover:text-black hover:border-gold p-2 transition-all duration-300 ease-in bg-delay-300"
                >
                  Book Now
                </NuxtLink>

                <NuxtLink
                  to="/fleet/mercedes-e-class"
                  class="flex w-[160px] flex items-center space-x-2 justify-center text-white text-lg hover:text-gold hover:text-black p-2"
                >
                  <span> Learn More </span>

                  <span>
                    <i class="bx bx-right-arrow-alt"></i>
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div
            class="relative overflow-hidden shadow-lg bg-gradient-to-b from-gold group h-[700px]"
          >
            <!-- Image -->
            <img
              src="/assets/images/covers/business-trip.webp"
              alt="Luxury Sedan"
              class="w-full h-full object-cover"
            />

            <!-- Header (Visible by default) -->
            <div
              class="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xl font-semibold transition-opacity duration-300 group-hover:opacity-0"
            >
              <h3 class="text-4xl">V-Class</h3>
            </div>

            <!-- Description (Visible on hover) -->
            <div
              class="absolute inset-0 flex items-center justify-center bg-black/75 text-white text-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col"
            >
              <p class="text-md">
                Ideal for groups and families, the Mercedes-Benz V-Class offers
                spacious interiors and premium comfort for every journey.
              </p>
              <CommonPriceGuide
                hourlyRate="75"
                dayRate="600"
                heathrowToCenteral="160"
              />
              <div
                class="w-full flex flex-col space-y-2 items-center justify-center absolute bottom-4"
              >
                <NuxtLink
                  to="/booking"
                  class="flex w-[160px] items-center justify-center border border-white text-white text-lg hover:bg-gold hover:text-black hover:border-gold p-2 transition-all duration-300 ease-in bg-delay-300"
                >
                  Book Now
                </NuxtLink>

                <NuxtLink
                  to="/fleet/mercedes-v-class"
                  class="flex w-[160px] flex items-center space-x-2 justify-center text-white text-lg hover:text-gold hover:text-black p-2"
                >
                  <span> Learn More </span>

                  <span>
                    <i class="bx bx-right-arrow-alt"></i>
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div
            class="relative overflow-hidden shadow-lg bg-gradient-to-b from-green-200 group row-span-1 h-[700px]"
          >
            <!-- Image -->
            <img
              src="/assets/images/sclassBackground.webp"
              alt="Luxury Sedan"
              class="w-full h-full object-cover"
            />

            <!-- Header (Visible by default) -->
            <div
              class="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xl font-semibold transition-opacity duration-300 group-hover:opacity-0"
            >
              <h3 class="text-4xl">S-Class</h3>
            </div>

            <!-- Description (Visible on hover) -->
            <div
              class="absolute inset-0 flex items-center justify-center bg-black/75 text-white text-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col"
            >
              <p class="text-md">
                The pinnacle of luxury, the Mercedes-Benz S-Class delivers
                unmatched elegance, cutting-edge technology, and supreme
                comfort.
              </p>
              <CommonPriceGuide
                hourlyRate="75"
                dayRate="600"
                heathrowToCenteral="160"
              />
              <div
                class="w-full flex flex-col space-y-2 items-center justify-center absolute bottom-4"
              >
                <NuxtLink
                  to="/booking"
                  class="flex w-[160px] items-center justify-center border border-white text-white text-lg hover:bg-gold hover:text-black hover:border-gold p-2 transition-all duration-300 ease-in bg-delay-300"
                >
                  Book Now
                </NuxtLink>

                <NuxtLink
                  to="/fleet/mercedes-s-class"
                  class="flex w-[160px] flex items-center space-x-2 justify-center text-white text-lg hover:text-gold hover:text-black p-2"
                >
                  <span> Learn More </span>

                  <span>
                    <i class="bx bx-right-arrow-alt"></i>
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full flex flex-col items-center justify-center space-y-4 mt-6 bg-gradient-to-r from-black via-gray-900 via-10% to-90% to-black p-6 rounded-xl"
        >
          <h3 class="text-xl md:text-3xl font-semibold text-white">
            Not your ordinary booking?
          </h3>
          <p class="text-lg md:text-xl italic text-white">
            Whether you need a fleet or something extra, our team is here to
            help. Contact us at
            <a href="tel:+447512905514" class="text-gold whitespace-nowrap">+44 7512 905514</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
