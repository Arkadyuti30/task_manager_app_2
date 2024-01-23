import React, { useState } from 'react';
import './styles.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const TaskItem = (props) => {
    const [expandItem, setExpandItem] = useState(false)
    const handleExpandClick = () => {
        setExpandItem(!expandItem)
    }
    return (
        <div className="taskWrapper">
            <div className="taskNameWrapper">
                <span className="taskName">{props.taskName}</span>
                {
                    expandItem ?
                    <ExpandLessIcon onClick={handleExpandClick} fontSize="medium"/>
                    :
                    <ExpandMoreIcon onClick={handleExpandClick} fontSize="medium"/>
                }
            </div>
            {
                expandItem && 
                <div className="taskBodyWrapper">
                    <p className="taskBody">{props.taskBody}</p>
                    <div className="button-wrapper">
                        <button className='primary-button'>WIP</button>
                        <button className='secondary-button'>DONE</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default TaskItem;