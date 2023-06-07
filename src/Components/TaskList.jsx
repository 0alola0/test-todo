import React from "react";
import ListItem from "./ListItem";
const TaskList = ({ tasks, toggleCheckmark, deleteTask, inDeleted, showDone, undoTask, showFinished }) => {
    let filteredTasks = tasks;
    if (!showFinished) {
      filteredTasks = filteredTasks.filter(task => task.checked !== showDone);
    }
  return (
    <ul className="tasks">
      {filteredTasks.map((task, index) => (
        <ListItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCheckmark={toggleCheckmark}
          index={index}
          undoTask={undoTask}
          inDeleted={inDeleted}
        />
      ))}
    </ul>
  );
};

export default TaskList;
