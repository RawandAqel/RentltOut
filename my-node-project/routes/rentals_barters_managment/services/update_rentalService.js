const db = require('../../database/db_connection_promise');

// Update the rental status after owner accepts/rejects the rental request
exports.updateRentalStatus = async (rentalId, status) => {
  try {
    // Update the rental status
    const result = await db.query(
      'UPDATE rentals SET status = ? WHERE id = ?',
      [status, rentalId]
    );

    const [rental] = await db.query('SELECT item_id FROM rentals WHERE id = ?', [rentalId]);
    const productId = rental[0]?.item_id;

    // Update product availability based on rental status
    if (productId) {
      const isAvailable = status === 'approved' ? 0 : (status === 'returned' ? 1 : 0); // Set availability based on status
      await db.query('UPDATE items SET is_available = ? WHERE id = ?', [isAvailable, productId]);
    }

    return { success: true, message: 'Rental status updated and product availability changed' };


      
  } catch (error) {
    throw new Error('Error updating rental status: ' + error.message);
  }
};



// Update the barter status after owner accepts/rejects the barter request
exports.updateBarterStatus = async (barterId, status) => {
  try {
    // Update the barter status
    const result = await db.query(
      'UPDATE barters SET status = ? WHERE id = ?',
      [status, barterId]
    );


    const [barter] = await db.query('SELECT item_id, barter_item_id FROM barters WHERE id = ?', [barterId]);
      const itemId = barter[0]?.item_id;
      const barterItemId = barter[0]?.barter_item_id;

      // Update availability based on barter status
if (itemId) {
  const itemAvailable = status === 'approved' ? 0 : (status === 'returned' ? 1 : 0); // Set availability based on status
  if (itemAvailable !== null) {
    await db.query('UPDATE items SET is_available = ? WHERE id = ?', [itemAvailable, itemId]);
  }
}

if (barterItemId) {
  const barterItemAvailable = status === 'approved' ? 0 : (status === 'returned' ? 1 : 0); // Set availability based on status
  if (barterItemAvailable !== null) {
    await db.query('UPDATE items SET is_available = ? WHERE id = ?', [barterItemAvailable, barterItemId]);
  }
}

      return { success: true, message: 'Barter status updated and product availability changed' };

      
  } catch (error) {
    throw new Error('Error updating barter status: ' + error.message);
  }
};



// Update the availability status of a product
exports.updateProductAvailability = async (productId, isAvailable) => {
  try {
    const result = await db.query(
      'UPDATE items SET is_available = ? WHERE id = ?',
      [isAvailable, productId]
    );
    if (result.affectedRows === 0) {
      return { success: false, message: 'item not found' };
    }
    return { success: true, message: 'item status updated' };
  } catch (error) {
    throw new Error('Error updating product availability: ' + error.message);
  }
};
