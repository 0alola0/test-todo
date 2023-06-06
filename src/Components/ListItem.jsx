import React from "react";
import { useState } from "react";

const ListItem = ({
  task,
  toggleCheckmark,
  deleteTask,
  inDeleted,
  undoTask,
}) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckox = (e) => {
    setIsChecked(!isChecked);
    toggleCheckmark(task.id);
  };

  return (
    <li className="task">
      <input
        checked={isChecked}
        type="checkbox"
        className={isChecked ? "completor checked" : "completor"}
        onChange={handleCheckox}
      />
      <label
        htmlFor={task.id}
        className={isChecked ? "label-container crossed" : "label-container"}
      >
        <img
          src={isChecked ? "checked.svg" : "un-checked.svg"}
          alt=""
          onClick={handleCheckox}
        />
        {task.name}
      </label>
      <div>
        {inDeleted ? (
          <button className="undo" onClick={() => undoTask(task.id)}>
            <img src="undo.svg" alt="" />
          </button>
        ) : (
          ""
        )}
        <button className="delete" onClick={() => deleteTask(task.id)}>
          <img src="trash.svg" alt="" />
        </button>
      </div>
    </li>
  );
};

export default ListItem;
