<template>
  <div class="services-grid max-w-screen-xl mx-auto p-6">
    <div class="flex items-center w-full mb-4 justify-center mb-8">
      <div class="w-full flex items-center justify-center">
        <div class="h-3 w-3 bg-gold rotate-45"></div>
        <div class="h-1 bg-gold w-1/2"></div>
        <div class="h-3 w-3 bg-gold rotate-45"></div>
      </div>
      <h1 class="text-4xl font-bold text-center w-full uppercase">
        {{ $t("pages.services.title") }}
      </h1>
      <div class="w-full flex items-center justify-center">
        <div class="h-3 w-3 bg-gold rotate-45"></div>
        <div class="h-1 bg-gold w-1/2"></div>
        <div class="h-3 w-3 bg-gold rotate-45"></div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ServicesCard card="airport" :image="airportImage" />
    <ServicesCard card="corporate" :image="corporateImage" />
    <ServicesCard card="hourly" :image="hourlyImage" />
    <ServicesCard card="longDistance" :image="longDistanceImage" />
    <ServicesCard card="wedding" :image="weddingImage" />
    <ServicesCard card="event" :image="eventImage" />
    </div>
  </div>
</template>
<script setup>
const airportImage = '/images/vclassjett.webp'
const corporateImage = '/images/covers/business-trip.webp'
const hourlyImage = '/images/covers/about-us.webp'
const longDistanceImage = '/images/covers/assist.webp'
const weddingImage = '/images/covers/wedding.webp'
const eventImage = '/images/womanpassenger.webp'
</script>
