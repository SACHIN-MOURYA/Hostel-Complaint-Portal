const express = require("express");
const router = express.Router();

// Importing auth controller functions
const { sendOtp, signup, login, logout } = require('../controllers/Auth');

// Auth routes
router.post('/sendOtp', sendOtp);
router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;
