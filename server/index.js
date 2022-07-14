const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

if (!config.get("jwtPrivateKey")) {
  console.log("FATAL ERROR: JwtPrivateKey not defined");
  process.exit(1);
}

let mongoDB = "mongodb://localhost:27017/forum";

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("could not connect to mongoDB"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.send("request successfully sent!");
});


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});