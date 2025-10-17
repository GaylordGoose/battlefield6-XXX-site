<template>
  <section class="relative h-screen overflow-hidden">
    <!-- Background Video -->
    <div class="absolute inset-0">
      <video
        ref="videoRef"
        autoplay
        muted
        loop
        playsinline
        class="w-full h-full object-cover scale-110"
        @loadeddata="() => console.log('Video loaded')"
      >
        <source src="/video/bf6-bg.mp4" type="video/mp4" />
      </video>
      <!-- Stronger dark overlay for better text readability -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-bf-dark"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80"></div>
      <!-- Video pause overlay -->
      <motion.div
        class="absolute inset-0 bg-black/60"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: isPaused ? 1 : 0 }"
        :transition="{ duration: 0.3 }"
      />
    </div>

    <!-- Video Control - Top Left -->
    <motion.button
      :initial="{ opacity: 0, x: -20 }"
      :animate="{ opacity: 1, x: 0 }"
      :transition="{ duration: 0.6, delay: 0.3 }"
      @click="toggleVideo"
      class="absolute top-28 left-8 z-20 w-12 h-12 bg-black/60 backdrop-blur-sm border border-bf-orange/50 flex items-center justify-center hover:bg-bf-orange hover:border-bf-orange transition-all group"
      :while-hover="{ scale: 1.1 }"
      :while-tap="{ scale: 0.9 }"
    >
      <Play v-if="isPaused" class="w-5 h-5 text-bf-orange group-hover:text-black transition-colors" />
      <Pause v-else class="w-5 h-5 text-bf-orange group-hover:text-black transition-colors" />
    </motion.button>

    <!-- Tactical Grid Overlay -->
    <div 
      class="absolute inset-0 opacity-10"
      :style="{
        backgroundImage: `
          repeating-linear-gradient(0deg, #F97316 0px, #F97316 1px, transparent 1px, transparent 60px),
          repeating-linear-gradient(90deg, #F97316 0px, #F97316 1px, transparent 1px, transparent 60px)
        `
      }"
    />

    <!-- Animated Particles -->
    <div class="absolute inset-0">
      <div
        v-for="i in 20"
        :key="i"
        class="absolute w-1 h-1 bg-bf-orange/30"
        :style="{
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%'
        }"
        :animate="{
          y: [0, Math.random() * 100 + '%'],
          opacity: [0, 1, 0]
        }"
        :transition="{
          duration: 3 + Math.random() * 3,
          repeat: Infinity,
          delay: Math.random() * 2
        }"
      />
    </div>

    <!-- Content -->
    <div class="relative container mx-auto px-4 h-full flex items-center">
      <div class="max-w-4xl">
        <!-- Top Label -->
        <motion.div
          :initial="{ opacity: 0, y: -20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.2 }"
          class="flex items-center gap-3 mb-6"
        >
          <div class="w-16 h-1 bg-bf-orange"></div>
          <span class="text-sm tracking-[0.3em] text-gray-400 uppercase">
            Official Community Hub
          </span>
        </motion.div>

        <!-- Main Title -->
        <motion.h1
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, delay: 0.4 }"
          class="text-6xl md:text-8xl lg:text-9xl tracking-wider mb-6 relative"
          style="text-shadow: 0 4px 20px rgba(0, 0, 0, 0.9), 0 2px 8px rgba(0, 0, 0, 0.8)"
        >
          <span class="relative inline-block">
            BATTLEFIELD 6
            <!-- Glitch effect overlay -->
            <motion.span
              class="absolute inset-0 text-bf-orange"
              :animate="{
                opacity: [0, 0.3, 0],
                x: [-2, 2, -2]
              }"
              :transition="{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 3
              }"
            >
              BATTLEFIELD 6
            </motion.span>
          </span>
          <br />
          <span class="text-bf-orange relative inline-block">
            META HUB
            <motion.div
              class="absolute -bottom-2 left-0 h-1 bg-bf-orange"
              :initial="{ width: 0 }"
              :animate="{ width: '100%' }"
              :transition="{ duration: 1, delay: 1 }"
            />
          </span>
        </motion.h1>

        <!-- Tagline -->
        <motion.p
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.8 }"
          class="text-xl md:text-2xl text-white mb-4 tracking-wide"
          style="text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9)"
        >
          Your tactical advantage. Best builds and strategies.
        </motion.p>

        <!-- Value Proposition -->
        <motion.div
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 1 }"
          class="flex flex-wrap gap-4 mb-12 text-sm text-gray-200"
          style="text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8)"
        >
          <div class="flex items-center gap-2 bg-black/40 px-3 py-1 backdrop-blur-sm">
            <div class="w-1 h-4 bg-bf-orange"></div>
            <span>Latest News & Updates</span>
          </div>
          <div class="flex items-center gap-2 bg-black/40 px-3 py-1 backdrop-blur-sm">
            <div class="w-1 h-4 bg-bf-orange"></div>
            <span>Expert Tactical Guides</span>
          </div>
          <div class="flex items-center gap-2 bg-black/40 px-3 py-1 backdrop-blur-sm">
            <div class="w-1 h-4 bg-bf-orange"></div>
            <span>Pro META Loadouts</span>
          </div>
          <div class="flex items-center gap-2 bg-black/40 px-3 py-1 backdrop-blur-sm">
            <div class="w-1 h-4 bg-bf-orange"></div>
            <span>Community Hub</span>
          </div>
        </motion.div>

        <!-- CTAs -->
        <motion.div
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 1.2 }"
          class="flex flex-wrap gap-4"
        >
          <!-- Primary Button -->
          <motion.button
            :while-hover="{ scale: 1.05 }"
            :while-tap="{ scale: 0.95 }"
            class="px-10 py-4 bg-bf-orange hover:bg-[#ea6a0f] transition-colors"
          >
            <span class="tracking-[0.2em] text-black uppercase">META LOADOUTS</span>
          </motion.button>

          <!-- Secondary Button -->
          <motion.button
            :while-hover="{ scale: 1.05 }"
            :while-tap="{ scale: 0.95 }"
            class="px-8 py-4 border-2 border-gray-400 bg-transparent hover:bg-white/10 transition-all flex items-center gap-3"
          >
            <span class="tracking-[0.2em] text-gray-200 uppercase">Watch Trailer</span>
            <div class="w-6 h-6 flex items-center justify-center">
              <Play class="w-4 h-4 text-gray-200" />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <motion.div
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{ duration: 0.6, delay: 1.5 }"
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span class="text-xs text-gray-400 tracking-widest uppercase">Scroll Down</span>
      <motion.div
        :animate="{ y: [0, 10, 0] }"
        :transition="{ duration: 1.5, repeat: Infinity }"
      >
        <ChevronDown class="w-6 h-6 text-bf-orange" />
      </motion.div>
    </motion.div>

    <!-- Bottom Edge Effect -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bf-dark to-transparent"></div>
    
    <!-- Tactical HUD Corner Elements -->
    <div class="absolute top-24 left-4 w-32 h-32 border-l-2 border-t-2 border-bf-orange/30"></div>
    <div class="absolute top-24 right-4 w-32 h-32 border-r-2 border-t-2 border-bf-orange/30"></div>
    <div class="absolute bottom-24 left-4 w-32 h-32 border-l-2 border-b-2 border-bf-orange/30"></div>
    <div class="absolute bottom-24 right-4 w-32 h-32 border-r-2 border-b-2 border-bf-orange/30"></div>
  </section>
</template>

<script setup>
import { motion } from '@vueuse/motion'
import { Play, Pause, ChevronDown } from 'lucide-vue-next'
import { useVideo } from '../composables/useVideo'

const { videoRef, isPaused, toggle: toggleVideo } = useVideo()
</script>