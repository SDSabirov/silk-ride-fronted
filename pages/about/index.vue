<template>
  <div>
    <Navbar />
    <CommonHero :image="cover" page="About Us" loading="lazy" />
    <div class="bg-[url(/assets/images/covers/bgpattern.png)] bg-contain bg-center bg-no-repeat">
        <CommonPageIntro
      title="Our Company"
      paragraph="At Silk Ride, we believe that every journey should be as seamless and luxurious as the destination itself. We provide premium chauffeur services in London and across the UK, ensuring comfort, reliability, and sophistication at every step. Our services include airport transfers, executive business travel, intercity rides, and chauffeur hire for special events. Whether you need a smooth transfer from Heathrow, a VIP ride across the city, or a long-distance journey in ultimate comfort, we’ve got you covered. With over 10 years of experience and 50000+ satisfied clients, we have built a reputation for excellence, professionalism, and personalized service. Book your ride today and experience the Silk Ride difference."
    />
     <AboutOurStandards /> 
    </div>
    
   
    <Footer />
  </div>
</template>

<script setup>
import cover from "@/assets/images/covers/about-us.webp";
</script>
