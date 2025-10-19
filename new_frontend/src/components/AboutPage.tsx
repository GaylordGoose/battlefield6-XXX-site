import { motion } from 'motion/react';
import { Target, Users, Zap, Trophy } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1a1d23] text-white pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-1 bg-[#ea580c] mx-auto mb-6 rounded-full" />
          <h1 className="text-5xl md:text-6xl tracking-wider mb-6">
            О <span className="text-[#ea580c]">ПРОЕКТЕ</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Сообщество игроков Battlefield 6, объединенных страстью к игре и стремлением к совершенству
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#242831] border border-[#ea580c]/20 rounded-2xl p-8 md:p-12 mb-12"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-[#ea580c] rounded-lg flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl tracking-wider mb-4">Наша миссия</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                Мы — команда энтузиастов Battlefield, создающих площадку, где игроки могут делиться знаниями, 
                находить мета-сборки, узнавать новости и чувствовать себя частью сообщества.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              icon: Users,
              title: "Сообщество",
              description: "Мы строим платформу для общения и обмена опытом между игроками всех уровней"
            },
            {
              icon: Zap,
              title: "Актуальность",
              description: "Информация обновляется сразу после выхода патчей и балансных изменений"
            },
            {
              icon: Trophy,
              title: "Качество",
              description: "Только проверенные сборки и гайды от профессиональных игроков"
            }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-6 hover:border-[#ea580c]/50 transition-all"
            >
              <value.icon className="w-10 h-10 text-[#ea580c] mb-4" />
              <h3 className="text-xl tracking-wider mb-3">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl tracking-wider mb-6">Наша история</h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              BF META HUB был создан группой преданных фанатов Battlefield, которые устали от разрозненной 
              информации о сборках оружия и тактиках. Мы решили создать единую платформу, где игроки могут 
              найти всё необходимое для улучшения своих навыков.
            </p>
            <p>
              Начав как небольшой проект для друзей, мы быстро выросли в полноценное сообщество с тысячами 
              активных пользователей. Каждый день наша команда работает над тем, чтобы предоставить вам 
              самую актуальную и полезную информацию.
            </p>
            <p>
              Мы благодарны каждому члену нашего сообщества за поддержку, отзывы и вклад в развитие проекта. 
              Вместе мы делаем BF META HUB лучшим ресурсом для игроков Battlefield 6.
            </p>
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl tracking-wider mb-6">Команда</h2>
          <p className="text-gray-400 mb-8">
            За BF META HUB стоит команда опытных игроков, контент-мейкеров и разработчиков, 
            объединенных любовью к Battlefield.
          </p>
          
          {/* CTA to join */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="#/contacts"
              className="px-8 py-4 bg-[#ea580c] hover:bg-[#c2410c] rounded-lg transition-all inline-flex items-center gap-3 shadow-lg shadow-[#ea580c]/20"
            >
              <span className="tracking-wider uppercase">Присоединяйся к нам</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
