import { urlFor } from './sanityImage'
import { IDENTITY_ID, DEFAULT_OG_IMAGE, localizedUrl } from './siteSchema'

// The publisher is the site-wide business identity (nuxt.config.ts →
// schemaOrg.identity), referenced by @id rather than redefined per post.
const PUBLISHER = { '@id': IDENTITY_ID }

interface BlogPost {
  title: string
  excerpt?: string
  mainImage?: any
  slug: { current: string }
  publishedAt?: string
  _updatedAt?: string
  author?: { name: string; image?: any }
  body?: any[]
  postType?: string
  event?: {
    eventDate?: string
    eventEndDate?: string
    venue?: string
    eventUrl?: string
  }
}

export function articleSchema(post: BlogPost, locale = 'en') {
  const url = localizedUrl(`/blog/${post.slug.current}`, locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt || '',
    image: post.mainImage
      ? urlFor(post.mainImage).width(1200).height(630).format('webp').url()
      : DEFAULT_OG_IMAGE,
    ...(post.publishedAt ? { datePublished: post.publishedAt } : {}),
    ...(post._updatedAt || post.publishedAt ? { dateModified: post._updatedAt || post.publishedAt } : {}),
    inLanguage: locale === 'ru' ? 'ru-RU' : 'en-GB',
    url,
    author: post.author?.name
      ? { '@type': 'Person', name: post.author.name }
      : PUBLISHER,
    publisher: PUBLISHER,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}

export function eventSchema(post: BlogPost, locale = 'en') {
  const event = post.event
  if (!event) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: post.title,
    description: post.excerpt || '',
    startDate: event.eventDate || '',
    endDate: event.eventEndDate || event.eventDate || '',
    image: post.mainImage
      ? urlFor(post.mainImage).width(1200).height(630).format('webp').url()
      : DEFAULT_OG_IMAGE,
    url: event.eventUrl || localizedUrl(`/blog/${post.slug.current}`, locale),
    location: event.venue
      ? {
          '@type': 'Place',
          name: event.venue,
        }
      : undefined,
    organizer: PUBLISHER,
  }
}

export function blogListingSchema(locale = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Silk Ride Blog',
    description: 'Luxury chauffeur travel tips, guides, and insights from Silk Ride.',
    url: localizedUrl('/blog', locale),
    publisher: PUBLISHER,
  }
}
