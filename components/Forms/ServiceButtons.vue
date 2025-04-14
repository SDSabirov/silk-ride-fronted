<template>
  <div class="flex flex-col items-center w-full px-4">
    <label
      for="serviceType"
      class="block text-lg font-medium text-gray-700 mb-2"
    >
      Choose your service
    </label>
    <div class="flex flex-col md:flex-row gap-6 w-full">
      <button
        v-for="type in serviceTypes"
        :key="type.value"
        @click="bookingStore.setBookingType(type.value)"
        class="w-full whitespace-nowrap"
        :class="[
          'px-6 py-4 rounded border text-lg font-medium hover:bg-opacity-80',
          bookingStore.bookingType === type.value
            ? 'bg-gold text-black'
            : 'bg-gray-200 text-gray-700',
        ]"
      >
        {{ type.label }}
        <span v-if="bookingStore.bookingType === type.value" class="ml-2"><i class='bx bx-check'></i></span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useBookingStore } from "@/stores/booking";

// Access the booking store
const bookingStore = useBookingStore();

const serviceTypes = [
  { value: "airportTransfer", label: "Airport Transfer" },
  { value: "pointToPoint", label: "Point-to-Point" },
  { value: "hourlyService", label: "Hourly Service" },
];
</script>

<style scoped></style>
