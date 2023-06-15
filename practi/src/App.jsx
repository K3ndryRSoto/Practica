import Swal from "sweetalert2/dist/sweetalert2.js";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
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

    const newTask = {
      id: uuid,
      title: info,
      complete: false,
    };

    const pre = [...task];
    pre.unshift(newTask);
    setTask(pre);
  };

  return (
    <>
      <form className="box">
        <input
          name="title"
          type="text"
          className="input-text"
          onChange={handleOnchange}
        />
        <button onClick={handleSubmit}>SEND</button>
      </form>
      <div className="container-task"></div>

      <div>
        {task.map((item) => (
          <Tasks key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
export default App;
