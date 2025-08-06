<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <article 
      v-for="post in posts" 
      :key="post.id" 
      class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
    >
      <!-- Image Container -->
      <div class="relative overflow-hidden aspect-[16/10]">
        <img
          :src="post.image"
          :alt="post.title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <!-- Category Badge -->
        <div class="absolute top-4 left-4">
          <span class="bg-gold text-black text-xs font-bold px-3 py-1 rounded-full">
            {{ post.category }}
          </span>
        </div>
        
        <!-- Read More Button (appears on hover) -->
        <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <NuxtLink
            :to="`/blog/${post.slug}`"
            class="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gold transition-colors duration-200 shadow-lg"
          >
            Read More
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
          <NuxtLink :to="`/blog/${post.slug}`">
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
            :to="`/blog/${post.slug}`"
            class="text-gold hover:text-yellow-600 transition-colors duration-200 flex items-center space-x-1 text-sm font-semibold"
          >
            <span>Read Article</span>
            <i class="bx bx-right-arrow-alt"></i>
          </NuxtLink>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
})

const formatDate = (dateString) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
  return new Date(dateString).toLocaleDateString('en-US', options)
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