import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const newsArticles = [
  {
    id: 1,
    title: "Season 3 Patch Notes Released",
    summary: "Major weapon balance changes, new maps, and operator updates hit the battlefield this week.",
    date: "October 15, 2025",
    category: "Update",
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWN0aWNhbCUyMG1pbGl0YXJ5JTIwaGVsaWNvcHRlcnxlbnwxfHx8fDE3NjA2OTkzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: true
  },
  {
    id: 2,
    title: "Assault Rifle Meta Shift",
    summary: "The M4A1 receives buffs while AK variants see minor nerfs in latest balance update.",
    date: "October 12, 2025",
    category: "Balance",
    tag: "HOT",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xkaWVyJTIwZXF1aXBtZW50JTIwZ2VhcnxlbnwxfHx8fDE3NjA2OTkzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false
  },
  {
    id: 3,
    title: "New Limited-Time Event",
    summary: "Operation: Desert Storm brings exclusive rewards and challenging missions to complete.",
    date: "October 10, 2025",
    category: "Event",
    tag: "LIVE",
    image: "https://images.unsplash.com/photo-1579003593419-98f949b9398f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMGJhc2UlMjBhY3Rpb258ZW58MXx8fHwxNzYwNjk5MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false
  },
  {
    id: 4,
    title: "Community Tournament Finals",
    summary: "Watch the best teams compete for $50,000 prize pool this weekend.",
    date: "October 8, 2025",
    category: "Esports",
    tag: "TRENDING",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWlsaXRhcnl8ZW58MXx8fHwxNzYwNjk4MDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false
  }
];

const categoryColors = {
  Update: "bg-blue-500/20 text-blue-400 border-blue-400/50",
  Balance: "bg-[#F97316]/20 text-[#F97316] border-[#F97316]/50",
  Event: "bg-purple-500/20 text-purple-400 border-purple-400/50",
  Esports: "bg-green-500/20 text-green-400 border-green-400/50"
};

const tagColors = {
  NEW: "bg-[#F97316] text-black",
  HOT: "bg-red-500 text-white",
  LIVE: "bg-green-500 text-black",
  TRENDING: "bg-yellow-500 text-black"
};

export function NewsSection() {
  return (
    <section id="news" className="py-20 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, #F97316 0px, #F97316 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(-45deg, #F97316 0px, #F97316 1px, transparent 1px, transparent 20px)
          `
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="text-center md:text-left flex-1">
              <motion.div
                className="w-16 h-1 bg-[#F97316] mx-auto md:mx-0 mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
              <h2 className="text-4xl md:text-5xl tracking-wider mb-3">
                LATEST <span className="text-[#F97316]">NEWS</span>
              </h2>
              <p className="text-gray-400">Stay updated with patches, events, and community highlights</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 border-2 border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-black transition-colors uppercase tracking-widest text-sm"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:row-span-2"
          >
            <div className="group cursor-pointer bg-[#2a2a2a] border-2 border-[#F97316]/30 overflow-hidden h-full relative hover:border-[#F97316] transition-all duration-300">
              {/* Image */}
              <div className="relative h-96 lg:h-full overflow-hidden">
                <ImageWithFallback
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Tag Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <motion.div
                    className={`px-3 py-1 ${tagColors[newsArticles[0].tag as keyof typeof tagColors]} uppercase tracking-wider text-xs`}
                    animate={{
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity
                    }}
                  >
                    {newsArticles[0].tag}
                  </motion.div>
                  <div className={`px-3 py-1 border ${categoryColors[newsArticles[0].category as keyof typeof categoryColors]} uppercase tracking-wider text-xs`}>
                    {newsArticles[0].category}
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl md:text-4xl tracking-wide mb-4 text-white group-hover:text-[#F97316] transition-colors">
                    {newsArticles[0].title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {newsArticles[0].summary}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4 text-[#F97316]" />
                    <span>{newsArticles[0].date}</span>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-[#F97316]/50"></div>
              </div>

              {/* Hover indicator */}
              <motion.div
                className="absolute bottom-8 right-8 w-12 h-12 border-2 border-[#F97316] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1, rotate: 90 }}
              >
                <ArrowRight className="w-6 h-6 text-[#F97316]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Secondary Articles */}
          {newsArticles.slice(1).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="group cursor-pointer bg-[#2a2a2a] border-2 border-[#F97316]/20 overflow-hidden h-full hover:border-[#F97316] transition-all duration-300 flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative md:w-48 h-48 md:h-auto overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50"></div>
                  
                  {/* Tag */}
                  <div className={`absolute top-2 left-2 px-2 py-1 ${tagColors[article.tag as keyof typeof tagColors]} uppercase tracking-wider text-[10px]`}>
                    {article.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className={`inline-block px-2 py-1 border ${categoryColors[article.category as keyof typeof categoryColors]} uppercase tracking-wider text-xs mb-3`}>
                      {article.category}
                    </div>
                    <h3 className="text-xl tracking-wide mb-2 text-white group-hover:text-[#F97316] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {article.summary}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3 text-[#F97316]" />
                      <span>{article.date}</span>
                    </div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-[#F97316]"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[20px] border-l-[#F97316] border-t-[20px] border-t-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F97316] to-transparent"></div>
    </section>
  );
}
