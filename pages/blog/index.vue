<template>
    <div>
      <Navbar />
      <CommonHero :image="cover" :page="t('pages.blog.title')" loading="lazy" />
  
      <div class="bg-[url(/assets/images/covers/bgpattern.png)] bg-cover bg-center bg-no-repeat">
        <CommonPageIntro
          :title="t('pages.blog.intro')"
          :paragraph="t('pages.blog.paragraph')"
        />
      </div>
  
      <div class="w-full max-w-screen-xl px-4 md:px-0 mx-auto py-12">
        <BlogCards :posts="visiblePosts" />
  
        <div v-if="currentPage < totalPages" class="text-center mt-8 mb-6">
          <button
            @click="nextPage"
            class="px-6 py-2 text-sm font-medium bg-blue-600 text-black rounded hover:bg-blue-700 transition"
          >
            <!-- {{ t('common.loadMore') }} -->
              Load More
          </button>
        </div>
      </div>
  
      <Footer />
    </div>
  </template>
<script setup>
import cover from "@/assets/images/covers/services-cover.webp";
import { useI18n } from '#imports';
import { useSeo } from '~/utils/useSeo'
import { ref, computed } from 'vue'
import placeHolder from "~/assets/images/womanpassenger.webp"
useSeo('blog')
const { t } = useI18n();

const perPage = 6
const currentPage = ref(1)

const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Benefits of Hiring a Chauffeur',
    description: 'Explore how professional chauffeurs elevate your travel experience.',
    image: placeHolder,
    date: '2025-04-17',
    slug: 'benefits-of-hiring-a-chauffeur'
  },
  {
    id: 2,
    title: 'What to Expect from VIP Airport Transfers',
    description: 'A complete guide to luxury airport pickup services.',
    image: placeHolder,
    date: '2025-04-10',
    slug: 'vip-airport-transfers'
  },
 
 
]

const totalPages = computed(() =>
  Math.ceil(blogPosts.length / perPage)
)

const visiblePosts = computed(() =>
  blogPosts.slice((currentPage.value - 1) * perPage, currentPage.value * perPage)
)

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}
</script>
