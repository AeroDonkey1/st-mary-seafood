import express from 'express'
import { Low } from 'lowdb'
import { Memory } from 'lowdb'
import { nanoid } from 'nanoid'

// Use in-memory storage for Render deployment
const adapter = new Memory()
const db = new Low(adapter, { items: [] })

const router = express.Router()

// Default seafood items
const defaultItems = [
  {
    id: 'crawfish-1',
    name: 'Live Crawfish',
    description: 'Fresh Louisiana crawfish, caught daily from local waters',
    pricePerLb: 4.99,
    inStock: true,
    featured: true,
    seasonal: false,
    category: 'crawfish',
    image: '/images/images-33.webp'
  },
  {
    id: 'crab-1',
    name: 'Blue Crab',
    description: 'Premium blue crabs from the Gulf Coast',
    pricePerLb: 8.99,
    inStock: true,
    featured: false,
    seasonal: false,
    category: 'crab',
    image: '/images/images-35.webp'
  },
  {
    id: 'shrimp-1',
    name: 'Gulf Shrimp',
    description: 'Wild-caught Gulf shrimp, medium size',
    pricePerLb: 12.99,
    inStock: true,
    featured: true,
    seasonal: false,
    category: 'shrimp',
    image: '/images/images-37.webp'
  }
]

// Setup wrapper function to init and return router
export default (async () => {
  await db.read()
  if (!db.data || !db.data.items || db.data.items.length === 0) {
    db.data = { items: defaultItems }
    await db.write()
  }

  // GET all
  router.get('/', async (req, res) => {
    await db.read()
    res.json(db.data.items)
  })

  // POST new
  router.post('/', async (req, res) => {
    const { name, description, pricePerLb, inStock, featured, seasonal, category, image } = req.body
    if (!name) return res.status(400).json({ error: 'Name is required' })

    const newItem = {
      id: nanoid(),
      name,
      description: description || '',
      pricePerLb: parseFloat(pricePerLb || 0),
      inStock: inStock ?? true,
      featured: featured ?? false,
      seasonal: seasonal ?? false,
      category: category || 'fish',
      image: image || '/images/OIP.webp'
    }

    db.data.items.push(newItem)
    await db.write()
    res.status(201).json(newItem)
  })

  // PUT update
  router.put('/:id', async (req, res) => {
    const { id } = req.params
    const index = db.data.items.findIndex(i => i.id === id)
    if (index === -1) return res.status(404).json({ error: 'Item not found' })

    db.data.items[index] = { ...db.data.items[index], ...req.body }
    await db.write()
    res.json(db.data.items[index])
  })

  // DELETE
  router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const index = db.data.items.findIndex(i => i.id === id)
    if (index === -1) return res.status(404).json({ error: 'Item not found' })

    db.data.items.splice(index, 1)
    await db.write()
    res.status(204).end()
  })

  return router
})()
