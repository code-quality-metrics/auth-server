const mongoose = require('mongoose')

const schema = new mongoose.Schema({ accountId: 'string', accountSecret: 'string' })
const Account = mongoose.model('Account', schema)

module.exports = Account
