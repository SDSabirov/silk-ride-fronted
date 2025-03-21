<template>
  <div class="services-grid max-w-screen-xl mx-auto p-6">
    <div class="flex items-center w-full mb-4 justify-center mb-8">
      <div class="w-full flex items-center justify-center">
        <div class="h-3 w-3 bg-gold rotate-45"></div>
        <div class="h-1 bg-gold w-1/2"></div>
        <div class="h-3 w-3 bg-gold rotate-45"></div>
      </div>
      <h1 class="text-4xl font-bold text-center w-full uppercase">
        Our Services
      </h1>
      <div class="w-full flex items-center justify-center">
        <div class="h-3 w-3 bg-gold rotate-45"></div>
        <div class="h-1 bg-gold w-1/2"></div>
        <div class="h-3 w-3 bg-gold rotate-45"></div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <!-- Card 1: Airport Transfers -->
  <div class="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
    <img src="/assets/images/vclassjett.webp" alt="Airport Transfers" class="w-full h-48 object-cover">
    <div class="p-6 flex flex-col flex-grow">
      <h2 class="text-xl font-semibold mb-4">Airport Transfers</h2>
      <p>
        Skip the hassle of airport taxis with our executive airport transfers.
        Your professional chauffeur will meet you at arrivals with a
        personalized name board, assist with your luggage, and provide a
        smooth ride to your destination.
      </p>
      <ul class="mt-4 space-y-4">
        <li class="flex items-center space-x-2">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <span>Flight Tracking – We monitor your flight for on-time pickups.</span>
        </li>
        <li class="flex items-center space-x-2">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <span>Meet &amp; Greet Service – Personal welcome at arrivals.</span>
        </li>
        <li class="flex items-center space-x-2">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <span>No Waiting Charges – 60 minutes of free waiting time included.</span>
        </li>
      </ul>
      <p class="mt-4 mb-4">
        Serving all major airports: Heathrow, Gatwick, Luton, Stansted &amp; more.
      </p>
      <!-- Book Now button pushed to bottom -->
      <div class="mt-auto w-full flex justify-center items-center">
        <nuxt-link to="/booking" class="py-2 px-4 text-black text-md border border-gold hover:bg-gold">
          Book Now
        </nuxt-link>
      </div>
    </div>
  </div>
  <!-- Card 2: Corporate Travel -->
  <div class="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
    <img src="/assets/images/covers/business-trip.webp" alt="Corporate Travel" class="w-full h-48 object-cover">
    <div class="p-6 flex flex-col flex-grow">
      <h2 class="text-xl font-semibold mb-4">Corporate Travel</h2>
      <p>
        Designed for executives, VIPs, and corporate teams, our business
        chauffeur service ensures punctuality, discretion, and comfort. Arrive
        at meetings, conferences, and business events feeling refreshed and
        prepared.
      </p>
      <ul class="mt-4 space-y-4">
        <li class="flex items-center space-x-2">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <span>Complimentary Wi-Fi &amp; phone chargers – Stay connected on the go.</span>
        </li>
        <li class="flex items-center space-x-2">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <span>Luxury Mercedes-Benz fleet – First-class comfort for professionals.</span>
        </li>
        <li class="flex items-center space-x-2">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <span>Hourly or full-day hire – Flexible booking to fit your schedule.</span>
        </li>
      </ul>
      <p class="mt-4">
        Maximize your productivity—book a corporate chauffeur today.
      </p>
      <div class="mt-auto w-full flex justify-center items-center">
        <nuxt-link to="/booking" class="py-2 px-4 text-black text-md border border-gold hover:bg-gold">
          Book Now
        </nuxt-link>
      </div>
    </div>
  </div>
  <!-- Card 3: Hourly Chauffeur Hire -->
  <div class="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
    <img src="/assets/images/covers/about-us.webp" alt="Hourly Chauffeur Hire" class="w-full h-48 object-cover">
    <div class="p-6 flex flex-col flex-grow">
      <h2 class="text-xl font-semibold mb-4">Hourly Chauffeur Hire</h2>
      <p>
        Need a luxury car for a few hours or a full day? Our hourly chauffeur
        service gives you the freedom to move at your own pace—perfect for
        business meetings, sightseeing, or shopping trips.
      </p>
      <ul class="mt-4 space-y-4">
        <li class="flex items-center space-x-2">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <span>Flexible bookings – Hire a chauffeur for 3+ hours or a full day.</span>
        </li>
        <li class="flex items-center space-x-2">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <span>Door-to-door service – Your chauffeur is at your disposal.</span>
        </li>
        <li class="flex items-center space-x-2">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <span>Explore in style – Perfect for city tours &amp; special occasions.</span>
        </li>
      </ul>
      <p class="mt-4">
        Enjoy personalized travel—book your private chauffeur today.
      </p>
      <div class="mt-auto w-full flex justify-center items-center">
        <nuxt-link to="/booking" class="py-2 px-4 text-black text-md border border-gold hover:bg-gold">
          Book Now
        </nuxt-link>
      </div>
    </div>
  </div>
  <!-- Card 4: Travel Across the UK & Europe -->
  <div class="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
    <img src="/assets/images/covers/assist.webp" alt="Travel Across the UK & Europe" class="w-full h-48 object-cover">
    <div class="p-6 flex flex-col flex-grow">
      <h2 class="text-xl font-semibold mb-4">Travel Across the UK &amp; Europe</h2>
      <p>
        Looking to explore historic landmarks, charming countryside, or
        vibrant European cities? Our long-distance chauffeur services let you
        travel in absolute comfort and luxury, whether you’re heading to
        Stonehenge, the Cotswolds, or even Amsterdam.
      </p>
      <ul class="mt-4 space-y-4">
        <li class="flex items-center space-x-2">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <span>Bespoke Private Tours – Tailor-made journeys to the destinations of your choice.</span>
        </li>
        <li class="flex items-center space-x-2">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <span>Luxury Road Trips – Travel in a first-class Mercedes-Benz with a professional chauffeur.</span>
        </li>
        <li class="flex items-center space-x-2">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <span>Cross-Border Travel – Chauffeur-driven transfers to European cities.</span>
        </li>
      </ul>
      <p class="mt-4">
        Explore in comfort—book your private tour today.
      </p>
      <div class="mt-auto w-full flex justify-center items-center">
        <nuxt-link to="/booking" class="py-2 px-4 text-black text-md border border-gold hover:bg-gold">
          Book Now
        </nuxt-link>
      </div>
    </div>
  </div>
  <!-- Card 5: Wedding Chauffeur Services -->
  <div class="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
    <img src="/assets/images/covers/wedding.webp" alt="Wedding Chauffeur Services" class="w-full h-48 object-cover">
    <div class="p-6 flex flex-col flex-grow">
      <h2 class="text-xl font-semibold mb-4">Wedding Chauffeur Services</h2>
      <p>
        Your wedding day deserves perfection, and Silk Ride ensures an elegant
        and stress-free arrival with our luxury chauffeur service. From the
        bride and groom’s grand entrance to seamless guest transportation, we
        provide a first-class experience tailored to your special day.
      </p>
      <ul class="mt-4 space-y-4">
        <li class="flex items-center space-x-2">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <span>Elegant Mercedes-Benz Fleet – Choose from the sophisticated S-Class, V-Class, or E-Class for ultimate luxury.</span>
        </li>
        <li class="flex items-center space-x-2">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <span>Professional, Discreet Chauffeurs – Experienced drivers ensuring a smooth, stylish ride.</span>
        </li>
        <li class="flex items-center space-x-2">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <span>Bridal Car Decoration Available – Personalize your wedding car with ribbons &amp; flowers.</span>
        </li>
        <li class="flex items-center space-x-2">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <span>Guest &amp; Family Transfers – Comfortable transport for bridesmaids, groomsmen, and guests.</span>
        </li>
      </ul>
      <p class="mt-4">
        Make your wedding day unforgettable—book your luxury wedding chauffeur today.
      </p>
      <div class="mt-auto w-full flex justify-center items-center">
        <nuxt-link to="/booking" class="py-2 px-4 text-black text-md border border-gold hover:bg-gold">
          Book Now
        </nuxt-link>
      </div>
    </div>
  </div>
  <!-- Card 6: Event Chauffeur Services -->
  <div class="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
    <img src="/assets/images/womanpassenger.webp" alt="Event Chauffeur Services" class="w-full h-48 object-cover">
    <div class="p-6 flex flex-col flex-grow">
      <h2 class="text-xl font-semibold mb-4">Event Chauffeur Services</h2>
      <p>
        Make every occasion unforgettable with Silk Ride’s premium chauffeur
        service. Whether you're attending a high-profile event, exclusive party,
        or major sporting match, we ensure a seamless, stylish, and stress-free
        journey.
      </p>
      <ul class="mt-4 space-y-4">
        <li class="flex items-center space-x-2">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <span>Luxury Fleet for Every Occasion – Travel in style with our Mercedes-Benz S-Class, V-Class, or E-Class.</span>
        </li>
        <li class="flex items-center space-x-2">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <span>Punctual &amp; Professional Chauffeurs – Ensuring you arrive on time and in comfort.</span>
        </li>
        <li class="flex items-center space-x-2">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <span>Perfect for All Events – Concerts, sporting events, private parties, award ceremonies, and corporate galas.</span>
        </li>
        <li class="flex items-center space-x-2">
          <div class="h-3 w-3 bg-gold rotate-45"></div>
          <span>Group &amp; VIP Transfers Available – Tailored transport solutions for individuals and groups.</span>
        </li>
      </ul>
      <div class="mt-auto w-full flex justify-center items-center">
        <nuxt-link to="/booking" class="py-2 px-4 text-black text-md border border-gold hover:bg-gold">
          Book Now
        </nuxt-link>
      </div>
    </div>
  </div>
</div>


  </div>
</template>

<style>
/* Optional: Styling for grid and hover effects */
</style>
