const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username !== "akshat" || password !== "root") {
    res.status(401).send("Unauthorized");
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).send("Invalid kidneyId");
    return;
  }

  res.json({
    msg: "Your kidney is healthy",
  });
});

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
