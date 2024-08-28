const express = require("express");
const router = express.Router();

// Importing chief warden controller functions
const { loginChiefWarden, chiefWarden, createChiefWarden } = require('../controllers/ChiefWarden');

// Chief Warden routes
router.post('/loginChiefWarden', loginChiefWarden);
router.get('/chiefWardenDashboard', chiefWarden);
router.post('/createChiefWarden', createChiefWarden);

module.exports = router;
