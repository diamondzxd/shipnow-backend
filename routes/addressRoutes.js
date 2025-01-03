const express = require('express');
const router = express.Router();
const { Address } = require('../models/models');

// Create an Address
router.post('/', async (req, res) => {
    try {
        const newAddress = new Address(req.body);
        const savedAddress = await newAddress.save();
        res.status(201).json(savedAddress);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get All Addresses
router.get('/', async (req, res) => {
    try {
        const addresses = await Address.find();
        res.json(addresses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Address by ID
router.get('/:id', async (req, res) => {
    try {
        const address = await Address.findById(req.params.id);
        if (!address) return res.status(404).json({ message: 'Address not found' });
        res.json(address);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update Address by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedAddress = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedAddress);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete Address by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedAddress = await Address.findByIdAndDelete(req.params.id);
        res.json({ message: 'Address deleted', deletedAddress });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
