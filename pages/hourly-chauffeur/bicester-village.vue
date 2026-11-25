<template>
  <ClusterGuidePage :guide="guide" />
</template>

<script setup>
import { useI18n } from '#imports'
import en from '~/utils/clusters/en/bicester-village'
import ru from '~/utils/clusters/ru/bicester-village'

const { locale } = useI18n()
const guide = locale.value === 'ru' ? ru : en
</script>
