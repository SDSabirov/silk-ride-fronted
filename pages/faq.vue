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
const schema = computed(() => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type":       "WebPage",
      "@id":         "https://silkride.co.uk/faq/#webpage",
      "url":         "https://silkride.co.uk/faq",
      "name":        t('seo.faq.title'),
      "description": t('seo.faq.description'),
      "isPartOf": {
        "@id": "https://silkride.co.uk/#website"
      },
      "inLanguage": "en",
      "mainEntity": {
        "@id": "https://silkride.co.uk/faq/#faq"
      }
    },
    {
      "@type": "WebSite",
      "@id":   "https://silkride.co.uk/#website",
      "url":   "https://silkride.co.uk/",
      "name":  "Silk Ride Chauffeur Services"
    },
    {
      "@type":    "FAQPage",
      "@id":      "https://silkride.co.uk/faq/#faq",
      "mainEntity": faqs.value.map((faq, i) => ({
        "@type":          "Question",
        "@id":            `https://silkride.co.uk/faq/#question${i+1}`,
        "name":           faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text":  faq.answer
        }
      }))
    }
  ]
}))

useHead({
  script: [{
    type:     'application/ld+json',
    children: JSON.stringify(schema.value)
  }]
})

</script>