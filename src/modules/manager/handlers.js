const AccessToken = require('../../models/accessToken')
const Account = require('../../models/account')

exports.token = async (req, res) => {
  const { accountId, token } = req.body

  const account = await Account.findOne({ accountId })

  const accessToken = await AccessToken.findOne({ accountId: account.id, token })

  if (!accessToken) {
    res.send({ isValid: false })
    return
  }
  res.send({ isValid: true })
}
