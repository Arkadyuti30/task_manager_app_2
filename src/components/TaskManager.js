import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import TaskList from './TaskList.js';

const TaskManager = (props) => {
    const tasks = [{
        taskName: "Brush teeth",
        taskBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },{
        taskName: "Brush teeth",
        taskBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },{
        taskName: "Brush teeth",
        taskBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },{
        taskName: "Brush teeth",
        taskBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }]
    return (
        <div className="task-list-wrapper">
            <div className="column-wrapper">
                <TaskList header="TODO" tasks={tasks}/>
                <TaskList header="WIP" tasks={tasks}/>
                <TaskList header="DONE" tasks={tasks}/>
            </div>
            <div className="fab-button">
                <AddIcon fontSize="large" sx={{ color: 'white' }}/>
            </div>
        </div>
    )
}

export default TaskManager;