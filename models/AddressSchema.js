const mongoose = require('mongoose');

// Address Schema
const AddressSchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 50 },
    address: { type: String, required: true },
    country: { type: String, required: true, maxlength: 30 },
    state: { type: String, required: true, maxlength: 30 },
    city: { type: String, required: true, maxlength: 30 },
    pincode: { type: Number, required: true },
    phone: { type: String, required: true, maxlength: 10 },
    email: { type: String, required: true, match: /.+\@.+\..+/ },
    is_saved: { type: Boolean, default: false },
}, { timestamps: true });

const Address = mongoose.model('Address', AddressSchema);

exports.Address = Address;