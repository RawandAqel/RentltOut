// emailService.js
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // البريد الإلكتروني
    pass: process.env.EMAIL_PASS  // كلمة المرور الخاصة بالتطبيق
  }
});

function sendNotification(userEmail, message) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: 'Logistics Status Update',
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email notification:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

module.exports = { sendNotification };
