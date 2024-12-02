import { useEffect, useState } from "react";
import axios from "axios";

const useTodos = (n) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTodos = async (n) => {
    const resp = await axios.get("https://dummyjson.com/todos");
    console.log(n);
    console.log(resp);
    setTodos(resp.data.todos);
    setLoading(false);
  };

  // start the side effect at first and if n changes
  useEffect(() => {
    // reload every n seconds
    const intervalId = setInterval(() => {
      fetchTodos(n);
    }, n * 1000);
    // fetch at the starting as well
    fetchTodos(n);

    return () => {
      clearInterval(intervalId);
    };
  }, [n]);

  return { todos, loading };
};

const DataFetchingAutoReload = () => {
  const { todos, loading } = useTodos(5);

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

export default DataFetchingAutoReload;
