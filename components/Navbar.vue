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
        <NuxtLink to="/">
          <div class="flex flex-col justify-center items-center space-y-2">
            <img src="/logo.svg" alt="Silk Ride Logo" class="h-10 w-10" loading="lazy" />
            <h1 class="text-md font-semibold text-gold">SILK RIDE</h1>
          </div>
        </NuxtLink>
        <button class="block lg:hidden focus:outline-none" @click="toggleMenu" aria-label="Toggle menu">
          <div
            :class="[
              'h-0.5 w-6 bg-white transition-all my-1',
              menuOpen ? 'rotate-45 translate-y-1.5' : ''
            ]"
          ></div>
          <div
            :class="[
              'h-0.5 w-6 bg-white transition-all my-1',
              menuOpen ? 'opacity-0' : ''
            ]"
          ></div>
          <div
            :class="[
              'h-0.5 w-6 bg-white transition-all my-1',
              menuOpen ? '-rotate-45 -translate-y-1.5' : ''
            ]"
          ></div>
        </button>
      </div>

      <!-- Links -->
      <div
        :class="[
          'lg:flex lg:items-center lg:space-x-8 text-lg mt-4 lg:mt-0',
          menuOpen ? 'block flex flex-col items-center space-y-4 mt-6 ' : 'hidden lg:flex'
        ]"
      >
        <NuxtLink
          to="/"
          :class="navLinkClass($route.path === '/')"
          @click="closeMenu"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/cars"
          :class="navLinkClass($route.path === '/cars')"
          @click="closeMenu"
        >
          Our Fleet
        </NuxtLink>
        <NuxtLink
          to="/services"
          :class="navLinkClass($route.path === '/services')"
          @click="closeMenu"
        >
          Services
        </NuxtLink>
        <NuxtLink
          to="/contact-us"
          :class="navLinkClass($route.path === '/contact-us')"
          @click="closeMenu"
        >
          Contact Us
        </NuxtLink>
      </div>

      <!-- Contact -->
      <div class="flex space-x-4 items-center mt-4 lg:mt-0">
        <img src="/assets/icons/flagUK.svg" alt="UK Flag" class="max-w-[22px] max-h-[22px]" loading="lazy" />
        <a href="tel:+44(123) 456-7890" rel="noopener noreferrer" aria-label="Call us">+44(123) 456-7890</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useRouter } from "vue-router";

// State for menu, scroll, and dark mode
const menuOpen = ref(false);
const isScrolled = ref(false);
const isDarkMode = ref(false);

// Router for dynamic link highlighting
const router = useRouter();

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



let timeout = null;
const debounceScroll = () => {
  if (timeout) clearTimeout(timeout);
  timeout = setTimeout(() => {
    isScrolled.value = window.scrollY > 5;
  }, 100);
};


onMounted(() => {
  window.addEventListener("scroll", debounceScroll);
  router.afterEach(() => closeMenu());
});

onUnmounted(() => {
  window.removeEventListener("scroll", debounceScroll);
});
</script>

<style>

</style>

