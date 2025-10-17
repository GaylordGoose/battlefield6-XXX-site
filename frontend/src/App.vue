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

/* === Герой-секция ОПТИМИЗИРОВАНА ДЛЯ 16:9 === */
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
  /* Оптимизация для 16:9 */
  min-width: 100%;
  min-height: 100%;
  object-position: center;
}

/* Специальные стили для соотношения 16:9 */
@media (min-aspect-ratio: 16/9) {
  .hero-video {
    width: 100%;
    height: auto;
  }
}

@media (max-aspect-ratio: 16/9) {
  .hero-video {
    width: auto;
    height: 100%;
  }
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

/* Оптимизация для 16:9 мониторов */
@media (min-width: 1920px) and (min-height: 1080px) {
  .hero-video {
    width: 100vw;
    height: 56.25vw; /* 16:9 соотношение (9/16 = 0.5625) */
    min-height: 100vh;
    min-width: 177.78vh; /* 16:9 соотношение (16/9 = 1.7778) */
  }
}
</style>