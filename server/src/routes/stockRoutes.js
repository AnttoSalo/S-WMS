// stocRoutes.js
const express = require('express');
const router = express.Router();

// Import controllers for stock management
const stockController = require('../controllers/stockController');

// Define routes
router.post('/create-item', stockController.postStock);
// Add more routes for stock management as needed

module.exports = router;
