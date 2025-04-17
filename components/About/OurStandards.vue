<template>
  <section class="py-14">
    <div class="max-w-screen-xl text-center flex flex-col space-y-8 mx-auto bg-white/70 px-4 md:px-0">
      <h2 class="text-black text-4xl font-semibold leading-loose">
        {{ t('pages.about.standards.title') }}
      </h2>
      <div class="flex items-center w-full mb-4 justify-center">
        <div class="h-3 w-3 bg-gold rotate-45"></div>
        <div class="h-1 bg-gold w-1/2"></div>
        <div class="h-3 w-3 bg-gold rotate-45"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p class="text-black text-xl leading-loose text-justify">
            {{ t('pages.about.standards.description') }}
          </p>
        </div>
        <div class="rounded-md overflow-hidden">
          <img src="/assets/images/covers/fleet.webp" alt="V-Class fleet" />
        </div>
      </div>

      <h2 class="text-black text-3xl font-semibold leading-loose mt-8">
        {{ t('pages.about.standards.safetyTitle') }}
      </h2>
      <p class="text-xl text-gray-600 italic">
        {{ t('pages.about.standards.safetyParagraph') }}
      </p>

      <!-- Badges -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full mt-10 mb-10 gap-8 text-center">
        <!-- Badge 1 -->
        <div class="flex flex-col items-center max-w-[420px] mx-auto space-y-2">
          <img src="/assets/icons/certificate.svg" class="w-[58px]" alt="Private Hire License" />
          <h4 class="text-md text-gray-900 capitalize">
            {{ t('pages.about.standards.badges.licenceTitle') }}
          </h4>
          <p class="text-sm text-gray-700 italic">
            {{ t('pages.about.standards.badges.licenceDesc') }}
          </p>
        </div>

        <!-- Badge 2 -->
        <div class="flex flex-col items-center max-w-[420px] mx-auto space-y-2">
          <img src="/assets/icons/id-card.svg" class="w-[58px]" alt="License Chauffeur" />
          <h4 class="text-md text-gray-900 capitalize">
            {{ t('pages.about.standards.badges.chauffeurTitle') }}
          </h4>
          <p class="text-sm text-gray-700 italic">
            {{ t('pages.about.standards.badges.chauffeurDesc') }}
          </p>
        </div>

        <!-- Badge 3 -->
        <div class="flex flex-col items-center max-w-[420px] mx-auto space-y-2">
          <img src="/assets/icons/profile-tick.svg" class="w-[58px]" alt="Background Check" />
          <h4 class="text-md text-gray-900 capitalize">
            {{ t('pages.about.standards.badges.checkTitle') }}
          </h4>
          <p class="text-sm text-gray-700 italic capitalize">
            {{ t('pages.about.standards.badges.checkDesc') }}
          </p>
        </div>

        <!-- Badge 4 -->
        <div class="flex flex-col items-center max-w-[420px] mx-auto space-y-2">
          <img src="/assets/icons/award.svg" class="w-[58px]" alt="Experience" />
          <h4 class="text-md text-gray-900 capitalize">
            {{ t('pages.about.standards.badges.experienceTitle') }}
          </h4>
          <p class="text-sm text-gray-700 italic capitalize">
            {{ t('pages.about.standards.badges.experienceDesc') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '#imports';

const { t } = useI18n();
</script>