<template>
  <form
    @submit.prevent="handleSubmit"
    class="max-w-screen-xl mx-auto p-6 bg-white w-full"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      <!-- Hours  -->
      <div class="mb-4 h-14">
        <label for="hours" class="block text-lg font-medium text-gray-700">
          Select Hours
        </label>
        <select
          id="hours"
          v-model="form.hours"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
        >
          <option value="" disabled>Select number of hours</option>
          <option v-for="hour in hoursOptions" :key="hour" :value="hour">
            {{ hour }} {{ hour === 1 ? "Hour" : "Hours" }}
          </option>
        </select>
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

      <!-- Special Requests
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
        </div> -->
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        pickup: "",
        pickupDateTime: "",
        serviceType: "",
        hours: "",
      },
      hoursOptions: [3, 4, 5, 6, 7, 8, 9, 10, 12],
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
