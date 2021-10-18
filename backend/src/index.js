require('dotenv').config()
const express = require('express')
const registry = require('./controllers/OperatorRegistry')

require('./database')

const server = express()

server.use(express.json())

server.get('/registration', registry.index)

server.listen(3000, () => {
  console.log('Server Online')
})