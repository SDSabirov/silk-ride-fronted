import { useAsyncData } from '#imports'
import { sanityClient } from '~/utils/sanityClient'

export function useSanityQuery<T = any>(key: string, query: string, params?: Record<string, any>) {
  return useAsyncData<T>(key, () => sanityClient.fetch<T>(query, params || {}))
}
