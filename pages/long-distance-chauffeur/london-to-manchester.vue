<template>
  <ClusterGuidePage :guide="guide" />
</template>

<script setup>
import { useI18n } from '#imports'
import en from '~/utils/clusters/en/london-to-manchester'
import ru from '~/utils/clusters/ru/london-to-manchester'

const { locale } = useI18n()
const guide = locale.value === 'ru' ? ru : en
</script>
