const { Pool, Client } = require('pg')
const config = require('./../config/database')

const client = new Client(config)

client.connect().then(() => {
  console.log('Connected to database')
}).catch((err) => {
  console.log('Failed to connect to database', err)
  process.exit(1)
})

module.exports = client