<template>
    <div class="relative inline-block">
      <button
        @click="toggleDropdown"
        class="flex items-center px-2 md:px-4 py-2 rounded-md bg-transparent text-white shadow"
      >
        <img :src="currentFlag" alt="flag" class="w-5 h-5 mr-2" />
        {{ currentLabel }}
        <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
  
      <div v-if="isOpen" class="absolute right-0 mt-2 w-40 bg-black/80 border rounded shadow z-10">
        <ul>
          <li
            v-for="locale in locales"
            :key="locale.code"
            @click="changeLanguage(locale.code)"
            class="flex items-center px-4 py-2 cursor-pointer hover:text-gold"
          >
            <img :src="locale.flag" alt="flag" class="w-5 h-5 mr-2" />
            {{ locale.label }}
          </li>
        </ul>
      </div>
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
  
  const changeLanguage = async (code) => {
    await setLocale(code)
    isOpen.value = false
  }
  </script>