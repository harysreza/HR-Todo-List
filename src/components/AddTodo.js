import { useState, useEffect } from "react";

function AddTodo({ todos, editTodo, setEditTodo, setTodos, onAdd, onKey }) {
  const [text, setText] = useState("");
  // const [reminder, setReminder] = useState(false)

  const updateTodo = (text, id) => {
    const newTodo = todos.map((todo) => (todo.id === id ? { text, id } : todo));
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setText(editTodo.text);
    } else {
      setText("");
    }
  }, [setText, editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editTodo) {
      if (!text) {
        alert("Please add a todo");
        return;
      }

      onAdd({ text });

      setText("");
    } else {
      updateTodo(text, editTodo.id);
    }
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <div className="form-control">
        <input type="text" placeholder="Add Todo" value={text} onChange={(e) => setText(e.target.value)} />
        <input type="submit" value="add" onKeyPress={onKey} />
      </div>
    </form>
  );
}

export default AddTodo;
