import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <CustomButton count={count} setCount={setCount} />
        <CustomButton count={count + 10} setCount={setCount} />
        <CustomButton count={count - 10} setCount={setCount} />
        <CustomButton count={count * 10} setCount={setCount} />

      </div>
    </>
  );
}

function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }

  // return <button >Counter {props.count}</button>
  return <button onClick={onClickHandler}>Counter {props.count}</button>;
}

export default App;
