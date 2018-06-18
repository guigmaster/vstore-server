import { Router } from 'express'
import db from '../database'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const products = await db.product.all()
    res.status(200).json({ products })
  } catch (error) {
    res.send(error)
  }
})

export default router
