import { TodoForm } from "./TodoForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";

function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done !</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <TodoList task={todo} key={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoWrapper;
