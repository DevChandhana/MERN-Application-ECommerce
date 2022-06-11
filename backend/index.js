const express = require("express");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  return res.send("hello buddy!!");
});

app.listen(port, () => console.log(`Im listening on port, ${port}`));
