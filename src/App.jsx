import { useState, useEffect } from "react";
import useLocalStorage from "./Hooks/useLocalStorage";
import "./App.scss";
import { TaskForm, TaskList } from "./Components";

function App() {
  const [tasks, setTasks] = useLocalStorage("todo.tasks", []);
  const [finishedTasks, setFinishedTasks] = useLocalStorage(
    "finished.tasks",
    []
  );

  //localStorage.clear()
  const [showFinished, setShowFinished] = useState(false);
  const [showDone, setShowDone] = useState(true);
  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };
  const [todo, setTodo] = useState(
    tasks.filter((task) => !task.checked).length
  );
  const [done, setDone] = useState(tasks.filter((task) => task.checked).length);

  useEffect(() => {
    setTodo(tasks.filter((task) => !task.checked).length);
    setDone(tasks.filter((task) => task.checked).length);
  }, [tasks]);

  const addFinishedTask = (id) => {
    const taskToAdd = tasks.find((task) => task.id === id);
    setFinishedTasks((prevState) => [...prevState, taskToAdd]);
  };
  const undoTask = (id) => {
    const taskToAdd = finishedTasks.find((task) => task.id === id);
    setTasks((prevState) => [...prevState, taskToAdd]);
    deleteFinishedTask(id);
  };
  const deleteTask = (id) => {
    addFinishedTask(id);
    let clone = tasks.slice();
    let temporaryTasks = clone.filter((t) => t.id !== id);
    setTasks(temporaryTasks);
  };
  const deleteFinishedTask = (id) => {
    let clone = finishedTasks.slice();
    let temporaryTasks = clone.filter((t) => t.id !== id);
    setFinishedTasks(temporaryTasks);
  };
  const toggleCheckmark = (id) => {
    if (showFinished) {
      let temporaryTasks = finishedTasks.map((task) =>
        task.id == id ? { ...task, checked: !task.checked } : task
      );
      setFinishedTasks(temporaryTasks);
    } else {
      let temporaryTasks = tasks.map((task) =>
        task.id == id ? { ...task, checked: !task.checked } : task
      );
      setTasks(temporaryTasks);
    }
  };
  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  // useEffect(() => {
  //   if (showFinished) {
  //     let clone = finishedTasks.slice();
  //     const filteredTasks = clone.filter(task => task.checked !== showDone);
  //     const filteredTodo = filteredTasks.filter(task => !task.checked).length;
  //     const filteredDone = filteredTasks.filter(task => task.checked).length;
  //     setTodo(filteredTodo);
  //     setDone(filteredDone);
  //   } else {
  //     let clone = finishedTasks.slice();
  //     const filteredTasks = clone.filter(task => task.checked !== showDone);
  //     const filteredTodo = filteredTasks.filter(task => !task.checked).length;
  //     const filteredDone = filteredTasks.filter(task => task.checked).length;
  //     setTodo(filteredTodo);
  //     setDone(filteredDone);
  //   }
  // }, [showFinished, finishedTasks, tasks]);
  useEffect(() => {
    if (showFinished) {
      let clone = tasks.slice();
    } else {
      let clone = finishedTasks.slice();
    }
  }, [tasks, finishedTasks, showFinished]);

  return (
    <div className="intro_display">
      <div className="container">
        <div className="actions">
          <div className="info">
            <div className="dark">
              <button
                onClick={() => {
                  setShowDone(true);
                  setShowFinished(false);
                }}
              >
                To do <p>{todo}</p>
              </button>
            </div>
            <div className="light">
              <button
                onClick={() => {
                  setShowDone(false);
                  setShowFinished(false);
                }}
              >
                Done <p>{done}</p>
              </button>
            </div>
          </div>
          <div className="deleted">
            <button onClick={toggleFinished} className="red">
              <img src="white-trash.svg" alt="" />
              deleted
            </button>
          </div>
        </div>
        <div className="tasks_container">
          {tasks ? (
            <TaskList
              tasks={showFinished ? finishedTasks : tasks}
              showFinished={showFinished}
              showDone={showDone}
              inDeleted={showFinished ? true : false}
              deleteTask={showFinished ? deleteFinishedTask : deleteTask}
              toggleCheckmark={toggleCheckmark}
              undoTask={undoTask}
            />
          ) : (
            ""
          )}
        </div>
        {showDone && !showFinished ? <TaskForm addTask={addTask} /> : ""}
      </div>
    </div>
  );
}

export default App;
