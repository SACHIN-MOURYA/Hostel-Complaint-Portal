const express = require("express");
const router = express.Router();

// Importing profile controller functions
const { getUserProfileById, updateUserProfileById } = require('../controllers/Profile');

// Profile routes
router.get('/getUserProfileById/:userId', getUserProfileById);
router.put('/updateUserProfileById', updateUserProfileById);

module.exports = router;
