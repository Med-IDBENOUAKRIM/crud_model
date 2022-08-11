const VariantModel = require("../models/VariantModel");


exports.createNewVariant = async (req, res) => {
    try {
        const { sku, specification, price } = req.body;
        const new_variant = {
            sku,
            specification,
            price
        };

        const variant = await VariantModel.create(new_variant);
        return res.status(201).json(variant);
    } catch (err) {
        return res.status(500).json(err);
    }
}

