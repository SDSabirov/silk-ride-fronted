<template>
  <form
    @submit.prevent="handleSubmit"
    class="max-w-screen-xl mx-auto p-6 bg-white shadow-md rounded-lg w-full"
  >
    <h2 class="text-2xl md:text-6xl font-semibold text-black mb-4 text-center">
      Book Your Ride
    </h2>
    <div class="flex items-center w-full mb-4 justify-center">
      <div class="h-3 w-3 bg-gold rotate-45"></div>
      <div class="h-1 bg-gold w-1/2"></div>
      <div class="h-3 w-3 bg-gold rotate-45"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Full Name -->
      <div class="mb-4 h-14">
        <label for="fullName" class="block text-lg font-medium text-gray-700"
          >Full Name</label
        >
        <input
          type="text"
          id="fullName"
          v-model="form.fullName"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
          placeholder="Enter your full name"
        />
      </div>

      <!-- Email -->
      <div class="mb-4 h-14">
        <label for="email" class="block text-lg font-medium text-gray-700"
          >Email</label
        >
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
          placeholder="Enter your email"
        />
      </div>

      <!-- Phone -->
      <div class="mb-4 h-14">
        <label for="phone" class="block text-lg font-medium text-gray-700"
          >Phone Number</label
        >
        <input
          type="tel"
          id="phone"
          v-model="form.phone"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
          placeholder="Enter your phone number"
        />
      </div>
      <!-- Pickup Date and Time -->
      <div class="mb-4 h-14">
        <label
          for="pickupDateTime"
          class="block text-lg font-medium text-gray-700"
          >Pickup Date & Time</label
        >
        <input
          type="datetime-local"
          id="pickupDateTime"
          v-model="form.pickupDateTime"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
        />
      </div>
      <!-- Pickup Location -->
      <div class="mb-4 h-14">
        <label for="pickup" class="block text-lg font-medium text-gray-700"
          >Pickup Location</label
        >
        <input
          type="text"
          id="pickup"
          v-model="form.pickup"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
          placeholder="Enter pickup address"
        />
      </div>

      <!-- Drop-Off Location -->
      <div class="mb-4 h-14">
        <label for="dropoff" class="block text-lg font-medium text-gray-700"
          >Drop-Off Location</label
        >
        <input
          type="text"
          id="dropoff"
          v-model="form.dropoff"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
          placeholder="Enter drop-off address"
        />
      </div>

      <!-- Service Type -->
      <div class="mb-4 h-14">
        <label for="serviceType" class="block text-lg font-medium text-gray-700"
          >Service Type</label
        >
        <select
          id="serviceType"
          v-model="form.serviceType"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
        >
          <option value="" disabled>Select a service type</option>
          <option value="airportTransfer">Airport Transfer</option>
          <option value="pointToPoint">Point-to-Point</option>
          <option value="hourlyService">Hourly Service</option>
          <option value="specialEvent">Special Event</option>
        </select>
      </div>
      <!-- Special Requests -->
      <div class="mb-4 h-18 md:col-span-2">
        <label
          for="specialRequests"
          class="block text-lg font-medium text-gray-700"
          >Special Requests</label
        >
        <textarea
          id="specialRequests"
          v-model="form.specialRequests"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
          placeholder="Any additional requirements or requests"
        ></textarea>
      </div>
      <!-- Terms and Conditions -->
      <div class="mb-6 flex items-start">
        <input
          type="checkbox"
          id="terms"
          v-model="form.agreeToTerms"
          required
          class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label for="terms" class="ml-2 text-lg text-gray-700">
          I agree to the terms and conditions.
        </label>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="flex w-full items-center justify-center">
      <button
        type="submit"
        class="py-3 px-6 bg-blue-900 text-white font-medium text-lg rounded-sm hover:bg-blue-700"
      >
        Submit Booking
      </button>

    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        fullName: "",
        email: "",
        phone: "",
        pickup: "",
        dropoff: "",
        pickupDateTime: "",
        serviceType: "",
        specialRequests: "",
        agreeToTerms: false,
      },
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic
      console.log("Form Submitted:", this.form);

      // Example: Show an alert or call an API endpoint
      alert("Booking submitted successfully!");
      this.resetForm();
    },
    resetForm() {
      this.form = {
        fullName: "",
        email: "",
        phone: "",
        pickup: "",
        dropoff: "",
        pickupDateTime: "",
        serviceType: "",
        specialRequests: "",
        agreeToTerms: false,
      };
    },
  },
};
</script>
