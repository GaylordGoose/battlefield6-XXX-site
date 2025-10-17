<template>
  <section id="features" class="py-20 bg-gradient-to-b from-bf-dark to-bf-darker relative">
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
            Why Choose Us
          </h2>
          <div class="w-16 h-1 bg-bf-orange"></div>
        </div>
        <p class="text-gray-400 text-lg tracking-wide">
          The ultimate resource for Battlefield 6 tactical advantage
        </p>
      </motion.div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          v-for="(feature, index) in features"
          :key="feature.id"
          :initial="{ opacity: 0, y: 50 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: index * 0.1 }"
          class="group text-center"
          :while-hover="{ y: -10 }"
        >
          <div class="bg-gradient-to-br from-bf-medium to-bf-light border border-gray-800 rounded-lg p-8 transition-all duration-300 group-hover:border-bf-orange group-hover:shadow-2xl group-hover:shadow-bf-orange/20 relative overflow-hidden">
            <!-- Background Pattern -->
            <div class="absolute inset-0 opacity-5">
              <div class="absolute top-4 left-4 w-32 h-32 border-l-2 border-t-2 border-bf-orange"></div>
              <div class="absolute bottom-4 right-4 w-32 h-32 border-r-2 border-b-2 border-bf-orange"></div>
            </div>

            <!-- Feature Icon -->
            <motion.div
              class="relative z-10 mb-6"
              :while-hover="{ scale: 1.1, rotate: 5 }"
            >
              <div class="w-16 h-16 mx-auto bg-bf-orange/20 rounded-lg flex items-center justify-center group-hover:bg-bf-orange/30 transition-colors">
                <component :is="feature.icon" class="w-8 h-8 text-bf-orange group-hover:text-white transition-colors" />
              </div>
            </motion.div>

            <!-- Feature Content -->
            <div class="relative z-10">
              <h3 class="text-xl font-heading text-white mb-4 group-hover:text-bf-orange transition-colors">
                {{ feature.title }}
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed mb-6">
                {{ feature.description }}
              </p>
              
              <!-- Feature Stats -->
              <div class="flex justify-center gap-6 text-xs text-gray-500">
                <div class="flex items-center gap-1">
                  <div class="w-2 h-2 bg-bf-orange rounded-full"></div>
                  <span>{{ feature.stats.accuracy }}% Accuracy</span>
                </div>
                <div class="flex items-center gap-1">
                  <div class="w-2 h-2 bg-bf-orange rounded-full"></div>
                  <span>{{ feature.stats.updated }} Updated</span>
                </div>
              </div>
            </div>

            <!-- Hover Effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-bf-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </motion.div>
      </div>

      <!-- Additional Info -->
      <motion.div
        :initial="{ opacity: 0, y: 30 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.3 }"
        class="mt-16 text-center"
      >
        <div class="bg-gradient-to-r from-bf-orange/10 to-bf-orange/5 border border-bf-orange/30 rounded-lg p-8">
          <h3 class="text-2xl font-heading text-bf-orange mb-4 tracking-widest">
            JOIN THE ELITE
          </h3>
          <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
            Become part of the most dedicated Battlefield 6 community. Get access to exclusive content, 
            early updates, and connect with top players worldwide.
          </p>
          <motion.button
            :while-hover="{ scale: 1.05 }"
            :while-tap="{ scale: 0.95 }"
            class="px-8 py-4 bg-bf-orange text-black font-heading tracking-widest uppercase hover:bg-[#ea6a0f] transition-colors"
          >
            Join Community
          </motion.button>
        </div>
      </motion.div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { motion } from '@vueuse/motion'
import { Target, Zap, Clock, Users, Shield, TrendingUp } from 'lucide-vue-next'

const features = ref([
  {
    id: 1,
    title: 'Real-time Meta Updates',
    description: 'Stay ahead with instant updates on weapon balance changes, new strategies, and meta shifts as they happen.',
    icon: Target,
    stats: { accuracy: 99, updated: 'Live' }
  },
  {
    id: 2,
    title: 'Pro-Tested Loadouts',
    description: 'Every loadout is tested and verified by professional players and top-ranked community members.',
    icon: Shield,
    stats: { accuracy: 95, updated: 'Daily' }
  },
  {
    id: 3,
    title: 'Instant Notifications',
    description: 'Get notified immediately when new updates, patches, or meta changes affect your favorite weapons.',
    icon: Zap,
    stats: { accuracy: 100, updated: 'Real-time' }
  },
  {
    id: 4,
    title: 'Community Insights',
    description: 'Learn from the collective wisdom of thousands of players sharing their experiences and strategies.',
    icon: Users,
    stats: { accuracy: 92, updated: '24/7' }
  },
  {
    id: 5,
    title: 'Performance Analytics',
    description: 'Track your improvement with detailed statistics and performance metrics for every loadout.',
    icon: TrendingUp,
    stats: { accuracy: 98, updated: 'Weekly' }
  },
  {
    id: 6,
    title: 'Always Up-to-Date',
    description: 'Our content is updated within hours of any game patch, ensuring you always have the latest information.',
    icon: Clock,
    stats: { accuracy: 100, updated: 'Hourly' }
  }
])
</script>