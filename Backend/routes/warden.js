const express = require("express");
const router = express.Router();

// Importing warden controller functions
const { loginWarden, warden } = require('../controllers/Warden');

// Warden routes
router.post('/loginWarden', loginWarden);
router.get('/wardenDashboard/:userId', warden);

module.exports = router;
