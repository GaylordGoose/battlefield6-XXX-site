<template>
  <div id="app">
    <!-- 🔝 Хедер -->
    <header class="header">
      <div class="logo">BF META HUB</div>
      <nav class="nav">
        <a href="#">Главная</a>
        <a href="#">Новости</a>
        <a href="#">Сборки</a>
        <a href="#">Гайды</a>
      </nav>
    </header>

    <!-- 🎥 Главный баннер -->
    <section class="hero">
      <video autoplay muted loop playsinline class="hero-video">
        <source src="/video/bf6-bg.mp4" type="video/mp4" />
      </video>

      <div class="overlay">
        <div class="particles">
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
        </div>
        <h1>ЛУЧШИЕ СБОРКИ BATTLEFIELD 6</h1>
        <p>Следи за метой, обновлениями и гайдами первым везде</p>

        <div class="buttons">
          <button class="btn btn-orange">Сборки</button>
          <button class="btn btn-transparent">
            Новости <span>➜</span>
          </button>
        </div>
      </div>
    </section>

    <!-- 📰 Последние новости -->
    <section class="news-section">
      <div class="container">
        <div class="section-header">
          <h2>ПОСЛЕДНИЕ НОВОСТИ</h2>
          <div class="section-line"></div>
        </div>
        
        <div class="news-grid">
          <div class="news-card">
            <div class="news-image"></div>
            <div class="news-content">
              <div class="news-date">15.12.2023</div>
              <h3>Обновление баланса оружия</h3>
              <p>Изменения в мете после последнего патча. Новые топовые сборки...</p>
            </div>
          </div>
          
          <div class="news-card">
            <div class="news-image"></div>
            <div class="news-content">
              <div class="news-date">14.12.2023</div>
              <h3>Новая карта в режиме штурм</h3>
              <p>Добавлена карта "Разрушенный город". Тактика и лучшие позиции...</p>
            </div>
          </div>
          
          <div class="news-card">
            <div class="news-image"></div>
            <div class="news-content">
              <div class="news-date">13.12.2023</div>
              <h3>Ивент на выходные</h3>
              <p>Удвоенный опыт за все достижения. Не пропусти возможность прокачаться...</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 🎯 Почему выбирают нас -->
    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <h2>ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
          <div class="section-line"></div>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Актуальная мета</h3>
            <p>Сборки обновляются после каждого патча. Всегда только актуальная информация от топовых игроков.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Проверено в бою</h3>
            <p>Все гайды и сборки тестируются игроками топ-100 рейтинга. Только рабочее и эффективное.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🕒</div>
            <h3>Мгновенные обновления</h3>
            <p>Новости и изменения появляются в течение часа после выхода обновления игры.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 👥 Подвал -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">BF META HUB</div>
          <p class="footer-text">Лучшие сборки и гайды по Battlefield 6</p>
          
          <div class="social-links">
            <a href="#" class="social-link">VK</a>
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import "@fontsource/bebas-neue";
</script>

<style scoped>
/* === Общие стили === */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* УБРАТЬ СЕРЫЕ ПОЛОСЫ И РАСТЯНУТЬ ВИДЕО */
body, html, #app {
  height: 100%;
  width: 100vw;
  font-family: 'Bebas Neue', sans-serif;
  background-color: #000000;
  color: #fff;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  position: relative;
}

/* Контейнер для секций */
.container {
  max-width: 100vw;
  margin: 0;
  padding: 0 40px;
  width: 100%;
}

/* === Хедер === */
.header {
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  border-bottom: 2px solid #f97316;
  z-index: 1000;
  left: 0;
  right: 0;
  box-shadow: 0 4px 20px rgba(249, 115, 22, 0.3);
}

.logo {
  font-size: 28px;
  color: #f97316;
  letter-spacing: 2px;
}

.nav a {
  color: #ccc;
  text-decoration: none;
  margin-left: 30px;
  transition: 0.3s;
  font-size: 18px;
}

.nav a:hover {
  color: #f97316;
}

/* === Герой-секция === */
.hero {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  left: 50%;
  transform: translateX(-50%);
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
  min-width: 100vw;
  min-height: 100vh;
  object-position: center;
  filter: brightness(0.8) contrast(1.1);
}

.overlay {
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
  padding: 60px 80px;
  border-radius: 16px;
  max-width: 90%;
  margin: 0 auto;
  border: 2px solid rgba(249, 115, 22, 0.3);
  backdrop-filter: blur(5px);
  animation: fadeInUp 1.5s ease-out;
}

.overlay h1 {
  font-size: 64px;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #f97316;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  line-height: 1.2;
}

.overlay p {
  font-size: 24px;
  color: #e2e2e2;
  margin-bottom: 50px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  letter-spacing: 1px;
}

/* === Кнопки === */
.buttons {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.btn {
  font-size: 22px;
  padding: 16px 45px;
  border: 2px solid #f97316;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  letter-spacing: 1px;
  font-family: 'Bebas Neue', sans-serif;
  text-transform: uppercase;
}

.btn-orange {
  background-color: #f97316;
  color: #000;
  font-weight: bold;
}

.btn-orange:hover {
  background-color: #ff8a3d;
  transform: scale(1.05);
  box-shadow: 0 5px 20px rgba(249, 115, 22, 0.6);
  animation: glow 1s ease-in-out infinite;
}

.btn-transparent {
  background-color: transparent;
  color: #f97316;
}

.btn-transparent:hover {
  background-color: rgba(249, 115, 22, 0.2);
  color: #fff;
  transform: scale(1.05);
  border-color: #ff8a3d;
  box-shadow: 0 5px 15px rgba(249, 115, 22, 0.3);
}

/* === Секции заголовки === */
.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 42px;
  color: #f97316;
  letter-spacing: 3px;
  margin-bottom: 15px;
  text-transform: uppercase;
}

.section-line {
  width: 100px;
  height: 3px;
  background: #f97316;
  margin: 0 auto;
}

/* === Частицы === */
.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: #f97316;
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.particle:nth-child(1) {
  top: 20%;
  left: 20%;
  animation-delay: 0s;
}

.particle:nth-child(2) {
  top: 40%;
  left: 80%;
  animation-delay: 1s;
}

.particle:nth-child(3) {
  top: 60%;
  left: 10%;
  animation-delay: 2s;
}

.particle:nth-child(4) {
  top: 80%;
  left: 70%;
  animation-delay: 3s;
}

.particle:nth-child(5) {
  top: 30%;
  left: 50%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 1;
  }
}

/* === Анимации === */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(249, 115, 22, 0.6);
  }
}

/* === Секция новостей === */
.news-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
}

.news-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #f97316, transparent);
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.news-card {
  background: linear-gradient(135deg, #111 0%, #1a1a1a 100%);
  border: 1px solid #333;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s ease;
  position: relative;
  animation: slideInUp 0.8s ease-out;
}

.news-card:nth-child(1) { animation-delay: 0.1s; }
.news-card:nth-child(2) { animation-delay: 0.2s; }
.news-card:nth-child(3) { animation-delay: 0.3s; }

.news-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: #f97316;
  box-shadow: 0 10px 30px rgba(249, 115, 22, 0.3);
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.news-image {
  height: 200px;
  background: linear-gradient(45deg, #1a1a1a, #f97316, #1a1a1a);
  background-size: 200% 200%;
  position: relative;
  animation: gradientShift 3s ease-in-out infinite;
}

.news-image::after {
  content: 'BF6';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  color: rgba(255,255,255,0.2);
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.news-content {
  padding: 25px;
}

.news-date {
  color: #f97316;
  font-size: 14px;
  margin-bottom: 10px;
}

.news-card h3 {
  font-size: 24px;
  margin-bottom: 15px;
  letter-spacing: 1px;
}

.news-card p {
  color: #ccc;
  line-height: 1.5;
}

/* === Секция преимуществ === */
.features-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #000 0%, #0a0a0a 50%, #000 100%);
  position: relative;
}

.features-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #f97316, transparent);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

.feature-card {
  text-align: center;
  padding: 40px 20px;
  transition: all 0.4s ease;
  border-radius: 12px;
  position: relative;
  animation: slideInUp 0.8s ease-out;
}

.feature-card:nth-child(1) { animation-delay: 0.1s; }
.feature-card:nth-child(2) { animation-delay: 0.2s; }
.feature-card:nth-child(3) { animation-delay: 0.3s; }

.feature-card:hover {
  transform: translateY(-10px);
  background: rgba(249, 115, 22, 0.05);
  border: 1px solid rgba(249, 115, 22, 0.3);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
  animation: pulse 2s ease-in-out infinite;
  display: inline-block;
}

.feature-card:hover .feature-icon {
  animation: glow 1s ease-in-out infinite;
}

.feature-card h3 {
  font-size: 24px;
  color: #f97316;
  margin-bottom: 15px;
  letter-spacing: 1px;
}

.feature-card p {
  color: #ccc;
  line-height: 1.6;
}

/* === Подвал === */
.footer {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  padding: 50px 0;
  border-top: 2px solid #f97316;
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #f97316, transparent);
}

.footer-content {
  text-align: center;
}

.footer-logo {
  font-size: 24px;
  color: #f97316;
  margin-bottom: 15px;
  letter-spacing: 2px;
}

.footer-text {
  color: #ccc;
  margin-bottom: 25px;
  font-size: 18px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.social-link {
  color: #f97316;
  text-decoration: none;
  font-size: 16px;
  letter-spacing: 1px;
  transition: color 0.3s;
}

.social-link:hover {
  color: #ff8a3d;
}

/* === Адаптивность === */
@media (max-width: 1600px) {
  .overlay h1 {
    font-size: 56px;
  }
  
  .overlay p {
    font-size: 22px;
  }
  
  .btn {
    font-size: 20px;
    padding: 14px 40px;
  }
}

@media (max-width: 1366px) {
  .header {
    padding: 18px 40px;
  }
  
  .overlay h1 {
    font-size: 48px;
  }
  
  .overlay p {
    font-size: 20px;
  }
  
  .overlay {
    padding: 50px 60px;
  }
  
  .section-header h2 {
    font-size: 36px;
  }
}

@media (max-width: 1024px) {
  .container {
    padding: 0 20px;
  }
  
  .overlay h1 {
    font-size: 42px;
  }
  
  .overlay p {
    font-size: 18px;
  }
  
  .buttons {
    flex-direction: column;
    gap: 20px;
  }
  
  .btn {
    width: 250px;
    margin: 0 auto;
  }
  
  .news-grid {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
  
  .header {
    padding: 15px 20px;
    flex-direction: column;
    gap: 15px;
  }
  
  .nav a {
    margin-left: 15px;
    font-size: 16px;
  }
  
  .overlay {
    padding: 40px 30px;
  }
  
  .overlay h1 {
    font-size: 36px;
  }
  
  .overlay p {
    font-size: 16px;
  }
  
  .btn {
    font-size: 18px;
    padding: 12px 30px;
  }
  
  .section-header h2 {
    font-size: 32px;
  }
  
  .social-links {
    flex-direction: column;
    gap: 15px;
  }
}

/* ДОПОЛНИТЕЛЬНЫЕ ИСПРАВЛЕНИЯ ДЛЯ УДАЛЕНИЯ СЕРЫХ ПОЛОС */
:global(body) {
  background: #000 !important;
  margin: 0 !important;
  padding: 0 !important;
  width: 100vw !important;
  overflow-x: hidden !important;
}

:global(html) {
  background: #000 !important;
  margin: 0 !important;
  padding: 0 !important;
  width: 100vw !important;
  overflow-x: hidden !important;
}

:global(#app) {
  width: 100vw !important;
  max-width: 100vw !important;
  margin: 0 !important;
  padding: 0 !important;
}
</style>
