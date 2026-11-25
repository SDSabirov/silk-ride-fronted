<template>
  <ClusterGuidePage :guide="guide" />
</template>

<script setup>
import { useI18n } from '#imports'
import en from '~/utils/clusters/en/chelsea-flower-show'
import ru from '~/utils/clusters/ru/chelsea-flower-show'

const { locale } = useI18n()
const guide = locale.value === 'ru' ? ru : en
</script>
