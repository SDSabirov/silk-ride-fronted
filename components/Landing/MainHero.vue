<template>
  <section class="relative h-screen">
    <!-- Background -->
    <div class="absolute inset-0 overflow-hidden">
      <img
        src="/assets/images/vclassjett.webp"
        alt="Luxury Chauffeur"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent via-30% to-90% to-black/80"></div>
      <!-- Dark Overlay -->
    </div>

    <!-- Content -->
    <header
      class="relative z-10 text-center space-y-8 text-white flex flex-col justify-center items-center h-full"
    >
      <h1 class="text-4xl md:text-8xl font-semibold tracking-wide">
        Experience <span class="text-gold">Luxury Travel</span>
      </h1>
      <p class="text-xl md:text-3xl font-light px-2 md:px-0">
        Premium chauffeur service designed for comfort, elegance, and seamless travel.
      </p>
        <!-- Call-to-Action Buttons -->
        <div class="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-4 mt-4 justify-center items-center">
          <a
            href="/booking"
            class="px-8 py-3 text-xl shadow-lg text-black font-semibold"
            style="background: #ffcb6c"
          >
            Book Now
          </a>
          <a
            href="/services"
            class="px-3 md:px-8 py-3 shadow-lg border text-[#FFCB6C] text-lg md:text-xl font-semibold hover:bg-[#FFCB6C] hover:text-black transition bg-black/70 shadow-md backdrop-blur"
            style="border-color: #ffcb6c"
          >
            Explore Services
          </a>
        </div>
   
  
    </header>
  </section>
</template>

<script>
export default {};
</script>

<style>
/* Additional styling for responsiveness or animations, if needed */
</style>
