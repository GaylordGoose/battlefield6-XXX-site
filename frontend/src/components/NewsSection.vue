<template>
  <section id="news" class="py-20 bg-gradient-to-b from-bf-darker to-bf-dark relative">
    <!-- Top border effect -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bf-orange to-transparent"></div>
    
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <motion.div
        :initial="{ opacity: 0, y: 30 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8 }"
        class="text-center mb-16"
      >
        <div class="flex items-center justify-center gap-4 mb-6">
          <div class="w-16 h-1 bg-bf-orange"></div>
          <h2 class="text-4xl md:text-5xl font-heading tracking-widest text-bf-orange uppercase">
            Latest News
          </h2>
          <div class="w-16 h-1 bg-bf-orange"></div>
        </div>
        <p class="text-gray-400 text-lg tracking-wide">
          Stay updated with the latest Battlefield 6 news and updates
        </p>
      </motion.div>

      <!-- News Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.article
          v-for="(article, index) in newsArticles"
          :key="article.id"
          :initial="{ opacity: 0, y: 50 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: index * 0.1 }"
          class="group cursor-pointer"
          :while-hover="{ y: -10, scale: 1.02 }"
        >
          <div class="bg-gradient-to-br from-bf-medium to-bf-light border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 group-hover:border-bf-orange group-hover:shadow-2xl group-hover:shadow-bf-orange/20">
            <!-- Article Image -->
            <div class="relative h-48 overflow-hidden">
              <img
                :src="article.image"
                :alt="article.title"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 bg-bf-orange text-black text-xs font-bold tracking-widest uppercase rounded">
                  {{ article.category }}
                </span>
              </div>
              <div class="absolute bottom-4 left-4 text-white text-sm">
                {{ formatDate(article.date) }}
              </div>
            </div>

            <!-- Article Content -->
            <div class="p-6">
              <h3 class="text-xl font-heading text-white mb-3 group-hover:text-bf-orange transition-colors">
                {{ article.title }}
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed mb-4">
                {{ article.excerpt }}
              </p>
              <div class="flex items-center justify-between">
                <span class="text-bf-orange text-sm font-medium tracking-wide">
                  Read More →
                </span>
                <div class="flex items-center gap-2 text-gray-500 text-xs">
                  <Clock class="w-4 h-4" />
                  {{ article.readTime }} min read
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>

      <!-- View All Button -->
      <motion.div
        :initial="{ opacity: 0, y: 30 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.3 }"
        class="text-center mt-12"
      >
        <motion.button
          :while-hover="{ scale: 1.05 }"
          :while-tap="{ scale: 0.95 }"
          class="px-8 py-4 border-2 border-bf-orange bg-transparent text-bf-orange hover:bg-bf-orange hover:text-black transition-all duration-300 font-heading tracking-widest uppercase"
        >
          View All News
        </motion.button>
      </motion.div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { motion } from '@vueuse/motion'
import { Clock } from 'lucide-vue-next'

const newsArticles = ref([
  {
    id: 1,
    title: 'Major Weapon Balance Update',
    excerpt: 'Significant changes to weapon damage, recoil patterns, and attachment effectiveness in the latest patch.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop',
    category: 'Update',
    date: new Date('2024-01-15'),
    readTime: 5
  },
  {
    id: 2,
    title: 'New Map: Urban Warfare',
    excerpt: 'Experience intense close-quarters combat in the newly added urban environment with destructible buildings.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    category: 'Map',
    date: new Date('2024-01-12'),
    readTime: 3
  },
  {
    id: 3,
    title: 'Weekend Double XP Event',
    excerpt: 'Earn double experience points for all activities this weekend. Perfect time to level up your weapons and classes.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    category: 'Event',
    date: new Date('2024-01-10'),
    readTime: 2
  },
  {
    id: 4,
    title: 'Pro Player Meta Analysis',
    excerpt: 'Top professional players share their insights on the current meta and optimal loadout strategies.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
    category: 'Analysis',
    date: new Date('2024-01-08'),
    readTime: 7
  },
  {
    id: 5,
    title: 'New Vehicle Customization',
    excerpt: 'Unlock new vehicle skins, modifications, and special abilities in the latest content update.',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    category: 'Content',
    date: new Date('2024-01-05'),
    readTime: 4
  },
  {
    id: 6,
    title: 'Community Tournament Results',
    excerpt: 'Check out the highlights and results from our latest community tournament featuring the best players.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
    category: 'Tournament',
    date: new Date('2024-01-03'),
    readTime: 6
  }
])

const formatDate = (date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>