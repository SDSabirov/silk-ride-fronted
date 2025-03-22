<template>
  <section class="py-14">
    <div
      class="max-w-screen-xl text-center flex flex-col space-y-8 mx-auto bg-white/70 px-4 md:px-0"
    >
      <h2 class="text-black text-4xl font-semibold leading-loose">
        Elite Chauffeurs, Exceptional Service
      </h2>
      <div class="flex items-center w-full mb-4 justify-center">
        <div class="h-3 w-3 bg-gold rotate-45"></div>
        <div class="h-1 bg-gold w-1/2"></div>
        <div class="h-3 w-3 bg-gold rotate-45"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p class="text-black text-xl leading-loose text-justify">
            We handpick only the most experienced and professional chauffeurs to
            deliver a world-class travel experience. Each driver undergoes a
            rigorous selection process, including thorough background checks,
            advanced driving assessments, and specialized customer service
            training. With years of expertise in luxury transportation, our
            chauffeurs ensure every journey is smooth, safe, and tailored to
            your needs. Whether for business or leisure, our unwavering
            commitment to excellence guarantees a seamless, first-class ride
            every time.
          </p>
        </div>
        <div class="rounded-md overflow-hidden">
          <img src="/assets/images/covers/fleet.webp" alt="V-Class fleet" />
        </div>
      </div>
      <h2 class="text-black text-3xl font-semibold leading-loose mt-8">
        Safety First
      </h2>
      <p class="text-xl text-gray-600 italic">
        Recognized for our dedication to safety, professionalism, and luxury
        service, we take pride in maintaining the highest industry standards.
      </p>
      <!-- Badges -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full mt-10 mb-10 gap-8 text-center"
      >
        <!-- Badge 1 -->
        <div class="flex flex-col items-center max-w-[420px] mx-auto space-y-2">
          <img
            src="/assets/icons/certificate.svg"
            class="w-[58px]"
            alt="Private Hire License"
          />
          <h4 class="text-md text-gray-900 capitalize">Licenced operator</h4>
          <p class="text-sm text-gray-700 italic">
            We are a licensed Hertsmere Borough Council Private Hire License
            operator
          </p>
        </div>

        <!-- Badge 2 -->
        <div class="flex flex-col items-center max-w-[420px] mx-auto space-y-2">
          <img
            src="/assets/icons/id-card.svg"
            class="w-[58px]"
            alt="License Chauffer"
          />
          <h4 class="text-md text-gray-900 capitalize">Licenced Chauffeurs</h4>
          <p class="text-sm text-gray-700 italic">
            All of our chauffeurs are licensed for private hire.
          </p>
        </div>

        <!-- Badge 3 -->
        <div class="flex flex-col items-center max-w-[420px] mx-auto space-y-2">
            <img
            src="/assets/icons/profile-tick.svg"
            class="w-[58px]"
            alt="License Chauffer"
          />
          <h4 class="text-md text-gray-900 capitalize">Background Check</h4>
          <p class="text-sm text-gray-700 italic capitalize">
            All of our chauffeurs are required to have an ‘enhanced’ criminal records check.
          </p>
        </div>
        <!-- Badge 4 -->
        <div class="flex flex-col items-center max-w-[420px] mx-auto space-y-2">
            <img
            src="/assets/icons/award.svg"
            class="w-[58px]"
            alt="License Chauffer"
          />
          <h4 class="text-md text-gray-900 capitalize">Years of Experience</h4>
          <p class="text-sm text-gray-700 italic capitalize">
            All of our chauffeurs are experienced professionals.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
