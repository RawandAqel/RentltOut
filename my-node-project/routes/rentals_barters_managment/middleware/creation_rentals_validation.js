const { body, validationResult } = require('express-validator');
const db = require('../../database/db_connection_promise'); 

// Validate input including checking product availability
const validateRental = [
  // Validate input fields
  body('item_id').isInt().withMessage('Item ID must be an integer'),
  body('renter_id').isInt().withMessage('Renter ID must be an integer'),
  body('start_date').isISO8601().withMessage('Start date must be a valid date'),
  body('end_date').isISO8601().withMessage('End date must be a valid date'),

  // Check product availability
  async (req, res, next) => {
    const { item_id } = req.body;
    try {
      const query = `SELECT is_available FROM items WHERE id = ?`;
      const [rows] = await db.query(query, [item_id]);
      
      // If the item is not found
      if (rows.length === 0) {
        return res.status(404).json({ message: 'Item not found' });
      }
      
      // If the item is not available
      if (!rows[0].is_available) {
        return res.status(400).json({ message: 'Item is not available' });
      }
      
      // The item is available, proceed
      next();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Validate errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];


const validateBarter = [
  // Validate input fields
  body('item_id').isInt().withMessage('Item ID must be an integer'),
  body('barter_item_id').isInt().withMessage('Barter item ID must be an integer'),
  body('renter_id').isInt().withMessage('Renter ID must be an integer'),
  body('start_date').isISO8601().withMessage('Start date must be a valid date'),
  body('end_date').isISO8601().withMessage('End date must be a valid date'),

  // Check product availability
  async (req, res, next) => {
    const { item_id } = req.body;
    const { barter_item_id } = req.body;
    try {
      const query = `SELECT is_available FROM items WHERE id = ?`;
      const [rows] = await db.query(query, [item_id]);
      
      // If the item is not found
      if (rows.length === 0) {
        return res.status(404).json({ message: 'Item not found' });
      }
      
      // If the item is not available
      if (!rows[0].is_available) {
        return res.status(400).json({ message: 'Item is not available' });
      }





      const query2 = `SELECT is_available FROM items WHERE id = ?`;
      const [rows2] = await db.query(query2, [barter_item_id]);
      
      // If the item is not found
      if (rows2.length === 0) {
        return res.status(404).json({ message: 'Barter item not found' });
      }
      
      // If the item is not available
      if (!rows2[0].is_available) {
        return res.status(400).json({ message: 'Barter item is not available' });
      }
      
      // The items is available, proceed
      next();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Validate errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];


module.exports = {
  validateRental,
  validateBarter
};
