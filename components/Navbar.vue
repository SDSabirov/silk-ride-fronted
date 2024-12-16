<template>
    <nav
      :class="[
        'fixed top-0 left-0 w-full text-white z-50 transition-colors duration-300',
        isScrolled ? 'bg-black shadow-md' : 'bg-transparent'
      ]"
    >
      <div class="container max-w-screen-xl mx-auto px-4 flex items-center justify-between py-4">
        <!-- Logo -->
         <NuxtLink to="/">
          <div class="flex space-x-2 items-center">
          <img src="/logo.svg" alt="Silk Ride Logo" class="h-12 w-12">
          <h1 class="text-3xl font-semibold text-gold">SILK RIDE</h1>
        </div>
         </NuxtLink>
        
  
        <!-- Hamburger Icon -->
        <div>
          <button @click="toggleMenu" class="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="#FFCB6C" viewBox="0 0 24 24" stroke="#FFCB6C">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
  
      <!-- Dropdown Menu -->
      <div
        v-if="menuOpen"
        class="absolute top-16 left-0 w-full bg-gray-800 text-white shadow-md transition-transform duration-300"
      >
        <div class="flex flex-col items-center justify-center space-y-4 py-6">
          <a
            href="#home"
            @click="closeMenu"
            class="hover:text-gray-400 text-lg border-b-2 border-transparent hover:border-[#FFCB6C] active-class"
          >
            Home
          </a>
          <a
            href="#about"
            @click="closeMenu"
            class="hover:text-gray-400 text-lg border-b-2 border-transparent hover:border-[#FFCB6C]"
          >
            About
          </a>
          <a
            href="#services"
            @click="closeMenu"
            class="hover:text-gray-400 text-lg border-b-2 border-transparent hover:border-[#FFCB6C]"
          >
            Services
          </a>
          <a
            href="#contact"
            @click="closeMenu"
            class="hover:text-gray-400 text-lg border-b-2 border-transparent hover:border-[#FFCB6C]"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  // State to control the mobile menu
  const menuOpen = ref(false);
  const isScrolled = ref(false);
  
  // Toggle menu open/close
  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
  };
  
  // Close menu when a link is clicked
  const closeMenu = () => {
    menuOpen.value = false;
  };
  
  // Detect clicks outside to close the menu
  const handleClickOutside = (event) => {
    const nav = document.querySelector('nav');
    if (nav && !nav.contains(event.target)) {
      menuOpen.value = false;
    }
  };
  
  // Detect scroll to toggle background color
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 10;
  };
  
  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
  });
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <style>
  /* Optional additional styling for active link */
  .active-class {
    color: #FFCB6C;
    border-bottom-color: #FFCB6C;
  }
  </style>
  