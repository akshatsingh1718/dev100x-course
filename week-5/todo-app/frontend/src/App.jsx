import { useEffect, useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/todos").then(async function(resp){
      const json = await resp.json();
      setTodos(json.todos);
    })

  }, []);

  return (
    <>
      <h1>Todo App</h1>
      <CreateTodo />
      <Todos todos={todos}/>
    </>
  );
}

export default App;
