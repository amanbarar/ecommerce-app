const express = require("express");
const colors = require("colors");

//rest objects
const app = express();

//rest api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to home page",
  });
});

const PORT = 8080;

//run listen
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgCyan.white);
});
