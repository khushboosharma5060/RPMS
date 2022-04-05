const { Joi } = require('express-validation')

const leaseValidation = {
    body: Joi.object({
        unit_id: Joi.string()
            .min(1)
            .max(5000)
            .required(),
        user_id: Joi.string()
            .min(1)
            .max(200)
            .required(),
        startDate: Joi.string()
            .min(1)
            .max(7676)
            .required(),
        endDate: Joi.string()
            .min(1)
            .max(7678)
            .required(),
        status: Joi.string()
            .min(1)
            .max(50)
            .required(),
        created: Joi.string()
            .min(1)
            .max(100)
            .required(),
        created_by: Joi.string()
            .min(8)
            .max(10)
            .required(),
        updated: Joi.string()
            .min(1)
            .max(100)
            .required(),
        updated_by: Joi.string()
            .min(1)
            .max(100)
            .required(),
    }),
}
module.exports = leaseValidation