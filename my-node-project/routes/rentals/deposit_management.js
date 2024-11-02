const express = require('express');
const router = express.Router();
const db = require('../database/db_connection');
// Add a new security deposit
router.post('/add-deposit', (req, res) => {
    const { rental_id, deposit_amount } = req.body; 

   // Enter security deposit data into the database
    db.query('INSERT INTO rental_deposits (rental_id, deposit_amount) VALUES (?, ?)', [rental_id, deposit_amount], (err) => {
        if (err) return res.status(500).send('Database error');
        res.send('Deposit added successfully');
    });
});

// Update the security deposit status
router.put('/update-deposit', (req, res) => {
    const { id, status } = req.body; 

   
    db.query('UPDATE rental_deposits SET status = ? WHERE id = ?', [status, id], (err) => {
        if (err) return res.status(500).send('Database error'); 
        res.send('Deposit status updated successfully');
    });
});

module.exports = router; 
