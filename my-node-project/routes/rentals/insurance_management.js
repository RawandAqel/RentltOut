const express = require('express');
const router = express.Router();
const db = require('../database/db_connection');
// Add a new insurance policy
router.post('/add-insurance', (req, res) => {
    const { rental_id, insurance_fee, policy_details } = req.body; 

    db.query('INSERT INTO rental_insurance (rental_id, insurance_fee, policy_details) VALUES (?, ?, ?)', 
    [rental_id, insurance_fee, policy_details], (err) => {
        if (err) return res.status(500).send('Database error'); 
        res.send('Insurance added successfully'); 
    });
});

// Update the insurance policy status
router.put('/update-insurance', (req, res) => {
    const { id, insurance_status } = req.body; 

  
    db.query('UPDATE rental_insurance SET insurance_status = ? WHERE id = ?', [insurance_status, id], (err) => {
        if (err) return res.status(500).send('Database error');
        res.send('Insurance status updated successfully'); 
    });
});

module.exports = router; 
