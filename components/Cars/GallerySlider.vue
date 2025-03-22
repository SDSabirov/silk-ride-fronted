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
        <img src="/assets/images/eclass1.webp" class="w-screen-lg"/>
      </swiper-slide>
      <swiper-slide class="max-w-screen-md ">
        <img src="/assets/images/vclassjett.webp" class="w-screen-lg"/>
      </swiper-slide>
      <swiper-slide class="max-w-screen-md ">
        <img src="/assets/images/sclassBackground.webp" class="w-screen-lg"/>
      </swiper-slide>
      <swiper-slide class="max-w-screen-md ">
        <img src="/assets/images/covers/business-trip.webp" class="w-screen-lg"/>
      </swiper-slide>
      <swiper-slide class="max-w-screen-md ">
        <img src="/assets/images/covers/assist.webp" class="w-screen-lg"/>
      </swiper-slide>
      <swiper-slide class="max-w-screen-md ">
        <img src="/assets/images/covers/about-us.webp" class="w-screen-lg"/>
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
