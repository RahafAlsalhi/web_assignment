import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "Study useState and useEffect hooks",
    },
    {
      id: 2,
      title: "Build To-Do App",
      description: "Use functional components with props",
    },
  ]);

  const handleAddTodo = (todoData) => {
    const newTodo = {
      id: Date.now(),
      ...todoData,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo } : todo))
    );
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} data={todo} onToggle={toggleTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
