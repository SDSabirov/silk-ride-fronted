<template>
  <div class="max-w-screen overflow-hidden">
    <Navbar />
    <CarsDetailHero
      :img="hero"
      :title="t('fleetPages.vClass.title')"
      :subtitle="t('fleetPages.vClass.subtitle')"
      :slogan="t('fleetPages.vClass.slogan')"
      altText="Mercedes Benz V-Class side view"
      :car="VClass"
    />
    <div
      class="bg-[url(/assets/images/covers/bgpattern.png)] bg-cover bg-center bg-no-repeat"
    >
      <CommonPageIntro
        :title="t('fleetPages.vClass.intro.title')"
        :paragraph="t('fleetPages.vClass.intro.paragraph')"
      />
    </div>

    <div
      class="flex flex-col w-full items-center justify-center py-22 bg-[url(/assets/images/covers/bgpattern2.png)] bg-contain bg-center bg-no-repeat"
    >
      <h2 class="text-black text-4xl font-semibold leading-loose text-center">
        {{ t("fleetPages.vClass.sectionTitle") }}
      </h2>
      <div class="w-full flex items-center justify-center mb-6">
        <div class="h-3 w-3 bg-gold rotate-45"></div>
        <div class="h-1 bg-gold w-full max-w-screen-xl"></div>
        <div class="h-3 w-3 bg-gold rotate-45"></div>
      </div>
      <div
        class="max-w-screen-xl w-full flex flex-col space-y-8 mb-6 px-2 md:px-0"
      >
       <!-- Card 1 -->
       <div
          class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-8 bg-white p-4"
        >
          <div>
            <h3 class="text-black text-2xl font-normal leading-loose">
              {{ t("fleetPages.vClass.cards.weddings.title") }}
            </h3>
            <p class="pr-6 text-lg italic">
              {{ t("fleetPages.vClass.cards.weddings.description") }}
            </p>
            <h4 class="text-gray-800 text-xl font-semibold leading-loose mt-4">
              {{ t("fleetPages.vClass.cards.weddings.featuresTitle") }}
            </h4>
            <ul class="text-lg leading-loose">
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>{{ t("fleetPages.vClass.cards.weddings.features[0]") }}</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>{{ t("fleetPages.vClass.cards.weddings.features[1]") }}</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>{{ t("fleetPages.vClass.cards.weddings.features[2]") }}</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>{{ t("fleetPages.vClass.cards.weddings.features[3]") }}</span>
              </li>
            </ul>
          </div>
          <div class="overflow-hidden">
            <img
              src="/assets/images/vclass2.webp"
              alt="v-class at wedding"
              loading="lazy"
              class="object-cover"
            />
          </div>
          <div class="md:col-span-2 flex items-center justify-center mt-4">
            <NuxtLink
              to="/booking"
              class="flex px-6 py-3 items-center justify-center border border-black text-black text-xl hover:bg-gold hover:text-black p-2"
            >
            {{ t('pages.common.bookNow') }}
            </NuxtLink>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-8 items-center bg-white p-4 rounded-sm"
        >
          <div>
            <h3 class="text-black text-2xl font-normal leading-loose">
              {{ t("fleetPages.vClass.cards.business.title") }}
            </h3>
            <p class="pr-6 text-lg italic">
              {{ t("fleetPages.vClass.cards.business.description") }}
            </p>
            <h4 class="text-gray-800 text-xl font-semibold leading-loose mt-4">
              {{ t("fleetPages.vClass.cards.business.featuresTitle") }}
            </h4>
            <ul class="text-lg leading-loose">
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>{{ t("fleetPages.vClass.cards.business.features[0]") }}</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>
                  {{ t("fleetPages.vClass.cards.business.features[1]") }}.
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>{{ t("fleetPages.vClass.cards.business.features[2]") }}</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>
                  {{ t("fleetPages.vClass.cards.business.features[3]") }}
                </span>
              </li>
            </ul>
          </div>
          <div class="md:order-first overflow-hidden">
            <img
              src="/assets/images/covers/business-trip.webp"
              alt="v-class for business trips"
              loading="lazy"
              class="object-cover"
            />
          </div>
          <div class="md:col-span-2 flex items-center justify-center mt-4">
            <NuxtLink
              to="/booking"
              class="flex px-6 py-3 items-center justify-center border border-black text-black text-xl hover:bg-gold hover:text-black p-2"
            >
            {{ t('pages.common.bookNow') }}
            </NuxtLink>
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-8 bg-white p-4"
        >
          <div>
            <h3 class="text-black text-2xl font-normal leading-loose">
              {{ t("fleetPages.vClass.cards.airport.title") }}
            </h3>
            <p class="pr-6 text-lg italic">
              {{ t("fleetPages.vClass.cards.airport.description") }}
            </p>
            <h4 class="text-gray-800 text-xl font-semibold leading-loose mt-4">
              {{ t("fleetPages.vClass.cards.airport.featuresTitle") }}
            </h4>
            <ul class="text-lg leading-loose">
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>{{ t("fleetPages.vClass.cards.airport.features[0]") }}</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>
                  {{ t("fleetPages.vClass.cards.airport.features[1]") }}.
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>{{ t("fleetPages.vClass.cards.airport.features[2]") }}</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>
                  {{ t("fleetPages.vClass.cards.airport.features[3]") }}
                </span>
              </li>
            </ul>
          </div>
          <div class="overflow-hidden">
            <img
              src="/assets/images/vclassjett.webp"
              alt="v-class for airport transfers"
              loading="lazy"
              class="object-cover"
            />
          </div>
          <div class="md:col-span-2 flex items-center justify-center mt-4">
            <NuxtLink
              to="/booking"
              class="flex px-6 py-3 items-center justify-center border border-black text-black text-xl hover:bg-gold hover:text-black p-2"
            >
            {{ t('pages.common.bookNow') }}
            </NuxtLink>
          </div>
        </div>

        <!-- Card 4 -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-8 bg-white p-4"
        >
          <div>
            <h3 class="text-black text-2xl font-normal leading-loose">
              {{ t("fleetPages.vClass.cards.events.title") }}
            </h3>
            <p class="pr-6 text-lg italic">
              {{ t("fleetPages.vClass.cards.events.description") }}
            </p>
            <h4 class="text-gray-800 text-xl font-semibold leading-loose mt-4">
              {{ t("fleetPages.vClass.cards.events.featuresTitle") }}
            </h4>
            <ul class="text-lg leading-loose">
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>{{ t("fleetPages.vClass.cards.events.features[0]") }}</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>
                  {{ t("fleetPages.vClass.cards.events.features[1]") }}.
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>{{ t("fleetPages.vClass.cards.events.features[2]") }}</span>
              </li>
             
            </ul>
          </div>
          <div class="md:order-first overflow-hidden">
            <img
              src="/assets/images/v-classshero.webp"
              alt="v-class for vip events"
              loading="lazy"
              class="object-cover"
            />
          </div>
          <div class="md:col-span-2 flex items-center justify-center mt-4">
            <NuxtLink
              to="/booking"
              class="flex px-6 py-3 items-center justify-center border border-black text-black text-xl hover:bg-gold hover:text-black p-2"
            >
            {{ t('pages.common.bookNow') }}
            </NuxtLink>
          </div>
        </div>

        <!-- Card 5 -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-8 bg-white p-4"
        >
          <div>
            <h3 class="text-black text-2xl font-normal leading-loose">
              {{ t("fleetPages.vClass.cards.family.title") }}
            </h3>
            <p class="pr-6 text-lg italic">
              {{ t("fleetPages.vClass.cards.family.description") }}
            </p>
            <h4 class="text-gray-800 text-xl font-semibold leading-loose mt-4">
              {{ t("fleetPages.vClass.cards.family.featuresTitle") }}
            </h4>
            <ul class="text-lg leading-loose">
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>{{ t("fleetPages.vClass.cards.family.features[0]") }}</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>
                  {{ t("fleetPages.vClass.cards.family.features[1]") }}.
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>{{ t("fleetPages.vClass.cards.family.features[2]") }}</span>
              </li>
              
            </ul>
          </div>
          <div class="overflow-hidden">
            <img
              src="/assets/images/vclassSide.webp"
              alt="v-class for family vacations"
              loading="lazy"
              class="object-cover"
            />
          </div>
          <div class="md:col-span-2 flex items-center justify-center mt-4">
            <NuxtLink
              to="/booking"
              class="flex px-6 py-3 items-center justify-center border border-black text-black text-xl hover:bg-gold hover:text-black p-2"
            >
            {{ t('pages.common.bookNow') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col w-full max-w-screen items-center justify-center py-22"
    >
      <h3
        class="w-full text-black text-4xl font-semibold leading-loose text-center mb-10"
      >
        Our Gallery
      </h3>
      <CarsGallerySlider />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import hero from "~/assets/images/v-classshero.webp";
const { t } = useI18n();

import { useSeo } from '~/utils/useSeo'
useSeo('vClass')

const galleryImages = [
  { src: hero, alt: "Mercedes-Benz V-Class Front View" },
  { src: hero, alt: "Mercedes-Benz V-Class Interior" },
  { src: hero, alt: "Mercedes-Benz V-Class Rear View" },
];

const VClass = {
  passengers: 7,
  cabinLuggage: 12,
  mediumLuggage: 7,
  hourlyRate: 75,
  minHours: 4,
};
</script>
