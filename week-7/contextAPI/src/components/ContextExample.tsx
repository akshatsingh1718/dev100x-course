import React from "react";
import { useContext, useState } from "react";
import { CountContext } from "../context";

const ContextExample = () => {
  console.log("[Re render] ContextExample");

  const [count, setCount] = useState(0);

  // wrap anyone that wants to use the teleported value inside a provider

  return (
    <>
      <h1>Context Example</h1>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </>
  );
};

const Count = () => {
  // This will also re render even if its not using any context
  console.log("[Re render] Count ");
  return (
    <>
      <CountRenderer />
      <Buttons />
    </>
  );
};

const CountRenderer = () => {
  console.log("[Re render] CountRenderer");

  const { count } = useContext(CountContext);
  return <div>{count}</div>;
};

const Buttons = () => {
  console.log("[Re render] Buttons");

  const { count, setCount } = useContext(CountContext);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
};

export default ContextExample;
