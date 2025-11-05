<template>
  <div class="py-10 overflow-hidden">
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="{ clickable: true }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide class="max-w-screen-md ">
        <NuxtImg src="/images/eclass1.webp" alt="Mercedes E-Class luxury interior" class="w-screen-lg" loading="lazy" width="1200" height="800"/>
      </swiper-slide>
      <swiper-slide class="max-w-screen-md ">
        <NuxtImg src="/images/vclassjett.webp" alt="Mercedes V-Class chauffeur service" class="w-screen-lg" loading="lazy" width="1200" height="800"/>
      </swiper-slide>
      <swiper-slide class="max-w-screen-md ">
        <NuxtImg src="/images/sclassBackground.webp" alt="Mercedes S-Class premium sedan" class="w-screen-lg" loading="lazy" width="1200" height="800"/>
      </swiper-slide>
      <swiper-slide class="max-w-screen-md ">
        <NuxtImg src="/images/covers/business-trip.webp" alt="Business travel chauffeur service" class="w-screen-lg" loading="lazy" width="1200" height="800"/>
      </swiper-slide>
      <swiper-slide class="max-w-screen-md ">
        <NuxtImg src="/images/covers/assist.webp" alt="Professional luggage assistance service" class="w-screen-lg" loading="lazy" width="1200" height="800"/>
      </swiper-slide>
      <swiper-slide class="max-w-screen-md ">
        <NuxtImg src="/images/covers/about-us.webp" alt="Silk Ride luxury chauffeur fleet" class="w-screen-lg" loading="lazy" width="1200" height="800"/>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>
