<template>
  <form
    @submit.prevent="handleSubmit"
    class="max-w-screen-xl mx-auto p-6 bg-white w-full"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Airport -->
      <div class="mb-4 h-14">
        <label for="airport" class="block text-lg font-medium text-gray-700">
          Select Airport
        </label>
        <select
          id="airport"
          v-model="form.airport"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
          :class="[
          'mt-1 block w-full p-2 rounded-sm h-14 transition-colors duration-500',
          bookingStore.errors.airport ? 'border border-red-500' : 'border border-gray-300'
        ]"
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

      <!-- Dynamic Location Input -->
      <div class="relative mb-4 h-14">
        <label :for="locationFieldId" class="block text-lg font-medium text-gray-700">
          {{ locationLabel }}
        </label>
        <input
          type="text"
          :id="locationFieldId"
          v-model="locationModel"
          @input="fetchSuggestions"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-14"
          placeholder="Enter address"
          autocomplete="off"
          :class="[
          'mt-1 block w-full p-2 rounded-sm h-14 transition-colors duration-500',
          bookingStore.errors.pickup || bookingStore.errors.dropoff ? 'border border-red-500' : 'border border-gray-300'
        ]"
        />
        <ul
          v-if="suggestionsPickup.length"
          class="absolute z-10 bg-white w-full border border-gray-300 max-h-48 overflow-auto shadow"
        >
          <li
            v-for="(suggestion, index) in suggestionsPickup"
            :key="index"
            @click="selectSuggestion(suggestion)"
            class="cursor-pointer p-2 hover:bg-gray-100"
          >
            {{ suggestion }}
          </li>
        </ul>
      </div>

      <!-- Flight Number -->
      <div class="relative mb-4 h-14">
        <label for="flight" class="block text-lg font-medium text-gray-700">
          Flight Number
        </label>
        <input
          type="text"
          id="flight"
          v-model="form.flightNumber"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-14"
          placeholder="Your Flight Number (i.e HY201)"
        />
      </div>

      <!-- Date & Time -->
      <div class="mb-4 h-14">
        <label for="pickupDateTime" class="block text-lg font-medium text-gray-700">
          Date & Time
        </label>
        <input
          type="datetime-local"
          id="pickupDateTime"
          v-model="form.pickupDateTime"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
          :class="[
          'mt-1 block w-full p-2 rounded-sm h-14 transition-colors duration-500',
          bookingStore.errors.pickupDateTime ? 'border border-red-500' : 'border border-gray-300'
        ]"
        />
      </div>

      <!-- Transfer Type -->
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
          <label class="inline-flex items-center">
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

<script setup>
import debounce from "lodash.debounce";
import { storeToRefs } from "pinia";
import { computed, watch } from "vue";
import { useBookingStore } from "@/stores/booking";

const bookingStore = useBookingStore();
const { form, suggestionsPickup } = storeToRefs(bookingStore);

// Ensure default trip type is "arrival"
if (!form.value.tripType) {
  form.value.tripType = "arrival";
}

// Local constant for airport options
const airportOptions = [
  "London Heathrow Airport T-1,2,3 & 5",
  "London Heathrow Airport T-4",
  "London Gatwick Airport",
  "London Stansted Airport",
  "London Luton Airport",
];

// Set a constant for the location input field ID
const locationFieldId = "location";

// Computed property for the dynamic location binding.
// For "arrival": user input updates form.dropoff, while form.pickup is set to the selected airport.
// For "departure": user input updates form.pickup, while form.dropoff is set to the selected airport.
const locationModel = computed({
  get() {
    return form.value.tripType === "arrival"
      ? form.value.dropoff
      : form.value.pickup;
  },
  set(val) {
    if (form.value.tripType === "arrival") {
      form.value.dropoff = val;
    } else {
      form.value.pickup = val;
    }
  },
});

// Computed property for the label.
// For "arrival": show "Drop off Location".
// For "departure": show "Pick up Location".
const locationLabel = computed(() =>
  form.value.tripType === "arrival" ? "Drop off Location" : "Pick up Location"
);


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

// When tripType changes, update the corresponding field with the airport value.
// For arrival: set form.pickup = airport (selected airport)
// For departure: set form.dropoff = airport (selected airport)
watch(
  () => form.value.tripType,
  (newTripType) => {
    if (newTripType === "arrival") {
      form.value.pickup = form.value.airport;
    } else if (newTripType === "departure") {
      form.value.dropoff = form.value.airport;
    }
  }
);

// Also watch for changes in the selected airport.
watch(
  () => form.value.airport,
  (newAirport) => {
    if (form.value.tripType === "arrival") {
      form.value.pickup = newAirport;
    } else if (form.value.tripType === "departure") {
      form.value.dropoff = newAirport;
    }
  }
);
</script>