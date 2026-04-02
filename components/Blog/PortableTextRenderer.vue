<template>
  <div class="portable-text max-w-none">
    <PortableText :value="value" :components="components" />
  </div>
</template>

<script setup lang="ts">
import { PortableText } from '@portabletext/vue'
import { defineComponent, h } from 'vue'
import { urlFor } from '~/utils/sanityImage'

defineProps<{
  value: any[]
}>()

// Vue components for portable text serializers
const BlockH2 = defineComponent({
  props: { value: Object },
  setup(_, { slots }) {
    return () => h('h2', { class: 'font-serif text-3xl font-bold text-gray-900 mt-10 mb-4' }, slots.default?.())
  }
})

const BlockH3 = defineComponent({
  props: { value: Object },
  setup(_, { slots }) {
    return () => h('h3', { class: 'font-serif text-2xl font-bold text-gray-900 mt-8 mb-3' }, slots.default?.())
  }
})

const BlockH4 = defineComponent({
  props: { value: Object },
  setup(_, { slots }) {
    return () => h('h4', { class: 'font-serif text-xl font-bold text-gray-900 mt-6 mb-2' }, slots.default?.())
  }
})

const BlockNormal = defineComponent({
  props: { value: Object },
  setup(_, { slots }) {
    return () => h('p', { class: 'text-gray-700 leading-relaxed mb-6 text-base' }, slots.default?.())
  }
})

const BlockQuote = defineComponent({
  props: { value: Object },
  setup(_, { slots }) {
    return () => h('blockquote', { class: 'border-l-4 border-gold pl-6 my-8 italic text-gray-600 text-lg' }, slots.default?.())
  }
})

const MarkLink = defineComponent({
  props: { value: Object },
  setup(props, { slots }) {
    const href = (props.value as any)?.href || ''
    const isExternal = href.startsWith('http')
    return () => h('a', {
      href,
      class: 'text-gold hover:text-yellow-600 underline underline-offset-2 transition-colors duration-200',
      target: isExternal ? '_blank' : undefined,
      rel: isExternal ? 'noopener noreferrer' : undefined,
    }, slots.default?.())
  }
})

const MarkStrong = defineComponent({
  props: { value: Object },
  setup(_, { slots }) {
    return () => h('strong', { class: 'font-semibold text-gray-900' }, slots.default?.())
  }
})

const MarkEm = defineComponent({
  props: { value: Object },
  setup(_, { slots }) {
    return () => h('em', { class: 'italic' }, slots.default?.())
  }
})

const ImageBlock = defineComponent({
  props: { value: Object },
  setup(props) {
    const val = props.value as any
    const src = urlFor(val).width(960).format('webp').url()
    const alt = val?.alt || ''
    return () => h('figure', { class: 'my-8' }, [
      h('img', { src, alt, class: 'w-full rounded-xl shadow-md', loading: 'lazy' }),
      alt ? h('figcaption', { class: 'text-center text-sm text-gray-500 mt-3' }, alt) : null,
    ])
  }
})

const ListBullet = defineComponent({
  props: { value: Object },
  setup(_, { slots }) {
    return () => h('ul', { class: 'list-disc list-outside pl-6 mb-6 space-y-2 text-gray-700 marker:text-gold' }, slots.default?.())
  }
})

const ListNumber = defineComponent({
  props: { value: Object },
  setup(_, { slots }) {
    return () => h('ol', { class: 'list-decimal list-outside pl-6 mb-6 space-y-2 text-gray-700' }, slots.default?.())
  }
})

const ListItemBullet = defineComponent({
  props: { value: Object },
  setup(_, { slots }) {
    return () => h('li', { class: 'leading-relaxed' }, slots.default?.())
  }
})

const ListItemNumber = defineComponent({
  props: { value: Object },
  setup(_, { slots }) {
    return () => h('li', { class: 'leading-relaxed' }, slots.default?.())
  }
})

const components = {
  types: {
    image: ImageBlock,
  },
  block: {
    h2: BlockH2,
    h3: BlockH3,
    h4: BlockH4,
    normal: BlockNormal,
    blockquote: BlockQuote,
  },
  marks: {
    link: MarkLink,
    strong: MarkStrong,
    em: MarkEm,
  },
  list: {
    bullet: ListBullet,
    number: ListNumber,
  },
  listItem: {
    bullet: ListItemBullet,
    number: ListItemNumber,
  },
}
</script>

<style scoped>
.portable-text :deep(img) {
  max-width: 100%;
  height: auto;
}
</style>
