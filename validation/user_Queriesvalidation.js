const { Joi } = require('express-validation')

const tenentValidation = {
    body: Joi.object({
        title: Joi.string()
            .min(3)
            .max(100)
            .required(),
        description: Joi.string()
            .min(1)
            .max(300)
            .required(),
        description: Joi.string()
            .min(1)
            .max(400)
            .required(),
        attachment: Joi.string()
            .min(1)
            .max(1000)
            .required(),
        status: Joi.string()
            .min(1)
            .max(500)
            .required(),
    }),
}
module.exports = tenentValidation