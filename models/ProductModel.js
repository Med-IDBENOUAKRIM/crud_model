const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    reference: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    variants: [
        {
            type: Schema.Types.ObjectId,
            ref: "Variant",
        },
    ]
}, { timestamps: true });

module.exports = model('Product', ProductSchema);