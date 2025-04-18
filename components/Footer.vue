<template>
  <footer class="bg-black text-white py-8">
    <div class="max-w-screen-xl mx-auto px-4">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
        <!-- Company Info -->
        <div class="hidden md:block">
          <div class="flex space-x-2 items-center mb-4">
            <img src="/logo.svg" alt="Silk Ride Logo" class="h-12 w-12" />
            <h2 class="text-3xl font-semibold text-gold">SILK RIDE</h2>
          </div>
          <p class="text-gray-300">
            {{ $t('footer.description') }}
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-bold mb-3">{{ $t('footer.quickLinks.title') }}</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink :to="localePath('/about')" class="text-gray-400 hover:text-white">
                {{ $t('footer.quickLinks.about') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/fleet')" class="text-gray-400 hover:text-white">
                {{ $t('footer.quickLinks.fleet') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/services')" class="text-gray-400 hover:text-white">
                {{ $t('footer.quickLinks.services') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/blog')" class="text-gray-400 hover:text-white">
                {{ $t('footer.quickLinks.blog') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact and Social Media -->
        <div class="space-y-4 ">
          <h3 class="text-lg font-bold mb-3">{{ $t('footer.contact.title') }}</h3>
          <p class="text-gray-400">
            {{ $t('footer.contact.phone') }}:
            <a href="tel:+447512905514" class="whitespace-nowrap">+44 7512 905514</a>
          </p>
          <p class="text-gray-400">
            {{ $t('footer.contact.email') }}:
            <a href="mailto:info@silkride.co.uk">info@silkride.co.uk</a>
          </p>
          <div class="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/silkrideofficial" target="_blank" class="text-gray-400 hover:text-white">
              <i class="bx bxl-instagram bx-sm"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="bx bxl-facebook-circle bx-sm"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="bx bxl-linkedin-square bx-sm"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="bx bxl-whatsapp bx-sm"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="mt-8 text-center text-gray-400 flex justify-between items-center flex-col md:flex-row space-y-2 md:space-y-0">
        <p>&copy; 2025 Silk Ride. {{ $t('footer.rights') }}</p>
        <ul class="flex space-x-4">
          <li>
            <NuxtLink :to="localePath('/terms-of-service')" class="text-gray-400 hover:text-white">
              {{ $t('footer.bottom.terms') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/privacy-policy')" class="text-gray-400 hover:text-white">
              {{ $t('footer.bottom.privacy') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/faq')" class="text-gray-400 hover:text-white">
              {{ $t('footer.bottom.faq') }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useLocalePath } from '#imports'
const localePath = useLocalePath()
</script>