<template>
  <header class="w-full flex items-center justify-center py-28">
    <div class="max-w-screen-xl text-center flex flex-col space-y-6">
      <h2 class="text-black text-4xl  font-semibold leading-loose">{{ title }}</h2>
      <p class="text-black text-xl leading-loose">{{ paragraph }}</p>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
  },
};
</script>
