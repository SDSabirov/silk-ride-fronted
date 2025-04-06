<template>
  <div class="flex flex-wrap gap-6 justify-center w-full">
    <!-- Car Cards -->
    <div
      v-for="car in carModels"
      :key="car.id"
      @click="selectCar(car)"
      :class="[
        'flex flex-col items-center border border-gray-300 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:border-gray-400 transition',
        selectedCar && selectedCar.id === car.id ? 'bg-green-100' : 'bg-white'
      ]"
    >
      <!-- Car Image -->
      <img
        :src="car.image"
        :alt="car.model"
        class="w-full h-40 object-cover mb-4"
      />
      <!-- Brand and Model -->
      <h3 class="text-xl font-semibold text-gray-800">
        {{ car.brand }} {{ car.model }}
      </h3>
      <div
        class="flex w-full space-x-3 text-lg h-12 items-center justify-center p-4"
      >
        <div class="grid grid-cols-2 gap-3 text-sm mt-4">
          <div>
            <i class="bx bxs-shopping-bag mr-2"></i>
            up to {{ car.carryBags }} carry bags
          </div>
          <div>
            <i class="bx bxs-backpack mr-2"></i>
            up to {{ car.luggage }} luggages
          </div>
          <div>
            <i class="bx bxs-group mr-2"></i>
            {{ car.numberOfPassengers }} passengers
          </div>
          <div>
            <i class="bx bx-wifi mr-2"></i>
            <span>Wi fi included</span>
          </div>
        </div>
      </div>

      <!-- Price -->
      <p class="text-lg text-gray-600 mt-2">£{{ car.price }}</p>
      <!-- Features -->
      <ul class="list-image-[url(/assets/icons/checkmark-circle.png)] list-inside">
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
      <div class="flex w-full items-center justify-center my-4">
        <button class="px-6 py-2 w-1/2 text-xl text-black border border-black hover:bg-gold">
          <template v-if="selectedCar && selectedCar.id === car.id">
            <i class="bx bx-check bx-md text-green-500"></i>
          </template>
          <template v-else>
            <p class="whitespace-nowrap">Choose</p>
          </template>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import vclass from "~/assets/images/covers/business-trip.webp";
import sclass from "~/assets/images/eclass.webp";
import eclass from "~/assets/images/sclassBackground.webp";

export default {
  data() {
    return {
      carModels: [
        {
          id: 1,
          brand: "Mercedes-Benz",
          model: "V-Class",
          carryBags: 4,
          numberOfPassengers: 6,
          luggage: 2,
          price: 560,
          image: vclass,
        },
        {
          id: 2,
          brand: "Mercedes-Benz",
          model: "S-Class",
          carryBags: 4,
          numberOfPassengers: 4,
          luggage: 3,
          price: 500,
          image: sclass,
        },
        {
          id: 3,
          brand: "Comfort",
          model: "E-Class /Alternative",
          carryBags: 4,
          numberOfPassengers: 4,
          luggage: 4,
          price: 700,
          image: eclass,
        },
      ],
      selectedCar: null,
    };
  },
  methods: {
    selectCar(car) {
      this.selectedCar = car;
      console.log("Selected Car:", car);
    },
  },
};
</script>