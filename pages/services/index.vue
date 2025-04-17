<template>
  <div>
    <Navbar />

    <CommonHero :image="cover" :page="$t('pages.services.heroTitle')" loading="lazy" />

    <CommonPageIntro
      :title="$t('pages.services.introTitle')"
      :paragraph="$t('pages.services.introParagraph')"
    />

    <ServicesMainPoints />
    <ServicesListServices />

    <Footer />
  </div>
</template>

<script setup>
import { useI18n } from '#imports'
import cover from "@/assets/images/covers/services-cover.webp"

const { t } = useI18n()

import { useSeo } from '~/utils/useSeo'
useSeo('services')
</script>