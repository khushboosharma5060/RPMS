const { Joi } = require('express-validation')

const unitValidation = {
    body: Joi.object({
        name: Joi.string()
            .min(3)
            .max(50)
            .required(),
        block_number: Joi.string()
            .min(1)
            .max(5456)
            .required(),
        user: Joi.string()
            .min(1)
            .max(300)
            .required(),
        unit_number: Joi.number()
            .min(1)
            .max(5670)
            .required(),
        property: Joi.string()
            .min(1)
            .max(100)
            .required(),
        status: Joi.string()
            .min(3)
            .max(504)
            .required(),
        rentel_amount: Joi.number()
            .min(1)
            .max(5675)
            .required(),
        startDate: Joi.string()
            .min(1)
            .max(7576)
            .required(),
        endDate: Joi.string()
            .min(1)
            .max(8675)
            .required(),
        status: Joi.string()
            .min(1)
            .max(568)
            .required(),
        created_by: Joi.string()
            .min(1)
            .max(200)
            .required(),
        updated_by: Joi.string()
            .min(1)
            .max(300)
            .required(),
        unit_detals: Joi.object()
            .min(1)
            .max(805443)
            .required(),
        email: Joi.string()
            .min(1)
            .max(400)
            .required()
    }),
}
module.exports = unitValidation