import { motion } from 'motion/react';
import { Search, Filter, X, Play, BookOpen, Video, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useMemo } from 'react';

// Mock guides data
const allGuides = [
  {
    id: 1,
    title: "Полный гайд по M4A1 - Лучшие сборки и тактики",
    category: "Оружие",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600",
    author: "ProGamer",
    date: "2025-10-15",
    views: 15420,
    duration: "12:34",
    difficulty: "Средняя",
    description: "Подробный разбор всех сборок M4A1 с практическими примерами игры"
  },
  {
    id: 2,
    title: "Тактика захвата точек на карте Metro",
    category: "Карты",
    type: "article",
    thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600",
    author: "TacticMaster",
    date: "2025-10-14",
    views: 8934,
    duration: "5 мин",
    difficulty: "Сложная",
    description: "Расстановка команды и последовательность захвата точек"
  },
  {
    id: 3,
    title: "Как контролировать отдачу: Полный туториал",
    category: "Тактика",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600",
    author: "AimCoach",
    date: "2025-10-13",
    views: 22150,
    duration: "18:45",
    difficulty: "Легкая",
    description: "Практические упражнения и настройки для идеального контроля отдачи"
  },
  {
    id: 4,
    title: "ТОП-5 снайперских позиций на всех картах",
    category: "Карты",
    type: "article",
    thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600",
    author: "SniperPro",
    date: "2025-10-12",
    views: 12780,
    duration: "7 мин",
    difficulty: "Средняя",
    description: "Лучшие позиции для снайперов с углами обзора и тактическими советами"
  },
  {
    id: 5,
    title: "Настройка чувствительности мыши под ваш стиль",
    category: "Тактика",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600",
    author: "SettingsGuru",
    date: "2025-10-11",
    views: 18900,
    duration: "10:22",
    difficulty: "Легкая",
    description: "Методика подбора идеальной чувствительности для разных стилей игры"
  },
  {
    id: 6,
    title: "MP5 vs Vector: Сравнение и выбор лучшего ПП",
    category: "Оружие",
    type: "article",
    thumbnail: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=600",
    author: "WeaponExpert",
    date: "2025-10-10",
    views: 9540,
    duration: "6 мин",
    difficulty: "Средняя",
    description: "Детальное сравнение характеристик и ситуаций применения"
  },
  {
    id: 7,
    title: "Командная работа: Роли и взаимодействие",
    category: "Тактика",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600",
    author: "TeamLeader",
    date: "2025-10-09",
    views: 14230,
    duration: "15:18",
    difficulty: "Сложная",
    description: "Распределение ролей в команде и тактики координированной игры"
  },
  {
    id: 8,
    title: "Оптимизация настроек графики для макс. FPS",
    category: "Настройки",
    type: "article",
    thumbnail: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600",
    author: "TechGuru",
    date: "2025-10-08",
    views: 25670,
    duration: "4 мин",
    difficulty: "Легкая",
    description: "Лучшие настройки графики для стабильных 144+ FPS"
  }
];

const categories = ["Все", "Оружие", "Карты", "Тактика", "Настройки"];
const types = ["Все", "video", "article"];
const difficulties = ["Все", "Легкая", "Средняя", "Сложная"];

export function GuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedType, setSelectedType] = useState("Все");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<'date' | 'views'>('date');

  const filteredGuides = useMemo(() => {
    let filtered = allGuides;

    if (selectedCategory !== "Все") {
      filtered = filtered.filter(g => g.category === selectedCategory);
    }

    if (selectedType !== "Все") {
      filtered = filtered.filter(g => g.type === selectedType);
    }

    if (selectedDifficulty !== "Все") {
      filtered = filtered.filter(g => g.difficulty === selectedDifficulty);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(g =>
        g.title.toLowerCase().includes(query) ||
        g.description.toLowerCase().includes(query) ||
        g.category.toLowerCase().includes(query)
      );
    }

    // Sorting
    return filtered.sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return b.views - a.views;
    });
  }, [selectedCategory, selectedType, selectedDifficulty, searchQuery, sortBy]);

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
            <BookOpen className="w-8 h-8 text-[#ea580c]" />
          </div>
          <h1 className="text-5xl md:text-6xl tracking-wider mb-4">
            ГАЙДЫ И <span className="text-[#ea580c]">ОБУЧЕНИЕ</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            Обучающие материалы от профессиональных игроков. Видео-гайды, текстовые туториалы и тактические разборы.
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
                  placeholder="Поиск гайдов..."
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

            {/* Filter Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Category */}
              <div>
                <label className="text-xs text-gray-500 tracking-widest uppercase mb-2 block">Категория</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-[#1a1d23] border border-[#ea580c]/30 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#ea580c] cursor-pointer"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Type */}
              <div>
                <label className="text-xs text-gray-500 tracking-widest uppercase mb-2 block">Тип</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full bg-[#1a1d23] border border-[#ea580c]/30 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#ea580c] cursor-pointer"
                >
                  <option value="Все">Все</option>
                  <option value="video">Видео</option>
                  <option value="article">Статьи</option>
                </select>
              </div>

              {/* Difficulty */}
              <div>
                <label className="text-xs text-gray-500 tracking-widest uppercase mb-2 block">Сложность</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full bg-[#1a1d23] border border-[#ea580c]/30 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#ea580c] cursor-pointer"
                >
                  {difficulties.map(diff => (
                    <option key={diff} value={diff}>{diff}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sort & Results */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#ea580c]/20">
              <div className="text-sm">
                <span className="text-gray-500">Найдено: </span>
                <span className="text-[#ea580c]">{filteredGuides.length}</span>
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

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide, index) => (
            <motion.a
              key={guide.id}
              href={`#/guides/${guide.id}`}
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
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 backdrop-blur-sm rounded text-xs">
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
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-[#1a1d23] border border-[#ea580c]/30 rounded text-xs text-[#ea580c] tracking-wider">
                      {guide.category}
                    </span>
                    <span className="text-xs text-gray-500">{formatDate(guide.date)}</span>
                  </div>

                  <h3 className="text-xl tracking-wide mb-3 text-white group-hover:text-[#ea580c] transition-colors line-clamp-2">
                    {guide.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {guide.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs pt-4 border-t border-[#ea580c]/10">
                    <div className="flex items-center gap-3 text-gray-500">
                      <span>{guide.author}</span>
                      <span>•</span>
                      <span>{formatViews(guide.views)} просмотров</span>
                    </div>
                    <span className="text-gray-400">{guide.difficulty}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* No Results */}
        {filteredGuides.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <BookOpen className="w-16 h-16 text-[#ea580c] mx-auto mb-4" />
            <h3 className="text-2xl tracking-wider mb-2">Гайды не найдены</h3>
            <p className="text-gray-400">Попробуйте изменить фильтры или поисковый запрос</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
