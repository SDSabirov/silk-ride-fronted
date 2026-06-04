<template>
  <div>
    <Navbar />

    <!-- Hero band -->
    <section class="relative overflow-hidden bg-gray-950 py-20 text-white sm:py-24 lg:py-28">
      <div class="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"></div>
      <div class="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl"></div>
      <div class="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p class="dt-hub-kicker">{{ $t('tours.hub.kicker') }}</p>
        <h1 class="mx-auto mt-5 max-w-3xl font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          {{ $t('tours.hub.title') }}<span class="text-gold">{{ $t('tours.hub.titleAccent') }}</span>
        </h1>
        <p class="mx-auto mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
          {{ $t('tours.hub.subtitle') }}
        </p>
        <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <NuxtLink :to="bookingPath" class="dt-hub-btn-primary">
            <i class="bx bx-calendar text-xl" aria-hidden="true"></i>
            {{ $t('tours.hub.planTrip') }}
          </NuxtLink>
          <a :href="PHONE_HREF" class="dt-hub-btn-outline">
            <i class="bx bx-phone text-xl" aria-hidden="true"></i>
            {{ $t('tours.callPhone', { phone: PHONE_DISPLAY }) }}
          </a>
        </div>
      </div>
    </section>

    <!-- breadcrumbs -->
    <div class="border-b border-gray-100 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CommonBreadcrumbs :items="breadcrumbs" />
      </div>
    </div>

    <!-- Destination grid -->
    <section class="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="dt-kicker justify-center">{{ $t('tours.hub.chooseKicker') }}</p>
          <h2 class="mt-4 font-heading text-3xl font-bold text-black md:text-4xl">{{ $t('tours.hub.chooseTitle') }}</h2>
          <p class="mt-4 leading-relaxed text-gray-600">
            {{ $t('tours.hub.chooseSubtitle') }}
          </p>
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <NuxtLink
            v-for="dest in destinationList"
            :key="dest.slug"
            :to="localePath(`/destination-tours/${dest.slug}`)"
            class="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div class="relative h-52 overflow-hidden">
              <img
                :src="dest.hero.image"
                :alt="dest.hero.alt"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                width="800"
                height="520"
                loading="lazy"
                decoding="async"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <h3 class="absolute bottom-3 left-5 font-heading text-2xl font-bold text-white drop-shadow">{{ dest.name }}</h3>
            </div>
            <div class="flex flex-1 flex-col p-6">
              <p class="flex-1 text-sm leading-relaxed text-gray-600">{{ dest.card.tagline }}</p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                {{ $t('tours.viewTour') }}
                <i class="bx bx-right-arrow-alt text-lg transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"></i>
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-white pb-16 sm:pb-20 lg:pb-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-black via-gray-900 to-black px-6 py-14 text-center text-white shadow-2xl sm:px-12 sm:py-16">
          <div class="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl"></div>
          <div class="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl"></div>
          <div class="relative">
            <h2 class="font-heading text-3xl font-bold md:text-4xl">{{ $t('tours.hub.ctaTitle') }}</h2>
            <p class="mx-auto mt-4 max-w-2xl text-lg text-white/85">
              {{ $t('tours.hub.ctaSubtitle') }}
            </p>
            <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <NuxtLink :to="bookingPath" class="dt-hub-btn-primary">
                <i class="bx bx-calendar text-xl" aria-hidden="true"></i>
                {{ $t('tours.hub.ctaPrimary') }}
              </NuxtLink>
              <a :href="PHONE_HREF" class="dt-hub-btn-outline">
                <i class="bx bx-phone text-xl" aria-hidden="true"></i>
                {{ $t('tours.hub.ctaOutline') }}
              </a>
            </div>
            <p class="mt-8 text-sm text-white/55">{{ $t('tours.trustLine') }}</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { useLocalePath, useI18n } from '#imports'
import { getLocalizedDestinationList, PHONE_DISPLAY, PHONE_HREF } from '~/utils/destinations'
import { useSeo } from '~/utils/useSeo'

const localePath = useLocalePath()
const { t, locale } = useI18n()
const bookingPath = localePath('/booking')
const SITE_URL = 'https://silkride.co.uk'

const destinationList = getLocalizedDestinationList(locale.value)

const breadcrumbs = [
  { name: t('tours.home'), path: '/' },
  { name: t('tours.tours'), path: '/destination-tours' },
]

useSeo('destinationsHub')

useSchemaOrg([
  {
    '@type': 'ItemList',
    name: 'Private Chauffeur Day Trips from London',
    itemListElement: destinationList.map((dest, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `${dest.name} Tour from London`,
      url: `${SITE_URL}/destination-tours/${dest.slug}`,
    })),
  },
])
</script>

<style scoped>
.dt-hub-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #FFCB6C;
}
.dt-hub-kicker::before,
.dt-hub-kicker::after {
  content: '';
  width: 1.75rem;
  height: 1px;
  background-color: #FFCB6C;
}

.dt-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #B8941F;
}
.dt-kicker::before {
  content: '';
  width: 1.75rem;
  height: 1px;
  background-color: #FFCB6C;
}

.dt-hub-btn-primary,
.dt-hub-btn-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 1rem 1.75rem;
  font-size: 1.0625rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.dt-hub-btn-primary {
  background-color: #FFCB6C;
  color: #000;
  font-weight: 700;
  box-shadow: 0 10px 25px -8px rgba(0, 0, 0, 0.5);
}
.dt-hub-btn-primary:hover {
  transform: translateY(-2px);
  filter: brightness(0.96);
}
.dt-hub-btn-outline {
  color: #FFCB6C;
  border: 2px solid #FFCB6C;
  font-weight: 600;
}
.dt-hub-btn-outline:hover {
  background-color: #FFCB6C;
  color: #000;
  transform: translateY(-2px);
}
.dt-hub-btn-primary:focus-visible,
.dt-hub-btn-outline:focus-visible {
  outline: 2px solid #FFCB6C;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .dt-hub-btn-primary:hover,
  .dt-hub-btn-outline:hover { transform: none; }
}
</style>
