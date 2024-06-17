import { useState, useEffect, useMemo, memo } from "react";

function MemoApp() {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    let count = useMemo(() => {
        console.log("use memo called");
        let finalCount = 0;
        for (let i = 0; i <= inputValue; i++) finalCount += i;

        return finalCount;
    }, [inputValue]);

    return (
        <>
            <h1>Memo App</h1>
            <input onChange={(e) => {
                setInputValue(e.target.value);
            }} placeholder={"Find sum from 1 to n"} />
            <br />
            Sum from 1 to {inputValue} is {count}
            <br />
            <button onClick={() => {
                setCounter(counter + 1);
            }}>Counter ({counter}) </button>
        </>
    );
}


export default MemoApp;
