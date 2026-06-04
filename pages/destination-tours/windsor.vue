<template>
  <DestinationTourPage :destination="destination" />
</template>

<script setup>
import { useI18n } from '#imports'
import { getDestination } from '~/utils/destinations'

const { locale } = useI18n()
const destination = getDestination('windsor', locale.value)
</script>
