import { motion } from 'motion/react';
import { Pause, ChevronDown, ArrowRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useState, useRef } from 'react';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isVideoPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsVideoPaused(!isVideoPaused);
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: scrollY * 0.5 }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover scale-110"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/bf6-bg.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0bGVmaWVsZCUyMHNvbGRpZXIlMjBjb21iYXR8ZW58MXx8fHwxNzYwNjk5MzU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Battlefield combat"
            className="w-full h-full object-cover scale-110"
          />
        </video>
        
        {/* Modern gradient overlay - lighter */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1d23]/85 via-[#1a1d23]/70 to-[#1a1d23]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1d23]/80 via-transparent to-[#1a1d23]/60"></div>
      </motion.div>

      {/* Video Control - Top Right */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        onClick={handleVideoToggle}
        className="absolute top-28 right-8 z-20 w-12 h-12 bg-[#242831]/80 backdrop-blur-md rounded-lg border border-[#ea580c]/30 flex items-center justify-center hover:bg-[#ea580c] hover:border-[#ea580c] transition-all group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isVideoPaused ? (
          <Play className="w-5 h-5 text-[#ea580c] group-hover:text-white transition-colors" fill="currentColor" />
        ) : (
          <Pause className="w-5 h-5 text-[#ea580c] group-hover:text-white transition-colors" />
        )}
      </motion.button>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-4xl space-y-8">
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="w-16 h-1 bg-[#ea580c] rounded-full"></div>
            <span className="text-sm tracking-[0.2em] text-gray-400 uppercase">
              Официальный Хаб Сообщества
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl tracking-wider"
            style={{ textShadow: '0 4px 30px rgba(0, 0, 0, 0.5)' }}
          >
            <span className="relative inline-block">
              BATTLEFIELD 6
            </span>
            <br />
            <span className="text-[#ea580c]">
              META HUB
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl"
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}
          >
            Ваше тактическое преимущество. Лучшие сборки и стратегии от сообщества.
          </motion.p>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            {[
              'Последние новости',
              'Экспертные гайды',
              'Про МЕТА сборки',
              'Хаб сообщества'
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
                className="flex items-center gap-2 bg-[#242831]/60 backdrop-blur-md px-4 py-2 rounded-lg border border-[#ea580c]/20"
              >
                <div className="w-1.5 h-1.5 bg-[#ea580c] rounded-full"></div>
                <span className="text-sm text-gray-300">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
          >
            {/* Primary Button */}
            <motion.a
              href="#/loadouts"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(234, 88, 12, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#ea580c] hover:bg-[#c2410c] transition-all rounded-lg shadow-lg shadow-[#ea580c]/20 text-center"
            >
              <span className="tracking-wider text-white uppercase">МЕТА СБОРКИ</span>
            </motion.a>

            {/* Secondary Button */}
            <motion.a
              href="#/news"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#242831]/80 backdrop-blur-md border border-[#ea580c]/30 hover:border-[#ea580c] hover:bg-[#2d3139] transition-all rounded-lg flex items-center justify-center gap-3"
            >
              <span className="tracking-wider text-gray-200 uppercase">Новости</span>
              <ArrowRight className="w-5 h-5 text-gray-200" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="hidden md:flex absolute bottom-12 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 tracking-widest uppercase">Прокрутить</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[#ea580c]/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-[#ea580c] rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}