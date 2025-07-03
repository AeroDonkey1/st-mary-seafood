<template>
  <div id="app">
    <nav class="navbar">
      <div class="container">
        <div class="nav-brand">
          <h3 class="brand-text">St. Mary Seafood</h3>
          <span class="brand-tagline">Fresh from the Bayou</span>
        </div>
        <div class="nav-links">
          <a href="#hero" class="nav-link">Home</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#catch" class="nav-link">Fresh Catch</a>
          <a href="#contact" class="nav-link">Contact</a>
          <a href="tel:+13379237607" class="btn btn-primary nav-cta">Call Now</a>
        </div>
        <button class="mobile-menu-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <main>
      <HeroSection />
      <AboutSection />
      <CatchGrid />
      <ContactSection />
    </main>
    
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import CatchGrid from './components/CatchGrid.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
/* Navigation Styles */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(30, 58, 95, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: var(--spacing-sm) 0;
  transition: all var(--transition-medium);
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  display: flex;
  flex-direction: column;
}

.brand-text {
  color: var(--warm-white);
  font-family: var(--font-primary);
  font-size: 1.5rem;
  margin: 0;
  line-height: 1;
}

.brand-tagline {
  color: var(--accent-orange);
  font-family: var(--font-accent);
  font-size: 0.9rem;
  margin-top: -2px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.nav-link {
  color: var(--warm-white);
  font-weight: 500;
  transition: color var(--transition-fast);
  position: relative;
}

.nav-link:hover {
  color: var(--accent-orange);
  text-decoration: none;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-orange);
  transition: width var(--transition-fast);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-cta {
  font-size: 0.9rem;
  padding: var(--spacing-xs) var(--spacing-md);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-xs);
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--warm-white);
  margin: 2px 0;
  transition: var(--transition-fast);
}

/* Mobile Navigation */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .brand-text {
    font-size: 1.2rem;
  }
  
  .brand-tagline {
    font-size: 0.8rem;
  }
}

/* Main content offset for fixed navbar */
main {
  padding-top: 80px;
}

@media (max-width: 768px) {
  main {
    padding-top: 70px;
  }
}
</style>
