<template>
  <section
    id="testimonials"
    class="dark-luxe relative overflow-hidden border-t border-gold/10 py-24 md:py-32"
  >
    <div class="grain" aria-hidden="true"></div>

    <div class="max-w-screen-2xl mx-auto px-6">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <!-- Sticky rating panel -->
        <div v-reveal class="lg:col-span-4 lg:sticky lg:top-28">
          <span
            class="font-serif text-gold/20 text-[7rem] leading-[0.6] block select-none"
            aria-hidden="true"
            >&ldquo;</span
          >

          <p class="text-xs font-semibold tracking-[0.25em] uppercase text-gold mt-6">
            {{ $t('landing.testimonials.tagline') }}
          </p>

          <h2
            class="font-serif font-medium tracking-tight text-4xl md:text-5xl text-white mt-2 [text-wrap:balance]"
          >
            {{ $t('landing.testimonials.title') }}
          </h2>

          <!-- Rating block -->
          <div class="mt-8">
            <div class="flex items-center gap-4">
              <span class="font-serif text-5xl text-white">{{ rating }}</span>
              <div class="flex text-gold text-xl" aria-hidden="true">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
              </div>
            </div>
            <span class="block text-gray-400 text-sm mt-2">
              {{ reviewCount }} {{ $t('landing.testimonials.googleReviewCount') }}
            </span>
          </div>

          <!-- Google CTA -->
          <div class="mt-8">
            <a
              href="https://maps.app.goo.gl/jKFx8rtmUACaqVcF7"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 bg-gold text-black font-semibold text-sm tracking-wide px-7 py-3.5 rounded-lg hover:bg-gold-400 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950"
            >
              <i class="bx bxl-google text-lg" aria-hidden="true"></i>
              {{ $t('landing.testimonials.viewAllReviews') }}
            </a>
          </div>
        </div>

        <!-- Masonry review collage -->
        <div class="lg:col-span-8">
          <div class="columns-1 md:columns-2 gap-6">
            <figure
              v-for="(testimonial, i) in testimonials"
              :key="testimonial.author"
              v-reveal="i % 4"
              class="break-inside-avoid mb-6 rounded-2xl bg-white/[0.04] border border-white/10 card-catchlight p-7"
            >
              <div class="flex gap-0.5 text-gold text-sm" aria-hidden="true">
                <i
                  v-for="star in testimonial.rating"
                  :key="star"
                  class="bx bxs-star"
                ></i>
              </div>

              <blockquote class="font-serif text-lg md:text-xl text-white/90 leading-snug mt-4">
                &ldquo;{{ testimonial.text }}&rdquo;
              </blockquote>

              <figcaption class="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                <div
                  class="w-11 h-11 rounded-full bg-gold/15 flex items-center justify-center text-gold font-semibold text-sm shrink-0"
                  aria-hidden="true"
                >
                  {{ getInitials(testimonial.author) }}
                </div>
                <div class="min-w-0">
                  <p class="text-white text-sm font-semibold">{{ testimonial.author }}</p>
                  <p class="text-gray-500 text-xs">{{ testimonial.location }}</p>
                </div>
                <div class="ml-auto text-right shrink-0">
                  <p class="text-gold/80 text-xs font-medium">{{ testimonial.service }}</p>
                  <p class="text-gray-600 text-xs">{{ testimonial.date }}</p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const { rating, reviewCount } = useGoogleReviews()

// Testimonials data
const testimonials = ref([
  {
    text: `Great for business trips. I use this service for getting to meetings and the airport. They are always on time, the drivers are very polite and the ride is super comfortable. 100% Satisfied!`,
    author: "Abduvohid K",
    location: "London, UK",
    service: "Corporate Travel",
    rating: 5,
    date: "July 2025",
    verified: true,
  },
  {
    text: "I recently used this transport service for a trip to Eastbourne, and it was a very comfortable and pleasant experience. The driver was professional, polite, and drove safely throughout the journey. The car was clean, elegant, and spacious, making the trip truly relaxing.",
    author: "Sarah & David Mitchell",
    location: "Eastbourne, UK",
    service: "Long Distance Travel",
    rating: 5,
    date: "July 2025",
    verified: true,
  },
  {
    text: "I did a business trip from Korea to London, all the personnel was so friendly and nice, liked it!",
    author: "Oleg Kan",
    location: "Canary Wharf, London",
    service: "Corporate Travel",
    rating: 5,
    date: "July 2025",
    verified: true,
  },
  {
    text: "Бронировала трансфер через эту компанию — всё прошло просто шикарно. Очень довольна сервисом — чувствуется, что компания заботится о клиентах и работает на высоком уровне.",
    author: "Rano Tairova",
    location: "Dubai (visiting London)",
    service: "Airport Transfer",
    rating: 5,
    date: "July 2025",
    verified: true,
  },
  {
    text: `Thank you to Silk Ride for their excellent service. They were punctual, professionally dressed, and the vehicle was spotless. Highly recommended!`,
    author: "Natalie McHale",
    location: "London, UK",
    service: "Airport Transfer",
    rating: 5,
    date: "May 2025",
    verified: true,
  },
]);

const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
};
</script>
