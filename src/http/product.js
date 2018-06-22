import { Router } from 'express'
import multer from 'multer'
import del from 'del'
import { check, validationResult } from 'express-validator/check'

import db from '../database'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname.toLowerCase()}`)
  }
})

const fileFilter = (req, file, cb) => {
  const types = [
    'image/jpg',
    'image/jpeg',
    'image/png'
  ]

  if (types.indexOf(file.mimetype) !== -1) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter
})

const router = Router()

router.get('/', async (req, res) => {
  try {
    const products = await db.product.all()
    res.status(200).json(products)
  } catch (error) {
    res.send(error)
  }
})

const removeFilesOnFails = req => {
  if (req.file && req.file.fieldname) {
    del.sync(req.file.path)
  }
}

const createValidators = [

  check('pro_name')
    .exists().withMessage('Field is required')
    .isString().withMessage('must be a string'),

  check('pro_quantity')
    .exists().withMessage('Field is required')
    .isInt().withMessage('must be a integer'),

  check('pro_price')
    .exists().withMessage('Field is required')
    .isDecimal().withMessage('must be a decimal number')
]

router.post('/', upload.single('pro_image'), createValidators, async (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    removeFilesOnFails(req)
    return res.status(422).json({ errors: errors.array() })
  }
  try {
    let payload = Object.assign({}, req.body)
    if (req.file && req.file.fieldname) {
      payload = Object.assign(payload, { [req.file.fieldname]: req.file.path })
    }
    const products = await db.product.create(payload)
    res.status(201).json(products)
  } catch (error) {
    removeFilesOnFails(req)
    res.send(error)
  }
})
const getProduct = [
  check('id')
    .exists().withMessage('Parameter id is required')
    .isInt().withMessage('must be a integer')
]
router.get('/:id', getProduct, async (req, res) => {
  try {
    const product = await db.product.getById(Number(req.params.id))
    res.status(200).json(product)
  } catch (error) {
    res.send(error)
  }
})

const updateValidators = [
  check('id')
    .exists().withMessage('Parameter id is required')
    .isInt().withMessage('must be a integer'),

  check('pro_name')
    .optional({ checkFalsy: true })
    .exists().withMessage('Field is required')
    .isString().withMessage('must be a string'),

  check('pro_quantity')
    .optional({ checkFalsy: true })
    .exists().withMessage('Field is required')
    .isInt().withMessage('must be a integer'),

  check('pro_price')
    .optional({ checkFalsy: true })
    .exists().withMessage('Field is required')
    .isDecimal().withMessage('must be a decimal number')
]
router.put('/:id', upload.single('pro_image'), updateValidators, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    removeFilesOnFails(req)
    return res.status(422).json({ errors: errors.array() })
  }
  try {
    let payload = Object.assign({}, req.body)
    if (req.file && req.file.fieldname) {
      payload = Object.assign(payload, { [req.file.fieldname]: req.file.path })
    }
    const product = await db.product.update(Number(req.params.id), payload)
    res.status(200).json(product)
  } catch (error) {
    removeFilesOnFails(req)
    res.send(error)
  }
})

const removeProduct = [
  check('id')
    .exists().withMessage('Parameter id is required')
    .isInt().withMessage('must be a integer')
]
router.delete('/:id', removeProduct, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    removeFilesOnFails(req)
    return res.status(422).json({ errors: errors.array() })
  }
  try {
    const product = await db.product.remove(Number(req.params.id))
    res.status(204).json(product)
  } catch (error) {
    res.send(error)
  }
})

export default router
