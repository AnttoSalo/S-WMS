// index.js
const express = require('express');
const router = express.Router();

// Import route files
const stockRoutes = require('./stockRoutes');
// Import other route files as needed

// Combine route files
router.use('/stock', stockRoutes);
// Add other routes as needed

module.exports = router;
