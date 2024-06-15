import { useState, useEffect } from "react";
import "./App.css";
import { Todo } from "./components/Todo";

let counter = 3;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "gym loha",
    },
    {
      id: 2,
      title: "go to kitchen",
      description: "khana",
    },
  ]);

  useEffect(() => {
    alert("Added a todo");

    return () => {};
  }, []);

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: counter++,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  };

  return (
    <>
      <h1>Todos</h1>
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </>
  );
}

export default App;
