const { Schema, model } = require('mongoose');


const VariantSchema = new Schema({
    sku: {
        type: String,
        required: true
    },
    specification: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = model('Variant', VariantSchema);