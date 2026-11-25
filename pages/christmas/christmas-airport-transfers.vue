<template>
  <ClusterGuidePage :guide="guide" />
</template>

<script setup>
import { useI18n } from '#imports'
import en from '~/utils/clusters/en/christmas-airport-transfers'
import ru from '~/utils/clusters/ru/christmas-airport-transfers'

const { locale } = useI18n()
const guide = locale.value === 'ru' ? ru : en
</script>
