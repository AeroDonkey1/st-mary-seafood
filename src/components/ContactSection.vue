<template>
  <section id="contact" class="contact section">
    <div class="container">
      <div class="contact-header text-center mb-xl">
        <h2 class="section-title fade-in-up">Get in Touch</h2>
        <div class="title-decoration">
          <span class="decoration-line"></span>
          <span class="decoration-icon">📞</span>
          <span class="decoration-line"></span>
        </div>
        <p class="section-subtitle">Ready to order fresh Louisiana seafood?</p>
      </div>

      <div class="contact-content">
        <div class="contact-grid">
          <!-- Contact Information -->
          <div class="contact-info fade-in-up">
            <div class="info-card">
              <h3>Contact Information</h3>
              
              <div class="contact-methods">
                <div class="contact-method">
                  <div class="method-icon">📞</div>
                  <div class="method-details">
                    <h4>Phone</h4>
                    <a href="tel:+13379237607" class="contact-link primary-contact">
                      (337) 923-7607
                    </a>
                    <p class="method-note">Call for orders and availability</p>
                  </div>
                </div>

                <div class="contact-method">
                  <div class="method-icon">📧</div>
                  <div class="method-details">
                    <h4>Email</h4>
                    <a href="mailto:st.marys3afood@gmail.com" class="contact-link">
                      st.marys3afood@gmail.com
                    </a>
                    <p class="method-note">For inquiries and information</p>
                  </div>
                </div>

                <div class="contact-method">
                  <div class="method-icon">📍</div>
                  <div class="method-details">
                    <h4>Location</h4>
                    <address class="contact-address">
                      155 Intracoastal Rd<br>
                      Franklin, LA 70538
                    </address>
                    <p class="method-note">South Louisiana bayou country</p>
                  </div>
                </div>
              </div>

              <div class="business-hours">
                <h4>Business Hours</h4>
                <div class="hours-grid">
                  <div class="hours-item">
                    <span class="day">Monday - Friday</span>
                    <span class="time">6:00 AM - 6:00 PM</span>
                  </div>
                  <div class="hours-item">
                    <span class="day">Saturday</span>
                    <span class="time">6:00 AM - 4:00 PM</span>
                  </div>
                  <div class="hours-item">
                    <span class="day">Sunday</span>
                    <span class="time">Closed</span>
                  </div>
                </div>
                <p class="hours-note">
                  <em>Hours may vary based on catch availability and weather conditions</em>
                </p>
              </div>
            </div>
          </div>

          <!-- Order Information -->
          <div class="order-info fade-in-up">
            <div class="info-card">
              <h3>How to Order</h3>
              
              <div class="order-steps">
                <div class="order-step">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <h4>Call Us</h4>
                    <p>Give us a call to check availability and place your order</p>
                  </div>
                </div>

                <div class="order-step">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <h4>Confirm Details</h4>
                    <p>We'll confirm your order, pricing, and pickup/delivery details</p>
                  </div>
                </div>

                <div class="order-step">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <h4>Fresh Delivery</h4>
                    <p>Pick up your fresh seafood or arrange for local delivery</p>
                  </div>
                </div>
              </div>

              <div class="order-notes">
                <h4>Important Notes</h4>
                <ul class="notes-list">
                  <li>🌊 Availability depends on daily catch and weather</li>
                  <li>📞 Call ahead to ensure your preferred items are in stock</li>
                  <li>🚚 Local delivery available within 20 miles</li>
                  <li>💰 Cash and check accepted</li>
                  <li>❄️ We can clean and package your seafood</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="contact-cta text-center mt-xl">
          <div class="cta-content">
            <h3>Ready to Order Fresh Seafood?</h3>
            <p>Call us now and taste the difference of authentic Louisiana seafood</p>
            <div class="cta-buttons">
              <a href="tel:+13379237607" class="btn btn-primary btn-large">
                📞 Call (337) 923-7607
              </a>
              <a href="mailto:st.marys3afood@gmail.com" class="btn btn-secondary">
                📧 Send Email
              </a>
            </div>
          </div>
        </div>

        <!-- Map Placeholder -->
        <div class="map-section mt-xl">
          <div class="map-placeholder">
            <div class="map-content">
              <div class="map-icon">🗺️</div>
              <h4>Find Us in Franklin, Louisiana</h4>
              <p>Located in the heart of South Louisiana's bayou country</p>
              <address>155 Intracoastal Rd, Franklin, LA 70538</address>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: linear-gradient(135deg, var(--cream) 0%, var(--warm-white) 100%);
  position: relative;
}

.contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border-light), transparent);
}

.section-title {
  position: relative;
  margin-bottom: var(--spacing-md);
}

.title-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.decoration-line {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-orange), transparent);
}

.decoration-icon {
  font-size: 1.5rem;
  color: var(--accent-orange);
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--text-light);
  font-style: italic;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.info-card {
  background: var(--warm-white);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  height: fit-content;
}

.info-card h3 {
  color: var(--primary-blue);
  margin-bottom: var(--spacing-lg);
  font-size: 1.5rem;
  text-align: center;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.contact-method {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background: var(--cream);
  border-radius: var(--radius-md);
  transition: transform var(--transition-medium);
}

.contact-method:hover {
  transform: translateY(-2px);
}

.method-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.method-details h4 {
  color: var(--primary-blue);
  margin: 0 0 var(--spacing-xs) 0;
  font-size: 1.1rem;
}

.contact-link {
  display: block;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
  transition: color var(--transition-fast);
}

.primary-contact {
  font-size: 1.3rem;
  color: var(--accent-orange);
}

.primary-contact:hover {
  color: var(--warm-orange);
}

.contact-address {
  font-style: normal;
  line-height: 1.5;
  color: var(--text-dark);
  font-weight: 500;
}

.method-note {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-light);
  font-style: italic;
}

.business-hours {
  border-top: 2px solid var(--border-light);
  padding-top: var(--spacing-lg);
}

.business-hours h4 {
  color: var(--primary-blue);
  margin-bottom: var(--spacing-md);
  text-align: center;
}

.hours-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.hours-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--cream);
  border-radius: var(--radius-sm);
}

.day {
  font-weight: 600;
  color: var(--text-dark);
}

.time {
  color: var(--text-light);
}

.hours-note {
  font-size: 0.85rem;
  color: var(--text-light);
  text-align: center;
  margin: 0;
}

.order-steps {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.order-step {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
}

.step-number {
  width: 40px;
  height: 40px;
  background: var(--accent-orange);
  color: var(--warm-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.step-content h4 {
  color: var(--primary-blue);
  margin: 0 0 var(--spacing-xs) 0;
  font-size: 1.1rem;
}

.step-content p {
  margin: 0;
  color: var(--text-light);
  line-height: 1.5;
}

.order-notes {
  border-top: 2px solid var(--border-light);
  padding-top: var(--spacing-lg);
}

.order-notes h4 {
  color: var(--primary-blue);
  margin-bottom: var(--spacing-md);
  text-align: center;
}

.notes-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.notes-list li {
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--cream);
  border-radius: var(--radius-sm);
  font-size: 0.95rem;
  color: var(--text-dark);
}

.contact-cta {
  background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
  color: var(--warm-white);
  padding: var(--spacing-xxl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card-hover);
}

.cta-content h3 {
  color: var(--warm-white);
  margin-bottom: var(--spacing-sm);
  font-size: 1.8rem;
}

.cta-content p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--spacing-lg);
  font-size: 1.1rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.btn-large {
  font-size: 1.2rem;
  padding: var(--spacing-md) var(--spacing-xl);
}

.map-section {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-card);
}

.map-placeholder {
  background: linear-gradient(135deg, var(--seafoam-green), var(--deep-teal));
  color: var(--warm-white);
  padding: var(--spacing-xxl);
  text-align: center;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-content {
  max-width: 400px;
}

.map-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
}

.map-content h4 {
  color: var(--warm-white);
  margin-bottom: var(--spacing-sm);
  font-size: 1.4rem;
}

.map-content p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--spacing-md);
}

.map-content address {
  font-style: normal;
  color: var(--warm-white);
  font-weight: 600;
  font-size: 1.1rem;
}

/* Responsive Design */
@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
}

@media (max-width: 768px) {
  .title-decoration {
    gap: var(--spacing-xs);
  }
  
  .decoration-line {
    width: 40px;
  }
  
  .info-card {
    padding: var(--spacing-lg);
  }
  
  .contact-method {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-sm);
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .contact-cta {
    padding: var(--spacing-lg);
  }
  
  .map-placeholder {
    padding: var(--spacing-lg);
  }
}

@media (max-width: 480px) {
  .order-step {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-sm);
  }
  
  .step-number {
    align-self: center;
  }
  
  .hours-item {
    flex-direction: column;
    gap: var(--spacing-xs);
    text-align: center;
  }
  
  .cta-content h3 {
    font-size: 1.5rem;
  }
}
</style>
