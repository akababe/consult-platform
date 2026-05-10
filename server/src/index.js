import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import casesRouter from './routes/cases.js'
import healthRouter from './routes/health.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app  = express()
const PORT = process.env.PORT || 3001
const DIST = path.join(__dirname, '../../dist')

// ── MIDDLEWARE ────────────────────────────────────────────────
app.use(cors())
app.use(express.json())

// ── API ROUTES ────────────────────────────────────────────────
app.use('/api/cases',  casesRouter)
app.use('/health',     healthRouter)

// ── SERVE REACT BUILD ─────────────────────────────────────────
app.use(express.static(DIST))

// SPA fallback — all non-API routes serve index.html
app.get('*', (req, res) => {
  const index = path.join(DIST, 'index.html')
  res.sendFile(index, err => {
    if (err) {
      res.status(404).json({ error: 'Not found. Run `npm run build` first.' })
    }
  })
})

// ── START ─────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n  🟢 The Consulting Playbook`)
  console.log(`  ─────────────────────────`)
  console.log(`  Server:  http://localhost:${PORT}`)
  console.log(`  API:     http://localhost:${PORT}/api/cases`)
  console.log(`  Health:  http://localhost:${PORT}/health\n`)
})
