const table = 'pro_products'

export default connection => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (error, results) => {
          if (error) {
            reject(error)
          }
          resolve(results)
        })
      })
    }
  }
}
