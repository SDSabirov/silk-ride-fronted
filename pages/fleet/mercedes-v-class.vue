<template>
  <div class="max-w-screen overflow-hidden">
    <Navbar />
    <CarsDetailHero
      :img="hero"
      title="Mercedes Benz"
      subtitle="V-Class"
      slogan="Designed for Every Journey: Unmatched Versatility & Comfort"
      altText="Mercedes Benz V-Class side view"
      :car="VClass"
    />
    <div
      class="bg-[url(/assets/images/covers/bgpattern.png)] bg-cover bg-center bg-no-repeat"
    >
      <CommonPageIntro
        title="Redefine Luxury Travel with the Mercedes-Benz V-Class"
        paragraph="Experience unparalleled comfort and sophistication with the Mercedes-Benz V-Class. Designed for those who seek elegance and practicality in every journey, the V-Class offers a spacious interior, advanced technology, and a smooth driving experience. Whether it's a business trip, a family outing, or a VIP transfer, this versatile vehicle ensures you arrive in style and comfort. Discover the perfect blend of functionality and luxury with every ride."
      />
    </div>

    <div
      class="flex flex-col w-full items-center justify-center py-22 bg-[url(/assets/images/covers/bgpattern2.png)] bg-contain bg-center bg-no-repeat"
    >
      <h2 class="text-black text-4xl font-semibold leading-loose text-center">
        Unmatched Comfort, No Matter the Occasion
      </h2>
      <div class="w-full flex items-center justify-center mb-6">
        <div class="h-3 w-3 bg-gold rotate-45"></div>
        <div class="h-1 bg-gold w-full max-w-screen-xl"></div>
        <div class="h-3 w-3 bg-gold rotate-45"></div>
      </div>
      <div
        class="max-w-screen-xl w-full flex flex-col space-y-8 mb-6 px-2 md:px-0"
      >
        <!-- Card 1 -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-8 bg-white p-4"
        >
          <div>
            <h3 class="text-black text-2xl font-normal leading-loose">
              V-Class for Weddings
            </h3>
            <p class="pr-6 text-lg italic">
              Turn your special day into a seamless and elegant affair with the
              Mercedes-Benz V-Class. Designed for comfort and sophistication,
              it’s the ideal choice for transporting the bridal party or family.
            </p>
            <h4 class="text-gray-800 text-xl font-semibold leading-loose mt-4">
              Key Features
            </h4>
            <ul class="text-lg leading-loose">
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>
                  Seats up to 7 passengers comfortably, perfect for bridal
                  parties or close family.
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>Luxurious interiors complement any wedding theme.</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>
                  Optional vehicle decorations to match your wedding colors.
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>
                  Climate-controlled comfort ensures everyone arrives fresh and
                  ready.
                </span>
              </li>
            </ul>
          </div>
          <div class="overflow-hidden">
            <img
              src="/assets/images/vclass2.webp"
              alt="v-class at wedding"
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

        <!-- Card 2 -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-8 items-center bg-white p-4 rounded-sm"
        >
          <div>
            <h3 class="text-black text-2xl font-normal leading-loose">
              V-Class for Business Trips: A Mobile Office on Wheels
            </h3>
            <p class="pr-6 text-lg italic">
              Travel smarter with the Mercedes-Benz V-Class, your mobile office
              for business meetings on the go. Stay productive and arrive in
              style.
            </p>
            <h4 class="text-gray-800 text-xl font-normal leading-loose mt-4">
              Key Features
            </h4>
            <ul class="text-lg leading-loose">
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>High-speed Wi-Fi for work during transit.</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>
                  Spacious seating for team discussions or individual
                  relaxation.
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>Power outlets and USB ports for charging devices.</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>
                  Punctual, professional chauffeurs ensure you’re always on
                  time.
                </span>
              </li>
            </ul>
          </div>
          <div class="md:order-first overflow-hidden">
            <img
              src="/assets/images/covers/business-trip.webp"
              alt="v-class for business trips"
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

        <!-- Card 3 -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-8 bg-white p-4"
        >
          <div>
            <h3 class="text-black text-2xl font-normal leading-loose">
              V-Class for Airport Pick-Up & Drop-Off: Stress-Free Transfers
            </h3>
            <p class="pr-6 text-lg italic">
              Experience hassle-free airport transfers with the Mercedes-Benz
              V-Class. From meet-and-greet service to spacious luggage capacity,
              we take care of every detail.
            </p>
            <h4 class="text-gray-800 text-xl font-normal leading-loose mt-4">
              Key Features
            </h4>
            <ul class="text-lg leading-loose">
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>
                  Meet-and-Greet Service: Chauffeurs assist with luggage and
                  ensure a smooth arrival or departure.
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>
                  Spacious Interiors: Comfortably fits 7 passengers and their
                  luggage.
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>
                  Flight Monitoring: We track your flight for adjustments to
                  delays or early arrivals.
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>Wi-Fi Onboard: Stay connected, even on the move.</span>
              </li>
            </ul>
          </div>
          <div class="overflow-hidden">
            <img
              src="/assets/images/vclassjett.webp"
              alt="v-class for airport transfers"
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

        <!-- Card 4 -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-8 bg-white p-4"
        >
          <div>
            <h3 class="text-black text-2xl font-normal leading-loose">
              V-Class For VIP Events: Arrive in Style
            </h3>
            <p class="pr-6 text-lg italic">
              Make a grand entrance at any VIP event with the Mercedes-Benz
              V-Class. From galas to premieres, it ensures luxury and comfort
              for all attendees.
            </p>
            <h4 class="text-gray-800 text-xl font-normal leading-loose mt-4">
              Key Features
            </h4>
            <ul class="text-lg leading-loose">
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>
                  Discreet design with privacy glass for exclusive arrivals.
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>
                  Plush interiors to match the prestige of the event.
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>
                  Perfect for group arrivals, combining style and practicality.
                </span>
              </li>
            </ul>
          </div>
          <div class="md:order-first overflow-hidden">
            <img
              src="/assets/images/v-classshero.webp"
              alt="v-class for vip events"
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

        <!-- Card 5 -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-gold px-4 mb-6 py-8 bg-white p-4"
        >
          <div>
            <h3 class="text-black text-2xl font-normal leading-loose">
              V-Class For Family Vacations: Comfort for Everyone
            </h3>
            <p class="pr-6 text-lg italic">
              Family travel made easy with the V-Class. Enjoy ample space,
              premium features, and a stress-free journey, whether it’s a road
              trip or an airport transfer.
            </p>
            <h4 class="text-gray-800 text-xl font-normal leading-loose mt-4">
              Key Features
            </h4>
            <ul class="text-lg leading-loose">
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span> Room for 5 large suitcases and personal items. </span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span> Rear entertainment systems for kids to enjoy. </span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="h-3 w-3 bg-gold rotate-45"></div>
                <span>
                  Comfortable seating for long journeys with plenty of legroom.
                </span>
              </li>
            </ul>
          </div>
          <div class="overflow-hidden">
            <img
              src="/assets/images/vclassSide.webp"
              alt="v-class for family vacations"
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
import hero from "~/assets/images/v-classshero.webp";
const galleryImages = [
  { src: hero, alt: "Mercedes-Benz V-Class Front View" },
  { src: hero, alt: "Mercedes-Benz V-Class Interior" },
  { src: hero, alt: "Mercedes-Benz V-Class Rear View" },
];

const VClass = {
  passengers: 7,
  cabinLuggage: 12,
  mediumLuggage: 7,
  hourlyRate: 75,
  minHours: 4,
};
</script>
