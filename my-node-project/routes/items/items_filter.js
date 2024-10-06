// Existing imports and MySQL connection
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const connection = require('../database/db_connection');


// API to fetch filtered items
router.get('/items/filter', (req, res) => {
    const { flag, value } = req.query;

    // Validate input
    if (!flag || !value) {
        return res.status(400).json({ message: 'Both filter flag and value are required.' });
    }

    // Base query to fetch items with their details
    let query = `
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
        WHERE 1=1
    `;

    // Adding filters based on the flag
    switch (flag) {
        case 'item_name':
            query += ` AND items.title LIKE ?`;
            break;
        case 'user_name':
            query += ` AND users.username LIKE ?`;
            break;
        case 'user_email':
            query += ` AND users.email LIKE ?`;
            break;
        case 'location':
            query += ` AND location.city LIKE ? OR location.state LIKE ? OR location.country LIKE ?`;
            break;
        case 'city':
            query += ` AND location.city LIKE ?`;
            break;
        case 'country':
            query += ` AND location.country LIKE ?`;
            break;
        case 'available':
            query += ` AND items.is_available = ?`;
            break;
        default:
            return res.status(400).json({ message: 'Invalid filter flag.' });
    }

    // Format the value for the SQL query
    const queryParams = Array.isArray(value) ? value : [`%${value}%`];

    // If the filter is for availability, we expect a boolean (0 or 1)
    if (flag === 'available') {
        queryParams[0] = value === 'true' ? 1 : 0;
    }

    // Execute the query
    connection.query(query, queryParams, (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Internal server error.' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'No items found matching the criteria.' });
        }

        res.json({
            message: 'Filtered items retrieved successfully',
            items: results,
        });
    });
});

module.exports = router;
