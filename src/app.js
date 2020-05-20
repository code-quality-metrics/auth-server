const ClientAPI = require('./modules/client/api');

(async () => {
  try {
    await ClientAPI.start()
    console.log('Server started')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()
