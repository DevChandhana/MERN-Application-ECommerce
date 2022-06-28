require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("mongodb connected successfully!!"))
  .catch((err) => console.log(err));

// middlewares
app.use(bodyparser.json());
app.use(cookieparser());
app.use(cors());

app.get("/", (req, res) => {
  return res.send("hello buddy!!");
});

app.listen(port, () => console.log(`Im listening on port, ${port}`));
