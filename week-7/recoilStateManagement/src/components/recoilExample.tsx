import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { CountContext } from "../context";
import { countAtom, evenSelector } from "../store/atoms/count";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const RecoilExample = () => {
  console.log("[Re render] RecoilExample");

  const [count, setCount] = useState(0);

  // wrap anyone that wants to use the teleported value inside a provider

  return (
    <>
      <h1>Recoil state Example</h1>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  );
};

const EvenCountRenderer = () => {
  const isEven = useRecoilValue(evenSelector);

  useEffect(()=>{
    console.log("[useEffect] EvenCountRenderer");
  }, [isEven]);

  return <div>{isEven ? "It is even" : null}</div>
}

const Count = () => {
  // This will also re render even if its not using any context
  console.log("[Re render] Count ");
  return (
    <>
      <CountRenderer />
      <EvenCountRenderer />
      <Buttons />
    </>
  );
};

const CountRenderer = () => {
  console.log("[Re render] CountRenderer");

  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
};

const Buttons = () => {
  console.log("[Re render] Buttons");

  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);


  return (
    <>
      <button
        onClick={() => {
          setCount(count => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count => count - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
};

export default RecoilExample;
