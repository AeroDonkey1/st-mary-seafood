<template>
  <section id="about" class="about section">
    <div class="container">
      <div class="about-header text-center mb-xl">
        <h2 class="section-title fade-in-up">Meet the Edgar Family</h2>
        <div class="title-decoration">
          <span class="decoration-line"></span>
          <span class="decoration-icon">🦐</span>
          <span class="decoration-line"></span>
        </div>
        <p class="section-subtitle">Three generations of Louisiana seafood tradition</p>
      </div>

      <div class="about-content">
        <div class="story-grid">
          <div class="story-text fade-in-up">
            <div class="story-highlight">
              <h3>Our Story</h3>
              <p class="lead-text">
                Since 1986, the Edgar family has been bringing the freshest seafood from the pristine waters of South Louisiana directly to your table.
              </p>
            </div>
            
            <div class="story-details">
              <p>
                <strong>Daniel, Joey, and Dorien Edgar</strong> work the waters daily, continuing a family tradition that spans three generations. From the early morning hours on the bayou to the moment your seafood reaches your kitchen, we ensure every catch meets our family's high standards.
              </p>
              
              <p>
                Our commitment goes beyond just catching seafood — we're stewards of Louisiana's waters and proud ambassadors of our Cajun heritage. Every softshell crab, live crawfish, and fresh catfish tells the story of our family's dedication to quality and tradition.
              </p>
            </div>

            <div class="family-values">
              <h4>What Sets Us Apart</h4>
              <div class="values-grid">
                <div class="value-item">
                  <div class="value-icon">🌊</div>
                  <h5>Fresh Daily</h5>
                  <p>Caught fresh every morning from Louisiana's pristine waters</p>
                </div>
                <div class="value-item">
                  <div class="value-icon">👨‍👩‍👧‍👦</div>
                  <h5>Family Tradition</h5>
                  <p>Three generations of seafood expertise and Cajun heritage</p>
                </div>
                <div class="value-item">
                  <div class="value-icon">⭐</div>
                  <h5>Quality Promise</h5>
                  <p>Every catch meets our family's uncompromising standards</p>
                </div>
              </div>
            </div>
          </div>

          <div class="story-visual fade-in-up">
            <div class="image-stack">
              <div class="main-image">
                <img src="/images/Daniel-Edgar-Family.webp" alt="The Edgar Family" />
                <div class="image-overlay">
                  <span class="image-caption">The Edgar Family at work</span>
                </div>
              </div>
              <div class="accent-card">
                <div class="accent-content">
                  <h4>Since 1986</h4>
                  <p>Serving Louisiana's finest seafood with pride and tradition</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="testimonial-section mt-xl">
          <div class="testimonial">
            <blockquote>
              "The Edgar family doesn't just sell seafood — they share a piece of Louisiana's soul with every order. You can taste the difference that comes from generations of knowledge and genuine care."
            </blockquote>
            <cite>— Local Restaurant Owner</cite>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: linear-gradient(135deg, var(--cream) 0%, var(--warm-white) 100%);
  position: relative;
}

.about::before {
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

.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xxl);
  align-items: start;
  margin-bottom: var(--spacing-xl);
}

.story-text {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.story-highlight h3 {
  color: var(--primary-blue);
  margin-bottom: var(--spacing-sm);
  font-size: 1.8rem;
}

.lead-text {
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--text-dark);
  line-height: 1.6;
}

.story-details p {
  margin-bottom: var(--spacing-md);
  line-height: 1.7;
}

.family-values h4 {
  color: var(--primary-blue);
  margin-bottom: var(--spacing-md);
  font-size: 1.4rem;
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
}

.value-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  background: var(--warm-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  transition: transform var(--transition-medium);
}

.value-item:hover {
  transform: translateY(-2px);
}

.value-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.value-item h5 {
  margin: 0 0 var(--spacing-xs) 0;
  color: var(--primary-blue);
  font-size: 1.1rem;
}

.value-item p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--text-light);
  line-height: 1.5;
}

.story-visual {
  position: relative;
}

.image-stack {
  position: relative;
}

.main-image {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-card-hover);
}

.main-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.main-image:hover img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: var(--spacing-lg) var(--spacing-md) var(--spacing-md);
  color: var(--warm-white);
}

.image-caption {
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.accent-card {
  position: absolute;
  bottom: -30px;
  right: -20px;
  background: var(--accent-orange);
  color: var(--warm-white);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card-hover);
  max-width: 200px;
  text-align: center;
}

.accent-content h4 {
  color: var(--warm-white);
  margin-bottom: var(--spacing-xs);
  font-size: 1.5rem;
}

.accent-content p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.9;
}

.testimonial-section {
  text-align: center;
  padding: var(--spacing-xl);
  background: var(--warm-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
}

.testimonial blockquote {
  font-size: 1.2rem;
  font-style: italic;
  color: var(--text-dark);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
  position: relative;
}

.testimonial blockquote::before {
  content: '"';
  font-size: 3rem;
  color: var(--accent-orange);
  position: absolute;
  top: -10px;
  left: -20px;
  font-family: var(--font-primary);
}

.testimonial cite {
  color: var(--text-light);
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 968px) {
  .story-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
  
  .story-visual {
    order: -1;
  }
  
  .accent-card {
    position: relative;
    bottom: auto;
    right: auto;
    margin-top: var(--spacing-lg);
    max-width: none;
  }
}

@media (max-width: 768px) {
  .title-decoration {
    gap: var(--spacing-xs);
  }
  
  .decoration-line {
    width: 40px;
  }
  
  .values-grid {
    gap: var(--spacing-sm);
  }
  
  .value-item {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-xs);
  }
  
  .main-image img {
    height: 300px;
  }
  
  .testimonial-section {
    padding: var(--spacing-lg);
  }
  
  .testimonial blockquote {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .story-text {
    gap: var(--spacing-md);
  }
  
  .lead-text {
    font-size: 1.1rem;
  }
  
  .main-image img {
    height: 250px;
  }
}
</style>
