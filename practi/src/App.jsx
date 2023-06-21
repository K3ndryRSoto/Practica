import { useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import "./styles/App.css";
import { Tasks } from "./components/Box-task";

function App() {
  const [info, setInfo] = useState("");
  const [task, setTask] = useState([]);

  const uuid = uuidv4();

  const handleOnchange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setInfo(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!info) {
      return Swal.fire("The text box is empty");
    }

    const newTask = {
      id: uuid,
      title: info,
    };
    const pre = [...task];
    pre.unshift(newTask);
    setTask(pre);
    setInfo("");
  };

  const handleUpdate = (id, value) => {
    const pre = [...task];
    const item = pre.find((item) => item.id === id);
    item.title = value;
    setTask(pre);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const pre = task.filter((item) => item.id !== id);
        setTask(pre);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div className="box-major">
      <form className="box">
        <label className="label">Task Of The Day?</label>
        <input
          placeholder="Enter a Task"
          name="title"
          type="text"
          value={info}
          className="input-text"
          onChange={handleOnchange}
        />
        <button onClick={handleSubmit} className="button-send">
          SEND
        </button>
      </form>

      <div className="container-task">
        {task.map((item) => (
          <Tasks
            key={item.id}
            item={item}
            task={task}
            update={handleUpdate}
            deleteTask={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
