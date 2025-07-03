<template>
  <div class="admin-login">
    <div class="container">
      <div class="login-card">
        <div class="login-header">
          <h1>🔐 Admin Access</h1>
          <p>Enter your credentials to manage seafood pricing</p>
        </div>

        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="username">Username</label>
            <input 
              id="username"
              v-model="credentials.username" 
              type="text" 
              class="form-input"
              placeholder="Enter username"
              required
              autocomplete="username"
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <div class="password-input">
              <input 
                id="password"
                v-model="credentials.password" 
                :type="showPassword ? 'text' : 'password'" 
                class="form-input"
                placeholder="Enter password"
                required
                autocomplete="current-password"
              />
              <button 
                type="button" 
                @click="togglePassword" 
                class="password-toggle"
              >
                {{ showPassword ? '👁️' : '👁️‍🗨️' }}
              </button>
            </div>
          </div>

          <div v-if="error" class="error-message">
            ⚠️ {{ error }}
          </div>

          <button 
            type="submit" 
            class="btn btn-primary login-btn"
            :disabled="loading"
          >
            <span v-if="loading" class="loading-spinner"></span>
            {{ loading ? 'Signing In...' : 'Sign In' }}
          </button>
        </form>

        <div class="login-footer">
          <router-link to="/" class="back-link">
            ← Back to Website
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const emit = defineEmits(['login-success'])

const credentials = reactive({
  username: '',
  password: ''
})

const showPassword = ref(false)
const loading = ref(false)
const error = ref('')

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const handleLogin = async () => {
  error.value = ''
  loading.value = true

  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password
      })
    })

    const data = await response.json()

    if (data.success) {
      // Store authentication in localStorage
      localStorage.setItem('stmary_admin_auth', 'true')
      localStorage.setItem('stmary_admin_timestamp', data.timestamp.toString())
      
      emit('login-success')
    } else {
      error.value = data.message || 'Invalid username or password. Please try again.'
    }
  } catch (err) {
    error.value = 'Connection error. Please check if the server is running.'
  }

  loading.value = false
}
</script>

<style scoped>
.admin-login {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
}

.login-card {
  background: var(--warm-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-hero);
  max-width: 400px;
  width: 100%;
  overflow: hidden;
}

.login-header {
  background: linear-gradient(135deg, var(--cream) 0%, var(--warm-white) 100%);
  padding: var(--spacing-xxl) var(--spacing-xl) var(--spacing-xl);
  text-align: center;
  border-bottom: 1px solid var(--border-light);
}

.login-header h1 {
  color: var(--primary-blue);
  margin-bottom: var(--spacing-sm);
  font-size: 2rem;
}

.login-header p {
  color: var(--text-light);
  margin: 0;
  font-size: 1rem;
}

.login-form {
  padding: var(--spacing-xl);
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

label {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: 600;
  color: var(--primary-blue);
  font-size: 0.9rem;
}

.form-input {
  width: 100%;
  padding: var(--spacing-md);
  border: 2px solid var(--border-light);
  border-radius: var(--radius-md);
  font-size: 1rem;
  transition: border-color var(--transition-fast);
  background: var(--warm-white);
}

.form-input:focus {
  outline: none;
  border-color: var(--seafoam-green);
}

.password-input {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: var(--spacing-sm);
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-xs);
  color: var(--text-light);
  font-size: 1.2rem;
  transition: color var(--transition-fast);
}

.password-toggle:hover {
  color: var(--text-dark);
}

.error-message {
  background: #fee;
  color: #c33;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-lg);
  border: 1px solid #fcc;
  font-size: 0.9rem;
}

.login-btn {
  width: 100%;
  padding: var(--spacing-md);
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
}

.login-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.login-footer {
  padding: var(--spacing-lg) var(--spacing-xl);
  background: var(--cream);
  text-align: center;
  border-top: 1px solid var(--border-light);
}

.back-link {
  color: var(--text-light);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color var(--transition-fast);
}

.back-link:hover {
  color: var(--primary-blue);
  text-decoration: none;
}

/* Responsive Design */
@media (max-width: 480px) {
  .admin-login {
    padding: var(--spacing-md);
  }
  
  .login-card {
    max-width: none;
  }
  
  .login-header {
    padding: var(--spacing-lg);
  }
  
  .login-form {
    padding: var(--spacing-lg);
  }
  
  .login-footer {
    padding: var(--spacing-md) var(--spacing-lg);
  }
}
</style>
