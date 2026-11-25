<template>
  <ClusterGuidePage :guide="guide" />
</template>

<script setup>
import { useI18n } from '#imports'
import en from '~/utils/clusters/en/new-years-eve-chauffeur'
import ru from '~/utils/clusters/ru/new-years-eve-chauffeur'

const { locale } = useI18n()
const guide = locale.value === 'ru' ? ru : en
</script>
