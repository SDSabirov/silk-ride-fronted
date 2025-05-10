<template>
    <div>
        <Navbar/>
        <BookingHero/>
        <div class="flex items-center justify-center w-full relative h-full py-22">
            <div class="w-full max-w-screen-xl mx-auto">
                <EasyTaxiWidgetMyAccount/>
            </div>
            
        </div>
        
        <Footer/>
    </div>
</template>

<script setup>
import { useSeo } from '~/utils/useSeo'
useSeo('booking')
</script>