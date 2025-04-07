<template>
    <div>
      <slot />
    </div>
  </template>
  
  <script setup>
  import { provide } from 'vue'
  
  const props = defineProps({
    stripePromise: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      required: true
    }
  })
  
  // Provide the Stripe promise and options to child components
  provide('stripePromise', props.stripePromise)
  provide('checkoutOptions', props.options)
  </script>