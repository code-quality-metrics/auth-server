const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new mongoose.Schema({
  accountId: Schema.Types.ObjectId,
  accountSecret: 'string',
})
const Account = mongoose.model('AccessToken', schema)

module.exports = Account
