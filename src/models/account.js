const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const saltRounds = 10

const schema = new mongoose.Schema({
  accountId: 'string',
  accountSecret: 'string',
})

schema.pre('save', async function preSave(next) {
  if (this.isModified('accountSecret')) {
    this.accountSecret = await bcrypt.hash(this.accountSecret, saltRounds)
  }
  return next()
})

schema.methods.compareSecrets = async function compareSecrets(secret) {
  return bcrypt.compare(secret, this.accountSecret)
}

const Account = mongoose.model('Account', schema)

module.exports = Account
