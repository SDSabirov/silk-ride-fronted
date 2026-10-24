<template>
  <CruiseTransferPage :transfer="transfer" />
</template>

<script setup>
import { useI18n } from '#imports'
import { getCruiseTransfer } from '~/utils/cruiseTransfers'

const { locale } = useI18n()
const transfer = getCruiseTransfer('heathrow-to-southampton', locale.value)
</script>
