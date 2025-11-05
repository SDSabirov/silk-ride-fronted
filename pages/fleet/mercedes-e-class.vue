<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <Navbar />
    <CarsDetailHero
      :img="hero"
      :title="t('fleetPages.eClass.title')"
      :subtitle="t('fleetPages.eClass.subtitle')"
      :slogan="t('fleetPages.eClass.slogan')"
      altText="Mercedes Benz E-Class side view"
      :car="EClass"
    />
    <CommonPageIntro
      :title="t('fleetPages.eClass.intro.title')"
      :paragraph="t('fleetPages.eClass.intro.paragraph')"
    />

    <!-- Vehicle Overview Card -->
    <CarsOverviewCard :car="EClass" />

    <!-- Why Choose E-Class Section -->
    <CarsWhyChooseSection
      :title="t('fleetPages.eClass.whyTitle')"
      description="Experience the perfect balance of luxury and performance with the Mercedes-Benz E-Class. Every journey becomes a statement of sophistication and comfort."
      car-model="E-Class"
      :features="whyChooseFeatures"
    />

    <!-- Occasions Section -->
    <CarsOccasionsSection
      :title="t('fleetPages.eClass.occasionsTitle')"
      description="From business meetings to special celebrations, the E-Class adapts to every occasion with sophistication and comfort."
      car-model="E-Class"
      :base-price="EClass.hourlyRate"
      :occasions="occasionScenarios"
    />

    <!-- Specifications Section -->
    <CarsSpecifications :car="EClassDetailed" />

    <!-- Gallery Section -->
    <div class="flex flex-col w-full items-center justify-center py-16 bg-gray-50">
      <h3 class="w-full text-black text-4xl font-semibold leading-loose text-center mb-10">
        {{ t('fleetPages.eClass.galleryTitle') }}
      </h3>
      <CarsGallerySlider />
    </div>

    <Footer />
  </div>
</template>

<script setup>
const hero = "/images/eclass.webp"
const businessTripImg = "/images/covers/business-trip.webp"
const assistImg = "/images/covers/assist.webp"
const weddingImg = "/images/covers/wedding.webp"
const aboutUsImg = "/images/covers/about-us.webp"
import { useI18n } from '#imports';
import { useSeo } from '~/utils/useSeo'

const { t } = useI18n()
useSeo('eClass')

const EClass = {
  passengers: 3,
  cabinLuggage: 3,
  mediumLuggage: 2,
  hourlyRate: 75,
  minHours: 4,
};

const EClassDetailed = {
  ...EClass,
  dimensions: {
    length: "4923mm",
    width: "1852mm", 
    height: "1468mm",
    wheelbase: "2939mm"
  },
  performance: {
    engine: "2.0L Turbo I4",
    power: "245hp",
    acceleration: "6.6s",
    topSpeed: "250km/h",
    fuelType: "Petrol",
    transmission: "9G-TRONIC"
  },
  features: [
    { name: "ARTICO Leather Seats", icon: "bx bxs-car-mechanic", description: "Premium artificial leather upholstery" },
    { name: "THERMOTRONIC Climate", icon: "bx bx-wind", description: "Automatic dual-zone climate control" },
    { name: "Burmester Surround Sound", icon: "bx bx-volume-full", description: "13-speaker premium audio system" },
    { name: "MBUX Navigation", icon: "bx bx-map", description: "Mercedes-Benz User Experience with voice control" },
    { name: "Smartphone Integration", icon: "bx bxl-bluetooth", description: "Apple CarPlay & Android Auto" },
    { name: "Wireless Charging Pad", icon: "bx bx-usb", description: "Qi wireless charging for compatible devices" },
    { name: "Privacy Glass", icon: "bx bx-glasses", description: "Tinted rear windows for discretion" },
    { name: "Professional Chauffeur", icon: "bx bx-user-check", description: "Experienced, uniformed driver service" },
    { name: "Ambient Lighting", icon: "bx bx-bulb", description: "64-color LED ambient lighting system" },
    { name: "Memory Package", icon: "bx bx-save", description: "Driver seat and mirror memory settings" },
    { name: "Heated Seats", icon: "bx bx-sun", description: "Front and rear seat heating" },
    { name: "Air Quality System", icon: "bx bx-leaf", description: "HEPA filtration and air purification" }
  ],
  safety: [
    "Active Brake Assist with Cross-Traffic Function",
    "Blind Spot Assist with Exit Warning",
    "Active Lane Keeping Assist",
    "Traffic Sign Assist with Wrong-Way Warning",
    "PRE-SAFE System with Sound",
    "Attention Assist Drowsiness Detection",
    "ESP Electronic Stability Program",
    "9 Airbags including Knee Airbags",
    "Active Parking Assist with PARKTRONIC"
  ]
}

const whyFeatures = [
  t('fleetPages.eClass.whyBullets[0]'),
  t('fleetPages.eClass.whyBullets[1]'),
  t('fleetPages.eClass.whyBullets[2]'),
  t('fleetPages.eClass.whyBullets[3]'),
  t('fleetPages.eClass.whyBullets[4]')
]

const whyChooseFeatures = [
  {
    icon: 'bx bxs-car',
    title: t('whyChoose.comfort.title'),
    description: t('whyChoose.comfort.description')
  },
  {
    icon: 'bx bx-chip',
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
    title: t('whyChoose.practical.title'),
    description: t('whyChoose.practical.description')
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

const occasionFeatures = [
  t('fleetPages.eClass.occasionsBullets[0]'),
  t('fleetPages.eClass.occasionsBullets[1]'),
  t('fleetPages.eClass.occasionsBullets[2]'),
  t('fleetPages.eClass.occasionsBullets[3]')
]

const occasionScenarios = [
  {
    title: t('occasions.business.title'),
    description: t('occasions.business.description'),
    image: businessTripImg,
    icon: 'bx bx-briefcase',
    keyPoints: [
      t('occasions.business.points.0'),
      t('occasions.business.points.1'),
      t('occasions.business.points.2'),
      t('occasions.business.points.3')
    ]
  },
  {
    title: t('occasions.airport.title'),
    description: t('occasions.airport.description'),
    image: assistImg,
    icon: 'bx bx-plane',
    keyPoints: [
      t('occasions.airport.points.0'),
      t('occasions.airport.points.1'),
      t('occasions.airport.points.2'),
      t('occasions.airport.points.3')
    ]
  },
  {
    title: t('occasions.special.title'),
    description: t('occasions.special.description'),
    image: weddingImg,
    icon: 'bx bx-heart',
    keyPoints: [
      t('occasions.special.points.0'),
      t('occasions.special.points.1'),
      t('occasions.special.points.2'),
      t('occasions.special.points.3')
    ]
  },
  {
    title: t('occasions.leisure.title'),
    description: t('occasions.leisure.description'),
    image: aboutUsImg,
    icon: 'bx bx-map',
    keyPoints: [
      t('occasions.leisure.points.0'),
      t('occasions.leisure.points.1'),
      t('occasions.leisure.points.2'),
      t('occasions.leisure.points.3')
    ]
  }
]

</script>
