import { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Optional useEffect for initialization (runs only once)
  useEffect(() => {
    // Could initialize todos here if needed, but left empty for simplicity
    console.log('Component mounted');
  }, []); // Empty dependency array to run only once

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Prevent empty todos
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <form onSubmit={addTodo} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a todo"
            className="border p-2 flex-grow rounded"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Add
          </button>
        </div>
      </form>
      {todos.length === 0 ? (
        <p className="text-gray-500">No todos yet. Add one!</p>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li key={todo.id} className="flex justify-between items-center border p-2 rounded">
              <span>{todo.text}</span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;