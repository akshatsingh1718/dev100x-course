import { useState, useEffect, useMemo, memo, useCallback } from "react";
import axios from "axios";
import { Todo } from "./Todo";

function useTodos() {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        axios.get(`https://sum-server.100xdevs.com/todos`).then((resp) => {
            setTodo(resp.data.todos);
        });
    }, []);

    return todo;

}

function CustomHook() {
    let todos = useTodos();


    return (
        <>
            <h1>Custom Hook</h1>
            {
                todos.map((todo) => <Todo title={todo.title} description={todo.description} />)

            }
        </>
    );
}

export default CustomHook;
