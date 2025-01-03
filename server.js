// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

// Load environment variables
dotenv.config();

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection error:', error));


// Import routes
const { addressRoutes, productRoutes, orderRoutes, shipmentRoutes } = require('./routes/router')

// Set up routes
app.use('/api/addresses', addressRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/shipments', shipmentRoutes);

// Health check endpoint
app.get('/healthz', (req, res) => {
    res.status(200).json(
        { 'status': 'running' }
    )
})

// Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Graceful shutdown
process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    console.log('Closing http server.');
    server.close(() => {
        console.log('Http server closed.');
        mongoose.connection.close().then(console.log('MongoDB connection closed.'));
    });
});