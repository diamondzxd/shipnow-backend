const mongoose = require('mongoose');

// Product Schema
const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 30 },
    price: { type: Number, required: true },
    sku: { type: String, required: true, maxlength: 20 },
    hsn: { type: String, required: true, maxlength: 20 },
    weight: { type: mongoose.Types.Decimal128, required: true },
    length: { type: Number, required: true },
    breadth: { type: Number, required: true },
    height: { type: Number, required: true },
    is_saved: { type: Boolean, default: false }
});
exports.ProductSchema = ProductSchema;