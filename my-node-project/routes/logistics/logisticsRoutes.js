const express = require('express');
const db = require('../database/db_connection');
const { sendNotification } = require('./emailService'); // تعديل هنا
const router = express.Router();

router.post('/logistics', (req, res) => {
  const { userId, pickupLocation, deliveryAddress, deliveryOption, status } = req.body;

  if (!userId || !deliveryOption) {
    return res.status(400).json({ error: 'userId and deliveryOption are required' });
  }

  const sql = 'INSERT INTO Logistics (userId, pickupLocation, deliveryAddress, deliveryOption, status) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [userId, pickupLocation, deliveryAddress, deliveryOption, status || 'pending'], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ error: 'Error inserting data' });
    } else {
      res.status(201).json({ id: result.insertId, userId, pickupLocation, deliveryAddress, deliveryOption, status: status || 'pending' });
    }
  });
});

router.get('/logistics', (req, res) => {
  db.query('SELECT * FROM Logistics', (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ error: 'Error fetching data' });
    }
    res.status(200).json(results);
  });
});

router.put('/logistics/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const getEmailSql = 'SELECT email FROM users WHERE id = (SELECT userId FROM Logistics WHERE id = ?)';
  db.query(getEmailSql, [id], (err, results) => {
    if (err || results.length === 0) {
      console.error('Error fetching user email:', err);
      return res.status(500).json({ error: 'Error fetching user email' });
    }

    const userEmail = results[0].email;

    const updateSql = 'UPDATE Logistics SET status = ? WHERE id = ?';
    db.query(updateSql, [status, id], (err) => {
      if (err) {
        console.error('Error updating status:', err);
        return res.status(500).json({ error: 'Error updating status' });
      }

      res.status(200).json({ message: 'Status updated successfully', id, status });

      if (status === 'in_progress') {
        sendNotification(userEmail, 'Your logistics order is now in progress.');
      } else if (status === 'completed') {
        sendNotification(userEmail, 'Your logistics order has been completed.');
      }
    });
  });
});

module.exports = router;
