import { createContext } from "react";

export const CountContext = createContext({
  count: 0,
  setCount: (newCount) => {}, // initial is empty but will be populated afterwards in ContextExample component
});
