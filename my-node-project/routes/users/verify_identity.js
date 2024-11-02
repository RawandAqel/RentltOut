const express = require('express');
const router = express.Router();
const db = require('../database/db_connection');
const crypto = require('crypto');
// Send the activation code to the user
router.post('/send-code', (req, res) => {
    const { user_id } = req.body;
    const code = crypto.randomInt(100000, 999999).toString(); // Generate a random 6-digit activation code

// Enter the code and expiration date into the database
    db.query('INSERT INTO verification_codes (user_id, code, expiration) VALUES (?, ?, NOW() + INTERVAL 10 MINUTE)', 
    [user_id, code], (err) => {
        if (err) return res.status(500).send('Database error'); 
        res.send(`Verification code sent to user ${user_id}`); 
    });
});

// Verify the sent activation code
router.post('/verify-code', (req, res) => {
    const { user_id, code } = req.body; 

   
    db.query('SELECT * FROM verification_codes WHERE user_id = ? AND code = ? AND expiration > NOW()', [user_id, code], (err, result) => {
        if (err || result.length === 0) return res.status(400).send('Invalid or expired code'); 

        db.query('UPDATE user_verifications SET verified_email = TRUE WHERE user_id = ?', [user_id], (err) => {
            if (err) return res.status(500).send('Verification failed'); 
            res.send('User verified successfully'); 
        });
    });
});

module.exports = router; 
