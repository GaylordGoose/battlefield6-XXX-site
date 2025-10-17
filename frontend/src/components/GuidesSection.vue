<template>
  <section id="guides" class="py-20 bg-gradient-to-b from-bf-darker to-bf-dark relative">
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
            Tactical Guides
          </h2>
          <div class="w-16 h-1 bg-bf-orange"></div>
        </div>
        <p class="text-gray-400 text-lg tracking-wide">
          Master the battlefield with expert strategies and tactics
        </p>
      </motion.div>

      <!-- Guides Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.article
          v-for="(guide, index) in guides"
          :key="guide.id"
          :initial="{ opacity: 0, y: 50 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: index * 0.1 }"
          class="group cursor-pointer"
          :while-hover="{ y: -10, scale: 1.02 }"
        >
          <div class="bg-gradient-to-br from-bf-medium to-bf-light border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 group-hover:border-bf-orange group-hover:shadow-2xl group-hover:shadow-bf-orange/20 relative">
            <!-- Guide Image -->
            <div class="relative h-48 overflow-hidden">
              <img
                :src="guide.image"
                :alt="guide.title"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 bg-bf-orange text-black text-xs font-bold tracking-widest uppercase rounded">
                  {{ guide.category }}
                </span>
              </div>
              <div class="absolute top-4 right-4">
                <div class="flex items-center gap-1 bg-black/60 px-2 py-1 rounded">
                  <Star class="w-4 h-4 text-yellow-400" />
                  <span class="text-white text-xs font-bold">{{ guide.rating }}</span>
                </div>
              </div>
              <div class="absolute bottom-4 left-4 text-white text-sm">
                {{ guide.difficulty }}
              </div>
            </div>

            <!-- Guide Content -->
            <div class="p-6">
              <h3 class="text-xl font-heading text-white mb-3 group-hover:text-bf-orange transition-colors">
                {{ guide.title }}
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed mb-4">
                {{ guide.description }}
              </p>
              
              <!-- Guide Stats -->
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-4 text-xs text-gray-500">
                  <div class="flex items-center gap-1">
                    <Clock class="w-4 h-4" />
                    <span>{{ guide.duration }} min</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <Users class="w-4 h-4" />
                    <span>{{ guide.views }} views</span>
                  </div>
                </div>
                <div class="flex items-center gap-1 text-bf-orange text-xs">
                  <TrendingUp class="w-4 h-4" />
                  <span>{{ guide.trending }}% trending</span>
                </div>
              </div>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tag in guide.tags"
                  :key="tag"
                  class="px-2 py-1 bg-bf-orange/20 text-bf-orange text-xs rounded border border-bf-orange/30"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Action Button -->
              <div class="flex items-center justify-between">
                <span class="text-bf-orange text-sm font-medium tracking-wide">
                  Read Guide →
                </span>
                <div class="flex items-center gap-2">
                  <Bookmark class="w-4 h-4 text-gray-500 hover:text-bf-orange transition-colors cursor-pointer" />
                  <Share class="w-4 h-4 text-gray-500 hover:text-bf-orange transition-colors cursor-pointer" />
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
          View All Guides
        </motion.button>
      </motion.div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { motion } from '@vueuse/motion'
import { 
  Clock, 
  Users, 
  TrendingUp, 
  Star, 
  Bookmark, 
  Share 
} from 'lucide-vue-next'

const guides = ref([
  {
    id: 1,
    title: 'Advanced Positioning Tactics',
    description: 'Learn how to control key positions and dominate the battlefield with strategic positioning.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop',
    category: 'Strategy',
    difficulty: 'Advanced',
    duration: 15,
    views: '12.5K',
    rating: 4.9,
    trending: 85,
    tags: ['Positioning', 'Strategy', 'Advanced']
  },
  {
    id: 2,
    title: 'Weapon Recoil Control',
    description: 'Master recoil patterns and improve your accuracy with these proven techniques.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    category: 'Combat',
    difficulty: 'Intermediate',
    duration: 8,
    views: '8.2K',
    rating: 4.7,
    trending: 72,
    tags: ['Weapons', 'Accuracy', 'Combat']
  },
  {
    id: 3,
    title: 'Team Coordination Basics',
    description: 'Essential communication and teamwork strategies for squad-based gameplay.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    category: 'Teamwork',
    difficulty: 'Beginner',
    duration: 12,
    views: '15.3K',
    rating: 4.8,
    trending: 91,
    tags: ['Teamwork', 'Communication', 'Squad']
  },
  {
    id: 4,
    title: 'Map Control Strategies',
    description: 'Understand how to control and maintain dominance over key map areas.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
    category: 'Strategy',
    difficulty: 'Advanced',
    duration: 20,
    views: '9.7K',
    rating: 4.9,
    trending: 78,
    tags: ['Maps', 'Control', 'Strategy']
  },
  {
    id: 5,
    title: 'Vehicle Combat Guide',
    description: 'Master vehicle combat with advanced techniques for tanks, helicopters, and jets.',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    category: 'Vehicles',
    difficulty: 'Expert',
    duration: 25,
    views: '6.8K',
    rating: 4.6,
    trending: 65,
    tags: ['Vehicles', 'Combat', 'Advanced']
  },
  {
    id: 6,
    title: 'Loadout Optimization',
    description: 'Create the perfect loadout for any situation with our comprehensive optimization guide.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
    category: 'Loadouts',
    difficulty: 'Intermediate',
    duration: 10,
    views: '18.1K',
    rating: 4.8,
    trending: 88,
    tags: ['Loadouts', 'Optimization', 'Meta']
  }
])
</script>