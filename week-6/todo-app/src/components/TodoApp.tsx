import { useState, useEffect } from "react";
import { Todo } from "./Todo";
import { TodoFromId } from "./TodoFromId";

let counter = 3;
function TodoApp() {
    const [selectedId, setSelectedId] = useState(1);

    return (
        <>
            <h1>Todos</h1>
            <button onClick={() => setSelectedId(1)}>1</button>
            <button onClick={() => setSelectedId(2)}>2</button>
            <button onClick={() => setSelectedId(3)}>3</button>
            <button onClick={() => setSelectedId(4)}>4</button>

            <TodoFromId id={selectedId} />
        </>
    );
}

export default TodoApp;
