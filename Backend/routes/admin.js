const express = require("express");
const router = express.Router();

// Importing admin controller functions
const { createHostel } = require('../controllers/Hostel');
const { createCaretaker } = require('../controllers/CareTaker');
const { createWarden } = require('../controllers/Warden');

// Admin routes
router.post('/createHostel', createHostel);
router.post('/createCaretaker', createCaretaker);
router.post('/createWarden', createWarden);

module.exports = router;
