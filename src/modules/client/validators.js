const { celebrate, Joi } = require('celebrate')

exports.token = celebrate({
  body: Joi.object({
    accountId: Joi.string().required(),
    accountSecret: Joi.string().required(),
  }),
})
