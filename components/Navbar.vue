<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full text-white z-50 transition-colors duration-200 ease-in-out animate-fadeDown',
      isScrolled || menuOpen || isPolicyPage ? 'bg-black/70 shadow-md backdrop-blur border-white/30' : 'bg-transparent'
    ]"
    ref="navRef"
  >
    <div class="container max-w-screen-xl mx-auto px-6 flex items-center justify-between py-3">
      <!-- Logo -->
      <div class="flex items-center">
        <NuxtLink to="/" aria-label="Go to home page" class="flex items-center space-x-3">
          <img src="/logo.svg" alt="Silk Ride Logo" class="h-8 w-8" loading="lazy" />
          <h2 class="text-lg font-semibold text-gold tracking-wide">SILK RIDE</h2>
        </NuxtLink>
      </div>

      <!-- Mobile Menu Controls -->
      <div class="flex items-center space-x-3 lg:hidden">
        <LanguageSwitch/>

        <!-- Mobile Menu Toggle -->
        <button
          class="p-2 focus:outline-none"
          @click="toggleMenu"
          :aria-expanded="menuOpen"
          aria-label="Toggle menu"
        >
          <div class="relative w-6 h-5 flex flex-col justify-center items-center">
            <span
              :class="[
                'absolute h-0.5 w-6 bg-white transition-all duration-300',
                menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              ]"
            ></span>
            <span
              :class="[
                'absolute h-0.5 w-6 bg-white transition-all duration-300',
                menuOpen ? 'opacity-0' : 'opacity-100'
              ]"
            ></span>
            <span
              :class="[
                'absolute h-0.5 w-6 bg-white transition-all duration-300',
                menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              ]"
            ></span>
          </div>
        </button>
      </div>

      <!-- Mobile Menu Overlay -->
      <div
        v-if="menuOpen"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        @click="closeMenu"
      ></div>

      <!-- Links -->
      <div
        :class="[
          'lg:flex lg:items-center lg:space-x-6 text-sm lg:mt-0 transition-all duration-300',
          menuOpen
            ? 'fixed top-16 left-0 w-full bg-black/95 backdrop-blur-md z-50 flex flex-col items-start px-6 py-6 space-y-4 min-h-[50vh] lg:relative lg:top-auto lg:left-auto lg:w-auto lg:bg-transparent lg:px-0 lg:py-0 lg:space-y-0 lg:min-h-0 lg:flex-row lg:items-center lg:space-x-6'
            : 'hidden lg:flex'
        ]"
      >
        <!-- Standard navigation links -->
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          :class="[
            'w-full lg:w-auto py-2 lg:py-1 text-left lg:text-center transition-colors duration-200',
            navLinkClass($route.path === link.path)
          ]"
          @click="closeMenu"
          :aria-label="`Go to ${link.label} page`"
        >
          {{ link.label }}
        </NuxtLink>
        
        <!-- Services Dropdown -->
        <div class="relative w-full lg:w-auto">
          <button
            @click="toggleServicesDropdown"
            class="w-full lg:w-auto py-2 lg:py-1 text-left text-white hover:text-gold focus:outline-none flex items-center justify-between gap-1 transition-colors duration-200"
            aria-haspopup="true"
            :aria-expanded="showServicesDropdown"
          >
            {{$t('navbar.services')}}
            <svg class="w-3 h-3 transition-transform duration-200" :class="showServicesDropdown ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div
            v-show="showServicesDropdown"
            class="w-full lg:absolute left-0 lg:mt-2 lg:w-56 bg-black/95 backdrop-blur text-white lg:rounded-md lg:shadow-lg overflow-hidden"
          >
            <NuxtLink
              v-for="item in servicesDropdownItems"
              :key="item.path"
              :to="item.path"
              class="block px-4 py-2 text-sm hover:bg-gold/20 transition-colors"
              @click="closeServicesDropdown"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>

        <!-- Popular Routes Dropdown -->
        <div class="relative w-full lg:w-auto">
          <button
            @click="toggleRoutesDropdown"
            class="w-full lg:w-auto py-2 lg:py-1 text-left text-white hover:text-gold focus:outline-none flex items-center justify-between gap-1 transition-colors duration-200"
            aria-haspopup="true"
            :aria-expanded="showRoutesDropdown"
          >
            {{$t('navbar.popularRoutes')}}
            <svg class="w-3 h-3 transition-transform duration-200" :class="showRoutesDropdown ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div
            v-show="showRoutesDropdown"
            class="w-full lg:absolute left-0 lg:mt-2 lg:w-64 bg-black/95 backdrop-blur text-white lg:rounded-md lg:shadow-lg overflow-hidden"
          >
            <!-- Airport Routes -->
            <div class="px-3 py-1.5 bg-gold/5">
              <span class="text-gold text-xs font-medium uppercase tracking-wide">{{$t('navbar.airports')}}</span>
            </div>
            <NuxtLink
              v-for="airport in airportRoutes"
              :key="airport.path"
              :to="airport.path"
              class="block px-4 py-2 text-sm hover:bg-gold/20 transition-colors"
              @click="closeRoutesDropdown"
            >
              {{ airport.label }}
            </NuxtLink>

            <!-- Popular Destinations -->
            <div class="px-3 py-1.5 bg-gold/5 border-t border-gold/10">
              <span class="text-gold text-xs font-medium uppercase tracking-wide">{{$t('navbar.destinations')}}</span>
            </div>
            <NuxtLink
              v-for="destination in popularDestinations"
              :key="destination.path"
              :to="destination.path"
              class="block px-4 py-2 text-sm hover:bg-gold/20 transition-colors"
              @click="closeRoutesDropdown"
            >
              {{ destination.label }}
            </NuxtLink>
          </div>
        </div>

        <!-- Our Company Dropdown -->
        <div class="relative w-full lg:w-auto">
          <button
            @click="toggleDropdown"
            class="w-full lg:w-auto py-2 lg:py-1 text-left text-white hover:text-gold focus:outline-none flex items-center justify-between gap-1 transition-colors duration-200"
            aria-haspopup="true"
            :aria-expanded="showDropdown"
          >
            {{$t('navbar.ourCompany')}}
            <svg class="w-3 h-3 transition-transform duration-200" :class="showDropdown ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div
            v-show="showDropdown"
            class="w-full lg:absolute left-0 lg:mt-2 lg:w-52 bg-black/95 backdrop-blur text-white lg:rounded-md lg:shadow-lg overflow-hidden"
          >
            <NuxtLink
              v-for="item in dropdownItems"
              :key="item.path"
              :to="item.path"
              class="block px-4 py-2 text-sm hover:bg-gold/20 transition-colors"
              @click="closeDropdown"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>
        <!-- Mobile Booking Button -->
        <div class="w-full pt-4 lg:hidden">
          <NuxtLink
            :to="localePath('/booking')"
            class="w-full flex items-center justify-center bg-gold text-black py-4 rounded-lg font-bold text-lg hover:bg-gold/90 transition-all duration-200 shadow-lg"
            @click="closeMenu"
            aria-label="Book a ride now"
          >
            <i class="bx bx-calendar mr-2"></i>
            {{$t('navbar.bookNow')}}
          </NuxtLink>
        </div>
      </div>

      <!-- Desktop Booking Button & Language Switch -->
      <div class="hidden lg:flex space-x-4 items-center">
        <NuxtLink
          :to="localePath('/booking')"
          class="px-4 py-1 border border-gold text-gold  text-lg hover:bg-gold hover:text-black rounded-xl"
          @click="closeMenu"
          aria-label="Book a ride now"
        >
        {{$t('navbar.bookNow')}}
        </NuxtLink>
        <!-- Language Switch for Desktop -->
        <div class="flex space-x-2">
         <LanguageSwitch />
         <div class="relative -right-28 flex space-x-4 items-center">
          <NuxtLink :to="localePath('/customer')" class="px-4 py-1 border border-gold text-gold  text-lg hover:bg-gold hover:text-black rounded-xl flex items-center">
            <i class='bx bx-user mr-2'></i>  {{$t('navbar.registerLogin')}} 
          </NuxtLink>
          
         </div>
         
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useLocalePath } from '#imports'

const localePath = useLocalePath()
// Menu state
const menuOpen = ref(false);
const isScrolled = ref(false);
const showDropdown = ref(false);
const showServicesDropdown = ref(false);
const showRoutesDropdown = ref(false);
const currentLanguage = ref('en');

// Router for dynamic link highlighting
const router = useRouter();

const { t } = useI18n()
const route = useRoute()

const isPolicyPage = computed(() =>
  route.path === localePath('/terms-of-service') || route.path === localePath('/privacy-policy') || route.path === localePath('/faq')
)
// Navigation links with icons for mobile (services removed to make it dropdown)
const navLinks = [
  { path: localePath('/'), label: t('navbar.home'), icon: 'bx bx-home' },
  { path: localePath('/fleet'), label: t('navbar.fleet'), icon: 'bx bx-car' }
]

// Services dropdown items
const servicesDropdownItems = [
  { path: localePath('/services'), label: t('navbar.servicesDropdown.all'), icon: 'bx bx-list-ul' },
  { path: localePath('/services/airport-transfers'), label: t('navbar.servicesDropdown.airport'), icon: 'bx bx-placeholder' },
  { path: localePath('/services/corporate-travel'), label: t('navbar.servicesDropdown.corporate'), icon: 'bx bx-briefcase' },
  { path: localePath('/services/wedding-chauffeur'), label: t('navbar.servicesDropdown.wedding'), icon: 'bx bx-heart' },
  { path: localePath('/services/hourly-chauffeur'), label: t('navbar.servicesDropdown.hourly'), icon: 'bx bx-time' },
  { path: localePath('/services/uk-europe-travel'), label: t('navbar.servicesDropdown.ukEurope'), icon: 'bx bx-world' },
  { path: localePath('/services/event-chauffeur'), label: t('navbar.servicesDropdown.event'), icon: 'bx bx-calendar-event' }
]

const dropdownItems = [
  { path: localePath('/about'), label: t('navbar.about'), icon: 'bx bx-info-circle' },
  { path: localePath('/partners'), label: t('navbar.partners'), icon: 'bx bx-group' },
  { path: localePath('/#why-choose-us'), label: t('navbar.whyChooseUs'), icon: 'bx bx-star' },
  { path: localePath('/contact-us'), label: t('navbar.contact'), icon: 'bx bx-phone' }
]

// Airport routes for Popular Routes dropdown
const airportRoutes = [
  { path: localePath('/airport-transfers/heathrow'), label: t('navbar.airportsDropdown.heathrow'), icon: 'bx bx-plane-takeoff' },
  { path: localePath('/airport-transfers/gatwick'), label: t('navbar.airportsDropdown.gatwick'), icon: 'bx bx-plane-takeoff' },
  { path: localePath('/airport-transfers/stansted'), label: t('navbar.airportsDropdown.stansted'), icon: 'bx bx-plane-takeoff' },
  { path: localePath('/airport-transfers/luton'), label: t('navbar.airportsDropdown.luton'), icon: 'bx bx-plane-takeoff' }
]

// Popular UK destinations
const popularDestinations = [
  { path: localePath('/destination-tours/oxford'), label: t('navbar.destinationsDropdown.oxford'), icon: 'bx bx-map' },
  { path: localePath('/destination-tours/cambridge'), label: t('navbar.destinationsDropdown.cambridge'), icon: 'bx bx-map' },
  { path: localePath('/destination-tours/bath'), label: t('navbar.destinationsDropdown.bath'), icon: 'bx bx-map' },
  { path: localePath('/destination-tours/cotswolds'), label: t('navbar.destinationsDropdown.cotswolds'), icon: 'bx bx-map' },
  { path: localePath('/destination-tours/stonehenge'), label: t('navbar.destinationsDropdown.stonehenge'), icon: 'bx bx-map' }
]
// Utility functions
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  // Prevent body scroll when menu is open on mobile
  if (process.client) {
    if (menuOpen.value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
};

const closeMenu = () => {
  menuOpen.value = false;
  showDropdown.value = false;
  showServicesDropdown.value = false;
  showRoutesDropdown.value = false;
  // Restore body scroll
  if (process.client) {
    document.body.style.overflow = '';
  }
};

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
  showServicesDropdown.value = false; // Close services dropdown when opening company dropdown
  showRoutesDropdown.value = false; // Close routes dropdown
};

const toggleServicesDropdown = () => {
  showServicesDropdown.value = !showServicesDropdown.value;
  showDropdown.value = false; // Close company dropdown when opening services dropdown
  showRoutesDropdown.value = false; // Close routes dropdown
};

const toggleRoutesDropdown = () => {
  showRoutesDropdown.value = !showRoutesDropdown.value;
  showDropdown.value = false; // Close company dropdown
  showServicesDropdown.value = false; // Close services dropdown
};

const closeDropdown = () => {
  showDropdown.value = false;
};

const closeServicesDropdown = () => {
  showServicesDropdown.value = false;
};

const closeRoutesDropdown = () => {
  showRoutesDropdown.value = false;
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
  // Restore body scroll on component unmount
  if (process.client) {
    document.body.style.overflow = '';
  }
});
</script>
