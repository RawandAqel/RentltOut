const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const connection = require('../database/db_connection');


// API to fetch all items with their details, publisher, location, and category
router.get('/get_all_items', (req, res) => {
    // Query to fetch all items along with their publisher info, location, and category
    const query = `
        SELECT 
            items.id AS item_id,
            items.title,
            items.description,
            items.price_per_day,
            items.is_available,
            items.created_at AS item_created_at,
            users.username AS publisher_name,
            users.email AS publisher_email,
            location.city AS location_city,
            location.state AS location_state,
            location.country AS location_country,
            location.postal_code AS location_postal_code,
            category.name AS category_name
        FROM 
            items
        JOIN users ON items.user_id = users.id
        LEFT JOIN GPS_location_from ON items.id = GPS_location_from.item_id
        LEFT JOIN location ON GPS_location_from.location_id = location.id
        LEFT JOIN category_items ON items.id = category_items.items_id
        LEFT JOIN category ON category_items.category_id = category.id
    `;

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Internal server error.' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'No items found.' });
        }

        res.json({
            message: 'Items retrieved successfully',
            items: results,
        });
    });
});

module.exports = router;
