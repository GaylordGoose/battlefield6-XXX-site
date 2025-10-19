import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#1a1d23] text-white pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-[#242831] border border-[#ea580c]/20 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-[#ea580c]" />
          </div>
          <h1 className="text-5xl md:text-6xl tracking-wider mb-6">
            ПОЛИТИКА <span className="text-[#ea580c]">КОНФИДЕНЦИАЛЬНОСТИ</span>
          </h1>
          <p className="text-gray-400">
            Последнее обновление: 19 октября 2025 г.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          <div className="space-y-8 text-gray-400">
            {/* Section 1 */}
            <section className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-8">
              <h2 className="text-2xl tracking-wider text-white mb-4">1. Введение</h2>
              <p className="leading-relaxed mb-4">
                BF META HUB ("мы", "наш", "нас") уважает вашу конфиденциальность и стремится защищать 
                ваши личные данные. Данная политика конфиденциальности объясняет, как мы собираем, 
                используем и защищаем вашу информацию при использовании нашего веб-сайта.
              </p>
              <p className="leading-relaxed text-[#ea580c]">
                Важно: BF META HUB не предназначен для сбора персональных данных (PII) или обработки 
                конфиденциальной информации.
              </p>
            </section>

            {/* Section 2 */}
            <section className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-8">
              <h2 className="text-2xl tracking-wider text-white mb-4">2. Информация, которую мы собираем</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl text-white mb-2">2.1 Автоматически собираемая информация</h3>
                  <p className="leading-relaxed">
                    При посещении нашего сайта мы можем автоматически собирать определенную техническую 
                    информацию о вашем устройстве, включая:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>IP-адрес</li>
                    <li>Тип браузера и версию</li>
                    <li>Операционную систему</li>
                    <li>Страницы, которые вы посещаете</li>
                    <li>Время и дату посещения</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl text-white mb-2">2.2 Cookies</h3>
                  <p className="leading-relaxed">
                    Мы используем cookies для улучшения вашего опыта использования сайта. Вы можете 
                    настроить свой браузер для отказа от всех или некоторых cookies.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-8">
              <h2 className="text-2xl tracking-wider text-white mb-4">3. Как мы используем вашу информацию</h2>
              <p className="leading-relaxed mb-4">
                Мы используем собранную информацию для:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Предоставления и поддержания нашего сервиса</li>
                <li>Улучшения пользовательского опыта</li>
                <li>Анализа использования сайта</li>
                <li>Выявления и предотвращения технических проблем</li>
                <li>Отправки обновлений и новостей (с вашего согласия)</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-8">
              <h2 className="text-2xl tracking-wider text-white mb-4">4. Защита данных</h2>
              <p className="leading-relaxed">
                Мы применяем соответствующие технические и организационные меры для защиты ваших 
                данных от несанкционированного доступа, изменения, раскрытия или уничтожения. 
                Однако ни один метод передачи через Интернет или метод электронного хранения не 
                является на 100% безопасным.
              </p>
            </section>

            {/* Section 5 */}
            <section className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-8">
              <h2 className="text-2xl tracking-wider text-white mb-4">5. Сторонние сервисы</h2>
              <p className="leading-relaxed mb-4">
                Наш сайт может содержать ссылки на сторонние веб-сайты или сервисы (например, Discord). 
                Мы не несем ответственности за практики конфиденциальности этих сторонних сайтов.
              </p>
              <p className="leading-relaxed">
                Мы рекомендуем ознакомиться с политиками конфиденциальности любых сторонних сайтов, 
                которые вы посещаете.
              </p>
            </section>

            {/* Section 6 */}
            <section className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-8">
              <h2 className="text-2xl tracking-wider text-white mb-4">6. Ваши права</h2>
              <p className="leading-relaxed mb-4">
                В зависимости от вашего местоположения, вы можете иметь следующие права в отношении 
                ваших личных данных:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Право на доступ к вашим данным</li>
                <li>Право на исправление неточных данных</li>
                <li>Право на удаление ваших данных</li>
                <li>Право на ограничение обработки</li>
                <li>Право на переносимость данных</li>
                <li>Право на возражение против обработки</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-8">
              <h2 className="text-2xl tracking-wider text-white mb-4">7. Изменения в политике</h2>
              <p className="leading-relaxed">
                Мы можем обновлять нашу политику конфиденциальности время от времени. Мы уведомим 
                вас о любых изменениях, разместив новую политику на этой странице и обновив дату 
                "Последнее обновление" вверху.
              </p>
            </section>

            {/* Section 8 */}
            <section className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-8">
              <h2 className="text-2xl tracking-wider text-white mb-4">8. Контакты</h2>
              <p className="leading-relaxed mb-4">
                Если у вас есть вопросы о данной политике конфиденциальности, пожалуйста, свяжитесь с нами:
              </p>
              <div className="bg-[#1a1d23] border border-[#ea580c]/20 rounded-lg p-4">
                <p className="text-[#ea580c]">Email: privacy@bfmetahub.com</p>
                <p className="text-gray-400 mt-2">Discord: <a href="#/contacts" className="text-[#ea580c] hover:text-[#c2410c]">Наш Discord сервер</a></p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
