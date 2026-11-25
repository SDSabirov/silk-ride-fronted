<template>
  <ClusterGuidePage :guide="guide" />
</template>

<script setup>
import { useI18n } from '#imports'
import en from '~/utils/clusters/en/christmas-markets-day-trips'
import ru from '~/utils/clusters/ru/christmas-markets-day-trips'

const { locale } = useI18n()
const guide = locale.value === 'ru' ? ru : en
</script>
