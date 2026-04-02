import { createImageUrlBuilder } from '@sanity/image-url'

let builder: ReturnType<typeof createImageUrlBuilder> | null = null

function getBuilder() {
  if (!builder) {
    builder = createImageUrlBuilder({
      projectId: '1j8cnt9p',
      dataset: 'production',
    })
  }
  return builder
}

export function urlFor(source: any) {
  return getBuilder().image(source)
}
