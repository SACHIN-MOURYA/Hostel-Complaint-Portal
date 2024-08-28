const express = require("express");
const router = express.Router();

// Importing file upload controller functions
const { imageUpload } = require('../controllers/fileUpload');

// File upload routes
router.post('/imageUpload', imageUpload);

module.exports = router;
