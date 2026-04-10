import { defineEventHandler, setHeader } from 'h3'

interface GoogleReviewsResponse {
  rating: number
  reviewCount: number
  reviews: Array<{
    author: string
    rating: number
    text: string
    date: string
    relativeTime: string
  }>
}

const FALLBACK: GoogleReviewsResponse = {
  rating: 5.0,
  reviewCount: 24,
  reviews: []
}

const CACHE_TTL_SECONDS = 60 * 60 * 6 // 6 hours
// Synthetic URL used as the Cache API key. Never actually fetched — it just
// has to be a stable, absolute URL unique to this cached payload.
const CACHE_KEY_URL = 'https://silk-ride.internal/cache/google-reviews-v1'

async function fetchFromGooglePlaces(
  apiKey: string,
  configuredPlaceId?: string,
): Promise<GoogleReviewsResponse> {
  let resolvedPlaceId = configuredPlaceId

  if (!resolvedPlaceId) {
    const searchResponse = await $fetch<any>(
      'https://places.googleapis.com/v1/places:searchText',
      {
        method: 'POST',
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'places.id',
        },
        body: {
          textQuery: 'Silk Ride Chauffeur Services Radlett',
          maxResultCount: 1,
        },
      },
    )
    resolvedPlaceId = searchResponse?.places?.[0]?.id
    if (!resolvedPlaceId) {
      throw new Error('Google Places: could not find place by text search')
    }
  }

  const response = await $fetch<any>(
    `https://places.googleapis.com/v1/places/${resolvedPlaceId}`,
    {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
      },
    },
  )

  return {
    rating: response.rating || 5.0,
    reviewCount: response.userRatingCount || 24,
    reviews: (response.reviews || []).slice(0, 5).map((review: any) => ({
      author: review.authorAttribution?.displayName || 'Anonymous',
      rating: review.rating || 5,
      text: review.text?.text || '',
      date: review.publishTime || new Date().toISOString(),
      relativeTime: review.relativePublishTimeDescription || '',
    })),
  }
}

export default defineEventHandler(async (event): Promise<GoogleReviewsResponse> => {
  // Cloudflare Workers expose a global `caches` with a `.default` store.
  // On non-Cloudflare runtimes (local Nitro dev, Node preset) it's undefined
  // and we fall through to a direct fetch. The CDN in front of the worker
  // will still respect the Cache-Control header we set below.
  const cacheStore = (globalThis as any).caches?.default as Cache | undefined
  const cacheRequest = new Request(CACHE_KEY_URL)

  // Serve browser/CDN clients with a 6h cache header regardless of path taken
  setHeader(
    event,
    'cache-control',
    `public, max-age=${CACHE_TTL_SECONDS}, s-maxage=${CACHE_TTL_SECONDS}, stale-while-revalidate=86400`,
  )

  // 1. Edge cache hit
  if (cacheStore) {
    const cached = await cacheStore.match(cacheRequest)
    if (cached) {
      return (await cached.json()) as GoogleReviewsResponse
    }
  }

  const config = useRuntimeConfig()
  const apiKey = config.googlePlacesApiKey
  if (!apiKey) return FALLBACK

  try {
    const data = await fetchFromGooglePlaces(apiKey, config.googlePlaceId)

    // 2. Write to edge cache — no-op on non-Cloudflare runtimes
    if (cacheStore) {
      const cachePutResponse = new Response(JSON.stringify(data), {
        headers: {
          'content-type': 'application/json',
          'cache-control': `public, max-age=${CACHE_TTL_SECONDS}, s-maxage=${CACHE_TTL_SECONDS}`,
        },
      })
      const waitUntil = (event as any).context?.cloudflare?.context?.waitUntil
      const putPromise = cacheStore.put(cacheRequest, cachePutResponse)
      if (typeof waitUntil === 'function') waitUntil(putPromise)
      else await putPromise
    }

    return data
  } catch (error: any) {
    console.error('Google Places API error:', error?.message || error)
    // 3. On error, return stale cache if we have one, else fallback
    if (cacheStore) {
      const stale = await cacheStore.match(cacheRequest)
      if (stale) return (await stale.json()) as GoogleReviewsResponse
    }
    return FALLBACK
  }
})
