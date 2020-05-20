const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const compression = require('compression')
const router = require('./router')

class ClientAPI {
  constructor() {
    this.app = express()
  }

  config() {
    this.app.use(helmet())
    this.app.use(cors())
    this.app.use(compression())
    this.app.use(bodyParser.json())
    this.app.use('/client/auth', router)
    this.app.get('*', (req, res) => res.send(404))
  }

  async start() {
    this.config()
    return new Promise((resolve, reject) => {
      this.app
        .listen('3030', '0.0.0.0', () => {
          console.log('Client API listening in port 3030')
          resolve()
        })
        .on('error', (error) => reject(error))
    })
  }
}

module.exports = new ClientAPI()
