// index.js
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
// Users
const authRoutes = require('./routes/users/auth'); 
const signupRoutes = require('./routes/users/signup'); 
const logoutRoutes = require('./routes/users/logout'); 
// Items
const get_all_itemsRoutes = require('./routes/items/get_all_items'); 
const items_filterRoutes = require('./routes/items/items_filter'); 

const app = express();

// Middleware to parse JSON
app.use(express.json());

//insurance safty verifecation damagepolicy
const verifyIdentityRoutes = require('./routes/users/verify_identity');
const depositManagementRoutes = require('./routes/rentals/deposit_management');
const insuranceManagementRoutes = require('./routes/rentals/insurance_management');
const reportUserRoutes = require('./routes/users/report_user');
const documentManagementRoutes = require('./routes/users/document_management');
const manualVerificationRoutes = require('./routes/users/manual_verification');
const damagePolicyRoutes = require('./routes/rentals/damage_policy');


app.use('/api/verify', verifyIdentityRoutes);
app.use('/api/deposit', depositManagementRoutes);
app.use('/api/insurance', insuranceManagementRoutes);
app.use('/api/report', reportUserRoutes);
app.use('/api/documents', documentManagementRoutes);
app.use('/api/manual-verification', manualVerificationRoutes);
app.use('/api/damage-policy', damagePolicyRoutes);





//Users
app.use('/api', authRoutes);
app.use('/api', signupRoutes);
app.use('/api', logoutRoutes);
// Items
app.use('/api', get_all_itemsRoutes);
app.use('/api', items_filterRoutes);






// Rental routes...aseel
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/rentals_barters_managment/rentals_routes/get_user_available_items'));  // Get available items for users
app.use('/api', require('./routes/rentals_barters_managment/rentals_routes/creation_rentals'));  // Rental-related routes
app.use('/api', require('./routes/rentals_barters_managment/rentals_routes/status_update'));  //change (rentals-barters-item availability) status





// Connect to MySQL
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL database');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


