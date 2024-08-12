function TodoForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className='TodoForm'>
      <input
        type='text'
        className='todo-input'
        placeholder='What is the task today?'
      />
      <button type='submit' className='todo-btn'>
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
