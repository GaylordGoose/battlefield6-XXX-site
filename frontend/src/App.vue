<template>
  <div id="app" class="min-h-screen bg-bf-dark text-white relative overflow-hidden">
    <!-- War Atmosphere Background Elements -->
    <div class="fixed inset-0 pointer-events-none opacity-5 z-0">
      <!-- Destroyed buildings silhouettes -->
      <div 
        class="absolute bottom-0 left-0 w-full h-64"
        :style="{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 300'%3E%3Cpath fill='%23F97316' d='M0,250 L50,200 L80,220 L100,180 L150,200 L180,160 L220,190 L250,150 L300,180 L350,140 L400,170 L450,130 L500,160 L550,120 L600,150 L650,110 L700,140 L750,100 L800,130 L850,90 L900,120 L950,80 L1000,110 L1000,300 L0,300 Z'/%3E%3C/svg%3E')`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat'
        }"
      />
    </div>
    
    <!-- Subtle grid pattern -->
    <div 
      class="fixed inset-0 pointer-events-none opacity-[0.02] z-0"
      :style="{
        backgroundImage: `
          repeating-linear-gradient(0deg, #F97316 0px, #F97316 1px, transparent 1px, transparent 100px),
          repeating-linear-gradient(90deg, #F97316 0px, #F97316 1px, transparent 1px, transparent 100px)
        `
      }"
    />

    <div class="relative z-10">
      <Header />
      <main>
        <Hero />
        <LoadoutsSection />
        <NewsSection />
        <FeaturesSection />
        <GuidesSection />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import LoadoutsSection from './components/LoadoutsSection.vue'
import NewsSection from './components/NewsSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import GuidesSection from './components/GuidesSection.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  // Initialize any global functionality here
  console.log('BF Meta Hub initialized')
})
</script>

