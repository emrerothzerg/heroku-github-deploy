const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Emre says hi!!!");
});

app.listen(port);
