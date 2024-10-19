const express = require('express');
const router = express.Router();
const itemController = require('../controllers/get_user_available_itemsController');

// Display products available for trade-in to the user
router.get('/available-barter-items/:user_id', itemController.getUserBarterItems);

module.exports = router;
