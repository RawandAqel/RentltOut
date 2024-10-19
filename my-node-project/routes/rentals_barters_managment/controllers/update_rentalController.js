const rentalService = require('../services/update_rentalService');

// Controller function to change rental status
exports.updateRentalStatus = async (req, res) => {
  const { rentalId } = req.params;
  const { status } = req.body;

  try {
    const result = await rentalService.updateRentalStatus(rentalId, status);
    if (!result.success) {
      return res.status(404).json({ message: result.message });
    }

    res.json({ message: 'Rental status updated successfully', details: result.message }); 
  } catch (error) {
    res.status(500).json({ message: 'An error occurred: ' + error.message }); 
  }
};


// Controller function to change barter status
exports.updateBarterStatus = async (req, res) => {
  const { barterId } = req.params;
  const { status } = req.body;

  try {
    const result = await rentalService.updateBarterStatus(barterId, status);
    if (!result.success) {
      return res.status(404).json({ message: result.message }); 
    }

    res.json({ message: 'Barter status updated successfully', details: result.message }); 
  } catch (error) {
    res.status(500).json({ message: 'An error occurred: ' + error.message }); 
  }
};


// Controller function to change product availability status
exports.changeProductAvailability = async (req, res) => {
  const { productId } = req.params;
  const { isAvailable } = req.body; // The new availability status
  
  console.log(rentalService);

  try {
    const result = await rentalService.updateProductAvailability(productId, isAvailable);
    if (!result) {
      return res.status(404).json({ message: 'Product not found or you are not authorized to change this product' });
    }

    res.json({ message: 'Product availability updated successfully' }); 
  } catch (error) {
    res.status(500).json({ message: 'An error occurred: ' + error.message });
  }
};


