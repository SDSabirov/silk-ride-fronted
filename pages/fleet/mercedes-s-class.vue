<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <Navbar />
    <CarsDetailHero
      :img="hero"
      :title="$t('fleetPages.sclass.brand')"
      :subtitle="$t('fleetPages.sclass.model')"
      :slogan="$t('fleetPages.sclass.slogan')"
      :altText="$t('fleetPages.sclass.alt')"
      :car="SClass"
    />
    <CommonPageIntro
      :title="$t('fleetPages.sclass.slogan')"
      :paragraph="$t('fleetPages.sclass.description')"
    />

    <!-- Vehicle Overview Card -->
    <CarsOverviewCard :car="SClass" />

    <!-- Why Choose S-Class Section -->
    <CarsWhyChooseSection
      :title="t('fleetPages.sClass.whyTitle')"
      description="Experience the pinnacle of automotive luxury with the Mercedes-Benz S-Class. Every journey becomes a statement of sophistication, cutting-edge technology, and uncompromising comfort."
      car-model="S-Class"
      :features="whyChooseFeatures"
    />

    <!-- Occasions Section -->
    <CarsOccasionsSection
      :title="t('fleetPages.sClass.occasionsTitle')"
      description="From executive meetings to red-carpet events, the S-Class elevates every occasion with unparalleled luxury and prestige."
      car-model="S-Class"
      :base-price="SClass.hourlyRate"
      :occasions="occasionScenarios"
    />

    <!-- Specifications Section -->
    <CarsSpecifications :car="SClassDetailed" />

    <!-- Gallery Section -->
    <div class="flex flex-col w-full items-center justify-center py-16 bg-gray-50">
      <h3 class="w-full text-black text-4xl font-semibold leading-loose text-center mb-10">
       {{ $t('fleetPages.sclass.galleryTitle') }}
      </h3>
      <CarsGallerySlider />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import hero from "~/assets/images/sclassBackground.webp";
import businessTripImg from "~/assets/images/covers/business-trip.webp";
import assistImg from "~/assets/images/covers/assist.webp";
import weddingImg from "~/assets/images/covers/wedding.webp";
import aboutUsImg from "~/assets/images/covers/about-us.webp";
import { useI18n } from '#imports';
import { useSeo } from '~/utils/useSeo'

const { t } = useI18n()
useSeo('sClass')

const SClass = {
  passengers: 3,
  cabinLuggage: 3,
  mediumLuggage: 2,
  hourlyRate: 75,
  minHours: 4,
};

const SClassDetailed = {
  ...SClass,
  dimensions: {
    length: "5179mm",
    width: "1899mm", 
    height: "1494mm",
    wheelbase: "3165mm"
  },
  performance: {
    engine: "3.0L V6 Turbo",
    power: "429hp",
    acceleration: "4.8s",
    topSpeed: "250km/h",
    fuelType: "Petrol",
    transmission: "9G-TRONIC+"
  },
  features: [
    { name: "Executive Massage Seats", icon: "bx bxs-bed", description: "Hot stone massage with 6 programs" },
    { name: "4-Zone Climate Control", icon: "bx bx-wind", description: "Individual climate zones for all passengers" },
    { name: "Burmester High-End 3D", icon: "bx bx-volume-full", description: "30-speaker reference sound system" },
    { name: "MBUX Hyperscreen", icon: "bx bx-tv", description: "56-inch curved glass display" },
    { name: "Wireless Charging Console", icon: "bx bx-battery-charging", description: "Front and rear wireless charging" },
    { name: "Rear Seat Entertainment", icon: "bx bx-mobile", description: "11.6-inch OLED displays with streaming" },
    { name: "Interactive Ambient Light", icon: "bx bx-bulb", description: "253 LEDs with gesture control" },
    { name: "Executive Chauffeur Service", icon: "bx bx-crown", description: "Trained in VIP passenger service" },
    { name: "ENERGIZING Comfort", icon: "bx bx-spa", description: "Wellness programs with fragrance" },
    { name: "Refrigerated Compartment", icon: "bx bx-drink", description: "Champagne cooler with crystal glasses" },
    { name: "Executive Rear Seats", icon: "bx bx-chair", description: "Business class aircraft-style seating" },
    { name: "Magic Body Control", icon: "bx bx-magic-wand", description: "Road surface scanning suspension" }
  ],
  safety: [
    "Active Distance Assist DISTRONIC",
    "Active Steering Assist with Emergency",
    "Evasive Steering Assist",
    "PRE-SAFE Impulse Side with Rear",
    "Car-to-X Communication Technology",
    "Active Blind Spot Assist",
    "360° Camera System",
    "Exit Warning Function",
    "PRE-SAFE Sound Wave Protection",
    "Emergency Stop Assist"
  ]
}

const whyChooseFeatures = [
  {
    icon: 'bx bx-crown',
    title: t('whyChoose.luxury.title'),
    description: t('whyChoose.luxury.description')
  },
  {
    icon: 'bx bx-tv',
    title: t('whyChoose.technology.title'),
    description: t('whyChoose.technology.description')
  },
  {
    icon: 'bx bx-tachometer',
    title: t('whyChoose.performance.title'),
    description: t('whyChoose.performance.description')
  },
  {
    icon: 'bx bx-briefcase',
    title: t('whyChoose.executive.title'),
    description: t('whyChoose.executive.description')
  },
  {
    icon: 'bx bx-shield-check',
    title: t('whyChoose.safety.title'),
    description: t('whyChoose.safety.description')
  },
  {
    icon: 'bx bx-crown',
    title: t('whyChoose.prestige.title'),
    description: t('whyChoose.prestige.description')
  }
]

const occasionScenarios = [
  {
    title: t('occasions.executive.title'),
    description: t('occasions.executive.description'),
    image: businessTripImg,
    icon: 'bx bx-briefcase',
    keyPoints: [
      t('occasions.executive.points.0'),
      t('occasions.executive.points.1'),
      t('occasions.executive.points.2'),
      t('occasions.executive.points.3')
    ]
  },
  {
    title: t('occasions.vip.title'),
    description: t('occasions.vip.description'),
    image: assistImg,
    icon: 'bx bx-crown',
    keyPoints: [
      t('occasions.vip.points.0'),
      t('occasions.vip.points.1'),
      t('occasions.vip.points.2'),
      t('occasions.vip.points.3')
    ]
  },
  {
    title: t('occasions.wedding.title'),
    description: t('occasions.wedding.description'),
    image: weddingImg,
    icon: 'bx bx-heart',
    keyPoints: [
      t('occasions.wedding.points.0'),
      t('occasions.wedding.points.1'),
      t('occasions.wedding.points.2'),
      t('occasions.wedding.points.3')
    ]
  },
  {
    title: t('occasions.luxury.title'),
    description: t('occasions.luxury.description'),
    image: aboutUsImg,
    icon: 'bx bx-star',
    keyPoints: [
      t('occasions.luxury.points.0'),
      t('occasions.luxury.points.1'),
      t('occasions.luxury.points.2'),
      t('occasions.luxury.points.3')
    ]
  }
]

</script>
