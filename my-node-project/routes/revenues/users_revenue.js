const express = require('express');
const router = express.Router();
const connection = require('../database/db_connection_promise'); // Import the MySQL connection

router.get('/users/:userId/revenues', async (req, res) => {
    const userId = req.params.userId;
    const { month, year } = req.query;

    try {
        let query = `
            SELECT 
                SUM(r.ownerRevenue) AS totalOwnerRevenue 
            FROM revenue r
            JOIN rentals rn ON r.rentalID = rn.id
            JOIN items it ON rn.item_id = it.id
            WHERE it.user_id = ?
        `;
        
        const params = [userId];

        if (year) {
            query += ' AND YEAR(revenueDate) = ?';
            params.push(year);
        }

        if (month) {
            query += ' AND MONTH(revenueDate) = ?';
            params.push(month);
        }

        // استخدم pool لعمل الاستعلام
        const [revenues] = await connection.query(query, params);

        if (!revenues[0] || !revenues[0].totalOwnerRevenue) {
            return res.status(404).json({ error: 'User not found or no revenues available.' });
        }
        
        res.json({
            userId,
            totalOwnerRevenue: revenues[0].totalOwnerRevenue || 0,
            message: month && year 
                ? `Revenues for user with ID ${userId} in month ${month}/${year}`
                : year 
                ? `Revenues for user with ID ${userId} in year ${year}`
                : `Total revenues for user with ID ${userId}`
        });
    } catch (error) {
        console.error("Database error:", error); 
        res.status(500).json({ error: 'Failed to calculate user revenues.', details: error.message });
    }
});

module.exports = router;
