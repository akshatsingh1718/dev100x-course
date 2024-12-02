import { useState, useEffect } from "react";

const useDebounce = (value, timeout) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);
    return () => {
      clearTimeout(id);
    };
  }, [timeout, value]);

  return debouncedValue;
};

const Debounce = () => {
  const [word, setWord] = useState("");
  const debouncedValue = useDebounce(word, 500); // 500ms delay

  useEffect(() => {
    console.log(`Search: ${debouncedValue}`);
  }, [debouncedValue]);

  return (
    <>
      <h1>Searching: {debouncedValue}</h1>
      <input
        type="text"
        value={word}
        placeholder="Search.."
        onChange={(e) => setWord(e.target.value)}
      />
    </>
  );
};

export default Debounce;
