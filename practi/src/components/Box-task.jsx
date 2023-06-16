import { useState } from "react";
import { FaTrash, FaPen } from "react-icons/fa";

export function Tasks({ item }) {
  const [isEdit, setIsEdit] = useState(false);

  function Form() {
    return (
      <form>
        <input type="text" />
        <button>Update</button>
      </form>
    );
  }

  function TaskInfo() {
    return (
      <div className="box-task">
        {item.title}
        <FaPen
          onClick={() => {
            setIsEdit(true);
          }}
        />

        <FaTrash />
      </div>
    );
  }

  return <>{isEdit ? <Form /> : <TaskInfo />}</>;
}
