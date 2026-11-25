<template>
  <ClusterGuidePage :guide="guide" />
</template>

<script setup>
import { useI18n } from '#imports'
import en from '~/utils/clusters/en/wedding-guest-transport'
import ru from '~/utils/clusters/ru/wedding-guest-transport'

const { locale } = useI18n()
const guide = locale.value === 'ru' ? ru : en
</script>
