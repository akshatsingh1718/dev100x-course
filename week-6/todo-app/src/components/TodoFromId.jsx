import { useEffect, useState } from "react";
import { Todo } from "./Todo";
import axios from "axios";

export const TodoFromId = ({ id }) => {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`).then((resp) => {
      setTodo(resp.data.todo);
    });
  }, [id]);

  return (
    <>
      <Todo title={todo.title} description={todo.description} />
    </>
  );
};
