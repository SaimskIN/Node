const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/", (req, res) => {
  res.send("DevOps CI/CD Demo");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});

