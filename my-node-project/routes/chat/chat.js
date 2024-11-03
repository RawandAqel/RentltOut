const express = require('express');
const mysql = require('mysql2');
const router = express.Router();
const connection = require('../database/db_connection'); // تأكد من تحديث المسار المناسب

// إرسال رسالة
router.post('/send', (req, res) => {
    const { sender_id, receiver_id, message } = req.body;

    const insertQuery = 'INSERT INTO messages (sender_id, receiver_id, message) VALUES (?, ?, ?)';
    
    connection.execute(insertQuery, [sender_id, receiver_id, message], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error saving message' });
        }
        res.status(201).json({ message: 'Message sent successfully', message_id: results.insertId });
    });
});

// استرجاع الرسائل
router.get('/history/:userId', (req, res) => {
    const userId = req.params.userId;

    const selectQuery = `
        SELECT * FROM messages
        WHERE sender_id = ? OR receiver_id = ?
        ORDER BY sent_at ASC
    `;

    connection.execute(selectQuery, [userId, userId], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error fetching messages' });
        }
        res.status(200).json(results);
    });
});

module.exports = router;
