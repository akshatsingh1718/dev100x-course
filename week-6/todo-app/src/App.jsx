import { useState, useEffect } from "react";
import "./App.css";
import TodoApp from "./components/TodoApp";
import MemoApp from "./components/MemoApp";
import CallbackApp from "./components/CallbackApp";
import CustomHook from "./components/CustomHook";
import MemoCompApp from "./components/MemoCompApp";

function App() {

  return (
    <>
    {/* <TodoApp /> */}
    <MemoApp />
    <MemoCompApp />
    {/* <CallbackApp /> */}
    {/* <CustomHook /> */}
    </>
  );
}

export default App;
