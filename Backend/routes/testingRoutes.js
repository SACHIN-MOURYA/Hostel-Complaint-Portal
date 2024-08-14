
// required dependency
const cookieParser = require("cookie-parser");
const express = require("express");
const router = express.Router();

const app = express();

app.use(cookieParser)

// importing required controler
// auth controller
const {sendOtp, signup, login, logout, } = require('../controller/Auth');





// auth routing
router.post('/sendOtp' , sendOtp);
router.post('/signup' , signup);
router.post('/login' , login);
router.get('/logout' , logout);



// profile routing
router.get('/getUserProfileById/:userId', getUserProfileById);
router.put('/updateUserProfileById', updateUserProfileById);













// other routing

// router.get('/caretakerInfo',careTakerInfo);
// router.get('/WardenInfo',WardenInfo);
router.post('/loginWarden',loginWarden)
router.get('/wardenDashboard/:userId',warden);

router.post('/createChiefWarden',createChiefWarden)

router.post('/loginChiefWarden',loginChiefWarden);
router.get('/chiefWardenDashboard',chiefWarden);

// export route
module.exports = router; 