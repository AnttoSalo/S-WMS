const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const {Pool} = require('pg'); // Import the PostgreSQL Pool from 'pg'
const routes = require('./routes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

// Connect to PostgreSQL
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'swms',
	password: 'admin',
	port: 5432
});

// Test the PostgreSQL connection
pool.query('SELECT NOW()', (err, res) => {
	if (err) {
		console.error('Error connecting to PostgreSQL:', err.stack);
	} else {
		console.log('Connected to PostgreSQL on', res.rows[0].now);
	}
});

// Routes
app.use('/api', routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
