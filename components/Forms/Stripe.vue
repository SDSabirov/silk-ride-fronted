<template>
    <div>
      <h1>Pay with Card</h1>
      <form @submit.prevent="handleSubmit">
        <div id="card-element"></div>
        <button type="submit">Pay</button>
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const stripe = ref(null)
  const card = ref(null)
  const errorMessage = ref("")
  
  const initializeStripe = () => {
    stripe.value = Stripe('your-publishable-key')  // Replace with your Stripe publishable key
    const elements = stripe.value.elements()
    const style = {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
    card.value = elements.create("card", { style })
    card.value.mount("#card-element")
    card.value.on('change', (event) => {
      errorMessage.value = event.error ? event.error.message : ""
    })
  }
  
  onMounted(() => {
    if (!window.Stripe) {
      const script = document.createElement('script')
      script.src = 'https://js.stripe.com/v3/'
      script.onload = initializeStripe
      document.head.appendChild(script)
    } else {
      initializeStripe()
    }
  })
  
  const handleSubmit = async () => {
    // Create a PaymentMethod using the card Element
    const { error, paymentMethod } = await stripe.value.createPaymentMethod({
      type: 'card',
      card: card.value,
    })
    if (error) {
      errorMessage.value = error.message
    } else {
      try {
        // Adjust the URL to match your Django server (e.g., http://localhost:8000)
        const response = await fetch('http://localhost:8000/api/create-payment-intent/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ payment_method: paymentMethod.id })
        })
        const paymentIntent = await response.json()
        // Confirm the PaymentIntent on the client side
        const confirmResult = await stripe.value.confirmCardPayment(paymentIntent.client_secret, {
          payment_method: paymentMethod.id,
        })
        if (confirmResult.error) {
          errorMessage.value = confirmResult.error.message
        } else if (confirmResult.paymentIntent && confirmResult.paymentIntent.status === 'succeeded') {
          alert('Payment succeeded!')
        }
      } catch (err) {
        errorMessage.value = err.message
      }
    }
  }
  </script>
  
  <style scoped>
  .error {
    color: #fa755a;
    margin-top: 10px;
  }
  </style>