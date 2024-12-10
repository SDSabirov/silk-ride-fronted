<template>
    <section
      class="relative h-screen"
    >
      <!-- Background -->
      <div class="absolute inset-0 overflow-hidden">
        <img
          src="/assets/images/womanpassenger.webp"
          alt="Luxury Chauffeur"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <!-- Dark Overlay -->
      </div>
  
      <!-- Content -->
      <div class="relative z-10 text-center space-y-6 text-white flex flex-col justify-center items-center h-full">
        <h1 class="text-5xl md:text-7xl font-bold tracking-wide">
          Experience <span class="text-[#FFCB6C]">Luxury Travel</span>
        </h1>
        <p class="text-lg md:text-2xl font-light max-w-xl">
          Chauffeur services designed to redefine comfort and sophistication for
          every journey.
        </p>
  
        <!-- Call-to-Action Buttons -->
        <div class="space-x-4">
          <a
            href="#book-now"
            class="px-8 py-3 rounded-lg shadow-lg text-gray-900 font-semibold"
            style="background: #ffcb6c"
          >
            Book Now
          </a>
          <a
            href="#services"
            class="px-8 py-3 rounded-lg shadow-lg border text-[#FFCB6C] font-semibold hover:bg-[#FFCB6C] hover:text-gray-900 transition"
            style="border-color: #ffcb6c"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style>
  /* Additional styling for responsiveness or animations, if needed */
  </style>
