<template>
  <section id="hero" class="hero">
    <div class="hero-background">
      <img class="hero-img" src="/images/Daniel-Edgar-Family.webp" alt="Edgar family dock" />
      <div class="hero-overlay"></div>
    </div>
    
    <!-- Floating Elements -->
    <div class="floating-elements">
      <div class="bubble bubble-1"></div>
      <div class="bubble bubble-2"></div>
      <div class="bubble bubble-3"></div>
      <div class="wave-pattern"></div>
    </div>

    <div class="hero-content">
      <div class="container">
        <div class="hero-text fade-in-up">
          <h1 class="hero-title">
            <span class="title-main">Fresh from the</span>
            <span class="title-accent">Bayou</span>
          </h1>
          <p class="hero-subtitle">Wild-caught Louisiana seafood delivered with three generations of family tradition</p>
          <div class="hero-badges">
            <span class="badge">Since 1986</span>
            <span class="badge">Family Owned</span>
            <span class="badge">Fresh Daily</span>
          </div>
          <div class="hero-actions">
            <a href="tel:+13379237607" class="btn btn-primary hero-cta">
              <span>📞</span>
              Call Now: (337) 923-7607
            </a>
            <a href="#catch" class="btn btn-secondary">View Fresh Catch</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <div class="scroll-arrow"></div>
      <span>Scroll to explore</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  animation: slowZoom 20s ease-in-out infinite alternate;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(30, 58, 95, 0.7) 0%,
    rgba(44, 95, 124, 0.6) 50%,
    rgba(45, 90, 90, 0.7) 100%
  );
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.bubble {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.bubble-1 {
  width: 60px;
  height: 60px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.bubble-2 {
  width: 40px;
  height: 40px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.bubble-3 {
  width: 80px;
  height: 80px;
  bottom: 30%;
  left: 20%;
  animation-delay: 4s;
}

.wave-pattern {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%23ffffff'%3E%3C/path%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' fill='%23ffffff'%3E%3C/path%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%23ffffff'%3E%3C/path%3E%3C/svg%3E") repeat-x;
  background-size: 1200px 120px;
  animation: wave 10s linear infinite;
  opacity: 0.3;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: var(--warm-white);
}

.hero-title {
  margin-bottom: var(--spacing-md);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.title-main {
  display: block;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  color: var(--warm-white);
}

.title-accent {
  display: block;
  font-size: clamp(3rem, 7vw, 5.5rem);
  color: var(--accent-orange);
  font-family: var(--font-accent);
  margin-top: -0.5rem;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  margin-bottom: var(--spacing-lg);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 1.6;
}

.hero-badges {
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
}

.badge {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-xl);
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.hero-cta {
  font-size: 1.1rem;
  padding: var(--spacing-md) var(--spacing-xl);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.hero-cta span {
  font-size: 1.2rem;
}

.scroll-indicator {
  position: absolute;
  bottom: var(--spacing-lg);
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  text-align: center;
  color: var(--warm-white);
  animation: bounce 2s infinite;
}

.scroll-arrow {
  width: 20px;
  height: 20px;
  border-right: 2px solid var(--warm-white);
  border-bottom: 2px solid var(--warm-white);
  transform: rotate(45deg);
  margin: 0 auto var(--spacing-xs);
}

.scroll-indicator span {
  font-size: 0.9rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* Animations */
@keyframes slowZoom {
  0% { transform: scale(1.1); }
  100% { transform: scale(1.2); }
}

@keyframes wave {
  0% { background-position-x: 0; }
  100% { background-position-x: 1200px; }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    height: 100vh;
    min-height: 500px;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-cta {
    font-size: 1rem;
    padding: var(--spacing-sm) var(--spacing-lg);
  }
  
  .hero-badges {
    gap: var(--spacing-xs);
  }
  
  .badge {
    font-size: 0.8rem;
    padding: var(--spacing-xs) var(--spacing-sm);
  }
}

@media (max-width: 480px) {
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .bubble {
    display: none;
  }
}
</style>
