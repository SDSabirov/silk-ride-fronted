<template>
  <div class="flex flex-wrap gap-6 justify-center w-full">
    <!-- Car Cards -->
     
    <div
      v-for="car in carModels"
      :key="car.id"
      @click="selectCar(car)"
      :class="[
        'flex flex-col items-center border border-gray-300 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:border-gray-400 transition',
        selectedCar && selectedCar.id === car.id ? 'bg-green-100' : 'bg-white',
      ]"
    >
      <!-- Car Image -->
      <img
        :src="car.image"
        :alt="car.model"
        class="w-full h-40 object-cover mb-4"
      />
      <!-- Brand and Model -->
      <h3 class="text-xl font-semibold text-gray-800 mb-4">
        {{ car.brand }} {{ car.model }}
      </h3>
      <div
        class="flex w-full space-x-3 text-lg h-12 items-center justify-center p-4"
      >
        <div class="grid grid-cols-2 gap-2 text-sm px-2">
          <div>
            <i class="bx bxs-shopping-bag mr-2"></i>
            <span>Up to {{ car.carryBags }} carry bags</span>
          </div>
          <div>
            <i class="bx bxs-backpack mr-2"></i>
            <span>Up to {{ car.luggage }} luggages </span>
          </div>
          <div>
            <i class="bx bxs-group mr-2"></i>
            <span>
            Up to {{ car.numberOfPassengers }} passengers
            </span>
            
          </div>
          <div>
            <i class="bx bx-wifi mr-2"></i>
            <span>
              Wi fi included
            </span>
          </div>
        </div>
      </div>
      <!-- Price -->
      <div class="flex justify-between items-center"></div>

      <!-- Features -->
      <ul
        class="list-image-[url(/assets/icons/checkmark-circle.png)] list-inside mt-4 space-y-2"
      >
        <li class="flex items-center">
          <span class="bg-gold h-2 w-2 rotate-45 mr-2"></span>
          First class chauffeur
        </li>
        <li class="flex items-center">
          <span class="bg-gold h-2 w-2 rotate-45 mr-2"></span>
          Free 60 mins airport parking & waiting
        </li>
        <li class="flex items-center">
          <span class="bg-gold h-2 w-2 rotate-45 mr-2"></span>
          Free 15 mins waiting for other journeys
        </li>
        <li class="flex items-center">
          <span class="bg-gold h-2 w-2 rotate-45 mr-2"></span>
          Free cancellation within 24 hours
        </li>
      </ul>
      <div class="flex flex-col w-full items-center justify-center my-4">
        <button
          class="px-6 py-2 w-1/2 text-xl text-black border border-black hover:bg-gold"
          :class="[
        ' transition',
        selectedCar && selectedCar.id === car.id ? 'bg-black' : 'bg-transparent',
      ]"
        >
          <template v-if="selectedCar && selectedCar.id === car.id">
            <i class="bx bx-check  text-white text-2xl"></i>
          </template>
          <template v-else>
            <p class="whitespace-nowrap">Choose</p>
          </template>
        </button>
        <small v-if="bookingStore.errors.selectedCar" class="text-red-500 text-sm mt-2">Please choose your car</small>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useBookingStore } from "@/stores/booking";
import vclass from "~/assets/images/covers/business-trip.webp";
import sclass from "~/assets/images/sclassBackground.webp";
import eclass from "~/assets/images/eclass.webp";

const bookingStore = useBookingStore();
const { selectedCar } = storeToRefs(bookingStore);

// Local car models for selection
const carModels = [
  {
    id: 1,
    brand: "Mercedes-Benz",
    model: "V-Class",
    carryBags: 12,
    numberOfPassengers: 7,
    luggage: 7,
    price: 75,
    transferPrice: 160,
    image: vclass,
  },
  {
    id: 2,
    brand: "Mercedes-Benz",
    model: "S-Class",
    carryBags: 3,
    numberOfPassengers: 3,
    luggage: 2,
    price: 75,
    transferPrice: 160,
    image: sclass,
  },
  {
    id: 3,
    brand: "Comfort",
    model: "E-Class /Alternative",
    carryBags: 3,
    numberOfPassengers: 3,
    luggage: 2,
    price: 50,
    transferPrice: 120,
    image: eclass,
  },
];

function selectCar(car) {
  bookingStore.selectedCar = car;
  console.log("Selected Car:", car);
}
</script>
