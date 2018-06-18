const table = 'pro_products'

const fields = [
  'pro_id',
  'pro_name',
  'pro_description',
  'pro_price',
  'pro_quantity'
]

export default connection => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (error, results) => {
          if (error) {
            reject(error)
          }
          resolve({ product: results })
        })
      })
    },
    create: (params) => {
      return new Promise((resolve, reject) => {
        let insertedField = []
        let insertedBind = []
        let insertedValue = []

        Object.keys(params).forEach((key) => {
          console.log(fields)
          if (fields.includes(key)) {
            insertedField.push(key)
            insertedBind.push('?')
            insertedValue.push(params[key])
          }
        })

        connection.query(`INSERT INTO ${table} (${insertedField.join(', ')}) VALUES(${insertedBind.join(', ')})`, insertedValue, (error, results) => {
          if (error) {
            reject(error)
          }
          console.log(results)

          resolve({ product: Object.assign({}, params, { pro_id: results.insertId }) })
        })
      })
    }
  }
}
