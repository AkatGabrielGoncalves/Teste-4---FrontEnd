require('dotenv').config()
const express = require('express')
const cors = require('cors')
const registry = require('./controllers/OperatorRegistry')

require('./database')

const server = express()

server.use(express.json())
server.use(cors('*'))

server.get('/registration', registry.index)

server.listen(3000, () => {
  console.log('Server Online')
})