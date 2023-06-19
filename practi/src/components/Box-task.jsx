import { useState } from "react";
import { FaTrash, FaPen, FaCheck } from "react-icons/fa";

export function Tasks({ item, update, deleteTask }) {
  const [isEdit, setIsEdit] = useState(false);

  const Form = () => {
    const [newValue, setNewValue] = useState(item.title);

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    const handleChange = (e) => {
      const value = e.target.value;
      setNewValue(value);
    };

    const handleClicUpdate = () => {
      update(item.id, newValue);
      setIsEdit(false);
    };

    return (
      <form className="box-form" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newValue} />

        <FaCheck className="button-update" onClick={handleClicUpdate} />
      </form>
    );
  };

  const TaskInfo = () => {
    return (
      <div className="box-task">
        {item.title}
        <FaPen
          onClick={() => {
            setIsEdit(true);
          }}
        />

        <FaTrash onClick={(e) => deleteTask(item.id)} />
      </div>
    );
  };

  return <>{isEdit ? <Form /> : <TaskInfo />}</>;
}
