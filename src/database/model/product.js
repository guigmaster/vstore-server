const table = 'pro_products'

const fields = [
  'pro_id',
  'pro_name',
  'pro_description',
  'pro_price',
  'pro_quantity',
  'pro_image'
]

const getSqlFieldsValues = params => {
  let insertedField = []
  let insertedBind = []
  let insertedValue = []
  let updateField = []

  Object.keys(params).forEach((key) => {
    if (fields.includes(key)) {
      insertedField.push(key)
      insertedBind.push('?')
      insertedValue.push(params[key])
      updateField.push(` ${key} = ? `)
    }
  })

  return {
    insertedField,
    insertedBind,
    insertedValue,
    updateField
  }
}

export default connection => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (error, results) => {
          if (error) {
            reject(error)
          }
          resolve({ products: results })
        })
      })
    },
    getById: (id) => {
      return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE pro_id = ?`, [id], (error, results) => {
          if (error) {
            reject(error)
          }

          resolve({ product: results[0] })
        })
      })
    },
    create: (params) => {
      return new Promise((resolve, reject) => {
        const { insertedField, insertedBind, insertedValue } = getSqlFieldsValues(params)

        connection.query(`INSERT INTO ${table} (${insertedField.join(', ')}) VALUES(${insertedBind.join(', ')})`, insertedValue, (error, results) => {
          if (error) {
            reject(error)
          }

          resolve({ product: Object.assign({}, params, { pro_id: results.insertId }) })
        })
      })
    },
    update: (id, params) => {
      return new Promise((resolve, reject) => {
        const { updateField, insertedValue } = getSqlFieldsValues(params)

        connection.query(`UPDATE ${table} SET ${updateField.join(', ')} WHERE pro_id = ${id}`, insertedValue, (error, results) => {
          if (error) {
            reject(error)
          }

          resolve({
            product: Object.assign({}, params, { pro_id: id }),
            affectedRows: results.affectedRows
          })
        })
      })
    },
    remove: (id) => {
      return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM ${table} WHERE pro_id = ${id}`, (error, results) => {
          if (error) {
            reject(error)
          }

          resolve({ message: 'Produto removido com sucesso!', affectedRows: results.affectedRows })
        })
      })
    }
  }
}
