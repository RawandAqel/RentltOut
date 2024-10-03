// routes/auth.js
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');

// Create a MySQL connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Login endpoint
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    // Query to find the user
    const query = 'SELECT * FROM users WHERE email = ?';
    connection.query(query, [email], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Internal server error.' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Email or password is incorrect.' });
        }

        const user = results[0];

        // Check if the password is correct (assuming you store hashed passwords)
        if (user.password !== password) {
            return res.status(401).json({ message: 'Email or password is incorrect.' });
        }

        // Generate token
        const token = jwt.sign({ id: user.user_id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1h', // Token expiration time
        });

        // Send response
        res.json({
            message: 'Login successful',
            token,
            user_id: user.id,
            role: user.role, // Send the user role
        });
    });
});

module.exports = router;
