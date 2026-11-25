// Shared SEO / structured-data helpers.
//
// The business itself is declared ONCE, site-wide, as the schema.org identity
// in nuxt.config.ts (`schemaOrg.identity` → @id https://silkride.co.uk/#identity).
// Pages describe what they sell with the helpers below and point back to that
// identity instead of redefining a LocalBusiness per page.

export const SITE_URL = 'https://silkride.co.uk'
export const IDENTITY_ID = `${SITE_URL}/#identity`
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

export type SiteLocale = 'en' | 'ru'

/** Root-relative path or absolute URL → absolute URL. */
export function absoluteUrl(path: string): string {
  return path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`
}

/** "/ru/services/" → "/services"; "/ru" → "/". Never returns a trailing slash (except root). */
export function stripLocale(path: string): string {
  let p = path.replace(/^\/(ru|en)(?=\/|$)/, '') || '/'
  if (p.length > 1) p = p.replace(/\/+$/, '')
  return p || '/'
}

/** Locale-neutral path → absolute URL for that locale (no trailing slash; EN is unprefixed). */
export function localizedUrl(basePath: string, locale: string): string {
  const p = stripLocale(basePath)
  if (locale === 'ru') return `${SITE_URL}/ru${p === '/' ? '' : p}`
  return `${SITE_URL}${p}`
}

type AreaInput = string | { type?: string; name: string }

function toArea(a: AreaInput) {
  return typeof a === 'string'
    ? { '@type': 'Place', name: a }
    : { '@type': a.type || 'Place', name: a.name }
}

export interface ServiceSchemaInput {
  /** Locale-neutral page path, e.g. "/airport-transfers/heathrow". */
  path: string
  locale: string
  name: string
  description: string
  serviceType: string
  areaServed?: AreaInput[]
  image?: string
  /** Lowest "from" price in GBP, when the page states one. */
  priceFrom?: number
  /** Exact fixed price in GBP, when the page states one. */
  price?: number
  /** Unit for the price, e.g. "per hour". Omit for per-journey prices. */
  priceUnit?: string
}

/** A schema.org Service node provided by the site-wide business identity. */
export function serviceSchema(input: ServiceSchemaInput) {
  const url = localizedUrl(input.path, input.locale)
  const amount = input.price ?? input.priceFrom
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    url,
    provider: { '@id': IDENTITY_ID },
    areaServed: (input.areaServed ?? [{ type: 'City', name: 'London' }]).map(toArea),
    ...(input.image ? { image: absoluteUrl(input.image) } : {}),
    ...(amount != null
      ? {
          offers: {
            '@type': 'Offer',
            url,
            priceCurrency: 'GBP',
            availability: 'https://schema.org/InStock',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              priceCurrency: 'GBP',
              ...(input.price != null ? { price: input.price } : { minPrice: input.priceFrom }),
              ...(input.priceUnit ? { unitText: input.priceUnit } : {}),
            },
          },
        }
      : {}),
  }
}

export interface FaqItem {
  question: string
  /** May contain inline HTML; tags are stripped for the structured data. */
  answer: string
}

/** A schema.org FAQPage node. Only use for Q&A that is visible on the page. */
export function faqSchema(items: FaqItem[], path: string, locale: string) {
  return {
    '@type': 'FAQPage',
    '@id': `${localizedUrl(path, locale)}#faq`,
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer.replace(/<[^>]+>/g, ''),
      },
    })),
  }
}
