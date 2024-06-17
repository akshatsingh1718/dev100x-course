import { useState, useEffect, useMemo, memo } from "react";


const ChildComponent = memo(({ value }) => {
    console.log('ChildComponent rendered');
    return <div>{value}</div>;
});

function MemoCompApp() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    return (
        <div>
            <h1>Memo Comp App</h1>
            <button onClick={() => setCount(count + 1)}>Increment to use memo</button>
            <br />
            <br />
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <br />
            <br />
            <ChildComponent value={count} />
        </div>
    );
}

export default MemoCompApp;
