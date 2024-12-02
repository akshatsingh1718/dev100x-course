import { useEffect, useState } from "react";
import axios from "axios";

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTodos = async () => {
    const resp = await axios.get("https://dummyjson.com/todos");
    console.log(resp);
    setTodos(resp.data.todos);
    setLoading(false);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  return { todos, loading };
};

const DataFetching = () => {
  const { todos, loading } = useTodos();

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <Track todo={todo} />
      ))}
    </>
  );
};

function Track({ todo }) {
  return <div>{todo.todo}</div>;
}

export default DataFetching;
