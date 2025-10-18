<template>
  <section class="py-20 bg-white">
    <div class="max-w-screen-xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {{ $t('landing.testimonials.title') }}
        </h2>
        <p class="text-lg md:text-xl text-gray-600 mb-8">
          {{ $t('landing.testimonials.subtitle') }}
        </p>

        <!-- Google Reviews Summary -->
        <div class="flex items-center justify-center gap-4 text-gray-600">
          <span class="text-2xl font-bold text-gray-900">5.0★</span>
          <span>•</span>
          <span>{{ $t('landing.testimonials.googleReviewCount') }}</span>
          <span>•</span>
          <span>Google Reviews</span>
        </div>
      </div>


      <div class="relative max-w-4xl mx-auto">
        <!-- Testimonial Card -->
        <div class="bg-gray-50 rounded-lg p-10 md:p-16 text-center border border-gray-100">
          <div class="mb-8">
            <!-- Stars -->
            <div class="flex justify-center mb-6 text-2xl">
              <span v-for="star in testimonials[currentIndex].rating" :key="star">★</span>
            </div>

            <!-- Testimonial Text -->
            <p class="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              "{{ testimonials[currentIndex].text }}"
            </p>

            <!-- Author Info -->
            <div class="border-t border-gray-200 pt-6">
              <h4 class="text-xl font-bold text-gray-900 mb-1">
                {{ testimonials[currentIndex].author }}
              </h4>
              <p class="text-gray-600">{{ testimonials[currentIndex].location }}</p>
              <p class="text-sm text-gray-500 mt-2">{{ testimonials[currentIndex].service }} • {{ testimonials[currentIndex].date }}</p>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="previousTestimonial"
          class="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
          aria-label="Previous testimonial"
        >
          ←
        </button>

        <button
          @click="nextTestimonial"
          class="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>

      <!-- Navigation Dots -->
      <div class="flex justify-center mt-10 gap-2">
        <button
          v-for="(testimonial, index) in testimonials"
          :key="index"
          @click="navigateTo(index)"
          :class="[
            'w-2 h-2 rounded-full transition-colors',
            currentIndex === index ? 'bg-gray-900' : 'bg-gray-300',
          ]"
          :aria-label="`Go to testimonial ${index + 1}`"
        ></button>
      </div>

      <!-- Google Reviews CTA -->
      <div class="text-center mt-10">
        <a
          href="https://maps.app.goo.gl/jKFx8rtmUACaqVcF7"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block px-8 py-4 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-colors"
        >
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
    text: `Great for business trips. I use this service for getting to meetings and the airport. They are always on time the drivers are very polite and the ride is super comfortable. 100% Satisfied!`,
    author: "Abduvohid K",
    location: "London, UK",
    service: "Corporate Travel",
    rating: 5,
    date: "July 2025",
    verified: true,
  },
  {
    text: "I recently used this transport service for a trip to Eastbourne, and it was a very comfortable and pleasant experience. The driver was professional, polite, and drove safely throughout the journey. The car was clean, elegant, and spacious, making the trip truly relaxing. It’s also very convenient for airport transfers, with reliable service and on-time pickups. The free Wi-Fi in the car was a great bonus, allowing me to stay connected during the ride. I highly recommend this taxi service to everyone looking for a comfortable and stress-free travel experience.",
    author: "Sarah & David Mitchell",
    location: "Eastbourne, UK",
    service: "Long Distance Travel",
    rating: 5,
    date: "July 2025",
    verified: true,
  },
  {
    text: "I did a business trip form korea to london, all the presonel was so friendly and nice, liked it!",
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
    text: `Thank you to Silk Ride for their excellent service.
They were punctual, professionally dressed, and the vehicle was spotless. Highly recommended!`,
    author: "Natalie McHale",
    location: "London, UK",
    service: "Airport Transfer",
    rating: 5,
    date: "May 2025",
    verified: true,
  },
]);

const currentIndex = ref(0);

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

<style></style>
