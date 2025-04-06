<template>
  <form
    @submit.prevent="handleSubmit"
    class="max-w-screen-xl mx-auto p-6 bg-white shadow-md rounded-lg w-full"
  >
    <h2
      class="text-2xl md:text-6xl font-semibold text-black mb-4 text-center mb-8"
    >
      Book Your Ride
    </h2>

    <div class="px-8 mb-6">
      <BookingStepsNav :currentStep="bookingStore.currentStep" />
    </div>

    <div v-if="bookingStore.currentStep == 1">
      <div class="flex w-full justify-center items-center">
        <FormsServiceButtons />
      </div>
      <FormsPointToPoint v-if="bookingStore.bookingType == 'pointToPoint'" />
      <FormsHourly v-else-if="bookingStore.bookingType == 'hourlyService'" />
      <FormsAirportTransfer v-else />
    </div>
    <div v-if="bookingStore.currentStep == 2">
      <FormsCarSelect />
    </div>
    <div v-if="bookingStore.currentStep == 3">
      <FormsPassengerDetails />
    </div>
    <div v-if="bookingStore.currentStep == 4">
      <FormsStripe />
    </div>
    <div class="flex w-full items-center justify-center mt-4">
      <button
        @click="bookingStore.nextStep"
        type="button"
        class="py-3 px-10 bg-black text-white font-medium text-lg rounded-sm hover:bg-gold hover:text-black transition-color duration-500"
      >
        Next
        <i class="bx bx-right-arrow-alt"></i>
      </button>
    </div>
  </form>
</template>

<script setup>
import { useBookingStore } from "@/stores/booking";
const bookingStore = useBookingStore();
</script>
