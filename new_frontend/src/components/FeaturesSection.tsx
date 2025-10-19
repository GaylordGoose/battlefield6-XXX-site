import { motion } from 'motion/react';
import { Target, Zap, Clock, Users, TrendingUp, Shield } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    id: 1,
    icon: Target,
    title: "Актуальная мета",
    description: "Всегда синхронизировано с последними патчами и балансными изменениями.",
    gradient: "from-orange-500/10 to-red-500/10",
    iconBg: "bg-gradient-to-br from-[#ea580c] to-[#c2410c]"
  },
  {
    id: 2,
    icon: Zap,
    title: "Проверенные сборки",
    description: "Сборки и стратегии от топовых профессиональных игроков.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    icon: Clock,
    title: "Мгновенные обновления",
    description: "Информация в реальном времени в момент выхода новых патчей.",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500"
  },
  {
    id: 4,
    icon: Users,
    title: "Сообщество игроков",
    description: "Присоединяйтесь к тысячам игроков, делитесь опытом и стратегиями.",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500"
  },
  {
    id: 5,
    icon: TrendingUp,
    title: "Статистика и аналитика",
    description: "Детальные данные о популярности и эффективности оружия.",
    gradient: "from-yellow-500/10 to-orange-500/10",
    iconBg: "bg-gradient-to-br from-yellow-500 to-orange-500"
  },
  {
    id: 6,
    icon: Shield,
    title: "Гайды от профи",
    description: "Обучающие материалы от лучших игроков и тренеров.",
    gradient: "from-indigo-500/10 to-blue-500/10",
    iconBg: "bg-gradient-to-br from-indigo-500 to-blue-500"
  }
];

export function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-[#1a1d23] to-[#242831] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ea580c] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
            ПОЧЕМУ <span className="text-[#ea580c]">BF META HUB</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Всё что нужно для доминирования на поле боя в одном месте
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className={`relative bg-gradient-to-br ${feature.gradient} backdrop-blur-sm bg-[#242831] border border-[#ea580c]/20 rounded-2xl p-8 h-full overflow-hidden transition-all duration-300 hover:border-[#ea580c]/50 hover:shadow-xl hover:shadow-[#ea580c]/10`}>
                  {/* Animated glow on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#ea580c]/10 to-transparent opacity-0"
                    animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon with animated background */}
                  <div className="relative mb-6">
                    <motion.div
                      className={`w-16 h-16 ${feature.iconBg} rounded-xl flex items-center justify-center relative overflow-hidden shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-8 h-8 text-white relative z-10" />
                      
                      {/* Subtle pulse animation */}
                      <motion.div
                        className="absolute inset-0 bg-white"
                        animate={{
                          opacity: [0, 0.2, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl tracking-wide mb-3 text-white group-hover:text-[#ea580c] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#ea580c]/5 to-transparent rounded-tl-full"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[#ea580c]/10 via-transparent to-[#ea580c]/10 backdrop-blur-sm bg-[#242831] border border-[#ea580c]/30 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ea580c]/5 to-transparent"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl tracking-wider mb-4">
                ПРИСОЕДИНЯЙСЯ К <span className="text-[#ea580c]">СООБЩЕСТВУ</span>
              </h3>
              <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
                Общайся с тысячами игроков Battlefield. Делись стратегиями, обсуждай изменения меты и доминируй вместе.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(234, 88, 12, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#ea580c] hover:bg-[#c2410c] transition-all rounded-lg shadow-lg shadow-[#ea580c]/20"
                >
                  <span className="tracking-wider text-white uppercase">Discord сообщество</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#242831] border-2 border-[#ea580c]/30 hover:border-[#ea580c] hover:bg-[#2d3139] transition-all rounded-lg"
                >
                  <span className="tracking-wider text-gray-200 uppercase">Отправить свою сборку</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
