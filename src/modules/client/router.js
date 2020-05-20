const express = require('express')
const validators = require('./validators')
const handlers = require('./handlers')

const router = express.Router()

router.route('/ping').get((req, res) => {
  res.send('ok')
})

router.route('/token').post(validators.token, handlers.token)

module.exports = router
