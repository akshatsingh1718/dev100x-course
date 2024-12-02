import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = async function (url) {
  const data = await fetch(url);
  const json = await data.json();
  return json;
};
const DataFetchSWR = () => {
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/todos",
    fetcher
  );

  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <h1>Todos</h1>
      {data.todos.map((todo) => (
        <Track todo={todo} />
      ))}
    </>
  );
};

function Track({ todo }) {
  return <div>{todo.todo}</div>;
}

export default DataFetchSWR;
