<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <article
      v-for="post in posts"
      :key="post._id"
      class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
    >
      <!-- Image Container -->
      <div class="relative overflow-hidden aspect-[16/10]">
        <NuxtImg
          v-if="post.image"
          :src="post.image"
          :alt="post.title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          width="800"
          height="500"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <!-- Badges -->
        <div class="absolute top-4 left-4 flex flex-wrap gap-2">
          <span v-if="post.category" class="bg-gold text-black text-xs font-bold px-3 py-1 rounded-full">
            {{ post.category }}
          </span>
          <span v-if="post.featured" class="bg-white text-black text-xs font-bold px-3 py-1 rounded-full shadow">
            <i class="bx bxs-star text-gold mr-0.5"></i> Featured
          </span>
          <span v-if="post.postType === 'event'" class="bg-white/90 text-black text-xs font-bold px-3 py-1 rounded-full shadow backdrop-blur-sm">
            <i class="bx bx-calendar-event mr-0.5"></i> Event
          </span>
        </div>

        <!-- Event Date Overlay -->
        <div v-if="post.postType === 'event' && post.eventDate" class="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-2 text-center min-w-[56px]">
          <span class="block text-gold text-xs font-bold uppercase">{{ getEventMonth(post.eventDate) }}</span>
          <span class="block text-black text-xl font-bold leading-none">{{ getEventDay(post.eventDate) }}</span>
        </div>

        <!-- Read More Button (appears on hover) -->
        <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <NuxtLink
            :to="localePath('/blog/' + post.slug)"
            class="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gold transition-colors duration-200 shadow-lg"
          >
            {{ $t('blog.readMore') }}
          </NuxtLink>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6">
        <!-- Meta Information -->
        <div class="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div class="flex items-center space-x-2">
            <i class="bx bx-calendar text-gold"></i>
            <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          </div>
          <div class="flex items-center space-x-2">
            <i class="bx bx-time-five text-gold"></i>
            <span>{{ post.readTime || '5 min read' }}</span>
          </div>
        </div>

        <!-- Title -->
        <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-gold transition-colors duration-200">
          <NuxtLink :to="localePath('/blog/' + post.slug)">
            {{ post.title }}
          </NuxtLink>
        </h3>

        <!-- Description -->
        <p class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {{ post.description }}
        </p>

        <!-- Tags -->
        <div v-if="post.tags && post.tags.length" class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="tag in post.tags.slice(0, 3)"
            :key="tag"
            class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full hover:bg-gold hover:text-black transition-colors duration-200"
          >
            #{{ tag }}
          </span>
        </div>

        <!-- Footer -->
        <div class="flex items-center justify-between pt-4 border-t border-gray-100">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
              <i class="bx bx-user text-black text-sm"></i>
            </div>
            <span class="text-sm text-gray-600">{{ post.author || 'Silk Ride Team' }}</span>
          </div>

          <NuxtLink
            :to="localePath('/blog/' + post.slug)"
            class="text-gold hover:text-yellow-600 transition-colors duration-200 flex items-center space-x-1 text-sm font-semibold"
          >
            <span>{{ $t('blog.readMore') }}</span>
            <i class="bx bx-right-arrow-alt"></i>
          </NuxtLink>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { useLocalePath } from '#imports'
import { useI18n } from 'vue-i18n'

const localePath = useLocalePath()
const { locale } = useI18n()

const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString(locale.value === 'ru' ? 'ru-RU' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getEventMonth = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-GB', { month: 'short' })
}

const getEventDay = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).getDate()
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
