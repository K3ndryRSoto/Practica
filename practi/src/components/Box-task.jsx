import { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
export function Tasks({ item }) {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      {item.title}
      <FaPen />
      <FaTrash />
    </div>
  );
}
