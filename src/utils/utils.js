export const normalizePort = val => {
  const port = (typeof val === 'string')
    ? parseInt(val, 10)
    : val

  if (isNaN(port)) {
    return val
  } else if (port >= 0) {
    return port
  } else {
    return false
  }
}

export const onError = (server, port) => {
  return error => {
    if (error.syscall !== 'listen') {
      throw error
    }

    switch (error.code) {
      case 'EACCES':
        console.error(`Port ${port} requires elevated privileges`)
        process.exit(1)
      case 'EADDRINUSE':
        console.error(`Port ${port} is already in use`)
        process.exit(1)
      default:
        throw error
    }
  }
}

export const onListening = server => {
  return () => {
    const addr = server.address()
    const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`
    console.log(`Server running at ${bind}...`)
  }
}
