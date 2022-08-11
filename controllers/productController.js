const ProductModel = require('../models/ProductModel');


exports.getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find();

        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json(error);
    }
}


exports.createProduct = async (req, res) => {
    try {
        const { reference, name, description, image, variants } = req.body;

        const new_product = {
            reference,
            name,
            description,
            image,
            variants
        };

        const product = await ProductModel.create(new_product);
        return res.status(201).json(product);

    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.deleteOneProduct = async (req, res) => {
    try {
        const { product_id } = req.params;

        const product = await ProductModel.findById(product_id);

        if (!product) {
            return res.status(401).json({ message: 'This product not found!' });
        }

        await product.remove();

        return res.status(200).json({
            message: "Product deleted successfully",
        });
    } catch (err) {
        return res.status(500).json(err);
    }
}


exports.updateOneProduct = async (req, res) => {
    try {
        const { product_id } = req.params;
        const productData = req.body;

        const product = await ProductModel.updateOne({ _id: product_id }, {
            ...productData
        });

        return res.status(201).json(product);

    } catch (err) {
        return res.status(500).json(err);
    }
}

exports.getVariantsOfProduct = async (req, res) => {
    try {
        const { product_id } = req.params;

        const product = await ProductModel.findById(product_id).populate('variants');

        if (!product) {
            return res.status(401).json({ message: 'This product not found!' });
        }
        return res.status(200).json(product.variants);

    } catch (err) {
        return res.status(500).json(err);
    }
}

exports.getVariantProduct = async (req, res) => {
    try {
        const { product_id, variant_id } = req.params;

        const product = await ProductModel.findById(product_id).populate('variants');

        if (!product) {
            return res.status(401).json({ message: 'This product not found!' });
        }

        const variant = product.variants.filter(item => item._id.toString() === variant_id);

        if (variant.length === 0) {
            return res.status(401).json({ message: 'This product has no variant!' });
        }

        return res.status(200).json(variant);

    } catch (err) {
        return res.status(500).json(err);
    }
}

exports.listOneProduct = async (req, res) => {
    try {
        const { product_id } = req.params;

        const product = await ProductModel.findById(product_id).populate('variants');

        if (!product) {
            return res.status(401).json({ message: 'This product not found!' });
        }

        return res.status(200).json(product);

    } catch (err) {
        return res.status(500).json(err);
    }
}