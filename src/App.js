// src/App.js
import React from 'react';
import TaskItem from './components/TaskItem.js';
import InputField from './components/InputField.js';
import AddTaskForm from './components/AddTaskForm.js';
import TaskList from './components/TaskList.js';
import TaskManager from './components/TaskManager.js';

function App() {
  const taskProps = {
    taskName: "Brush teeth",
    taskBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
  return (
    <div>
      <h1>Task Manager</h1>
      {/*<TaskItem taskName={taskProps.taskName} taskBody={taskProps.taskBody}/>*/}
      {/*<AddTaskForm/>*/}
      <TaskManager/>
    </div>
  );
}

export default App;
