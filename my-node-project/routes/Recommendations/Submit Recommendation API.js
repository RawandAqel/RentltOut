
const express = require('express');
const router = express.Router();
const connection = require('../database/db_connection');

// Submit recommendation
router.post('/recommendation', (req, res) => {
    const { user_id, recommendation_text } = req.body;

    if (!user_id || !recommendation_text) {
        return res.status(400).json({ message: 'User ID and recommendation text are required.' });
    }

    const query = 'INSERT INTO recommendations (user_id, recommendation_text) VALUES (?, ?)';
    connection.query(query, [user_id, recommendation_text], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.json({ message: 'Recommendation submitted successfully.', recommendation_id: results.insertId });
    });
});

module.exports = router;
