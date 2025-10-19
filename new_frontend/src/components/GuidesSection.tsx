import { motion } from 'motion/react';
import { BookOpen, Video, Play, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const guides = [
  {
    id: 1,
    title: "Полный гайд по M4A1",
    type: "video",
    duration: "12:34",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600",
    category: "Оружие"
  },
  {
    id: 2,
    title: "Тактика захвата точек",
    type: "article",
    duration: "5 мин",
    thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600",
    category: "Карты"
  },
  {
    id: 3,
    title: "Контроль отдачи",
    type: "video",
    duration: "18:45",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600",
    category: "Тактика"
  },
  {
    id: 4,
    title: "Снайперские позиции",
    type: "article",
    duration: "7 мин",
    thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600",
    category: "Карты"
  }
];

export function GuidesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#242831] to-[#1a1d23] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="w-20 h-1 bg-[#ea580c] mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <h2 className="text-4xl md:text-5xl tracking-wider mb-4">
            ГАЙДЫ И <span className="text-[#ea580c]">ОБУЧЕНИЕ</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Обучающие материалы от профессиональных игроков
          </p>
        </motion.div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {guides.map((guide, index) => (
            <motion.a
              key={guide.id}
              href={`#/guides/${guide.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-[#242831] border border-[#ea580c]/20 rounded-xl overflow-hidden hover:border-[#ea580c] hover:shadow-xl hover:shadow-[#ea580c]/10 transition-all h-full">
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-[#2d3139]">
                  <ImageWithFallback
                    src={guide.thumbnail}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242831] to-transparent" />
                  
                  {/* Type Badge */}
                  <div className={`absolute top-3 left-3 px-3 py-1 ${
                    guide.type === 'video' 
                      ? 'bg-red-500/90' 
                      : 'bg-blue-500/90'
                  } backdrop-blur-sm rounded-lg text-xs tracking-wider flex items-center gap-1.5`}>
                    {guide.type === 'video' ? (
                      <>
                        <Video className="w-3 h-3" />
                        ВИДЕО
                      </>
                    ) : (
                      <>
                        <BookOpen className="w-3 h-3" />
                        СТАТЬЯ
                      </>
                    )}
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 backdrop-blur-sm rounded text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {guide.duration}
                  </div>

                  {/* Play button overlay for videos */}
                  {guide.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-[#ea580c] rounded-full flex items-center justify-center shadow-lg shadow-[#ea580c]/50">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="mb-3">
                    <span className="px-2 py-1 bg-[#1a1d23] border border-[#ea580c]/30 rounded text-xs text-[#ea580c] tracking-wider">
                      {guide.category}
                    </span>
                  </div>

                  <h3 className="text-xl tracking-wide text-white group-hover:text-[#ea580c] transition-colors line-clamp-2">
                    {guide.title}
                  </h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="#/guides"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(234, 88, 12, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#ea580c] hover:bg-[#c2410c] rounded-lg transition-all shadow-lg shadow-[#ea580c]/20"
          >
            <BookOpen className="w-5 h-5" />
            <span className="tracking-wider uppercase">Все гайды</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
