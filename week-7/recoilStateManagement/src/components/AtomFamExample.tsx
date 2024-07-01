import React, { useEffect } from "react";
import { todoAtom, todosAtomFamily } from "../store/atoms/todo";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";

function AtomFamExample() {
  const updateTodo = useSetRecoilState(todosAtomFamily(2));

  useEffect(() => {
    setTimeout(() => {
      updateTodo({
        id: 2,
        title: "New Todo",
        description: "New Description",
      });
    }, 3000);
  });
  return (
    <>
      <h1>Atom family</h1>
      <Todo id={1} />

      <Todo id={2} />
    </>
  );
}

const Todo = ({ id }) => {
  const currentTodo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      <h1>{currentTodo.title}</h1>
      <h5>{currentTodo.description}</h5>
    </>
  );
};

export default AtomFamExample;
