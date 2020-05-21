const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const compression = require('compression')
const morgan = require('morgan')
const router = require('./router')

class ManagerAPI {
  constructor() {
    this.app = express()
  }

  config() {
    this.app.use(morgan('combined'))
    this.app.use(helmet())
    this.app.use(cors())
    this.app.use(compression())
    this.app.use(bodyParser.json())
    this.app.use('/auth', router)
    this.app.get('*', (req, res) => res.send(404))
  }

  async start() {
    this.config()
    return new Promise((resolve, reject) => {
      this.app
        .listen('4040', '0.0.0.0', () => {
          console.log('Manager API listening in port 4040')
          resolve()
        })
        .on('error', (error) => reject(error))
    })
  }
}

module.exports = new ManagerAPI()
