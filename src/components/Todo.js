import Icons from "./Icons";

function Todo({ todo, update, remove, onToggle, setEditTodo }) {
  return (
    <div className={`todo ${todo.complete ? "complete" : ""}`}>
      <h3>
        {todo.text} <Icons update={update} remove={remove} todo={todo} setEditTodo={setEditTodo} onToggle={onToggle} />
      </h3>
    </div>
  );
}

export default Todo;
