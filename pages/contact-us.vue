<template>
  <div>
    <Navbar />
    <CommonHero />
    <CommonPageIntro
      title="Get In Touch"
      paragraph="Our friendly team is here to help"
    />
    <div class="w-full flex flex-col space-y-6 items-center justify-center bg-white">
      <form class="w-full grid grid-cols md:grid-cols-2 max-w-screen-xl gap-6 py-8">

        <div class="h-18 flex flex-col space-y-2 ">
          <label for="name" class=" text-lg font-medium text-gray-700"
            >First Name</label
          >
          <input
            type="text"
            id="name"
            v-model="form.name"
            required
            class="  w-full p-2 border border-gray-300 rounded-sm h-full"
            placeholder="John"
          />
        </div>
        <div class="h-18 flex flex-col space-y-2">
          <label for="lastName" class=" text-lg font-medium text-gray-700"
            >Last Name</label
          >
          <input
            type="text"
            id="LastName"
            v-model="form.name"
            required
            class="  w-full p-2 border border-gray-300 rounded-sm h-full"
            placeholder="Doe"
          />
        </div>
        <div class="h-18 flex flex-col space-y-2">
          <label for="email" class=" text-lg font-medium text-gray-700"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            class="  w-full p-2 border border-gray-300 rounded-sm h-full"
            placeholder="example@mail.com"
          />
        </div>
        <div class="h-18 flex flex-col space-y-2">
          <label for="phone" class=" text-lg font-medium text-gray-700"
            >Phone Number</label
          >
          <input
            type="phone"
            id="phone"
            v-model="form.email"
            required
            class="  w-full p-2 border border-gray-300 rounded-sm h-full"
            placeholder="+44 123456 78910" />
        </div>
        <div class="h-18 flex flex-col space-y-2 md:col-span-2">
          <label for="phone" class=" text-lg font-medium text-gray-700"
            >Message</label
          >
          <textarea
            rows="10"
            type="text"
            id="message"
            v-model="form.message"
            required
            class="  w-full p-2 border border-gray-300 rounded-sm h-full"
            placeholder="Your Message . . ." />
        </div>
        <div class="h-18 flex flex-col space-y-2 md:col-span-2 items-center justify-center">
            <button
              to="/booking"
              class="flex px-6 py-3 items-center justify-center border border-black text-black text-xl  hover:bg-gold hover:text-black p-2"
            >
              Send Message
            </button>
        </div>
      </form>
      <div class="grid grid-cols-1 md:grid-cols-3  max-w-screen-lg w-full">
        
    
        <div class="flex flex-col items-center  justify-start spacey-3 text-center p-4">
            <i class='bx bxs-phone bx-lg'></i>
            <h3 class="text-xl text-gray-800">Call Us</h3>
            <a href="tel:+447512905514">+44 7512 905514</a>
        </div>
        <div class="flex flex-col items-center justify-center spacey-3 text-center p-4">
            <i class='bx bxs-map-pin bx-lg'></i>
            <h3 class="text-xl text-gray-800">Our Office</h3>
            <address class="text-lg">123 Camberwell Rd <br>
                 SE5 0EE, London <br>
                United Kingdom
            </address>
        </div>
        <div class="flex flex-col items-center justify-start spacey-3 text-center p-4">
            <i class='bx bxs-envelope bx-lg'></i>
            <h3 class="text-xl text-gray-800">Email</h3>
            <a href="mailto:info@silkride.co.uk">info@silkride.co.uk</a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
const form = ref({})
</script>
