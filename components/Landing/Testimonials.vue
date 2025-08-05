<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-screen-xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p class="text-lg text-gray-600 mb-6">
          Don't just take our word for it - hear from our satisfied customers
        </p>
        
        <!-- Google Reviews Summary -->
        <div class="flex items-center justify-center space-x-4 mb-4">
          <div class="flex items-center space-x-2">
            <div class="flex text-gold">
              <i class="bx bxs-star text-xl"></i>
              <i class="bx bxs-star text-xl"></i>
              <i class="bx bxs-star text-xl"></i>
              <i class="bx bxs-star text-xl"></i>
              <i class="bx bxs-star text-xl"></i>
            </div>
            <span class="text-lg font-semibold text-gray-900">5.0</span>
          </div>
          <div class="text-gray-600">|</div>
          <div class="text-gray-600">19 Google Reviews</div>
          <div class="text-gray-600">|</div>
          <svg class="h-6 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
      </div>
      
      <div class="relative max-w-4xl mx-auto">
        <!-- Quote Icon -->
        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 text-6xl text-gold opacity-20">
          <i class="bx bxs-quote-alt-left"></i>
        </div>
        
        <!-- Testimonial Card -->
        <div class="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center relative">
          <div class="mb-6">
            <!-- Stars -->
            <div class="flex justify-center mb-4 text-gold">
              <i 
                v-for="star in testimonials[currentIndex].rating" 
                :key="star"
                class="bx bxs-star text-xl"
              ></i>
            </div>
            
            <!-- Testimonial Text -->
            <p class="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
              "{{ testimonials[currentIndex].text }}"
            </p>
            
            <!-- Author Info -->
            <div class="border-t pt-6">
              <div class="flex items-center justify-center mb-2">
                <svg class="h-4 w-auto mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                  Verified Google Review
                </span>
              </div>
              <h4 class="text-lg font-semibold text-gray-900 mb-1">
                {{ testimonials[currentIndex].author }}
              </h4>
              <p class="text-gray-600">{{ testimonials[currentIndex].location }}</p>
              <p class="text-sm text-gold font-medium mt-1">{{ testimonials[currentIndex].service }}</p>
              <p class="text-xs text-gray-500 mt-2">{{ testimonials[currentIndex].date }}</p>
            </div>
          </div>
        </div>
        
        <!-- Navigation Arrows -->
        <button 
          @click="previousTestimonial"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gold hover:shadow-xl transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <i class="bx bx-chevron-left text-2xl"></i>
        </button>
        
        <button 
          @click="nextTestimonial"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gold hover:shadow-xl transition-all duration-300"
          aria-label="Next testimonial"
        >
          <i class="bx bx-chevron-right text-2xl"></i>
        </button>
      </div>

      <!-- Navigation Dots -->
      <div class="flex justify-center mt-8 space-x-3">
        <button
          v-for="(testimonial, index) in testimonials"
          :key="index"
          @click="navigateTo(index)"
          :class="[
            'w-3 h-3 rounded-full transition-all duration-300',
            currentIndex === index ? 'bg-gold scale-125' : 'bg-gray-300 hover:bg-gray-400',
          ]"
          :aria-label="`Go to testimonial ${index + 1}`"
        ></button>
      </div>
      
      <!-- Google Reviews CTA -->
      <div class="text-center mt-8">
        <a
          href="https://maps.app.goo.gl/jKFx8rtmUACaqVcF7"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-6 py-3 bg-white border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-black transition-all duration-300 shadow-lg"
        >
          <svg class="h-5 w-auto mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          View All Google Reviews
          <i class="bx bx-external-link ml-2"></i>
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
