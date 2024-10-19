const express = require('express');
const router = express.Router();
const rentalController = require('../controllers/update_rentalController');
const {validateRentalStatusUpdate} = require('../middleware/status_update_validation');
const {validateBarterStatusUpdate} = require('../middleware/status_update_validation');
const {validateProductAvailabilityUpdate} = require('../middleware/status_update_validation');


// Route to update rental status after owner approves/rejects
router.post('/update-rental-status/:rentalId/status', validateRentalStatusUpdate, rentalController.updateRentalStatus);

// Route to update barter status after owner approves/rejects
router.post('/update-barter-status/:barterId/status',validateBarterStatusUpdate, rentalController.updateBarterStatus);

router.post(
  '/change-product-availability-status/:productId/availability',validateProductAvailabilityUpdate, rentalController.changeProductAvailability 
);

module.exports = router;
