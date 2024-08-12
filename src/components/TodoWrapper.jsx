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
  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done !</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList />
    </div>
  );
}

export default TodoWrapper;
