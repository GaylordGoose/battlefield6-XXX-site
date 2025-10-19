import { motion } from 'motion/react';
import { MessageSquare, Users, Mail, ExternalLink } from 'lucide-react';

export function ContactsPage() {
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
            <span className="text-[#ea580c]">КОНТАКТЫ</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Присоединяйся к нашему сообществу и общайся с тысячами игроков Battlefield
          </p>
        </motion.div>

        {/* Discord CTA - Main */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-[#5865F2]/10 to-[#ea580c]/10 border border-[#5865F2]/30 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/5 to-transparent" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-[#5865F2] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#5865F2]/30">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl tracking-wider mb-4">
                Присоединяйся к нашему <span className="text-[#5865F2]">Discord</span>
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Общайся с другими фанатами Battlefield, делись своим опытом, участвуй в турнирах и получай 
                эксклюзивные гайды от профессиональных игроков.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-400">
                  <Users className="w-5 h-5 text-[#ea580c]" />
                  <span>10,000+ участников</span>
                </div>
                <div className="text-gray-500">•</div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MessageSquare className="w-5 h-5 text-[#ea580c]" />
                  <span>Активное общение 24/7</span>
                </div>
              </div>

              <motion.a
                href="https://discord.gg/battlefield"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(88, 101, 242, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] rounded-lg transition-all shadow-lg shadow-[#5865F2]/20"
              >
                <span className="tracking-wider uppercase">Войти в Discord</span>
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* What you'll find in Discord */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl tracking-wider mb-8 text-center">
            Что ты найдешь в <span className="text-[#ea580c]">нашем Discord</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Обсуждение игры",
                description: "Общайся о новостях, обновлениях и стратегиях с единомышленниками",
                emoji: "💬"
              },
              {
                title: "Поиск команды",
                description: "Находи напарников для игры и создавай свой отряд",
                emoji: "🎮"
              },
              {
                title: "Эксклюзивные гайды",
                description: "Получай доступ к закрытым гайдам и разборам от про-игроков",
                emoji: "📚"
              },
              {
                title: "Турниры и ивенты",
                description: "Участвуй в регулярных турнирах с призами",
                emoji: "🏆"
              },
              {
                title: "Техническая поддержка",
                description: "Помощь с настройками игры и решением технических проблем",
                emoji: "🔧"
              },
              {
                title: "Голосовые каналы",
                description: "Координируй действия с командой в голосовом чате",
                emoji: "🎙️"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-6 hover:border-[#ea580c]/50 transition-all"
              >
                <div className="text-4xl mb-4">{feature.emoji}</div>
                <h3 className="text-xl tracking-wider mb-2">{feature.title}</h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Alternative Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-8 text-center"
        >
          <Mail className="w-12 h-12 text-[#ea580c] mx-auto mb-4" />
          <h3 className="text-2xl tracking-wider mb-3">Другие вопросы?</h3>
          <p className="text-gray-400 mb-6">
            По вопросам партнерства и сотрудничества
          </p>
          <a
            href="mailto:contact@bfmetahub.com"
            className="text-[#ea580c] hover:text-[#c2410c] transition-colors tracking-wider"
          >
            contact@bfmetahub.com
          </a>
        </motion.div>
      </div>
    </div>
  );
}
