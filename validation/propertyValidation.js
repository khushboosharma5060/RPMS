const { Joi } = require('express-validation')

const propertyValidation = {
    body: Joi.object({
        name: Joi.string()
            .min(3)
            .max(20)
            .required(),
        city: Joi.string()
            .min(1)
            .max(2000)
            .required(),
        property_no: Joi.number()
            .min(1)
            .max(340)
            .required(),
        Adress: Joi.string()
            .min(1)
            .max(200)
            .required(),
        country: Joi.string()
            .min(1)
            .max(50)
            .required(),
        currency: Joi.string()
            .min(1)
            .max(60)
            .required(),
        Manager: Joi.string()
            .min(1)
            .max(20)
            .required(),
         country: Joi.string()   
         .min(1)
         .max(70)
         .required(),
    }),
}
module.exports = propertyValidation