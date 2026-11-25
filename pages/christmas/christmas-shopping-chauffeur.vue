<template>
  <ClusterGuidePage :guide="guide" />
</template>

<script setup>
import { useI18n } from '#imports'
import en from '~/utils/clusters/en/christmas-shopping-chauffeur'
import ru from '~/utils/clusters/ru/christmas-shopping-chauffeur'

const { locale } = useI18n()
const guide = locale.value === 'ru' ? ru : en
</script>
