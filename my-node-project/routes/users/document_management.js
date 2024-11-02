// routes/users/document_management.js
const express = require('express');
const router = express.Router();
const db = require('../database/db_connection');
// Upload a document to the user
router.post('/upload-document', (req, res) => {
    const { user_id, document_type, document_path } = req.body;

    db.query(
        'INSERT INTO user_documents (user_id, document_type, document_path) VALUES (?, ?, ?)', 
        [user_id, document_type, document_path], 
        (err) => {
            if (err) return res.status(500).send('Database error');
            res.send('Document uploaded successfully');
        }
    );
});

// Display user documentation
router.get('/user-documents/:user_id', (req, res) => {
    const { user_id } = req.params;

    db.query(
        'SELECT * FROM user_documents WHERE user_id = ?', 
        [user_id], 
        (err, results) => {
            if (err) return res.status(500).send('Database error');
            res.json(results);
        }
    );
});

// Update document status (approval/rejection)
router.put('/update-document-status', (req, res) => {
    const { id, verified_status } = req.body;

    db.query(
        'UPDATE user_documents SET verified_status = ? WHERE id = ?', 
        [verified_status, id], 
        (err) => {
            if (err) return res.status(500).send('Database error');
            res.send('Document status updated successfully');
        }
    );
});

module.exports = router;
