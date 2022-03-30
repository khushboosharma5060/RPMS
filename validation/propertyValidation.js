const { Joi } = require('express-validation')

const propertyValidation = {
    body: Joi.object({
        name: Joi.string()
            .min(3)
            .max(40)
            .required(),
        city: Joi.string()
            .min(1)
            .max(2000)
            .required(),
        property_no: Joi.string()
            .min(1)
            .max(340)
            .required(),
        Address: Joi.string()
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
            .max(200)
            .required(),
        Lattitude: Joi.string()
            .min(1)
            .max(150)
            .required(),
        Longitude: Joi.string()
            .min(1)
            .max(150)
            .required(),
        updated_by: Joi.string()
            .min(1)
            .max(200)
            .required(),
        created_by: Joi.string()
            .min(1)
            .max(100)
            .required()
    }),
}
module.exports = propertyValidation