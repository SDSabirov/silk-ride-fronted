import { useHead, useRoute } from '#imports'
import { useI18n } from 'vue-i18n'
import { urlFor } from './sanityImage'
import { DEFAULT_OG_IMAGE, localizedUrl, stripLocale } from './siteSchema'

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
      : DEFAULT_OG_IMAGE

  // Canonical URL
  const canonicalUrl = localizedUrl(stripLocale(route.path), locale.value)

  // Hreflang: posts are authored per language in Sanity and an English post is
  // not guaranteed to have a Russian counterpart under the same slug, so only
  // a self-reference is emitted (pointing hreflang at a 404 invalidates it).
  const selfLang = locale.value === 'ru' ? 'ru-RU' : 'en-GB'

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
      { rel: 'alternate', hreflang: selfLang, href: canonicalUrl },
    ],
  })
}
