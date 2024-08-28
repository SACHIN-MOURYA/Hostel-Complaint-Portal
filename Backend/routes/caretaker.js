const express = require("express");
const router = express.Router();

// Importing caretaker controller functions
const { loginCareTaker, getAllComplaints } = require('../controllers/CareTaker');

// Caretaker routes
router.post('/loginCareTaker', loginCareTaker);
router.get('/getAllComplaints/:userId', getAllComplaints);

module.exports = router;
