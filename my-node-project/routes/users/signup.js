const bcrypt = require('bcrypt');
const express = require('express');
const mysql = require('mysql2');
const router = express.Router();
const connection = require('../database/db_connection'); // Import the MySQL connection

// Signup route for clients
router.post('/signup', async (req, res) => {
    const { username, email, password, phone_number, address } = req.body;

    try {
        // Insert the user into the 'users' table
        const userQuery = 'INSERT INTO users (username, email, password, role, created_at) VALUES (?, ?, ?, ?, NOW())';
        connection.execute(userQuery, [username, email, password, 'client'], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            const userId = result.insertId;

            // Insert into the 'client' table
            const clientQuery = 'INSERT INTO client (user_id, phone_number, address) VALUES (?, ?, ?)';
            connection.execute(clientQuery, [userId, phone_number, address], (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: 'Internal server error' });
                }

                res.status(201).json({ message: 'Signup successful', user_id: userId });
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
