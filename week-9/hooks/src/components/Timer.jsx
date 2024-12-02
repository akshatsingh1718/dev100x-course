import { useEffect, useState } from "react";

const useInterval = (fn, timeout) => {
  useEffect(() => {
    const id = setInterval(fn, timeout);

    return () => {
      clearInterval(id);
    };
  }, [fn, timeout]);
};

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useInterval(() => setTimer((prv) => prv + 1), 1000);
  return <h1>Timer is {timer}</h1>;
};

export default Timer;
