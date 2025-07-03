import express from 'express'
import cors from 'cors'
import pricingRoutes from '../data/pricing.js'

const app = express()
app.use(cors())
app.use(express.json())

// Admin credentials from environment variables
const ADMIN_CREDENTIALS = {
  username: process.env.ADMIN_USERNAME || 'stmary',
  password: process.env.ADMIN_PASSWORD || 'seafood2025!'
}

// Authentication endpoint
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body
  
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    res.json({ 
      success: true, 
      message: 'Login successful',
      timestamp: Date.now()
    })
  } else {
    res.status(401).json({ 
      success: false, 
      message: 'Invalid username or password' 
    })
  }
})

pricingRoutes.then((router) => {
  app.use('/api/pricing', router)

  app.listen(3001, () => {
    console.log('API running on http://localhost:3001')
  })
})
