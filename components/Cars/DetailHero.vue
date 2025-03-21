<template>
  <div>
    <section class="h-screen w-screen bg-black/95 relative">
      <div class="h-full w-full">
        <img :src="img" :alt="altText" class="w-full h-full object-cover" />
      </div>

      <div
        class="absolute top-0 bg-gradient-to-b from-black/80 via-transparent via-30% to-90% to-black/80 h-full w-full"
      ></div>
      <header
        class="flex flex-col text-white text-center space-y-6 items-center justify-center w-full h-full absolute top-0"
      >
      <div class="max-w-screen-xl flex flex-col items-center justify-center space-y-6 p-4  bg-black/20 rounded-md backdrop-blur-md px-2 mx-2 md:mx-0 md:px-12">
        <h1
          class="text-3xl md:text-6xl font-semibold tracking-wide text-white bottom-28 mx-auto w-full text-center font-heading"
        >
          {{ title }} <span class="text-gold">{{ subtitle }}</span>
        </h1>
        <p class="text-gray-300 italic text-xl font-heading leading-8">{{ slogan }}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full whitespace-nowrap capitalize">
          <div class="flex items-center justify-start space-x-2">
            <i class='bx bxs-briefcase bx-md' ></i>
            <p>up to {{ car.cabinLuggage }} suitcases</p>
          </div>
          <div class="flex items-center justify-start space-x-2">
            <i class='bx bxs-user bx-md'></i>
            <p>up to {{ car.passengers }} passengers</p>
          </div>
          <div class="flex items-center justify-start space-x-2">
            <i class='bx bx-wifi bx-md' ></i>
            <p>On board Wi-Fi</p>
          </div>
          <div class="flex items-center justify-start space-x-2">
            <i class='bx bxs-backpack bx-md'></i>
            <p>up to {{ car.mediumLuggage }} medium size luggage</p>
          </div>
          <div class="flex items-center justify-start space-x-2">
            <i class='bx bxs-hide bx-md'></i>
            <p>Privacy Glasses</p>
          </div>
          
          <div class="flex items-center justify-start space-x-2">
            <i class='bx bxs-movie-play bx-md' ></i>
            <p>Entertainment System</p>
          </div>
        </div>
        <NuxtLink
          to="/booking"
          class="flex px-6 py-3 items-center justify-center border border-gold text-gold text-xl bg-black/80 hover:bg-gold hover:text-black p-2"
        >
          Book Now
        </NuxtLink>
      </div>
       
      </header>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    slogan: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      default: "Car image",
    },
    car:{
      type:Object,
      required:true,
    }
  },
};
</script>
