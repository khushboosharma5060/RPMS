const { Joi } = require('express-validation')

const tenentValidation = {
    body: Joi.object({
        name: Joi.string()
            .min(3)
            .max(20)
            .required(),
        email: Joi.string()
            .min(1)
            .max(200)
            .required(),
        role: Joi.string()
            .min(1)
            .max(50)
            .required(),
       password: Joi.string()
       .min(1)
       .max(100)
    }),
}
module.exports = tenentValidation