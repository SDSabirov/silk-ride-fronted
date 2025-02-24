<template>
  <div>
    <Navbar />
    <CommonHero :image="cover" loading="lazy" />
    <CommonPageIntro
      title="From Business to Celebrations, We've Got You Covered"
      paragraph="Our fleet of luxury vehicles and professional chauffeurs deliver impeccable service for every occasion, ensuring that every journey is as seamless and elegant as possible. Whether you're heading to the airport, planning an important business trip, celebrating a wedding, or attending a special event, we tailor our services to meet your unique needs. With a commitment to punctuality, comfort, and personalized attention, we take pride in making every ride an extraordinary experience. Your satisfaction is not just our priority—it’s our promise."
    />
    <ServicesListServices />
    <Footer />
  </div>
</template>
<script setup>
import cover from "@/assets/images/covers/services-cover.webp";

</script>
