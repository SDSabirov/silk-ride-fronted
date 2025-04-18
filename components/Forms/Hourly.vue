<template>
  <form @submit.prevent class="max-w-screen-xl mx-auto p-6 bg-white w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Pickup Location -->
      <div class="relative mb-4 h-14">
        <label for="pickup" class="block text-lg font-medium text-gray-700">
          {{ t("bookingForm.labels.pickupLocation") }}
        </label>
        <input
          type="text"
          id="pickup"
          v-model="form.pickup"
          @input="fetchSuggestions"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-14"
          :placeholder="t('bookingForm.placeholders.location')"
          autocomplete="off"
          :class="[
            'mt-1 block w-full p-2 rounded-sm h-14 transition-colors duration-500',
            bookingStore.errors.pickup
              ? 'border border-red-500'
              : 'border border-gray-300',
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

      <!-- Hours -->
      <div class="mb-4 h-14">
        <label for="hours" class="block text-lg font-medium text-gray-700">
          {{ t("bookingForm.labels.hours") }}
        </label>
        <select
          id="hours"
          v-model="form.hours"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
          :class="[
            'mt-1 block w-full p-2 rounded-sm h-14 transition-colors duration-500',
            bookingStore.errors.hours
              ? 'border border-red-500'
              : 'border border-gray-300',
          ]"
        >
          <option value="" disabled>
            {{ t("bookingForm.placeholders.hours") }}
          </option>
          <option v-for="hour in hoursOptions" :key="hour" :value="hour">
            {{ hour }} {{ hour === 4 ? t("bookingForm.units.hour") : t("bookingForm.units.hours") }}
          </option>
        </select>
      </div>

      <!-- Pickup Date and Time -->
      <div class="mb-4 h-14">
        <label
          for="pickupDateTime"
          class="block text-lg font-medium text-gray-700"
        >
          {{ t("bookingForm.labels.dateTime") }}
        </label>
        <input
          type="datetime-local"
          id="pickupDateTime"
          v-model="form.pickupDateTime"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
          :class="[
            'mt-1 block w-full p-2 rounded-sm h-14 transition-colors duration-500',
            bookingStore.errors.pickupDateTime
              ? 'border border-red-500'
              : 'border border-gray-300',
          ]"
        />
      </div>
    </div>
  </form>
</template>

<script setup>
import debounce from "lodash.debounce";
import { storeToRefs } from "pinia";
import { useBookingStore } from "@/stores/booking";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const bookingStore = useBookingStore();
const { form, suggestionsPickup } = storeToRefs(bookingStore);

// Local constant for hours options
const hoursOptions = [4, 5, 6, 7, 8, 9, 10, 12];

function resetForm() {
  bookingStore.form = {
    pickup: "",
    dropoff: "",
    pickupDateTime: "",
    hours: "",
  };
  bookingStore.suggestionsPickup = [];
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
      bookingStore.suggestionsPickup = data.suggestions.map((item) => {
        // Combine address and postcode. Adjust property names if necessary.
        return `${item.address} `;
      });
    } else {
      bookingStore.suggestionsPickup = [];
    }
  } catch (err) {
    console.error("Error fetching addresses:", err);
    bookingStore.suggestionsPickup = [];
  }
}, 300);

function selectSuggestion(suggestion) {
  bookingStore.form.pickup = suggestion;
  bookingStore.suggestionsPickup = [];
}
</script>
