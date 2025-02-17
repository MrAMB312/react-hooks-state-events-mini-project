import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [newTask, setNewTask] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Code")

  function handleNewTaskChange(event) {
    setNewTask(event.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTaskObj = {
      text: newTask,
      category: selectedCategory
    }

    onTaskFormSubmit(newTaskObj);

    setNewTask("");
    setSelectedCategory("Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask} onChange={handleNewTaskChange} placeholder="Enter new task here" />
      </label>
      <label>
        Category
        <select name="category" value={selectedCategory} onChange={handleCategoryChange}>
          {categories
            .filter(category => category !== "All")
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

