import React from "react";
import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(task);

    const newTask = {
      id: tasks.length + 1,
      task: task,
    };

    setTasks([newTask, ...tasks]);
    setTask("");
    console.log(tasks);
  };

  const doneTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-10 ">
      <div>
        <form  onSubmit={handleFormSubmit}>
          <input className="border-2 py-2 px-4 mr-4 rounded-sm"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a Task"
          />
          <button className="border-2 py-2 px-4 hover:bg-black hover:text-white rounded-sm">Submit</button>
        </form>
      </div>
      <div className="flex justify-center items-center gap-5 ">
        {tasks.map((data) => (
          <Card task={data.task} doneTask={doneTask} id={data.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
