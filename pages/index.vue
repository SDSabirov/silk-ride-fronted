<template>
  <div>
    <Navbar />
    <LandingMainHero />
    <LandingFleet />
    <LandingKeyFeatures />

    <LandingAbout />

    <Footer />
  </div>
</template>
<script setup>
useHead({
  title:
    "Silk Ride: Luxury Chauffeur Service in London & UK | Private Car Hire",
  meta: [
    {
      name: "description",
      content:
        "Silk Ride offers exceptional luxury chauffeur services in London, specializing in private car hire, executive travel, and airport transfers. Enjoy unmatched comfort, discretion, and reliability with our professional chauffeurs. Book your premium Silk Ride experience today.",
    },
  ],
});
</script>
