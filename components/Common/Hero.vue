<template>
  <section class="relative h-[70vh]">
    <img
      :src="image"
      alt="fleet"
      class="w-full h-full object-cover"
    />
    <div
      class="absolute top-0 bg-black/70 w-full h-full flex flex-col items-center justify-center"
    >
      <div
        class="flex flex-col text-white text-center space-y-6 items-center justify-center w-full"
      >
        <h1 class="text-4xl md:text-8xl font-semibold tracking-wide">{{page}}</h1>
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
<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    page:{
      type:String,
      required:false,
    }
  },
};
</script>
