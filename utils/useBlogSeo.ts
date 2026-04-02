import { useHead, useRoute } from '#imports'
import { useI18n } from 'vue-i18n'
import { urlFor } from './sanityImage'

const SITE_URL = 'https://silkride.co.uk'

interface BlogPost {
  title: string
  excerpt?: string
  mainImage?: any
  slug: { current: string }
  publishedAt?: string
  author?: { name: string }
  category?: { title: string }
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: any
  }
}

export function useBlogSeo(post: BlogPost) {
  const { locale } = useI18n()
  const route = useRoute()

  const title = post.seo?.metaTitle || post.title
  const description = post.seo?.metaDescription || post.excerpt || ''

  const ogImage = post.seo?.ogImage
    ? urlFor(post.seo.ogImage).width(1200).height(630).format('webp').url()
    : post.mainImage
      ? urlFor(post.mainImage).width(1200).height(630).format('webp').url()
      : `${SITE_URL}/og-image.jpg`

  // Canonical URL
  const canonicalPath = locale.value === 'en'
    ? route.path.replace(/^\/en/, '') || '/'
    : route.path
  const canonicalUrl = `${SITE_URL}${canonicalPath}`

  // Hreflang alternates
  const slug = post.slug.current
  const enPath = `/blog/${slug}`
  const ruPath = `/ru/blog/${slug}`

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:image', content: ogImage },
      { property: 'og:locale', content: locale.value === 'en' ? 'en_GB' : 'ru_RU' },
      { property: 'article:published_time', content: post.publishedAt || '' },
      { property: 'article:section', content: post.category?.title || '' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'author', content: post.author?.name || 'Silk Ride Team' },
    ],
    link: [
      { rel: 'canonical', href: canonicalUrl },
      { rel: 'alternate', hreflang: 'en-GB', href: `${SITE_URL}${enPath}` },
      { rel: 'alternate', hreflang: 'ru-RU', href: `${SITE_URL}${ruPath}` },
      { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}${enPath}` },
    ],
  })
}
