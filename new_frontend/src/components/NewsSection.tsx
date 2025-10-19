import { motion } from 'motion/react';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const newsArticles = [
  {
    id: 1,
    title: "Вышли патч-ноты 3 сезона",
    summary: "Масштабный баланс оружия, новые карты и обновления операторов уже на поле боя.",
    date: "15 октября 2025",
    category: "Обновление",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600",
  },
  {
    id: 2,
    title: "Изменения меты штурмовых винтовок",
    summary: "M4A1 получает баффы, в то время как варианты АК получают небольшие нерфы.",
    date: "12 октября 2025",
    category: "Баланс",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=600",
  },
  {
    id: 3,
    title: "Новое временное событие",
    summary: "Операция: Буря в пустыне приносит эксклюзивные награды и сложные миссии.",
    date: "10 октября 2025",
    category: "Событие",
    image: "https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=600",
  },
  {
    id: 4,
    title: "Финалы турнира сообщества",
    summary: "Смотрите, как лучшие команды сражаются за призовой фонд в $50,000 в эти выходные.",
    date: "8 октября 2025",
    category: "Киберспорт",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600",
  }
];

export function NewsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1a1d23] to-[#242831] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#ea580c] rounded-full blur-[120px]"></div>
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
            ПОСЛЕДНИЕ <span className="text-[#ea580c]">НОВОСТИ</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Будьте в курсе патчей, событий и главных событий сообщества
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newsArticles.map((article, index) => (
            <motion.a
              key={article.id}
              href={`#/news/${article.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-[#242831] border border-[#ea580c]/20 rounded-xl overflow-hidden hover:border-[#ea580c] hover:shadow-xl hover:shadow-[#ea580c]/10 transition-all h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-[#2d3139]">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242831] to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#ea580c] rounded-lg text-xs tracking-wider">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl tracking-wide mb-3 text-white group-hover:text-[#ea580c] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {article.summary}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs pt-4 border-t border-[#ea580c]/10">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-3 h-3 text-[#ea580c]" />
                      <span>{article.date}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#ea580c] group-hover:translate-x-1 transition-all" />
                  </div>
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
            href="#/news"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(234, 88, 12, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#ea580c] hover:bg-[#c2410c] rounded-lg transition-all shadow-lg shadow-[#ea580c]/20"
          >
            <Newspaper className="w-5 h-5" />
            <span className="tracking-wider uppercase">Все новости</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
