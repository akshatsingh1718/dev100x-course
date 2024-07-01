import React from "react";
import RecoilExample from "./components/recoilExample";
import LinkedinExample from "./components/LinkedinExample";
import AsyncQueriesExample from "./components/AsyncQueriesExample";
import AtomFamExample from "./components/AtomFamExample";
import AtomFamLoadableExample from "./components/AtomFamLoadableExample";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      {" "}
      <AtomFamLoadableExample />{" "}
    </RecoilRoot>
  );
}

export default App;
