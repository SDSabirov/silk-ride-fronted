<template>
  <section class="relative h-[70vh]">
    <img
      src="/assets/images/4vclass.webp"
      alt="fleet"
      class="w-full h-full object-cover"
    />
    <div
      class="absolute top-0 bg-black/70 w-full h-full flex flex-col items-center justify-center"
    >
      <div
        class="flex flex-col text-white text-center space-y-6 items-center justify-center w-full"
      >
      
        <NuxtLink
          to="/booking"
          class="flex px-6 py-3 items-center justify-center border border-gold text-gold text-xl hover:bg-gold hover:text-black p-2"
        >
          Book Now
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
