const ClientAPI = require('./modules/client/api')
const ManagerAPI = require('./modules/manager/api')
require('./db');

(async () => {
  try {
    await ClientAPI.start()
    await ManagerAPI.start()
    console.log('Server started')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()
