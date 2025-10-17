import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

const guides = [
  {
    id: 1,
    title: "ASSAULT MASTERY",
    subtitle: "Complete weapon handling guide",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWN0aWNhbCUyMHJpZmxlfGVufDF8fHx8MTc2MDY5ODAxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    title: "URBAN WARFARE",
    subtitle: "Close-quarters combat tactics",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHdhcmZhcmV8ZW58MXx8fHwxNjc2MDY5ODAxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    title: "MAP CONTROL",
    subtitle: "Strategic positioning guide",
    image: "https://images.unsplash.com/photo-1571196519807-9b8f0ea7e72b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMG1hcHxlbnwxfHx8fDE3NjA2OTgwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    title: "SNIPER TACTICS",
    subtitle: "Long-range elimination protocol",
    image: "https://images.unsplash.com/photo-1583454155184-870a1f63eedc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmlwZXIlMjBzY29wZXxlbnwxfHx8fDE3NjA2OTgwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  }
];

export function GuidesSection() {
  const [selectedGuide, setSelectedGuide] = useState(0);

  return (
    <section id="guides" className="relative h-screen overflow-hidden">
      {/* Main Featured Guide Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={guides[selectedGuide].image}
          alt={guides[selectedGuide].title}
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-[#0f0f0f]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end pb-8">
        <div className="container mx-auto px-4">
          {/* Main Content */}
          <motion.div
            key={selectedGuide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 max-w-3xl"
          >
            <div className="mb-4">
              <motion.div
                className="inline-block px-4 py-1 bg-[#F97316] mb-4"
                initial={{ width: 0 }}
                animate={{ width: 'auto' }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-black tracking-widest text-sm uppercase">Tactical Guide</span>
              </motion.div>
            </div>

            <h2 
              className="text-6xl md:text-7xl lg:text-8xl tracking-wider mb-4"
              style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.9)' }}
            >
              {guides[selectedGuide].title}
            </h2>
            
            <p 
              className="text-xl md:text-2xl text-gray-300 mb-6"
              style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)' }}
            >
              {guides[selectedGuide].subtitle}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#F97316] hover:bg-[#ea6a0f] transition-colors"
            >
              <span className="tracking-[0.2em] text-black uppercase">Take Me There</span>
            </motion.button>
          </motion.div>

          {/* Bottom Cards Navigation - Battlefield Style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.id}
                onClick={() => setSelectedGuide(index)}
                className={`cursor-pointer group relative overflow-hidden ${
                  selectedGuide === index ? 'border-2 border-[#F97316]' : 'border-2 border-transparent'
                }`}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Card Image */}
                <div className="relative h-24 md:h-32 overflow-hidden">
                  <ImageWithFallback
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 ${
                    selectedGuide === index 
                      ? 'bg-gradient-to-t from-black/80 to-transparent' 
                      : 'bg-gradient-to-t from-black/90 via-black/50 to-black/30'
                  }`}></div>
                  
                  {/* Selected Indicator */}
                  {selectedGuide === index && (
                    <motion.div
                      layoutId="activeGuide"
                      className="absolute inset-0 border-2 border-[#F97316]"
                    />
                  )}
                </div>

                {/* Card Title */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                  <h3 className={`text-sm md:text-base tracking-wider ${
                    selectedGuide === index ? 'text-[#F97316]' : 'text-white'
                  } transition-colors uppercase`}>
                    {guide.title}
                  </h3>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-[#F97316]/30"></div>
      <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-[#F97316]/30"></div>
    </section>
  );
}
