const express = require("express");
const router = express.Router();

// Importing complaint controller functions
const {
  createPersonalComplaint, getMyComplaints, getCommonComplaint,
  markOngoing, markSolved, rejectComplaint,
  sendMailToCaretaker, sendMailFromChiefWarden
} = require('../controllers/Complaint');

// Complaint routes
router.post('/createPersonalComplaint', createPersonalComplaint);
router.get('/getMyComplaints/:userId', getMyComplaints);
router.get('/getCommonComplaint/:userId', getCommonComplaint);
router.post('/markOngoing', markOngoing);
router.post('/markSolved', markSolved);
router.post('/rejectComplaint', rejectComplaint);
router.post('/sendMailToCaretaker', sendMailToCaretaker);
router.post('/sendMailFromChiefWarden', sendMailFromChiefWarden);

module.exports = router;
