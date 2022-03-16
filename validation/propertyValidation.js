const { Joi } = require('express-validation')

const propertyValidation = {
    body: Joi.object({
        name: Joi.string()
            .min(3)
            .max(20)
            .required(),
        city: Joi.string()
            .min(1)
            .max(20)
            .required(),
        property_no: Joi.number()
            .min(1)
            .max(10)
            .required(),
        Adress: Joi.string()
            .min(1)
            .max(50)
            .required(),
        country: Joi.string()
            .min(1)
            .max(10)
            .required(),
        currency: Joi.string()
            .min(1)
            .max(10)
            .required(),
        Manager: Joi.string()
            .min(1)
            .max(20)
            .required(),
    }),
}
module.exports = propertyValidation