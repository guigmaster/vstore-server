const routes = app => {
  app.get('/', (req, res) => {
    res.send('Hello world!')
  })
}

export default routes
