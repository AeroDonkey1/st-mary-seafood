import express from 'express'
import cors from 'cors'
import pricingRoutes from '../data/pricing.js'

const app = express()
app.use(cors())
app.use(express.json())

pricingRoutes.then((router) => {
  app.use('/api/pricing', router)

  app.listen(3001, () => {
    console.log('API running on http://localhost:3001')
  })
})
