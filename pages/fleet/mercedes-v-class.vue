<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
    <Navbar />
    <CarsDetailHero
      :img="hero"
      :title="t('fleetPages.vClass.title')"
      :subtitle="t('fleetPages.vClass.subtitle')"
      :slogan="t('fleetPages.vClass.slogan')"
      altText="Mercedes Benz V-Class side view"
      :car="VClass"
    />
    <div
      class="bg-[url(/assets/images/covers/bgpattern.png)] bg-cover bg-center bg-no-repeat"
    >
      <CommonPageIntro
        :title="t('fleetPages.vClass.intro.title')"
        :paragraph="t('fleetPages.vClass.intro.paragraph')"
      />
    </div>

    <!-- Vehicle Overview Card -->
    <CarsOverviewCard :car="VClass" />

    <!-- Why Choose V-Class Section -->
    <CarsWhyChooseSection
      :title="t('fleetPages.vClass.whyTitle')"
      description="Experience unparalleled versatility with the Mercedes-Benz V-Class. Whether for family adventures, group travel, or business occasions, the V-Class delivers premium comfort for up to 7 passengers."
      car-model="V-Class"
      :features="whyChooseFeatures"
    />

    <!-- Occasions Section -->
    <CarsOccasionsSection
      :title="t('fleetPages.vClass.occasionsTitle')"
      description="From family vacations to corporate events, the V-Class adapts to every group travel need with luxury, space, and sophistication."
      car-model="V-Class"
      :base-price="VClass.hourlyRate"
      :occasions="occasionScenarios"
    />

    <!-- Specifications Section -->
    <CarsSpecifications :car="VClassDetailed" />
    <!-- Gallery Section -->
    <div class="flex flex-col w-full items-center justify-center py-16 bg-gray-50">
      <h3 class="w-full text-black text-4xl font-semibold leading-loose text-center mb-10">
        {{ t('fleetPages.vClass.galleryTitle') || 'Our Gallery' }}
      </h3>
      <CarsGallerySlider />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import hero from "~/assets/images/v-classshero.webp";
import businessTripImg from "~/assets/images/covers/business-trip.webp";
import assistImg from "~/assets/images/covers/assist.webp";
import weddingImg from "~/assets/images/covers/wedding.webp";
import aboutUsImg from "~/assets/images/covers/about-us.webp";
import { useI18n } from '#imports';
import { useSeo } from '~/utils/useSeo'

const { t } = useI18n();
useSeo('vClass')

const VClass = {
  passengers: 7,
  cabinLuggage: 12,
  mediumLuggage: 7,
  hourlyRate: 75,
  minHours: 4,
};

const VClassDetailed = {
  ...VClass,
  dimensions: {
    length: "5370mm",
    width: "1928mm", 
    height: "1880mm",
    wheelbase: "3430mm"
  },
  performance: {
    engine: "2.0L CDI Turbo",
    power: "190hp",
    acceleration: "10.9s",
    topSpeed: "200km/h",
    fuelType: "Diesel",
    transmission: "7G-TRONIC"
  },
  features: [
    { name: "Flexible 7-Seater Layout", icon: "bx bxs-user-detail", description: "Configurable seating with tables" },
    { name: "Captain's Chairs", icon: "bx bxs-car-mechanic", description: "Individual luxury seats with armrests" },
    { name: "Rear Entertainment Package", icon: "bx bx-tv", description: "Overhead screens and tablet holders" },
    { name: "Electric Panoramic Sunroof", icon: "bx bx-brightness", description: "Large glass roof with electric blind" },
    { name: "Harman Kardon Audio", icon: "bx bx-volume-full", description: "Premium 15-speaker sound system" },
    { name: "Multiple USB-C Ports", icon: "bx bx-usb", description: "USB charging throughout the cabin" },
    { name: "All-Round Privacy Glass", icon: "bx bx-glasses", description: "Comprehensive window tinting" },
    { name: "Group Travel Specialist", icon: "bx bx-group", description: "Experienced in group transportation" },
    { name: "Easy-PACK Tailgate", icon: "bx bx-door-open", description: "Electric tailgate with kick sensor" },
    { name: "MBUX Tablet", icon: "bx bx-tablet", description: "10.25-inch touchscreen control center" },
    { name: "Individual Climate Zones", icon: "bx bx-wind", description: "Separate climate control for each row" },
    { name: "Comfort Suspension", icon: "bx bx-road", description: "AGILITY CONTROL with selective damping" }
  ],
  safety: [
    "Crosswind Assist Stabilization",
    "Attention Assist Fatigue Detection", 
    "Adaptive Highbeam Assist Plus",
    "Active Lane Keeping Assist",
    "Load Adaptive ESP with Hill Start",
    "Active Brake Assist with Pedestrian",
    "Blind Spot Assist",
    "360° Parking Camera",
    "PARKTRONIC with Visual Display"
  ]
}

const whyChooseFeatures = [
  {
    icon: 'bx bx-group',
    title: t('whyChoose.capacity.title'),
    description: t('whyChoose.capacity.description')
  },
  {
    icon: 'bx bx-layout',
    title: t('whyChoose.versatility.title'),
    description: t('whyChoose.versatility.description')
  },
  {
    icon: 'bx bxs-car',
    title: t('whyChoose.comfort.title'),
    description: t('whyChoose.comfort.description')
  },
  {
    icon: 'bx bx-wifi',
    title: t('whyChoose.connectivity.title'),
    description: t('whyChoose.connectivity.description')
  },
  {
    icon: 'bx bx-shield-check',
    title: t('whyChoose.safety.title'),
    description: t('whyChoose.safety.description')
  },
  {
    icon: 'bx bx-user-check',
    title: t('whyChoose.service.title'),
    description: t('whyChoose.service.description')
  }
]

const occasionScenarios = [
  {
    title: t('occasions.family.title'),
    description: t('occasions.family.description'),
    image: businessTripImg,
    icon: 'bx bx-home-heart',
    keyPoints: [
      t('occasions.family.points.0'),
      t('occasions.family.points.1'),
      t('occasions.family.points.2'),
      t('occasions.family.points.3')
    ]
  },
  {
    title: t('occasions.group.title'),
    description: t('occasions.group.description'),
    image: assistImg,
    icon: 'bx bx-group',
    keyPoints: [
      t('occasions.group.points.0'),
      t('occasions.group.points.1'),
      t('occasions.group.points.2'),
      t('occasions.group.points.3')
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
    title: t('occasions.corporate.title'),
    description: t('occasions.corporate.description'),
    image: aboutUsImg,
    icon: 'bx bx-briefcase',
    keyPoints: [
      t('occasions.corporate.points.0'),
      t('occasions.corporate.points.1'),
      t('occasions.corporate.points.2'),
      t('occasions.corporate.points.3')
    ]
  }
]

</script>
