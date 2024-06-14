const express = require("express");

const app = express();
app.use(express.json()); // parse the body as json
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

app.use(userMiddleware); // This will call usermiddleware to all the routes below it

app.get("/health-checkup", kidneyMiddleware, (req, res) => {
  res.json({
    msg: "Your are healthy",
  });
});

/**
 * The json body of /kidney-checkup 
 * {
    "kidneys" : [1, 2, 4]
    }

    But if the body is empty then it will raise an error and 
    our exception string will be returned
 */
app.post("/kidney-checkup", kidneyMiddleware, (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;
  res.json({
    msg: `You have ${kidneyLength} healthy kidneys.`,
  });
});

app.get("/heart-checkup", (req, res) => {
  res.json({
    msg: "Your heart is healthy",
  });
});

/**
 * Global error catches
 * 
 * This middleware will be called when we got the error
 */
app.use((err, req, res, next)=>{
    // People also do this to maintain error counts
    // errorCount += 1
    res.json({
        msg: "Sorry something is wrong with our servers"
    })
})

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
