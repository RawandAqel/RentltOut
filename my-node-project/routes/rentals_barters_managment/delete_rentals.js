const express = require('express');
const router = express.Router();
const connection = require('../database/db_connection');

//delete renatal from data base
router.delete('/delate_rental/:id', (req, res) => {
    const { id } = req.params;

    const deleteQuery = `DELETE FROM rentals WHERE id = ?`;

    connection.query(deleteQuery, [id], (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Rental not found' });
        }
        res.json({ message: 'Rental deleted successfully' });
    });
});

router.delete('/delate_barter/:id', (req, res) => {
    const { id } = req.params;

    const deleteQuery = `DELETE FROM barters WHERE id = ?`;

    connection.query(deleteQuery, [id], (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Barter not found' });
        }
        res.json({ message: 'Barter deleted successfully' });
    });
});


module.exports = router;
