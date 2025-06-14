<template>
    <div>
        <Navbar />
        <div class="w-full py-12 pt-[150px] mx-auto max-w-screen-xl">
            <FaqSection :items="faqs" />
        </div>
        
        <Footer />
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { useSeo } from '~/utils/useSeo'
import { onMounted, ref } from 'vue'

useSeo('faq')

const { t } = useI18n()

const faqs = ref([])
const faqSchema = computed(() => ({
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: faqs.value.map(f => ({
    "@type": "Question",
    name:    f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text:    f.answer
    }
  }))
}))
faqs.value = [
    { question: t('faq.items[0].question'), answer: t('faq.items[0].answer') },
    { question: t('faq.items[1].question'), answer: t('faq.items[1].answer') },
    { question: t('faq.items[2].question'), answer: t('faq.items[2].answer') },
    { question: t('faq.items[3].question'), answer: t('faq.items[3].answer') },
    { question: t('faq.items[4].question'), answer: t('faq.items[4].answer') },
    { question: t('faq.items[5].question'), answer: t('faq.items[5].answer') },
    { question: t('faq.items[6].question'), answer: t('faq.items[6].answer') },
    { question: t('faq.items[7].question'), answer: t('faq.items[7].answer') },
    { question: t('faq.items[8].question'), answer: t('faq.items[8].answer') },
    { question: t('faq.items[9].question'), answer: t('faq.items[9].answer') }
  ]
useHead({
  script: [{ type: 'application/ld+json', children: JSON.stringify(faqSchema.value) }]
})

</script>