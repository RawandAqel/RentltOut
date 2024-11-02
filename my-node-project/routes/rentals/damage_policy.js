// routes/rentals/damage_policy.js
const express = require('express');
const router = express.Router();
const db = require('../database/db_connection');
// Add a new damage policy
router.post('/add-damage-policy', (req, res) => {
    const { description, minor_damage_fee, major_damage_fee } = req.body;

    db.query(
        'INSERT INTO damage_policies (description, minor_damage_fee, major_damage_fee) VALUES (?, ?, ?)', 
        [description, minor_damage_fee, major_damage_fee], 
        (err) => {
            if (err) return res.status(500).send('Database error');
            res.send('Damage policy added successfully');
        }
    );
});
// Show all damage policies

router.get('/damage-policies', (req, res) => {
    db.query('SELECT * FROM damage_policies', (err, results) => {
        if (err) return res.status(500).send('Database error');
        res.json(results);
    });
});

// Update corruption policy details
router.put('/update-damage-policy', (req, res) => {
    const { policy_id, description, minor_damage_fee, major_damage_fee } = req.body;

    db.query(
        'UPDATE damage_policies SET description = ?, minor_damage_fee = ?, major_damage_fee = ? WHERE policy_id = ?', 
        [description, minor_damage_fee, major_damage_fee, policy_id], 
        (err) => {
            if (err) return res.status(500).send('Database error');
            res.send('Damage policy updated successfully');
        }
    );
});

module.exports = router;
