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
import { useSeo } from '~/utils/useSeo'
useSeo('home')
</script>
