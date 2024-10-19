const mysql = require('mysql2/promise'); 

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

const connectToDatabase = async () => {
    try {
        // تحقق من الاتصال بقاعدة البيانات
        await connection.getConnection();
        console.log('Connected to the MySQL database.');
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
};

connectToDatabase();

module.exports = connection; 
