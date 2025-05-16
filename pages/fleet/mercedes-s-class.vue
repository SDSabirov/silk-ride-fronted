<template>
  <div>
    <Navbar />
    <CarsDetailHero
      :img="hero"
      :title="$t('fleetPages.sclass.brand')"
      :subtitle="$t('fleetPages.sclass.model')"
      :slogan="$t('fleetPages.sclass.slogan')"
      :altText="$t('fleetPages.sclass.alt')"
      :car="SClass"
    />
    <CommonPageIntro
      :title="$t('fleetPages.sclass.slogan')"
      :paragraph="$t('fleetPages.sclass.description')"
    />

    <div class="flex flex-col w-full items-center justify-center py-22">
      <h2 class="text-black text-4xl font-semibold leading-loose text-center">
        {{ $t('fleetPages.sclass.unmatched') }}
      </h2>
      <div class="w-full flex items-center justify-center mb-6">
        <div class="h-3 w-3 bg-gold rotate-45"></div>
        <div class="h-1 bg-gold w-full max-w-screen-xl"></div>
        <div class="h-3 w-3 bg-gold rotate-45"></div>
      </div>
      <div class="max-w-screen-xl w-full flex flex-col space-y-6 mb-6">
        <!-- Weddings Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-8">
          <div>
            <h3 class="text-black text-2xl font-normal leading-loose">
              {{ $t('fleetPages.sclass.weddings.title') }}
            </h3>
            <p class="pr-6 text-lg italic">
              {{ $t('fleetPages.sclass.weddings.text') }}
            </p>
            <h4 class="text-gray-800 text-xl font-normal leading-loose mt-4">
              {{ $t('fleetPages.sclass.key_features') }}
            </h4>
            <ul class="text-lg list-disc pl-6">
              <li>{{ $t('fleetPages.sclass.weddings.feature1') }}</li>
              <li>{{ $t('fleetPages.sclass.weddings.feature2') }}</li>
              <li>{{ $t('fleetPages.sclass.weddings.feature3') }}</li>
              <li>{{ $t('fleetPages.sclass.weddings.feature4') }}</li>
            </ul>
          </div>
          <div class="overflow-hidden">
            <img
              src="/assets/images/sclass.webp"
              :alt="$t('fleetPages.sclass.weddings.img_alt')"
              loading="lazy"
              class="object-cover"
            />
          </div>
          <div class="md:col-span-2 flex items-center justify-center mt-4">
            <NuxtLink
              to="/booking"
              class="flex px-6 py-3 items-center justify-center border border-black text-black text-xl hover:bg-gold hover:text-black p-2"
            >
              {{ $t('pages.common.bookNow') }}
            </NuxtLink>
          </div>
        </div>

        <!-- Business Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-8 items-center">
          <div>
            <h3 class="text-black text-2xl font-normal leading-loose">
              {{ $t('fleetPages.sclass.business.title') }}
            </h3>
            <p class="pr-6 text-lg italic">
              {{ $t('fleetPages.sclass.business.text') }}
            </p>
            <h4 class="text-gray-800 text-xl font-normal leading-loose mt-4">
              {{ $t('fleetPages.sclass.key_features') }}
            </h4>
            <ul class="text-lg list-disc pl-6">
              <li>{{ $t('fleetPages.sclass.business.feature1') }}</li>
              <li>{{ $t('fleetPages.sclass.business.feature2') }}</li>
              <li>{{ $t('fleetPages.sclass.business.feature3') }}</li>
              <li>{{ $t('fleetPages.sclass.business.feature4') }}</li>
            </ul>
          </div>
          <div class="md:order-first">
            <img
              src="/assets/images/sclass.webp"
              :alt="$t('fleetPages.sclass.business.img_alt')"
              loading="lazy"
              class="object-cover"
            />
          </div>
          <div class="md:col-span-2 flex items-center justify-center mt-4">
            <NuxtLink
              to="/booking"
              class="flex px-6 py-3 items-center justify-center border border-black text-black text-xl hover:bg-gold hover:text-black p-2"
            >
              {{ $t('pages.common.bookNow') }}
            </NuxtLink>
          </div>
        </div>

        <!-- Airport Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-8">
          <div>
            <h3 class="text-black text-2xl font-normal leading-loose">
              {{ $t('fleetPages.sclass.airport.title') }}
            </h3>
            <p class="pr-6 text-lg italic">
              {{ $t('fleetPages.sclass.airport.text') }}
            </p>
            <h4 class="text-gray-800 text-xl font-normal leading-loose mt-4">
              {{ $t('fleetPages.sclass.key_features') }}
            </h4>
            <ul class="text-lg list-disc pl-6">
              <li>{{ $t('fleetPages.sclass.airport.feature1') }}</li>
              <li>{{ $t('fleetPages.sclass.airport.feature2') }}</li>
              <li>{{ $t('fleetPages.sclass.airport.feature3') }}</li>
              <li>{{ $t('fleetPages.sclass.airport.feature4') }}</li>
            </ul>
          </div>
          <div>
            <img
              src="/assets/images/sclass.webp"
              :alt="$t('fleetPages.sclass.airport.img_alt')"
              loading="lazy"
              class="object-cover"
            />
          </div>
          <div class="md:col-span-2 flex items-center justify-center mt-4">
            <NuxtLink
              to="/booking"
              class="flex px-6 py-3 items-center justify-center border border-black text-black text-xl hover:bg-gold hover:text-black p-2"
            >
              {{ $t('pages.common.bookNow') }}
            </NuxtLink>
          </div>
        </div>

        <!-- VIP Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-8">
          <div>
            <h3 class="text-black text-2xl font-normal leading-loose">
              {{ $t('fleetPages.sclass.vip.title') }}
            </h3>
            <p class="pr-6 text-lg italic">
              {{ $t('fleetPages.sclass.vip.text') }}
            </p>
            <h4 class="text-gray-800 text-xl font-normal leading-loose mt-4">
              {{ $t('fleetPages.sclass.key_features') }}
            </h4>
            <ul class="text-lg list-disc pl-6">
              <li>{{ $t('fleetPages.sclass.vip.feature1') }}</li>
              <li>{{ $t('fleetPages.sclass.vip.feature2') }}</li>
              <li>{{ $t('fleetPages.sclass.vip.feature3') }}</li>
            </ul>
          </div>
          <div class="md:order-first">
            <img
              src="/assets/images/sclass.webp"
              :alt="$t('fleetPages.sclass.vip.img_alt')"
              loading="lazy"
              class="object-cover"
            />
          </div>
          <div class="md:col-span-2 flex items-center justify-center mt-4">
            <NuxtLink
              to="/booking"
              class="flex px-6 py-3 items-center justify-center border border-black text-black text-xl hover:bg-gold hover:text-black p-2"
            >
              {{ $t('pages.common.bookNow') }}
            </NuxtLink>
          </div>
        </div>

        <!-- Romantic Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-8">
          <div>
            <h3 class="text-black text-2xl font-normal leading-loose">
              {{ $t('fleetPages.sclass.romantic.title') }}
            </h3>
            <p class="pr-6 text-lg italic">
              {{ $t('fleetPages.sclass.romantic.text') }}
            </p>
            <h4 class="text-gray-800 text-xl font-normal leading-loose mt-4">
              {{ $t('fleetPages.sclass.key_features') }}
            </h4>
            <ul class="text-lg list-disc pl-6">
              <li>{{ $t('fleetPages.sclass.romantic.feature1') }}</li>
              <li>{{ $t('fleetPages.sclass.romantic.feature2') }}</li>
              <li>{{ $t('fleetPages.sclass.romantic.feature3') }}</li>
            </ul>
          </div>
          <div>
            <img
              src="/assets/images/sclass.webp"
              :alt="$t('fleetPages.sclass.romantic.img_alt')"
              loading="lazy"
              class="object-cover"
            />
          </div>
          <div class="md:col-span-2 flex items-center justify-center mt-4">
            <NuxtLink
              to="/booking"
              class="flex px-6 py-3 items-center justify-center border border-black text-black text-xl hover:bg-gold hover:text-black p-2"
            >
              {{ $t('pages.common.bookNow') }}
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
       {{ $t('fleetPages.sclass.galleryTitle') }}
      </h3>
      <CarsGallerySlider />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import hero from "~/assets/images/sclassBackground.webp";
import { useSeo } from '~/utils/useSeo'
useSeo('sClass')

const galleryImages = [
  { src: hero, alt: "Mercedes-Benz S-Class Front View" },
  { src: hero, alt: "Mercedes-Benz S-Class Interior" },
  { src: hero, alt: "Mercedes-Benz S-Class Rear View" },
];

const SClass = {
  passengers: 3,
  cabinLuggage: 3,
  mediumLuggage: 2,
  hourlyRate: 75,
  minHours: 4,
};
</script>
