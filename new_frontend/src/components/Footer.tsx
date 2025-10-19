import { motion } from 'motion/react';
import { ChevronRight, MessageSquare, Target, Shield } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#242831] border-t border-[#ea580c]/20 pt-16 pb-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, #ea580c 0px, #ea580c 1px, transparent 1px, transparent 100px),
              repeating-linear-gradient(90deg, #ea580c 0px, #ea580c 1px, transparent 1px, transparent 100px)
            `
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl tracking-wider mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ea580c] rounded-full"></div>
              О ПРОЕКТЕ
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              BF META HUB — тактический хаб для фанатов Battlefield 6 с актуальными новостями, профессиональными гайдами и лучшими мета сборками оружия.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl tracking-wider mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ea580c] rounded-full"></div>
              НАВИГАЦИЯ
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Главная', href: '#' },
                { label: 'Новости', href: '#/news' },
                { label: 'Гайды', href: '#/guides' },
                { label: 'Мета сборки', href: '#/loadouts' },
                { label: 'Каталог оружия', href: '#/weapons' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#ea580c] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl tracking-wider mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ea580c] rounded-full"></div>
              ИНФОРМАЦИЯ
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'О нас', href: '#/about' },
                { label: 'Контакты', href: '#/contacts' },
                { label: 'Конфиденциальность', href: '#/privacy' },
                { label: 'Условия использования', href: '#/terms' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#ea580c] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-xl tracking-wider mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ea580c] rounded-full"></div>
              СООБЩЕСТВО
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Присоединяйся к нашему Discord сообществу
            </p>
            <motion.a
              href="#/contacts"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full bg-[#ea580c] hover:bg-[#c2410c] transition-colors px-4 py-3 rounded-lg text-center"
            >
              <div className="flex items-center justify-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm tracking-wider">DISCORD</span>
              </div>
            </motion.a>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-[#ea580c] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73z"/>
                </svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-[#ea580c] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-[#ea580c] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#ea580c]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} BF META HUB. Все права защищены. Не аффилирован с EA или DICE.
          </p>
          <div className="flex gap-6">
            {[
              { icon: Target, label: 'Статистика', href: '#/loadouts' },
              { icon: Shield, label: 'Безопасность', href: '#/privacy' },
              { icon: MessageSquare, label: 'Поддержка', href: '#/contacts' },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className="text-gray-500 hover:text-[#ea580c] transition-colors"
                aria-label={item.label}
              >
                <item.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
