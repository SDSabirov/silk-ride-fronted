<template>
  <section class="py-12 bg-white bg-[url(/assets/images/covers/bgpattern.png)] bg-contain bg-center bg-no-repeat">
    <div class="container mx-auto max-w-screen-xl px-4 text-center">
      <!-- Section Title -->
      <h2 class="text-2xl md:text-5xl font-semibold text-black mb-4">
        Why Silk Ride is Your Best Choice for Luxury Travel
      </h2>

      <div class="flex items-center w-full mb-4 justify-center">
        <div class="h-3 w-3 bg-gold rotate-45"></div>
        <div class="h-1 bg-gold w-1/2"></div>
        <div class="h-3 w-3 bg-gold rotate-45"></div>
      </div>
      <p class="text-lg md:text-xl font-normal text-gray-700 mb-10">
        At <strong>Silk Ride</strong>, we go beyond just transportation – we
        offer an exceptional travel experience. Whether you're heading to a
        business meeting, airport, or special event, we ensure
        <strong>comfort, reliability, and first-class service</strong> every
        step of the way.
      </p>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <!-- Professional Chauffeurs -->
        <div class="bg-white p-6 shadow-lg transition max-w-[380px]">
          <div class="flex justify-center mb-4 text-gold">
            <i class="bx bxs-user-check bx-lg"></i>
          </div>
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">
            Professional Chauffeurs
          </h3>
          <p class="text-gray-600">
            Our experienced, multi-lingual chauffeurs are trained to the highest
            standards. Courteous, knowledgeable, and always punctual, they
            provide a seamless experience tailored to your needs.
          </p>
        </div>

        <!-- Luxury Fleet -->
        <div class="bg-white p-6 shadow-lg transition max-w-[380px]">
          <div class="flex justify-center mb-4 text-gold">
            <i class="bx bxs-car bx-lg"></i>
          </div>
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">
            Premium Fleet & Ultimate Comfort
          </h3>
          <p class="text-gray-600">
            Travel in luxury and style with our top-of-the-line vehicles,
            including Mercedes-Benz E-Class, V-Class, and S-Class. Spacious
            interiors, climate control, and advanced technology guarantee a
            smooth and enjoyable ride.
          </p>
        </div>

        <!-- 24/7 Availability -->
        <div class="bg-white p-6 shadow-lg transition max-w-[380px]">
          <div class="flex justify-center mb-4 text-gold">
            <i class="bx bxs-time-five bx-lg"></i>
          </div>
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">
            24/7 Availability – Anytime, Anywhere
          </h3>
          <p class="text-gray-600">
            Your schedule is our priority. Our chauffeur services are available
            24/7, so whether you need an early morning airport transfer or a
            late-night ride, we’ve got you covered.
          </p>
        </div>

        <div
          class="lg:col-span-3 flex flex-col md:flex-row justify-center gap-8"
        >
          <!-- Global Airport Coverage -->
          <div class="bg-white p-6 shadow-lg transition max-w-[380px]">
            <div class="flex justify-center mb-4 text-gold">
              <i class="bx bxs-map bx-lg"></i>
            </div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">
              Coverage Across London & the UK
            </h3>
            <p class="text-gray-600">
              We offer transfers across London and major UK cities, ensuring you
              reach your destination effortlessly. Whether you need an airport
              pickup, a city transfer, or an intercity ride, Silk Ride is always
              available.
            </p>
          </div>

          <!-- Trusted by business -->
          <div class="bg-white p-6 shadow-lg transition max-w-[380px]">
            <div class="flex justify-center mb-4 text-gold">
              <i class="bx bxs-badge-check bx-lg"></i>
            </div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">
              Trusted by Business & VIP Clients
            </h3>
            <p class="text-gray-600">
              Silk Ride is the preferred choice for corporate executives, VIP
              travelers, and high-profile clients who demand excellence in every
              journey
            </p>
          </div>
        </div>
      </div>
      <!--BAdges grid -->
      <div class="flex space-x-4 items-end justify-end w-full mt-10 mb-10">
        <div class="flex flex-col items-center">
          <img
            src="/assets/icons/10yearsbadge.webp"
            class="w-[58px]"
            alt="10  year of experience"
          />
          <p class="text-sm text-gray-600 italic whitespace-nowrap capitalize">
            10 years of Experince
          </p>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex space-x-2 items-start text-gray-900">
            <i class="bx bxs-like bx-lg"></i>
            <p class="text-[22px]  font-bold text-gray-900">50K+</p>
          </div>

          <p class="text-sm text-gray-600 italic whitespace-nowrap capitalize">
            satisfied clients worldwide
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional script is required for static content.
</script>

<style>
/* Optional additional styles */
</style>
