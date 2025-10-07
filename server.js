import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ORDERS_PATH = path.join(__dirname, 'orders.json')

function readOrders() {
  try {
    const raw = fs.readFileSync(ORDERS_PATH, 'utf8')
    return JSON.parse(raw)
  } catch {
    return []
  }
}

function writeOrders(list) {
  fs.writeFileSync(ORDERS_PATH, JSON.stringify(list, null, 2))
}

const app = express()
app.use(cors())
app.use(express.json())

// Simple health check
app.get('/api/health', (_req, res) => res.json({ ok: true }))

// Proxy products (dummyjson)
app.get('/api/products', async (_req, res) => {
  try {
    const r = await fetch('https://dummyjson.com/products?limit=50')
    const data = await r.json()
    res.json(data)
  } catch (e) {
    res.status(500).json({ error: 'failed_to_fetch_products' })
  }
})

// Proxy search
app.get('/api/search', async (req, res) => {
  try {
    const q = req.query.q || ''
    const r = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(q)}`)
    const data = await r.json()
    res.json(data)
  } catch (e) {
    res.status(500).json({ error: 'failed_to_search' })
  }
})

// Proxy category
app.get('/api/category/:slug', async (req, res) => {
  try {
    const { slug } = req.params
    let url = ''
    if (slug === 'mens-shoes') url = 'https://dummyjson.com/products/category/mens-shoes'
    else if (slug === 'womens-shoes') url = 'https://dummyjson.com/products/category/womens-shoes'
    else if (slug === 'kids') url = 'https://dummyjson.com/products/search?q=children'
    else url = `https://dummyjson.com/products/search?q=${encodeURIComponent(slug)}`

    const r = await fetch(url)
    const data = await r.json()
    res.json(data)
  } catch (e) {
    res.status(500).json({ error: 'failed_to_fetch_category' })
  }
})

// Minimal orders endpoint storing to memory (swap to DB later)
let orders = readOrders()
app.post('/api/orders', (req, res) => {
  const order = { id: String(Date.now()), createdAt: new Date().toISOString(), ...req.body }
  orders.push(order)
  writeOrders(orders)
  res.status(201).json(order)
})

const PORT = process.env.PORT || 5174
app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`))


