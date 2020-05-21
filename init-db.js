require('./src/db')
const Account = require('./src/models/account')

async function init() {
  try {
    return await Account.create({
      accountId: '12345',
      accountSecret: 'Testing!',
    })
  } catch (e) {
    return Promise.reject(e)
  }
}

init()
  .then(() => {
    console.log('DB populated')
    process.exit()
  })
  .catch((error) => {
    console.error(error)
    process.exit(-1)
  })
