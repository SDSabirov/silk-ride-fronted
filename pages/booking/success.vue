<template>
    <div class="w-full flex flex-col max-w-screen-2xl mx-auto items-center justify-center h-screen space-y-6">
      <h1 class="text-2xl font-semibold text-center">Payment Success</h1>
      <div v-if="loading" class="text-lg text-center">Loading payment details…</div>
      <div v-else>
        <p class="text-lg text-center">Payment status: <strong>{{ paymentStatus }}</strong></p>
        <p v-if="customerEmail" class="text-lg text-center">
          A confirmation email has been sent to <strong>{{ customerEmail }}</strong>.
        </p>
      </div>
      <div class="w-full flex items-center justify-center">
      <NuxtLink
        class="py-3 px-10 bg-black text-white font-medium text-lg rounded-sm hover:bg-gold hover:text-black transition-color duration-500 whitespace-nowrap"
        to="/"
        >Return to Home Page</NuxtLink
      >
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  const paymentStatus = ref('')
  const customerEmail = ref('')
  const loading = ref(true)
  const route = useRoute()

  onMounted(async () => {
    const sessionId = route.query.session_id
    if (sessionId) {
      try {
        // Query your backend to retrieve the session status
        const response = await fetch(`http://127.0.0.1:8000/api/session-status/?session_id=${sessionId}`)
        const data = await response.json()
        paymentStatus.value = data.status
        customerEmail.value = data.customer_email
      } catch (error) {
        console.error('Error retrieving session status:', error)
      }
    }
    loading.value = false
  })
  </script>