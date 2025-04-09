<template>
    <div>
        <Navbar/>
        <CommonHero :image="cover" page="Our Fleet" />
        <CommonPageIntro title="Sophistication Meets Comfort" 
        paragraph="Our premium fleet, led by the luxurious Mercedes-Benz V-Class, is crafted for those who value comfort and elegance. Whether you choose the spacious V-Class, the stylish E-Class, or the luxurious S-Class, every ride promises a first-class experience."/>
        <CarsGrid />
        <Footer />
    </div>
</template>
<script setup>
import cover from "@/assets/images/covers/fleet.webp";
useHead({
  title:
    "Our Luxury Chauffeur Fleet | Executive Car Hire London & UK",
  meta: [
    {
      name: "description",
      content:
        "Discover Silk Ride's premium fleet of chauffeur-driven vehicles in London, including Mercedes-Benz E-Class, S-Class, and spacious V-Class models. Travel in luxury, comfort, and style with our executive cars.",
    },
  ],
});
</script>