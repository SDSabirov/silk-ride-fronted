<template>
  <div>
    <Navbar />

    <CommonHero :image="cover" :page="$t('pages.fleet.heroTitle')" />

    <CommonPageIntro
      :title="$t('pages.fleet.introTitle')"
      :paragraph="$t('pages.fleet.introText')"
    />

    <CarsGrid />

    <Footer />
  </div>
</template>

<script setup>
import cover from "@/assets/images/covers/fleet.webp";
import { useI18n } from "#imports";

const { t } = useI18n();

import { useSeo } from '~/utils/useSeo'
useSeo('fleet')
</script>