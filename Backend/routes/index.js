const express = require("express");
const router = express.Router();

// Importing all route modules
const authRoutes = require('./auth');
const profileRoutes = require('./profile');
const complaintRoutes = require('./complaint');
const caretakerRoutes = require('./caretaker');
const adminRoutes = require('./admin');
const fileUploadRoutes = require('./fileUpload');
const wardenRoutes = require('./warden');
const chiefWardenRoutes = require('./chiefWarden');

// Using routes
router.use('/auth', authRoutes);
router.use('/profile', profileRoutes);
router.use('/complaint', complaintRoutes);
router.use('/caretaker', caretakerRoutes);
router.use('/admin', adminRoutes);
router.use('/fileUpload', fileUploadRoutes);
router.use('/warden', wardenRoutes);
router.use('/chiefWarden', chiefWardenRoutes);

module.exports = router;
