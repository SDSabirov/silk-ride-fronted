<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full text-white z-50 transition-colors duration-200 ease-in-out animate-fadeDown',
      isScrolled || menuOpen ? 'bg-black/70 shadow-md backdrop-blur border-white/30' : 'bg-transparent'
    ]"
    ref="navRef"
  >
    <div class="container max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between py-4">
      <!-- Logo -->
      <div class="w-full flex justify-between items-center lg:w-auto">
        <NuxtLink to="/" aria-label="Go to home page">
          <div class="flex flex-col justify-center items-center space-y-2">
            <img src="/logo.svg" alt="Silk Ride Logo" class="h-10 w-10" loading="lazy" />
            <h1 class="text-md font-semibold text-gold">SILK RIDE</h1>
          </div>
        </NuxtLink>

        <!-- Mobile Menu, Book Now Button & Language Switch -->
        <div class="flex items-center space-x-4 lg:hidden">
          <NuxtLink
            to="/booking"
            class="px-3 py-1 border border-gold text-gold text-lg hover:bg-gold hover:text-black rounded-2xl"
            @click="closeMenu"
            aria-label="Book a ride now"
          >
            Book Now
          </NuxtLink>
          <!-- Language Switch for Mobile -->
          <!-- <div class="flex space-x-2">
            <button @click="switchLanguage('en')" class="flex items-center space-x-1">
              <img src="/assets/icons/flagUK.svg" alt="English" class="w-5 h-5" />
              <span class="text-sm">EN</span>
            </button>
            <button @click="switchLanguage('ru')" class="flex items-center space-x-1">
              <img src="/assets/icons/flagRU.svg" alt="Russian" class="w-5 h-5" />
              <span class="text-sm">RU</span>
            </button>
          </div> -->
          <button
            class="focus:outline-none"
            @click="toggleMenu"
            :aria-expanded="menuOpen"
            aria-label="Toggle menu"
          >
            <span
              :class="[
                'block h-0.5 w-6 bg-white transition-all my-1',
                menuOpen ? 'rotate-45 translate-y-1.5' : ''
              ]"
            ></span>
            <span
              :class="[
                'block h-0.5 w-6 bg-white transition-all my-1',
                menuOpen ? 'opacity-0' : ''
              ]"
            ></span>
            <span
              :class="[
                'block h-0.5 w-6 bg-white transition-all my-1',
                menuOpen ? '-rotate-45 -translate-y-1.5' : ''
              ]"
            ></span>
          </button>
        </div>
      </div>

      <!-- Links -->
      <div
        :class="[
          'lg:flex lg:items-center lg:space-x-8 text-lg mt-4 lg:mt-0 transition-all duration-300 whitespace-nowrap',
          menuOpen ? 'block flex flex-col items-center space-y-4 mt-6' : 'hidden lg:flex'
        ]"
      >
        <!-- Standard navigation links -->
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          :class="navLinkClass($route.path === link.path)"
          @click="closeMenu"
          :aria-label="`Go to ${link.label} page`"
        >
          {{ link.label }}
        </NuxtLink>

        <!-- Our Company Dropdown -->
        <div class="relative w-full">
          <button
            @click="toggleDropdown"
            class="w-full lg:w-auto text-left text-white hover:text-gold focus:outline-none flex items-center justify-between"
            aria-haspopup="true"
            :aria-expanded="showDropdown"
          >
            <span>Our Company</span>
            <i class="bx bx-chevron-down"></i>
          </button>
          <div
            v-show="showDropdown"
            class="lg:absolute left-0 lg:mt-2 w-full lg:w-48 md:bg-black/70  md:backdrop-blur text-white  overflow-hidden"
          >
            <NuxtLink
              v-for="item in dropdownItems"
              :key="item.path"
              :to="item.path"
              class="block px-4 py-2 mb-2 text-lg hover:bg-gold/20"
              @click="closeDropdown"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Desktop Booking Button & Language Switch -->
      <div class="hidden lg:flex space-x-4 items-center">
        <NuxtLink
          to="/booking"
          class="px-4 py-1 border border-gold text-gold text-lg hover:bg-gold hover:text-black rounded-xl"
          @click="closeMenu"
          aria-label="Book a ride now"
        >
          Book Now
        </NuxtLink>
        <!-- Language Switch for Desktop -->
        <!-- <div class="flex space-x-2">
          <button @click="switchLanguage('en')" class="flex items-center space-x-1">
            <img src="/assets/icons/flagUK.svg" alt="English" class="w-5 h-5" />
            <span class="text-sm">EN</span>
          </button>
          <button @click="switchLanguage('ru')" class="flex items-center space-x-1">
            <img src="/assets/icons/flagRU.svg" alt="Russian" class="w-5 h-5" />
            <span class="text-sm">RU</span>
          </button>
        </div> -->
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

// Menu state
const menuOpen = ref(false);
const isScrolled = ref(false);
const showDropdown = ref(false);
const currentLanguage = ref('en');

// Router for dynamic link highlighting
const router = useRouter();

// Navigation links (without "About" as it's now in the dropdown)
const navLinks = [
  { path: "/", label: "Home" },
  { path: "/fleet", label: "Our Fleet" },
  { path: "/services", label: "Services" },
];

// Dropdown items for "Our Company"
const dropdownItems = [
  { path: "/about", label: "About Us" },
  { path: "/#why-choose-us", label: "Why Choose Us" },
  // { path: "/testimonials", label: "What Our Clients Say" },
  // { path: "/our-partners", label: "Our Partners" },
  { path: "/contact-us", label: "Contact Us" },
];

// Utility functions
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
const closeMenu = () => {
  menuOpen.value = false;
  showDropdown.value = false;
};
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};
const closeDropdown = () => {
  showDropdown.value = false;
};
const navLinkClass = (isActive) =>
  isActive
    ? "text-gold border-b-2 border-[#FFCB6C]"
    : "hover:text-gold hover:border-[#FFCB6C] border-transparent";

const debounceScroll = () => {
  window.requestAnimationFrame(() => {
    isScrolled.value = window.scrollY > 5;
  });
};

const switchLanguage = (lang) => {
  currentLanguage.value = lang;
  console.log(`Switching language to ${lang}`);
  // Implement your language switching logic here (e.g., updating i18n locale)
};

onMounted(() => {
  window.addEventListener("scroll", debounceScroll);
  router.afterEach(() => closeMenu());
});
onUnmounted(() => {
  window.removeEventListener("scroll", debounceScroll);
});
</script>
