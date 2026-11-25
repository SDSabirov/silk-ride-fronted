<template>
  <ClusterGuidePage :guide="guide" />
</template>

<script setup>
import { useI18n } from '#imports'
import en from '~/utils/clusters/en/christmas-party-transport'
import ru from '~/utils/clusters/ru/christmas-party-transport'

const { locale } = useI18n()
const guide = locale.value === 'ru' ? ru : en
</script>
