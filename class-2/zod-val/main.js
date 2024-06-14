const express = require("express");
const zod = require("zod");

const app = express();
app.use(express.json()); // parse the body as json
const PORT = process.env.PORT || 3000;

const schema = zod.array(zod.number());

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

app.post("/kidney-checkup", userMiddleware, (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(411).json({
      msg: "Input is invalid",
    });
    return;
  }
  res.json({
    msg: `You have ${kidneys.length} healthy kidneys.`,
  });
});

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
