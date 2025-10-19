import { motion } from 'motion/react';
import { Search, Filter, X, TrendingUp, Star, Target, Trophy, Upload } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useMemo } from 'react';
import { SubmitLoadoutModal } from './SubmitLoadoutModal';

// Mock META loadouts data - ONLY weapons with META tag
const metaLoadouts = [
  {
    id: 1,
    name: "M4A1",
    category: "Штурмовая винтовка",
    tier: "S",
    season: "Сезон 3",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400",
    stats: { damage: 85, range: 75, accuracy: 90, mobility: 70, control: 85 },
    tags: ["META", "Универсал", "Средняя дистанция"],
    difficulty: "Легкая",
    pickRate: 28.5,
    winRate: 54.2,
    description: "Лучший выбор для средних дистанций с балансом характеристик"
  },
  {
    id: 3,
    name: "MP5",
    category: "ПП",
    tier: "S",
    season: "Сезон 3",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400",
    stats: { damage: 70, range: 50, accuracy: 85, mobility: 95, control: 90 },
    tags: ["META", "Ближний бой", "Мобильность"],
    difficulty: "Легкая",
    pickRate: 31.2,
    winRate: 55.7,
    description: "Доминант ближних дистанций с высокой мобильностью"
  },
  {
    id: 9,
    name: "ACR",
    category: "Штурмовая винтовка",
    tier: "S",
    season: "Сезон 2",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400",
    stats: { damage: 80, range: 85, accuracy: 95, mobility: 75, control: 92 },
    tags: ["META", "Дальняя дистанция", "Низкая отдача"],
    difficulty: "Легкая",
    pickRate: 26.8,
    winRate: 56.1,
    description: "Минимальная отдача для дальних дистанций"
  },
  {
    id: 10,
    name: "PP-19 Bizon",
    category: "ПП",
    tier: "A",
    season: "Сезон 2",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400",
    stats: { damage: 68, range: 48, accuracy: 82, mobility: 92, control: 88 },
    tags: ["META", "Большой магазин", "Ближний бой"],
    difficulty: "Легкая",
    pickRate: 19.4,
    winRate: 53.8,
    description: "Огромный магазин для непрерывного огня"
  },
  {
    id: 11,
    name: "GRAU 5.56",
    category: "Штурмовая винтовка",
    tier: "A",
    season: "Сезон 1",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400",
    stats: { damage: 78, range: 90, accuracy: 88, mobility: 72, control: 85 },
    tags: ["META", "Дальняя дистанция", "Точность"],
    difficulty: "Средняя",
    pickRate: 21.7,
    winRate: 52.9,
    description: "Оптимальный выбор для дальних схваток"
  }
];

const categories = ["Все", "Штурмовая винтовка", "ПП", "Снайперская винтовка"];
const tiers = ["Все", "S", "A"];
const difficulties = ["Все", "Легкая", "Средняя", "Сложная"];
const seasons = ["Все сезоны", "Сезон 3", "Сезон 2", "Сезон 1"];

export function LoadoutsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedTier, setSelectedTier] = useState("Все");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Все");
  const [selectedSeason, setSelectedSeason] = useState("Все сезоны");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<'pickRate' | 'winRate' | 'name'>('pickRate');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const filteredLoadouts = useMemo(() => {
    let filtered = metaLoadouts;

    if (selectedCategory !== "Все") {
      filtered = filtered.filter(l => l.category === selectedCategory);
    }

    if (selectedTier !== "Все") {
      filtered = filtered.filter(l => l.tier === selectedTier);
    }

    if (selectedDifficulty !== "Все") {
      filtered = filtered.filter(l => l.difficulty === selectedDifficulty);
    }

    if (selectedSeason !== "Все сезоны") {
      filtered = filtered.filter(l => l.season === selectedSeason);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(l =>
        l.name.toLowerCase().includes(query) ||
        l.category.toLowerCase().includes(query) ||
        l.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Sorting
    return filtered.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return b[sortBy] - a[sortBy];
    });
  }, [selectedCategory, selectedTier, selectedDifficulty, selectedSeason, searchQuery, sortBy]);

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'S': return 'text-[#ea580c] bg-[#ea580c]/10 border-[#ea580c]';
      case 'A': return 'text-blue-400 bg-blue-400/10 border-blue-400';
      case 'B': return 'text-green-400 bg-green-400/10 border-green-400';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400';
    }
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
            <Trophy className="w-8 h-8 text-[#ea580c]" />
          </div>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div>
              <h1 className="text-5xl md:text-6xl tracking-wider mb-4">
                META <span className="text-[#ea580c]">СБОРКИ</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-3xl">
                Топовые сборки оружия с лучшими показателями побед. Только проверенные конфигурации от профессиональных игроков.
              </p>
            </div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => setIsSubmitModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 px-6 py-3 bg-[#ea580c] hover:bg-[#c2410c] rounded-lg transition-all shadow-lg shadow-[#ea580c]/20 whitespace-nowrap"
            >
              <Upload className="w-5 h-5" />
              <span className="tracking-wider uppercase text-sm">Отправить сборку</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {[
            { label: 'Всего META сборок', value: metaLoadouts.length, icon: Trophy },
            { label: 'Средний WinRate', value: '54.3%', icon: TrendingUp },
            { label: 'Текущий сезон', value: 'Сезон 3', icon: Star },
            { label: 'Обновлено', value: 'Сегодня', icon: Target }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-4 hover:border-[#ea580c]/50 transition-all"
            >
              <stat.icon className="w-5 h-5 text-[#ea580c] mb-2" />
              <div className="text-2xl tracking-wider text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-6">
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ea580c]" />
                <input
                  type="text"
                  placeholder="Поиск META сборок..."
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

              {/* Tier */}
              <div>
                <label className="text-xs text-gray-500 tracking-widest uppercase mb-2 block">Тир</label>
                <select
                  value={selectedTier}
                  onChange={(e) => setSelectedTier(e.target.value)}
                  className="w-full bg-[#1a1d23] border border-[#ea580c]/30 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#ea580c] cursor-pointer"
                >
                  {tiers.map(tier => (
                    <option key={tier} value={tier}>{tier}</option>
                  ))}
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

              {/* Season - NEW! */}
              <div>
                <label className="text-xs text-gray-500 tracking-widest uppercase mb-2 block">Сезон</label>
                <select
                  value={selectedSeason}
                  onChange={(e) => setSelectedSeason(e.target.value)}
                  className="w-full bg-[#1a1d23] border border-[#ea580c]/30 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#ea580c] cursor-pointer"
                >
                  {seasons.map(season => (
                    <option key={season} value={season}>{season}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sort & Results */}
            <div className="mt-6 pt-6 border-t border-[#ea580c]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-sm">
                <span className="text-gray-500">Найдено: </span>
                <span className="text-[#ea580c]">{filteredLoadouts.length}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-2 w-full sm:w-auto">
                <span className="text-xs text-gray-500 tracking-widest uppercase">Сортировка:</span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'pickRate', label: 'Pick Rate' },
                    { value: 'winRate', label: 'Win Rate' },
                    { value: 'name', label: 'Название' }
                  ].map(sort => (
                    <button
                      key={sort.value}
                      onClick={() => setSortBy(sort.value as any)}
                      className={`px-3 py-1 rounded-lg text-xs transition-all ${
                        sortBy === sort.value
                          ? 'bg-[#ea580c] text-white'
                          : 'bg-[#1a1d23] text-gray-400 hover:text-white'
                      }`}
                    >
                      {sort.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Loadouts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLoadouts.map((loadout, index) => (
            <motion.a
              key={loadout.id}
              href={`#/loadouts/${loadout.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-[#242831] border border-[#ea580c]/20 rounded-xl overflow-hidden hover:border-[#ea580c] hover:shadow-xl hover:shadow-[#ea580c]/10 transition-all h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-[#2d3139]">
                  <ImageWithFallback
                    src={loadout.image}
                    alt={loadout.name}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242831] via-[#242831]/50 to-transparent" />
                  
                  {/* META Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#ea580c] rounded-lg text-xs tracking-wider shadow-lg shadow-[#ea580c]/30">
                    META
                  </div>

                  {/* Tier */}
                  <div className={`absolute top-3 right-3 w-10 h-10 ${getTierColor(loadout.tier)} rounded-lg flex items-center justify-center border backdrop-blur-sm tracking-wider`}>
                    {loadout.tier}
                  </div>

                  {/* Season */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-[#1a1d23]/90 border border-[#ea580c]/30 rounded text-xs text-gray-400 backdrop-blur-sm">
                    {loadout.season}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl tracking-wider text-white group-hover:text-[#ea580c] transition-colors mb-1">
                        {loadout.name}
                      </h3>
                      <p className="text-xs text-gray-500 tracking-wider uppercase">{loadout.category}</p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {loadout.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-[#1a1d23] rounded-lg p-3 border border-[#ea580c]/10">
                      <div className="text-xs text-gray-500 mb-1">Pick Rate</div>
                      <div className="text-lg text-[#ea580c] tracking-wider">{loadout.pickRate}%</div>
                    </div>
                    <div className="bg-[#1a1d23] rounded-lg p-3 border border-[#ea580c]/10">
                      <div className="text-xs text-gray-500 mb-1">Win Rate</div>
                      <div className="text-lg text-green-400 tracking-wider">{loadout.winRate}%</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {loadout.tags.slice(1).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-[#1a1d23] border border-[#ea580c]/20 rounded text-xs text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Difficulty */}
                  <div className="flex items-center justify-between text-xs pt-4 border-t border-[#ea580c]/10">
                    <span className="text-gray-500">Сложность: <span className="text-gray-300">{loadout.difficulty}</span></span>
                    <span className="text-gray-400">Подробнее →</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* No Results */}
        {filteredLoadouts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Trophy className="w-16 h-16 text-[#ea580c] mx-auto mb-4" />
            <h3 className="text-2xl tracking-wider mb-2">Сборки не найдены</h3>
            <p className="text-gray-400">Попробуйте изменить фильтры или поисковый запрос</p>
          </motion.div>
        )}
      </div>

      {/* Submit Loadout Modal */}
      <SubmitLoadoutModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />
    </div>
  );
}
