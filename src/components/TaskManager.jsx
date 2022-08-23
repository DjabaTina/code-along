import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { v4 as uuid } from "uuid";
// import background from "../assets/background.jpg"

function TaskManager() {
  const [tasks, setTasks] = useState(() => {
    const tasks = localStorage.getItem("tasks");
    if (!tasks) return [];
    return JSON.parse(tasks);
  });
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;

    const newTask = {
      id: uuid(),
      text: input,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setInput("");
  };

  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="h-screen w-screen bg-blue-300 flex justify-center items-center rounded-xl px-5 py-10">
      <div className="max-w-xl w-full max-h-96 bg-white p-8 rounded-lg z-10">
        <form
          onSubmit={handleSubmit}
          className="space-x-5 flex w-[30rem] mb-10"
        >
          <input
            type="text"
            className="border-2 border-blue-400 p-2 rounded-md outline-none w-10/12"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white text-lg py-2 px-7 rounded-md cursor-pointer"
            disabled={input === ""}
          >
            Add
          </button>
        </form>
        <div className="space-y-2 overflow-y-auto h-56">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskManager;
