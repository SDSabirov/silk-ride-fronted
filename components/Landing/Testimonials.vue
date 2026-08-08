<template>
  <section id="testimonials" class="bg-ivory py-24 md:py-32">
    <div class="max-w-screen-2xl mx-auto px-6">
      <!-- Header: title left, Google CTA right -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div v-reveal class="lg:col-span-7">
          <p class="text-xs font-semibold tracking-[0.25em] uppercase text-gold">
            {{ $t('landing.testimonials.tagline') }}
          </p>
          <h2 class="mt-5 font-serif font-medium tracking-tight text-4xl md:text-5xl text-gray-900 [text-wrap:balance]">
            {{ $t('landing.testimonials.title') }}
          </h2>
        </div>
        <div v-reveal="1" class="lg:col-span-4 lg:col-start-9 lg:justify-self-end">
          <a
            href="https://maps.app.goo.gl/jKFx8rtmUACaqVcF7"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 bg-white border border-gray-900/10 text-gray-900 font-semibold text-sm tracking-wide px-6 py-3.5 rounded-lg cursor-pointer transition-colors hover:border-gold/50 hover:text-gold-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          >
            <i class="bx bxl-google text-lg" aria-hidden="true"></i>
            {{ $t('landing.testimonials.viewAllReviews') }}
          </a>
          <p class="text-gray-500 text-sm mt-3 lg:text-right">
            {{ reviewCount }} {{ $t('landing.testimonials.googleReviewCount') }}
          </p>
        </div>
      </div>

      <!-- Stats strip -->
      <div v-reveal class="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-y-8 border-y border-gray-900/10 py-9 sm:divide-x sm:divide-gray-900/10">
        <div class="sm:pr-8">
          <p class="font-serif text-4xl md:text-5xl text-gray-900 tabular-nums">
            5,000<span class="text-gold">+</span>
          </p>
          <p class="text-xs uppercase tracking-[0.2em] text-gray-500 mt-3">
            {{ $t('why.stats.journeys') }}
          </p>
        </div>
        <div class="sm:px-8">
          <p class="flex items-center gap-3">
            <span class="font-serif text-4xl md:text-5xl text-gray-900 tabular-nums">{{ displayRating }}</span>
            <span class="flex text-gold text-base" aria-hidden="true">
              <i v-for="n in 5" :key="n" class="bx bxs-star"></i>
            </span>
          </p>
          <p class="text-xs uppercase tracking-[0.2em] text-gray-500 mt-3">
            {{ $t('why.stats.rating') }}
          </p>
        </div>
        <div class="sm:px-8">
          <p class="font-serif text-4xl md:text-5xl text-gray-900 tabular-nums">
            24<span class="text-gold">/</span>7
          </p>
          <p class="text-xs uppercase tracking-[0.2em] text-gray-500 mt-3">
            {{ $t('why.stats.support') }}
          </p>
        </div>
      </div>

      <!-- Reviews -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mt-12">
        <figure
          v-for="(testimonial, i) in testimonials"
          :key="testimonial.author"
          v-reveal="i"
          class="bg-white rounded-2xl border border-gray-900/5 p-7 flex flex-col"
        >
          <div class="flex gap-0.5 text-gold text-sm" aria-hidden="true">
            <i v-for="star in testimonial.rating" :key="star" class="bx bxs-star"></i>
          </div>

          <blockquote class="font-serif text-lg text-gray-900 leading-snug mt-5">
            &ldquo;{{ testimonial.text }}&rdquo;
          </blockquote>

          <figcaption class="mt-auto pt-6 flex items-center justify-between gap-3">
            <p class="text-gray-900 text-sm font-semibold">{{ testimonial.author }}</p>
            <p class="text-gold-700 text-xs font-medium shrink-0">{{ testimonial.service }}</p>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '#imports'

const { locale } = useI18n()
const { rating, reviewCount } = useGoogleReviews()
const displayRating = computed(() => Number(rating.value).toFixed(1))

// Real Google reviews; ordered so the best three of each language lead.
const allReviews = [
  {
    lang: 'en',
    text: 'Great for business trips. I use this service for getting to meetings and the airport. They are always on time, the drivers are very polite and the ride is super comfortable. 100% Satisfied!',
    author: 'Abduvohid K',
    service: 'Corporate Travel',
    rating: 5
  },
  {
    lang: 'en',
    text: 'A very comfortable and pleasant experience. The driver was professional, polite, and drove safely throughout the journey. The car was clean, elegant, and spacious, making the trip truly relaxing.',
    author: 'Sarah & David Mitchell',
    service: 'Long Distance Travel',
    rating: 5
  },
  {
    lang: 'en',
    text: 'Thank you to Silk Ride for their excellent service. They were punctual, professionally dressed, and the vehicle was spotless. Highly recommended!',
    author: 'Natalie McHale',
    service: 'Airport Transfer',
    rating: 5
  },
  {
    lang: 'ru',
    text: 'Бронировала трансфер через эту компанию — всё прошло просто шикарно. Очень довольна сервисом — чувствуется, что компания заботится о клиентах и работает на высоком уровне.',
    author: 'Rano Tairova',
    service: 'Airport Transfer',
    rating: 5
  }
]

// Reviews in the visitor's language first, padded with English ones.
const testimonials = computed(() => {
  const preferred = allReviews.filter((r) => r.lang === locale.value)
  const fallback = allReviews.filter((r) => r.lang !== locale.value && r.lang === 'en')
  return [...preferred, ...fallback].slice(0, 3)
})
</script>
