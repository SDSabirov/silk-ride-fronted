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

</script>