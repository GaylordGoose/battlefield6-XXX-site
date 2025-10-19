import { motion } from 'motion/react';
import { ArrowLeft, Target, TrendingUp, Users, Star, Copy, Share2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function LoadoutDetailPage() {
  // Mock data - в реальности получаем по ID из URL
  const loadout = {
    id: 1,
    name: "M4A1 Универсальная META",
    weaponName: "M4A1",
    category: "Штурмовая винтовка",
    tier: "S",
    season: "Сезон 3",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=800",
    pickRate: 28.5,
    winRate: 54.2,
    difficulty: "Легкая",
    description: "Универсальная сборка M4A1, идеально подходящая для средних дистанций. Отличный баланс между уроном, точностью и контролем отдачи. Рекомендуется для игроков всех уровней.",
    
    attachments: [
      {
        slot: "Оптика",
        name: "Holographic Sight",
        description: "Быстрое прицеливание с четким красным прицелом",
        stats: { ads: -5, zoom: 1.5 }
      },
      {
        slot: "Ствол",
        name: "Compensator",
        description: "Снижение вертикальной отдачи на 15%",
        stats: { recoil: -15, range: -5 }
      },
      {
        slot: "Магазин",
        name: "Extended Mag 40 rounds",
        description: "Увеличенная емкость для длительных схваток",
        stats: { capacity: 10, reload: 10 }
      },
      {
        slot: "Рукоять",
        name: "Tactical Foregrip",
        description: "Улучшенная стабильность при стрельбе",
        stats: { stability: 12, mobility: -3 }
      },
      {
        slot: "Приклад",
        name: "Precision Stock",
        description: "Повышенная точность на средних дистанциях",
        stats: { accuracy: 10, ads: 5 }
      }
    ],

    stats: {
      damage: 85,
      range: 75,
      accuracy: 90,
      mobility: 70,
      control: 85
    },

    playstyle: {
      title: "Тактика использования",
      tips: [
        "Держите противников на дистанции 15-40 метров для максимальной эффективности",
        "Используйте короткие очереди по 5-7 выстрелов на дальних дистанциях",
        "Активно используйте укрытия для перезарядки",
        "Отлично подходит для штурма точек и удержания позиций"
      ]
    },

    strengths: [
      "Низкая отдача",
      "Универсальность",
      "Высокая точность",
      "Большой магазин"
    ],

    weaknesses: [
      "Средний урон",
      "Не идеален для CQB",
      "Проигрывает снайперам на дальних дистанциях"
    ]
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'S': return 'text-[#ea580c] bg-[#ea580c]/10 border-[#ea580c]';
      case 'A': return 'text-blue-400 bg-blue-400/10 border-blue-400';
      case 'B': return 'text-green-400 bg-green-400/10 border-green-400';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400';
    }
  };

  const getStatColor = (value: number) => {
    if (value >= 85) return 'bg-green-500';
    if (value >= 70) return 'bg-blue-500';
    if (value >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const statLabels = {
    damage: "Урон",
    range: "Дальность",
    accuracy: "Точность",
    mobility: "Мобильность",
    control: "Контроль"
  };

  return (
    <div className="min-h-screen bg-[#1a1d23] text-white pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <motion.a
          href="#/loadouts"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ea580c] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Вернуться к сборкам</span>
        </motion.a>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-96 rounded-xl overflow-hidden border border-[#ea580c]/20 bg-[#242831]">
              <ImageWithFallback
                src={loadout.image}
                alt={loadout.name}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#242831] via-transparent to-transparent" />
              
              {/* Tier Badge */}
              <div className={`absolute top-4 right-4 w-16 h-16 ${getTierColor(loadout.tier)} rounded-xl flex items-center justify-center border-2 backdrop-blur-sm text-3xl tracking-wider shadow-lg`}>
                {loadout.tier}
              </div>

              {/* META Badge */}
              <div className="absolute top-4 left-4 px-4 py-2 bg-[#ea580c] rounded-lg text-sm tracking-wider shadow-lg">
                META
              </div>
            </div>
          </motion.div>

          {/* Right - Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-1 bg-[#ea580c] rounded-full" />
              <Target className="w-8 h-8 text-[#ea580c]" />
            </div>

            <h1 className="text-4xl md:text-5xl tracking-wider mb-4">
              {loadout.name}
            </h1>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-[#242831] border border-[#ea580c]/30 rounded-lg text-sm">
                {loadout.weaponName}
              </span>
              <span className="px-3 py-1 bg-[#242831] border border-[#ea580c]/30 rounded-lg text-sm">
                {loadout.category}
              </span>
              <span className="px-3 py-1 bg-[#242831] border border-[#ea580c]/30 rounded-lg text-sm">
                {loadout.season}
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed mb-8">
              {loadout.description}
            </p>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-[#ea580c]" />
                  <span className="text-xs text-gray-500">Pick Rate</span>
                </div>
                <div className="text-2xl text-[#ea580c] tracking-wider">{loadout.pickRate}%</div>
              </div>

              <div className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-gray-500">Win Rate</span>
                </div>
                <div className="text-2xl text-green-400 tracking-wider">{loadout.winRate}%</div>
              </div>

              <div className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-xs text-gray-500">Сложность</span>
                </div>
                <div className="text-xl text-blue-400">{loadout.difficulty}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#ea580c] hover:bg-[#c2410c] rounded-lg transition-all shadow-lg shadow-[#ea580c]/20"
              >
                <Copy className="w-4 h-4" />
                <span className="tracking-wider uppercase text-sm sm:text-base">Скопировать</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#242831] border border-[#ea580c]/30 hover:border-[#ea580c] rounded-lg transition-all"
              >
                <Share2 className="w-4 h-4" />
                <span className="tracking-wider uppercase text-sm sm:text-base">Поделиться</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Weapon Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl tracking-wider mb-6">
            Характеристики <span className="text-[#ea580c]">оружия</span>
          </h2>
          
          <div className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-8">
            <div className="space-y-4">
              {Object.entries(loadout.stats).map(([key, value]) => (
                <div key={key}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm tracking-wider uppercase">
                      {statLabels[key as keyof typeof statLabels]}
                    </span>
                    <span className="text-white tracking-wider">{value}</span>
                  </div>
                  <div className="h-2 bg-[#1a1d23] rounded-full overflow-hidden border border-[#ea580c]/20">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${value}%` }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className={`h-full ${getStatColor(value as number)} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Attachments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl tracking-wider mb-6">
            <span className="text-[#ea580c]">Аттачменты</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loadout.attachments.map((attachment, index) => (
              <motion.div
                key={attachment.slot}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-6 hover:border-[#ea580c]/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-xs text-gray-500 tracking-widest uppercase mb-1">{attachment.slot}</div>
                    <h3 className="text-xl tracking-wide text-white">{attachment.name}</h3>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{attachment.description}</p>

                <div className="flex flex-wrap gap-2">
                  {Object.entries(attachment.stats).map(([stat, value]) => (
                    <span
                      key={stat}
                      className={`px-2 py-1 rounded text-xs ${
                        (value as number) > 0 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {(value as number) > 0 ? '+' : ''}{value}% {stat}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Playstyle & Tips */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Playstyle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-8"
          >
            <h3 className="text-2xl tracking-wider mb-6">
              {loadout.playstyle.title}
            </h3>
            <ul className="space-y-3">
              {loadout.playstyle.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#ea580c] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-400 leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Strengths & Weaknesses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-6"
          >
            {/* Strengths */}
            <div className="bg-[#242831] border border-green-500/20 rounded-xl p-6">
              <h4 className="text-xl tracking-wider mb-4 text-green-400">Преимущества</h4>
              <div className="flex flex-wrap gap-2">
                {loadout.strengths.map(strength => (
                  <span key={strength} className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-sm">
                    {strength}
                  </span>
                ))}
              </div>
            </div>

            {/* Weaknesses */}
            <div className="bg-[#242831] border border-red-500/20 rounded-xl p-6">
              <h4 className="text-xl tracking-wider mb-4 text-red-400">Недостатки</h4>
              <div className="flex flex-wrap gap-2">
                {loadout.weaknesses.map(weakness => (
                  <span key={weakness} className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg text-sm">
                    {weakness}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
