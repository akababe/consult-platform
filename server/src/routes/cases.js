import { Router } from 'express'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const router    = Router()

const getMeta = () => {
  const raw = readFileSync(path.join(__dirname, '../data/cases-meta.json'), 'utf8')
  return JSON.parse(raw)
}

// GET /api/cases
router.get('/', (req, res) => {
  try {
    const cases = getMeta()
    const { firm, industry, status } = req.query

    let filtered = cases
    if (firm)     filtered = filtered.filter(c => c.firm === firm)
    if (industry) filtered = filtered.filter(c => c.industry === industry)
    if (status)   filtered = filtered.filter(c => c.status === status)

    res.json({ count: filtered.length, cases: filtered })
  } catch (err) {
    res.status(500).json({ error: 'Failed to load cases' })
  }
})

// GET /api/cases/:slug
router.get('/:slug', (req, res) => {
  try {
    const cases    = getMeta()
    const caseItem = cases.find(c => c.slug === req.params.slug)
    if (!caseItem) return res.status(404).json({ error: 'Case not found' })
    res.json(caseItem)
  } catch (err) {
    res.status(500).json({ error: 'Failed to load case' })
  }
})

export default router
