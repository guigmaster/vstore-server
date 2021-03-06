import http from 'http'
import app from './app'

import { normalizePort, onError, onListening } from './utils/utils'

const server = http.createServer(app)
const port = normalizePort(process.env.PORT || 3000)

server.listen(port)
server.on('error', onError(server, port))
server.on('listening', onListening(server))
