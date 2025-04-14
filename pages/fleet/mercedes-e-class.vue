<template>
  <div class="">
    <Navbar />
    <CarsDetailHero
      :img="hero"
      :title="t('fleetPages.eClass.title')"
      :subtitle="t('fleetPages.eClass.subtitle')"
      :slogan="t('fleetPages.eClass.slogan')"
      altText="Mercedes Benz E-Class side view"
      :car="EClass"
    />
    <CommonPageIntro
      :title="t('fleetPages.eClass.intro.title')"
      :paragraph="t('fleetPages.eClass.intro.paragraph')"
    />

    <div class="flex flex-col w-full items-center justify-center py-22">
      <div class="max-w-screen-xl w-full flex flex-col space-y-6 mb-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 border-b-2 border-b-gold px-4 mb-6 py-4 mb-6">
          <div>
            <h2 class="text-black text-4xl font-semibold leading-loose text-center">
              {{ t('fleetPages.eClass.whyTitle') }}
            </h2>
            <div class="w-full flex items-center justify-center mb-4">
              <div class="h-3 w-3 bg-gold rotate-45"></div>
              <div class="h-1 bg-gold w-full max-w-screen-xl"></div>
              <div class="h-3 w-3 bg-gold rotate-45"></div>
            </div>
            <ul class="mt-4 space-y-4 text-md leading-loose">
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>{{ t('fleetPages.eClass.whyBullets[0]') }}</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>{{ t('fleetPages.eClass.whyBullets[1]') }}</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>{{ t('fleetPages.eClass.whyBullets[2]') }}</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>{{ t('fleetPages.eClass.whyBullets[3]') }}</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>{{ t('fleetPages.eClass.whyBullets[4]') }}</span>
              </li>
            </ul>
          </div>
          <div class="overflow-hidden">
            <img src="/assets/images/eclass1.webp" alt="s-class at wedding" loading="lazy" class="object-cover h-full sepia" />
          </div>
          <div class="md:col-span-2 flex items-center justify-center mt-4">
            <NuxtLink to="/booking" class="flex px-6 py-3 items-center justify-center border border-black text-black text-xl hover:bg-gold hover:text-black p-2">
              {{ t('pages.common.bookNow') }}
            </NuxtLink>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-4 items-center">
          <div class="flex flex-col space-y-4 justify-start h-full">
            <h2 class="text-black text-4xl font-semibold leading-loose">
              {{ t('fleetPages.eClass.occasionsTitle') }}
            </h2>
            <ul class="mt-4 space-y-4 text-md leading-loose">
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>{{ t('fleetPages.eClass.occasionsBullets[0]') }}</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>{{ t('fleetPages.eClass.occasionsBullets[1]') }}</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>{{ t('fleetPages.eClass.occasionsBullets[2]') }}</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>{{ t('fleetPages.eClass.occasionsBullets[3]') }}</span>
              </li>
            </ul>
            <p class="pr-6 text-lg italic leading-loose">
              {{ t('fleetPages.eClass.closingNote') }}
            </p>
          </div>
          <div class="md:order-first h-full">
            <img src="/assets/images/covers/wedding.webp" alt="s-class for business" loading="lazy" class="object-cover h-full" />
          </div>
          <div class="md:col-span-2 flex items-center justify-center mt-4">
            <NuxtLink to="/booking" class="flex px-6 py-3 items-center justify-center border border-black text-black text-xl hover:bg-gold hover:text-black p-2">
              {{ t('pages.common.bookNow') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-full max-w-screen items-center justify-center py-22">
      <h3 class="w-full text-black text-4xl font-semibold leading-loose text-center mb-10">
        {{ t('fleetPages.eClass.galleryTitle') }}
      </h3>
      <CarsGallerySlider />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import hero from "~/assets/images/eclass.webp";
import { useI18n, useLocalePath } from '#imports';

const { t } = useI18n()
useHead({
  title: "Mercedes E-Class Chauffeur Hire London & UK| Executive Car Service",
  meta: [
    {
      name: "description",
      content:
        "Discover Silk Ride's premium fleet of chauffeur-driven vehicles in London, including Mercedes-Benz E-Class, S-Class, and spacious V-Class models. Travel in luxury, comfort, and style with our executive cars.Hire a chauffeur-driven Mercedes E-Class in London with Silk Ride. The perfect blend of comfort, style, and professionalism for business travel, airport transfers, and city rides. Book your executive car today.",
    },
  ],
});
const galleryImages = [
  { src: hero, alt: "Mercedes-Benz V-Class Front View" },
  { src: hero, alt: "Mercedes-Benz V-Class Interior" },
  { src: hero, alt: "Mercedes-Benz V-Class Rear View" },
];

const EClass = {
  passengers: 3,
  cabinLuggage: 3,
  mediumLuggage: 2,
  hourlyRate: 75,
  minHours: 4,
};
</script>
