<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-[999] transition-all duration-300',
      isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent lg:bg-transparent'
    ]"
  >
    <!-- Gold accent line -->
    <div class="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

    <div class="max-w-screen-2xl mx-auto px-6">
      <div class="flex items-center justify-between h-24">
        <!-- Logo - Vertical Layout -->
        <NuxtLink to="/" class="flex flex-col items-center group" aria-label="Go to home page">
          <NuxtImg
            src="/logo.svg"
            alt="Silk Ride Logo"
            class="h-12 w-12 transition-transform group-hover:scale-105"
            loading="eager"
            width="48"
            height="48"
          />
          <span class="text-sm font-semibold text-gold tracking-widest mt-1">SILK RIDE</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-2">
          <!-- Home -->
          <NuxtLink
            :to="localePath('/')"
            class="nav-link px-5 py-2 text-lg text-white hover:text-gold transition-colors relative group"
          >
            {{ $t('navbar.home') }}
            <span class="nav-underline"></span>
          </NuxtLink>

          <!-- Fleet -->
          <NuxtLink
            :to="localePath('/fleet')"
            class="nav-link px-5 py-2 text-lg text-white hover:text-gold transition-colors relative group"
          >
            {{ $t('navbar.fleet') }}
            <span class="nav-underline"></span>
          </NuxtLink>

          <!-- Services Mega Menu -->
          <div class="relative" @mouseenter="openServices" @mouseleave="closeServices">
            <button
              class="nav-link px-5 py-2 text-lg text-white hover:text-gold transition-colors flex items-center gap-1.5 relative group"
            >
              {{ $t('navbar.services') }}
              <svg class="w-4 h-4 transition-transform duration-200" :class="showServices ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
              <span class="nav-underline"></span>
            </button>

            <!-- Mega Menu Dropdown -->
            <Transition name="dropdown">
              <div
                v-show="showServices"
                class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-gray-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 overflow-hidden"
              >
                <div class="grid grid-cols-2 gap-0">
                  <!-- Services Column -->
                  <div class="p-5 border-r border-white/10">
                    <h4 class="text-gold text-xs font-semibold uppercase tracking-wider mb-4 px-3">
                      {{ $t('navbar.ourServices') }}
                    </h4>
                    <NuxtLink
                      v-for="item in servicesItems"
                      :key="item.path"
                      :to="item.path"
                      class="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      @click="closeServices"
                    >
                      <i :class="item.icon" class="text-gold text-xl"></i>
                      <span>{{ item.label }}</span>
                    </NuxtLink>
                  </div>

                  <!-- Airports Column -->
                  <div class="p-5 bg-black/20">
                    <h4 class="text-gold text-xs font-semibold uppercase tracking-wider mb-4 px-3">
                      {{ $t('navbar.airports') }}
                    </h4>
                    <NuxtLink
                      v-for="airport in airportItems"
                      :key="airport.path"
                      :to="airport.path"
                      class="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      @click="closeServices"
                    >
                      <i class="bx bx-plane-take-off text-gold text-xl"></i>
                      <span>{{ airport.label }}</span>
                    </NuxtLink>

                    <!-- View All Services Link -->
                    <NuxtLink
                      :to="localePath('/services')"
                      class="flex items-center gap-2 mt-4 px-3 py-2 text-gold font-medium hover:underline"
                      @click="closeServices"
                    >
                      {{ $t('navbar.viewAllServices') }}
                      <i class="bx bx-right-arrow-alt"></i>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Company Dropdown -->
          <div class="relative" @mouseenter="openCompany" @mouseleave="closeCompany">
            <button
              class="nav-link px-5 py-2 text-lg text-white hover:text-gold transition-colors flex items-center gap-1.5 relative group"
            >
              {{ $t('navbar.ourCompany') }}
              <svg class="w-4 h-4 transition-transform duration-200" :class="showCompany ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
              <span class="nav-underline"></span>
            </button>

            <Transition name="dropdown">
              <div
                v-show="showCompany"
                class="absolute top-full right-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 overflow-hidden py-2"
              >
                <NuxtLink
                  v-for="item in companyItems"
                  :key="item.path"
                  :to="item.path"
                  class="flex items-center gap-3 px-5 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                  @click="closeCompany"
                >
                  <i :class="item.icon" class="text-gold text-lg"></i>
                  <span>{{ item.label }}</span>
                </NuxtLink>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Desktop Actions -->
        <div class="hidden lg:flex items-center gap-3">
          <!-- Language Switch Button -->
          <LanguageSwitch />

          <!-- Login Button -->
          <NuxtLink
            :to="localePath('/customer')"
            class="flex items-center gap-2 px-5 py-2.5 text-white hover:text-gold border border-white/20 hover:border-gold/50 rounded-lg transition-all"
          >
            <i class="bx bx-user text-lg"></i>
            <span>{{ $t('navbar.registerLogin') }}</span>
          </NuxtLink>

          <!-- Book Now Button -->
          <NuxtLink
            :to="localePath('/booking')"
            class="flex items-center gap-2 px-6 py-2.5 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-colors"
          >
            <i class="bx bx-calendar-check text-lg"></i>
            <span>{{ $t('navbar.bookNow') }}</span>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button - Always visible with high z-index -->
        <div class="flex items-center gap-3 lg:hidden">
          <LanguageSwitch />
          <button
            @click="toggleMobileMenu"
            class="relative z-[100] p-2.5 text-white bg-black/70 backdrop-blur-md hover:bg-black/90 border border-white/30 rounded-lg transition-colors shadow-lg"
            :aria-expanded="mobileMenuOpen"
            aria-label="Toggle menu"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="mobile-menu">
      <div
        v-if="mobileMenuOpen"
        class="fixed top-0 left-0 right-0 bottom-0 w-full h-full min-h-screen bg-black z-[1000] lg:hidden overflow-y-auto"
      >
        <!-- Mobile Header -->
        <div class="flex items-center justify-between px-6 h-24 border-b border-white/10">
          <NuxtLink to="/" class="flex flex-col items-center" @click="closeMobileMenu">
            <NuxtImg src="/logo.svg" alt="Silk Ride Logo" class="h-12 w-12" width="48" height="48" />
            <span class="text-sm font-semibold text-gold tracking-widest mt-1">SILK RIDE</span>
          </NuxtLink>
          <button @click="closeMobileMenu" class="p-2.5 text-white bg-white/10 rounded-lg" aria-label="Close menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div class="px-6 py-8 space-y-2">
          <!-- Home -->
          <NuxtLink
            :to="localePath('/')"
            class="block py-4 text-xl text-white hover:text-gold border-b border-white/10"
            @click="closeMobileMenu"
          >
            {{ $t('navbar.home') }}
          </NuxtLink>

          <!-- Fleet -->
          <NuxtLink
            :to="localePath('/fleet')"
            class="block py-4 text-xl text-white hover:text-gold border-b border-white/10"
            @click="closeMobileMenu"
          >
            {{ $t('navbar.fleet') }}
          </NuxtLink>

          <!-- Services Accordion -->
          <div class="border-b border-white/10">
            <button
              @click="toggleMobileServices"
              class="w-full flex items-center justify-between py-4 text-xl text-white"
            >
              {{ $t('navbar.services') }}
              <i :class="mobileServicesOpen ? 'bx-chevron-up' : 'bx-chevron-down'" class="bx text-2xl"></i>
            </button>
            <div v-show="mobileServicesOpen" class="pb-4 space-y-1">
              <NuxtLink
                v-for="item in servicesItems"
                :key="item.path"
                :to="item.path"
                class="flex items-center gap-3 py-3 px-4 text-gray-400 hover:text-gold"
                @click="closeMobileMenu"
              >
                <i :class="item.icon" class="text-gold"></i>
                {{ item.label }}
              </NuxtLink>
              <div class="pt-2 px-4">
                <span class="text-xs text-gold uppercase tracking-wider">{{ $t('navbar.airports') }}</span>
              </div>
              <NuxtLink
                v-for="airport in airportItems"
                :key="airport.path"
                :to="airport.path"
                class="flex items-center gap-3 py-3 px-4 text-gray-400 hover:text-gold"
                @click="closeMobileMenu"
              >
                <i class="bx bx-plane-take-off text-gold"></i>
                {{ airport.label }}
              </NuxtLink>
            </div>
          </div>

          <!-- Company Accordion -->
          <div class="border-b border-white/10">
            <button
              @click="toggleMobileCompany"
              class="w-full flex items-center justify-between py-4 text-xl text-white"
            >
              {{ $t('navbar.ourCompany') }}
              <i :class="mobileCompanyOpen ? 'bx-chevron-up' : 'bx-chevron-down'" class="bx text-2xl"></i>
            </button>
            <div v-show="mobileCompanyOpen" class="pb-4 space-y-1">
              <NuxtLink
                v-for="item in companyItems"
                :key="item.path"
                :to="item.path"
                class="flex items-center gap-3 py-3 px-4 text-gray-400 hover:text-gold"
                @click="closeMobileMenu"
              >
                <i :class="item.icon" class="text-gold"></i>
                {{ item.label }}
              </NuxtLink>
            </div>
          </div>

          <!-- Mobile CTA Buttons -->
          <div class="pt-8 space-y-4">
            <NuxtLink
              :to="localePath('/customer')"
              class="flex items-center justify-center gap-2 w-full py-4 text-white border border-white/20 rounded-lg hover:bg-white/5"
              @click="closeMobileMenu"
            >
              <i class="bx bx-user text-xl"></i>
              {{ $t('navbar.registerLogin') }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/booking')"
              class="flex items-center justify-center gap-2 w-full py-4 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90"
              @click="closeMobileMenu"
            >
              <i class="bx bx-calendar-check text-xl"></i>
              {{ $t('navbar.bookNow') }}
            </NuxtLink>
          </div>

          <!-- Contact Info -->
          <div class="pt-8 text-center">
            <p class="text-gray-500 text-sm mb-2">{{ $t('navbar.needHelp') }}</p>
            <a href="tel:+447512905514" class="text-gold text-lg font-medium">
              +44 7512 905514
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useLocalePath } from '#imports'

const localePath = useLocalePath()
const router = useRouter()
const { t } = useI18n()

// State
const isScrolled = ref(false)
const showServices = ref(false)
const showCompany = ref(false)
const mobileMenuOpen = ref(false)
const mobileServicesOpen = ref(false)
const mobileCompanyOpen = ref(false)

// Dropdown timers
let servicesTimer = null
let companyTimer = null

// Services items with icons
const servicesItems = [
  { path: localePath('/services/airport-transfers'), label: t('navbar.servicesDropdown.airport'), icon: 'bx bx-car' },
  { path: localePath('/services/corporate-travel'), label: t('navbar.servicesDropdown.corporate'), icon: 'bx bx-briefcase' },
  { path: localePath('/services/wedding-chauffeur'), label: t('navbar.servicesDropdown.wedding'), icon: 'bx bx-heart' },
  { path: localePath('/services/hourly-chauffeur'), label: t('navbar.servicesDropdown.hourly'), icon: 'bx bx-time' },
  { path: localePath('/services/event-chauffeur'), label: t('navbar.servicesDropdown.event'), icon: 'bx bx-calendar-star' },
  { path: localePath('/services/uk-europe-travel'), label: t('navbar.servicesDropdown.ukEurope'), icon: 'bx bx-globe' }
]

// Airport items
const airportItems = [
  { path: localePath('/airport-transfers/heathrow'), label: t('navbar.airportsDropdown.heathrow') },
  { path: localePath('/airport-transfers/gatwick'), label: t('navbar.airportsDropdown.gatwick') },
  { path: localePath('/airport-transfers/stansted'), label: t('navbar.airportsDropdown.stansted') },
  { path: localePath('/airport-transfers/luton'), label: t('navbar.airportsDropdown.luton') }
]

// Company items with icons
const companyItems = [
  { path: localePath('/about'), label: t('navbar.about'), icon: 'bx bx-info-circle' },
  { path: localePath('/partners'), label: t('navbar.partners'), icon: 'bx bx-group' },
  { path: localePath('/contact-us'), label: t('navbar.contact'), icon: 'bx bx-envelope' },
  { path: localePath('/faq'), label: 'FAQ', icon: 'bx bx-help-circle' }
]

// Desktop dropdown functions
const openServices = () => {
  clearTimeout(servicesTimer)
  showServices.value = true
  showCompany.value = false
}

const closeServices = () => {
  servicesTimer = setTimeout(() => {
    showServices.value = false
  }, 150)
}

const openCompany = () => {
  clearTimeout(companyTimer)
  showCompany.value = true
  showServices.value = false
}

const closeCompany = () => {
  companyTimer = setTimeout(() => {
    showCompany.value = false
  }, 150)
}

// Mobile menu functions
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  mobileServicesOpen.value = false
  mobileCompanyOpen.value = false
  document.body.style.overflow = ''
}

const toggleMobileServices = () => {
  mobileServicesOpen.value = !mobileServicesOpen.value
  mobileCompanyOpen.value = false
}

const toggleMobileCompany = () => {
  mobileCompanyOpen.value = !mobileCompanyOpen.value
  mobileServicesOpen.value = false
}

// Scroll handler
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  router.afterEach(() => closeMobileMenu())
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.nav-underline {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #D4AF37, transparent);
  transition: width 0.3s ease;
}

.nav-link:hover .nav-underline,
.group:hover .nav-underline {
  width: 80%;
}

/* Dropdown transitions */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Mobile menu transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}
</style>
