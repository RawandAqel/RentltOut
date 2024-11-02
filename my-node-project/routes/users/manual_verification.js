// routes/users/manual_verification.js
const express = require('express');
const router = express.Router();
const db = require('../database/db_connection');
// Add manual verification
router.post('/add-manual-verification', (req, res) => {
    const { user_id, reviewer_id, review_notes } = req.body;

    db.query(
        'INSERT INTO manual_verifications (user_id, reviewer_id, review_notes) VALUES (?, ?, ?)', 
        [user_id, reviewer_id, review_notes], 
        (err) => {
            if (err) return res.status(500).send('Database error');
            res.send('Manual verification added successfully');
        }
    );
});

//Display manual verification details
router.get('/manual-verification/:user_id', (req, res) => {
    const { user_id } = req.params;

    db.query(
        'SELECT * FROM manual_verifications WHERE user_id = ?', 
        [user_id], 
        (err, results) => {
            if (err) return res.status(500).send('Database error');
            res.json(results);
        }
    );
});

// Update the status of manual verification
router.put('/update-verification-status', (req, res) => {
    const { id, status } = req.body;

    db.query(
        'UPDATE manual_verifications SET status = ? WHERE id = ?', 
        [status, id], 
        (err) => {
            if (err) return res.status(500).send('Database error');
            res.send('Manual verification status updated successfully');
        }
    );
});

module.exports = router;
