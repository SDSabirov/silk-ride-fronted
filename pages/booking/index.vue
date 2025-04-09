<template>
    <div>
        <Navbar/>
        <BookingHero/>
        <div class="flex items-center justify-center w-full relative">
            <div class="relative -top-28 w-full">
                <FormsBooking />
            </div>
            
        </div>
        
        <Footer/>
    </div>
</template>

<script setup>
useHead({
  title: "Book Your Chauffeur Online ",
  meta: [
    {
      name: "description",
      content:
        "Easily book your chauffeur-driven car online with Silk Ride. Choose from our luxury fleet, including Mercedes E-Class, S-Class, and V-Class. Reliable, professional service across London and beyond.",
    },
  ],
});
</script>