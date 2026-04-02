import { urlFor } from './sanityImage'

const SITE_URL = 'https://silkride.co.uk'

interface BlogPost {
  title: string
  excerpt?: string
  mainImage?: any
  slug: { current: string }
  publishedAt?: string
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

export function articleSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt || '',
    image: post.mainImage
      ? urlFor(post.mainImage).width(1200).height(630).format('webp').url()
      : `${SITE_URL}/og-image.jpg`,
    datePublished: post.publishedAt || '',
    dateModified: post.publishedAt || '',
    url: `${SITE_URL}/blog/${post.slug.current}`,
    author: {
      '@type': 'Person',
      name: post.author?.name || 'Silk Ride Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Silk Ride Ltd',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug.current}`,
    },
  }
}

export function eventSchema(post: BlogPost) {
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
      : `${SITE_URL}/og-image.jpg`,
    url: event.eventUrl || `${SITE_URL}/blog/${post.slug.current}`,
    location: event.venue
      ? {
          '@type': 'Place',
          name: event.venue,
        }
      : undefined,
    organizer: {
      '@type': 'Organization',
      name: 'Silk Ride Ltd',
      url: SITE_URL,
    },
  }
}

export function blogListingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Silk Ride Blog',
    description: 'Luxury chauffeur travel tips, guides, and insights from Silk Ride.',
    url: `${SITE_URL}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'Silk Ride Ltd',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
  }
}
