const { Joi } = require('express-validation')

const tenentValidation = {
    body: Joi.object({
        Name: Joi.string()
            .min(3)
            .max(40)
            .required(),
        Email: Joi.string()
            .min(1)
            .max(200)
            .required(),
        Role: Joi.string()
            .min(1)
            .max(100)
            .required(),
        password: Joi.string()
            .min(1)
            .max(100)
            .required(),
        created: Joi.string()
            .min(1)
            .max(200)
            .required()
    }),
}
module.exports = tenentValidation