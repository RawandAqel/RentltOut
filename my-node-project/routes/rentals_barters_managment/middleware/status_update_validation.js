const { body, param, validationResult } = require('express-validator');

const validateRentalStatusUpdate = [
  param('rentalId').isInt().withMessage('Rental ID must be an integer'),
  body('status').isIn(['approved', 'returned']).withMessage('Status must be either "approved" or "returned"'),
  // Validate errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

const validateBarterStatusUpdate = [
  param('barterId').isInt().withMessage('Barter ID must be an integer'),
  body('status').isIn(['approved', 'returned']).withMessage('Status must be either "approved" or "returned"'),
// Validate errors
(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}
];

const validateProductAvailabilityUpdate = [
  param('productId').isInt().withMessage('Product ID must be an integer'),
  body('isAvailable').isBoolean().withMessage('isAvailable must be an 0 or 1'),
  // Validate errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];


// Export the middleware and validation rules
module.exports = {
  
  validateRentalStatusUpdate,
  validateBarterStatusUpdate,
  validateProductAvailabilityUpdate,
};
