CREATE TABLE balances (
    id SERIAL PRIMARY KEY,
    name VARCHAR(70) NOT NULL,
    item VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    unit_weight FLOAT NOT NULL,
    supplier VARCHAR(100) NOT NULL,
    last_order_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
