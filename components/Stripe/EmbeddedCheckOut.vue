<template>
    <div>
      <button @click="startCheckout">Start Embedded Checkout</button>
    </div>
  </template>
  
  <script setup>
  import { inject, ref } from 'vue'
  
  const stripePromise = inject('stripePromise')
  const checkoutOptions = inject('checkoutOptions')
  const clientSecret = ref(null)
  
  const startCheckout = async () => {
    // Call the provided fetchClientSecret function
    clientSecret.value = await checkoutOptions.fetchClientSecret()
    console.log('Client Secret:', clientSecret.value)

  }
  </script>