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
        <a href="#">Контакты</a>
      </nav>
    </header>

    <!-- 🎥 Главный баннер -->
    <section class="hero">
      <video autoplay muted loop playsinline class="hero-video">
        <source src="/video/bf6-bg.mp4" type="video/mp4" />
      </video>

      <div class="overlay">
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
  width: 100%;
  font-family: 'Bebas Neue', sans-serif;
  background-color: #000000;
  color: #fff;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

/* Контейнер для секций */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* === Хедер === */
.header {
  position: fixed;
  top: 0;
  width: 100%;
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
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  left: 0;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
  min-width: 100%;
  min-height: 100%;
  object-position: center;
}

.overlay {
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  padding: 60px 80px;
  border-radius: 16px;
  max-width: 90%;
  margin: 0 auto;
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
  box-shadow: 0 5px 15px rgba(249, 115, 22, 0.4);
}

.btn-transparent {
  background-color: transparent;
  color: #f97316;
}

.btn-transparent:hover {
  background-color: rgba(249, 115, 22, 0.1);
  color: #fff;
  transform: scale(1.05);
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

/* === Секция новостей === */
.news-section {
  padding: 80px 0;
  background: #0a0a0a;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.news-card {
  background: #111;
  border: 1px solid #333;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
}

.news-card:hover {
  transform: translateY(-5px);
}

.news-image {
  height: 200px;
  background: linear-gradient(45deg, #1a1a1a, #f97316);
  position: relative;
}

.news-image::after {
  content: 'BF6';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  color: rgba(255,255,255,0.1);
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
  background: #000;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

.feature-card {
  text-align: center;
  padding: 40px 20px;
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
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
  background: #0a0a0a;
  padding: 50px 0;
  border-top: 1px solid #333;
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
}

:global(html) {
  background: #000 !important;
  margin: 0 !important;
  padding: 0 !important;
}
</style>
