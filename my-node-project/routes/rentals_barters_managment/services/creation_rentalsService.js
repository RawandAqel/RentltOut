const db = require('../../database/db_connection_promise'); 

// Create a rental
exports.createRental = async (rentalData) => {
  const { item_id, renter_id, start_date, end_date } = rentalData;
  
  const queryPrice = `SELECT price_per_day FROM items WHERE id = ?`;
    const [itemRows] = await db.query(queryPrice, [item_id]);

    if (itemRows.length === 0) {
      throw new Error('Item not found');
    }

    const pricePerDay = itemRows[0].price_per_day;

    const startDate = new Date(start_date);
    const endDate = new Date(end_date);
    const duration = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)); 

    const total_price = pricePerDay * duration; 

    const queryInsert = `INSERT INTO rentals (item_id, renter_id, start_date, end_date, total_price, status, created_at) 
    VALUES (?, ?, ?, ?, ?, 'pending', NOW())`;
    const result = await db.query(queryInsert, [item_id, renter_id, start_date, end_date, total_price]);

    console.log("Insert Result:", result);
    return result.insertId;
};

// Create a barter
exports.createBarter = async (barterData) => {
  const { item_id, barter_item_id, renter_id, start_date, end_date } = barterData;
  const query = `INSERT INTO barters (item_id, barter_item_id, renter_id, start_date, end_date, status, created_at) 
                 VALUES (?, ?, ?, ?, ?, 'pending', NOW())`;
  const result = await db.query(query, [item_id, barter_item_id, renter_id, start_date, end_date]);
  return result.insertId;
};
