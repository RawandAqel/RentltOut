
const express = require('express');
const router = express.Router();
const connection = require('../database/db_connection');

// Submit feedback
router.post('/feedback', (req, res) => {
    const { user_id, feedback_text } = req.body;

    if (!user_id || !feedback_text) {
        return res.status(400).json({ message: 'User ID and feedback text are required.' });
    }

    const query = 'INSERT INTO feedback (user_id, feedback_text) VALUES (?, ?)';
    connection.query(query, [user_id, feedback_text], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.json({ message: 'Feedback submitted successfully.', feedback_id: results.insertId });
    });
});

module.exports = router;
