import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
  res.json({
    status: 'ok',
    service: 'consulting-analytics-platform',
    timestamp: new Date().toISOString(),
  })
})

export default router
