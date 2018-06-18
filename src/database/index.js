import mysql from 'mysql'

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_DATABASE,
  database: process.env.DB_PASSWORD
})

export default connection
