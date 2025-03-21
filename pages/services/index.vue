<template>
  <div>
    <Navbar />
    <CommonHero :image="cover" page="Services" loading="lazy" />
    <CommonPageIntro
      title="The pinnacle of luxury, the Mercedes-Benz S-Class delivers unmatched elegance, cutting-edge technology, and supreme comfort."
      paragraph="The pinnacle of luxury, the Mercedes-Benz S-Class delivers unmatched elegance, cutting-edge technology, and supreme comfort."
    />
    <ServicesMainPoints/>
    <ServicesListServices />
    <Footer />
  </div>
</template>
<script setup>
import cover from "@/assets/images/covers/services-cover.webp";

</script>
