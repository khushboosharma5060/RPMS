const { Joi } = require('express-validation')

const managerValidation = {
    body: Joi.object({
        user_id: Joi.string()
            .min(3)
            .max(200)
            .required(),
        amount: Joi.number()
            .min(1)
            .max(500000)
            .required(),
        Transaction_Number1: Joi.string()
            .min(1)
            .max(50)
            .required(),
        Mode_of_payment: Joi.string()
            .min(1)
            .max(100)
            .required(),
        unit_id: Joi.string()
            .min(1)
            .max(200)
            .required(),
    }),
}
module.exports = managerValidation