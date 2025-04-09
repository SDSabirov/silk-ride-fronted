<template>
  <div class="">
    <Navbar />
    <CarsDetailHero
      :img="hero"
      title="Mercedes Benz"
      subtitle="E-Class"
      slogan="The Perfect Blend of Business and Comfort"
      altText="Mercedes Benz E-Class side view"
      :car="EClass"
    />
    <CommonPageIntro
      title="The Perfect Blend of Business and Comfort"
      paragraph="Travel in style and sophistication with the Mercedes-Benz E-Class – a premium sedan that combines prestige, advanced technology, and an exceptionally smooth ride. Designed for those who appreciate reliability and elegance in every journey, the E-Class ensures a first-class experience"
    />
    <div class="flex flex-col w-full items-center justify-center py-22">
      <div class="max-w-screen-xl w-full flex flex-col space-y-6 mb-6">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-4 border-b-2 border-b-gold px-4 mb-6 py-4 mb-6"
        >
          <div>
            <h2
              class="text-black text-4xl font-semibold leading-loose text-center"
            >
              Why Choose the E-Class?
            </h2>
            <div class="w-full flex items-center justify-center mb-4">
              <div class="h-3 w-3 bg-gold rotate-45"></div>
              <div class="h-1 bg-gold w-full max-w-screen-xl"></div>
              <div class="h-3 w-3 bg-gold rotate-45"></div>
            </div>
            <ul class="mt-4 space-y-4 text-md leading-loose">
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span
                  ><strong>Business-class excellence </strong> – sleek design
                  premium interior, and a quite, smooth ride.</span
                >
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span
                  ><strong>Comfort for long journeys</strong> – spacious leather
                  seats, climate control, and adaptive suspenison</span
                >
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span
                  ><strong>Cutting-edge technology</strong> – intelligent safety
                  systems, seamless perfomance, and an innovative
                  interface.</span
                >
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span
                  ><strong>Generous luggage capacity</strong> – fits
                  <strong>2 large suitcases and 2 carry-ons</strong>.</span
                >
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span
                  ><strong>Flexible rental options</strong> – available from
                  <strong>4 hours to a full day</strong>, tailored to your
                  needs.</span
                >
              </li>
            </ul>
          </div>
          <div class="overflow-hidden">
            <img
              src="/assets/images/eclass1.webp"
              alt="s-class at wedding"
              loading="lazy"
              class="object-cover h-full sepia"
            />
          </div>
          <div class="md:col-span-2 flex items-center justify-center mt-4">
            <NuxtLink
              to="/booking"
              class="flex px-6 py-3 items-center justify-center border border-black text-black text-xl hover:bg-gold hover:text-black p-2"
            >
              Book Now
            </NuxtLink>
          </div>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-4 items-center"
        >
          <div class="flex flex-col space-y-4 justify-start h-full">
            <h2 class="text-black text-4xl font-semibold leading-loose">
              Perfect For Any Occasion
            </h2>

            <ul class="mt-4 space-y-4 text-md leading-loose">
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span
                  ><strong>Business meetings and corporate travel</strong> –
                  arrive in style and make a lasting impression.</span
                >
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span
                  ><strong>Airport transfers</strong> – stress-free, comfortable
                  rides to and from the airport</span
                >
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span
                  ><strong>Special occasions</strong> – ideal for romantic
                  dinners, anniversaries, or theatere nights.</span
                >
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span
                  ><strong>City rides and tours</strong> – explore London in
                  absolute comfort with a personal chauffeur.</span
                >
              </li>
            </ul>
            <p class="pr-6 text-lg italic leading-loose">
              Choose the Mercedes-Benz E-Class - more than just a ride, it's an
              experience of luxury and refinement. Book now and enjoy the
              comfort of business-class travel!
            </p>
          </div>
          <div class="md:order-first h-full">
            <img
              src="/assets/images/covers/wedding.webp"
              alt="s-class for business"
              loading="lazy"
              class="object-cover h-full"
            />
          </div>
          <div class="md:col-span-2 flex items-center justify-center mt-4">
            <NuxtLink
              to="/booking"
              class="flex px-6 py-3 items-center justify-center border border-black text-black text-xl hover:bg-gold hover:text-black p-2"
            >
              Book Now
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col w-full max-w-screen items-center justify-center py-22"
    >
      <h3
        class="w-full text-black text-4xl font-semibold leading-loose text-center mb-10"
      >
        Our Gallery
      </h3>
      <CarsGallerySlider />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import hero from "~/assets/images/eclass.webp";
useHead({
  title: "Mercedes E-Class Chauffeur Hire London & UK| Executive Car Service",
  meta: [
    {
      name: "description",
      content:
        "Discover Silk Ride's premium fleet of chauffeur-driven vehicles in London, including Mercedes-Benz E-Class, S-Class, and spacious V-Class models. Travel in luxury, comfort, and style with our executive cars.Hire a chauffeur-driven Mercedes E-Class in London with Silk Ride. The perfect blend of comfort, style, and professionalism for business travel, airport transfers, and city rides. Book your executive car today.",
    },
  ],
});
const galleryImages = [
  { src: hero, alt: "Mercedes-Benz V-Class Front View" },
  { src: hero, alt: "Mercedes-Benz V-Class Interior" },
  { src: hero, alt: "Mercedes-Benz V-Class Rear View" },
];

const EClass = {
  passengers: 3,
  cabinLuggage: 3,
  mediumLuggage: 2,
  hourlyRate: 75,
  minHours: 4,
};
</script>
