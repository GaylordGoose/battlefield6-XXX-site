<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-bf-medium/90 backdrop-blur-lg border-b border-bf-orange">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <motion.a
          href="#"
          class="flex items-center gap-3 cursor-pointer group"
          :initial="{ opacity: 0, x: -20 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.6 }"
          :while-hover="{ scale: 1.02 }"
        >
          <div class="relative">
            <div class="w-12 h-12 bg-bf-orange flex items-center justify-center relative overflow-hidden group-hover:bg-[#ea6a0f] transition-colors">
              <span class="text-black text-2xl tracking-wider z-10">BF</span>
              <!-- Diagonal stripe -->
              <div class="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
            </div>
            <!-- Corner accents -->
            <div class="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-bf-orange"></div>
            <div class="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-bf-orange"></div>
          </div>
          <div>
            <div class="text-xl tracking-widest leading-none">
              BF <span class="text-bf-orange">META</span> HUB
            </div>
            <div class="text-[10px] text-gray-500 tracking-widest mt-0.5">TACTICAL DATABASE</div>
          </div>
        </motion.a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          <motion.a
            v-for="(item, index) in navItems"
            :key="item.label"
            :href="item.href"
            class="text-sm tracking-widest text-gray-300 hover:text-bf-orange transition-all duration-300 relative group"
            :initial="{ opacity: 0, y: -10 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: index * 0.1 }"
            :while-hover="{ y: -2, scale: 1.05 }"
          >
            {{ item.label }}
            <!-- Animated underline -->
            <motion.span 
              class="absolute -bottom-1 left-0 h-0.5 bg-bf-orange"
              :initial="{ width: 0 }"
              :while-hover="{ width: '100%' }"
              :transition="{ duration: 0.3 }"
            />
            <!-- Corner accents on hover -->
            <span class="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-bf-orange opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span class="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-bf-orange opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </motion.a>
        </nav>

        <!-- Search & Mobile Menu -->
        <div class="flex items-center gap-4">
          <!-- Search -->
          <motion.div
            :initial="{ opacity: 0, x: 20 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.6 }"
            class="relative hidden md:block"
          >
            <div class="relative flex items-center">
              <Search class="absolute left-3 w-4 h-4 text-bf-orange pointer-events-none" />
              <input
                type="text"
                placeholder="Search..."
                class="w-48 bg-bf-darker border border-bf-orange/50 pl-10 pr-4 py-2 text-sm tracking-wide focus:outline-none focus:border-bf-orange focus:w-64 transition-all placeholder:text-gray-600 placeholder:uppercase placeholder:tracking-widest"
              />
            </div>
          </motion.div>

          <!-- Mobile Search Icon -->
          <motion.button
            :initial="{ opacity: 0, x: 20 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.6 }"
            class="md:hidden w-10 h-10 border border-bf-orange/50 flex items-center justify-center hover:bg-bf-orange hover:border-bf-orange transition-colors group"
            :while-hover="{ scale: 1.05 }"
            :while-tap="{ scale: 0.95 }"
          >
            <Search class="w-5 h-5 text-bf-orange group-hover:text-black transition-colors" />
          </motion.button>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMenu"
            class="lg:hidden w-10 h-10 border border-bf-orange/50 flex items-center justify-center hover:bg-bf-orange hover:border-bf-orange transition-colors group"
          >
            <X v-if="isMenuOpen" class="w-5 h-5 text-bf-orange group-hover:text-black transition-colors" />
            <Menu v-else class="w-5 h-5 text-bf-orange group-hover:text-black transition-colors" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <motion.nav
        v-if="isMenuOpen"
        :initial="{ height: 0, opacity: 0 }"
        :animate="{ height: 'auto', opacity: 1 }"
        :exit="{ height: 0, opacity: 0 }"
        class="lg:hidden overflow-hidden border-t border-bf-orange/30"
      >
        <div class="py-4 space-y-4">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            class="block text-sm tracking-widest text-gray-300 hover:text-bf-orange transition-colors py-2 border-l-2 border-transparent hover:border-bf-orange pl-4"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
        </div>
      </motion.nav>
    </div>

    <!-- Tactical scan line effect -->
    <motion.div
      class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bf-orange to-transparent"
      :animate="{ opacity: [0.3, 1, 0.3] }"
      :transition="{ duration: 2, repeat: Infinity, ease: 'easeInOut' }"
    />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { motion } from '@vueuse/motion'
import { Search, Menu, X } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const navItems = [
  { label: 'META LOADOUTS', href: '#loadouts' },
  { label: 'NEWS', href: '#news' },
  { label: 'FEATURES', href: '#features' },
  { label: 'GUIDES', href: '#guides' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>