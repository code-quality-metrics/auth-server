exports.token = (req, res) => {
  const { accountId, accountSecret } = req.body
  if (accountId && accountSecret) {
    res.send({ accessToken: '123' })
    return
  }
  res.send(400)
}
