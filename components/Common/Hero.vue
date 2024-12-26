<template>
  <section class="relative h-[70vh]">
    <img
      src="/assets/images/4vclass.webp"
      alt="fleet"
      class="w-full h-full object-cover"
    />
    <div
      class="absolute top-0 bg-black/60 w-full h-full flex flex-col items-center justify-center"
    >
      <header
        class="flex flex-col text-white text-center space-y-6 items-center justify-center"
      >
        <h1 class="text-4xl md:text-6xl font-semibold tracking-wide max-w-screen-xl">
            Travel in Style with 
          <span class="text-gold">Our Premium Fleet</span>
        </h1>
        <p class="text-xl md:text-3xl font-light px-2 md:px-0 max-w-screen-xl">
          Choose from a range of premium vehicles tailored to meet your travel
          needs, ensuring sophistication at every mile.
        </p>
        <NuxtLink
          to="/booking"
          class="flex w-1/3 items-center justify-center border border-gold text-gold text-xl hover:bg-gold hover:text-black p-2"
        >
          Book Now
        </NuxtLink>
      </header>
    </div>
  </section>
</template>
