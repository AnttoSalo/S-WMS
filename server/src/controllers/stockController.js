// Controller function to handle POST request to create a new item
const postStock = async (req, res) => {
	const {name, quantity, price} = req.body;

	// Insert query to add a new item to the database
	const insertQuery = `
    INSERT INTO items (name, quantity, price)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

	try {
		// Execute the insert query with parameters
		const {rows} = await pool.query(insertQuery, [name, quantity, price]);

		// Respond with the newly created item
		res.status(201).json({success: true, data: rows[0]});
	} catch (error) {
		console.error('Error creating item:', error);
		res.status(500).json({success: false, message: 'Failed to create item'});
	}
};

module.exports = {
	postStock
};
