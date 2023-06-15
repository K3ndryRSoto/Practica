import { useState } from "react";
import Swal from "sweetalert2";
import { FaPen, FaTrash } from "react-icons/fa";
export function Tasks({ item }) {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="box-task">
      {item.title}
      <FaPen
        onClick={() => {
          Swal.fire("This can't be edited yet");
          className = "icon";
        }}
      />
      <FaTrash
        onClick={() => {
          Swal.fire("This still can't be removed");
          className = "icon";
        }}
      />
    </div>
  );
}
