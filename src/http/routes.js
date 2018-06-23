import productRoutes from './product'

const routes = app => {
  app.get('/', (req, res) => {
    res.send('Hello world!')
  })

  app.use('/products', productRoutes)
}

module.exports = routes
