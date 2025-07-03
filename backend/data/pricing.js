import express from 'express'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { nanoid } from 'nanoid'

const file = './backend/data/pricing.json'
const adapter = new JSONFile(file)
const db = new Low(adapter, { items: [] })

const router = express.Router()

// Setup wrapper function to init and return router
export default (async () => {
  await db.read()
  if (!db.data || !db.data.items) {
    db.data = { items: [] }
    await db.write()
  }

  // GET all
  router.get('/', async (req, res) => {
    await db.read()
    res.json(db.data.items)
  })

  // POST new
  router.post('/', async (req, res) => {
    const { name, description, pricePerLb, inStock, image } = req.body
    if (!name) return res.status(400).json({ error: 'Name is required' })

    const newItem = {
      id: nanoid(),
      name,
      description: description || '',
      pricePerLb: parseFloat(pricePerLb || 0),
      inStock: inStock ?? true,
      image: image || ''
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
