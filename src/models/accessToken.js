const mongoose = require('mongoose')
const crypto = require('crypto')

const { Schema } = mongoose

const schema = new mongoose.Schema({
  accountId: Schema.Types.ObjectId,
  token: 'string',
})

schema.pre('save', function preSave(next) {
  if (this.isNew) {
    this.token = crypto.randomBytes(16).toString('base64')
  }
  next()
})

const Account = mongoose.model('AccessToken', schema)

module.exports = Account
