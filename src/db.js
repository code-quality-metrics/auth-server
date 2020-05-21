const mongoose = require('mongoose')

const dbUrl = 'mongodb://localhost:27017/auth'

module.exports = mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
