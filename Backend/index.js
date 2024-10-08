// required dependency
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

// required env string
const PORT = process.env.PORT;

//
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// fileupload add
const fileUpload = require("express-fileupload");
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

// connect with db
const dbConnect = require("./config/database");
dbConnect();

// connect with cloude 
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// routing
const testingRoutes = require("./routes/testingRoutes");
app.use("/api/v1", testingRoutes);

// start server
app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});

