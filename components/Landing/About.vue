<template>
  <section class="py-12 bg-white relative">
    <div class="container mx-auto max-w-screen-xl px-4 text-center">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          class="flex flex-col items-center justify-start space-y-4 relative"
        >
          <h2
            class="text-2xl md:text-5xl font-semibold text-gray-900 mb-10 text-left w-full"
          >
            About Us
          </h2>
          <p class="text-lg text-left text-gray-700 leading-loose">
            At Silk Ride, we believe that every journey should be as seamless
            and luxurious as the destination itself. We provide premium
            chauffeur services in London and across the UK, ensuring comfort,
            reliability, and sophistication at every step. Our services include
            airport transfers, executive business travel, intercity rides, and
            chauffeur hire for special events. Whether you need a smooth
            transfer from Heathrow, a VIP ride across the city, or a
            long-distance journey in ultimate comfort, we’ve got you covered.
            With over 10 years of experience and 50000+ satisfied clients, we
            have built a reputation for excellence, professionalism, and
            personalized service. Book your ride today and experience the Silk
            Ride difference. ...
          </p>
          <div
            class="w-full flex items-center justify-end text-xl text-white self-end"
          >
            <nuxt-link to="/about">
              <button class="px-8 py-3 bg-black flex items-center space-x-2">
              <span> Read More </span>

              <span>
                <i class="bx bx-chevrons-right"></i>
              </span>
            </button>
            </nuxt-link>
            
          </div>
        </div>
        <div class="grid grid-cols-2 grid-rows-2 gap-4">
          <div class="row-span-2 rounded-lg overflow-hidden">
            <img
              src="/assets/images/covers/business-trip.webp"
              alt="business trip"
              class="object-cover w-full h-full"
            />
          </div>
          <div class="rounded-lg overflow-hidden">
            <img
              src="/assets/images/covers/assist.webp"
              alt="luggage assist"
              class="object-cover w-full h-full"
            />
          </div>
          <div class="rounded-lg overflow-hidden">
            <img
              src="/assets/images/covers/fleet.webp"
              alt="fleet v-class"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
