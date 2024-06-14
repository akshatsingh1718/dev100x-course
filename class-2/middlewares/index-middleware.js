const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

function userMiddleware(req, res, next) {
  const user = req.headers.username;
  const password = req.headers.password;
  if (user !== "akshat" && password !== "root") {
    res.status(401).json({ msg: "Unauthorized" });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kidneyId = req.query.kidneyId;
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({ msg: "Invalid kidneyId" });
  } else {
    next();
  }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.json({
    msg: "Your are healthy",
  });
});

app.get("/kidney-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.json({
    msg: "Your kidney is healthy",
  });
});

app.get("/heart-checkup", userMiddleware, (req, res) => {
  res.json({
    msg: "Your heart is healthy",
  });
});

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
