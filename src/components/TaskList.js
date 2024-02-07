import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import TaskItem from './TaskItem.js';

const TaskList = (props) => {
    const taskProps = {
        taskName: "Brush teeth",
        taskBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }

    const tasks = props.tasks.map((task, i) => 
       <TaskItem taskName={task.taskName} taskBody={task.taskBody} key={i}/>
    )
    return (
        <div className="task-column">
            <div className="task-header">
                <h4>{props.header}</h4>
                <hr/>
            </div>
            <div className="tasks-holder">
               {tasks}
            </div>
        </div>
    )
}

export default TaskList;