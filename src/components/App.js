import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);

  function handleCategoryClick(selectedCategory) {
    selectedCategory === "All"
      ? setTasks(TASKS)
      : setTasks(TASKS.filter(task => task.category === selectedCategory));
  }

  function handleDeleteTask(taskText) {
    setTasks((tasks) => tasks.filter(task => task.text !== taskText))
  };

  function handleFormSubmit(newTaskObj) {
    setTasks([...tasks, newTaskObj]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} onCategoryClick={handleCategoryClick} />
      <NewTaskForm categories={categories} onTaskFormSubmit={handleFormSubmit} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
