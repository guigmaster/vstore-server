import { Router } from 'express'
import db from '../database'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const products = await db.product.all()
    res.status(200).json(products)
  } catch (error) {
    res.send(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const products = await db.product.create(req.body)
    res.status(200).json(products)
  } catch (error) {
    res.send(error)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const products = await db.product.update(Number(req.params.id), req.body)
    res.status(200).json(products)
  } catch (error) {
    res.send(error)
  }
})

export default router
