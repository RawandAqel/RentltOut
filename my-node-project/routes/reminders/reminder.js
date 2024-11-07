const express = require('express');
const router = express.Router();
const db = require('../database/db_connection');

// Function to check for reminders and insert notifications
const checkReminders = () => {
    const queryRentals = `
        SELECT r.id, u.id AS user_id, r.end_date 
        FROM rentals r 
        JOIN users u ON r.renter_id = u.id 
        WHERE DATEDIFF(r.end_date, CURDATE()) = 1 
          AND r.status = 'approved';
    `;

    const queryBarters = `
        SELECT b.id, u.id AS user_id, b.end_date 
        FROM barters b 
        JOIN users u ON b.renter_id = u.id 
        WHERE DATEDIFF(b.end_date, CURDATE()) = 1 
          AND b.status = 'approved';
    `;

    // Check rentals
    db.query(queryRentals, (error, rentals) => {
        if (error) return console.error('Error checking rentals for reminders:', error);

        rentals.forEach(rental => {
            const message = `Reminder: Your rental is due tomorrow. Rental ID: ${rental.id}`;
            db.query(`INSERT INTO notifications (user_id, message, created_at) VALUES (?, ?, NOW())`, 
                [rental.user_id, message], 
                (error) => {
                    if (error) console.error('Error inserting rental notification:', error);
                });
        });
    });

    // Check barters
    db.query(queryBarters, (error, barters) => {
        if (error) return console.error('Error checking barters for reminders:', error);

        barters.forEach(barter => {
            const message = `Reminder: Your barter is due tomorrow. Barter ID: ${barter.id}`;
            db.query(`INSERT INTO notifications (user_id, message, created_at) VALUES (?, ?, NOW())`, 
                [barter.user_id, message], 
                (error) => {
                    if (error) console.error('Error inserting barter notification:', error);
                });
        });
    });
};

// Schedule reminders to check every 20 seconds
setInterval(checkReminders, 20000);

// Route to manually trigger reminders check
router.get('/test-reminders', (req, res) => {
    checkReminders();
    res.json({ message: 'Reminder check executed and notifications added if applicable.' });
});

// Route to retrieve notifications for a specific user
router.get('/notifications/:user_id', (req, res) => {
    const userId = req.params.user_id;
    db.query(`SELECT * FROM notifications WHERE user_id = ?`, [userId], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Failed to retrieve notifications' });
        }
        res.json(results);
    });
});

module.exports = router;
