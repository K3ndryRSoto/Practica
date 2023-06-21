import { useState, useId } from "react";
import "../styles/style-Box-Task.css";
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
        <input
          type="text"
          onChange={handleChange}
          value={newValue}
          className="input-update"
        />

        <FaCheck className="icon update" onClick={handleClicUpdate} />
      </form>
    );
  };

  const TaskInfo = () => {
    const [isComplete, setIsComplete] = useState(false);
    const idname = useId();
    const handleComplete = () => {
      const styleTask = document.getElementById(idname);
      if (isComplete == false) {
        setIsComplete(true);

        styleTask.style.backgroundColor = "#98FF95";
        styleTask.style.textDecoration = "line-through";
        styleTask.style.fontWeight = "bold";
      } else if (isComplete == true) {
        styleTask.style.backgroundColor = "#fff";
        styleTask.style.textDecoration = "none";

        setIsComplete(false);
      }
    };
    return (
      <div
        id={idname}
        className="box-task"
        onClick={() => {
          handleComplete();
        }}
      >
        {item.title}
        <div className="box-icon">
          <FaPen
            className="icon pen"
            onClick={() => {
              setIsEdit(true);
            }}
          />

          <FaTrash
            className="icon trash"
            onClick={(e) => deleteTask(item.id)}
          />
        </div>
      </div>
    );
  };

  return <>{isEdit ? <Form /> : <TaskInfo />}</>;
}
