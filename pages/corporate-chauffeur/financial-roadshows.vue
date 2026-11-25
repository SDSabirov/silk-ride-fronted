<template>
  <ClusterGuidePage :guide="guide" />
</template>

<script setup>
import { useI18n } from '#imports'
import en from '~/utils/clusters/en/financial-roadshows'
import ru from '~/utils/clusters/ru/financial-roadshows'

const { locale } = useI18n()
const guide = locale.value === 'ru' ? ru : en
</script>
