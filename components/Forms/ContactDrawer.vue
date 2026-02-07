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
      class="fixed bottom-1/4 right-0 z-[10000] flex items-center bg-gradient-to-r from-gold to-yellow-400 text-black font-bold py-4 px-5 rounded-l-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-gold/50 backdrop-blur-sm"
      :aria-label="$t('contact.open_contact_drawer')"
    >
      <div class="relative">
        <i class="bx bxs-envelope text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"></i>
        <div class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
      </div>
      <transition name="slide-fade">
        <span
          v-if="showText"
          class="ml-3 whitespace-nowrap text-sm font-semibold tracking-wide"
        >
          {{ $t("contact.contact_us") }}
        </span>
      </transition>
    </button>

    <!-- Drawer -->
    <div
      :class="[
        'fixed top-0 w-[380px] h-full bg-white shadow-2xl transition-all duration-500 z-[10001] backdrop-blur-sm border-l border-gray-100',
        isOpen ? 'right-0' : 'right-[-380px]',
      ]"
    >
      <!-- Header with gradient -->
      <div class="bg-gradient-to-r from-black to-gray-800 text-white p-6 relative">
        <button
          @click="toggleDrawer"
          class="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
          :aria-label="$t('contact.close_contact_drawer')"
        >
          <i class="bx bx-x text-white text-xl"></i>
        </button>
        <div class="flex items-center space-x-3 mr-10">
          <div class="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
            <i class="bx bxs-phone text-black text-xl"></i>
          </div>
          <div>
            <h2 class="text-xl font-bold">{{ $t("contact.contact_us") }}</h2>
            <p class="text-sm text-gray-300">We'll get back to you within 24 hours</p>
          </div>
        </div>
      </div>
      
      <div class="p-6 h-full overflow-y-auto pb-20">

        <!-- Success/Error Messages -->
        <div v-if="successMessage" class="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
          <i class="bx bx-check-circle text-green-600 text-xl"></i>
          <p class="text-green-700 font-medium">{{ successMessage }}</p>
        </div>
        
        <div v-if="errorMessage" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3">
          <i class="bx bx-error-circle text-red-600 text-xl"></i>
          <p class="text-red-700 font-medium">{{ errorMessage }}</p>
        </div>

        <form @submit.prevent="submitForm" class="space-y-5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">{{
                $t("contact.first_name")
              }}</label>
              <div class="relative">
                <i class="bx bx-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold/20 focus:border-gold transition-colors duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Enter first name"
                />
              </div>
            </div>
            <div>
              <label for="lastName" class="block text-sm font-semibold text-gray-700 mb-2">{{
                $t("contact.last_name")
              }}</label>
              <div class="relative">
                <i class="bx bx-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  id="lastName"
                  v-model="form.lastName"
                  required
                  class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold/20 focus:border-gold transition-colors duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Enter last name"
                />
              </div>
            </div>
          </div>
          <div>
            <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">{{
              $t("contact.phone")
            }}</label>
            <div class="relative">
              <i class="bx bx-phone absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                required
                class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold/20 focus:border-gold transition-colors duration-200 bg-gray-50 focus:bg-white"
                placeholder="+44 7XXX XXXXXX"
              />
            </div>
          </div>
          
          <div>
            <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">{{
              $t("contact.email")
            }}</label>
            <div class="relative">
              <i class="bx bx-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold/20 focus:border-gold transition-colors duration-200 bg-gray-50 focus:bg-white"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div>
            <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">{{
              $t("contact.message")
            }}</label>
            <div class="relative">
              <i class="bx bx-message-detail absolute left-3 top-4 text-gray-400"></i>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="4"
                class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold/20 focus:border-gold transition-colors duration-200 bg-gray-50 focus:bg-white resize-none"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 flex justify-center items-center space-x-2 transform hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <span v-if="loading" class="flex items-center space-x-2">
              <div class="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent"></div>
              <span>Sending...</span>
            </span>
            <span v-else class="flex items-center space-x-2">
              <i class="bx bx-send text-lg"></i>
              <span>{{ $t("contact.send") }}</span>
            </span>
          </button>
        </form>

        <!-- Contact Information -->
        <div class="mt-8 pt-6 border-t border-gray-100">
          <h3 class="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">Direct Contact</h3>
          <div class="space-y-3">
            <a href="mailto:info@silkride.co.uk" class="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 group">
              <div class="w-10 h-10 bg-gold rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <i class="bx bx-envelope text-black text-lg"></i>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-700">Email Us</p>
                <p class="text-sm text-gray-500">info@silkride.co.uk</p>
              </div>
            </a>
            
            <a href="tel:+447512905514" class="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 group">
              <div class="w-10 h-10 bg-gold rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <i class="bx bx-phone text-black text-lg"></i>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-700">Call Us</p>
                <p class="text-sm text-gray-500">+44 7512 905514</p>
              </div>
            </a>
          </div>
          
          <p class="text-xs text-gray-400 mt-4 text-center">Available 24/7 for your convenience</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useAnalytics } from '~/composables/useAnalytics'

const { trackLead } = useAnalytics()
const isOpen = ref(false);
const showButton = ref(false);
const showText = ref(false);
let hideTimer = null;

const loading = ref(false);
const errorMessage = ref(null);
const successMessage = ref(null);

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
  // Reset any previous messages
  errorMessage.value = null;
  successMessage.value = null;
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
    successMessage.value = "Thank you! We'll get back to you within 24 hours.";

    // Track lead conversion
    trackLead({
      form_type: 'contact_drawer',
      form_location: 'floating_drawer'
    });
    
    // Clear the form after successful submission
    form.value = {
      name: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    };
    
    // Auto-close drawer after 3 seconds
    setTimeout(() => {
      toggleDrawer();
      successMessage.value = null;
    }, 3000);
    
  } catch (error) {
    console.error("Error submitting form:", error);
    errorMessage.value = "Network error. Please check your connection and try again.";
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
.slide-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-fade-enter-from {
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
