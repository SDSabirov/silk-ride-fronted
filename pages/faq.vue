<template>
    <div>
        <Navbar solid />
        <div class="w-full py-12 pt-[150px] mx-auto max-w-screen-2xl">
            <!-- Breadcrumbs -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <CommonBreadcrumbs :items="breadcrumbs" />
            </div>

            <FaqSection :items="faqs">
              <template #title>
                <div class="text-center mb-12">
                  <h1 class="text-4xl md:text-5xl font-heading font-bold text-black mb-4">{{ $t('faq.title') }}</h1>
                  <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
                  <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    {{ $t('faq.subtitle') }}
                  </p>
                </div>
              </template>
            </FaqSection>
        </div>
        
        <Footer />
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useSeo } from '~/utils/useSeo'
import { faqSchema } from '~/utils/siteSchema'

const { t, te, locale } = useI18n()

// Title, description, canonical, hreflang and social tags
useSeo('faq')

const breadcrumbs = computed(() => [
  { name: t('faq.breadcrumbHome'), path: '/' },
  { name: t('faq.breadcrumbFaq'), path: '/faq' },
])

const faqs = computed(() => {
  const arr = []
  for (let i = 0; ; i++) {
    const qKey = `faq.items[${i}].question`
    const aKey = `faq.items[${i}].answer`
    if (!te(qKey) || !te(aKey)) break
    arr.push({ question: t(qKey), answer: t(aKey) })
  }
  return arr
})

useSchemaOrg([faqSchema(faqs.value, '/faq', locale.value)])
</script>
