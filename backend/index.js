require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 8080;

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("mongodb connected successfully!!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  return res.send("hello buddy!!");
});

app.listen(port, () => console.log(`Im listening on port, ${port}`));
