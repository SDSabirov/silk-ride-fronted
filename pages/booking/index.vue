<template>
  <div>
    <Navbar />
    <BookingHeroCompact />

    <!-- Breadcrumbs -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <CommonBreadcrumbs :items="breadcrumbs" />
    </div>

    <!-- Main Content -->
    <section class="bg-[#0E0E14] relative">
      <!-- Gold accent line -->
      <div class="h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.4)] to-transparent"></div>

      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <!-- LEFT — Booking options -->
          <div class="flex-1 min-w-0">
            <div class="glass-card overflow-hidden">
              <!-- Card header -->
              <div class="px-6 pt-6 pb-4 border-b border-white/[0.08]">
                
                <div class="w-16 h-0.5 bg-gold mb-3"></div>
                <p class="text-gray-400 text-sm">
                  {{ $t('bookingPage.formIntro') }}
                </p>
              </div>

              <!-- Chat-first booking -->
              <div class="p-6 sm:p-10">
                <div class="text-center max-w-lg mx-auto">
                  <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <i class="bx bx-chat text-gold text-3xl" aria-hidden="true"></i>
                  </div>
                  <h2 class="text-white text-2xl font-semibold mb-4">
                    {{ $t('bookingPage.chatTitle') }}
                  </h2>
                  <p class="text-gray-400 text-sm leading-relaxed mb-3">
                    {{ $t('bookingPage.chatText') }}
                  </p>
                  <p class="text-gold/80 text-xs tracking-wide uppercase mb-8">
                    <i class="bx bx-down-arrow-alt align-middle" aria-hidden="true"></i>
                    {{ $t('bookingPage.chatHint') }}
                  </p>

                  <div class="flex items-center gap-4 mb-8">
                    <span class="flex-1 h-px bg-white/[0.08]" aria-hidden="true"></span>
                    <span class="text-gray-500 text-xs uppercase tracking-wider">{{ $t('bookingPage.orContact') }}</span>
                    <span class="flex-1 h-px bg-white/[0.08]" aria-hidden="true"></span>
                  </div>

                  <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:+442034882324"
                      class="flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-colors"
                    >
                      <i class="bx bx-phone text-lg" aria-hidden="true"></i>
                      {{ $t('bookingPage.callUs') }}
                    </a>
                    <a
                      href="mailto:info@silkride.co.uk"
                      class="flex items-center justify-center gap-2 px-6 py-3.5 text-white border border-white/20 rounded-lg hover:border-gold/50 hover:text-gold transition-all"
                    >
                      <i class="bx bx-envelope text-lg" aria-hidden="true"></i>
                      {{ $t('bookingPage.emailUs') }}
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- RIGHT — Info Sidebar (desktop only) -->
          <div class="hidden lg:block w-[340px] flex-shrink-0">
            <div class="sticky top-8">
              <BookingInfoSidebar />
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { useSeo } from "~/utils/useSeo";

const { t } = useI18n()

const breadcrumbs = computed(() => [
  { name: t('bookingPage.breadcrumbHome'), path: '/' },
  { name: t('bookingPage.breadcrumbBooking'), path: '/booking' },
])

useSeo("booking");
</script>
