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
import { useSeo } from '~/utils/useSeo'
useSeo('booking')
</script>