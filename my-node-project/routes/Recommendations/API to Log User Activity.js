const express = require('express');
const router = express.Router();
const connection = require('../database/db_connection');



// Log User Activity
router.post('/LogActivity', (req, res) => {
    const { user_id, item_id, activity_type } = req.body;

    // Validate input
    if (!user_id || !item_id || !activity_type) {
        return res.status(400).json({ message: 'User ID, Item ID, and Activity Type are required.' });
    }

    // Insert activity into the activities table
    const query = `
        INSERT INTO activities (user_id, item_id, activity_type)
        VALUES (?, ?, ?)
    `;
    connection.query(query, [user_id, item_id, activity_type], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.status(201).json({ message: 'Activity logged successfully.' });
    });
});

module.exports = router;
