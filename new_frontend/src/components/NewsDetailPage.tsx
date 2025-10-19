import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Eye, User, Share2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function NewsDetailPage() {
  // Mock data - в реальности получаем по ID из URL
  const news = {
    id: 1,
    title: "Вышли патч-ноты 3 сезона",
    category: "Обновление",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200",
    author: "BF Team",
    date: "2025-10-15",
    views: 15420,
    content: `
      <h2>Основные изменения сезона 3</h2>
      <p>Добро пожаловать в 3-й сезон Battlefield 6! Этот патч приносит масштабные изменения баланса, новые карты и множество улучшений качества жизни.</p>
      
      <h3>Баланс оружия</h3>
      <p>Мы внимательно прислушались к отзывам сообщества и внесли следующие изменения:</p>
      
      <h4>Штурмовые винтовки</h4>
      <ul>
        <li><strong>M4A1:</strong> Увеличен урон с 42 до 45. Снижена вертикальная отдача на 15%</li>
        <li><strong>AK-47:</strong> Снижен урон с 48 до 46. Немного увеличена горизонтальная отдача</li>
        <li><strong>SCAR-H:</strong> Улучшена точность на дальних дистанциях. Увеличена скорость перезарядки</li>
      </ul>

      <h4>Пистолеты-пулеметы</h4>
      <ul>
        <li><strong>MP5:</strong> Снижен урон на дальних дистанциях. Улучшена мобильность</li>
        <li><strong>Vector:</strong> Увеличена скорострельность. Снижен размер магазина с 30 до 25</li>
        <li><strong>PP-19 Bizon:</strong> Улучшена точность от бедра</li>
      </ul>

      <h3>Новые карты</h3>
      <p>Две совершенно новые карты добавлены в ротацию:</p>
      
      <h4>Операция: Буря в пустыне</h4>
      <p>Масштабная пустынная карта с открытыми пространствами и захватываемыми точками. Идеальна для танковых сражений и снайперских дуэлей. Поддерживает до 128 игроков в режиме Завоевание.</p>

      <h4>Городские руины</h4>
      <p>Разрушенный городской ландшафт с вертикальной геометрией и CQB-ориентированным дизайном. Множество помещений для штурма и обороны.</p>

      <h3>Улучшения качества жизни</h3>
      <ul>
        <li>Улучшена система создания отрядов</li>
        <li>Добавлена возможность сохранения нескольких loadout для каждого класса</li>
        <li>Улучшен пользовательский интерфейс меню</li>
        <li>Оптимизация производительности на всех платформах</li>
        <li>Исправлены критические баги с коллизиями</li>
      </ul>

      <h3>Обновления боевого пропуска</h3>
      <p>Сезон 3 приносит совершенно новый боевой пропуск с эксклюзивными скинами оружия, обмундированием операторов и уникальными казнениями. Все игроки получат доступ к бесплатной дорожке с наградами.</p>

      <h3>Что дальше?</h3>
      <p>Это только начало сезона 3. В ближайшие недели ожидайте:</p>
      <ul>
        <li>Новое ограниченное по времени событие</li>
        <li>Дополнительные варианты оружия</li>
        <li>Турниры сообщества с призовыми фондами</li>
        <li>Дальнейшие улучшения баланса на основе данных</li>
      </ul>

      <h2>Заключение</h2>
      <p>Мы невероятно благодарны сообществу за постоянную поддержку и обратную связь. Сезон 3 был создан с учетом ваших предложений, и мы продолжим совершенствовать Battlefield 6 вместе с вами.</p>
      
      <p>Увидимся на поле боя, солдаты!</p>
    `,
    tags: ["Патч", "Сезон 3", "Баланс", "Новые карты"]
  };

  return (
    <div className="min-h-screen bg-[#1a1d23] text-white pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Button */}
        <motion.a
          href="#/news"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ea580c] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Вернуться к новостям</span>
        </motion.a>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          {/* Category */}
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[#ea580c] rounded-lg text-xs tracking-wider">
              {news.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl tracking-wide mb-6">
            {news.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{news.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(news.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{news.views.toLocaleString()} просмотров</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative h-96 rounded-xl overflow-hidden border border-[#ea580c]/20">
            <ImageWithFallback
              src={news.thumbnail}
              alt={news.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Share Button */}
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
            className="news-content"
            dangerouslySetInnerHTML={{ __html: news.content }}
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
            {news.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#242831] border border-[#ea580c]/30 rounded-lg text-sm text-gray-300 hover:border-[#ea580c] hover:text-[#ea580c] transition-all cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Related News */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl tracking-wider mb-8">
            Похожие <span className="text-[#ea580c]">новости</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[2, 3, 4].map((id) => (
              <a
                key={id}
                href={`#/news/${id}`}
                className="bg-[#242831] border border-[#ea580c]/20 rounded-xl overflow-hidden hover:border-[#ea580c] transition-all group"
              >
                <div className="relative h-40 overflow-hidden bg-[#2d3139]">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-${1552820728000 + id}?w=400`}
                    alt={`Related news ${id}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="p-4">
                  <h4 className="tracking-wide mb-2 group-hover:text-[#ea580c] transition-colors">
                    Новость {id}
                  </h4>
                  <p className="text-sm text-gray-400 text-xs">2 дня назад</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .news-content h2 {
          font-size: 1.875rem;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          color: #ea580c;
        }
        
        .news-content h3 {
          font-size: 1.5rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }
        
        .news-content h4 {
          font-size: 1.25rem;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #ffffff;
        }
        
        .news-content p {
          margin-bottom: 1.25rem;
          color: #9ca3af;
          line-height: 1.8;
        }
        
        .news-content ul {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
          list-style-type: disc;
          color: #9ca3af;
        }
        
        .news-content li {
          margin-bottom: 0.5rem;
          padding-left: 0.5rem;
        }
        
        .news-content strong {
          color: #ea580c;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
