<template>
    <section class="py-12 relative">
      <!--background-->
      <div class="w-full h-full absolute top-0 flex -z-10">
        <div class="w-1/2 h-full bg-gray-100"></div>
        <div class="w-1/2 h-full bg-gray-200"></div>
      </div>
      <div class="container mx-auto max-w-screen-xl px-4 text-center z-20 w-full">
        <div class="flex flex-col w-full items-center justify-center">
          <h2
            class="text-2xl md:text-4xl font-semibold text-gray-900 mb-10 text-center w-full"
          >
            Our Fleet
          </h2>
          <div class="flex items-center w-full mb-2 justify-center mb-6">
            <div class="h-3 w-3 bg-gold rotate-45"></div>
            <div class="h-1 bg-gold w-1/2"></div>
            <div class="h-3 w-3 bg-gold rotate-45"></div>
          </div>
          <!-- Cards Section -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <!-- Card 1 -->
            <div
              class="relative overflow-hidden shadow-lg bg-gradient-to-b from-green-200 group"
            >
              <!-- Image -->
              <img
                src="/assets/images/eclass.webp"
                alt="Luxury Sedan"
                class="w-full h-full object-cover"
              />
  
              <!-- Header (Visible by default) -->
              <div
                class="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xl font-semibold transition-opacity duration-300 group-hover:opacity-0"
              >
              <h3 class="text-4xl">E-Class</h3>
                
              </div>
  
              <!-- Description (Visible on hover) -->
             <div
                class="absolute inset-0 flex items-center justify-center bg-black/75 text-white text-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col"
              >
                <p class="text-md">
                  Experience unparalleled comfort and style with our luxury
                  sedans, designed to redefine your travel experience.
                </p>
                <div class="w-full flex items-center  justify-center absolute bottom-4">
                  <NuxtLink to="/fleet/mercedes-e-class" class="flex w-[160px] items-center justify-center border border-gold text-gold text-lg hover:bg-gold hover:text-black p-2">
                    Learn more
                  </NuxtLink>
                </div>
              </div>
            </div>
            <!-- Card 2 -->
            <div
              class="relative overflow-hidden shadow-lg bg-gradient-to-b from-gold group"
            >
              <!-- Image -->
              <img
                src="/assets/images/vclassSide.webp"
                alt="Luxury Van"
                class="w-full h-full object-cover"
              />
  
              <!-- Header (Visible by default) -->
              <div
                class="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xl font-semibold transition-opacity duration-300 group-hover:opacity-0"
              >
              <h3 class="text-4xl">V-Class</h3>
              </div>
  
             <!-- Description (Visible on hover) -->
             <div
                class="absolute inset-0 flex items-center justify-center bg-black/75 text-white text-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col"
              >
                <p class="text-md">
                  Experience unparalleled comfort and style with our luxury
                  sedans, designed to redefine your travel experience.
                </p>
                <div class="w-full flex items-center  justify-center absolute bottom-4">
                  <NuxtLink to="/fleet/mercedes-v-class" class="flex w-[160px] items-center justify-center border border-gold text-gold text-lg hover:bg-gold hover:text-black p-2">
                    Learn more
                  </NuxtLink>
                </div>
              </div>
            </div>
            <!-- Card 3 -->
            <div
              class="relative overflow-hidden shadow-lg bg-gradient-to-b from-green-200 group md:col-span-2 row-span-1 h-[400px]"
            >
              <!-- Image -->
              <img
                src="/assets/images/sclassBackground.webp"
                alt="Luxury Sedan"
                class="w-full h-full object-cover"
              />
  
              <!-- Header (Visible by default) -->
              <div
                class="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xl font-semibold transition-opacity duration-300 group-hover:opacity-0"
              >
              <h3 class="text-4xl">S-Class</h3>
              </div>
  
             <!-- Description (Visible on hover) -->
             <div
                class="absolute inset-0 flex items-center justify-center bg-black/75 text-white text-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col"
              >
                <p class="text-md">
                  Experience unparalleled comfort and style with our luxury
                  sedans, designed to redefine your travel experience.
                </p>
                <div class="w-full flex items-center  justify-center absolute bottom-4">
                  <NuxtLink to="/fleet/mercedes-s-class" class="flex w-[160px] items-center justify-center border border-gold text-gold text-lg hover:bg-gold hover:text-black p-2">
                    Learn more
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  </template>
  