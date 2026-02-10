import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function addTodo() {
    if (!text.trim()) return;

    setTodos(prev => [
      ...prev,
      {
        id: Date.now(),
        title: text.trim()
      }
    ]);

    setText("");
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  return (
    <div style={{ maxWidth: "300px" }}>
      <h2>Todo List</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add a todo..."
        />
        <button onClick={addTodo} style={{ marginLeft: "5px" }}>
          Add
        </button>
      </div>

      {todos.length === 0 && <p>No items yet</p>}

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ display: "flex", gap: "8px" }}>
            <span>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete Todo</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
