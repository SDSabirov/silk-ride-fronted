<template>
  <form
    @submit.prevent
    class="max-w-4xl mx-auto p-8 bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl w-full overflow-x-hidden relative border border-gray-100"
  >
    <!-- Form Header -->
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-heading font-bold text-black mb-4">
        {{ $t("bookingForm.heading") }}
      </h2>
      <div class="w-24 h-1 bg-gold mx-auto mb-4"></div>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Complete the form below to get an instant quote for your luxury chauffeur service
      </p>
    </div>

    <!-- Navigation for booking steps -->
    <div class="mb-12">
      <BookingStepsNav :currentStep="bookingStore.currentStep" />
    </div>

    <!-- Form Content -->
    <div class="min-h-[400px] relative">
      <!-- Step 1: Booking details -->
      <div class="animate-fadeRight" v-if="bookingStore.currentStep == 1">
        <div class="bg-gray-50/50 rounded-xl p-6 mb-8">
          <h3 class="text-xl font-semibold text-gray-900 mb-6 text-center">
            Choose Your Service Type
          </h3>
          <div class="flex w-full justify-center items-center">
            <FormsServiceButtons />
          </div>
        </div>
        
        <div class="bg-white rounded-xl border border-gray-100 p-6">
          <FormsPointToPoint v-if="bookingStore.bookingType == 'pointToPoint'" />
          <FormsHourly v-else-if="bookingStore.bookingType == 'hourlyService'" />
          <FormsAirportTransfer v-else />
        </div>
      </div>

      <!-- Step 2: Car Selection -->
      <div class="animate-fadeRight" v-if="bookingStore.currentStep == 2">
        <div class="bg-white rounded-xl border border-gray-100 p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-6 text-center">
            Select Your Luxury Vehicle
          </h3>
          <FormsCarSelect />
        </div>
      </div>

      <!-- Step 3: Passenger Details -->
      <div class="animate-fadeRight" v-if="bookingStore.currentStep == 3">
        <div class="bg-white rounded-xl border border-gray-100 p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-6 text-center">
            Your Contact Information
          </h3>
          <FormsPassengerDetails />
        </div>
      </div>

      <!-- Step 4: Confirmation -->
      <div class="animate-fadeRight" v-if="bookingStore.currentStep == 4">
        <div class="bg-white rounded-xl border border-gray-100 p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-6 text-center">
            Review & Confirm Your Booking
          </h3>
          <FormsConfirmation />
        </div>
      </div>
    </div>

    <!-- Navigation buttons -->
    <div class="flex w-full items-center justify-between mt-12 px-4">
      <button
        v-if="bookingStore.currentStep > 1"
        @click="bookingStore.previousStep"
        type="button"
        class="flex items-center space-x-2 py-4 px-8 text-gray-700 font-medium text-lg rounded-xl border-2 border-gray-300 hover:border-gold hover:bg-gold hover:text-black transition-all duration-300 whitespace-nowrap"
      >
        <i class="bx bx-left-arrow-alt text-xl"></i>
        <span>{{ $t("bookingForm.buttons.back") }}</span>
      </button>
      <div v-else></div> <!-- Spacer when no back button -->
      
      <button
        v-if="bookingStore.currentStep < 4"
        @click="bookingStore.nextStep"
        type="button"
        class="flex items-center space-x-2 py-4 px-8 bg-black text-white font-medium text-lg rounded-xl hover:bg-gold hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        <span>{{ $t("bookingForm.buttons.next") }}</span>
        <i class="bx bx-right-arrow-alt text-xl"></i>
      </button>
      
      <!-- Confirm & Get Quote button -->
      <button
        v-if="bookingStore.currentStep == 4"
        @click="submitBooking"
        type="button"
        class="flex items-center space-x-2 py-4 px-8 bg-gradient-to-r from-gold to-yellow-400 text-black font-bold text-lg rounded-xl hover:from-yellow-400 hover:to-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap"
      >
        <span>{{ $t("bookingForm.buttons.getQuote") }}</span>
        <i class="bx bx-check-circle text-xl"></i>
      </button>
    </div>

    <!-- Overlays -->
    <!-- Loading Indicator -->
    <div class="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center z-50" v-if="loading">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto mb-4"></div>
        <p class="text-gray-600 font-medium">Processing your request...</p>
      </div>
    </div>
    
    <!-- Error Message -->
    <div class="absolute inset-0 w-full h-full flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-2xl z-50" v-if="error">
      <div class="text-center p-8">
        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-red-800 mb-2">Booking Error</h3>
        <p class="text-red-600 mb-4">{{ apiErrorMessage }}</p>
        <button 
          @click="error = false" 
          class="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
    
    <!-- Success Message for Quote Submission -->
    <div class="absolute inset-0 w-full h-full flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-2xl z-50" v-if="quoteSuccess">
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
    const response = await fetch('https://api.silkride.co.uk/api/booking-notification/', {
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
    const response = await fetch('https://api.silkride.co.uk/api/create-checkout-session/', {
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
