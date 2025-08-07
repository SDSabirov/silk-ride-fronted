<template>
  <Transition name="slide-up" appear>
    <div 
      v-if="show" 
      class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg p-4 z-[9998] text-sm"
      role="dialog"
      aria-labelledby="consent-title"
      aria-describedby="consent-description"
    >
      <div class="max-w-screen-lg mx-auto">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="flex-1">
            <h3 id="consent-title" class="font-semibold text-gray-900 mb-1">Cookie Preferences</h3>
            <p id="consent-description" class="text-gray-700 mb-2">
              We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic. 
              You can choose which types of cookies to allow.
            </p>
            <div class="flex flex-wrap gap-4 text-xs">
              <NuxtLink to="/privacy-policy" class="text-blue-600 hover:underline">Privacy Policy</NuxtLink>
              <button @click="showDetails = !showDetails" class="text-blue-600 hover:underline">
                {{ showDetails ? 'Hide Details' : 'Cookie Details' }}
              </button>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-2 min-w-fit">
            <button 
              @click="acceptAll" 
              class="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
              aria-label="Accept all cookies"
            >
              Accept All
            </button>
            <button 
              @click="essentialsOnly" 
              class="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Accept essential cookies only"
            >
              Essentials Only
            </button>
            <button 
              @click="showCustomize = true" 
              class="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Customize cookie preferences"
            >
              Customize
            </button>
          </div>
        </div>
        
        <!-- Cookie Details -->
        <Transition name="expand">
          <div v-if="showDetails" class="mt-4 pt-4 border-t border-gray-200">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <h4 class="font-semibold mb-1">Essential Cookies</h4>
                <p class="text-gray-600">Required for basic website functionality and cannot be disabled.</p>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Analytics Cookies</h4>
                <p class="text-gray-600">Help us understand how visitors use our website to improve user experience.</p>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Advertising Cookies</h4>
                <p class="text-gray-600">Used to deliver personalized advertisements based on your interests.</p>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Functional Cookies</h4>
                <p class="text-gray-600">Enable enhanced functionality and personalization features.</p>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </Transition>

  <!-- Customize Modal -->
  <Transition name="fade">
    <div v-if="showCustomize" class="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4">
      <div class="bg-white rounded-lg p-6 max-w-md w-full max-h-90vh overflow-y-auto relative z-[10000]">
        <h3 class="text-lg font-semibold mb-4">Customize Cookie Preferences</h3>
        
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h4 class="font-medium">Essential Cookies</h4>
              <p class="text-sm text-gray-600">Always active</p>
            </div>
            <input type="checkbox" checked disabled class="rounded">
          </div>
          
          <div class="flex items-center justify-between">
            <div>
              <h4 class="font-medium">Analytics Cookies</h4>
              <p class="text-sm text-gray-600">Help improve our website</p>
            </div>
            <input 
              type="checkbox" 
              v-model="customPreferences.analytics" 
              class="rounded focus:ring-2 focus:ring-gray-500"
            >
          </div>
          
          <div class="flex items-center justify-between">
            <div>
              <h4 class="font-medium">Advertising Cookies</h4>
              <p class="text-sm text-gray-600">Personalized ads</p>
            </div>
            <input 
              type="checkbox" 
              v-model="customPreferences.advertising" 
              class="rounded focus:ring-2 focus:ring-gray-500"
            >
          </div>
          
          <div class="flex items-center justify-between">
            <div>
              <h4 class="font-medium">Functional Cookies</h4>
              <p class="text-sm text-gray-600">Enhanced features</p>
            </div>
            <input 
              type="checkbox" 
              v-model="customPreferences.functional" 
              class="rounded focus:ring-2 focus:ring-gray-500"
            >
          </div>
        </div>
        
        <div class="flex gap-3 mt-6">
          <button 
            @click="saveCustomPreferences" 
            class="flex-1 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
          >
            Save Preferences
          </button>
          <button 
            @click="showCustomize = false" 
            class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { onMounted, onUnmounted, ref, reactive } from 'vue'

const show = ref(false)
const showDetails = ref(false)
const showCustomize = ref(false)
const { gtag } = useGtag()

const customPreferences = reactive({
  analytics: true,
  advertising: true,
  functional: true
})

onMounted(() => {
  try {
    const consent = localStorage.getItem('cookie_consent')
    const consentDate = localStorage.getItem('cookie_consent_date')
    
    // Check if consent is older than 12 months
    if (consentDate) {
      const consentTime = new Date(consentDate).getTime()
      const oneYear = 365 * 24 * 60 * 60 * 1000
      if (Date.now() - consentTime > oneYear) {
        localStorage.removeItem('cookie_consent')
        localStorage.removeItem('cookie_consent_date')
        localStorage.removeItem('cookie_preferences')
        show.value = true
        return
      }
    }
    
    if (!consent) {
      // Delay showing banner slightly for better UX
      setTimeout(() => {
        show.value = true
      }, 1000)
    } else {
      const preferences = JSON.parse(localStorage.getItem('cookie_preferences') || '{}')
      applyConsentSettings(consent, preferences)
    }
  } catch (error) {
    console.warn('Error reading cookie consent:', error)
    show.value = true
  }
})

function acceptAll() {
  const preferences = {
    essential: true,
    analytics: true,
    advertising: true,
    functional: true
  }
  
  saveConsent('all', preferences)
  applyConsentSettings('all', preferences)
  show.value = false
}

function essentialsOnly() {
  const preferences = {
    essential: true,
    analytics: false,
    advertising: false,
    functional: false
  }
  
  saveConsent('essentials', preferences)
  applyConsentSettings('essentials', preferences)
  show.value = false
}

function saveCustomPreferences() {
  const preferences = {
    essential: true,
    analytics: customPreferences.analytics,
    advertising: customPreferences.advertising,
    functional: customPreferences.functional
  }
  
  const consentType = 'custom'
  saveConsent(consentType, preferences)
  applyConsentSettings(consentType, preferences)
  
  showCustomize.value = false
  show.value = false
}

function saveConsent(type, preferences) {
  try {
    localStorage.setItem('cookie_consent', type)
    localStorage.setItem('cookie_consent_date', new Date().toISOString())
    localStorage.setItem('cookie_preferences', JSON.stringify(preferences))
  } catch (error) {
    console.error('Error saving cookie consent:', error)
  }
}

function applyConsentSettings(consentType, preferences = {}) {
  try {
    if (consentType === 'all') {
      grantAllConsent()
    } else if (consentType === 'essentials') {
      grantEssentialOnly()
    } else if (consentType === 'custom') {
      grantCustomConsent(preferences)
    }
  } catch (error) {
    console.error('Error applying consent settings:', error)
  }
}

function grantAllConsent() {
  if (typeof gtag !== 'undefined') {
    gtag('consent', 'update', {
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      ad_storage: 'granted',
      analytics_storage: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'granted'
    })
  }
}

function grantEssentialOnly() {
  if (typeof gtag !== 'undefined') {
    gtag('consent', 'update', {
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      ad_storage: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied'
    })
  }
}

function grantCustomConsent(preferences) {
  if (typeof gtag !== 'undefined') {
    gtag('consent', 'update', {
      ad_user_data: preferences.advertising ? 'granted' : 'denied',
      ad_personalization: preferences.advertising ? 'granted' : 'denied',
      ad_storage: preferences.advertising ? 'granted' : 'denied',
      analytics_storage: preferences.analytics ? 'granted' : 'denied',
      functionality_storage: preferences.functional ? 'granted' : 'denied',
      personalization_storage: preferences.functional ? 'granted' : 'denied'
    })
  }
}

// Handle escape key to close modal
function handleEscape(event) {
  if (event.key === 'Escape' && showCustomize.value) {
    showCustomize.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-up-enter-from {
  transform: translateY(100%);
}

.slide-up-leave-to {
  transform: translateY(100%);
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  height: 0;
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.max-h-90vh {
  max-height: 90vh;
}
</style>