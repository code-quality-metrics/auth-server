const { celebrate, Joi } = require('celebrate')

exports.token = celebrate({
  body: Joi.object({
    accountId: Joi.string().max(200).required(),
    accountSecret: Joi.string().required(),
  }),
})
