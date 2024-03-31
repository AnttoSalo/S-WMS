// stocRoutes.js
const express = require('express');
const router = express.Router();

// Import controllers for stock management
const stockController = require('../controllers/stockController');

// Define routes
router.get('/test', (req, res) => {
	console.log('Test route accessed'); // Add this console log
	stockController.test(req, res);
});
router.post('/create-item', stockController.createItem);
// Add more routes for stock management as needed

module.exports = router;
