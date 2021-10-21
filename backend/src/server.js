const envFile = process.env.NODE_ENV ? `.env.prod` : ".env.dev"
require('dotenv').config({ path: envFile })
const serverless = require('serverless-http')
const express = require('express')
const cors = require('cors')
const registry = require('./controllers/operatorRegistryController')

require('./database/connect')

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(cors('*'))

server.get('/registration', registry.index)

server.listen(3000, () => {
  console.log('Server Online')
})

exports.handler = serverless(server)