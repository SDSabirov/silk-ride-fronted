<template>
  <footer class="bg-gradient-to-b from-gray-900 to-black text-white">
    <!-- Gold accent line -->
    <div class="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

    <!-- Trust Badges Section -->
    <div class="border-b border-white/10">
      <div class="max-w-screen-2xl mx-auto px-6 py-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
              <i class="bx bx-shield-quarter text-gold text-2xl"></i>
            </div>
            <div>
              <p class="text-white font-semibold text-sm">{{ $t('footer.badges.licensed') }}</p>
              <p class="text-gray-500 text-xs">{{ $t('footer.badges.licensedSub') }}</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
              <i class="bx bxs-star text-gold text-2xl"></i>
            </div>
            <div>
              <p class="text-white font-semibold text-sm">5.0 {{ $t('footer.badges.rating') }}</p>
              <p class="text-gray-500 text-xs">Google Reviews</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
              <i class="bx bx-time-five text-gold text-2xl"></i>
            </div>
            <div>
              <p class="text-white font-semibold text-sm">24/7</p>
              <p class="text-gray-500 text-xs">{{ $t('footer.badges.availability') }}</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
              <i class="bx bx-check-shield text-gold text-2xl"></i>
            </div>
            <div>
              <p class="text-white font-semibold text-sm">{{ $t('footer.badges.insured') }}</p>
              <p class="text-gray-500 text-xs">{{ $t('footer.badges.insuredSub') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Footer Content -->
    <div class="max-w-screen-2xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Column 1: Logo & About -->
        <div class="lg:col-span-1">
          <NuxtLink to="/" class="flex items-center gap-3 mb-6">
            <NuxtImg
              src="/logo.svg"
              alt="Silk Ride Logo"
              class="h-12 w-12"
              loading="lazy"
              width="48"
              height="48"
            />
            <span class="text-2xl font-semibold text-gold">SILK RIDE</span>
          </NuxtLink>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            {{ $t('footer.description') }}
          </p>
          <!-- Social Links -->
          <div class="flex gap-3">
            <a
              href="https://www.instagram.com/silkrideofficial"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-white/5 hover:bg-gold/20 flex items-center justify-center text-gray-400 hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <i class="bx bxl-instagram text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/silk-ride"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-white/5 hover:bg-gold/20 flex items-center justify-center text-gray-400 hover:text-gold transition-colors"
              aria-label="LinkedIn"
            >
              <i class="bx bxl-linkedin text-xl"></i>
            </a>
            <a
              href="https://wa.me/447512905514"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-white/5 hover:bg-gold/20 flex items-center justify-center text-gray-400 hover:text-gold transition-colors"
              aria-label="WhatsApp"
            >
              <i class="bx bxl-whatsapp text-xl"></i>
            </a>
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div>
          <h4 class="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
            {{ $t('footer.quickLinks.title') }}
          </h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink :to="localePath('/about')" class="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2">
                <i class="bx bx-chevron-right text-gold"></i>
                {{ $t('footer.quickLinks.about') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/fleet')" class="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2">
                <i class="bx bx-chevron-right text-gold"></i>
                {{ $t('footer.quickLinks.fleet') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/services')" class="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2">
                <i class="bx bx-chevron-right text-gold"></i>
                {{ $t('footer.quickLinks.services') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/faq')" class="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2">
                <i class="bx bx-chevron-right text-gold"></i>
                FAQ
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/partners')" class="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2">
                <i class="bx bx-chevron-right text-gold"></i>
                {{ $t('footer.quickLinks.partners') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: Services -->
        <div>
          <h4 class="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
            {{ $t('footer.services.title') }}
          </h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink :to="localePath('/services/airport-transfers')" class="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2">
                <i class="bx bx-chevron-right text-gold"></i>
                {{ $t('footer.services.airport') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/services/corporate-travel')" class="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2">
                <i class="bx bx-chevron-right text-gold"></i>
                {{ $t('footer.services.corporate') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/services/wedding-chauffeur')" class="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2">
                <i class="bx bx-chevron-right text-gold"></i>
                {{ $t('footer.services.wedding') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/services/hourly-chauffeur')" class="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2">
                <i class="bx bx-chevron-right text-gold"></i>
                {{ $t('footer.services.hourly') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/services/event-chauffeur')" class="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2">
                <i class="bx bx-chevron-right text-gold"></i>
                {{ $t('footer.services.event') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 4: Contact & CTA -->
        <div>
          <h4 class="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
            {{ $t('footer.contact.title') }}
          </h4>
          <ul class="space-y-4 mb-6">
            <li class="flex items-start gap-3">
              <i class="bx bx-phone text-gold text-lg mt-0.5"></i>
              <div>
                <p class="text-gray-500 text-xs">{{ $t('footer.contact.phone') }}</p>
                <a href="tel:+447512905514" class="text-white hover:text-gold transition-colors">
                  +44 7512 905514
                </a>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <i class="bx bx-envelope text-gold text-lg mt-0.5"></i>
              <div>
                <p class="text-gray-500 text-xs">{{ $t('footer.contact.email') }}</p>
                <a href="mailto:info@silkride.co.uk" class="text-white hover:text-gold transition-colors">
                  info@silkride.co.uk
                </a>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <i class="bx bx-map text-gold text-lg mt-0.5"></i>
              <div>
                <p class="text-gray-500 text-xs">{{ $t('footer.contact.location') }}</p>
                <p class="text-white">London, United Kingdom</p>
              </div>
            </li>
          </ul>

          <!-- CTA Button -->
          <NuxtLink
            :to="localePath('/booking')"
            class="inline-flex items-center justify-center gap-2 w-full bg-gold text-black py-3 px-6 rounded-lg font-semibold hover:bg-gold/90 transition-colors text-sm"
          >
            <i class="bx bx-calendar"></i>
            {{ $t('footer.bookNow') }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/10">
      <div class="max-w-screen-2xl mx-auto px-6 py-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <!-- Copyright -->
          <p class="text-gray-500 text-sm text-center md:text-left">
            &copy; {{ currentYear }} Silk Ride Ltd. {{ $t('footer.rights') }}
          </p>

          <!-- Legal Links -->
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <NuxtLink :to="localePath('/terms-of-service')" class="text-gray-500 hover:text-gold transition-colors">
                {{ $t('footer.bottom.terms') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/privacy-policy')" class="text-gray-500 hover:text-gold transition-colors">
                {{ $t('footer.bottom.privacy') }}
              </NuxtLink>
            </li>
          </ul>

          <!-- Payment Methods -->
          <div class="flex items-center gap-2">
            <span class="text-gray-600 text-xs mr-2">{{ $t('footer.paymentMethods') }}</span>
            <i class="bx bxl-visa text-2xl text-gray-500"></i>
            <i class="bx bxl-mastercard text-2xl text-gray-500"></i>
            <i class="bx bxl-apple text-xl text-gray-500"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useLocalePath } from '#imports'

const localePath = useLocalePath()
const currentYear = new Date().getFullYear()
</script>
