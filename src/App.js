import { useState, useEffect, useCallback } from "react";

import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  // Save to Local
  const saveLocalTodos = useCallback(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem(`todos`));
      setTodos(todoLocal);
    }
  };

  // Use Effect
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  }, [todos, saveLocalTodos]);

  // Handle Delete
  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle Reminder
  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, complete: !todo.complete } : todo)));
  };

  // Add Todo
  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodo = { id, ...todo };

    setTodos([...todos, newTodo]);
  };

  // Handle Edit
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  // Handle Enter
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log(event.key);
    }
  };

  return (
    <div className="container">
      <Header />
      <AddTodo onAdd={addTodo} onKey={handleKeyPress} editTodo={editTodo} setEditTodo={setEditTodo} todos={todos} setTodos={setTodos} />
      <div className="todo-app">
        {todos.length > 0 ? <Todos todos={todos} remove={handleRemove} onToggle={toggleComplete} setEditTodo={setEditTodo} update={handleEdit} /> : "No Plans Todo"}
        <Footer />
      </div>
    </div>
  );
}

export default App;
