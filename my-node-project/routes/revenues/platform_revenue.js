const express = require('express');
const db = require('../database/db_connection_promise'); 
const router = express.Router();


//print platform revenue
router.get('/platformRevenues', async (req, res) => {
    const { month, year } = req.query;

    try {
        let query = `
            SELECT 
                SUM(r.ownerRevenue) AS totalPlatformRevenue
            FROM revenue r
        `;
        
        const params = []; 
        if (year) {
            query += ' WHERE YEAR(revenueDate) = ?';
            params.push(year);
        }

        if (month) {
            query += ' AND MONTH(revenueDate) = ?';
            params.push(month);
        }

        const [revenues] = await db.query(query, params);

        if (!revenues[0] || revenues[0].totalPlatformRevenue === null) {
            return res.status(404).json({ error: 'No revenues available for the platform.' });
        }
        
        res.json({
            totalPlatformRevenue: revenues[0].totalPlatformRevenue || 0,
            message: year && month 
                ? `Total revenues for the platform in ${month}/${year}`
                : year 
                ? `Total revenues for the platform in year ${year}`
                : `Total revenues for the platform`
        });
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ error: 'Failed to calculate platform revenues.', details: error.message });
    }
});

module.exports = router;
