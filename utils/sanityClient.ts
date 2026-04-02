import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '1j8cnt9p',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})
