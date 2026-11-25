<template>
  <ClusterGuidePage :guide="guide" />
</template>

<script setup>
import { useI18n } from '#imports'
import en from '~/utils/clusters/en/london-to-paris'
import ru from '~/utils/clusters/ru/london-to-paris'

const { locale } = useI18n()
const guide = locale.value === 'ru' ? ru : en
</script>
