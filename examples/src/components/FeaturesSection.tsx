import { motion } from 'motion/react';
import { Target, Zap, Clock } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    id: 1,
    icon: Target,
    title: "Up-to-date Meta",
    description: "Always synced with the latest patches and balance updates. Never fall behind the competitive curve.",
  },
  {
    id: 2,
    icon: Zap,
    title: "Battle-tested Builds",
    description: "Curated loadouts and strategies from top-tier professional players and competitive teams.",
  },
  {
    id: 3,
    icon: Clock,
    title: "Instant Updates",
    description: "Real-time information delivery the moment new patches drop. Stay ahead of the competition.",
  }
];

export function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#1a1a1a] relative overflow-hidden">
      {/* Subtle animated background */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #F97316 0px, #F97316 1px, transparent 1px, transparent 60px)`,
          backgroundSize: '200% 200%'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="w-16 h-1 bg-[#F97316] mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <h2 className="text-4xl md:text-5xl tracking-wider mb-3">
            WHY <span className="text-[#F97316]">BF META HUB</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your complete tactical advantage in every engagement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15
                }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="relative bg-[#2a2a2a] border border-[#F97316]/20 p-8 h-full overflow-hidden hover:border-[#F97316] transition-all duration-300"
                  whileHover={{ y: -10 }}
                >
                  {/* Animated glow on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#F97316]/10 to-transparent opacity-0"
                    animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon */}
                  <motion.div
                    className="relative mb-6 mx-auto w-20 h-20 bg-[#F97316] flex items-center justify-center"
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-10 h-10 text-black relative z-10" />
                    
                    {/* Subtle pulse */}
                    <motion.div
                      className="absolute inset-0 bg-[#F97316]"
                      animate={{
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Corner brackets */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-black"></div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-black"></div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-2xl tracking-wide mb-4 text-white group-hover:text-[#F97316] transition-colors uppercase">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-[#F97316]"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />

                  {/* Corner accents */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-[#F97316]/30 group-hover:border-[#F97316] transition-colors"></div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto bg-[#2a2a2a] border border-[#F97316]/30 p-8">
            <h3 className="text-3xl tracking-wider mb-4">
              JOIN THE <span className="text-[#F97316]">COMMUNITY</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Connect with thousands of Battlefield players. Share strategies, discuss meta changes, and dominate together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#F97316] text-black hover:bg-[#ea6a0f] transition-colors uppercase tracking-widest"
              >
                Discord Community
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-black transition-all uppercase tracking-widest"
              >
                Submit Your Build
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
