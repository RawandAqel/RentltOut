const express = require('express');
const router = express.Router();
const connection = require('../database/db_connection');

// Get all feedback
router.get('/GetFeedback', (req, res) => {
    const query = `
        SELECT feedback.feedback_id, feedback.feedback_text, feedback.created_at, 
               users.username, users.email 
        FROM feedback 
        JOIN users ON feedback.user_id = users.id
        ORDER BY feedback.created_at DESC`;

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.json(results);
    });
});

module.exports = router;
