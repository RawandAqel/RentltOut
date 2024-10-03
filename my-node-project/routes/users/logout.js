// routes/auth.js
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const connection = require('../database/db_connection'); // Import the MySQL connection

// Logout endpoint
router.post('/logout', (req, res) => {
    const { user_id } = req.body;

    // Validate input
    if (!user_id) {
        return res.status(400).json({ message: 'User ID is required.' });
    }

    // Query to clear the login_token in the database
    const query = 'UPDATE users SET login_token = NULL WHERE id = ?';
    connection.query(query, [user_id], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Internal server error.' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Send response
        res.json({
            message: 'Logout successful',
        });
    });
});

module.exports = router;
