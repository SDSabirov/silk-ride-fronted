<template>
  <ClusterGuidePage :guide="guide" />
</template>

<script setup>
import { useI18n } from '#imports'
import en from '~/utils/clusters/en/mercedes-s-class-wedding-car'
import ru from '~/utils/clusters/ru/mercedes-s-class-wedding-car'

const { locale } = useI18n()
const guide = locale.value === 'ru' ? ru : en
</script>
