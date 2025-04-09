<template>
  <div>
    <Navbar />
    <CommonHero :image="cover" page="Services" loading="lazy" />
    <CommonPageIntro
      title="Luxury Chauffeur Services Tailored to Your Needs"
      paragraph="Experience world-class chauffeur services designed for business executives, travelers, and VIP guests. Whether you need a seamless airport transfer, a private chauffeur for the day, or elegant transportation for a special event, Silk Ride ensures a smooth, comfortable, and stress-free journey."
    />
    <ServicesMainPoints/>
    <ServicesListServices />
    <Footer />
  </div>
</template>
<script setup>
import cover from "@/assets/images/covers/services-cover.webp";
useHead({
  title:
    "Luxury Chauffeur Service in London & UK | Private Car Hire",
  meta: [
    {
      name: "description",
      content:
        "Explore Silk Ride's luxury chauffeur services in London, including private airport transfers, executive car hire, event transportation, VIP meet-and-greet, and personalized travel solutions. Travel in style, comfort, and discretion.",
    },
  ],
});
</script>
