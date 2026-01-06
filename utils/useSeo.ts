import { useI18n } from 'vue-i18n'
import { useHead, useRoute } from '#imports'

const SITE_URL = 'https://silkride.co.uk'

export function useSeo(pageKey: string) {
  const { t, locale } = useI18n()
  const route = useRoute()

  const title = t(`seo.${pageKey}.title`)
  const description = t(`seo.${pageKey}.description`)

  // Generate canonical URL (without locale prefix for default, with prefix for others)
  const canonicalPath = locale.value === 'en'
    ? route.path.replace(/^\/en/, '') || '/'
    : route.path
  const canonicalUrl = `${SITE_URL}${canonicalPath}`

  // Generate alternate language URLs for hreflang
  const enPath = route.path.replace(/^\/ru/, '') || '/'
  const ruPath = route.path.startsWith('/ru') ? route.path : `/ru${route.path}`

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: t(`seo.${pageKey}.keywords`, '') },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:image', content: `${SITE_URL}/og-image.jpg` },
      { property: 'og:locale', content: locale.value === 'en' ? 'en_GB' : 'ru_RU' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${SITE_URL}/og-image.jpg` }
    ],
    link: [
      { rel: 'canonical', href: canonicalUrl },
      { rel: 'alternate', hreflang: 'en-GB', href: `${SITE_URL}${enPath}` },
      { rel: 'alternate', hreflang: 'ru-RU', href: `${SITE_URL}${ruPath}` },
      { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}${enPath}` }
    ]
  })
}