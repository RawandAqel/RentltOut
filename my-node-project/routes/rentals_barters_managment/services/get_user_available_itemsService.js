const db = require('../../database/db_connection_promise'); 
 
// Function to fetch user barter items
exports.getUserBarterItems = async (user_id) => {
  try {
    // Check if the user exists
    const userQuery = `SELECT * FROM users WHERE id = ?`; 
    const [userRows] = await db.query(userQuery, [user_id]);

    // If the user is not found, return an empty array
    if (userRows.length === 0) {
      return []; // Return empty array instead of null
    }

    // Fetch the available items
    const query = `SELECT * FROM items WHERE user_id = ? AND is_available = 1`;
    const [items] = await db.query(query, [user_id]);

    return items; // Return the items array
  } catch (error) {
    throw new Error('Error fetching barter items: ' + error.message);
  }
};
