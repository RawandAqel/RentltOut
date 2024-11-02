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

router.put('/review-report', (req, res) => {
    const { report_id, action_taken, reviewer_id, notes } = req.body; 

    db.query('UPDATE report_reviews SET action_taken = ?, reviewer_id = ?, notes = ? WHERE report_id = ?', 
    [action_taken, reviewer_id, notes, report_id], (err) => {
        if (err) return res.status(500).send('Database error'); 
        res.send('Report reviewed successfully'); 
    });
});

module.exports = router; 
