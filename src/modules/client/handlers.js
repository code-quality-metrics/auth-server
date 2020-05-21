const Account = require('../../models/account')
const AccessToken = require('../../models/accessToken')

exports.token = async (req, res) => {
  const { accountId, accountSecret } = req.body

  const account = await Account.findOne({ accountId })

  if (!account || !account.compareSecrets(accountSecret)) {
    res.send(400)
    return
  }

  // Remove all other sessions
  await AccessToken.deleteMany({ accountId: account.id })

  const accessToken = await AccessToken.create({ accountId: account.id })
  res.send({ accessToken: accessToken.token })
}
