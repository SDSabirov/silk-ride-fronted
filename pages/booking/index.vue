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
          <!-- LEFT — Iframe Container -->
          <div class="flex-1 min-w-0">
            <div class="glass-card overflow-hidden">
              <!-- Card header -->
              <div class="px-6 pt-6 pb-4 border-b border-white/[0.08]">
                
                <div class="w-16 h-0.5 bg-gold mb-3"></div>
                <p class="text-gray-400 text-sm">
                  {{ $t('bookingPage.formIntro') }}
                </p>
              </div>

              <!-- Iframe -->
              <div class="p-2 sm:p-6">
                <EasyTaxiWidgetBooking />
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
