import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
const TodoList = () => {
  return (
    <div className='Todo'>
      <p>Go To The School</p>
      <div>
        <FaEdit className='edit-icon' />
        <MdDeleteSweep className='delete-icon ' />
      </div>
    </div>
  );
};

export default TodoList;
