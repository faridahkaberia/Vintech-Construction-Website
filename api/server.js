require('dotenv').config(); // Load environment variables

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000; 

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../'))); 

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Single route handler for all pages
app.get(['/', '/about', '/services', '/shop', '/projects', '/contact', '/flatroof', '/basement', '/flooring', '/app-membrane', '/water-retention', '/wall', '/consultancy'], (req, res) => {
    const page = req.path === '/' ? 'index.html' : req.path.slice(1) + '.html';
    res.sendFile(path.join(__dirname, '../', page));
});


// Handle contact form submissions
app.post('/contact', (req, res) => {
    const { name, email, phone, message } = req.body;

    // Email options
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending message');
        }
        res.send(`Message received from ${name}`);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});