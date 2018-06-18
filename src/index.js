import http from 'http'
import app from './app'

import { normalizePort } from './utils/utils'

const server = http.createServer(app)
const port = normalizePort(process.env.PORT || 3000)

server.listen(port)
server.on('listening', () => console.log(`Server running at ${port}...`))
