import { motion } from 'motion/react';
import { Play, Pause, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useState } from 'react';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoPaused, setIsVideoPaused] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: scrollY * 0.5 }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0bGVmaWVsZCUyMHNvbGRpZXIlMjBjb21iYXR8ZW58MXx8fHwxNzYwNjk5MzU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Battlefield combat"
          className="w-full h-full object-cover scale-110"
        />
        {/* Stronger dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-[#0f0f0f]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80"></div>
        {/* Video pause overlay */}
        <motion.div
          className="absolute inset-0 bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVideoPaused ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Video Control - Top Left */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        onClick={() => setIsVideoPaused(!isVideoPaused)}
        className="absolute top-28 left-8 z-20 w-12 h-12 bg-black/60 backdrop-blur-sm border border-[#F97316]/50 flex items-center justify-center hover:bg-[#F97316] hover:border-[#F97316] transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isVideoPaused ? (
          <Play className="w-5 h-5 text-[#F97316] group-hover:text-black transition-colors" fill="currentColor" />
        ) : (
          <Pause className="w-5 h-5 text-[#F97316] group-hover:text-black transition-colors" />
        )}
      </motion.button>

      {/* Tactical Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, #F97316 0px, #F97316 1px, transparent 1px, transparent 60px),
            repeating-linear-gradient(90deg, #F97316 0px, #F97316 1px, transparent 1px, transparent 60px)
          `
        }}
      ></div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#F97316]/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-4xl">
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-16 h-1 bg-[#F97316]"></div>
            <span className="text-sm tracking-[0.3em] text-gray-400 uppercase">
              Official Community Hub
            </span>
          </motion.div>

          {/* Main Title with Text Shadow for Readability */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl tracking-wider mb-6 relative"
            style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.9), 0 2px 8px rgba(0, 0, 0, 0.8)' }}
          >
            <span className="relative inline-block">
              BATTLEFIELD 6
              {/* Glitch effect overlay */}
              <motion.span
                className="absolute inset-0 text-[#F97316]"
                animate={{
                  opacity: [0, 0.3, 0],
                  x: [-2, 2, -2]
                }}
                transition={{
                  duration: 0.2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                BATTLEFIELD 6
              </motion.span>
            </span>
            <br />
            <span className="text-[#F97316] relative inline-block">
              META HUB
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-[#F97316]"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h1>

          {/* Tagline with Shadow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl md:text-2xl text-white mb-4 tracking-wide"
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)' }}
          >
            Your tactical advantage. Best builds and strategies.
          </motion.p>

          {/* Value Proposition with better contrast */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-4 mb-12 text-sm text-gray-200"
            style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)' }}
          >
            <div className="flex items-center gap-2 bg-black/40 px-3 py-1 backdrop-blur-sm">
              <div className="w-1 h-4 bg-[#F97316]"></div>
              <span>Latest News & Updates</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 px-3 py-1 backdrop-blur-sm">
              <div className="w-1 h-4 bg-[#F97316]"></div>
              <span>Expert Tactical Guides</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 px-3 py-1 backdrop-blur-sm">
              <div className="w-1 h-4 bg-[#F97316]"></div>
              <span>Pro META Loadouts</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 px-3 py-1 backdrop-blur-sm">
              <div className="w-1 h-4 bg-[#F97316]"></div>
              <span>Community Hub</span>
            </div>
          </motion.div>

          {/* CTAs - Updated Button Styles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            {/* Primary Button - Solid Orange */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-[#F97316] hover:bg-[#ea6a0f] transition-colors"
            >
              <span className="tracking-[0.2em] text-black uppercase">META LOADOUTS</span>
            </motion.button>

            {/* Secondary Button - Outlined with Play Icon */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-400 bg-transparent hover:bg-white/10 transition-all flex items-center gap-3"
            >
              <span className="tracking-[0.2em] text-gray-200 uppercase">Watch Trailer</span>
              <div className="w-6 h-6 flex items-center justify-center">
                <Play className="w-4 h-4 text-gray-200" fill="currentColor" />
              </div>
            </motion.button>
          </motion.div>


        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-[#F97316]" />
        </motion.div>
      </motion.div>

      {/* Bottom Edge Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
      
      {/* Tactical HUD Corner Elements */}
      <div className="absolute top-24 left-4 w-32 h-32 border-l-2 border-t-2 border-[#F97316]/30"></div>
      <div className="absolute top-24 right-4 w-32 h-32 border-r-2 border-t-2 border-[#F97316]/30"></div>
      <div className="absolute bottom-24 left-4 w-32 h-32 border-l-2 border-b-2 border-[#F97316]/30"></div>
      <div className="absolute bottom-24 right-4 w-32 h-32 border-r-2 border-b-2 border-[#F97316]/30"></div>
    </section>
  );
}
