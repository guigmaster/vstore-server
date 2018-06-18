const http = require('http')
const express = require('express')

// Create new instance of Express
const app = express()

const server = http.createServer(app)
const port = process.env.PORT || 3000

server.listen(port)
server.on('listening', () => console.log(`Server running at ${port}...`))
