import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Eye, User, Clock, BookOpen, Video, Share2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function GuideDetailPage() {
  // Mock data - в реальности получаем по ID из URL
  const guide = {
    id: 1,
    title: "Полный гайд по M4A1 - Лучшие сборки и тактики",
    category: "Оружие",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200",
    author: "ProGamer",
    date: "2025-10-15",
    views: 15420,
    duration: "12:34",
    difficulty: "Средняя",
    videoId: "dQw4w9WgXcQ", // YouTube video ID
    content: `
      <h2>Введение</h2>
      <p>M4A1 является одной из самых универсальных штурмовых винтовок в Battlefield 6. В этом гайде мы разберем все аспекты использования этого оружия.</p>
      
      <h3>Почему M4A1?</h3>
      <ul>
        <li>Отличный баланс урона и точности</li>
        <li>Низкая отдача для быстрого освоения</li>
        <li>Большой выбор аттачментов</li>
        <li>Эффективность на средних дистанциях</li>
      </ul>

      <h2>Лучшие сборки</h2>
      
      <h3>1. Универсальная сборка (META)</h3>
      <p>Эта сборка подойдет для большинства ситуаций и карт:</p>
      <ul>
        <li><strong>Оптика:</strong> Holographic Sight - для быстрого прицеливания</li>
        <li><strong>Ствол:</strong> Compensator - снижение вертикальной отдачи</li>
        <li><strong>Магазин:</strong> Extended Mag 40 rounds - больше патронов для серий убийств</li>
        <li><strong>Рукоять:</strong> Tactical Foregrip - улучшение стабильности</li>
        <li><strong>Приклад:</strong> Precision Stock - точность на средних дистанциях</li>
      </ul>

      <h3>2. CQB сборка</h3>
      <p>Для ближнего боя и штурма помещений:</p>
      <ul>
        <li><strong>Оптика:</strong> Red Dot Sight</li>
        <li><strong>Ствол:</strong> Short Barrel - улучшенная мобильность</li>
        <li><strong>Лазер:</strong> Tactical Laser - точность от бедра</li>
        <li><strong>Магазин:</strong> Fast Mag</li>
      </ul>

      <h2>Тактики использования</h2>
      
      <h3>Позиционирование</h3>
      <p>M4A1 наиболее эффективен на средних дистанциях (15-40 метров). Старайтесь:</p>
      <ul>
        <li>Держать противника в зоне комфортной дистанции</li>
        <li>Использовать укрытия для перезарядки</li>
        <li>Не вступать в дальние перестрелки со снайперами</li>
      </ul>

      <h3>Контроль отдачи</h3>
      <p>Отдача M4A1 предсказуема и легко контролируется:</p>
      <ul>
        <li>Первые 5-7 выстрелов стреляйте без коррекции</li>
        <li>При длинных очередях плавно опускайте мышь вниз</li>
        <li>На дальних дистанциях используйте короткие очереди по 3-5 выстрелов</li>
      </ul>

      <h2>Заключение</h2>
      <p>M4A1 - отличный выбор как для новичков, так и для профессионалов. Освоив базовые принципы, вы сможете доминировать на средних дистанциях.</p>
    `,
    tags: ["M4A1", "Штурмовая винтовка", "META", "Сборки"]
  };

  return (
    <div className="min-h-screen bg-[#1a1d23] text-white pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Button */}
        <motion.a
          href="#/guides"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ea580c] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Вернуться к гайдам</span>
        </motion.a>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[#ea580c] rounded-lg text-xs tracking-wider">
              {guide.category}
            </span>
            {guide.type === 'video' ? (
              <span className="px-3 py-1 bg-red-500/90 rounded-lg text-xs tracking-wider flex items-center gap-1.5">
                <Video className="w-3 h-3" />
                ВИДЕО
              </span>
            ) : (
              <span className="px-3 py-1 bg-blue-500/90 rounded-lg text-xs tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3 h-3" />
                СТАТЬЯ
              </span>
            )}
            <span className="text-sm text-gray-500">{guide.difficulty}</span>
          </div>

          <h1 className="text-4xl md:text-5xl tracking-wide mb-6">
            {guide.title}
          </h1>

          {/* Author & Stats */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{guide.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(guide.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{guide.views.toLocaleString()} просмотров</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{guide.duration}</span>
            </div>
          </div>
        </motion.div>

        {/* Video Player or Featured Image */}
        {guide.type === 'video' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative bg-[#242831] rounded-xl overflow-hidden border border-[#ea580c]/20 aspect-video">
              {/* YouTube Embed */}
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${guide.videoId}`}
                title={guide.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative h-96 rounded-xl overflow-hidden border border-[#ea580c]/20">
              <ImageWithFallback
                src={guide.thumbnail}
                alt={guide.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}

        {/* Share & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4 mb-12 pb-8 border-b border-[#ea580c]/20"
        >
          <button className="px-6 py-3 bg-[#242831] border border-[#ea580c]/30 rounded-lg hover:bg-[#ea580c] hover:border-[#ea580c] transition-all flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            <span className="text-sm tracking-wider">Поделиться</span>
          </button>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <div 
            className="guide-content"
            dangerouslySetInnerHTML={{ __html: guide.content }}
            style={{
              lineHeight: '1.8',
            }}
          />
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-[#ea580c]/20"
        >
          <h3 className="text-sm tracking-widest text-gray-500 uppercase mb-4">Теги:</h3>
          <div className="flex flex-wrap gap-2">
            {guide.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#242831] border border-[#ea580c]/30 rounded-lg text-sm text-gray-300 hover:border-[#ea580c] hover:text-[#ea580c] transition-all cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Related Guides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl tracking-wider mb-8">
            Похожие <span className="text-[#ea580c]">гайды</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <a
                key={i}
                href={`#/guides/${i + 1}`}
                className="bg-[#242831] border border-[#ea580c]/20 rounded-xl overflow-hidden hover:border-[#ea580c] transition-all group"
              >
                <div className="relative h-40 overflow-hidden bg-[#2d3139]">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-${1511512578047 + i}?w=400`}
                    alt={`Related guide ${i}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="p-4">
                  <h4 className="tracking-wide mb-2 group-hover:text-[#ea580c] transition-colors">
                    Гайд по тактикам {i}
                  </h4>
                  <p className="text-sm text-gray-400 text-xs">5 минут чтения</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .guide-content h2 {
          font-size: 1.875rem;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          color: #ea580c;
        }
        
        .guide-content h3 {
          font-size: 1.5rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }
        
        .guide-content p {
          margin-bottom: 1.25rem;
          color: #9ca3af;
          line-height: 1.8;
        }
        
        .guide-content ul {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
          list-style-type: disc;
          color: #9ca3af;
        }
        
        .guide-content li {
          margin-bottom: 0.5rem;
          padding-left: 0.5rem;
        }
        
        .guide-content strong {
          color: #ea580c;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
