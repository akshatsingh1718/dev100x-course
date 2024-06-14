const express = require("express");

const port = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.get("/double", (req, res) => {
  const ans=  req.query.n * 2;
  res.send(`<h1>Ans is ${ans}</h1>`);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
