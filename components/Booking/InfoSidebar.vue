<template>
  <aside class="space-y-6">
    <!-- Why Choose Silk Ride -->
    <div class="glass-card p-6">
      <h3 class="text-white font-semibold text-lg mb-5">Why Choose Silk Ride</h3>
      <ul class="space-y-4">
        <li v-for="item in features" :key="item.text" class="flex items-start gap-3">
          <svg class="w-5 h-5 text-gold flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span class="text-gray-300 text-sm leading-relaxed">{{ item.text }}</span>
        </li>
      </ul>
    </div>

    <!-- Our Fleet -->
    <div class="glass-card p-6">
      <h3 class="text-white font-semibold text-lg mb-5">Our Fleet</h3>
      <div class="space-y-4">
        <div v-for="car in fleet" :key="car.name" class="flex items-center gap-4">
          <div class="w-20 h-14 rounded-lg overflow-hidden bg-white/[0.06] flex-shrink-0">
            <NuxtImg
              :src="car.image"
              :alt="car.name"
              class="w-full h-full object-cover"
              width="80"
              height="56"
              loading="lazy"
            />
          </div>
          <div>
            <p class="text-white text-sm font-medium">{{ car.name }}</p>
            <p class="text-gray-400 text-xs">Up to {{ car.passengers }} passengers</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Need Help? -->
    <div class="glass-card p-6">
      <h3 class="text-white font-semibold text-lg mb-4">Need Help?</h3>
      <p class="text-gray-400 text-sm mb-4">Our team is available 24/7 to assist you.</p>
      <div class="space-y-3">
        <a
          href="tel:+447512905514"
          class="flex items-center gap-3 text-gold hover:text-gold/80 transition-colors text-sm font-medium"
        >
          <svg class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          +44 7512 905514
        </a>
        <a
          href="mailto:info@silkride.co.uk"
          class="flex items-center gap-3 text-gold hover:text-gold/80 transition-colors text-sm font-medium"
        >
          <svg class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          info@silkride.co.uk
        </a>
      </div>
    </div>
  </aside>
</template>

<script setup>
const features = [
  { text: 'Professional uniformed chauffeurs' },
  { text: 'Real-time flight tracking for airport transfers' },
  { text: 'Fixed pricing — no hidden charges' },
  { text: 'Free cancellation up to 24 hours before' },
  { text: '24/7 availability, 365 days a year' },
]

const fleet = [
  { name: 'Mercedes E-Class', passengers: 3, image: '/images/transparentcars/eclass.webp' },
  { name: 'Mercedes V-Class', passengers: 7, image: '/images/transparentcars/vclass.jpg' },
  { name: 'Mercedes S-Class', passengers: 3, image: '/images/transparentcars/sclass.webp' },
]
</script>
