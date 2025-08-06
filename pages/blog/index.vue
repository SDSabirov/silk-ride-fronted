<template>
    <div>
      <Navbar />
      
      <!-- Hero Section with enhanced design -->
      <section class="relative min-h-[60vh] flex items-center py-20">
        <div class="absolute inset-0 overflow-hidden">
          <img
            :src="cover"
            alt="Luxury Travel Blog - Silk Ride Chauffeur Services"
            class="w-full h-full object-cover"
            loading="eager"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div class="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div class="max-w-3xl">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] mb-6">
              {{ t('pages.blog.title') }} <span class="text-gold block sm:inline">& Travel Insights</span>
            </h1>
            <p class="text-lg sm:text-xl md:text-2xl font-light mb-8 opacity-90 leading-relaxed">
              Discover luxury travel tips, chauffeur service insights, and exclusive destination guides from London's premium transportation experts
            </p>
            
            <!-- Featured Topics -->
            <div class="flex flex-wrap gap-3 mb-8">
              <span class="bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-medium">Luxury Travel</span>
              <span class="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">Airport Transfers</span>
              <span class="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">London Destinations</span>
              <span class="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">Business Travel</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Blog Categories Section -->
      <section class="bg-gray-50 py-16">
        <div class="max-w-screen-xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-heading font-bold text-black mb-4">Explore Our Categories</h2>
            <p class="text-gray-600 text-lg">Find articles tailored to your interests</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              v-for="category in blogCategories" 
              :key="category.name"
              @click="filterByCategory(category.slug)"
              class="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <i :class="category.icon" class="text-black text-xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                {{ category.name }}
              </h3>
              <p class="text-gray-600 text-sm mb-3">{{ category.description }}</p>
              <div class="text-gold font-medium text-sm">{{ category.count }} Articles</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Article -->
      <section v-if="featuredPost" class="py-16">
        <div class="max-w-screen-xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-heading font-bold text-black mb-4">Featured Article</h2>
            <div class="w-16 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div class="relative overflow-hidden aspect-[4/3] lg:aspect-auto">
                <img
                  :src="featuredPost.image"
                  :alt="featuredPost.title"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
                <div class="absolute top-4 left-4">
                  <span class="bg-gold text-black text-sm font-bold px-4 py-2 rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              <div class="p-8 lg:p-12 flex flex-col justify-center">
                <div class="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <i class="bx bx-calendar text-gold"></i>
                  <time :datetime="featuredPost.date">{{ formatDate(featuredPost.date) }}</time>
                  <span class="mx-2">•</span>
                  <i class="bx bx-time-five text-gold"></i>
                  <span>{{ featuredPost.readTime || '8 min read' }}</span>
                </div>
                
                <h3 class="text-2xl lg:text-3xl font-bold text-black mb-4 leading-tight">
                  {{ featuredPost.title }}
                </h3>
                
                <p class="text-gray-600 text-lg leading-relaxed mb-6">
                  {{ featuredPost.description }}
                </p>
                
                <div class="flex flex-wrap gap-2 mb-6">
                  <span 
                    v-for="tag in featuredPost.tags?.slice(0, 3)" 
                    :key="tag"
                    class="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                  >
                    #{{ tag }}
                  </span>
                </div>
                
                <NuxtLink
                  :to="`/blog/${featuredPost.slug}`"
                  class="inline-flex items-center space-x-2 bg-gold hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg transition-colors duration-200 w-fit"
                >
                  <span>Read Full Article</span>
                  <i class="bx bx-right-arrow-alt"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Latest Articles -->
      <section class="bg-gray-50 py-16">
        <div class="max-w-screen-xl mx-auto px-6">
          <div class="flex items-center justify-between mb-12">
            <div>
              <h2 class="text-3xl font-heading font-bold text-black mb-4">
                {{ selectedCategory ? `${selectedCategory} Articles` : 'Latest Articles' }}
              </h2>
              <p class="text-gray-600">Stay updated with our latest insights and travel tips</p>
            </div>
            
            <!-- Filter Reset -->
            <button
              v-if="selectedCategory"
              @click="resetFilter"
              class="flex items-center space-x-2 text-gold hover:text-yellow-600 font-medium transition-colors"
            >
              <i class="bx bx-x-circle"></i>
              <span>Show All</span>
            </button>
          </div>
          
          <BlogCards :posts="visiblePosts" />
          
          <!-- Load More Button -->
          <div v-if="currentPage < totalPages" class="text-center mt-12">
            <button
              @click="nextPage"
              class="inline-flex items-center space-x-2 bg-gold hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <i class="bx bx-plus-circle"></i>
              <span>Load More Articles</span>
            </button>
          </div>
          
          <!-- No More Articles -->
          <div v-else-if="blogPosts.length > perPage" class="text-center mt-12">
            <p class="text-gray-500">You've reached the end of our articles</p>
          </div>
        </div>
      </section>

      <!-- Newsletter Signup -->
      <section class="bg-gradient-to-r from-black to-gray-800 text-white py-16">
        <div class="max-w-screen-xl mx-auto px-6 text-center">
          <h2 class="text-3xl font-heading font-bold mb-4">Stay Updated</h2>
          <p class="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for exclusive travel tips and luxury service insights
          </p>
          
          <div class="max-w-md mx-auto">
            <div class="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                class="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button class="bg-gold hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
  
      <Footer />
    </div>
  </template>
<script setup>
import cover from "@/assets/images/covers/services-cover.webp";
import { useI18n } from '#imports';
import { useSeo } from '~/utils/useSeo'
import { ref, computed } from 'vue'
import placeHolder from "~/assets/images/covers/fleet.webp"

useSeo('blog')
const { t } = useI18n();

const perPage = 6
const currentPage = ref(1)
const selectedCategory = ref(null)

// Blog Categories
const blogCategories = [
  {
    name: 'Luxury Travel',
    slug: 'luxury-travel',
    description: 'Premium travel experiences and tips',
    icon: 'bx bx-diamond',
    count: 8
  },
  {
    name: 'Airport Transfers',
    slug: 'airport-transfers',
    description: 'Airport pickup and transfer guides',
    icon: 'bx bx-plane-take-off',
    count: 6
  },
  {
    name: 'Business Travel',
    slug: 'business-travel',
    description: 'Corporate and executive travel insights',
    icon: 'bx bx-briefcase',
    count: 5
  },
  {
    name: 'London Destinations',
    slug: 'london-destinations',
    description: 'Explore London\'s finest attractions',
    icon: 'bx bx-map',
    count: 7
  }
]

// Comprehensive Blog Posts
const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Benefits of Hiring a Professional Chauffeur Service',
    description: 'Discover how professional chauffeurs elevate your travel experience with luxury, safety, and convenience for business and leisure trips.',
    image: placeHolder,
    date: '2025-08-01',
    slug: 'benefits-of-hiring-a-chauffeur',
    category: 'Luxury Travel',
    readTime: '6 min read',
    author: 'Silk Ride Team',
    tags: ['chauffeur-service', 'luxury-travel', 'business-travel', 'convenience'],
    featured: true
  },
  {
    id: 2,
    title: 'Complete Guide to VIP Airport Transfers in London',
    description: 'Everything you need to know about luxury airport pickups, from booking to arrival - make your journey seamless with our comprehensive guide.',
    image: placeHolder,
    date: '2025-08-01',
    slug: 'vip-airport-transfers-london-guide',
    category: 'Airport Transfers',
    readTime: '8 min read',
    author: 'Silk Ride Team',
    tags: ['airport-transfers', 'heathrow', 'gatwick', 'vip-service']
  },
  {
    id: 3,
    title: 'Business Travel Excellence: Executive Chauffeur Services',
    description: 'How executive chauffeur services enhance productivity and professional image for business travelers and corporate events.',
    image: placeHolder,
    date: '2025-08-01',
    slug: 'executive-chauffeur-business-travel',
    category: 'Business Travel',
    readTime: '5 min read',
    author: 'Silk Ride Team',
    tags: ['executive-travel', 'business-chauffeur', 'corporate-services', 'productivity']
  },
  {
    id: 4,
    title: 'Hidden Gems of London: Luxury Day Tours',
    description: 'Explore London\'s secret attractions and exclusive experiences with our curated luxury day tours and chauffeur-guided adventures.',
    image: placeHolder,
    date: '2025-08-01',
    slug: 'london-luxury-day-tours-hidden-gems',
    category: 'London Destinations',
    readTime: '10 min read',
    author: 'Silk Ride Team',
    tags: ['london-tours', 'luxury-experiences', 'hidden-gems', 'sightseeing']
  },
  {
    id: 5,
    title: 'Wedding Chauffeur Services: Your Perfect Day Transport',
    description: 'Make your wedding day unforgettable with luxury chauffeur services - from bridal arrivals to guest transportation.',
    image: placeHolder,
    date: '2025-08-01',
    slug: 'wedding-chauffeur-services-perfect-day',
    category: 'Luxury Travel',
    readTime: '7 min read',
    author: 'Silk Ride Team',
    tags: ['wedding-chauffeur', 'bridal-transport', 'special-occasions', 'luxury-weddings']
  },
  {
    id: 6,
    title: 'Heathrow Airport Transfer: Terminal Guide & Tips',
    description: 'Navigate Heathrow Airport like a pro with our comprehensive terminal guide and insider tips for smooth luxury transfers.',
    image: placeHolder,
    date: '2025-08-01',
    slug: 'heathrow-airport-transfer-terminal-guide',
    category: 'Airport Transfers',
    readTime: '9 min read',
    author: 'Silk Ride Team',
    tags: ['heathrow-airport', 'terminal-guide', 'airport-navigation', 'transfer-tips']
  },
  {
    id: 7,
    title: 'Corporate Event Transportation: Seamless Group Travel',
    description: 'Plan perfect corporate events with professional group transportation solutions and executive chauffeur services.',
    image: placeHolder,
    date: '2025-08-01',
    slug: 'corporate-event-transportation-group-travel',
    category: 'Business Travel',
    readTime: '6 min read',
    author: 'Silk Ride Team',
    tags: ['corporate-events', 'group-transport', 'event-planning', 'business-solutions']
  },
  {
    id: 8,
    title: 'Oxford and Cambridge Day Tours: Academic Excellence',
    description: 'Discover Britain\'s prestigious universities with luxury chauffeur tours to Oxford and Cambridge, including college visits and historical insights.',
    image: placeHolder,
    date: '2024-12-28',
    slug: 'oxford-cambridge-university-tours',
    category: 'London Destinations',
    readTime: '11 min read',
    author: 'Professor Alan Davies',
    tags: ['oxford-tours', 'cambridge-tours', 'university-visits', 'educational-travel']
  },
  {
    id: 9,
    title: 'Gatwick Airport Luxury Transfers: Complete Guide',
    description: 'Everything about Gatwick Airport transfers, from terminal locations to luxury pickup services and travel times to central London.',
    image: placeHolder,
    date: '2025-08-01',
    slug: 'gatwick-airport-luxury-transfer-guide',
    category: 'Airport Transfers',
    readTime: '7 min read',
    author: 'Silk Ride Team',
    tags: ['gatwick-airport', 'south-terminal', 'north-terminal', 'luxury-transfers']
  },
  {
    id: 10,
    title: 'The Art of Luxury Travel: Premium Service Standards',
    description: 'Understanding what defines true luxury travel experiences and the service standards that make the difference in premium transportation.',
    image: placeHolder,
    date: '2025-08-01',
    slug: 'art-of-luxury-travel-premium-standards',
    category: 'Luxury Travel',
    readTime: '8 min read',
    author: 'Silk Ride Team',
    tags: ['luxury-standards', 'premium-service', 'travel-excellence', 'service-quality']
  },
  {
    id: 11,
    title: 'Bath and Stonehenge Day Tours: Ancient Wonders',
    description: 'Explore England\'s ancient history with luxury day tours to Bath\'s Roman heritage and Stonehenge\'s mysterious stone circles.',
    image: placeHolder,
    date: '2025-08-01',
    slug: 'bath-stonehenge-day-tours-ancient-wonders',
    category: 'London Destinations',
    readTime: '12 min read',
    author: 'Silk Ride Team',
    tags: ['bath-tours', 'stonehenge-tours', 'roman-baths', 'ancient-history']
  },
  {
    id: 12,
    title: 'Executive Airport Lounges: Premium Comfort Guide',
    description: 'Access the best airport lounges with executive travel privileges and enhance your luxury travel experience before flights.',
    image: placeHolder,
    date: '2025-08-01',
    slug: 'executive-airport-lounges-premium-guide',
    category: 'Business Travel',
    readTime: '6 min read',
    author: 'Silk Ride Team',
    tags: ['airport-lounges', 'executive-travel', 'premium-comfort', 'travel-privileges']
  }
]

const featuredPost = computed(() => {
  return blogPosts.find(post => post.featured) || blogPosts[0]
})

const filteredPosts = computed(() => {
  if (!selectedCategory.value) return blogPosts
  return blogPosts.filter(post => post.category === selectedCategory.value)
})

const totalPages = computed(() =>
  Math.ceil(filteredPosts.value.length / perPage)
)

const visiblePosts = computed(() =>
  filteredPosts.value.slice((currentPage.value - 1) * perPage, currentPage.value * perPage)
)

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}

function filterByCategory(categorySlug) {
  const category = blogCategories.find(cat => cat.slug === categorySlug)
  selectedCategory.value = category?.name || null
  currentPage.value = 1
}

function resetFilter() {
  selectedCategory.value = null
  currentPage.value = 1
}

const formatDate = (dateString) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
  return new Date(dateString).toLocaleDateString('en-US', options)
}
</script>
