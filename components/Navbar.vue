<template>
  <nav
    :class="[ 
      'fixed top-0 left-0 w-full text-white z-50 transition-colors duration-200 ease-in-out',
      isScrolled || menuOpen ? 'bg-black/70 shadow-md backdrop-blur border-white/30' : 'bg-transparent',
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

        <!-- Mobile Menu & Book Now Button -->
        <div class="flex items-center space-x-4 lg:hidden">
          <NuxtLink
            to="/booking"
            class="px-3 py-1 border border-gold text-gold text-lg hover:bg-gold hover:text-black rounded-2xl"
            @click="closeMenu"
            aria-label="Book a ride now"
          >
            Book Now
          </NuxtLink>

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
          'lg:flex lg:items-center lg:space-x-8 text-lg mt-4 lg:mt-0 transition-all duration-300',
          menuOpen ? 'block flex flex-col items-center space-y-4 mt-6' : 'hidden lg:flex'
        ]"
      >
        <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path" 
          :class="navLinkClass($route.path === link.path)"
          @click="closeMenu"
          :aria-label="`Go to ${link.label} page`"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <!-- Desktop Booking Button -->
      <div class="hidden lg:flex space-x-4 items-center">
        <NuxtLink
          to="/booking"
          class="px-4 py-1 border border-gold text-gold text-lg hover:bg-gold hover:text-black rounded-xl"
          @click="closeMenu"
          aria-label="Book a ride now"
        >
          Book Now
        </NuxtLink>
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

// Router for dynamic link highlighting
const router = useRouter();

// Navigation links
const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/cars", label: "Our Fleet" },
  { path: "/services", label: "Services" },
  { path: "/contact-us", label: "Contact Us" },
];

// Utility functions
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
const closeMenu = () => {
  menuOpen.value = false;
};
const navLinkClass = (isActive) =>
  isActive
    ? "text-gold border-b-2 border-[#FFCB6C]"
    : "hover:text-gold hover:border-[#FFCB6C] border-transparent";

// Optimize scroll detection using requestAnimationFrame
const debounceScroll = () => {
  window.requestAnimationFrame(() => {
    isScrolled.value = window.scrollY > 5;
  });
};

onMounted(() => {
  window.addEventListener("scroll", debounceScroll);
  router.afterEach(() => closeMenu());
});

onUnmounted(() => {
  window.removeEventListener("scroll", debounceScroll);
});
</script>