import { motion } from 'motion/react';
import { Search, X, Newspaper, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useMemo } from 'react';

// Mock news data
const allNews = [
  {
    id: 1,
    title: "Вышли патч-ноты 3 сезона",
    summary: "Масштабный баланс оружия, новые карты и обновления операторов уже на поле боя.",
    date: "2025-10-15",
    category: "Обновление",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600",
    views: 15420
  },
  {
    id: 2,
    title: "Изменения меты штурмовых винтовок",
    summary: "M4A1 получает баффы, в то время как варианты АК получают небольшие нерфы.",
    date: "2025-10-14",
    category: "Баланс",
    thumbnail: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=600",
    views: 8934
  },
  {
    id: 3,
    title: "Новое временное событие",
    summary: "Операция: Буря в пустыне приносит эксклюзивные награды и сложные миссии.",
    date: "2025-10-13",
    category: "Событие",
    thumbnail: "https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=600",
    views: 22150
  },
  {
    id: 4,
    title: "Финалы турнира сообщества",
    summary: "Смотрите, как лучшие команды сражаются за призовой фонд в $50,000 в эти выходные.",
    date: "2025-10-12",
    category: "Киберспорт",
    thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600",
    views: 12780
  },
  {
    id: 5,
    title: "Новые карты добавлены в ротацию",
    summary: "Две новые карты теперь доступны в режиме завоевания с уникальными локациями.",
    date: "2025-10-11",
    category: "Контент",
    thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600",
    views: 18900
  },
  {
    id: 6,
    title: "Исправления критических багов",
    summary: "Патч устраняет проблемы с хитбоксами и коллизиями на всех картах.",
    date: "2025-10-10",
    category: "Исправления",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600",
    views: 9540
  },
  {
    id: 7,
    title: "Обновление прогрессии боевого пропуска",
    summary: "Улучшенная система прогрессии и новые косметические предметы доступны.",
    date: "2025-10-09",
    category: "Обновление",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600",
    views: 14230
  },
  {
    id: 8,
    title: "Анонс нового режима игры",
    summary: "Захват флага возвращается с современными механиками и балансом.",
    date: "2025-10-08",
    category: "Анонс",
    thumbnail: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600",
    views: 25670
  }
];

const categories = ["Все", "Обновление", "Баланс", "Событие", "Киберспорт", "Контент", "Исправления", "Анонс"];

export function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<'date' | 'views'>('date');

  const filteredNews = useMemo(() => {
    let filtered = allNews;

    if (selectedCategory !== "Все") {
      filtered = filtered.filter(n => n.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(n =>
        n.title.toLowerCase().includes(query) ||
        n.summary.toLowerCase().includes(query) ||
        n.category.toLowerCase().includes(query)
      );
    }

    // Sorting
    return filtered.sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return b.views - a.views;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return (views / 1000).toFixed(1) + 'K';
    }
    return views.toString();
  };

  return (
    <div className="min-h-screen bg-[#1a1d23] text-white pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-1 bg-[#ea580c] rounded-full" />
            <Newspaper className="w-8 h-8 text-[#ea580c]" />
          </div>
          <h1 className="text-5xl md:text-6xl tracking-wider mb-4">
            <span className="text-[#ea580c]">НОВОСТИ</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            Последние обновления, патчи и события из мира Battlefield 6
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-6">
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ea580c]" />
                <input
                  type="text"
                  placeholder="Поиск новостей..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#1a1d23] border border-[#ea580c]/30 rounded-lg pl-12 pr-12 py-3 text-sm focus:outline-none focus:border-[#ea580c] transition-all placeholder:text-gray-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filters */}
            <div className="mb-6">
              <label className="text-xs text-gray-500 tracking-widest uppercase mb-3 block">Категория</label>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${
                      selectedCategory === cat
                        ? 'bg-[#ea580c] text-white'
                        : 'bg-[#1a1d23] text-gray-400 hover:text-white border border-[#ea580c]/20 hover:border-[#ea580c]/50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort & Results */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#ea580c]/20">
              <div className="text-sm">
                <span className="text-gray-500">Найдено: </span>
                <span className="text-[#ea580c]">{filteredNews.length}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-2 w-full sm:w-auto">
                <span className="text-xs text-gray-500 tracking-widest uppercase">Сортировка:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSortBy('date')}
                    className={`px-3 py-1 rounded-lg text-xs transition-all ${
                      sortBy === 'date'
                        ? 'bg-[#ea580c] text-white'
                        : 'bg-[#1a1d23] text-gray-400 hover:text-white'
                    }`}
                  >
                    Дата
                  </button>
                  <button
                    onClick={() => setSortBy('views')}
                    className={`px-3 py-1 rounded-lg text-xs transition-all ${
                      sortBy === 'views'
                        ? 'bg-[#ea580c] text-white'
                        : 'bg-[#1a1d23] text-gray-400 hover:text-white'
                    }`}
                  >
                    Просмотры
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news, index) => (
            <motion.a
              key={news.id}
              href={`#/news/${news.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-[#242831] border border-[#ea580c]/20 rounded-xl overflow-hidden hover:border-[#ea580c] hover:shadow-xl hover:shadow-[#ea580c]/10 transition-all h-full">
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-[#2d3139]">
                  <ImageWithFallback
                    src={news.thumbnail}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242831] to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#ea580c] rounded-lg text-xs tracking-wider">
                    {news.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
                    <Calendar className="w-3 h-3 text-[#ea580c]" />
                    <span>{formatDate(news.date)}</span>
                  </div>

                  <h3 className="text-xl tracking-wide mb-3 text-white group-hover:text-[#ea580c] transition-colors line-clamp-2">
                    {news.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {news.summary}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs pt-4 border-t border-[#ea580c]/10">
                    <span className="text-gray-500">{formatViews(news.views)} просмотров</span>
                    <span className="text-gray-400">Читать →</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* No Results */}
        {filteredNews.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Newspaper className="w-16 h-16 text-[#ea580c] mx-auto mb-4" />
            <h3 className="text-2xl tracking-wider mb-2">Новости не найдены</h3>
            <p className="text-gray-400">Попробуйте изменить фильтры или поисковый запрос</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
