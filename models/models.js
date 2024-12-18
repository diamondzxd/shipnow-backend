const mongoose = require('mongoose');
const { AddressSchema } = require('./AddressSchema');
const { ProductSchema } = require('./ProductSchema');
const { OrderSchema } = require('./OrderSchema');
const { ShipmentSchema } = require('./ShipmentSchema');

const Address = mongoose.model('Address', AddressSchema);

const Product = mongoose.model('Product', ProductSchema);

const Order = mongoose.model('Order', OrderSchema);

const Shipment = mongoose.model('Shipment', ShipmentSchema);

module.exports = { Address, Product, Order, Shipment };