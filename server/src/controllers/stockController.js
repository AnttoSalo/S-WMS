// Controller function to handle POST request for creating a new item
const pool = require('../db.js');
const test = async (req, res) => {
	res.status(200).json({test: 'success'});
};

const createItem = async (req, res) => {
	// Extract item data from the request body
	const {name, item, quantity, unitWeight, supplier, lastOrderDate} = req.body;

	// Define the SQL query to insert the item into the database
	const insertQuery = `
    INSERT INTO balances (name, item, quantity, unit_weight, supplier, last_order_date)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;

	try {
		// Execute the insert query with parameters
		const {rows} = await pool.query(insertQuery, [name, item, quantity, unitWeight, supplier, lastOrderDate]);

		// Respond with the newly created item
		res.status(201).json({success: true, data: rows[0]});
	} catch (error) {
		console.error('Error creating item:', error);
		res.status(500).json({success: false, message: 'Failed to create item'});
	}
};

// Export the controller function
module.exports = {
	createItem,
	test
};
