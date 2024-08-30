const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// initialize app
const app = express();

// config
dotenv.config();
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// imports
const userRoute = require("./routes/user");
const infoRoute = require("./routes/info");

// routes
app.get("/", (req, res) => {
  res.send("Hello Developer");
});
app.use("/user", userRoute);
app.use("/info", infoRoute);

// start the server
app.listen(process.env.PORT || 5004, () => {
  console.log(`Server running at port ${process.env.PORT || 5004}`);
});
