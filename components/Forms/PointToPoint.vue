<template>
  <form
    @submit.prevent="handleSubmit"
    class="max-w-screen-xl mx-auto p-6 bg-white w-full"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="mb-4 relative h-14">
        <label for="pickup" class="block text-lg font-medium text-gray-700"
          >Pickup Location</label
        >
        <input
          type="text"
          id="pickup"
          v-model="form.pickup"
          @input="fetchSuggestions('pickup')"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
          placeholder="Enter pickup address"
        />
        <ul
          v-if="suggestionsPickup.length"
          class="absolute z-10 bg-white w-full border border-gray-300 max-h-48 overflow-auto shadow"
        >
          <li
            v-for="(suggestion, index) in suggestionsPickup"
            :key="'pickup-' + index"
            @click="selectSuggestion('pickup', suggestion)"
            class="cursor-pointer p-2 hover:bg-gray-100"
          >
            {{ suggestion }}
          </li>
        </ul>
      </div>

      <!-- Drop-Off Location -->
      <div class="mb-4 relative h-14">
        <label for="dropoff" class="block text-lg font-medium text-gray-700"
          >Drop-Off Location</label
        >
        <input
          type="text"
          id="dropoff"
          v-model="form.dropoff"
          @input="fetchSuggestions('dropoff')"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
          placeholder="Enter drop-off address"
        />
        <ul
          v-if="suggestionsDropoff.length"
          class="absolute z-10 bg-white w-full border border-gray-300 max-h-48 overflow-auto shadow"
        >
          <li
            v-for="(suggestion, index) in suggestionsDropoff"
            :key="'dropoff-' + index"
            @click="selectSuggestion('dropoff', suggestion)"
            class="cursor-pointer p-2 hover:bg-gray-100"
          >
            {{ suggestion }}
          </li>
        </ul>
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

    <!-- Submit Button -->
  </form>
</template>

<script>
import debounce from "lodash.debounce";

export default {
  data() {
    return {
      form: {
        pickup: "",
        dropoff: "",
        pickupDateTime: "",
      },
      suggestionsPickup: [],
      suggestionsDropoff: [],
    };
  },
  methods: {
    handleSubmit() {
      console.log("Form Submitted:", this.form);
      alert("Booking submitted successfully!");
      this.resetForm();
    },

    fetchSuggestions: debounce(async function (type) {
      const query = type === "pickup" ? this.form.pickup : this.form.dropoff;

      if (query.length < 3) {
        type === "pickup"
          ? (this.suggestionsPickup = [])
          : (this.suggestionsDropoff = []);
        return;
      }

      const apiKey =
        "dtoken_hEDzcyiWMr2mNISubea6iRMiOzi1fRaQY-jnAUY7gG11A0PTPJY9iY1eyhADhPZyqh-3OOe5ZYHWstYmZbDNW7_QgUIwjEitGBTfADrf7wNL7L8_MeEyCcqtn_HwAcnOqALOQhN0qer7Ao60jiU-xY4JsQNqO_4v_JI0f0DvN5r63eVCYiAwQxL7qdneoZL061F5v4qlyJ8";

      try {
        const res = await fetch(
          `https://api.getAddress.io/autocomplete/${encodeURIComponent(
            query
          )}?api-key=${apiKey}`
        );
        const data = await res.json();
        const suggestions = data.suggestions
          ? data.suggestions.map((item) => item.address)
          : [];

        if (type === "pickup") {
          this.suggestionsPickup = suggestions;
        } else {
          this.suggestionsDropoff = suggestions;
        }
      } catch (err) {
        console.error("Error fetching addresses:", err);
        if (type === "pickup") this.suggestionsPickup = [];
        else this.suggestionsDropoff = [];
      }
    }, 300),

    selectSuggestion(type, suggestion) {
      if (type === "pickup") {
        this.form.pickup = suggestion;
        this.suggestionsPickup = [];
      } else {
        this.form.dropoff = suggestion;
        this.suggestionsDropoff = [];
      }
    },

    resetForm() {
      this.form = {
        pickup: "",
        dropoff: "",
        pickupDateTime: "",
      };
      this.suggestionsPickup = [];
      this.suggestionsDropoff = [];
    },
  },
};
</script>
