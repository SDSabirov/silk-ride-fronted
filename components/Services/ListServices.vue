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
import airportImage from '@/assets/images/vclassjett.webp'
import corporateImage from '@/assets/images/covers/business-trip.webp'
import hourlyImage from '@/assets/images/covers/about-us.webp'
import longDistanceImage from '@/assets/images/covers/assist.webp'
import weddingImage from '@/assets/images/covers/wedding.webp'
import eventImage from '@/assets/images/womanpassenger.webp'
</script>
