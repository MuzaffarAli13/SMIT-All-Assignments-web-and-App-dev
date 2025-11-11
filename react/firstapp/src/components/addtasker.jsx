import React, { useState } from "react";

function Addtasker() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() === "") {
      alert("Please enter a valid task..");
    } else {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDelete = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className="counterbox" style={{ marginBottom: "20px" }}>
      <h1>Task Manager</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={handleTaskChange}
          placeholder="Enter Task"
        />
        <button onClick={handleAddTask}>Add Task</button>

        <ul>
          {tasks.map((item, index) => (
            <li key={index}>
              {item}
              <button
                onClick={() => handleDelete(index)}
                style={{
                  marginLeft: "10px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Addtasker;
