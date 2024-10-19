const express = require('express');
const router = express.Router();
const rentalController = require('../controllers/creation_rentalsController');
const { validateRental } = require('../middleware/creation_rentals_validation');
const { validateBarter } = require('../middleware/creation_rentals_validation');

// Create a rental
router.put('/create-rental', validateRental, rentalController.createRental);

// Create a barter
router.put('/create-barter', validateBarter, rentalController.createBarter);

module.exports = router;
