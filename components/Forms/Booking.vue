<template>
  <form
    @submit.prevent
    class="max-w-screen-xl mx-auto p-6 bg-white shadow-md rounded-lg w-full overflow-x-hidden relative"
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
      <FormsConfirmation />
    </div>

    <!-- Navigation buttons -->
    <div class="flex w-full items-center justify-center space-x-6 mt-4 px-2 md:px-6">
      <button
        v-if="bookingStore.currentStep > 1"
        @click="bookingStore.previousStep"
        type="button"
        class="py-3 px-10 text-gray-700 font-medium text-lg rounded-sm hover:bg-gold hover:text-black transition-colors duration-500 whitespace-nowrap"
      >
        <i class="bx bx-left-arrow-alt"></i>
        Back
      </button>
      <button
        v-if="bookingStore.currentStep < 4"
        @click="bookingStore.nextStep"
        type="button"
        class="py-3 px-10 bg-black text-white font-medium text-lg rounded-sm hover:bg-gold hover:text-black transition-colors duration-500"
      >
        Next
        <i class="bx bx-right-arrow-alt"></i>
      </button>
      <!-- Confirm & Pay now calls submitBooking for booking submission -->
      <button
        v-if="bookingStore.currentStep == 4"
        @click="submitBooking"
        type="button"
        class="py-3 px-10 bg-black text-white font-medium text-lg rounded-sm hover:bg-gold hover:text-black transition-colors duration-500 whitespace-nowrap"
      >
        Confirm & Pay
        <i class="bx bx-right-arrow-alt"></i>
      </button>
    </div>

    <!-- Overlays -->
    <!-- Loading Indicator -->
    <div class="absolute inset-0" v-if="loading">
      <CommonLoading />
    </div>
    <!-- Error Message -->
    <div class="absolute inset-0 w-full h-full flex items-center justify-center bg-white/90" v-if="error">
      <CommonError :message="apiErrorMessage" />
    </div>
    <!-- Success Message for Quote Submission -->
    <div class="absolute inset-0 w-full h-full flex items-center justify-center bg-white/90" v-if="quoteSuccess">
      <BookingQuoteSuccess :message="successMessage" />
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useBookingStore } from '@/stores/booking';

const bookingStore = useBookingStore();

// Reactive state variables
const loading = ref(false);
const error = ref(false);
const apiErrorMessage = ref("An unexpected error occurred. Please try again.");
const quoteSuccess = ref(false);
const successMessage = ref("Your quote has been submitted successfully!");

// This function handles booking submission and shows success for 5 seconds before redirecting.
const submitBooking = async () => {
  loading.value = true;
  error.value = false;
  quoteSuccess.value = false;

  try {
    // Construct the payload from the booking store state
    const bookingData = {
      bookingType: bookingStore.bookingType,
      serviceType: bookingStore.serviceType,
      dropoffLocation: bookingStore.dropoffLocation,
      form: bookingStore.form,
    };

    // POST the booking data to the API endpoint
    const response = await fetch('http://127.0.0.1:8000/api/booking-notification/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    });

    // Check if the response was unsuccessful
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error submitting booking:", errorData);
      error.value = true;
      return; // Stop execution if there's an error
    }

    // Parse the successful response JSON data
    const data = await response.json();
    console.log("Booking submitted successfully:", data.message);

    // Show the success message overlay
    quoteSuccess.value = true;

    // Wait 5 seconds before redirecting to home page
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  } catch (err) {
    console.error("Error in submitBooking:", err);
    error.value = true;
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  } finally {
    loading.value = false;
  }
};

// This function remains for Stripe integration.
// It is triggered via the form's @submit.prevent event.
const handleSubmit = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/create-checkout-session/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      console.error("No URL returned from checkout session:", data);
    }
  } catch (err) {
    console.error("Error creating checkout session:", err);
  }
};
</script>
