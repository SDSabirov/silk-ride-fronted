<template>
  <div>
    <Navbar />
    <CarsDetailHero
      :img="hero"
      title="Mercedes Benz"
      subtitle="S-Class"
      slogan="Prestige on Every Mile"
      altText="Mercedes Benz S-Class side view"
      :car="SClass"
    />
    <CommonPageIntro
      title="Prestige on Every Mile"
      paragraph="Experience unparalleled comfort and sophistication with the Mercedes-Benz V-Class. Designed for those who seek elegance and practicality in every journey, the V-Class offers a spacious interior, advanced technology, and a smooth driving experience. Whether it's a business trip, a family outing, or a VIP transfer, this versatile vehicle ensures you arrive in style and comfort. Discover the perfect blend of functionality and luxury with every ride."
    />
    <div class="flex flex-col w-full items-center justify-center py-22">
      <h2 class="text-black text-4xl font-semibold leading-loose text-center">
        Unmatched Luxury, No Matter the Occasion
      </h2>
      <div class="w-full flex items-center justify-center mb-6">
        <div class="h-3 w-3 bg-gold rotate-45"></div>
        <div class="h-1 bg-gold w-full max-w-screen-xl"></div>
        <div class="h-3 w-3 bg-gold rotate-45"></div>
      </div>
      <div class="max-w-screen-xl w-full flex flex-col space-y-6 mb-6">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-8"
        >
          <div>
            <h3 class="text-black text-2xl font-normal leading-loose">
              S-Class for Weddings: Arrive in Timeless Elegance
            </h3>
            <p class="pr-6 text-lg italic">
              Make your wedding day even more memorable with the Mercedes-Benz
              S-Class. Elegant, refined, and luxurious—perfect for arriving in
              style.
            </p>
            <h4 class="text-gray-800 text-xl font-normal leading-loose mt-4">
              Key Features
            </h4>
            <ul class="text-lg list-disc pl-6">
              <li>
                Luxurious interior finish that complements any wedding theme.
              </li>
              <li>Seats up to 3 passengers in first-class comfort.</li>
              <li>
                Optional floral decorations and ribbon matching your wedding
                colors.
              </li>
              <li>Silent, smooth ride for a calm and graceful arrival.</li>
            </ul>
          </div>
          <div class="overflow-hidden">
            <img
              src="/assets/images/sclass.webp"
              alt="s-class at wedding"
              loading="lazy"
              class="object-cover"
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
          class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-8 items-center"
        >
          <div>
            <h3 class="text-black text-2xl font-normal leading-loose">
              S-Class for Business Travel: The Executive Choice
            </h3>
            <p class="pr-6 text-lg italic">
              The Mercedes-Benz S-Class provides the perfect environment for
              focused productivity and total relaxation between meetings and
              destinations.
            </p>
            <h4 class="text-gray-800 text-xl font-normal leading-loose mt-4">
              Key Features
            </h4>
            <ul class="text-lg list-disc pl-6">
              <li>Quiet cabin with noise insulation for uninterrupted work.</li>
              <li>Rear seat climate and massage controls for added comfort.</li>
              <li>Power outlets and USB charging for your devices.</li>
              <li>Driven by punctual, discreet, professional chauffeurs.</li>
            </ul>
          </div>
          <div class="md:order-first">
            <img
              src="/assets/images/sclass.webp"
              alt="s-class for business"
              loading="lazy"
              class="object-cover"
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
          class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-8"
        >
          <div>
            <h3 class="text-black text-2xl font-normal leading-loose">
              S-Class Airport Transfers: Seamless, First-Class Travel
            </h3>
            <p class="pr-6 text-lg italic">
              Begin or end your journey with the smooth, stress-free experience
              of a chauffeur-driven S-Class. Punctual, private, and indulgently
              comfortable.
            </p>
            <h4 class="text-gray-800 text-xl font-normal leading-loose mt-4">
              Key Features
            </h4>
            <ul class="text-lg list-disc pl-6">
              <li>Meet-and-greet service with luggage assistance.</li>
              <li>Flight monitoring to adjust for delays or early arrivals.</li>
              <li>
                Ambient lighting and reclining rear seats for a restful ride.
              </li>
              <li>
                Wi-Fi and charging ports onboard for seamless productivity.
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/assets/images/sclass.webp"
              alt="s-class airport transfer"
              loading="lazy"
              class="object-cover"
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
          class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-8"
        >
          <div>
            <h3 class="text-black text-2xl font-normal leading-loose">
              S-Class for VIP Events: Arrive with Distinction
            </h3>
            <p class="pr-6 text-lg italic">
              For red carpet moments or high-profile meetings, the Mercedes-Benz
              S-Class ensures an arrival that’s as impressive as the
              destination.
            </p>
            <h4 class="text-gray-800 text-xl font-normal leading-loose mt-4">
              Key Features
            </h4>
            <ul class="text-lg list-disc pl-6">
              <li>Privacy glass and refined styling for discreet travel.</li>
              <li>
                Executive seating with extended legroom and luxury finish.
              </li>
              <li>
                Ideal for solo VIPs or intimate pairs attending exclusive
                events.
              </li>
            </ul>
          </div>
          <div class="md:order-first">
            <img
              src="/assets/images/sclass.webp"
              alt="s-class vip event"
              loading="lazy"
              class="object-cover"
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
          class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-8"
        >
          <div>
            <h3 class="text-black text-2xl font-normal leading-loose">
              S-Class for Romantic Evenings: A Night to Remember
            </h3>
            <p class="pr-6 text-lg italic">
              Celebrate a special night in the comfort of the S-Class. Whether
              it’s an anniversary, proposal, or luxurious date, every detail is
              taken care of.
            </p>
            <h4 class="text-gray-800 text-xl font-normal leading-loose mt-4">
              Key Features
            </h4>
            <ul class="text-lg list-disc pl-6">
              <li>Ambient interior lighting to set the mood.</li>
              <li>Chilled drinks upon request for toasting special moments.</li>
              <li>
                Soft-close doors and quiet cabin for uninterrupted intimacy.
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/assets/images/sclass.webp"
              alt="s-class romantic evening"
              loading="lazy"
              class="object-cover"
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
import hero from "~/assets/images/sclassBackground.webp";
import { useSeo } from '~/utils/useSeo'
useSeo('sClass')

const galleryImages = [
  { src: hero, alt: "Mercedes-Benz V-Class Front View" },
  { src: hero, alt: "Mercedes-Benz V-Class Interior" },
  { src: hero, alt: "Mercedes-Benz V-Class Rear View" },
];

const SClass = {
  passengers: 3,
  cabinLuggage: 3,
  mediumLuggage: 2,
  hourlyRate: 75,
  minHours: 4,
};
</script>
