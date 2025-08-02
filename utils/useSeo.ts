import { useI18n } from 'vue-i18n'
import { useHead, useRoute } from '#imports'
export function useSeo(pageKey: string) {
  const { t } = useI18n()
  const route = useRoute()
  
  const title = t(`seo.${pageKey}.title`)
  const description = t(`seo.${pageKey}.description`)
  
  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: t(`seo.${pageKey}.keywords`, '') },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `https://silkride.co.uk${route.path}` },
      { property: 'og:image', content: 'https://silkride.co.uk/og-image.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://silkride.co.uk/og-image.jpg' }
    ]
  })
}