<template>
  <form @submit.prevent class="max-w-screen-xl mx-auto p-6 bg-white w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Name -->
      <div class="mb-4 h-14">
        <label for="name" class="block text-lg font-medium text-gray-700">{{ t("bookingForm.step3.labels.name") }}</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          class="mt-1 block w-full p-2 border rounded-sm h-full"
          :placeholder="t('bookingForm.step3.placeholders.name')"
          :class="[
            'transition-colors duration-500',
            bookingStore.errors.name ? 'border-red-500' : 'border-gray-300'
          ]"
        />
      </div>

      <!-- Surname -->
      <div class="mb-4 h-14">
        <label for="surname" class="block text-lg font-medium text-gray-700">{{ t("bookingForm.step3.labels.surname") }}</label>
        <input
          type="text"
          id="surname"
          v-model="form.surname"
          required
          class="mt-1 block w-full p-2 border rounded-sm h-full"
          :placeholder="t('bookingForm.step3.placeholders.surname')"
          :class="[
            'transition-colors duration-500',
            bookingStore.errors.surname ? 'border-red-500' : 'border-gray-300'
          ]"
        />
      </div>

      <!-- Phone -->
      <div class="mb-4 h-14">
        <label for="phone" class="block text-lg font-medium text-gray-700">{{ t("bookingForm.step3.labels.phone") }}</label>
        <input
          type="text"
          id="phone"
          v-model="form.phone"
          required
          class="mt-1 block w-full p-2 border rounded-sm h-full"
          :placeholder="t('bookingForm.step3.placeholders.phone')"
          :class="[
            'transition-colors duration-500',
            bookingStore.errors.phone ? 'border-red-500' : 'border-gray-300'
          ]"
        />
      </div>

      <!-- Email -->
      <div class="mb-4 h-14">
        <label for="email" class="block text-lg font-medium text-gray-700">{{ t("bookingForm.step3.labels.email") }}</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          class="mt-1 block w-full p-2 border rounded-sm h-full"
          :placeholder="t('bookingForm.step3.placeholders.email')"
          :class="[
            'transition-colors duration-500',
            bookingStore.errors.email ? 'border-red-500' : 'border-gray-300'
          ]"
        />
      </div>

      <!-- Number of Passengers -->
      <div class="mb-4 md:col-span-2">
        <label class="block text-lg font-medium text-gray-700">{{ t("bookingForm.step3.labels.passengers") }}</label>
        <div class="w-full p-2">
          <!-- Adults -->
          <div class="flex justify-between items-center border-b border-gray-200">
            <label class="text-md font-medium text-gray-700">{{ t("bookingForm.step3.labels.adults") }}</label>
            <div class="px-2 flex space-x-2 items-center text-md">
              <button @click.prevent="decrementAdults" class="bg-black rounded-full text-white h-8 w-8">-</button>
              <p>{{ form.passengers.adults }}</p>
              <button @click.prevent="incrementAdults" class="bg-black rounded-full text-white h-8 w-8">+</button>
            </div>
          </div>
          <!-- Children -->
          <div class="flex justify-between items-center mt-4 border-b border-gray-200">
            <label class="text-md font-medium text-gray-700">{{ t("bookingForm.step3.labels.children") }}</label>
            <div class="px-2 flex space-x-2 items-center text-md">
              <button @click.prevent="decrementChildren" class="bg-black rounded-full text-white h-8 w-8">-</button>
              <p>{{ form.passengers.children }}</p>
              <button @click.prevent="incrementChildren" class="bg-black rounded-full text-white h-8 w-8">+</button>
            </div>
          </div>
          <!-- Infants -->
          <div class="flex justify-between items-center mt-4 border-b border-gray-200">
            <label class="text-md font-medium text-gray-700">{{ t("bookingForm.step3.labels.infants") }}</label>
            <div class="px-2 flex space-x-2 items-center text-md">
              <button @click.prevent="decrementInfants" class="bg-black rounded-full text-white h-8 w-8">-</button>
              <p>{{ form.passengers.infants }}</p>
              <button @click.prevent="incrementInfants" class="bg-black rounded-full text-white h-8 w-8">+</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Information -->
      <div class="mb-4 h-18 md:col-span-2">
        <label for="specialRequests" class="block text-lg font-medium text-gray-700">{{ t("bookingForm.step3.labels.additionalInfo") }}</label>
        <textarea
          id="specialRequests"
          v-model="form.specialRequests"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
          :placeholder="t('bookingForm.step3.placeholders.additionalInfo')"
        ></textarea>
      </div>
    </div>
  </form>
</template>


<script setup>
import { storeToRefs } from "pinia";
import { useBookingStore } from "@/stores/booking";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const bookingStore = useBookingStore();
const { form } = storeToRefs(bookingStore);

function handleSubmit() {
  console.log("Step 3 Submitted:", form.value);
  // Additional submit logic can be added here if needed.
}

function incrementAdults() {
  bookingStore.form.passengers.adults++;
}

function decrementAdults() {
  if (bookingStore.form.passengers.adults > 1) {
    bookingStore.form.passengers.adults--;
  }
}

function incrementChildren() {
  bookingStore.form.passengers.children++;
}

function decrementChildren() {
  if (bookingStore.form.passengers.children > 0) {
    bookingStore.form.passengers.children--;
  }
}

function incrementInfants() {
  bookingStore.form.passengers.infants++;
}

function decrementInfants() {
  if (bookingStore.form.passengers.infants > 0) {
    bookingStore.form.passengers.infants--;
  }
}
</script>