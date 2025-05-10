<template>
  <div>
    <!-- Overlay -->
    <div
      v-if="isOpen"
      @click="toggleDrawer"
      class="fixed inset-0 bg-black/40 z-[9999] duration-200 ease-in-out animate-fadeLeft"
    ></div>

    <!-- Drawer Toggle Button -->
    <button
      v-show="showButton"
      @click="toggleDrawer"
      @mouseenter="onHover"
      @mouseleave="onLeave"
      class="fixed right-0 bottom-[40%] transform translate-y-[40%] bg-gold py-3 px-4 cursor-pointer z-[10000] rounded-tl-lg rounded-bl-lg text-black font-bold flex items-center space-x-2 animate-slideLeft hover:animate-slideRight"
      :aria-label="$t('contact.open_contact_drawer')"
    >
      <span><i class="bx bxs-envelope"></i></span>
      <p v-show="showText" class="transition-all duration-500">{{ $t('contact.contact_us') }}</p>
    </button>

    <!-- Drawer -->
    <div
      :class="[
        'fixed top-0 w-[300px] h-full bg-white shadow-md transition-all duration-700 z-[10001] animate-fadeLeft',
        isOpen ? 'right-0' : 'right-[-300px]'
      ]"
    >
      <div class="p-5 relative h-full overflow-y-auto">
        <!-- Close Button -->
        <button
          @click="toggleDrawer"
          class="absolute top-2 right-2 text-2xl text-gray-700"
          :aria-label="$t('contact.close_contact_drawer')"
        >
          &times;
        </button>
        <h2 class="text-xl font-bold mb-4">{{ $t('contact.contact_us') }}</h2>

        <!-- Optionally show an error message -->
        <p v-if="errorMessage" class="mb-4 text-red-500">{{ errorMessage }}</p>

        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="name" class="block font-semibold mb-1">{{ $t('contact.first_name') }}</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              required
              class="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label for="lastName" class="block font-semibold mb-1">{{ $t('contact.last_name') }}</label>
            <input
              type="text"
              id="lastName"
              v-model="form.lastName"
              required
              class="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label for="phone" class="block font-semibold mb-1">{{ $t('contact.phone') }}</label>
            <input
              type="tel"
              id="phone"
              v-model="form.phone"
              required
              class="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label for="email" class="block font-semibold mb-1">{{ $t('contact.email') }}</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              required
              class="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label for="message" class="block font-semibold mb-1">{{ $t('contact.message') }}</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              class="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            :disabled="loading"
            class="bg-gold py-2 px-4 rounded-xl font-bold text-black w-full flex justify-center items-center"
          >
            <!-- Show spinner if loading, otherwise show translated "Send" -->
            <span v-if="loading" class="loader"></span>
            <span v-else>{{ $t('contact.send') }}</span>
          </button>
        </form>

        <p class="mb-2 text-sm text-light dark:text-gray-400 mt-6">
          <a href="mailto:info@silkride.co.uk" class="hover:underline">info@silkride.co.uk</a>
        </p>
        <p class="text-sm text-light dark:text-gray-400">
          <a href="tel:+447512905514" class="hover:underline">+44 7512 905514</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const isOpen = ref(false);
const showButton = ref(false);
const showText = ref(false);
let hideTimer = null;

const loading = ref(false);
const errorMessage = ref(null);

const form = ref({
  name: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
});

const toggleDrawer = () => {
  isOpen.value = !isOpen.value;
};

const submitForm = async () => {
  // Reset any previous error
  errorMessage.value = null;
  loading.value = true;
  try {
    // API call to your Django endpoint
    const response = await fetch("https://api.silkride.co.uk/api/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form.value),
    });
    const data = await response.json();
    if (!response.ok) {
      errorMessage.value = data.error || "An error occurred. Please try again.";
      return;
    }
    console.log("Form submitted successfully:", data);
    // Optionally clear the form after successful submission
    form.value = {
      name: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    };
    toggleDrawer();
  } catch (error) {
    console.error("Error submitting form:", error);
    errorMessage.value = error.message;
  } finally {
    loading.value = false;
  }
};

const onHover = () => {
  clearTimeout(hideTimer);
  showText.value = true;
};

const onLeave = () => {
  hideTimer = setTimeout(() => {
    showText.value = false;
  }, 500);
};

onMounted(() => {
  // Wait 2 seconds before showing the button (icon + text)
  setTimeout(() => {
    showButton.value = true;
    showText.value = true;
    // After an additional 2 seconds, hide the text if not hovered
    hideTimer = setTimeout(() => {
      showText.value = false;
    }, 2000);
  }, 2000);
});
</script>

<style scoped>
/* Simple loader spinner */
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  margin-right: 8px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
