import { defineEventHandler } from 'h3'

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

let cache: { data: GoogleReviewsResponse; timestamp: number } | null = null
const CACHE_DURATION = 1000 * 60 * 60 * 6 // 6 hours

export default defineEventHandler(async (): Promise<GoogleReviewsResponse> => {
  // Return cached data if fresh
  if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
    return cache.data
  }

  const config = useRuntimeConfig()
  const apiKey = config.googlePlacesApiKey

  if (!apiKey) {
    return FALLBACK
  }

  try {
    // Step 1: If we have a Place ID, use it directly. Otherwise, search by name.
    const placeId = config.googlePlaceId
    let resolvedPlaceId = placeId

    if (!resolvedPlaceId) {
      // Text search to find the place
      const searchResponse = await $fetch<any>(
        'https://places.googleapis.com/v1/places:searchText',
        {
          method: 'POST',
          headers: {
            'X-Goog-Api-Key': apiKey,
            'X-Goog-FieldMask': 'places.id'
          },
          body: {
            textQuery: 'Silk Ride Chauffeur Services Radlett',
            maxResultCount: 1
          }
        }
      )

      resolvedPlaceId = searchResponse?.places?.[0]?.id
      if (!resolvedPlaceId) {
        console.error('Google Places: could not find place by text search')
        return cache?.data || FALLBACK
      }
    }

    // Step 2: Get place details with reviews
    const response = await $fetch<any>(
      `https://places.googleapis.com/v1/places/${resolvedPlaceId}`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'rating,userRatingCount,reviews'
        }
      }
    )

    const data: GoogleReviewsResponse = {
      rating: response.rating || 5.0,
      reviewCount: response.userRatingCount || 24,
      reviews: (response.reviews || []).slice(0, 5).map((review: any) => ({
        author: review.authorAttribution?.displayName || 'Anonymous',
        rating: review.rating || 5,
        text: review.text?.text || '',
        date: review.publishTime || new Date().toISOString(),
        relativeTime: review.relativePublishTimeDescription || ''
      }))
    }

    cache = { data, timestamp: Date.now() }
    return data
  } catch (error: any) {
    console.error('Google Places API error:', error?.message || error)
    return cache?.data || FALLBACK
  }
})
