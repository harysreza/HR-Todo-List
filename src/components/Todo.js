import Icons from "./Icons";

function Todo({ todo, update, remove, onToggle, setEditTodo }) {
  return (
    <div className={`todo ${todo.complete ? "complete" : ""}`}>
      <h3>{todo.text}</h3>
      <Icons update={update} remove={remove} todo={todo} setEditTodo={setEditTodo} onToggle={onToggle} />
    </div>
  );
}

export default Todo;
