import express from 'express'
import bodyParser from 'body-parser'

// Create new instance of Express
const app = express()

// get and parse body of request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

export default app
