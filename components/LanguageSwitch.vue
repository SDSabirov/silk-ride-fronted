<template>
  <div class="relative inline-block">
    <button
      @click="toggleDropdown"
      class="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-gold/50 text-white transition-all"
    >
      <NuxtImg :src="currentFlag" alt="language flag" class="w-5 h-5 rounded-sm" width="20" height="20" loading="eager" />
      <span class="text-sm font-medium">{{ currentLabel }}</span>
      <svg
        class="w-4 h-4 transition-transform duration-200"
        :class="isOpen ? 'rotate-180' : ''"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <Transition name="dropdown">
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-44 bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50"
      >
        <ul class="py-2">
          <li
            v-for="locale in locales"
            :key="locale.code"
            @click="changeLanguage(locale.code)"
            class="flex items-center gap-3 px-4 py-3 cursor-pointer text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            <NuxtImg :src="locale.flag" :alt="`${locale.label} flag`" class="w-5 h-5 rounded-sm" width="20" height="20" loading="lazy" />
            <span>{{ locale.label }}</span>
            <i v-if="locale.code === currentLocale" class="bx bx-check text-gold ml-auto"></i>
          </li>
        </ul>
      </div>
    </Transition>

    <!-- Click outside to close -->
    <div v-if="isOpen" class="fixed inset-0 z-40" @click="isOpen = false"></div>
  </div>
</template>

<script setup>
import { useI18n } from '#imports'
import { ref, computed } from 'vue'

const { locales, locale, setLocale } = useI18n()

const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const current = computed(() =>
  locales.value.find((l) => l.code === locale.value)
)

const currentFlag = computed(() => current.value?.flag || '')
const currentLabel = computed(() => current.value?.label || '')
const currentLocale = computed(() => locale.value)

const changeLanguage = async (code) => {
  await setLocale(code)
  isOpen.value = false
}
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
