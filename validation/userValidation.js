const { Joi } = require('express-validation')

const managerValidation = {
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
            .required(),
        phone:Joi.string()
        .min(8)
        .max(10)
        .required()
    }),
}
module.exports = managerValidation