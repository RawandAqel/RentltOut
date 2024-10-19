const rentalService = require('../services/creation_rentalsService');

// Create Rental
exports.createRental = async (req, res) => {
  try {
      const rental = await rentalService.createRental(req.body);
      res.status(201).json({ message: "Rental created successfully!", rentalId: rental });
  } catch (error) {
      res.status(500).json({ message: "Failed to create rental.", error: error.message });
  }
};

// Create Barter
exports.createBarter = async (req, res) => {
  try {
    const barter = await rentalService.createBarter(req.body);
    res.status(201).json({ message: "Barter created successfully!", barterId: barter });
  } catch (error) {
    res.status(500).json({ message: "Failed to create barter.", error: error.message });
  }
};
