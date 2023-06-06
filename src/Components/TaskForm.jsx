import React from "react";
import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now(),
    });
    setTask("");
  };
  return (
    <div className="add_task">
      <form className="todo" onSubmit={handleTaskSubmit}>
        <div className="form_item">
          <input
            type="text"
            id="task"
            className="add_task_input"
            placeholder="New Task"
            required
            autoFocus
            value={task}
            autoComplete="off"
            onInput={(e) => setTask(e.target.value)}
          />

          <button type="submit" aria-label="add task">
            <img src="add.svg" alt="plus icon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
