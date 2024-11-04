const express = require('express');
const connection = require('../database/db_connection_promise');

const router = express.Router();

// Payment processing for rentals
router.put('/payment', async (req, res) => {
    const { rentalId, userId, amount, paymentMethod } = req.body;

    try {
        // Check if rental exists, is approved, and belongs to the correct user
        const [rentalResult] = await connection.execute(
            'SELECT total_price, status, item_id FROM rentals WHERE id = ? AND renter_id = ?;',
            [rentalId, userId]
        );

        console.log(rentalResult); // Log results for debugging

        // Verify rental data is returned, otherwise send error response
        if (!Array.isArray(rentalResult) || rentalResult.length === 0) {
            return res.status(404).json({ message: 'Rental not found or unauthorized.' });
        }

        // Check if rental status is approved
        if (rentalResult[0].status !== 'approved') {
            return res.status(400).json({ message: 'Rental request has not been approved yet.' });
        }

        // Verify payment amount is sufficient
        const totalPrice = rentalResult[0].total_price;
        if (amount < totalPrice) {
            return res.status(400).json({ message: 'Amount is less than the total rental cost.' });
        }

        // Validate payment method
        const validPaymentMethods = ['PayPal', 'CreditCard'];
        if (!validPaymentMethods.includes(paymentMethod)) {
            return res.status(400).json({ message: 'Invalid payment method. Use PayPal or CreditCard.' });
        }

        // Check if payment for this rental already exists
        const paymentCheckQuery = 'SELECT * FROM payments WHERE rental_id = ?;';
        const [paymentCheckResult] = await connection.execute(paymentCheckQuery, [rentalId]);

        if (Array.isArray(paymentCheckResult) && paymentCheckResult.length > 0) {
            return res.status(400).json({ message: 'Payment for this rental has already been processed.' });
        }

        // Insert payment record into payments table
        const paymentQuery = 'INSERT INTO payments (rental_id, amount, payment_method, payment_status, transaction_date) VALUES (?, ?, ?, ?, NOW())';
        const [paymentResult] = await connection.execute(paymentQuery, [rentalId, amount, paymentMethod, 'completed']);

        const paymentId = paymentResult.insertId;

        // Calculate platform revenue (10%) and insert into revenue table
        const platformRevenue = amount * 0.10;
        const revenueQuery = 'INSERT INTO revenue (rentalID, platformRevenue, ownerRevenue, revenueDate) VALUES (?, ?, ?, NOW())';
        await connection.execute(revenueQuery, [rentalId, platformRevenue, amount - platformRevenue]);

        // Fetch product and user information
        const itemId = rentalResult[0].item_id;
        const itemQuery = 'SELECT title, description, price_per_day FROM items WHERE id = ?;';
        const [itemResult] = await connection.execute(itemQuery, [itemId]);

        const userQuery = 'SELECT username FROM users WHERE id = ?;';
        const [userResult] = await connection.execute(userQuery, [userId]);

        // Verify product and user exist
        if (!Array.isArray(itemResult) || itemResult.length === 0) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        if (!Array.isArray(userResult) || userResult.length === 0) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Prepare response data
        const itemDetails = itemResult[0];
        const userName = userResult[0].username;

        res.status(201).json({
            message: 'Payment processed successfully.',
            payment_id: paymentId,
            rental_info: {
                item: {
                    title: itemDetails.title,
                    description: itemDetails.description,
                    price_per_day: itemDetails.price_per_day,
                },
                user: userName,
                total_price: totalPrice,
            },
        });
    } catch (error) {
        console.error('Error processing payment:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
