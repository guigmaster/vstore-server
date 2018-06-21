import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

require('dotenv').config()

// Create new instance of Express
const app = express()

// get and parse body of request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Enable cors from any origin
const corsMiddleware = cors({ origin: '*', preflightContinue: true })
app.use(corsMiddleware)
app.options('*', corsMiddleware)

// server uploads statics file using express.static
app.use('/uploads', express.static('uploads'))

// config API routes
require('./http/routes')(app)

export default app
