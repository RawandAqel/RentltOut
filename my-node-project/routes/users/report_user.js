const express = require('express');
const router = express.Router();
const db = require('../database/db_connection');
// Report a user
router.post('/report', (req, res) => {
    const { reported_user_id, reporter_user_id, reason, evidence_path } = req.body; 

    db.query('INSERT INTO reports (reported_user_id, reporter_user_id, reason, evidence_path) VALUES (?, ?, ?, ?)', 
    [reported_user_id, reporter_user_id, reason, evidence_path], (err) => {
        if (err) return res.status(500).send('Database error'); 
        res.send('Report submitted successfully'); 
    });
});

// Update the report status after review

router.post('/review-report', (req, res) => {
    const { report_id, action_taken, reviewer_id, notes } = req.body;

    db.query('INSERT INTO report_reviews (report_id, action_taken, reviewer_id, notes) VALUES (?, ?, ?, ?)', 
        [report_id, action_taken, reviewer_id, notes], (err) => {
            if (err) return res.status(500).send('Database error'); 
            res.send('Report review submitted successfully'); 
        });
});

module.exports = router; 
