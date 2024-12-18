const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create an Order
router.post('/', async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get All Orders (populate pickup, delivery, and product)
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find()
            .populate('pickup')
            .populate('delivery')
            .populate('product');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Order by ID (populate pickup, delivery, and product)
router.get('/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
            .populate('pickup')
            .populate('delivery')
            .populate('product');
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update Order by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete Order by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        res.json({ message: 'Order deleted', deletedOrder });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
