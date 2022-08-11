const Joi = require('joi');

// for create new product
exports.validateProductInputs = async (req, res, next) => {
    try {
        const schema = Joi.object({
            reference: Joi.string().required().messages({
                'string.empty': `reference cannot be empty`,
                'any.required': `reference is required`,
            }),
            name: Joi.string().required().messages({
                'string.empty': `name cannot be empty`,
                'any.required': `name is required`,
            }),
            description: Joi.string().required().messages({
                'string.empty': `description cannot be empty`,
                'any.required': `description is required`,
            }),
            image: Joi.string().required().messages({
                'any.required': 'image is required',
                'string.empty': `image cannot be empty`,
            }),
            variants: Joi.array().required(),
        });
        await schema.validateAsync(req.body);
        next();
    } catch (error) {
        return res.status(500).json({ error: error.details[0].message })
    }
}

// for update one product
exports.validateUpdateProductInputs = async (req, res, next) => {
    try {
        const schema = Joi.object({
            reference: Joi.string().optional().messages({
                'string.empty': `reference cannot be empty`,
            }),
            name: Joi.string().optional().messages({
                'string.empty': `name cannot be empty`,
            }),
            description: Joi.string().optional().messages({
                'string.empty': `description cannot be empty`,
            }),
            image: Joi.string().optional().messages({
                'string.empty': `image cannot be empty`,
            }),
            variants: Joi.array().optional(),
        });
        await schema.validateAsync(req.body);
        next();
    } catch (error) {
        return res.status(500).json({ error: error.details[0].message })
    }
}