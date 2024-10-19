const itemService  = require('../services/get_user_available_itemsService'); 

// Get the products available for trade for the user

exports.getUserBarterItems = async (req, res) => {
  const userId = req.params.user_id; 
  try {
      const items = await itemService.getUserBarterItems(userId); 

      if (!items || items.length === 0) { 
          return res.status(404).json({ message: 'No items available for barter.' }); 
      }

      res.status(200).json({
          message: 'Items retrieved successfully.', 
          items: items 
      });
  } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching items: ' + error.message }); // أعد رسالة الخطأ
  }
};
