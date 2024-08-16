/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
const TodoList = ({ task, deleteTodo }) => {
  return (
    <div className='Todo'>
      <p>{task.task}</p>
      <div>
        <FaEdit className='edit-icon' />
        <MdDeleteSweep
          className='delete-icon '
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

export default TodoList;
