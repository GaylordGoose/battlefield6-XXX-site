import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export function TermsPage() {
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
            <FileText className="w-8 h-8 text-[#ea580c]" />
          </div>
          <h1 className="text-5xl md:text-6xl tracking-wider mb-6">
            УСЛОВИЯ <span className="text-[#ea580c]">ИСПОЛЬЗОВАНИЯ</span>
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
              <h2 className="text-2xl tracking-wider text-white mb-4">1. Принятие условий</h2>
              <p className="leading-relaxed">
                Добро пожаловать на BF META HUB. Используя наш веб-сайт, вы соглашаетесь соблюдать 
                настоящие Условия использования. Если вы не согласны с какой-либо частью этих условий, 
                пожалуйста, не используйте наш сайт.
              </p>
            </section>

            {/* Section 2 */}
            <section className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-8">
              <h2 className="text-2xl tracking-wider text-white mb-4">2. Описание сервиса</h2>
              <p className="leading-relaxed mb-4">
                BF META HUB предоставляет информационную платформу для игроков Battlefield 6, включая:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Новости об игре и обновлениях</li>
                <li>Гайды и обучающие материалы</li>
                <li>Мета-сборки оружия</li>
                <li>Информацию о тактиках и стратегиях</li>
                <li>Платформу для общения сообщества</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-8">
              <h2 className="text-2xl tracking-wider text-white mb-4">3. Права интеллектуальной собственности</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl text-white mb-2">3.1 Наш контент</h3>
                  <p className="leading-relaxed">
                    Весь контент на BF META HUB, включая тексты, графику, логотипы, изображения и 
                    программное обеспечение, защищен авторскими правами и другими законами об 
                    интеллектуальной собственности.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl text-white mb-2">3.2 Battlefield</h3>
                  <p className="leading-relaxed">
                    Battlefield и все связанные товарные знаки, логотипы и активы являются 
                    собственностью Electronic Arts Inc. BF META HUB является фан-сайтом и не 
                    связан официально с Electronic Arts или DICE.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-8">
              <h2 className="text-2xl tracking-wider text-white mb-4">4. Правила использования</h2>
              <p className="leading-relaxed mb-4">
                При использовании BF META HUB вы соглашаетесь НЕ:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Нарушать какие-либо применимые законы или правила</li>
                <li>Публиковать оскорбительный, дискриминационный или незаконный контент</li>
                <li>Выдавать себя за другое лицо или организацию</li>
                <li>Распространять вирусы или вредоносное программное обеспечение</li>
                <li>Пытаться получить несанкционированный доступ к нашим системам</li>
                <li>Использовать автоматические системы для сбора данных (scraping)</li>
                <li>Публиковать спам или нежелательную рекламу</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-8">
              <h2 className="text-2xl tracking-wider text-white mb-4">5. Пользовательский контент</h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Если вы публикуете контент на нашем сайте или в нашем Discord-сообществе, вы 
                  предоставляете BF META HUB неисключительную, бесплатную лицензию на использование, 
                  воспроизведение и распространение этого контента.
                </p>
                <p className="leading-relaxed">
                  Вы подтверждаете, что владеете всеми правами на публикуемый контент и что он не 
                  нарушает права третьих лиц.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-8">
              <h2 className="text-2xl tracking-wider text-white mb-4">6. Отказ от гарантий</h2>
              <p className="leading-relaxed mb-4">
                BF META HUB предоставляется "как есть" и "по мере доступности". Мы не гарантируем:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Непрерывную или безошибочную работу сайта</li>
                <li>Точность или полноту информации</li>
                <li>Что сайт будет свободен от вирусов или вредоносных компонентов</li>
                <li>Что результаты использования информации будут соответствовать вашим ожиданиям</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-8">
              <h2 className="text-2xl tracking-wider text-white mb-4">7. Ограничение ответственности</h2>
              <p className="leading-relaxed">
                В максимальной степени, разрешенной законом, BF META HUB и его владельцы, операторы 
                и участники не несут ответственности за любые прямые, косвенные, случайные, особые 
                или штрафные убытки, возникающие в результате использования или невозможности 
                использования нашего сайта.
              </p>
            </section>

            {/* Section 8 */}
            <section className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-8">
              <h2 className="text-2xl tracking-wider text-white mb-4">8. Изменения в условиях</h2>
              <p className="leading-relaxed">
                Мы оставляем за собой право изменять или заменять эти Условия использования в любое 
                время. Существенные изменения будут опубликованы на этой странице с обновлением даты 
                "Последнее обновление". Продолжение использования сайта после изменений означает 
                ваше согласие с новыми условиями.
              </p>
            </section>

            {/* Section 9 */}
            <section className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-8">
              <h2 className="text-2xl tracking-wider text-white mb-4">9. Применимое право</h2>
              <p className="leading-relaxed">
                Настоящие Условия регулируются и толкуются в соответствии с законодательством 
                Российской Федерации, без учета коллизионных норм.
              </p>
            </section>

            {/* Section 10 */}
            <section className="bg-[#242831] border border-[#ea580c]/20 rounded-xl p-8">
              <h2 className="text-2xl tracking-wider text-white mb-4">10. Контактная информация</h2>
              <p className="leading-relaxed mb-4">
                Если у вас есть вопросы об этих Условиях использования, пожалуйста, свяжитесь с нами:
              </p>
              <div className="bg-[#1a1d23] border border-[#ea580c]/20 rounded-lg p-4">
                <p className="text-[#ea580c]">Email: legal@bfmetahub.com</p>
                <p className="text-gray-400 mt-2">Discord: <a href="#/contacts" className="text-[#ea580c] hover:text-[#c2410c]">Наш Discord сервер</a></p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
