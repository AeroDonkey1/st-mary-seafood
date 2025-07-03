<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-grid">
          <!-- Company Info -->
          <div class="footer-section">
            <div class="footer-brand">
              <h3 class="brand-name">St. Mary Seafood</h3>
              <p class="brand-tagline">Fresh from the Bayou</p>
            </div>
            <p class="footer-description">
              Three generations of Louisiana seafood tradition, bringing you the freshest catch from South Louisiana's pristine waters since 1986.
            </p>
            <div class="footer-badges">
              <span class="footer-badge">Since 1986</span>
              <span class="footer-badge">Family Owned</span>
              <span class="footer-badge">Louisiana Proud</span>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer-section">
            <h4 class="footer-title">Quick Links</h4>
            <nav class="footer-nav">
              <a href="#hero" class="footer-link">Home</a>
              <a href="#about" class="footer-link">About Us</a>
              <a href="#catch" class="footer-link">Fresh Catch</a>
              <a href="#contact" class="footer-link">Contact</a>
            </nav>
          </div>

          <!-- Contact Info -->
          <div class="footer-section">
            <h4 class="footer-title">Contact Info</h4>
            <div class="footer-contact">
              <div class="contact-item">
                <span class="contact-icon">📞</span>
                <a href="tel:+13379237607" class="footer-link">(337) 923-7607</a>
              </div>
              <div class="contact-item">
                <span class="contact-icon">📧</span>
                <a href="mailto:st.marys3afood@gmail.com" class="footer-link">st.marys3afood@gmail.com</a>
              </div>
              <div class="contact-item">
                <span class="contact-icon">📍</span>
                <span class="contact-text">155 Intracoastal Rd, Franklin, LA</span>
              </div>
            </div>
          </div>

          <!-- Business Hours -->
          <div class="footer-section">
            <h4 class="footer-title">Business Hours</h4>
            <div class="footer-hours">
              <div class="hours-item">
                <span class="hours-day">Mon - Fri</span>
                <span class="hours-time">6AM - 6PM</span>
              </div>
              <div class="hours-item">
                <span class="hours-day">Saturday</span>
                <span class="hours-time">6AM - 4PM</span>
              </div>
              <div class="hours-item">
                <span class="hours-day">Sunday</span>
                <span class="hours-time">Closed</span>
              </div>
            </div>
            <p class="hours-note">Hours may vary based on weather</p>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="footer-cta">
          <div class="cta-content">
            <h3>Ready to Order Fresh Seafood?</h3>
            <p>Call us now for today's fresh catch</p>
            <a href="tel:+13379237607" class="btn btn-primary">
              📞 Call (337) 923-7607
            </a>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <div class="copyright">
              <p>© {{ new Date().getFullYear() }} St. Mary Seafood & Marina. All rights reserved.</p>
            </div>
            <div class="footer-links">
              <span class="footer-link">Made with ❤️ in Louisiana</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative Wave -->
    <div class="footer-wave">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
      </svg>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 50%, var(--deep-teal) 100%);
  color: var(--warm-white);
  position: relative;
  margin-top: var(--spacing-xxl);
}

.footer-wave {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 60px;
  color: var(--primary-blue);
  transform: rotate(180deg);
}

.footer-wave svg {
  width: 100%;
  height: 100%;
}

.footer-content {
  padding: var(--spacing-xxl) 0 var(--spacing-lg);
  position: relative;
  z-index: 2;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxl);
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.footer-brand {
  margin-bottom: var(--spacing-sm);
}

.brand-name {
  color: var(--warm-white);
  font-family: var(--font-primary);
  font-size: 1.8rem;
  margin: 0 0 var(--spacing-xs) 0;
}

.brand-tagline {
  color: var(--accent-orange);
  font-family: var(--font-accent);
  font-size: 1rem;
  margin: 0;
  font-style: italic;
}

.footer-description {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.footer-badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.footer-badge {
  background: rgba(255, 255, 255, 0.1);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-xl);
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-title {
  color: var(--accent-orange);
  font-size: 1.2rem;
  margin: 0 0 var(--spacing-md) 0;
  font-weight: 600;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color var(--transition-fast);
  font-size: 0.95rem;
}

.footer-link:hover {
  color: var(--accent-orange);
  text-decoration: none;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.contact-icon {
  font-size: 1rem;
  width: 20px;
  flex-shrink: 0;
}

.contact-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
}

.footer-hours {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.hours-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}

.hours-day {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

.hours-time {
  color: rgba(255, 255, 255, 0.7);
}

.hours-note {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  margin: var(--spacing-xs) 0 0 0;
}

.footer-cta {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
  margin-bottom: var(--spacing-xl);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.cta-content h3 {
  color: var(--warm-white);
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem;
}

.cta-content p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--spacing-lg);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: var(--spacing-lg);
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.copyright p {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.footer-links {
  display: flex;
  gap: var(--spacing-md);
}

/* Responsive Design */
@media (max-width: 968px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-lg);
  }
  
  .footer-section:first-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .footer-content {
    padding: var(--spacing-xl) 0 var(--spacing-lg);
  }
  
  .footer-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
  
  .footer-cta {
    padding: var(--spacing-lg);
  }
  
  .cta-content h3 {
    font-size: 1.3rem;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-sm);
  }
  
  .footer-badges {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-wave {
    height: 40px;
  }
  
  .brand-name {
    font-size: 1.5rem;
  }
  
  .footer-badges {
    gap: var(--spacing-xs);
  }
  
  .footer-badge {
    font-size: 0.75rem;
    padding: 4px var(--spacing-xs);
  }
  
  .contact-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }
  
  .hours-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }
}

/* Floating elements animation */
.footer::before {
  content: '';
  position: absolute;
  top: 20%;
  left: 10%;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  animation: float 8s ease-in-out infinite;
}

.footer::after {
  content: '';
  position: absolute;
  bottom: 30%;
  right: 15%;
  width: 40px;
  height: 40px;
  background: rgba(255, 107, 53, 0.1);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite reverse;
}
</style>
