import "./App.css";
import React, { useState, memo } from "react";

function App() {
  const [header, setheader] = useState("Aryan");
  const changeHeader = () => {
    setheader(Math.random());
  };

  return (
    <>
      <button onClick={changeHeader}>
        change header (will re render all components)
      </button>
      <Header title={header}></Header>
      <HeaderWithButtons />
      <MemoHeaderWithButtons />
      <MemoHeader title="Memo Aryan"></MemoHeader>
      <MemoHeader title="Memo Aryan"></MemoHeader>
      <MemoHeader title="Memo Aryan"></MemoHeader>
    </>
  );
}

const HeaderWithButtons = () => {
  const [header, setheader] = useState("Aryan");
  const changeHeader = () => {
    setheader(Math.random());
  };

  return (
    <>
      <button onClick={changeHeader}>
        change header (will only rerender this button and below header)
      </button>
      <Header title={header}></Header>
    </>
  );
};

const Header = ({ title }) => {
  return <div>{title}</div>;
};

const MemoHeaderWithButtons = () => {
  const [header, setheader] = useState("Aryan");
  const changeHeader = () => {
    setheader(Math.random());
  };

  return (
    <>
      <button onClick={changeHeader}>
        change header (this will not be changed because of memo)
      </button>
      <MemoHeader title={header}></MemoHeader>
    </>
  );
};

const MemoHeader = React.memo(function header({ title }) {
  return <div>{title}</div>;
});

export default App;
