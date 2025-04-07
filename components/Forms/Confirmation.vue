<template>
    <div class="max-w-screen-xl mx-auto p-6 bg-white w-full">
      <div class="grid grid-cols-1 gap-6">
        <!-- Full Name -->
        <div class="flex items-center justify-between border-b border-b-gray-200">
          <h4 class="block text-lg font-medium text-gray-700">Full Name</h4>
          <p class="font-garamond text-lg text-gray-900">
            {{ form.name }} {{ form.surname }}
          </p>
        </div>
  
        <!-- Contact Number -->
        <div class="flex items-center justify-between border-b border-b-gray-200">
          <h4 class="block text-lg font-medium text-gray-700">Contact Number</h4>
          <p class="font-garamond text-lg text-gray-900">{{ form.phone }}</p>
        </div>
  
        <!-- Email -->
        <div class="flex items-center justify-between border-b border-b-gray-200">
          <h4 class="block text-lg font-medium text-gray-700">Email</h4>
          <p class="font-garamond text-lg text-gray-900">{{ form.email }}</p>
        </div>
  
        <!-- Additional Information -->
        <div v-if="bookingStore.form.specialRequests" class="flex flex-col items-center justify-between border-b border-b-gray-200 pb-2">
          <h4 class="block text-lg font-medium text-gray-700">Additional Information</h4>
          <p class="font-garamond text-lg text-gray-900">
            "{{ form.specialRequests }}"
          </p>
        </div>
  
        <!-- Passengers -->
        <div class="flex flex-col items-center border-b border-b-gray-200 space-y-2">
          <div class="w-full flex justify-center items-center">
            <h4 class="block text-lg font-medium text-gray-700">Passengers</h4>
          </div>
          <div class="w-full flex justify-between items-center">
            <h4 class="block text-md font-medium text-gray-700">Adults</h4>
            <p class="font-garamond text-lg text-gray-900">
              {{ form.passengers.adults }}
            </p>
          </div>
          <div class="w-full flex justify-between items-center">
            <h4 class="block text-md font-medium text-gray-700">Children</h4>
            <p class="font-garamond text-lg text-gray-900">
              {{ form.passengers.children }}
            </p>
          </div>
          <div class="w-full flex justify-between items-center">
            <h4 class="block text-md font-medium text-gray-700">Infants</h4>
            <p class="font-garamond text-lg text-gray-900">
              {{ form.passengers.infants }}
            </p>
          </div>
          <div class="w-full flex justify-between items-center">
            <h4 class="block text-md font-medium text-gray-700">Total</h4>
            <p class="font-garamond text-lg text-gray-900">
              {{ totalPassengers }}
            </p>
          </div>
        </div>
  
        <!-- Service Details -->
        <div class="flex flex-col items-center border-b border-b-gray-200 space-y-2">
          <div class="w-full flex justify-center items-center">
            <h4 class="block text-lg font-medium text-gray-700">Service</h4>
          </div>
          <div class="w-full flex grid grid-cols-2">
            <h4 class="block text-md font-medium text-gray-700">Type</h4>
            <p class="font-garamond text-lg text-gray-900 text-right capitalize">
              {{ bookingTypeDisplay }}
            </p>
          </div>
          <div class="w-full flex grid grid-cols-2" v-if="selectedCar">
            <h4 class="block text-md font-medium text-gray-700">Car</h4>
            <p class="font-garamond text-lg text-gray-900 text-right">
              {{ selectedCar.brand }} {{ selectedCar.model }}
            </p>
          </div>
          <div class="w-full flex grid grid-cols-2">
            <h4 class="block text-md font-medium text-gray-700">Pickup at</h4>
            <p class="font-garamond text-lg text-gray-900 text-right">
              {{ form.pickup }}
            </p>
          </div>
          <div v-if="bookingStore.form.dropoff" class="w-full flex grid grid-cols-2">
            <h4 class="block text-md font-medium text-gray-700">Dropoff at</h4>
            <p class="font-garamond text-lg text-gray-900 text-right">
              {{ form.dropoff }}
            </p>
          </div>
          <div v-if="bookingStore.form.hours" class="w-full flex grid grid-cols-2">
            <h4 class="block text-md font-medium text-gray-700">Hire Duration</h4>
            <p class="font-garamond text-lg text-gray-900 text-right">
              {{ form.hours }} hours
            </p>
          </div>
          <div v-if="bookingStore.form.flightNumber" class="w-full flex grid grid-cols-2">
            <h4 class="block text-md font-medium text-gray-700">Flight Number</h4>
            <p class="font-garamond text-lg text-gray-900 text-right">
              {{ form.flightNumber }}
            </p>
          </div>
          <div class="w-full flex grid grid-cols-2">
            <h4 class="block text-md font-medium text-gray-700">Date & Time</h4>
            <p class="font-garamond text-lg text-gray-900 text-right">
              {{ formattedPickupDateTime }}
            </p>
          </div>
        </div>
  
        <!-- Price -->
        <div class="flex flex-col items-center border-b border-b-gray-200">
          <div class="w-full flex justify-center items-center">
            <h4 class="block text-lg font-medium text-gray-700">Price</h4>
          </div>
          <div class="w-full flex grid grid-cols-2">
            <h4 class="block text-md font-medium text-gray-700">Booking Fee</h4>
            <p class="font-garamond text-lg text-gray-900 text-right">£ {{ bookingFee }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { storeToRefs } from "pinia";
  import { useBookingStore } from "@/stores/booking";
  
  const bookingStore = useBookingStore();
  const { form, selectedCar, bookingType } = storeToRefs(bookingStore);
  
  // Compute total number of passengers
  const totalPassengers = computed(() => {
    return (
      Number(form.value.passengers.adults) +
      Number(form.value.passengers.children) +
      Number(form.value.passengers.infants)
    );
  });
  
  // Compute a display string for the booking type (e.g., "Airport Transfer | Arrival")
  const bookingTypeDisplay = computed(() => {
    if (bookingType.value === "airportTransfer") {
      return `Airport Transfer | ${form.value.tripType}`;
    }
    else if(bookingType.value === "pointToPoint") {
      return `Point To Point `;
    }
    else if(bookingType.value === "hourlyService") {
      return `Hourly Hire `;
    }
    return bookingType.value;
  });
  
  // Format the pickup date/time nicely (DD/MM/YYYY HH:mm)
  const formattedPickupDateTime = computed(() => {
    if (!form.value.pickupDateTime) return "";
    const dt = new Date(form.value.pickupDateTime);
    const day = dt.getDate().toString().padStart(2, '0');
    const month = (dt.getMonth() + 1).toString().padStart(2, '0');
    const year = dt.getFullYear();
    const hours = dt.getHours().toString().padStart(2, '0');
    const minutes = dt.getMinutes().toString().padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  });
  
  // For demonstration, a fixed booking fee (this could be dynamic)
  const bookingFee = computed(() => {
    return 150;
  });
  </script>