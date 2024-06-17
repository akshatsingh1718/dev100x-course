import { useState, useEffect, useMemo, memo, useCallback } from "react";

function MemoApp() {
    const [counter, setCounter] = useState(0);

    // function inputFunction() {
    //     console.log("Hi there");
    // }

    // This will re render the Child Buttoncomponent as well
    // const inputFunction = () =>{
    //     console.log("Hi there");
    // }

    // This will not re render the child as function is not changing
    const inputFunction = useCallback(() =>{
        console.log("Hi there");
    }, []);

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>Click me ({counter})</button>
            <br />
            <ButtonComponent inputFunction={inputFunction} />
        </>
    );
}

const ButtonComponent = memo(({ inputFunction } : {inputFunction : any}) => {
    console.log("child re renders");
    return <div><button onClick={inputFunction}>Child Button Clicked</button></div>
})

export default MemoApp;
