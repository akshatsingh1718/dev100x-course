const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({ msg: "You send the wrong inputs" });
    return;
  }

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo create",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  console.log(todos);

  res.json({
    todos,
  });
});

app.put("/completed", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = updateTodo.safeParse(createPayload);
//   console.log(parsedPayload); // { success: true, data: { id: '666b3ec5e2917d52e785aac4' } }
  if (!parsedPayload.success) {
    res.status(411).json({ msg: "You send the wrong inputs" });
    return;
  }

  await todo.updateMany(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({msg: `Todo id=${req.body.id} completed`})
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
