







const express = require('express');
const router = express.Router();
const connection = require('../database/db_connection');

router.post('/update_rentals_table/:id', (req, res) => {
    const { id } = req.params;
    const fields = req.body; //columns we want to update

    
    const updates = Object.keys(fields).map(field => `${field} = ?`).join(', ');
    const values = Object.values(fields);

    const updateQuery = `UPDATE rentals SET ${updates} WHERE id = ?`;
    values.push(id); 

    
    connection.query(updateQuery, values, (error) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        
        const selectQuery = `SELECT * FROM rentals WHERE id = ?`;
        connection.query(selectQuery, [id], (error, results) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            }
            res.json({ message: 'Rental updated successfully', rental: results[0] });
        });
    });
});


router.post('/update_barters_table/:id', (req, res) => {
    const { id } = req.params;
    const fields = req.body; //columns we want to update

    const updates = Object.keys(fields).map(field => `${field} = ?`).join(', ');
    const values = Object.values(fields);

    const updateQuery = `UPDATE barters SET ${updates} WHERE id = ?`;
    values.push(id); 

    connection.query(updateQuery, values, (error) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        
       
        const selectQuery = `SELECT * FROM barters WHERE id = ?`;
        connection.query(selectQuery, [id], (error, results) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            }
            res.json({ message: 'Barter updated successfully', barter: results[0] });
        });
    });
});

module.exports = router;
