export const useGoogleReviews = () => {
  const { data, status } = useFetch('/api/google-reviews', {
    key: 'google-reviews',
    default: () => ({
      rating: 5.0,
      reviewCount: 24,
      reviews: []
    })
  })

  const rating = computed(() => data.value?.rating ?? 5.0)
  const reviewCount = computed(() => data.value?.reviewCount ?? 24)
  const reviews = computed(() => data.value?.reviews ?? [])

  return { rating, reviewCount, reviews, status }
}
