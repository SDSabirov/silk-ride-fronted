<template>
  <div>
    <Navbar />
    <CommonHero :image="cover" :page="t('pages.about.title')" loading="lazy" />
    <div class="bg-[url(/assets/images/covers/bgpattern.png)] bg-contain bg-center bg-no-repeat">
      <CommonPageIntro
        :title="t('pages.about.intro.title')"
        :paragraph="t('pages.about.intro.paragraph')"
      />
      <AboutOurStandards />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import cover from "@/assets/images/covers/about-us.webp";
import { useI18n } from '#imports';
import { useSeo } from '~/utils/useSeo'
useSeo('about')
const { t } = useI18n();
</script>
