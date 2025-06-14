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
import { useI18n }  from 'vue-i18n'
import { useHead }  from '#imports'
import { computed } from 'vue'

const { t, te } = useI18n()

// 1) Build FAQs array
const faqs = computed(() => {
  const arr = []
  for (let i = 0; ; i++) {
    const qKey = `faq.items[${i}].question`
    const aKey = `faq.items[${i}].answer`
    if (!te(qKey) || !te(aKey)) break
    arr.push({
      question: t(qKey),
      answer:   t(aKey),
      id:       `https://silkride.co.uk/faq/#question${i+1}`
    })
  }
  return arr
})

// 2) Build unified JSON-LD @graph
const jsonLd = computed(() => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id":   "https://silkride.co.uk/#website",
      url:     "https://silkride.co.uk/",
      name:    "Silk Ride Chauffeur Services"
    },
    {
      "@type":       "WebPage",
      "@id":         "https://silkride.co.uk/faq/#webpage",
      url:           "https://silkride.co.uk/faq",
      name:          t('seo.faq.title'),
      description:   t('seo.faq.description'),
      isPartOf:      { "@id": "https://silkride.co.uk/#website" },
      inLanguage:    "en",
      mainEntity:    { "@id": "https://silkride.co.uk/faq/#faq" }
    },
    {
      "@type":     "FAQPage",
      "@id":       "https://silkride.co.uk/faq/#faq",
      mainEntity: faqs.value.map(faq => ({
        "@type":          "Question",
        "@id":            faq.id,
        name:             faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text:    faq.answer
        }
      }))
    }
  ]
}))

// 3) Single useHead call for everything
useHead({
  title: t('seo.faq.title'),
  meta:  [{ name: 'description', content: t('seo.faq.description') }],
  script: [{
    type:     'application/ld+json',
    children: JSON.stringify(jsonLd.value)
  }]
})
</script>