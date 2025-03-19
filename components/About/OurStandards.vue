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
      <p class="text-xl text-gray-600 italic mt-6">Recognized for our dedication to safety, professionalism, and luxury service, we take pride in maintaining the highest industry standards.</p>
      <!--Badges-->
      <div class="grid grid-cols-3 w-full mt-10 mb-10 gap-8">
        <div class="flex flex-col items-center max-w-[420px] space-y-4">
          <img
            src="/assets/icons/private-hire.png"
            class="w-[58px]"
            alt="10  year of experience"
          />
          <p class="text-sm text-gray-600 italic capitalize">
            We are a licensed Hertsmere Borough Council Private Hire License
            operator
          </p>
        </div>
        <div class="flex flex-col items-center max-w-[420px] space-y-4">
          <div class="flex space-x-2 items-start text-gray-900">
            <i class="bx bxs-like bx-lg"></i>
            <p class="text-[22px] font-bold text-gray-900">50K+</p>
          </div>

          <p class="text-sm text-gray-600 italic capitalize">
            satisfied clients worldwide
          </p>
        </div>

        <div class="flex flex-col items-center max-w-[420px] space-y-4">
          <img
            src="/assets/icons/10yearsbadge.webp"
            class="w-[58px]"
            alt="10  year of experience"
          />
          <p class="text-sm text-gray-600 italic capitalize">
            10 years of Experince
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
