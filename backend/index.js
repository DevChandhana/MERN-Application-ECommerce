require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();
const port = process.env.PORT || 8080;

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("mongodb connected successfully!!"))
  .catch((err) => console.log(err));

// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.use('/api', authRoutes);
app.get("/", (req, res) => {
  return res.send("hello buddy!!");
});

app.listen(port, () => console.log(`Im listening on port, ${port}`));
