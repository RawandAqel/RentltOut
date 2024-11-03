const express = require('express');
const router = express.Router();
const connection = require('../database/db_connection');

// Get User Activity
router.get('/Getactivity', (req, res) => {
    const { user_id } = req.query;

    // Query to retrieve user activities
    let query = 'SELECT * FROM activities';
    const params = [];

    if (user_id) {
        query += ' WHERE user_id = ?';
        params.push(user_id);
    }

    connection.query(query, params, (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.json(results);
    });
});

module.exports = router;
