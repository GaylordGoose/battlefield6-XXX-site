<template>
  <section id="loadouts" class="py-20 bg-gradient-to-b from-bf-dark to-bf-darker relative">
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
            Meta Loadouts
          </h2>
          <div class="w-16 h-1 bg-bf-orange"></div>
        </div>
        <p class="text-gray-400 text-lg tracking-wide">
          The most effective loadouts tested by professional players
        </p>
      </motion.div>

      <!-- Loadout Categories -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <motion.button
          v-for="category in categories"
          :key="category.id"
          :while-hover="{ scale: 1.05 }"
          :while-tap="{ scale: 0.95 }"
          @click="selectedCategory = category.id"
          :class="[
            'px-6 py-3 rounded-lg border-2 transition-all duration-300 font-heading tracking-widest uppercase text-sm',
            selectedCategory === category.id
              ? 'bg-bf-orange text-black border-bf-orange'
              : 'bg-transparent text-bf-orange border-bf-orange/50 hover:border-bf-orange hover:bg-bf-orange/10'
          ]"
        >
          {{ category.name }}
        </motion.button>
      </div>

      <!-- Loadouts Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.article
          v-for="(loadout, index) in filteredLoadouts"
          :key="loadout.id"
          :initial="{ opacity: 0, y: 50 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: index * 0.1 }"
          class="group cursor-pointer"
          :while-hover="{ y: -10, scale: 1.02 }"
        >
          <div class="bg-gradient-to-br from-bf-medium to-bf-light border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 group-hover:border-bf-orange group-hover:shadow-2xl group-hover:shadow-bf-orange/20 relative">
            <!-- Loadout Image -->
            <div class="relative h-48 overflow-hidden">
              <img
                :src="loadout.image"
                :alt="loadout.name"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 bg-bf-orange text-black text-xs font-bold tracking-widest uppercase rounded">
                  {{ loadout.class }}
                </span>
              </div>
              <div class="absolute top-4 right-4">
                <div class="flex items-center gap-1 bg-black/60 px-2 py-1 rounded">
                  <Zap class="w-4 h-4 text-yellow-400" />
                  <span class="text-white text-xs font-bold">{{ loadout.power }}</span>
                </div>
              </div>
              <div class="absolute bottom-4 left-4 text-white text-sm">
                {{ loadout.difficulty }}
              </div>
            </div>

            <!-- Loadout Content -->
            <div class="p-6">
              <h3 class="text-xl font-heading text-white mb-3 group-hover:text-bf-orange transition-colors">
                {{ loadout.name }}
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed mb-4">
                {{ loadout.description }}
              </p>
              
              <!-- Loadout Stats -->
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="text-center">
                  <div class="text-2xl font-heading text-bf-orange">{{ loadout.stats.damage }}</div>
                  <div class="text-xs text-gray-500 uppercase tracking-widest">Damage</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-heading text-bf-orange">{{ loadout.stats.accuracy }}</div>
                  <div class="text-xs text-gray-500 uppercase tracking-widest">Accuracy</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-heading text-bf-orange">{{ loadout.stats.range }}</div>
                  <div class="text-xs text-gray-500 uppercase tracking-widest">Range</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-heading text-bf-orange">{{ loadout.stats.mobility }}</div>
                  <div class="text-xs text-gray-500 uppercase tracking-widest">Mobility</div>
                </div>
              </div>

              <!-- Weapons -->
              <div class="mb-4">
                <h4 class="text-sm font-heading text-bf-orange mb-2 uppercase tracking-widest">Weapons</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="weapon in loadout.weapons"
                    :key="weapon"
                    class="px-2 py-1 bg-bf-orange/20 text-bf-orange text-xs rounded border border-bf-orange/30"
                  >
                    {{ weapon }}
                  </span>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex items-center justify-between">
                <span class="text-bf-orange text-sm font-medium tracking-wide">
                  View Details →
                </span>
                <div class="flex items-center gap-2">
                  <Heart class="w-4 h-4 text-gray-500 hover:text-red-500 transition-colors cursor-pointer" />
                  <Copy class="w-4 h-4 text-gray-500 hover:text-bf-orange transition-colors cursor-pointer" />
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
          class="px-8 py-4 bg-bf-orange text-black font-heading tracking-widest uppercase hover:bg-[#ea6a0f] transition-colors"
        >
          View All Loadouts
        </motion.button>
      </motion.div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { motion } from '@vueuse/motion'
import { Zap, Heart, Copy } from 'lucide-vue-next'

const selectedCategory = ref('all')

const categories = [
  { id: 'all', name: 'All' },
  { id: 'assault', name: 'Assault' },
  { id: 'engineer', name: 'Engineer' },
  { id: 'support', name: 'Support' },
  { id: 'recon', name: 'Recon' }
]

const loadouts = ref([
  {
    id: 1,
    name: 'Close Quarters Dominator',
    description: 'Perfect for aggressive close-range combat with high damage output.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop',
    class: 'Assault',
    difficulty: 'Easy',
    power: '95%',
    stats: { damage: 95, accuracy: 78, range: 45, mobility: 88 },
    weapons: ['M4A1', 'Glock-18', 'Frag Grenade'],
    category: 'assault'
  },
  {
    id: 2,
    name: 'Long Range Sniper',
    description: 'Devastating accuracy at extreme ranges with one-shot potential.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    class: 'Recon',
    difficulty: 'Hard',
    power: '98%',
    stats: { damage: 100, accuracy: 95, range: 100, mobility: 45 },
    weapons: ['Barrett M82', 'Desert Eagle', 'Claymore'],
    category: 'recon'
  },
  {
    id: 3,
    name: 'Support Suppressor',
    description: 'Heavy firepower with sustained damage and team support capabilities.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    class: 'Support',
    difficulty: 'Medium',
    power: '92%',
    stats: { damage: 88, accuracy: 85, range: 75, mobility: 60 },
    weapons: ['M249 SAW', 'M9 Beretta', 'Ammo Box'],
    category: 'support'
  },
  {
    id: 4,
    name: 'Anti-Vehicle Specialist',
    description: 'Designed to take down enemy vehicles and fortified positions.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
    class: 'Engineer',
    difficulty: 'Medium',
    power: '90%',
    stats: { damage: 92, accuracy: 80, range: 85, mobility: 70 },
    weapons: ['RPG-7', 'MP5', 'C4 Explosive'],
    category: 'engineer'
  },
  {
    id: 5,
    name: 'Stealth Infiltrator',
    description: 'Silent and deadly approach for behind-enemy-lines operations.',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    class: 'Recon',
    difficulty: 'Hard',
    power: '87%',
    stats: { damage: 75, accuracy: 90, range: 70, mobility: 95 },
    weapons: ['Silenced M4', 'Silenced Pistol', 'Smoke Grenade'],
    category: 'recon'
  },
  {
    id: 6,
    name: 'Medic Guardian',
    description: 'Heal and revive teammates while maintaining combat effectiveness.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
    class: 'Assault',
    difficulty: 'Easy',
    power: '85%',
    stats: { damage: 70, accuracy: 82, range: 60, mobility: 85 },
    weapons: ['M16A4', 'Defibrillator', 'Med Kit'],
    category: 'assault'
  }
])

const filteredLoadouts = computed(() => {
  if (selectedCategory.value === 'all') {
    return loadouts.value
  }
  return loadouts.value.filter(loadout => loadout.category === selectedCategory.value)
})
</script>