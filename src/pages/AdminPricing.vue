<template>
  <div class="admin-pricing">
    <!-- Login Screen -->
    <AdminLogin 
      v-if="!isAuthenticated" 
      @login-success="handleLoginSuccess"
    />

    <!-- Admin Panel -->
    <div v-else class="admin-panel">
      <div class="container">
        <!-- Header -->
        <div class="admin-header">
          <h1>🐟 Seafood Pricing Manager</h1>
          <p>Manage your daily catch prices and availability</p>
          <div class="header-actions">
            <button @click="logout" class="btn btn-danger">🚪 Logout</button>
            <router-link to="/" class="btn btn-secondary">← Back to Website</router-link>
          </div>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="loading-state">
          <div class="loading"></div>
          <p>Loading seafood items...</p>
        </div>

        <!-- Items Grid -->
        <div v-else class="items-grid">
          <div 
            v-for="item in items" 
            :key="item.id" 
            class="item-card"
            :class="{ 'out-of-stock': !item.inStock }"
          >
            <!-- Image Section -->
            <div class="item-image-section">
              <div class="current-image">
                <img 
                  :src="item.image || '/images/OIP.webp'" 
                  :alt="item.name"
                  @error="handleImageError"
                />
                <div class="image-overlay">
                  <button @click="openImageSelector(item)" class="change-image-btn">
                    📷 Change Photo
                  </button>
                </div>
              </div>
            </div>

            <!-- Item Details -->
            <div class="item-details">
              <div class="form-group">
                <label>Seafood Name</label>
                <input 
                  v-model="item.name" 
                  type="text" 
                  class="form-input"
                  placeholder="e.g., Live Crawfish"
                />
              </div>

              <div class="form-group">
                <label>Description</label>
                <textarea 
                  v-model="item.description" 
                  class="form-textarea"
                  placeholder="Describe the seafood..."
                  rows="3"
                ></textarea>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label>Price per Pound</label>
                  <div class="price-input">
                    <span class="currency">$</span>
                    <input 
                      v-model.number="item.pricePerLb" 
                      type="number" 
                      step="0.01"
                      min="0"
                      class="form-input price-field"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label>Category</label>
                  <select v-model="item.category" class="form-select">
                    <option value="crawfish">🦞 Crawfish</option>
                    <option value="crab">🦀 Crab</option>
                    <option value="shrimp">🦐 Shrimp</option>
                    <option value="fish">🐟 Fish</option>
                    <option value="oyster">🦪 Oyster</option>
                  </select>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="checkbox-label">
                    <input 
                      type="checkbox" 
                      v-model="item.inStock"
                      class="checkbox-input"
                    />
                    <span class="checkbox-custom"></span>
                    Available Today
                  </label>
                </div>

                <div class="form-group">
                  <label class="checkbox-label">
                    <input 
                      type="checkbox" 
                      v-model="item.featured"
                      class="checkbox-input"
                    />
                    <span class="checkbox-custom"></span>
                    Featured Item
                  </label>
                </div>

                <div class="form-group">
                  <label class="checkbox-label">
                    <input 
                      type="checkbox" 
                      v-model="item.seasonal"
                      class="checkbox-input"
                    />
                    <span class="checkbox-custom"></span>
                    Seasonal
                  </label>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="item-actions">
                <button @click="updateItem(item)" class="btn btn-primary">
                  💾 Save Changes
                </button>
                <button @click="removeItem(item.id)" class="btn btn-danger">
                  🗑️ Delete Item
                </button>
              </div>
            </div>
          </div>

          <!-- Add New Item Card -->
          <div class="item-card add-new-card">
            <div class="add-new-content">
              <div class="add-icon">➕</div>
              <h3>Add New Seafood</h3>
              <p>Add a new item to your menu</p>
              <button @click="addItem" class="btn btn-primary">
                Add New Item
              </button>
            </div>
          </div>
        </div>

        <!-- Image Selector Modal -->
        <div v-if="showImageSelector" class="modal-overlay" @click="closeImageSelector">
          <div class="modal-content" @click.stop>
            <div class="modal-header">
              <h3>Choose a Photo</h3>
              <button @click="closeImageSelector" class="close-btn">✕</button>
            </div>
            
            <div class="modal-body">
              <p>Select from existing photos or enter a new image URL:</p>
              
              <!-- Existing Images -->
              <div class="image-gallery">
                <div 
                  v-for="imagePath in availableImages" 
                  :key="imagePath"
                  class="gallery-item"
                  @click="selectImage(imagePath)"
                >
                  <img :src="imagePath" :alt="imagePath" />
                  <div class="gallery-overlay">
                    <span>Select</span>
                  </div>
                </div>
              </div>

              <!-- Custom URL Input -->
              <div class="custom-url-section">
                <label>Or enter a custom image URL:</label>
                <div class="url-input-group">
                  <input 
                    v-model="customImageUrl" 
                    type="url" 
                    class="form-input"
                    placeholder="https://example.com/image.jpg"
                  />
                  <button @click="selectCustomImage" class="btn btn-secondary">
                    Use This URL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Success Message -->
        <div v-if="showSuccess" class="success-message">
          ✅ Changes saved successfully!
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import AdminLogin from '../components/AdminLogin.vue'

const items = ref([])
const loading = ref(true)
const showImageSelector = ref(false)
const selectedItem = ref(null)
const customImageUrl = ref('')
const showSuccess = ref(false)

// Authentication logic
const isAuthenticated = computed(() => {
  const auth = localStorage.getItem('stmary_admin_auth')
  const timestamp = localStorage.getItem('stmary_admin_timestamp')
  
  if (!auth || !timestamp) return false
  
  // Check if session is still valid (24 hours)
  const sessionAge = Date.now() - parseInt(timestamp)
  const maxAge = 24 * 60 * 60 * 1000 // 24 hours in milliseconds
  
  if (sessionAge > maxAge) {
    localStorage.removeItem('stmary_admin_auth')
    localStorage.removeItem('stmary_admin_timestamp')
    return false
  }
  
  return auth === 'true'
})

const handleLoginSuccess = () => {
  // Authentication is handled in the AdminLogin component
  // Force reactivity update and fetch items
  fetchItems()
}

const logout = () => {
  localStorage.removeItem('stmary_admin_auth')
  localStorage.removeItem('stmary_admin_timestamp')
  // Force reactivity update
  window.location.reload()
}

// Available images in the public/images folder
const availableImages = ref([
  '/images/images-33.webp',
  '/images/images-35.webp', 
  '/images/images-37.webp',
  '/images/OIP.webp',
  '/images/461744849_2522438907950928_8470721216314520031_n-1-e1744445888387.webp',
  '/images/Daniel-Edgar-Family.webp',
  '/images/Swamp-People-cast-Daniel-Edgar.webp'
])

const fetchItems = async () => {
  try {
    loading.value = true
    const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/pricing`)
    const data = await res.json()
    items.value = data.items || data
  } catch (error) {
    console.error('Error fetching items:', error)
  } finally {
    loading.value = false
  }
}

const addItem = async () => {
  const newItem = {
    name: 'New Seafood Item',
    description: 'Fresh and delicious seafood',
    pricePerLb: 0.0,
    inStock: true,
    featured: false,
    seasonal: false,
    category: 'fish',
    image: '/images/OIP.webp'
  }

  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/pricing`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem)
    })

    if (res.ok) {
      const saved = await res.json()
      items.value.push(saved)
      showSuccessMessage()
    }
  } catch (error) {
    console.error('Error adding item:', error)
  }
}

const updateItem = async (item) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/pricing/${item.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })

    if (res.ok) {
      showSuccessMessage()
    }
  } catch (error) {
    console.error('Error updating item:', error)
  }
}

const removeItem = async (id) => {
  if (!confirm('Are you sure you want to delete this item?')) {
    return
  }

  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/pricing/${id}`, {
      method: 'DELETE'
    })

    if (res.ok) {
      items.value = items.value.filter(i => i.id !== id)
      showSuccessMessage()
    }
  } catch (error) {
    console.error('Error removing item:', error)
  }
}

const openImageSelector = (item) => {
  selectedItem.value = item
  customImageUrl.value = ''
  showImageSelector.value = true
}

const closeImageSelector = () => {
  showImageSelector.value = false
  selectedItem.value = null
  customImageUrl.value = ''
}

const selectImage = (imagePath) => {
  if (selectedItem.value) {
    selectedItem.value.image = imagePath
    closeImageSelector()
  }
}

const selectCustomImage = () => {
  if (selectedItem.value && customImageUrl.value) {
    selectedItem.value.image = customImageUrl.value
    closeImageSelector()
  }
}

const handleImageError = (event) => {
  event.target.src = '/images/OIP.webp'
}

const showSuccessMessage = () => {
  showSuccess.value = true
  setTimeout(() => {
    showSuccess.value = false
  }, 3000)
}

onMounted(() => {
  if (isAuthenticated.value) {
    fetchItems()
  }
})
</script>

<style scoped>
.admin-pricing {
  min-height: 100vh;
  background: var(--cream);
}

.admin-panel {
  padding: var(--spacing-lg) 0;
}

.admin-header {
  text-align: center;
  margin-bottom: var(--spacing-xxl);
  padding: var(--spacing-xl);
  background: var(--warm-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
}

.admin-header h1 {
  color: var(--primary-blue);
  margin-bottom: var(--spacing-sm);
  font-size: 2.5rem;
}

.admin-header p {
  color: var(--text-light);
  margin-bottom: var(--spacing-lg);
  font-size: 1.2rem;
}

.header-actions {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.loading-state {
  text-align: center;
  padding: var(--spacing-xxl);
  color: var(--text-light);
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-xl);
}

.item-card {
  background: var(--warm-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: all var(--transition-medium);
}

.item-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-card-hover);
}

.item-card.out-of-stock {
  opacity: 0.7;
  border: 2px solid var(--text-light);
}

.item-image-section {
  position: relative;
  height: 200px;
}

.current-image {
  position: relative;
  width: 100%;
  height: 100%;
}

.current-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-medium);
}

.current-image:hover .image-overlay {
  opacity: 1;
}

.change-image-btn {
  background: var(--accent-orange);
  color: var(--warm-white);
  border: none;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.change-image-btn:hover {
  background: var(--warm-orange);
  transform: translateY(-2px);
}

.item-details {
  padding: var(--spacing-lg);
}

.form-group {
  margin-bottom: var(--spacing-md);
}

.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

label {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: 600;
  color: var(--primary-blue);
  font-size: 0.9rem;
}

.form-input,
.form-textarea,
.form-select {
  width: 100%;
  padding: var(--spacing-sm);
  border: 2px solid var(--border-light);
  border-radius: var(--radius-md);
  font-size: 1rem;
  transition: border-color var(--transition-fast);
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
  outline: none;
  border-color: var(--seafoam-green);
}

.price-input {
  position: relative;
  display: flex;
  align-items: center;
}

.currency {
  position: absolute;
  left: var(--spacing-sm);
  color: var(--text-light);
  font-weight: 600;
  z-index: 1;
}

.price-field {
  padding-left: var(--spacing-lg);
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  cursor: pointer;
  margin-bottom: 0;
}

.checkbox-input {
  display: none;
}

.checkbox-custom {
  width: 20px;
  height: 20px;
  border: 2px solid var(--border-light);
  border-radius: var(--radius-sm);
  position: relative;
  transition: all var(--transition-fast);
}

.checkbox-input:checked + .checkbox-custom {
  background: var(--seafoam-green);
  border-color: var(--seafoam-green);
}

.checkbox-input:checked + .checkbox-custom::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--warm-white);
  font-weight: bold;
  font-size: 0.8rem;
}

.item-actions {
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-lg);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--border-light);
}

.btn-danger {
  background: #dc3545;
  color: var(--warm-white);
}

.btn-danger:hover {
  background: #c82333;
  color: var(--warm-white);
  text-decoration: none;
}

.add-new-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  border: 2px dashed var(--border-light);
  background: var(--cream);
  cursor: pointer;
  transition: all var(--transition-medium);
}

.add-new-card:hover {
  border-color: var(--seafoam-green);
  background: var(--warm-white);
}

.add-new-content {
  text-align: center;
  color: var(--text-light);
}

.add-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  color: var(--seafoam-green);
}

.add-new-content h3 {
  color: var(--primary-blue);
  margin-bottom: var(--spacing-sm);
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: var(--warm-white);
  border-radius: var(--radius-lg);
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--border-light);
}

.modal-header h3 {
  color: var(--primary-blue);
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-light);
  padding: var(--spacing-xs);
}

.close-btn:hover {
  color: var(--text-dark);
}

.modal-body {
  padding: var(--spacing-lg);
}

.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.gallery-item {
  position: relative;
  aspect-ratio: 1;
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: pointer;
  transition: transform var(--transition-fast);
}

.gallery-item:hover {
  transform: scale(1.05);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--warm-white);
  font-weight: 600;
  opacity: 0;
  transition: opacity var(--transition-fast);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.custom-url-section {
  margin-top: var(--spacing-lg);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--border-light);
}

.url-input-group {
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
}

.url-input-group .form-input {
  flex: 1;
}

.success-message {
  position: fixed;
  top: 100px;
  right: var(--spacing-lg);
  background: var(--seafoam-green);
  color: var(--warm-white);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  z-index: 1001;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .items-grid {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .item-actions {
    flex-direction: column;
  }
  
  .modal-content {
    width: 95%;
  }
  
  .url-input-group {
    flex-direction: column;
  }
  
  .header-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
