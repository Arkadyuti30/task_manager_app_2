import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import TaskItem from './TaskItem.js';

const TaskList = (props) => {
    const taskProps = {
        taskName: "Brush teeth",
        taskBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
    return (
        <div className="task-list-wrapper">
            <div className="column-wrapper">
                <div className="task-column">
                    <div className="task-header">
                        <h4>TO DO</h4>
                        <hr/>
                    </div>
                    <div className="tasks-holder">
                        <TaskItem taskName={taskProps.taskName} taskBody={taskProps.taskBody}/>
                        <TaskItem taskName={taskProps.taskName} taskBody={taskProps.taskBody}/>
                        <TaskItem taskName={taskProps.taskName} taskBody={taskProps.taskBody}/>
                    </div>
                </div>
                <div className="task-column">
                    <div className="task-header">
                        <h4>WIP</h4>
                        <hr/>
                    </div>
                    <div className="tasks-holder">
                        <TaskItem taskName={taskProps.taskName} taskBody={taskProps.taskBody}/>
                        <TaskItem taskName={taskProps.taskName} taskBody={taskProps.taskBody}/>
                    </div>
                </div>
                <div className="task-column">
                    <div className="task-header">
                        <h4>DONE</h4>
                        <hr/>
                    </div>
                    <div className="tasks-holder">
                        <TaskItem taskName={taskProps.taskName} taskBody={taskProps.taskBody}/>
                    </div>
                </div>
            </div>
            <div className="fab-button">
                <AddIcon fontSize="large" sx={{ color: 'white' }}/>
            </div>
        </div>
    )
}

export default TaskList;