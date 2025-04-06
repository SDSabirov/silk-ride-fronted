<template>
  <form
    @submit.prevent="handleSubmit"
    class="max-w-screen-xl mx-auto p-6 bg-white w-full"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- airport -->
      <div class="mb-4 h-14">
        <label for="airport" class="block text-lg font-medium text-gray-700">
          Select Airport
        </label>
        <select
          id="airport"
          v-model="form.airport"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full "
        >
          <option value="" disabled>Your arrival/departure airport</option>
          <option
            v-for="airport in airportOptions"
            :key="airport"
            :value="airport"
          >
            {{ airport }}
          </option>
        </select>
      </div>
      <!-- Pickup Location with full address suggestions -->
      <div class="relative mb-4 h-14">
        <label for="pickup" class="block text-lg font-medium text-gray-700">
          Pickup / Dropoff Location
        </label>
        <input
          type="text"
          id="pickup"
          v-model="form.pickup"
          @input="fetchSuggestions"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-14"
          placeholder="Enter pickup address"
          autocomplete="off"
        />

        <ul
          v-if="suggestions.length"
          class="absolute z-10 bg-white w-full border border-gray-300 max-h-48 overflow-auto shadow"
        >
          <li
            v-for="(suggestion, index) in suggestions"
            :key="index"
            @click="selectSuggestion(suggestion)"
            class="cursor-pointer p-2 hover:bg-gray-100"
          >
            {{ suggestion }}
          </li>
        </ul>
      </div>

      <div class="relative mb-4 h-14">
        <label for="Flight" class="block text-lg font-medium text-gray-700">
          Flight Number
        </label>
        <input
          type="text"
          id="flight"
          v-model="form.flightNumber"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-14"
          placeholder="Your Flight Number (i.e HY201) "
        />
      </div>

      <!-- Pickup Date and Time -->
      <div class="mb-4 h-14">
        <label
          for="pickupDateTime"
          class="block text-lg font-medium text-gray-700"
          >Date & Time</label
        >
        <input
          type="datetime-local"
          id="pickupDateTime"
          v-model="form.pickupDateTime"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
        />
      </div>
      <div class="mb-4 md:flex md:space-x-4">
        <label class="block text-lg font-medium text-gray-700">
          I will be 
        </label>
        <div class="mt-1 flex items-center">
          <label class="inline-flex items-center mr-6">
            <input
              type="radio"
              name="tripType"
              value="arrival"
              v-model="form.tripType"
              class="form-radio"
            />
            <span class="ml-2">Arriving</span>
          </label>
          <label class="inline-flex items-center peer-checked:bg-indigo-600">
            <input
              type="radio"
              name="tripType"
              value="departure"
              v-model="form.tripType"
              class="form-radio"
              
            />
            <span class="ml-2">Departing</span>
          </label>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import debounce from "lodash.debounce";

export default {
  data() {
    return {
      form: {
        pickup: "",
        pickupDateTime: "",
        flightNumber: "",
        airport: "",
      },
      airportOptions: [
        "London Heathrow Airport T-1,2,3 & 5",
        "London Heathrow Airport T-4",
        "London Gatwick Airport",
        "London Stansted Airport",
        "London Luton Airport",
      ],
      suggestions: [],
    };
  },
  methods: {
    handleSubmit() {
      console.log("Form Submitted:", this.form);
      alert("Booking submitted successfully!");
      this.resetForm();
    },
    resetForm() {
      this.form = {
        pickup: "",
        pickupDateTime: "",
        flightNumber: "",
        airport: "",
      };
      this.suggestions = [];
    },
    fetchSuggestions: debounce(async function () {
      if (this.form.pickup.length < 3) {
        this.suggestions = [];
        return;
      }

      const apiKey =
        "dtoken_hEDzcyiWMr2mNISubea6iRMiOzi1fRaQY-jnAUY7gG11A0PTPJY9iY1eyhADhPZyqh-3OOe5ZYHWstYmZbDNW7_QgUIwjEitGBTfADrf7wNL7L8_MeEyCcqtn_HwAcnOqALOQhN0qer7Ao60jiU-xY4JsQNqO_4v_JI0f0DvN5r63eVCYiAwQxL7qdneoZL061F5v4qlyJ8";
      try {
        const res = await fetch(
          `https://api.getAddress.io/autocomplete/${encodeURIComponent(
            this.form.pickup
          )}?api-key=${apiKey}`
        );
        const data = await res.json();
        if (data.suggestions) {
          this.suggestions = data.suggestions.map((item) => item.address);
        } else {
          this.suggestions = [];
        }
      } catch (err) {
        console.error("Error fetching addresses:", err);
        this.suggestions = [];
      }
    }, 300),

    selectSuggestion(suggestion) {
      this.form.pickup = suggestion;
      this.suggestions = [];
    },
  },
};
</script>
