<template>
  <form
    @submit.prevent="handleSubmit"
    class="max-w-screen-xl mx-auto p-6 bg-white shadow-md rounded-lg w-full overflow-x-hidden"
  >
    <h2 class="text-2xl md:text-6xl font-semibold text-black mb-4 text-center mb-8">
      Book Your Ride
    </h2>

    <!-- Navigation for booking steps -->
    <div class="px-8 mb-6">
      <BookingStepsNav :currentStep="bookingStore.currentStep" />
    </div>

    <!-- Step 1: Booking details -->
    <div class="animate-fadeRight" v-if="bookingStore.currentStep == 1">
      <div class="flex w-full justify-center items-center">
        <FormsServiceButtons />
      </div>
      <FormsPointToPoint v-if="bookingStore.bookingType == 'pointToPoint'" />
      <FormsHourly v-else-if="bookingStore.bookingType == 'hourlyService'" />
      <FormsAirportTransfer v-else />
    </div>

    <!-- Step 2: Car Selection -->
    <div class="animate-fadeRight" v-if="bookingStore.currentStep == 2">
      <FormsCarSelect />
    </div>

    <!-- Step 3: Passenger Details -->
    <div class="animate-fadeRight" v-if="bookingStore.currentStep == 3">
      <FormsPassengerDetails />
    </div>

    <!-- Step 4: Confirmation -->
    <div class="animate-fadeRight" v-if="bookingStore.currentStep == 4">
      <FormsConfirmation/>
    </div>

    <!-- Navigation buttons -->
    <div class="flex w-full items-center justify-center space-x-6 mt-4 px-2 md:px-6">
      <button
        v-if="bookingStore.currentStep > 1"
        @click="bookingStore.previousStep"
        type="button"
        class="py-3 px-10 text-gray-700 font-medium text-lg rounded-sm hover:bg-gold hover:text-black transition-color duration-500 whitespace-nowrap"
      > 
        <i class="bx bx-left-arrow-alt"></i>
        Back
      </button>
      <button
        v-if="bookingStore.currentStep < 4"
        @click="bookingStore.nextStep"
        type="button"
        class="py-3 px-10 bg-black text-white font-medium text-lg rounded-sm hover:bg-gold hover:text-black transition-color duration-500"
      >
        Next
        <i class="bx bx-right-arrow-alt"></i>
      </button>
      <button
        v-if="bookingStore.currentStep == 4"
        @click="handleCheckout"
        type="button"
        class="py-3 px-10 bg-black text-white font-medium text-lg rounded-sm hover:bg-gold hover:text-black transition-color duration-500 whitespace-nowrap"
      >
        Confirm & Pay
        <i class="bx bx-right-arrow-alt"></i>
      </button>
    </div>
  </form>
</template>

<script setup>
import { useBookingStore } from "@/stores/booking";


// Access the booking state from your Pinia store (or similar state management)
const bookingStore = useBookingStore();

// This function is triggered when the user confirms and wants to pay
const handleCheckout = async () => {
  const data = bookingStore.form
  console.log(data)
  try {
    // Call your Django backend endpoint to create a Stripe Checkout Session
    const response = await fetch('https://api.silkride.co.uk/api/create-checkout-session/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.url) {
      // Redirect to the Stripe-hosted checkout page
      window.location.href = data.url;
    } else {
      console.error('No URL returned', data);
    }
  } catch (error) {
    console.error('Error creating checkout session:', error);
  }
};
</script>