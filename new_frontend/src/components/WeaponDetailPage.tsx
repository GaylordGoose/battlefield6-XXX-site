import { motion } from 'motion/react';
import { ArrowLeft, Target, TrendingUp, Crosshair } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WeaponDetailPage() {
  // Mock data - в реальности получаем по ID из URL
  const weapon = {
    id: 1,
    name: "M4A1",
    category: "Штурмовая винтовка",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=800",
    description: "M4A1 - это универсальная штурмовая винтовка с отличным балансом урона, точности и контроля отдачи. Идеально подходит для средних дистанций и адаптируется под различные стили игры.",
    stats: {
      damage: 85,
      range: 75,
      accuracy: 90,
      mobility: 70,
      control: 85,
      fireRate: 800
    },
    characteristics: {
      "Тип урона": "Средний",
      "Скорострельность": "800 выстр/мин",
      "Магазин": "30 патронов",
      "Эффективная дистанция": "15-40м",
      "Режимы огня": "Авто / Одиночный",
      "Калибр": "5.56x45mm"
    },
    loadouts: [
      {
        id: 1,
        name: "Универсальная META сборка",
        tier: "S",
        pickRate: 28.5,
        winRate: 54.2,
        description: "Лучший выбор для средних дистанций"
      },
      {
        id: 2,
        name: "CQB Aggressive",
        tier: "A",
        pickRate: 19.3,
        winRate: 52.8,
        description: "Для агрессивной игры на ближних дистанциях"
      },
      {
        id: 3,
        name: "Long Range Precision",
        tier: "A",
        pickRate: 15.7,
        winRate: 51.5,
        description: "Максимальная точность на дальних дистанциях"
      }
    ]
  };

  const statLabels = {
    damage: "Урон",
    range: "Дальность",
    accuracy: "Точность",
    mobility: "Мобильность",
    control: "Контроль"
  };

  const getStatColor = (value: number) => {
    if (value >= 85) return 'bg-green-500';
    if (value >= 70) return 'bg-blue-500';
    if (value >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-[#1a1d23] text-white pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <motion.a
          href="#/weapons"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ea580c] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Вернуться к каталогу</span>
        </motion.a>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image & Basic Info */}
          <div>
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-8"
            >
              <div className="relative h-96 rounded-xl overflow-hidden border border-[#ea580c]/20 bg-[#242831]">
                <ImageWithFallback
                  src={weapon.image}
                  alt={weapon.name}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242831] via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="px-4 py-2 bg-[#242831] border border-[#ea580c]/30 rounded-lg text-sm text-gray-300 inline-block">
                {weapon.category}
              </span>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-2xl tracking-wider mb-4">
                Описание
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {weapon.description}
              </p>
            </motion.div>

            {/* Characteristics Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-6"
            >
              <h3 className="text-xl tracking-wider mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#ea580c]" />
                Характеристики
              </h3>
              <div className="space-y-3">
                {Object.entries(weapon.characteristics).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between pb-3 border-b border-[#ea580c]/10 last:border-0 last:pb-0">
                    <span className="text-gray-500 text-sm">{key}</span>
                    <span className="text-white">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats & Loadouts */}
          <div>
            {/* Weapon Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-1 bg-[#ea580c] rounded-full" />
                <Crosshair className="w-8 h-8 text-[#ea580c]" />
              </div>
              <h1 className="text-5xl md:text-6xl tracking-wider">
                {weapon.name}
              </h1>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl tracking-wider mb-6">
                Статистика
              </h2>
              <div className="space-y-4">
                {Object.entries(weapon.stats)
                  .filter(([key]) => key !== 'fireRate')
                  .map(([key, value]) => (
                    <div key={key}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400 text-sm tracking-wider uppercase">
                          {statLabels[key as keyof typeof statLabels]}
                        </span>
                        <span className="text-white tracking-wider">{value}</span>
                      </div>
                      <div className="h-2 bg-[#242831] rounded-full overflow-hidden border border-[#ea580c]/20">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${value}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className={`h-full ${getStatColor(value as number)} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>

            {/* Available Loadouts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl tracking-wider mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-[#ea580c]" />
                Доступные сборки
              </h2>
              
              <div className="space-y-4">
                {weapon.loadouts.map((loadout, index) => (
                  <motion.a
                    key={loadout.id}
                    href={`#/loadouts/${loadout.id}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="block bg-[#242831] border border-[#ea580c]/20 rounded-xl p-6 hover:border-[#ea580c] hover:bg-[#2d3139] transition-all group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl tracking-wide text-white group-hover:text-[#ea580c] transition-colors mb-1">
                          {loadout.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {loadout.description}
                        </p>
                      </div>
                      <div className={`
                        px-3 py-1 rounded-lg border text-sm tracking-wider
                        ${loadout.tier === 'S' 
                          ? 'bg-[#ea580c]/10 border-[#ea580c] text-[#ea580c]' 
                          : 'bg-blue-400/10 border-blue-400 text-blue-400'
                        }
                      `}>
                        {loadout.tier}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#ea580c]/10">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Pick Rate</div>
                        <div className="text-sm text-[#ea580c] tracking-wider">{loadout.pickRate}%</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Win Rate</div>
                        <div className="text-sm text-green-400 tracking-wider">{loadout.winRate}%</div>
                      </div>
                    </div>

                    <div className="mt-4 text-xs text-gray-500 flex items-center justify-end gap-2">
                      <span>Смотреть сборку</span>
                      <span className="text-[#ea580c] group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
