import Todo from "./Todo";

function Todos({ todos, update, remove, onToggle, setEditTodo }) {
  return (
    <div className="todo-app">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} remove={remove} onToggle={onToggle} setEditTodo={setEditTodo} update={update} />
      ))}
    </div>
  );
}

export default Todos;
