<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full text-white z-50 transition-colors duration-200 ease-in-out animate-fadeDown',
      isScrolled || menuOpen || isPolicyPage ? 'bg-black/70 shadow-md backdrop-blur border-white/30' : 'bg-transparent'
    ]"
    ref="navRef"
  >
    <div class="container max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between py-4">
      <!-- Logo -->
      <div class="w-full flex justify-between items-center lg:w-auto">
        <NuxtLink to="/" aria-label="Go to home page">
          <div class="flex flex-col justify-center items-center space-y-2">
            <img src="/logo.svg" alt="Silk Ride Logo" class="h-10 w-10" loading="lazy" />
            <h2 class="text-md font-semibold text-gold">SILK RIDE</h2>
          </div>
        </NuxtLink>

        <!-- Mobile Menu Controls -->
        <div class="flex items-center space-x-3 lg:hidden">
          <!-- Customer Account -->
          <NuxtLink :to="localePath('/customer')" 
                    class="p-2 text-white hover:bg-gold hover:text-black rounded-lg transition-colors">
            <i class='bx bx-user text-xl'></i>
            <span class="sr-only">{{$t('navbar.registerLogin')}}</span>
          </NuxtLink>
          
          <!-- Language Switch -->
          <LanguageSwitch/>
          
          <!-- Mobile Menu Toggle -->
          <button
            class="relative p-2 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-transparent rounded-lg group"
            @click="toggleMenu"
            :aria-expanded="menuOpen"
            aria-label="Toggle menu"
          >
            <div class="relative w-6 h-6 flex flex-col justify-center items-center">
              <span
                :class="[
                  'absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out',
                  menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                ]"
              ></span>
              <span
                :class="[
                  'absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out',
                  menuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                ]"
              ></span>
              <span
                :class="[
                  'absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out',
                  menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                ]"
              ></span>
            </div>
          </button>
        </div>
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
          'lg:flex lg:items-center lg:space-x-8 text-lg lg:mt-0 transition-all duration-500 whitespace-nowrap capitalize',
          menuOpen 
            ? 'fixed top-20 left-0 w-full bg-black/95 backdrop-blur-md border-t border-gold/30 z-50 flex flex-col items-start px-6 py-6 space-y-6 min-h-[50vh] lg:relative lg:top-auto lg:left-auto lg:w-auto lg:bg-transparent lg:border-none lg:px-0 lg:py-0 lg:space-y-0 lg:min-h-0 lg:flex-row lg:items-center lg:space-x-8' 
            : 'hidden lg:flex'
        ]"
      >
        <!-- Standard navigation links -->
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          :class="[
            'w-full lg:w-auto py-3 lg:py-0 text-left lg:text-center border-b border-gray-700/30 lg:border-none transition-all duration-200',
            navLinkClass($route.path === link.path)
          ]"
          @click="closeMenu"
          :aria-label="`Go to ${link.label} page`"
        >
          <span class="flex items-center">
            <i v-if="link.icon" :class="link.icon + ' mr-3 text-gold lg:hidden'"></i>
            {{ link.label }}
          </span>
        </NuxtLink>
        
        <!-- Services Dropdown -->
        <div class="relative w-full lg:w-auto border-b border-gray-700/30 lg:border-none">
          <button
            @click="toggleServicesDropdown"
            class="w-full lg:w-auto py-3 lg:py-0 text-left text-white hover:text-gold focus:outline-none flex items-center justify-between transition-colors duration-200"
            aria-haspopup="true"
            :aria-expanded="showServicesDropdown"
          >
            <span class="flex items-center">
              <i class="bx bx-briefcase mr-3 text-gold lg:hidden"></i>
              {{$t('navbar.services')}}
            </span>
            <i :class="['bx transition-transform duration-200', showServicesDropdown ? 'bx-chevron-up' : 'bx-chevron-down']"></i>
          </button>
          <div
            v-show="showServicesDropdown"
            class="w-full lg:absolute left-0 lg:mt-2 lg:w-[280px] bg-gray-800/90 lg:bg-black/95 backdrop-blur text-white lg:rounded-lg lg:shadow-xl overflow-hidden transition-all duration-300"
          >
            <NuxtLink
              v-for="item in servicesDropdownItems"
              :key="item.path"
              :to="item.path"
              class="block px-6 lg:px-4 py-3 lg:py-2 text-base lg:text-lg hover:bg-gold/20 border-l-2 border-transparent hover:border-gold lg:border-none transition-all duration-200"
              @click="closeServicesDropdown"
            >
              <span class="flex items-center">
                <i v-if="item.icon" :class="item.icon + ' mr-3 text-gold lg:hidden'"></i>
                {{ item.label }}
              </span>
            </NuxtLink>
          </div>
        </div>

        <!-- Popular Routes Dropdown -->
        <div class="relative w-full lg:w-auto border-b border-gray-700/30 lg:border-none">
          <button
            @click="toggleRoutesDropdown"
            class="w-full lg:w-auto py-3 lg:py-0 text-left text-white hover:text-gold focus:outline-none flex items-center justify-between transition-colors duration-200"
            aria-haspopup="true"
            :aria-expanded="showRoutesDropdown"
          >
            <span class="flex items-center">
              <i class="bx bx-map mr-3 text-gold lg:hidden"></i>
              {{$t('navbar.popularRoutes')}}
            </span>
            <i :class="['bx transition-transform duration-200', showRoutesDropdown ? 'bx-chevron-up' : 'bx-chevron-down']"></i>
          </button>
          <div
            v-show="showRoutesDropdown"
            class="w-full lg:absolute left-0 lg:mt-2 lg:w-[320px] bg-gray-800/90 lg:bg-black/95 backdrop-blur text-white lg:rounded-lg lg:shadow-xl overflow-hidden transition-all duration-300"
          >
            <!-- Airport Routes -->
            <div class="px-4 py-2 bg-gold/10 border-b border-gold/20">
              <span class="text-gold text-sm font-semibold uppercase tracking-wider">{{$t('navbar.airports')}}</span>
            </div>
            <NuxtLink
              v-for="airport in airportRoutes"
              :key="airport.path"
              :to="airport.path"
              class="block px-6 lg:px-4 py-3 lg:py-2 text-base lg:text-lg hover:bg-gold/20 border-l-2 border-transparent hover:border-gold lg:border-none transition-all duration-200"
              @click="closeRoutesDropdown"
            >
              <span class="flex items-center">
                <i v-if="airport.icon" :class="airport.icon + ' mr-3 text-gold lg:hidden'"></i>
                {{ airport.label }}
              </span>
            </NuxtLink>
            
            <!-- Popular Destinations -->
            <div class="px-4 py-2 bg-gold/10 border-b border-gold/20 border-t">
              <span class="text-gold text-sm font-semibold uppercase tracking-wider">{{$t('navbar.destinations')}}</span>
            </div>
            <NuxtLink
              v-for="destination in popularDestinations"
              :key="destination.path"
              :to="destination.path"
              class="block px-6 lg:px-4 py-3 lg:py-2 text-base lg:text-lg hover:bg-gold/20 border-l-2 border-transparent hover:border-gold lg:border-none transition-all duration-200"
              @click="closeRoutesDropdown"
            >
              <span class="flex items-center">
                <i v-if="destination.icon" :class="destination.icon + ' mr-3 text-gold lg:hidden'"></i>
                {{ destination.label }}
              </span>
            </NuxtLink>
          </div>
        </div>

        <!-- Our Company Dropdown -->
        <div class="relative w-full lg:w-auto border-b border-gray-700/30 lg:border-none">
          <button
            @click="toggleDropdown"
            class="w-full lg:w-auto py-3 lg:py-0 text-left text-white hover:text-gold focus:outline-none flex items-center justify-between transition-colors duration-200"
            aria-haspopup="true"
            :aria-expanded="showDropdown"
          >
            <span class="flex items-center">
              <i class="bx bx-building mr-3 text-gold lg:hidden"></i>
              {{$t('navbar.ourCompany')}}
            </span>
            <i :class="['bx transition-transform duration-200', showDropdown ? 'bx-chevron-up' : 'bx-chevron-down']"></i>
          </button>
          <div
            v-show="showDropdown"
            class="w-full lg:absolute left-0 lg:mt-2 lg:w-[268px] bg-gray-800/90 lg:bg-black/95 backdrop-blur text-white lg:rounded-lg lg:shadow-xl overflow-hidden transition-all duration-300"
          >
            <NuxtLink
              v-for="item in dropdownItems"
              :key="item.path"
              :to="item.path"
              class="block px-6 lg:px-4 py-3 lg:py-2 text-base lg:text-lg hover:bg-gold/20 border-l-2 border-transparent hover:border-gold lg:border-none transition-all duration-200"
              @click="closeDropdown"
            >
              <span class="flex items-center">
                <i v-if="item.icon" :class="item.icon + ' mr-3 text-gold lg:hidden'"></i>
                {{ item.label }}
              </span>
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
  { path: localePath('/services'), label: 'All Services', icon: 'bx bx-list-ul' },
  { path: localePath('/services/airport-transfers'), label: 'Airport Transfers', icon: 'bx bx-placeholder' },
  { path: localePath('/services/corporate-travel'), label: 'Corporate Travel', icon: 'bx bx-briefcase' },
  { path: localePath('/services/wedding-chauffeur'), label: 'Wedding Chauffeur', icon: 'bx bx-heart' },
  { path: localePath('/services/hourly-chauffeur'), label: 'Hourly Chauffeur', icon: 'bx bx-time' },
  { path: localePath('/services/uk-europe-travel'), label: 'UK & Europe Travel', icon: 'bx bx-world' },
  { path: localePath('/services/event-chauffeur'), label: 'Event Transport', icon: 'bx bx-calendar-event' }
]

const dropdownItems = [
  { path: localePath('/about'), label: t('navbar.about'), icon: 'bx bx-info-circle' },
  { path: localePath('/partners'), label: t('navbar.partners'), icon: 'bx bx-group' },
  { path: localePath('/#why-choose-us'), label: t('navbar.whyChooseUs'), icon: 'bx bx-star' },
  { path: localePath('/contact-us'), label: t('navbar.contact'), icon: 'bx bx-phone' }
]

// Airport routes for Popular Routes dropdown
const airportRoutes = [
  { path: localePath('/airport-transfers/heathrow'), label: 'Heathrow Airport', icon: 'bx bx-plane-takeoff' },
  { path: localePath('/airport-transfers/gatwick'), label: 'Gatwick Airport', icon: 'bx bx-plane-takeoff' },
  { path: localePath('/airport-transfers/stansted'), label: 'Stansted Airport', icon: 'bx bx-plane-takeoff' },
  { path: localePath('/airport-transfers/luton'), label: 'Luton Airport', icon: 'bx bx-plane-takeoff' }
]

// Popular UK destinations
const popularDestinations = [
  { path: localePath('/destination-tours/oxford'), label: 'Oxford', icon: 'bx bx-map' },
  { path: localePath('/destination-tours/cambridge'), label: 'Cambridge', icon: 'bx bx-map' },
  { path: localePath('/destination-tours/bath'), label: 'Bath', icon: 'bx bx-map' },
  { path: localePath('/destination-tours/cotswolds'), label: 'Cotswolds', icon: 'bx bx-map' },
  { path: localePath('/destination-tours/stonehenge'), label: 'Stonehenge', icon: 'bx bx-map' }
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
