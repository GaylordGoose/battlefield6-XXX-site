<template>
  <footer class="bg-gradient-to-b from-bf-darker to-black border-t border-bf-orange relative">
    <!-- Top border effect -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bf-orange to-transparent"></div>
    
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Logo & Description -->
        <motion.div
          :initial="{ opacity: 0, y: 30 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
          class="lg:col-span-1"
        >
          <div class="flex items-center gap-3 mb-6">
            <div class="relative">
              <div class="w-12 h-12 bg-bf-orange flex items-center justify-center relative overflow-hidden">
                <span class="text-black text-2xl tracking-wider z-10">BF</span>
                <div class="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
              </div>
              <div class="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-bf-orange"></div>
              <div class="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-bf-orange"></div>
            </div>
            <div>
              <div class="text-xl tracking-widest leading-none">
                BF <span class="text-bf-orange">META</span> HUB
              </div>
              <div class="text-[10px] text-gray-500 tracking-widest mt-0.5">TACTICAL DATABASE</div>
            </div>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            Your ultimate resource for Battlefield 6 tactical advantage. 
            Stay ahead of the meta with our expert analysis and community insights.
          </p>
          <div class="flex gap-4">
            <motion.a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              :while-hover="{ scale: 1.1, y: -2 }"
              :while-tap="{ scale: 0.9 }"
              class="w-10 h-10 bg-bf-orange/20 border border-bf-orange/30 flex items-center justify-center hover:bg-bf-orange hover:border-bf-orange transition-all group"
            >
              <component :is="social.icon" class="w-5 h-5 text-bf-orange group-hover:text-black transition-colors" />
            </motion.a>
          </div>
        </motion.div>

        <!-- Quick Links -->
        <motion.div
          :initial="{ opacity: 0, y: 30 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.1 }"
        >
          <h3 class="text-lg font-heading text-bf-orange mb-6 tracking-widest uppercase">
            Quick Links
          </h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <a
                :href="link.url"
                class="text-gray-400 hover:text-bf-orange transition-colors text-sm tracking-wide flex items-center gap-2 group"
              >
                <div class="w-1 h-1 bg-bf-orange group-hover:w-2 transition-all"></div>
                {{ link.name }}
              </a>
            </li>
          </ul>
        </motion.div>

        <!-- Resources -->
        <motion.div
          :initial="{ opacity: 0, y: 30 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.2 }"
        >
          <h3 class="text-lg font-heading text-bf-orange mb-6 tracking-widest uppercase">
            Resources
          </h3>
          <ul class="space-y-3">
            <li v-for="resource in resources" :key="resource.name">
              <a
                :href="resource.url"
                class="text-gray-400 hover:text-bf-orange transition-colors text-sm tracking-wide flex items-center gap-2 group"
              >
                <div class="w-1 h-1 bg-bf-orange group-hover:w-2 transition-all"></div>
                {{ resource.name }}
              </a>
            </li>
          </ul>
        </motion.div>

        <!-- Newsletter -->
        <motion.div
          :initial="{ opacity: 0, y: 30 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.3 }"
        >
          <h3 class="text-lg font-heading text-bf-orange mb-6 tracking-widest uppercase">
            Stay Updated
          </h3>
          <p class="text-gray-400 text-sm mb-4">
            Get the latest meta updates and exclusive content delivered to your inbox.
          </p>
          <form @submit.prevent="subscribeNewsletter" class="space-y-3">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              class="w-full px-4 py-3 bg-bf-medium border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-bf-orange transition-colors text-sm"
              required
            />
            <motion.button
              type="submit"
              :while-hover="{ scale: 1.02 }"
              :while-tap="{ scale: 0.98 }"
              class="w-full px-4 py-3 bg-bf-orange text-black font-heading tracking-widest uppercase hover:bg-[#ea6a0f] transition-colors text-sm"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>

      <!-- Bottom Section -->
      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.4 }"
        class="mt-12 pt-8 border-t border-gray-800"
      >
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-500 text-sm">
            © 2024 BF Meta Hub. All rights reserved. Not affiliated with Electronic Arts.
          </p>
          <div class="flex gap-6 text-sm">
            <a href="#" class="text-gray-500 hover:text-bf-orange transition-colors">Privacy Policy</a>
            <a href="#" class="text-gray-500 hover:text-bf-orange transition-colors">Terms of Service</a>
            <a href="#" class="text-gray-500 hover:text-bf-orange transition-colors">Contact</a>
          </div>
        </div>
      </motion.div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { motion } from '@vueuse/motion'
import { 
  Twitter, 
  Youtube, 
  Discord, 
  Github, 
  Mail,
  ExternalLink
} from 'lucide-vue-next'

const email = ref('')

const socialLinks = [
  { name: 'Twitter', icon: Twitter, url: '#' },
  { name: 'YouTube', icon: Youtube, url: '#' },
  { name: 'Discord', icon: Discord, url: '#' },
  { name: 'GitHub', icon: Github, url: '#' }
]

const quickLinks = [
  { name: 'Meta Loadouts', url: '#loadouts' },
  { name: 'Weapon Database', url: '#weapons' },
  { name: 'Latest News', url: '#news' },
  { name: 'Tactical Guides', url: '#guides' },
  { name: 'Community', url: '#community' },
  { name: 'Leaderboards', url: '#leaderboards' }
]

const resources = [
  { name: 'Patch Notes', url: '#patches' },
  { name: 'Weapon Stats', url: '#stats' },
  { name: 'Map Guides', url: '#maps' },
  { name: 'Class Builds', url: '#classes' },
  { name: 'Video Tutorials', url: '#tutorials' },
  { name: 'API Documentation', url: '#api' }
]

const subscribeNewsletter = () => {
  if (email.value) {
    // Handle newsletter subscription
    console.log('Subscribing email:', email.value)
    email.value = ''
    // You can add actual subscription logic here
  }
}
</script>