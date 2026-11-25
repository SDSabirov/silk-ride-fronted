import { useI18n } from 'vue-i18n'
import { useHead, useRoute } from '#imports'
import { SITE_URL, DEFAULT_OG_IMAGE, absoluteUrl, stripLocale, localizedUrl } from '~/utils/siteSchema'

interface UseSeoOptions {
  /** Page-specific social share image. Absolute URL or root-relative path. */
  image?: string
  /** Open Graph type. Defaults to "website". */
  type?: 'website' | 'article'
  /**
   * Override the resolved strings (used by data-driven pages that carry their
   * own copy instead of an i18n key).
   */
  title?: string
  description?: string
}

/**
 * Sets title, description, canonical, hreflang and Open Graph / Twitter tags
 * for a page from `seo.<pageKey>.title|description` in the locale files.
 *
 * IMPORTANT — never use the pipe character in those strings. vue-i18n treats
 * `|` as its plural separator, so `t('A | B')` silently returns just "A"; that
 * is what used to cut every page title in half. Use an en dash (–) or a colon
 * instead; the " | Silk Ride" brand suffix is appended by titleTemplate.
 */
export function useSeo(pageKey: string, options: UseSeoOptions = {}) {
  const { t, locale } = useI18n()
  const route = useRoute()

  const title = options.title ?? t(`seo.${pageKey}.title`)
  const description = options.description ?? t(`seo.${pageKey}.description`)

  const ogImage = options.image ? absoluteUrl(options.image) : DEFAULT_OG_IMAGE

  // Locale-neutral path ("/services", never "/ru/services" or a trailing slash)
  const basePath = stripLocale(route.path)
  const canonicalUrl = localizedUrl(basePath, locale.value)
  const enUrl = localizedUrl(basePath, 'en')
  const ruUrl = localizedUrl(basePath, 'ru')

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: options.type ?? 'website' },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:alt', content: title },
      { property: 'og:locale', content: locale.value === 'en' ? 'en_GB' : 'ru_RU' },
      { property: 'og:locale:alternate', content: locale.value === 'en' ? 'ru_RU' : 'en_GB' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
    ],
    link: [
      { rel: 'canonical', href: canonicalUrl },
      { rel: 'alternate', hreflang: 'en-GB', href: enUrl },
      { rel: 'alternate', hreflang: 'ru-RU', href: ruUrl },
      { rel: 'alternate', hreflang: 'x-default', href: enUrl },
    ],
  })

  return { title, description, canonicalUrl, basePath, siteUrl: SITE_URL }
}
