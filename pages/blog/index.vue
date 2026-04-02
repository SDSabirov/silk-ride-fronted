<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gray-900 py-20 md:py-28">
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <nav class="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
          <NuxtLink :to="localePath('/')" class="hover:text-gold transition-colors">{{ $t('blog.home') }}</NuxtLink>
          <i class="bx bx-chevron-right"></i>
          <span class="text-gold">{{ $t('blog.title') }}</span>
        </nav>
        <h1 class="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {{ $t('blog.title') }}
        </h1>
        <p class="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          {{ $t('blog.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Category Filter -->
      <div class="mb-10">
        <BlogCategoryFilter
          :categories="categories || []"
          :selected="selectedCategory"
          @select="onCategorySelect"
        />
      </div>

      <!-- Posts Grid -->
      <div v-if="posts && posts.length">
        <BlogCards :posts="posts" />
        <BlogPagination :current-page="currentPage" :total-pages="totalPages" />
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-20">
        <i class="bx bx-notepad text-6xl text-gray-300 mb-4"></i>
        <p class="text-gray-500 text-lg">{{ $t('blog.noPosts') }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter, useLocalePath } from '#imports'
import { useI18n } from 'vue-i18n'
import { useSanityQuery } from '~/composables/useSanity'
import { useSeo } from '~/utils/useSeo'
import { blogListingSchema } from '~/utils/blogSchemas'
import { urlFor } from '~/utils/sanityImage'

const { locale } = useI18n()
const route = useRoute()
const router = useRouter()
const localePath = useLocalePath()

useSeo('blog')

// JSON-LD
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(blogListingSchema()),
    },
  ],
})

const POSTS_PER_PAGE = 6

const currentPage = computed(() => {
  const page = Number(route.query.page) || 1
  return Math.max(1, page)
})

const selectedCategory = computed(() => {
  return (route.query.category as string) || null
})

// Fetch categories
const { data: categories } = await useSanityQuery(
  'blog-categories',
  `*[_type == "category"] | order(title asc) { _id, title, slug }`
)

// Fetch all posts for current language
const lang = locale.value === 'ru' ? 'ru' : 'en'
const { data: allPosts } = await useSanityQuery(
  `blog-posts-${lang}`,
  `*[_type == "post" && language == $lang] | order(featured desc, publishedAt desc) {
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
  { lang }
)

// Client-side filtering and pagination
const filteredPosts = computed(() => {
  if (!allPosts.value) return []
  let items = allPosts.value as any[]
  if (selectedCategory.value) {
    items = items.filter((p: any) => p.category?.slug?.current === selectedCategory.value)
  }
  return items
})

const totalPages = computed(() => Math.ceil(filteredPosts.value.length / POSTS_PER_PAGE))

const posts = computed(() => {
  const start = (currentPage.value - 1) * POSTS_PER_PAGE
  return filteredPosts.value.slice(start, start + POSTS_PER_PAGE).map((post: any) => ({
    ...post,
    image: post.mainImage ? urlFor(post.mainImage).width(800).height(500).format('webp').url() : '',
    slug: post.slug.current,
    description: post.excerpt,
    date: post.publishedAt,
    category: post.category?.title || '',
    author: post.author?.name || 'Silk Ride Team',
    postType: post.postType || 'article',
    featured: post.featured || false,
    eventDate: post.event?.eventDate || null,
  }))
})

function onCategorySelect(category: string | null) {
  const query: Record<string, string> = {}
  if (category) query.category = category
  router.push({ path: route.path, query })
}
</script>
