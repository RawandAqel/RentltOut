const express = require('express');
const router = express.Router();
const connection = require('../database/db_connection');

// Get Trending Items
router.get('/trending', (req, res) => {
    // Query to calculate the "trending score" for each item
    const query = `
        SELECT 
    items.id,
    items.title,
    items.description,
    items.price_per_day,
    items.is_available,
    users.username AS user_name,
    users.email AS user_email,
    location.city,
    location.state,
    location.country,
    COUNT(CASE WHEN activities.activity_type = 'view' THEN 1 END) AS views,
    COUNT(CASE WHEN activities.activity_type = 'like' THEN 1 END) AS likes,
    COUNT(CASE WHEN activities.activity_type = 'rent' THEN 1 END) AS rents,
    (COUNT(CASE WHEN activities.activity_type = 'view' THEN 1 END) +
    COUNT(CASE WHEN activities.activity_type = 'like' THEN 2 END) +
    COUNT(CASE WHEN activities.activity_type = 'rent' THEN 3 END)) AS trending_score
    FROM items
    JOIN activities ON items.id = activities.item_id
    JOIN users ON items.user_id = users.id
    left join gps_location_from ON gps_location_from.item_id = items.id
    JOIN location ON location.id = gps_location_from.location_id
    GROUP BY items.id
    ORDER BY trending_score DESC
    LIMIT 10;

    `;

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        res.json(results);
    });
});

module.exports = router;
