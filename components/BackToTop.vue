<template>
  <Transition name="fade">
    <button
      v-if="showButton"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-gold text-black p-3 rounded-full shadow-lg hover:bg-gold/90 hover:scale-110 active:scale-95 transition-all duration-200 z-50 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 group"
      aria-label="Back to top"
    >
      <i class="bx bx-chevron-up text-xl group-hover:animate-bounce"></i>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}
</style>