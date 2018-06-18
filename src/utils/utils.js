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
