<template>
  <div v-if="show" class="fixed bottom-0 left-0 w-full bg-white shadow p-4 z-50 text-sm">
    <div class="max-w-screen-lg mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-gray-800">
        We use cookies to improve your experience. Accepting all allows us to use analytics and advertising cookies.
      </p>
      <div class="flex gap-3">
        <button @click="acceptAll" class="bg-black text-white px-4 py-2 rounded">Accept All</button>
        <button @click="essentialsOnly" class="bg-gray-200 px-4 py-2 rounded">Essentials Only</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'


const show = ref(false)
const { gtag } = useGtag()

onMounted(() => {
  const consent = localStorage.getItem('cookie_consent')
  if (!consent) {
    show.value = true
  } else if (consent === 'accepted') {
    allConsentGranted()
  } else if (consent === 'essentials') {
    consentGrantedAdStorage()
  }
})

function acceptAll() {
  localStorage.setItem('cookie_consent', 'accepted')
  allConsentGranted()
  show.value = false
}

function essentialsOnly() {
  localStorage.setItem('cookie_consent', 'essentials')
  consentGrantedAdStorage()
  show.value = false
}

function allConsentGranted() {
  gtag('consent', 'update', {
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    ad_storage: 'granted',
    analytics_storage: 'granted'
  })
}

function consentGrantedAdStorage() {
  gtag('consent', 'update', {
    ad_storage: 'granted'
  })
}
</script>