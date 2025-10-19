import { motion } from 'motion/react';
import { Search, Filter, X, Crosshair } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useMemo } from 'react';

// All weapons data
const allWeapons = [
  {
    id: 1,
    name: "M4A1",
    category: "Штурмовая винтовка",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400",
    description: "Универсальная штурмовая винтовка с отличным балансом урона, точности и контроля отдачи.",
    stats: { damage: 85, range: 75, accuracy: 90, mobility: 70, control: 85 },
    loadoutsCount: 3
  },
  {
    id: 2,
    name: "AK-47",
    category: "Штурмовая винтовка",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400",
    description: "Мощная винтовка с высоким уроном, но сложным контролем отдачи.",
    stats: { damage: 90, range: 70, accuracy: 75, mobility: 65, control: 70 },
    loadoutsCount: 2
  },
  {
    id: 3,
    name: "MP5",
    category: "ПП",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400",
    description: "Быстрый и мобильный ПП для ближнего боя.",
    stats: { damage: 70, range: 50, accuracy: 85, mobility: 95, control: 90 },
    loadoutsCount: 4
  },
  {
    id: 4,
    name: "M200",
    category: "Снайперская винтовка",
    image: "https://images.unsplash.com/photo-1583454155184-870a1f63eedc?w=400",
    description: "Снайперская винтовка дальнего действия с убийством с одного выстрела.",
    stats: { damage: 100, range: 100, accuracy: 95, mobility: 45, control: 60 },
    loadoutsCount: 2
  },
  {
    id: 5,
    name: "SCAR-H",
    category: "Штурмовая винтовка",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400",
    description: "Тяжелая штурмовая винтовка для средних и дальних дистанций.",
    stats: { damage: 88, range: 80, accuracy: 80, mobility: 60, control: 75 },
    loadoutsCount: 2
  },
  {
    id: 6,
    name: "Vector",
    category: "ПП",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400",
    description: "Скорострельный ПП с отличной мобильностью.",
    stats: { damage: 65, range: 45, accuracy: 80, mobility: 100, control: 85 },
    loadoutsCount: 3
  },
  {
    id: 7,
    name: "M249",
    category: "Пулемет",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400",
    description: "Пулемет поддержки с большим магазином для подавляющего огня.",
    stats: { damage: 75, range: 85, accuracy: 70, mobility: 40, control: 65 },
    loadoutsCount: 1
  },
  {
    id: 8,
    name: "Glock 18",
    category: "Пистолет",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400",
    description: "Автоматический пистолет для экстренных ситуаций.",
    stats: { damage: 60, range: 35, accuracy: 75, mobility: 100, control: 80 },
    loadoutsCount: 1
  }
];

const categories = ["Все", "Штурмовая винтовка", "ПП", "Снайперская винтовка", "Пулемет", "Пистолет"];

export function WeaponsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredWeapons = useMemo(() => {
    let filtered = allWeapons;

    if (selectedCategory !== "Все") {
      filtered = filtered.filter(w => w.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(w =>
        w.name.toLowerCase().includes(query) ||
        w.category.toLowerCase().includes(query) ||
        w.description.toLowerCase().includes(query)
      );
    }

    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }, [selectedCategory, searchQuery]);

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
            <div className="w-16 h-1 bg-[#ea580c]" />
            <Crosshair className="w-8 h-8 text-[#ea580c]" />
          </div>
          <h1 className="text-5xl md:text-6xl tracking-wider mb-4">
            КАТАЛОГ <span className="text-[#ea580c]">ОРУЖИЯ</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            Полный каталог оружия Battlefield 6 с характеристиками и доступными сборками.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-[#242831] border border-[#ea580c]/20 rounded-lg p-6">
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ea580c]" />
                <input
                  type="text"
                  placeholder="Поиск оружия..."
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

            {/* Category Filter */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-gray-500 tracking-widest uppercase">Категория</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <motion.button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg border transition-all text-sm ${
                      selectedCategory === cat
                        ? 'bg-[#ea580c] border-[#ea580c] text-white'
                        : 'bg-[#1a1d23] border-[#ea580c]/30 text-gray-300 hover:border-[#ea580c]'
                    }`}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="mt-6 pt-6 border-t border-[#ea580c]/20 text-sm">
              <span className="text-gray-500">Найдено: </span>
              <span className="text-[#ea580c]">{filteredWeapons.length}</span>
            </div>
          </div>
        </motion.div>

        {/* Weapons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWeapons.map((weapon, index) => (
            <motion.a
              key={weapon.id}
              href={`#/weapons/${weapon.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-[#242831] border border-[#ea580c]/20 rounded-lg overflow-hidden hover:border-[#ea580c] transition-all h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-[#2d3139]">
                  <ImageWithFallback
                    src={weapon.image}
                    alt={weapon.name}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242831] to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#1a1d23]/90 border border-[#ea580c]/50 rounded text-xs text-gray-300 backdrop-blur-sm">
                    {weapon.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl tracking-wider mb-3 text-white group-hover:text-[#ea580c] transition-colors">
                    {weapon.name}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {weapon.description}
                  </p>

                  {/* Stats Preview */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-[#ea580c]/10">
                    <span>Сборок: <span className="text-[#ea580c]">{weapon.loadoutsCount}</span></span>
                    <span className="text-gray-400">Подробнее →</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* No Results */}
        {filteredWeapons.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Crosshair className="w-16 h-16 text-[#ea580c] mx-auto mb-4" />
            <h3 className="text-2xl tracking-wider mb-2">Оружие не найдено</h3>
            <p className="text-gray-400">Попробуйте изменить фильтры или поисковый запрос</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
