const fs = require('fs')
const path = require('path')

const envFile = path.join(path.resolve(__dirname), '../.env')
const envFileExample = path.join(path.resolve(__dirname), '../.env.example')

if (!fs.existsSync(envFile)) {
  fs.copyFileSync(envFileExample, envFile)
}
