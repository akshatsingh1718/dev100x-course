export const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={1}>
          <h4>{todo.title}</h4>
          <h5>{todo.description}</h5>
          <button>{todo.completed ? "Completed" : "Mark as completed"}</button>
        </div>
      ))}
    </div>
  );
};
