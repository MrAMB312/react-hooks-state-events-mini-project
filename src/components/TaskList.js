import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {

  return (
    <div className="tasks">
      <ul className="Tasks">
        {tasks.map((task) =>
          <Task
            key={task.text}
            text={task.text}
            category={task.category}
            onDeleteTask={onDeleteTask}
          />
        )}
      </ul>
    </div>
  );
}

export default TaskList;
