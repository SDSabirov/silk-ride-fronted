<template>
  <section class="py-24 bg-gray-900 text-white">
    <div class="max-w-screen-xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <p class="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          {{ $t('landing.testimonials.tagline') }}
        </p>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {{ $t('landing.testimonials.title') }}
        </h2>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto">
          {{ $t('landing.testimonials.subtitle') }}
        </p>

        <!-- Google Reviews Summary -->
        <div class="flex items-center justify-center gap-3 mt-8">
          <div class="flex text-gold text-xl">
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
          </div>
          <span class="text-2xl font-bold">5.0</span>
          <span class="text-gray-500">|</span>
          <span class="text-gray-400">{{ $t('landing.testimonials.googleReviewCount') }}</span>
        </div>
      </div>

      <!-- Testimonial Carousel -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Main Card -->
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
          <!-- Quote Icon -->
          <div class="text-gold/30 text-6xl mb-6">
            <i class="bx bxs-quote-left"></i>
          </div>

          <!-- Stars -->
          <div class="flex gap-1 mb-6 text-gold">
            <i v-for="star in testimonials[currentIndex].rating" :key="star" class="bx bxs-star text-xl"></i>
          </div>

          <!-- Testimonial Text -->
          <p class="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
            "{{ testimonials[currentIndex].text }}"
          </p>

          <!-- Author Info -->
          <div class="flex items-center gap-4 pt-6 border-t border-white/10">
            <div class="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
              <span class="text-gold text-xl font-bold">{{ getInitials(testimonials[currentIndex].author) }}</span>
            </div>
            <div>
              <h4 class="text-lg font-bold text-white">
                {{ testimonials[currentIndex].author }}
              </h4>
              <p class="text-gray-400 text-sm">{{ testimonials[currentIndex].location }}</p>
            </div>
            <div class="ml-auto text-right hidden sm:block">
              <p class="text-gold text-sm font-medium">{{ testimonials[currentIndex].service }}</p>
              <p class="text-gray-500 text-xs">{{ testimonials[currentIndex].date }}</p>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="previousTestimonial"
          class="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:border-gold hover:text-black transition-all"
          aria-label="Previous testimonial"
        >
          <i class="bx bx-chevron-left text-2xl"></i>
        </button>

        <button
          @click="nextTestimonial"
          class="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:border-gold hover:text-black transition-all"
          aria-label="Next testimonial"
        >
          <i class="bx bx-chevron-right text-2xl"></i>
        </button>
      </div>

      <!-- Navigation Dots -->
      <div class="flex justify-center mt-8 gap-2">
        <button
          v-for="(testimonial, index) in testimonials"
          :key="index"
          @click="navigateTo(index)"
          :class="[
            'w-2 h-2 rounded-full transition-all duration-300',
            currentIndex === index ? 'bg-gold w-6' : 'bg-white/30 hover:bg-white/50',
          ]"
          :aria-label="`Go to testimonial ${index + 1}`"
        ></button>
      </div>

      <!-- Google Reviews CTA -->
      <div class="text-center mt-12">
        <a
          href="https://maps.app.goo.gl/jKFx8rtmUACaqVcF7"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-8 py-4 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-colors"
        >
          <i class="bx bxl-google text-xl"></i>
          {{ $t('landing.testimonials.viewAllReviews') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

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

const currentIndex = ref(0);

const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
};

const navigateTo = (index) => {
  currentIndex.value = index;
};

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
};

const previousTestimonial = () => {
  currentIndex.value = currentIndex.value === 0
    ? testimonials.value.length - 1
    : currentIndex.value - 1;
};
</script>
