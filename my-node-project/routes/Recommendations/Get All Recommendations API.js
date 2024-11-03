const express = require('express');
const router = express.Router();
const connection = require('../database/db_connection');

// Get all recommendations
router.get('/Getrecommendations', (req, res) => {
    const query = `
        SELECT recommendations.recommendation_id, recommendations.recommendation_text, recommendations.created_at, 
               users.username, users.email 
        FROM recommendations 
        JOIN users ON recommendations.user_id = users.id
        ORDER BY recommendations.created_at DESC`;

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.json(results);
    });
});

module.exports = router;
