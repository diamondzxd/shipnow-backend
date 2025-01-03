const mongoose = require('mongoose');

// Order Schema
const OrderSchema = new mongoose.Schema({
    pickup: { type: mongoose.Schema.Types.ObjectId, ref: 'Address', required: true },
    delivery: { type: mongoose.Schema.Types.ObjectId, ref: 'Address', required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    payment_mode: { type: String, required: true, maxlength: 40 },
    amount: { type: Number, required: true },
    datetime: { type: Date, default: Date.now },
    is_pending: { type: Boolean, default: true }
}, { timestamps: true });
exports.OrderSchema = OrderSchema;