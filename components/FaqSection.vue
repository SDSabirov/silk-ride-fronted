<template>
  <section class="faq-section max-w-4xl mx-auto px-4">
    <slot name="title">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-black mb-4">{{ $t('faq.title') }}</h2>
        <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Find answers to the most common questions about our luxury chauffeur services
        </p>
      </div>
    </slot>
    
    <div class="space-y-4">
      <div 
        v-for="(item, index) in items" 
        :key="index" 
        class="faq-item bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
        :class="{ 'ring-2 ring-gold ring-opacity-50': opened[index] }"
      >
        <button
          class="w-full text-left p-6 font-medium flex justify-between items-start gap-4 hover:bg-gray-50 transition-colors duration-200 group"
          @click="toggle(index)"
          :aria-expanded="opened[index]"
          :aria-controls="`faq-${index}`"
        >
          <span class="text-lg font-semibold text-gray-900 group-hover:text-black transition-colors duration-200 flex-1">
            {{ item.question }}
          </span>
          <div class="flex-shrink-0 mt-1">
            <div 
              :class="{ 'rotate-180 bg-gold text-black': opened[index], 'bg-gray-200 text-gray-600': !opened[index] }"
              class="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-gold group-hover:text-black"
            >
              <svg class="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </button>
        
        <transition
          name="slide-fade"
          @enter="onEnter"
          @leave="onLeave"
        >
          <div
            v-show="opened[index]"
            :id="`faq-${index}`"
            class="px-6 pb-6"
          >
            <div class="border-t border-gray-100 pt-4">
              <p class="text-gray-700 leading-relaxed text-base">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </transition>
      </div>
    </div>
    
    <!-- Contact CTA -->
    <div class="mt-12 text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
      <h3 class="text-2xl font-heading font-semibold text-gray-900 mb-3">
        Still have questions?
      </h3>
      <p class="text-gray-600 mb-6">
        Our friendly team is here to help with any additional questions about our luxury chauffeur services.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          :to="localePath('/contact-us')"
          class="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
        >
          Contact Us
        </NuxtLink>
        <a
          href="tel:+447512905514"
          class="inline-flex items-center justify-center px-6 py-3 bg-gold text-black rounded-lg hover:bg-gold/90 transition-colors duration-200 font-medium"
        >
          Call Now
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick } from "vue";
import { useLocalePath } from '#imports'

const localePath = useLocalePath()

defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const opened = ref([]);

function toggle(index) {
  opened.value[index] = !opened.value[index];
}

// Smooth transition functions
function onEnter(el) {
  el.style.height = '0px';
  el.style.overflow = 'hidden';
  nextTick(() => {
    el.style.height = `${el.scrollHeight}px`;
    el.style.transition = 'height 0.3s ease-out';
  });
}

function onLeave(el) {
  el.style.height = `${el.scrollHeight}px`;
  el.style.overflow = 'hidden';
  nextTick(() => {
    el.style.height = '0px';
    el.style.transition = 'height 0.3s ease-out';
  });
}
</script>

<style scoped>
.faq-section button:focus {
  outline: 2px solid #FFCB6C;
  outline-offset: 2px;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.faq-item:hover {
  transform: translateY(-2px);
}

.faq-item {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhance the gold accent line animation */
.w-24.h-1.bg-gold {
  animation: fadeUp 0.8s ease-out 0.3s both;
}

/* Stagger animation for FAQ items */
.faq-item:nth-child(1) { animation: fadeUp 0.6s ease-out 0.1s both; }
.faq-item:nth-child(2) { animation: fadeUp 0.6s ease-out 0.2s both; }
.faq-item:nth-child(3) { animation: fadeUp 0.6s ease-out 0.3s both; }
.faq-item:nth-child(4) { animation: fadeUp 0.6s ease-out 0.4s both; }
.faq-item:nth-child(5) { animation: fadeUp 0.6s ease-out 0.5s both; }
.faq-item:nth-child(n+6) { animation: fadeUp 0.6s ease-out 0.6s both; }

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
