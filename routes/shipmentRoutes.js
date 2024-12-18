const express = require('express');
const router = express.Router();
const { Shipment } = require('../models/models');

// Create a Shipment
router.post('/', async (req, res) => {
    try {
        // todo
        console.log('new shipment to be created....')
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get All Shipments
router.get('/', async (req, res) => {
    try {
        const shipments = await Shipment.find();
        res.json(shipments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Shipment by ID
router.get('/:id', async (req, res) => {
    try {
        const shipment = await Shipment.findById(req.params.id);
        if (!shipment) return res.status(404).json({ message: 'Shipment not found' });
        res.json(shipment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete Product by ID
router.delete('/:id', async (req, res) => {
    // todo
    console.log('deleted');
});

module.exports = router;
