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
      class="fixed right-0 bottom-[40%] transform translate-y-[40%] bg-gold py-2 px-4 cursor-pointer z-[10000] rounded-tl-lg rounded-bl-lg text-black font-bold flex items-center space-x-2 animate-slideLeft hover:animate-slideRight"
      aria-label="Open contact drawer"
    >
      <span><i class="bx bxs-envelope"></i></span>
      <p v-show="showText" class="transition-all duration-500">Contact Us</p>
    </button>

    <!-- Drawer -->
    <div
      :class="[
        'fixed top-0 w-[300px] h-full bg-white shadow-md transition-all duration-700 z-[10001] animate-fadeLeft',
        isOpen ? 'right-0' : 'right-[-300px]',
      ]"
    >
      <div class="p-5 relative h-full overflow-y-auto">
        <!-- Close Button -->
        <button
          @click="toggleDrawer"
          class="absolute top-2 right-2 text-2xl text-gray-700"
          aria-label="Close contact drawer"
        >
          &times;
        </button>
        <h2 class="text-xl font-bold mb-4">Contact Us</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="name" class="block font-semibold mb-1">Name</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              required
              class="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label for="lastName" class="block font-semibold mb-1"
              >Last Name</label
            >
            <input
              type="text"
              id="lastName"
              v-model="form.name"
              required
              class="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label for="phone" class="block font-semibold mb-1">Phone</label>
            <input
              type="phone"
              id="phone"
              v-model="form.name"
              required
              class="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label for="email" class="block font-semibold mb-1">Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              required
              class="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label for="message" class="block font-semibold mb-1"
              >Message</label
            >
            <textarea
              id="message"
              v-model="form.message"
              required
              class="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-gold py-2 px-4 rounded-xl font-bold text-black w-full"
          >
            Send
          </button>
        </form>

        <p class="mb-2 text-sm text-light dark:text-gray-400 mt-6">
          <a href="mailto:info@silkride.co.uk" class="hover:underline"
            >info@silkride.co.uk</a
          >
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

const form = ref({
  name: "",
  email: "",
  message: "",
});

const toggleDrawer = () => {
  isOpen.value = !isOpen.value;
};

const submitForm = () => {
  console.log("Form submitted:", form.value);
  // Add your submission logic (e.g., API call) here
  toggleDrawer();
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
