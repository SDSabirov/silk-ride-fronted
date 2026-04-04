<template>
  <div v-if="post">
    <Navbar />
    <!-- Hero Section -->
    <section class="relative bg-gray-900">
      <div class="absolute inset-0">
        <img
          v-if="heroImage"
          :src="heroImage"
          :alt="post.title"
          class="w-full h-full object-cover opacity-40"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/30"></div>
      </div>
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <!-- Breadcrumbs -->
        <nav class="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <NuxtLink :to="localePath('/')" class="hover:text-gold transition-colors">{{ $t('blog.home') }}</NuxtLink>
          <i class="bx bx-chevron-right"></i>
          <NuxtLink :to="localePath('/blog')" class="hover:text-gold transition-colors">{{ $t('blog.title') }}</NuxtLink>
          <i class="bx bx-chevron-right"></i>
          <span class="text-gold line-clamp-1">{{ post.title }}</span>
        </nav>

        <!-- Badges -->
        <div class="flex items-center gap-3 mb-4">
          <span v-if="post.category" class="inline-block bg-gold text-black text-xs font-bold px-3 py-1 rounded-full">
            {{ post.category.title }}
          </span>
          <span v-if="post.postType === 'event'" class="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
            <i class="bx bx-calendar-event mr-1"></i> Event
          </span>
        </div>

        <!-- Title -->
        <h1 class="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          {{ post.title }}
        </h1>

        <!-- Meta -->
        <div class="flex flex-wrap items-center gap-4 text-sm text-gray-300">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
              <i class="bx bx-user text-black text-sm"></i>
            </div>
            <span>{{ post.author?.name || 'Silk Ride Team' }}</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="bx bx-calendar text-gold"></i>
            <time :datetime="post.publishedAt">{{ formatDate(post.publishedAt) }}</time>
          </div>
          <div v-if="post.readTime" class="flex items-center gap-2">
            <i class="bx bx-time-five text-gold"></i>
            <span>{{ post.readTime }}</span>
          </div>
        </div>

        <!-- Event Info Bar -->
        <div v-if="post.postType === 'event' && post.event" class="mt-6 p-4 bg-white/10 rounded-xl backdrop-blur-sm flex flex-wrap items-center gap-6 text-sm text-white">
          <div v-if="post.event.eventDate" class="flex items-center gap-2">
            <i class="bx bx-calendar-check text-gold text-lg"></i>
            <div>
              <span class="text-gray-400 block text-xs">Event Date</span>
              <span class="font-semibold">{{ formatDate(post.event.eventDate) }}</span>
              <span v-if="post.event.eventEndDate"> — {{ formatDate(post.event.eventEndDate) }}</span>
            </div>
          </div>
          <div v-if="post.event.venue" class="flex items-center gap-2">
            <i class="bx bx-map text-gold text-lg"></i>
            <div>
              <span class="text-gray-400 block text-xs">Venue</span>
              <span class="font-semibold">{{ post.event.venue }}</span>
            </div>
          </div>
          <a
            v-if="post.event.eventUrl"
            :href="post.event.eventUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="ml-auto inline-flex items-center gap-2 px-4 py-2 bg-gold text-black rounded-full text-sm font-bold hover:bg-yellow-500 transition-colors"
          >
            Event Details <i class="bx bx-link-external"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- Article Body -->
    <article class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <BlogPortableTextRenderer v-if="post.body" :value="post.body" />

      <!-- CTA Button -->
      <BlogCtaBanner v-if="post.cta?.label && post.cta?.url" :cta="post.cta" />

      <!-- Tags -->
      <div v-if="post.tags && post.tags.length" class="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-200">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded-full hover:bg-gold hover:text-black transition-colors duration-200"
        >
          #{{ tag }}
        </span>
      </div>

      <!-- Author Card -->
      <div v-if="post.author" class="mt-12">
        <BlogAuthorCard :author="post.author" />
      </div>

      <!-- Related Service -->
      <BlogRelatedServiceBanner v-if="post.relatedService" :service-slug="post.relatedService" />
    </article>

    <!-- Related Posts -->
    <section v-if="related && related.length" class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="font-serif text-3xl font-bold text-gray-900 mb-8 text-center">
          {{ $t('blog.relatedPosts') }}
        </h2>
        <BlogCards :posts="related" />
      </div>
    </section>

    <!-- Back to Blog -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <NuxtLink
        :to="localePath('/blog')"
        class="inline-flex items-center gap-2 text-gold hover:text-yellow-600 font-semibold transition-colors duration-200"
      >
        <i class="bx bx-left-arrow-alt"></i>
        {{ $t('blog.backToBlog') }}
      </NuxtLink>
    </div>
  </div>

  <!-- 404 -->
  <div v-else class="max-w-4xl mx-auto px-4 py-32 text-center">
    <i class="bx bx-error-circle text-6xl text-gray-300 mb-4"></i>
    <h1 class="font-serif text-3xl font-bold text-gray-900 mb-4">Post not found</h1>
    <NuxtLink
      :to="localePath('/blog')"
      class="inline-flex items-center gap-2 text-gold hover:text-yellow-600 font-semibold"
    >
      <i class="bx bx-left-arrow-alt"></i>
      {{ $t('blog.backToBlog') }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useLocalePath, useHead } from '#imports'
import { useI18n } from 'vue-i18n'
import { useSanityQuery } from '~/composables/useSanity'
import { useBlogSeo } from '~/utils/useBlogSeo'
import { articleSchema, eventSchema } from '~/utils/blogSchemas'
import { urlFor } from '~/utils/sanityImage'

const { locale } = useI18n()
const route = useRoute()
const localePath = useLocalePath()

const slug = route.params.slug as string
const lang = locale.value === 'ru' ? 'ru' : 'en'

// Fetch post with all new fields
const { data: post } = await useSanityQuery(
  `blog-post-${slug}`,
  `*[_type == "post" && slug.current == $slug && language == $lang][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    mainImage,
    publishedAt,
    tags,
    postType,
    featured,
    relatedService,
    cta,
    event,
    "readTime": round(length(pt::text(body)) / 5 / 200) + " min read",
    "category": category->{ title, slug },
    "author": author->{ name, image, bio },
    seo
  }`,
  { slug, lang }
)

// Hero image
const heroImage = computed(() => {
  if (!post.value?.mainImage) return ''
  return urlFor(post.value.mainImage).width(1920).height(800).format('webp').url()
})

// SEO & JSON-LD
if (post.value) {
  useBlogSeo(post.value)

  const schemas: any[] = [articleSchema(post.value)]

  // Add Event schema for event posts
  if (post.value.postType === 'event') {
    const evSchema = eventSchema(post.value)
    if (evSchema) schemas.push(evSchema)
  }

  useHead({
    meta: post.value.seo?.focusKeyword
      ? [{ name: 'keywords', content: post.value.seo.focusKeyword }]
      : [],
    script: schemas.map((s) => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(s),
    })),
  })
}

// Related posts
const categorySlug = post.value?.category?.slug?.current || ''
const { data: relatedRaw } = await useSanityQuery(
  `blog-related-${slug}`,
  `*[_type == "post" && language == $lang && category->slug.current == $categorySlug && slug.current != $slug] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    postType,
    featured,
    event,
    "readTime": round(length(pt::text(body)) / 5 / 200) + " min read",
    "category": category->{ title, slug },
    "tags": tags,
    "author": author->{ name, image }
  }`,
  { slug, lang, categorySlug }
)

const related = computed(() => {
  if (!relatedRaw.value) return []
  return (relatedRaw.value as any[]).map((p: any) => ({
    ...p,
    image: p.mainImage ? urlFor(p.mainImage).width(800).height(500).format('webp').url() : '',
    slug: p.slug.current,
    description: p.excerpt,
    date: p.publishedAt,
    category: p.category?.title || '',
    author: p.author?.name || 'Silk Ride Team',
  }))
})

function formatDate(dateString: string) {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString(locale.value === 'ru' ? 'ru-RU' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>
