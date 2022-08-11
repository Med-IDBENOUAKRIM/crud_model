const Joi = require('joi');


exports.validateVariantInputs = async (req, res, next) => {
    try {
        const schema = Joi.object({
            sku: Joi.string().required().messages({
                'string.empty': `sku cannot be empty`,
                'any.required': `sku is required`,
            }),

            specification: Joi.string().required().messages({
                'string.empty': `specification cannot be empty`,
                'any.required': `specification is required`,
            }),

            price: Joi.number().required().messages({
                'any.required': 'variants is required',
            }),
        });
        await schema.validateAsync(req.body);
        next();
    } catch (error) {
        return res.status(500).json({ error: error.details[0].message })
    }
}