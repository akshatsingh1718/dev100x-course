import React, { useEffect } from "react";
import { todoAtom, todosAtomFamily } from "../store/atoms/todo";
import {
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
  useRecoilStateLoadable,
} from "recoil";

function AtomFamLoadableExample() {
  // const updateTodo = useSetRecoilState(todosAtomFamily(2));

  // useEffect(() => {
  //   setTimeout(() => {
  //     updateTodo({
  //       id: 2,
  //       title: "New Todo",
  //       description: "New Description",
  //     });
  //   }, 3000);
  // });
  return (
    <>
      <h1>Atom family</h1>
      <Todo id={1} />

      <Todo id={2} />
    </>
  );
}

const Todo = ({ id }) => {
  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));

  /*
  Todo = {
    content : actual data,
    state : "loading", "hasValue" or "hasError"
  }
  */
  if (todo.state == "loading"){
    return <h1>Loading .....</h1>
  }
  else if (todo.state == "hasValue"){
    return <>
    <h1>{todo.contents.title}</h1>
    <h5>{todo.contents.description}</h5>
  </>
  }else if (todo.state == "hasError"){
    return <h1>Error occured while fetching the todos</h1>
  }

};

export default AtomFamLoadableExample;
