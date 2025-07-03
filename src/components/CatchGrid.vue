<template>
  <section id="catch" class="catch section">
    <div class="container">
      <div class="catch-header text-center mb-xl">
        <h2 class="section-title fade-in-up">Today's Fresh Catch</h2>
        <div class="title-decoration">
          <span class="decoration-line"></span>
          <span class="decoration-icon">🐟</span>
          <span class="decoration-line"></span>
        </div>
        <p class="section-subtitle">Straight from Louisiana waters to your table</p>
      </div>

      <!-- Filter Controls -->
      <div class="filter-controls mb-lg">
        <div class="filter-buttons">
          <button 
            @click="setFilter('all')" 
            :class="['filter-btn', { active: activeFilter === 'all' }]"
          >
            All Seafood
          </button>
          <button 
            @click="setFilter('featured')" 
            :class="['filter-btn', { active: activeFilter === 'featured' }]"
          >
            ⭐ Featured
          </button>
          <button 
            @click="setFilter('crawfish')" 
            :class="['filter-btn', { active: activeFilter === 'crawfish' }]"
          >
            🦞 Crawfish
          </button>
          <button 
            @click="setFilter('crab')" 
            :class="['filter-btn', { active: activeFilter === 'crab' }]"
          >
            🦀 Crab
          </button>
          <button 
            @click="setFilter('shrimp')" 
            :class="['filter-btn', { active: activeFilter === 'shrimp' }]"
          >
            🦐 Shrimp
          </button>
          <button 
            @click="setFilter('fish')" 
            :class="['filter-btn', { active: activeFilter === 'fish' }]"
          >
            🐟 Fish
          </button>
        </div>
        
        <div class="availability-toggle">
          <label class="toggle-label">
            <input 
              type="checkbox" 
              v-model="showOutOfStock"
              class="toggle-input"
            />
            <span class="toggle-slider"></span>
            Show out of stock
          </label>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <div class="loading"></div>
        <p>Loading fresh catch...</p>
      </div>

      <!-- Products Grid -->
      <div v-else class="catch-grid">
        <div 
          v-for="item in filteredCatch" 
          :key="item.id" 
          class="catch-card fade-in-up"
          :class="{ 'out-of-stock': !item.inStock }"
        >
          <div class="card-image">
            <img :src="item.image || '/images/OIP.webp'" :alt="item.name" />
            <div class="card-badges">
              <span v-if="item.featured" class="badge featured-badge">⭐ Featured</span>
              <span v-if="item.seasonal" class="badge seasonal-badge">🌊 Seasonal</span>
              <span v-if="!item.inStock" class="badge out-of-stock-badge">Out of Stock</span>
            </div>
            <div class="card-overlay">
              <button class="quick-order-btn" :disabled="!item.inStock">
                <span v-if="item.inStock">📞 Call to Order</span>
                <span v-else>Currently Unavailable</span>
              </button>
            </div>
          </div>
          
          <div class="card-content">
            <h3 class="card-title">{{ item.name }}</h3>
            <p class="card-description">{{ item.description }}</p>
            
            <div class="card-footer">
              <div class="price-section">
                <span class="price">${{ item.pricePerLb.toFixed(2) }}</span>
                <span class="price-unit">per lb</span>
              </div>
              <div class="availability">
                <span v-if="item.inStock" class="in-stock">✓ Available</span>
                <span v-else class="out-of-stock">✗ Out of Stock</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="!loading && filteredCatch.length === 0" class="empty-state">
        <div class="empty-icon">🐟</div>
        <h3>No seafood found</h3>
        <p>Try adjusting your filters or check back later for fresh catches!</p>
      </div>

      <!-- Call to Action -->
      <div class="catch-cta text-center mt-xl">
        <h3>Ready to Order?</h3>
        <p>Call us now for the freshest seafood in Louisiana</p>
        <a href="tel:+13379237607" class="btn btn-primary btn-large">
          📞 Call (337) 923-7607
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const catchList = ref([])
const loading = ref(true)
const activeFilter = ref('all')
const showOutOfStock = ref(false)

const fetchCatch = async () => {
  try {
    loading.value = true
    const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/pricing`)
    const data = await res.json()
    catchList.value = data.items || data
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      loading.value = false
    }, 500)
  } catch (error) {
    console.error('Error fetching catch data:', error)
    loading.value = false
  }
}

const filteredCatch = computed(() => {
  let filtered = catchList.value

  // Filter by availability
  if (!showOutOfStock.value) {
    filtered = filtered.filter(item => item.inStock)
  }

  // Filter by category
  if (activeFilter.value !== 'all') {
    if (activeFilter.value === 'featured') {
      filtered = filtered.filter(item => item.featured)
    } else {
      filtered = filtered.filter(item => item.category === activeFilter.value)
    }
  }

  return filtered
})

const setFilter = (filter) => {
  activeFilter.value = filter
}

onMounted(fetchCatch)
</script>

<style scoped>
.catch {
  background: var(--warm-white);
  position: relative;
}

.catch::before {
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
  background: linear-gradient(90deg, transparent, var(--seafoam-green), transparent);
}

.decoration-icon {
  font-size: 1.5rem;
  color: var(--seafoam-green);
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--text-light);
  font-style: italic;
}

.filter-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--cream);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
}

.filter-buttons {
  display: flex;
  gap: var(--spacing-xs);
  flex-wrap: wrap;
}

.filter-btn {
  padding: var(--spacing-xs) var(--spacing-md);
  border: 2px solid var(--border-light);
  background: var(--warm-white);
  color: var(--text-dark);
  border-radius: var(--radius-xl);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
  font-size: 0.9rem;
}

.filter-btn:hover {
  border-color: var(--seafoam-green);
  color: var(--seafoam-green);
}

.filter-btn.active {
  background: var(--seafoam-green);
  border-color: var(--seafoam-green);
  color: var(--warm-white);
}

.availability-toggle {
  display: flex;
  align-items: center;
}

.toggle-label {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--text-dark);
}

.toggle-input {
  display: none;
}

.toggle-slider {
  width: 40px;
  height: 20px;
  background: var(--border-light);
  border-radius: 20px;
  position: relative;
  transition: background var(--transition-fast);
}

.toggle-slider::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  background: var(--warm-white);
  border-radius: 50%;
  transition: transform var(--transition-fast);
}

.toggle-input:checked + .toggle-slider {
  background: var(--seafoam-green);
}

.toggle-input:checked + .toggle-slider::before {
  transform: translateX(20px);
}

.loading-state {
  text-align: center;
  padding: var(--spacing-xxl);
  color: var(--text-light);
}

.catch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.catch-card {
  background: var(--warm-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: all var(--transition-medium);
  position: relative;
}

.catch-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
}

.catch-card.out-of-stock {
  opacity: 0.7;
}

.card-image {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.catch-card:hover .card-image img {
  transform: scale(1.05);
}

.card-badges {
  position: absolute;
  top: var(--spacing-sm);
  left: var(--spacing-sm);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.badge {
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-xl);
  font-size: 0.8rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.featured-badge {
  background: rgba(255, 107, 53, 0.9);
  color: var(--warm-white);
}

.seasonal-badge {
  background: rgba(74, 155, 142, 0.9);
  color: var(--warm-white);
}

.out-of-stock-badge {
  background: rgba(108, 117, 125, 0.9);
  color: var(--warm-white);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 58, 95, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-medium);
}

.catch-card:hover .card-overlay {
  opacity: 1;
}

.quick-order-btn {
  background: var(--accent-orange);
  color: var(--warm-white);
  border: none;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.quick-order-btn:hover:not(:disabled) {
  background: var(--warm-orange);
  transform: translateY(-2px);
}

.quick-order-btn:disabled {
  background: var(--text-light);
  cursor: not-allowed;
}

.card-content {
  padding: var(--spacing-lg);
}

.card-title {
  color: var(--primary-blue);
  margin-bottom: var(--spacing-sm);
  font-size: 1.3rem;
}

.card-description {
  color: var(--text-light);
  margin-bottom: var(--spacing-md);
  line-height: 1.5;
  font-size: 0.95rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price-section {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-xs);
}

.price {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--accent-orange);
}

.price-unit {
  font-size: 0.9rem;
  color: var(--text-light);
}

.availability {
  font-size: 0.9rem;
  font-weight: 600;
}

.in-stock {
  color: var(--seafoam-green);
}

.out-of-stock {
  color: var(--text-light);
}

.empty-state {
  text-align: center;
  padding: var(--spacing-xxl);
  color: var(--text-light);
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: var(--spacing-md);
}

.catch-cta {
  background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
  color: var(--warm-white);
  padding: var(--spacing-xxl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card-hover);
}

.catch-cta h3 {
  color: var(--warm-white);
  margin-bottom: var(--spacing-sm);
}

.catch-cta p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--spacing-lg);
}

.btn-large {
  font-size: 1.2rem;
  padding: var(--spacing-md) var(--spacing-xl);
}

/* Responsive Design */
@media (max-width: 768px) {
  .filter-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .filter-buttons {
    justify-content: center;
  }
  
  .catch-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .card-image {
    height: 200px;
  }
  
  .title-decoration {
    gap: var(--spacing-xs);
  }
  
  .decoration-line {
    width: 40px;
  }
}

@media (max-width: 480px) {
  .filter-btn {
    font-size: 0.8rem;
    padding: var(--spacing-xs) var(--spacing-sm);
  }
  
  .card-content {
    padding: var(--spacing-md);
  }
  
  .card-title {
    font-size: 1.2rem;
  }
  
  .catch-cta {
    padding: var(--spacing-lg);
  }
}
</style>
