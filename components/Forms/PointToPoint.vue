<template>
  <form
    @submit.prevent
    class="max-w-screen-xl mx-auto p-6 bg-white w-full"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Pickup Location -->
      <div class="mb-4 relative h-14">
        <label for="pickup" class="block text-lg font-medium text-gray-700">
          Pickup Location
        </label>
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
        <label for="dropoff" class="block text-lg font-medium text-gray-700">
          Drop-Off Location
        </label>
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
        <label for="pickupDateTime" class="block text-lg font-medium text-gray-700">
          Pickup Date & Time
        </label>
        <input
          type="datetime-local"
          id="pickupDateTime"
          v-model="form.pickupDateTime"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
        />
      </div>
    </div>
  </form>
</template>

<script setup>
import debounce from "lodash.debounce";
import { storeToRefs } from "pinia";
import { useBookingStore } from "@/stores/booking";

const bookingStore = useBookingStore();

// Use storeToRefs to create reactive references from the booking store
const { form, suggestionsPickup, suggestionsDropoff } = storeToRefs(bookingStore);

// Initialize state in the booking store if it isn't already set
if (!form.value) {
  bookingStore.form = {
    pickup: "",
    dropoff: "",
    pickupDateTime: "",
  };
}
if (!suggestionsPickup.value) {
  bookingStore.suggestionsPickup = [];
}
if (!suggestionsDropoff.value) {
  bookingStore.suggestionsDropoff = [];
}


const fetchSuggestions = debounce(async () => {
  if (form.value.pickup.length < 3) {
    bookingStore.suggestionsPickup = [];
    return;
  }

  const apiKey =
    "dtoken_hEDzcyiWMr2mNISubea6iRMiOzi1fRaQY-jnAUY7gG11A0PTPJY9iY1eyhADhPZyqh-3OOe5ZYHWstYmZbDNW7_QgUIwjEitGBTfADrf7wNL7L8_MeEyCcqtn_HwAcnOqALOQhN0qer7Ao60jiU-xY4JsQNqO_4v_JI0f0DvN5r63eVCYiAwQxL7qdneoZL061F5v4qlyJ8";
  
  try {
    const res = await fetch(
      `https://api.getAddress.io/autocomplete/${encodeURIComponent(
        form.value.pickup
      )}?api-key=${apiKey}`
    );
    
    const data = await res.json();
    
    if (data.suggestions) {
      bookingStore.suggestionsPickup = data.suggestions.map(item => {
        // Combine address and postcode. Adjust property names if necessary.
        return `${item.address} (${item.postcode})`;
      });
    } else {
      bookingStore.suggestionsPickup = [];
    }
  } catch (err) {
    console.error("Error fetching addresses:", err);
    bookingStore.suggestionsPickup = [];
  }
}, 300);


</script>
