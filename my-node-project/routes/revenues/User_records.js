const express = require('express');
const router = express.Router();
const connection = require('../database/db_connection');

//show all rentals and baters for specific user
router.get('/user_records/:user_id', (req, res) => {
    const { user_id } = req.params;

    const rentalsQuery = `SELECT * FROM rentals WHERE renter_id = ?`;
    
    const bartersQuery = `
        SELECT b.* 
        FROM barters b
        JOIN items i ON b.item_id = i.id
        WHERE b.renter_id = ? OR i.user_id = ?
    `;

    connection.query(rentalsQuery, [user_id], (rentalError, rentals) => {
        if (rentalError) {
            return res.status(500).json({ error: rentalError.message });
        }

        connection.query(bartersQuery, [user_id, user_id], (barterError, barters) => {
            if (barterError) {
                console.error('Database query error:', barterError); // قم بطباعة الخطأ للمعاينة
                return res.status(500).json({ error: barterError.message });
            }

            res.json({
                message: 'User transactions retrieved successfully',
                rentals: rentals,
                barters: barters
            });
        });
    });
});

module.exports = router;
