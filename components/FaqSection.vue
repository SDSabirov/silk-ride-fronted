<template>
  <section class="faq-section space-y-4 ">
    <slot name="title">
      <h2 class="text-2xl font-semibold text-center heading">{{ $t('faq.title') }}</h2>
    </slot>
    <div v-for="(item, index) in items" :key="index" class="border rounded-lg">
      <button
        class="w-full text-left p-4 font-medium flex justify-between items-center"
        @click="toggle(index)"
        :aria-expanded="opened[index]"
        :aria-controls="`faq-${index}`"
      >
        {{ item.question }}
        <span
          :class="{ 'rotate-180': opened[index] }"
          class="transition-transform"
          >&#9662;</span
        >
      </button>
      <div
        v-show="opened[index]"
        :id="`faq-${index}`"
        class="p-4 border-t text-gray-600"
      >
        {{ item.answer }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const opened = ref([]);

function toggle(index) {
  opened.value[index] = !opened.value[index];
}
</script>

<style scoped>
.faq-section button:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}
</style>
