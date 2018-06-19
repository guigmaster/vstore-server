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

router.get('/:id', async (req, res) => {
  try {
    const product = await db.product.getById(Number(req.params.id))
    res.status(200).json(product)
  } catch (error) {
    res.send(error)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const product = await db.product.update(Number(req.params.id), req.body)
    res.status(200).json(product)
  } catch (error) {
    res.send(error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const product = await db.product.remove(Number(req.params.id))
    res.status(200).json(product)
  } catch (error) {
    res.send(error)
  }
})

export default router
