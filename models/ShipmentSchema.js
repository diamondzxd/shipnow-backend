const mongoose = require('mongoose');

// Shipment Schema
const ShipmentSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    awb: { type: String, required: true, maxlength: 30 },
    courier: { type: String, required: true, maxlength: 40 },
    pdf: { type: String } // Use a string to store file path or URL to the file
}, { timestamps: true });

const Shipment = mongoose.model('Shipment', ShipmentSchema);

exports.Shipment = Shipment;