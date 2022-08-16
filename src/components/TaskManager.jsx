import React from "react";
import { useState } from "react";
import TaskItem from "./TaskItem";
import background from "../assets/img/background.jpg";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;

    setTasks([input, ...tasks]);
  };

  const handleDelete = (idx) => {
    const newTasks = tasks.filter((task) => task !== idx);
    setTasks(newTasks);
  };
  return (
    <div className="relative h-screen w-full bg-slate-800/95/">
      <img
        src={background}
        alt=""
        className="absolute w-full h-full objec-cover mix-blend-overlay"
      />

      <div className="h-screen bg-blue-600 flex justify-center items-center">
        <div className="max-w-xl bg-white rounded-xl px-5 py-10 z-10">
          <form
            onSubmit={handleSubmit}
            className="space-x-5 w-full flex  w-[30rem] mb-10 justify-between"
          >
            <input
              type="text"
              className="border-2 border-blue-400 p-2 rounded-md outline-none w-10/12"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white text-lg py-2 px-7 rounded-md"
              disabled={input === ""}
            >
              Add
            </button>
          </form>

          <div className="space-y-2 overflow-y-auto h-56">
            {tasks.map((task) => (
              <TaskItem task={task} handleDelete={handleDelete} />
            ))}
            {/* {<TaskItem task={"task"} />} */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TaskManager;